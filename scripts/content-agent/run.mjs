#!/usr/bin/env node

import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { readAgentArtifacts, writeJsonFile } from './artifacts.mjs';
import { contentAgentConfig } from './content-agent.config.mjs';
import { normalizeFleetbaseArticle, validateFleetbaseArticle } from './content-rules.mjs';
import { assertNoDuplicateContent } from './dedupe.mjs';
import { createGhostDraft, listGhostPosts, uploadGhostImage } from './ghost-admin.mjs';
import { generateFeatureImage, shouldGenerateFeatureImage } from './openai-image.mjs';

function parseArgs(argv) {
  const args = {
    dryRun: process.env.CREATE_GHOST_DRAFT !== 'true',
    outputDir:
      process.env.CONTENT_AGENT_OUTPUT_DIR ||
      path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'fleetbase-content-agent'),
    generateFeatureImage: process.env.GENERATE_FEATURE_IMAGE !== 'false',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--dry-run') args.dryRun = true;
    if (arg === '--create-ghost-draft') args.dryRun = false;
    if (arg === '--output-dir') args.outputDir = argv[index + 1] || args.outputDir;
    if (arg === '--no-feature-image') args.generateFeatureImage = false;
  }

  return args;
}

function requireEnv(names) {
  const missing = names.filter((name) => !process.env[name]?.trim());

  if (missing.length > 0) {
    throw new Error(`Missing required environment variable(s): ${missing.join(', ')}.`);
  }
}

async function appendStepSummary(markdown) {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, `${markdown.trim()}\n`);
}

async function notifyIfConfigured(summary) {
  const url = process.env.CONTENT_AGENT_NOTIFY_WEBHOOK_URL?.trim();
  if (!url) return;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(summary),
  });

  if (!response.ok) {
    console.warn(`[content-agent] Notification webhook failed with status ${response.status}.`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  requireEnv(['GHOST_ADMIN_API_URL', 'GHOST_ADMIN_API_KEY']);
  if (!args.dryRun && args.generateFeatureImage && shouldGenerateFeatureImage({ dryRun: false, config: contentAgentConfig })) {
    requireEnv(['OPENAI_API_KEY']);
  }

  console.log(`[content-agent] Publishing content agent artifacts. dryRun=${args.dryRun}`);

  const artifacts = await readAgentArtifacts(args.outputDir);
  const draft = normalizeFleetbaseArticle({
    ...artifacts.draft,
    sourceCitations: artifacts.sourceCitations,
  });
  const ghostPosts = await listGhostPosts(contentAgentConfig);
  const duplicateCheck = assertNoDuplicateContent(
    {
      title: draft.title,
      slug: draft.slug,
      targetKeyword: draft.targetKeyword,
      topic: artifacts.topic.title,
    },
    ghostPosts,
  );
  const ruleCheck = validateFleetbaseArticle(draft);
  const qa = {
    ...artifacts.qa,
    publishReady: true,
    blockingIssues: [],
    warnings: [
      ...(artifacts.qa.blockingIssues || []),
      ...(artifacts.qa.warnings || []),
      ...ruleCheck.blockingIssues,
      ...ruleCheck.warnings,
    ],
    advisoryOnly: true,
  };
  let featureImage = null;

  await writeJsonFile(path.join(args.outputDir, `draft-${draft.slug}.json`), draft);
  await fs.writeFile(path.join(args.outputDir, `draft-${draft.slug}.html`), draft.html);
  await writeJsonFile(path.join(args.outputDir, `rule-check-${draft.slug}.json`), ruleCheck);
  await writeJsonFile(path.join(args.outputDir, `qa-${draft.slug}.json`), qa);
  await writeJsonFile(path.join(args.outputDir, 'dedupe-upload-report.json'), duplicateCheck);

  if (args.generateFeatureImage && artifacts.featureImageBrief) {
    if (shouldGenerateFeatureImage({ dryRun: args.dryRun, config: contentAgentConfig })) {
      const generatedImage = await generateFeatureImage(artifacts.featureImageBrief, contentAgentConfig);
      await fs.writeFile(path.join(args.outputDir, artifacts.featureImageBrief.filename), generatedImage.bytes);

      if (!args.dryRun) {
        const uploadedImage = await uploadGhostImage(
          generatedImage,
          artifacts.featureImageBrief.filename,
          contentAgentConfig,
        );
        featureImage = {
          url: uploadedImage.url,
          altText: artifacts.featureImageBrief.altText,
          revisedPrompt: generatedImage.revisedPrompt,
        };
      }

      await writeJsonFile(path.join(args.outputDir, `feature-image-${draft.slug}.json`), {
        filename: artifacts.featureImageBrief.filename,
        altText: artifacts.featureImageBrief.altText,
        revisedPrompt: generatedImage.revisedPrompt,
        url: featureImage?.url || null,
      });
    }
  } else if (args.generateFeatureImage) {
    console.warn('[content-agent] Feature image generation enabled, but feature-image-brief.json was not provided by the content agent. Skipping image generation.');
  }

  const createdDrafts = [];

  if (args.dryRun) {
    console.log('[content-agent] Dry-run enabled. Skipping Ghost draft creation.');
  } else {
    const ghostDraft = await createGhostDraft(
      {
        ...draft,
        featureImage: featureImage?.url || null,
        featureImageAlt: featureImage?.altText || null,
      },
      contentAgentConfig,
    );
    createdDrafts.push(ghostDraft);
    await writeJsonFile(path.join(args.outputDir, `ghost-draft-${draft.slug}.json`), ghostDraft);
  }

  const summary = {
    dryRun: args.dryRun,
    selectedTopic: artifacts.topic,
    draftTitle: draft.title,
    targetKeyword: draft.targetKeyword,
    sourceCitationCount: artifacts.sourceCitations.length,
    qa,
    createdDrafts,
  };

  await writeJsonFile(path.join(args.outputDir, 'summary.json'), summary);
  await notifyIfConfigured(summary);
  await appendStepSummary(`
## Fleetbase SEO Content Agent

- Mode: ${args.dryRun ? 'Dry run, no Ghost draft created' : 'Ghost draft creation enabled'}
- Selected keyword: ${draft.targetKeyword}
- Draft title: ${draft.title}
- Source citations: ${artifacts.sourceCitations.length}
- QA status: advisory pass (${qa.score}/100)
- QA warnings: ${qa.warnings.length}
- Ghost draft: ${createdDrafts[0]?.url || createdDrafts[0]?.slug || 'not created'}
- Artifacts: ${args.outputDir}

Next step: review the generated draft artifacts${createdDrafts.length ? ' and the Ghost draft' : ''}; publish or schedule manually from Ghost after editorial approval.
`);

  console.log(`[content-agent] Complete. Outputs written to ${args.outputDir}`);
}

main().catch(async (error) => {
  console.error(`[content-agent] ${error.message}`);
  await appendStepSummary(`
## Fleetbase SEO Content Agent

The run failed before creating a publishable draft.

\`\`\`
${error.message}
\`\`\`
`);
  process.exitCode = 1;
});
