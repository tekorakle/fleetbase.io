#!/usr/bin/env node

import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { callClaudeJson } from './claude.mjs';
import { contentAgentConfig } from './content-agent.config.mjs';
import { getGhostPost, updateGhostPost } from './ghost-admin.mjs';
import { normalizeArticleLinks } from './links.mjs';
import { RevisedArticleSchema } from './schemas.mjs';

function parseArgs(argv) {
  const args = {
    id: process.env.GHOST_POST_ID || '',
    slug: process.env.GHOST_POST_SLUG || '',
    prompt: process.env.REVISION_PROMPT || '',
    promptFile: process.env.REVISION_PROMPT_FILE || '',
    dryRun: process.env.APPLY_GHOST_REVISION !== 'true',
    allowPublished: process.env.ALLOW_PUBLISHED_REVISION === 'true',
    outputDir:
      process.env.CONTENT_AGENT_OUTPUT_DIR ||
      path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'fleetbase-content-agent-revision'),
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--id') args.id = argv[index + 1] || '';
    if (arg === '--slug') args.slug = argv[index + 1] || '';
    if (arg === '--prompt') args.prompt = argv[index + 1] || '';
    if (arg === '--prompt-file') args.promptFile = argv[index + 1] || '';
    if (arg === '--dry-run') args.dryRun = true;
    if (arg === '--apply') args.dryRun = false;
    if (arg === '--allow-published') args.allowPublished = true;
    if (arg === '--output-dir') args.outputDir = argv[index + 1] || args.outputDir;
  }

  return args;
}

async function readPrompt(args) {
  if (args.promptFile) {
    return fs.readFile(args.promptFile, 'utf8');
  }

  return args.prompt;
}

async function writeOutput(outputDir, name, value) {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, name), typeof value === 'string' ? value : `${JSON.stringify(value, null, 2)}\n`);
}

async function appendStepSummary(markdown) {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, `${markdown.trim()}\n`);
}

function toArticleInput(post) {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.custom_excerpt || post.excerpt || '',
    html: post.html || '',
    metaTitle: post.meta_title || post.title,
    metaDescription: post.meta_description || post.custom_excerpt || post.excerpt || '',
    status: post.status,
    updatedAt: post.updated_at,
    tags: (post.tags || []).map((tag) => tag.name),
  };
}

async function reviseWithClaude({ post, revisionPrompt }) {
  const system =
    'You revise Fleetbase Ghost blog drafts. Preserve factual accuracy, keep the article specific to Fleetbase, and output clean semantic HTML. Do not include scripts, styles, iframes, markdown fences, or comments.';
  const prompt = JSON.stringify(
    {
      task: 'Revise this Ghost blog post according to the editor prompt.',
      editorPrompt: revisionPrompt,
      article: toArticleInput(post),
      requirements: [
        'Preserve accurate Fleetbase product and API claims.',
        `Use ${contentAgentConfig.siteUrl} for all Fleetbase website links and ${contentAgentConfig.siteUrl}/docs for all documentation links. Never use fleetbase.ghost.io for docs or website links.`,
        'Keep or improve SEO metadata.',
        'Keep semantic HTML suitable for Ghost.',
        'Do not publish or schedule the post.',
        'Return a concise revisionSummary of material changes.',
      ],
      requiredJsonShape: {
        title: 'string',
        slug: 'string',
        excerpt: 'string <= 300 chars',
        html: 'string',
        metaTitle: 'string <= 80 chars',
        metaDescription: 'string <= 180 chars',
        revisionSummary: ['string'],
      },
    },
    null,
    2,
  );

  const revised = await callClaudeJson({
    system,
    prompt,
    schema: RevisedArticleSchema,
    maxTokens: 8192,
  });

  return normalizeArticleLinks(revised);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const revisionPrompt = (await readPrompt(args)).trim();
  const identifier = args.id || args.slug;
  const identifierType = args.id ? 'id' : 'slug';

  if (!identifier) {
    throw new Error('Provide --slug, --id, GHOST_POST_SLUG, or GHOST_POST_ID.');
  }

  if (!revisionPrompt) {
    throw new Error('Provide --prompt, --prompt-file, REVISION_PROMPT, or REVISION_PROMPT_FILE.');
  }

  const post = await getGhostPost(identifier, contentAgentConfig, { identifierType });

  if (post.status !== 'draft' && !args.allowPublished) {
    throw new Error(
      `Refusing to revise ${post.status} post "${post.slug}". Pass --allow-published only if you intentionally want to update a non-draft post.`,
    );
  }

  await writeOutput(args.outputDir, `original-${post.slug}.json`, toArticleInput(post));
  await writeOutput(args.outputDir, `original-${post.slug}.html`, post.html || '');

  const revised = await reviseWithClaude({ post, revisionPrompt });
  await writeOutput(args.outputDir, `revised-${revised.slug}.json`, revised);
  await writeOutput(args.outputDir, `revised-${revised.slug}.html`, revised.html);

  let updatedPost = null;

  if (!args.dryRun) {
    updatedPost = await updateGhostPost(post, revised, contentAgentConfig);
    await writeOutput(args.outputDir, `updated-${updatedPost.slug}.json`, updatedPost);
  }

  await appendStepSummary(`
## Fleetbase Ghost Draft Revision

- Mode: ${args.dryRun ? 'Dry run, Ghost was not updated' : 'Applied to Ghost'}
- Original post: ${post.title} (${post.slug})
- Revised title: ${revised.title}
- Revised slug: ${revised.slug}
- Revision summary: ${revised.revisionSummary.join('; ') || 'No summary returned'}
- Ghost status: ${updatedPost?.status || post.status}
- Artifacts: ${args.outputDir}
`);

  console.log(`[content-agent:revise] ${args.dryRun ? 'Dry-run complete' : 'Ghost draft updated'}.`);
  console.log(`[content-agent:revise] Artifacts written to ${args.outputDir}`);
}

main().catch(async (error) => {
  console.error(`[content-agent:revise] ${error.message}`);
  await appendStepSummary(`
## Fleetbase Ghost Draft Revision

The revision failed.

\`\`\`
${error.message}
\`\`\`
`);
  process.exitCode = 1;
});
