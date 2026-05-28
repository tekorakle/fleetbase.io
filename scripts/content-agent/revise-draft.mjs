#!/usr/bin/env node

import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { callClaudeJson } from './claude.mjs';
import { contentAgentConfig } from './content-agent.config.mjs';
import { normalizeFleetbaseArticle, validateFleetbaseArticle } from './content-rules.mjs';
import { getGhostPost, updateGhostPost } from './ghost-admin.mjs';
import { RevisedArticleSchema } from './schemas.mjs';

function parseArgs(argv) {
  const args = {
    id: process.env.GHOST_POST_ID || '',
    slug: process.env.GHOST_POST_SLUG || '',
    prompt: process.env.REVISION_PROMPT || '',
    promptFile: process.env.REVISION_PROMPT_FILE || '',
    dryRun: process.env.APPLY_GHOST_REVISION !== 'true',
    allowPublished: process.env.ALLOW_PUBLISHED_REVISION === 'true',
    ruleRepairAttempts: Number(process.env.REVISION_RULE_REPAIR_ATTEMPTS || 2),
    bypassContentRules: process.env.BYPASS_CONTENT_RULES === 'true',
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
    if (arg === '--bypass-content-rules') args.bypassContentRules = true;
    if (arg === '--rule-repair-attempts') {
      args.ruleRepairAttempts = Number(argv[index + 1] || args.ruleRepairAttempts);
    }
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
  const html = post.html || '';
  const wordCount = countWords(html);

  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.custom_excerpt || post.excerpt || '',
    html,
    wordCount,
    metaTitle: post.meta_title || post.title,
    metaDescription: post.meta_description || post.custom_excerpt || post.excerpt || '',
    status: post.status,
    updatedAt: post.updated_at,
    tags: (post.tags || []).map((tag) => tag.name),
  };
}

function htmlToText(html) {
  return String(html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function countWords(html) {
  const text = htmlToText(html);

  if (!text) return 0;

  return text.split(/\s+/).filter(Boolean).length;
}

function decodeHtmlBase64(value) {
  if (!value) return '';

  return Buffer.from(value.replace(/\s+/g, ''), 'base64').toString('utf8');
}

function truncateText(value, maxLength) {
  const normalized = String(value || '').replace(/\s+/g, ' ').trim();

  if (normalized.length <= maxLength) return normalized;

  return normalized.slice(0, maxLength - 1).trimEnd();
}

function chooseMetadataValue(...values) {
  return values.find((value) => String(value || '').trim().length > 0) || '';
}

function normalizeRevisedArticle(revised, post) {
  const existing = toArticleInput(post);
  const html = revised.html || decodeHtmlBase64(revised.htmlBase64);

  return normalizeFleetbaseArticle({
    ...revised,
    html,
    metaTitle: truncateText(
      chooseMetadataValue(revised.metaTitle, revised.title, existing.metaTitle, existing.title),
      80,
    ),
    metaDescription: truncateText(
      chooseMetadataValue(
        revised.metaDescription,
        revised.excerpt,
        existing.metaDescription,
        existing.excerpt,
      ),
      180,
    ),
  });
}

function validateRevisionLength({ post, revised }) {
  const originalWordCount = countWords(post.html || post.plaintext || '');
  const revisedWordCount = countWords(revised.html);

  if (originalWordCount < 600) {
    return { originalWordCount, revisedWordCount, minimumWordCount: 0, passed: true };
  }

  const minimumWordCount = Math.floor(originalWordCount * 0.7);

  if (revisedWordCount < minimumWordCount) {
    throw new Error(
      `Revised article appears truncated: ${revisedWordCount} words vs ${originalWordCount} original words. Expected at least ${minimumWordCount} words.`,
    );
  }

  return { originalWordCount, revisedWordCount, minimumWordCount, passed: true };
}

async function reviseWithClaude({ post, revisionPrompt, previousRevision = null, ruleIssues = [] }) {
  const article = toArticleInput(post);
  const system =
    'You revise Fleetbase Ghost blog drafts. Preserve factual accuracy, keep the article specific to Fleetbase, and output clean semantic HTML. Do not include scripts, styles, iframes, markdown fences, or comments.';
  const prompt = JSON.stringify(
    {
      task: previousRevision
        ? 'Repair the revised Ghost blog post so it satisfies all Fleetbase content rules.'
        : 'Revise this Ghost blog post according to the editor prompt.',
      editorPrompt: revisionPrompt,
      fleetbaseEditorialRules: contentAgentConfig.contentStrategy.editorialRules,
      blockingRuleIssues: ruleIssues,
      article,
      previousRevision,
      requirements: [
        'Preserve accurate Fleetbase product and API claims.',
        `Use ${contentAgentConfig.siteUrl} for all Fleetbase website links and ${contentAgentConfig.siteUrl}/docs for all documentation links. Never use fleetbase.ghost.io for docs or website links.`,
        'If blockingRuleIssues are present, remove or rewrite the violating language instead of explaining the issue.',
        'For ad hoc order flows, say the order is broadcast to nearby drivers who accept or decline in Navigator. Do not mention orchestrator, manual dispatch, or driver assignment for that flow.',
        'Do not mention platform-level activity definitions; activity is defined by the order config.',
        'Keep or improve SEO metadata.',
        'Keep semantic HTML suitable for Ghost.',
        'Do not publish or schedule the post.',
        'Return a concise revisionSummary of material changes.',
        `Do not summarize, shorten, or truncate the article. Preserve the original depth and target at least ${Math.max(article.wordCount, 1200)} words unless the original is shorter.`,
        'Return the complete revised article body in the html field as semantic HTML.',
      ],
      requiredJsonShape: {
        title: 'string',
        slug: 'string',
        excerpt: 'string <= 300 chars',
        html: 'complete revised semantic HTML article body',
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
    maxTokens: 12000,
  });

  return normalizeRevisedArticle(revised, post);
}

async function reviseUntilRulesPass({ post, revisionPrompt, outputDir, maxAttempts, bypassContentRules }) {
  console.log('[content-agent:revise] Requesting initial Claude revision.');
  let revised = await reviseWithClaude({ post, revisionPrompt });
  let ruleCheck = validateFleetbaseArticle(revised);
  await writeOutput(outputDir, `rule-check-${revised.slug}-attempt-1.json`, ruleCheck);
  console.log(
    `[content-agent:revise] Initial revision returned with ${ruleCheck.blockingIssues.length} blocking rule issue(s).`,
  );

  if (ruleCheck.blockingIssues.length > 0 && bypassContentRules) {
    console.warn(
      `[content-agent:revise] Content rule bypass is enabled; skipping Claude repair attempts and applying the revision with warnings: ${ruleCheck.blockingIssues.join('; ')}`,
    );
    return { revised, ruleCheck };
  }

  for (let attempt = 1; ruleCheck.blockingIssues.length > 0 && attempt <= maxAttempts; attempt += 1) {
    console.warn(
      `[content-agent:revise] Fleetbase content rules blocked attempt ${attempt}. Asking Claude to repair: ${ruleCheck.blockingIssues.join('; ')}`,
    );
    revised = await reviseWithClaude({
      post,
      revisionPrompt,
      previousRevision: revised,
      ruleIssues: ruleCheck.blockingIssues,
    });
    ruleCheck = validateFleetbaseArticle(revised);
    await writeOutput(outputDir, `rule-check-${revised.slug}-attempt-${attempt + 1}.json`, ruleCheck);
    console.log(
      `[content-agent:revise] Repair attempt ${attempt} returned with ${ruleCheck.blockingIssues.length} blocking rule issue(s).`,
    );
  }

  return { revised, ruleCheck };
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

  console.log(`[content-agent:revise] Fetching Ghost post by ${identifierType}: ${identifier}`);
  const post = await getGhostPost(identifier, contentAgentConfig, { identifierType });
  console.log(`[content-agent:revise] Loaded Ghost post "${post.title}" (${post.status}).`);

  if (post.status !== 'draft' && !args.allowPublished) {
    throw new Error(
      `Refusing to revise ${post.status} post "${post.slug}". Pass --allow-published only if you intentionally want to update a non-draft post.`,
    );
  }

  await writeOutput(args.outputDir, `original-${post.slug}.json`, toArticleInput(post));
  await writeOutput(args.outputDir, `original-${post.slug}.html`, post.html || '');

  const { revised, ruleCheck } = await reviseUntilRulesPass({
    post,
    revisionPrompt,
    outputDir: args.outputDir,
    maxAttempts: args.ruleRepairAttempts,
    bypassContentRules: args.bypassContentRules,
  });
  const lengthCheck = validateRevisionLength({ post, revised });
  await writeOutput(args.outputDir, `rule-check-${revised.slug}.json`, ruleCheck);
  await writeOutput(args.outputDir, `length-check-${revised.slug}.json`, lengthCheck);

  if (ruleCheck.blockingIssues.length > 0 && !args.bypassContentRules) {
    throw new Error(
      `Fleetbase content rules blocked revision "${revised.title}": ${ruleCheck.blockingIssues.join('; ')}`,
    );
  }

  if (ruleCheck.blockingIssues.length > 0 && args.bypassContentRules) {
    console.warn(
      `[content-agent:revise] Bypassing Fleetbase content rule warnings for "${revised.title}": ${ruleCheck.blockingIssues.join('; ')}`,
    );
  }

  await writeOutput(args.outputDir, `revised-${revised.slug}.json`, revised);
  await writeOutput(args.outputDir, `revised-${revised.slug}.html`, revised.html);

  let updatedPost = null;

  if (!args.dryRun) {
    console.log(`[content-agent:revise] Applying revision to Ghost post "${post.slug}".`);
    updatedPost = await updateGhostPost(post, revised, contentAgentConfig);
    await writeOutput(args.outputDir, `updated-${updatedPost.slug}.json`, updatedPost);
    console.log(`[content-agent:revise] Ghost update returned status "${updatedPost.status}".`);
  } else {
    console.log('[content-agent:revise] Dry run enabled; Ghost update skipped.');
  }

  await appendStepSummary(`
## Fleetbase Ghost Draft Revision

- Mode: ${args.dryRun ? 'Dry run, Ghost was not updated' : 'Applied to Ghost'}
- Original post: ${post.title} (${post.slug})
- Revised title: ${revised.title}
- Revised slug: ${revised.slug}
- Revision summary: ${revised.revisionSummary.join('; ') || 'No summary returned'}
- Length check: ${lengthCheck.revisedWordCount} revised words from ${lengthCheck.originalWordCount} original words
- Content rule status: ${
    ruleCheck.blockingIssues.length > 0
      ? args.bypassContentRules
        ? `Bypassed warnings: ${ruleCheck.blockingIssues.join('; ')}`
        : `Blocked: ${ruleCheck.blockingIssues.join('; ')}`
      : 'Passed'
  }
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
