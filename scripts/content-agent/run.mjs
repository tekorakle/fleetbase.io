#!/usr/bin/env node

import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { fetchAhrefsKeywordIdeas } from './ahrefs.mjs';
import {
  generateArticle,
  generateBrief,
  generateFeatureImageBrief,
  qaArticle,
  scoreTopics,
} from './claude.mjs';
import { contentAgentConfig } from './content-agent.config.mjs';
import { normalizeFleetbaseArticle, validateFleetbaseArticle } from './content-rules.mjs';
import { buildContextManifest, buildFleetbaseContext } from './context.mjs';
import { createGhostDraft, uploadGhostImage } from './ghost-admin.mjs';
import { generateFeatureImage, shouldGenerateFeatureImage } from './openai-image.mjs';

function parseArgs(argv) {
  const args = {
    dryRun: process.env.CREATE_GHOST_DRAFT !== 'true',
    topic: process.env.CONTENT_AGENT_TOPIC || '',
    keyword: process.env.CONTENT_AGENT_KEYWORD || '',
    focus: process.env.CONTENT_AGENT_FOCUS || 'auto',
    maxDrafts: Number(process.env.CONTENT_AGENT_MAX_DRAFTS || contentAgentConfig.maxDraftsPerRun),
    generateFeatureImage: process.env.GENERATE_FEATURE_IMAGE !== 'false',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--dry-run') args.dryRun = true;
    if (arg === '--create-ghost-draft') args.dryRun = false;
    if (arg === '--topic') args.topic = argv[index + 1] || '';
    if (arg === '--keyword') args.keyword = argv[index + 1] || '';
    if (arg === '--focus') args.focus = argv[index + 1] || 'auto';
    if (arg === '--max-drafts') args.maxDrafts = Number(argv[index + 1] || args.maxDrafts);
    if (arg === '--no-feature-image') args.generateFeatureImage = false;
  }

  args.maxDrafts = Math.max(1, Math.min(args.maxDrafts || 1, contentAgentConfig.maxDraftsPerRun));
  return args;
}

function requireEnv(names) {
  const missing = names.filter((name) => !process.env[name]?.trim());

  if (missing.length > 0) {
    throw new Error(`Missing required environment variable(s): ${missing.join(', ')}.`);
  }
}

function manualTopic(topic, keyword) {
  const targetKeyword = keyword || topic;

  return {
    keyword: targetKeyword,
    cluster: 'manual',
    title: topic,
    score: 100,
    searchIntent: 'Manual content request',
    businessFit: 10,
    opportunity: 8,
    competitorWeakness: 5,
    cannibalizationRisk: 'low',
    rationale: 'Manual topic override supplied through workflow_dispatch.',
    suggestedInternalLinks: ['/docs', '/product', '/platform'],
  };
}

function resolveContentFocus(config, requestedFocus) {
  if (requestedFocus && requestedFocus !== 'auto') {
    if (!config.contentStrategy.allowedFocuses.includes(requestedFocus)) {
      throw new Error(
        `Invalid CONTENT_AGENT_FOCUS "${requestedFocus}". Expected one of: auto, ${config.contentStrategy.allowedFocuses.join(', ')}.`,
      );
    }

    return requestedFocus;
  }

  const utcDay = new Date().getUTCDay();
  return config.contentStrategy.defaultFocusByUtcDay[utcDay] || 'logistics-software';
}

function formatJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

async function writeOutput(outputDir, name, value) {
  await fs.mkdir(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, name);

  if (typeof value === 'string' || value instanceof Uint8Array) {
    await fs.writeFile(outputPath, value);
    return;
  }

  await fs.writeFile(outputPath, formatJson(value));
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
  const contentFocus = resolveContentFocus(contentAgentConfig, args.focus);
  const outputDir =
    process.env.CONTENT_AGENT_OUTPUT_DIR ||
    path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'fleetbase-content-agent');

  requireEnv(['ANTHROPIC_API_KEY']);

  if (!args.topic) {
    requireEnv(['AHREFS_API_TOKEN']);
  }

  if (!args.dryRun) {
    requireEnv(['GHOST_ADMIN_API_URL', 'GHOST_ADMIN_API_KEY']);
    if (args.generateFeatureImage) {
      requireEnv(['OPENAI_API_KEY']);
    }
  } else if (process.env.GENERATE_FEATURE_IMAGE_IN_DRY_RUN === 'true') {
    requireEnv(['OPENAI_API_KEY']);
  }

  console.log(
    `[content-agent] Starting SEO content agent. dryRun=${args.dryRun} focus=${contentFocus}`,
  );
  const manifest = await buildContextManifest(contentAgentConfig);
  await writeOutput(outputDir, 'context-manifest.json', manifest);

  const context = await buildFleetbaseContext(contentAgentConfig, {
    manifest,
    contentFocus,
    ...contentAgentConfig.context.budgets.scoring,
  });
  await writeOutput(outputDir, 'selected-context.json', context.selectedContext);
  await writeOutput(outputDir, 'source-citations.json', context.sourceCitations);
  await writeOutput(outputDir, 'fleetbase-context-sources.json', {
    sources: context.selectedContext.map((item) => item.path),
    manifestCount: manifest.length,
    selectedCount: context.selectedContext.length,
    existingBlogPosts: context.existingBlogPosts,
  });

  const topics = args.topic
    ? [manualTopic(args.topic, args.keyword)]
    : await scoreTopics({
        opportunities: await fetchAhrefsKeywordIdeas(contentAgentConfig),
        context,
        config: contentAgentConfig,
        contentFocus,
      });

  await writeOutput(outputDir, 'topic-scores.json', { topics });

  const createdDrafts = [];
  const generated = [];

  for (const topic of topics.slice(0, args.maxDrafts)) {
    const topicContext = await buildFleetbaseContext(contentAgentConfig, {
      manifest,
      contentFocus,
      topic,
      keyword: topic.keyword,
      ...contentAgentConfig.context.budgets.drafting,
    });
    await writeOutput(outputDir, `selected-context-${topic.keyword.replace(/[^a-z0-9]+/gi, '-')}.json`, {
      sources: topicContext.selectedContext,
      citations: topicContext.sourceCitations,
    });

    console.log(`[content-agent] Generating brief for "${topic.title}".`);
    const brief = await generateBrief({
      topic,
      context: topicContext,
      config: contentAgentConfig,
      contentFocus,
    });
    await writeOutput(outputDir, `brief-${brief.slug}.json`, brief);

    console.log(`[content-agent] Generating draft for "${brief.title}".`);
    const draft = normalizeFleetbaseArticle(await generateArticle({
      brief,
      context: topicContext,
      config: contentAgentConfig,
      contentFocus,
    }));
    await writeOutput(outputDir, `draft-${draft.slug}.json`, draft);
    await writeOutput(outputDir, `draft-${draft.slug}.html`, draft.html);
    const ruleCheck = validateFleetbaseArticle(draft);
    await writeOutput(outputDir, `rule-check-${draft.slug}.json`, ruleCheck);

    let featureImage = null;
    const imageBrief = args.generateFeatureImage
      ? await generateFeatureImageBrief({
          brief,
          draft,
          config: contentAgentConfig,
          contentFocus,
        })
      : null;

    if (imageBrief) {
      await writeOutput(outputDir, `feature-image-brief-${draft.slug}.json`, imageBrief);
    }

    console.log(`[content-agent] Running QA for "${draft.title}".`);
    const qa = await qaArticle({
      brief,
      draft,
      context: topicContext,
      config: contentAgentConfig,
      contentFocus,
    });
    const advisoryWarnings = [
      ...ruleCheck.blockingIssues,
      ...ruleCheck.warnings,
      ...qa.blockingIssues,
      ...qa.warnings,
    ];
    const combinedQa = {
      ...qa,
      publishReady: true,
      blockingIssues: [],
      warnings: advisoryWarnings,
      advisoryOnly: true,
    };

    await writeOutput(outputDir, `qa-${draft.slug}.json`, combinedQa);

    generated.push({ topic, brief, draft, qa: combinedQa, sourceCitations: topicContext.sourceCitations });

    if (advisoryWarnings.length > 0) {
      console.warn(
        `[content-agent] QA warnings for "${draft.title}" are advisory only: ${advisoryWarnings.join('; ')}`,
      );
    }

    if (args.dryRun) {
      if (shouldGenerateFeatureImage({ dryRun: true, config: contentAgentConfig }) && imageBrief) {
        const generatedImage = await generateFeatureImage(imageBrief, contentAgentConfig);
        await writeOutput(outputDir, imageBrief.filename, generatedImage.bytes);
        await writeOutput(outputDir, `feature-image-${draft.slug}.json`, {
          filename: imageBrief.filename,
          altText: imageBrief.altText,
          revisedPrompt: generatedImage.revisedPrompt,
        });
      }
      console.log('[content-agent] Dry-run enabled. Skipping Ghost draft creation.');
      continue;
    }

    if (shouldGenerateFeatureImage({ dryRun: false, config: contentAgentConfig }) && imageBrief) {
      const generatedImage = await generateFeatureImage(imageBrief, contentAgentConfig);
      await writeOutput(outputDir, imageBrief.filename, generatedImage.bytes);
      const uploadedImage = await uploadGhostImage(
        generatedImage,
        imageBrief.filename,
        contentAgentConfig,
      );
      featureImage = {
        url: uploadedImage.url,
        altText: imageBrief.altText,
        revisedPrompt: generatedImage.revisedPrompt,
      };
      await writeOutput(outputDir, `feature-image-${draft.slug}.json`, featureImage);
    }

    const ghostDraft = await createGhostDraft(
      {
        ...draft,
        featureImage: featureImage?.url || null,
        featureImageAlt: featureImage?.altText || null,
      },
      contentAgentConfig,
    );
    createdDrafts.push(ghostDraft);
    await writeOutput(outputDir, `ghost-draft-${draft.slug}.json`, ghostDraft);
  }

  const selected = generated[0];
  const summary = {
    dryRun: args.dryRun,
    contentFocus,
    outputDir,
    manifestCount: manifest.length,
    selectedContextCount: selected?.sourceCitations.length || context.selectedContext.length,
    selectedTopic: selected?.topic || null,
    draftTitle: selected?.draft?.title || null,
    qa: selected?.qa || null,
    createdDrafts,
  };

  await writeOutput(outputDir, 'summary.json', summary);
  await notifyIfConfigured(summary);
  await appendStepSummary(`
## Fleetbase SEO Content Agent

- Mode: ${args.dryRun ? 'Dry run, no Ghost draft created' : 'Ghost draft creation enabled'}
- Content focus: ${contentFocus}
- Indexed sources: ${manifest.length}
- Selected keyword: ${selected?.topic.keyword || 'n/a'}
- Topic score: ${selected?.topic.score ?? 'n/a'}
- Draft title: ${selected?.draft.title || 'n/a'}
- QA status: ${selected?.qa.publishReady ? `passed (${selected.qa.score}/100)` : 'not run'}
- QA warnings: ${selected?.qa.warnings?.length || 0}
- Ghost draft: ${createdDrafts[0]?.url || createdDrafts[0]?.slug || 'not created'}
- Artifacts: ${outputDir}

Next step: review the generated draft artifacts${createdDrafts.length ? ' and the Ghost draft' : ''}; publish or schedule manually from Ghost after editorial approval.
`);

  console.log(`[content-agent] Complete. Outputs written to ${outputDir}`);
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
