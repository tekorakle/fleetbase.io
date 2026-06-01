#!/usr/bin/env node

import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { contentAgentConfig } from './content-agent.config.mjs';
import { buildContextManifest } from './context.mjs';
import { findDuplicateContent } from './dedupe.mjs';
import { listGhostPosts } from './ghost-admin.mjs';
import { buildAhrefsOrManualResearch } from './research.mjs';

function parseArgs(argv) {
  const args = {
    topic: process.env.CONTENT_AGENT_TOPIC || '',
    keyword: process.env.CONTENT_AGENT_KEYWORD || '',
    focus: process.env.CONTENT_AGENT_FOCUS || 'auto',
    topicMode: process.env.CONTENT_AGENT_TOPIC_MODE || 'auto',
    integrationTarget: process.env.CONTENT_AGENT_INTEGRATION_TARGET || '',
    useAhrefs: process.env.CONTENT_AGENT_USE_AHREFS === 'true',
    outputDir:
      process.env.CONTENT_AGENT_OUTPUT_DIR ||
      path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'fleetbase-content-agent'),
    allowSeedFallback: process.env.CONTENT_AGENT_ALLOW_SEED_FALLBACK !== 'false',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--topic') args.topic = argv[index + 1] || '';
    if (arg === '--keyword') args.keyword = argv[index + 1] || '';
    if (arg === '--focus') args.focus = argv[index + 1] || 'auto';
    if (arg === '--topic-mode') args.topicMode = argv[index + 1] || 'auto';
    if (arg === '--integration-target') args.integrationTarget = argv[index + 1] || '';
    if (arg === '--use-ahrefs') args.useAhrefs = true;
    if (arg === '--output-dir') args.outputDir = argv[index + 1] || args.outputDir;
    if (arg === '--allow-seed-fallback') args.allowSeedFallback = true;
  }

  return args;
}

function requireEnv(names) {
  const missing = names.filter((name) => !process.env[name]?.trim());

  if (missing.length > 0) {
    throw new Error(`Missing required environment variable(s): ${missing.join(', ')}.`);
  }
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

async function writeJson(outputDir, name, value) {
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, name), `${JSON.stringify(value, null, 2)}\n`);
}

function compactGhostPost(post) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    status: post.status,
    excerpt: post.custom_excerpt || post.excerpt || '',
    metaTitle: post.meta_title || '',
    metaDescription: post.meta_description || '',
    publishedAt: post.published_at || null,
    updatedAt: post.updated_at || null,
  };
}

async function appendStepSummary(markdown) {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, `${markdown.trim()}\n`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const contentFocus = resolveContentFocus(contentAgentConfig, args.focus);

  requireEnv(['GHOST_ADMIN_API_URL', 'GHOST_ADMIN_API_KEY']);
  if (!args.topic && process.env.CONTENT_AGENT_REQUIRE_AHREFS === 'true') {
    requireEnv(['AHREFS_API_TOKEN']);
  }

  console.log(`[content-agent:prepare] Preparing research. focus=${contentFocus}`);

  const manifest = await buildContextManifest(contentAgentConfig);
  const ghostPosts = (await listGhostPosts(contentAgentConfig)).map(compactGhostPost);
  const research = await buildAhrefsOrManualResearch(contentAgentConfig, {
    topic: args.topic,
    keyword: args.keyword,
    contentFocus,
    topicMode: args.topicMode,
    integrationTarget: args.integrationTarget,
    useAhrefs: args.useAhrefs,
    allowSeedFallback: args.allowSeedFallback,
  });

  const duplicateOpportunities = research.opportunities.flatMap((opportunity) =>
    findDuplicateContent(
      {
        title: opportunity.keyword,
        slug: opportunity.keyword,
        targetKeyword: opportunity.keyword,
        topic: opportunity.keyword,
      },
      ghostPosts,
    ).map((duplicate) => ({
      keyword: opportunity.keyword,
      cluster: opportunity.cluster,
      reason: duplicate.reason,
      post: duplicate.post,
    })),
  );

  const filteredOpportunities = research.opportunities.filter((opportunity) => {
    const duplicates = findDuplicateContent(
      {
        title: opportunity.keyword,
        slug: opportunity.keyword,
        targetKeyword: opportunity.keyword,
        topic: opportunity.keyword,
      },
      ghostPosts,
    );

    return duplicates.length === 0;
  });

  if (!args.topic && filteredOpportunities.length === 0) {
    throw new Error('All Ahrefs opportunities were blocked as duplicates of existing Ghost content.');
  }

  const outputOpportunities = args.topic ? research.opportunities : filteredOpportunities;

  const researchInput = {
    generatedAt: new Date().toISOString(),
    siteUrl: contentAgentConfig.siteUrl,
    contentFocus,
    topicMode: args.topicMode,
    integrationTarget: args.integrationTarget,
    contentStrategy: contentAgentConfig.contentStrategy,
    editorialRules: contentAgentConfig.contentStrategy.editorialRules,
    ahrefs: {
      bypassed: research.bypassedAhrefs || false,
      unavailable: research.ahrefsUnavailable || false,
      summary: {
        ...research.summary,
        validOpportunityCountAfterDedupe: filteredOpportunities.length,
      },
      opportunities: outputOpportunities.slice(0, 60),
    },
    existingGhostContent: ghostPosts,
    duplicateOpportunities,
    sourceTruthRepos: contentAgentConfig.sourceTruthRepos,
    sourceManifest: manifest,
    requiredArtifacts: [
      'topic.json',
      'brief.json',
      'draft.json',
      'source-citations.json',
      'qa.json',
      'feature-image-brief.json when feature image generation is enabled',
    ],
  };

  await writeJson(args.outputDir, 'context-manifest.json', manifest);
  await writeJson(args.outputDir, 'ghost-history.json', ghostPosts);
  await writeJson(args.outputDir, 'ahrefs-requests.json', research.requests);
  await writeJson(args.outputDir, 'ahrefs-raw-results.json', research.rawResults);
  await writeJson(args.outputDir, 'ahrefs-summary.json', researchInput.ahrefs.summary);
  await writeJson(args.outputDir, 'dedupe-report.json', {
    duplicateOpportunities,
    existingGhostCount: ghostPosts.length,
  });
  await writeJson(args.outputDir, 'research-input.json', researchInput);

  await appendStepSummary(`
## Fleetbase SEO Content Agent Research

- Content focus: ${contentFocus}
- Topic mode: ${args.topicMode}
- Integration target: ${args.integrationTarget || 'none'}
- Ahrefs enabled: ${args.useAhrefs ? 'yes' : 'no'}
- Ahrefs bypassed: ${research.bypassedAhrefs ? 'yes' : 'no'}
- Ahrefs unavailable fallback: ${research.ahrefsUnavailable ? 'yes' : 'no'}
- Ahrefs valid opportunities: ${research.summary.validOpportunityCount}
- Opportunities after duplicate filter: ${filteredOpportunities.length}
- Existing Ghost posts/drafts checked: ${ghostPosts.length}
- Indexed source files: ${manifest.length}
`);

  console.log(`[content-agent:prepare] Research artifacts written to ${args.outputDir}`);
}

main().catch(async (error) => {
  console.error(`[content-agent:prepare] ${error.message}`);
  await appendStepSummary(`
## Fleetbase SEO Content Agent Research

Research prep failed.

\`\`\`
${error.message}
\`\`\`
`);
  process.exitCode = 1;
});
