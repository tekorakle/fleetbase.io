#!/usr/bin/env node

import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { z } from 'zod';

import { readAgentArtifacts, readJsonFile, writeJsonFile } from './artifacts.mjs';
import { callOpenAiJson } from './openai-json.mjs';
import { contentAgentConfig } from './content-agent.config.mjs';
import { normalizeFleetbaseArticle, validateFleetbaseArticle } from './content-rules.mjs';
import { findDuplicateContent } from './dedupe.mjs';
import { selectContextSources } from './context.mjs';
import {
  ArticleDraftSchema,
  ContentBriefSchema,
  FeatureImageBriefSchema,
  QaResultSchema,
  SourceCitationSchema,
  TopicScoreSchema,
} from './schemas.mjs';

const SOURCE_CITATION_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    repo: { type: 'string' },
    path: { type: 'string' },
    title: { type: 'string' },
    claim: { type: 'string' },
    evidence: { type: 'string' },
  },
  required: ['repo', 'path', 'title', 'claim', 'evidence'],
};

const TOPIC_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    topics: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          keyword: { type: 'string' },
          cluster: { type: 'string' },
          title: { type: 'string' },
          score: { type: 'number' },
          searchIntent: { type: 'string' },
          businessFit: { type: 'number' },
          opportunity: { type: 'number' },
          competitorWeakness: { type: 'number' },
          cannibalizationRisk: { type: 'string', enum: ['low', 'medium', 'high'] },
          rationale: { type: 'string' },
          suggestedInternalLinks: { type: 'array', items: { type: 'string' } },
        },
        required: [
          'keyword',
          'cluster',
          'title',
          'score',
          'searchIntent',
          'businessFit',
          'opportunity',
          'competitorWeakness',
          'cannibalizationRisk',
          'rationale',
          'suggestedInternalLinks',
        ],
      },
    },
  },
  required: ['topics'],
};

const BRIEF_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    title: { type: 'string' },
    slug: { type: 'string' },
    targetKeyword: { type: 'string' },
    secondaryKeywords: { type: 'array', items: { type: 'string' } },
    audience: { type: 'string' },
    searchIntent: { type: 'string' },
    thesis: { type: 'string' },
    outline: { type: 'array', items: { type: 'string' } },
    internalLinks: { type: 'array', items: { type: 'string' } },
    cta: { type: 'string' },
    metaTitle: { type: 'string' },
    metaDescription: { type: 'string' },
    publicTags: { type: 'array', items: { type: 'string' } },
    sourceNotes: { type: 'array', items: { type: 'string' } },
  },
  required: [
    'title',
    'slug',
    'targetKeyword',
    'secondaryKeywords',
    'audience',
    'searchIntent',
    'thesis',
    'outline',
    'internalLinks',
    'cta',
    'metaTitle',
    'metaDescription',
    'publicTags',
    'sourceNotes',
  ],
};

const DRAFT_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    title: { type: 'string' },
    slug: { type: 'string' },
    excerpt: { type: 'string' },
    html: { type: 'string' },
    metaTitle: { type: 'string' },
    metaDescription: { type: 'string' },
    publicTags: { type: 'array', items: { type: 'string' } },
    sourceCitations: {
      type: 'array',
      items: SOURCE_CITATION_JSON_SCHEMA,
    },
  },
  required: [
    'title',
    'slug',
    'excerpt',
    'html',
    'metaTitle',
    'metaDescription',
    'publicTags',
    'sourceCitations',
  ],
};

const QA_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    publishReady: { type: 'boolean' },
    score: { type: 'number' },
    blockingIssues: { type: 'array', items: { type: 'string' } },
    warnings: { type: 'array', items: { type: 'string' } },
    recommendedFixes: { type: 'array', items: { type: 'string' } },
  },
  required: ['publishReady', 'score', 'blockingIssues', 'warnings', 'recommendedFixes'],
};

const FEATURE_IMAGE_JSON_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    prompt: { type: 'string', minLength: 40 },
    altText: { type: 'string', minLength: 20, maxLength: 160 },
    filename: { type: 'string', minLength: 3 },
  },
  required: ['prompt', 'altText', 'filename'],
};

const TopicListSchema = z.object({ topics: z.array(TopicScoreSchema).min(1) });
const DraftWithCitationsSchema = ArticleDraftSchema.extend({
  sourceCitations: z.array(SourceCitationSchema).min(1),
});

function parseArgs(argv) {
  const args = {
    outputDir:
      process.env.CONTENT_AGENT_OUTPUT_DIR ||
      path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'fleetbase-content-agent'),
    topicMode: process.env.CONTENT_AGENT_TOPIC_MODE || 'auto',
    integrationTarget: process.env.CONTENT_AGENT_INTEGRATION_TARGET || '',
    generateFeatureImage: process.env.GENERATE_FEATURE_IMAGE !== 'false',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--output-dir') args.outputDir = argv[index + 1] || args.outputDir;
    if (arg === '--topic-mode') args.topicMode = argv[index + 1] || args.topicMode;
    if (arg === '--integration-target') args.integrationTarget = argv[index + 1] || '';
    if (arg === '--no-feature-image') args.generateFeatureImage = false;
  }

  return args;
}

function summarizeContext(selectedContext, { maxCharsPerSource = 1200, maxTotalChars = 12000 } = {}) {
  const chunks = [];
  let totalChars = 0;

  for (const item of selectedContext) {
    const excerpt = String(item.excerpt || '').slice(0, maxCharsPerSource);
    const chunk = [
      `Source: ${item.path}`,
      `Repo: ${item.repo}`,
      `Category: ${item.category}`,
      `Title: ${item.title}`,
      excerpt,
    ].join('\n');

    if (totalChars + chunk.length > maxTotalChars) break;
    chunks.push(chunk);
    totalChars += chunk.length;
  }

  return chunks.join('\n\n---\n\n');
}

function compactPosts(posts = []) {
  return posts.slice(0, 40).map((post) => ({
    title: post.title || '',
    slug: post.slug || '',
    status: post.status || '',
    excerpt: post.excerpt || post.custom_excerpt || '',
  }));
}

function findOpportunityForTopic(topic, opportunities) {
  return (
    opportunities.find((opportunity) => opportunity.keyword === topic.keyword) || {
      keyword: topic.keyword,
      cluster: topic.cluster,
      volume: null,
      difficulty: null,
      trafficPotential: null,
      parentTopic: null,
      intents: [],
      source: 'ai-topic-idea',
    }
  );
}

function titleizeKeyword(keyword) {
  return keyword
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

function slugifyText(value) {
  return String(value || 'fleetbase-logistics-article')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function truncateText(value, maxLength) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength - 1).trimEnd();
}

function topicFromManualOpportunity(opportunity) {
  return {
    keyword: opportunity.keyword,
    cluster: opportunity.cluster || 'manual',
    title: opportunity.title || titleizeKeyword(opportunity.keyword),
    score: 100,
    searchIntent: opportunity.intents?.[0] || 'Manual editorial request',
    businessFit: 10,
    opportunity: 10,
    competitorWeakness: 5,
    cannibalizationRisk: 'low',
    rationale: 'Manual workflow_dispatch topic override supplied by an editor.',
    suggestedInternalLinks: ['https://fleetbase.io/docs'],
  };
}

function selectNonDuplicateTopic(topics, existingGhostContent) {
  const selected = topics.find(
    (topic) =>
      findDuplicateContent(
        {
          title: topic.title,
          slug: topic.title,
          targetKeyword: topic.keyword,
          topic: topic.title,
        },
        existingGhostContent,
      ).length === 0,
  );

  if (!selected) {
    throw new Error('OpenAI returned only duplicate topic ideas. Add a manual topic or expand curated topic ideas.');
  }

  return selected;
}

function getContentFocus(researchInput) {
  return researchInput.contentFocus || 'logistics-software';
}

async function generateTopic({ researchInput, config, fetchImpl }) {
  const opportunities = researchInput.ahrefs?.opportunities || [];
  const manualOpportunity = opportunities.find((opportunity) => opportunity.source === 'manual');

  if (manualOpportunity) {
    const topic = topicFromManualOpportunity(manualOpportunity);
    return { topic, topics: [topic] };
  }

  const system =
    'You are Fleetbase editorial strategist. Choose specific, useful logistics software article topics. Return only valid JSON matching the schema.';
  const prompt = JSON.stringify(
    {
      task: 'Generate and score Fleetbase blog topic candidates.',
      contentFocus: getContentFocus(researchInput),
      topicMode: researchInput.topicMode || 'auto',
      integrationTarget: researchInput.integrationTarget || '',
      siteUrl: config.siteUrl,
      editorialRules: config.contentStrategy.editorialRules,
      curatedTopicIdeas: config.topicIdeas,
      candidateOpportunities: opportunities.slice(0, 40),
      existingGhostContent: compactPosts(researchInput.existingGhostContent),
      requirements: [
        'Prefer practical articles a logistics operator or developer would actually read.',
        'Use AI-first topic creativity; do not limit yourself to narrow keyword rows.',
        'Integration articles are welcome when they connect Fleetbase to an ERP, CRM, ecommerce, webhook, or automation workflow.',
        'Return at least five candidate topics unless a manual topic is the only candidate.',
        'Numeric score fields must be numbers. cannibalizationRisk must be low, medium, or high.',
      ],
    },
    null,
    2,
  );
  const result = await callOpenAiJson({
    system,
    prompt,
    schemaName: 'fleetbase_topic_candidates',
    jsonSchema: TOPIC_JSON_SCHEMA,
    zodSchema: TopicListSchema,
    maxOutputTokens: 2400,
    fetchImpl,
  });

  return {
    topic: selectNonDuplicateTopic(result.topics, researchInput.existingGhostContent || []),
    topics: result.topics,
  };
}

async function generateBrief({ topic, contextSummary, researchInput, config, fetchImpl }) {
  const system =
    'You write concise, source-grounded SEO content briefs for Fleetbase. Return only valid JSON matching the schema.';
  const prompt = JSON.stringify(
    {
      task: 'Create one Fleetbase blog brief.',
      topic,
      contentFocus: getContentFocus(researchInput),
      siteUrl: config.siteUrl,
      editorialRules: config.contentStrategy.editorialRules,
      sourceContext: contextSummary,
      requirements: [
        'Make the brief specific to Fleetbase, Fleet-Ops, logistics operations, or a practical integration/API workflow.',
        'Use https://fleetbase.io for website links and https://fleetbase.io/docs for documentation links.',
        'Do not use fleetbase.ghost.io links.',
        'Include only internal links supported by the context.',
      ],
    },
    null,
    2,
  );

  return callOpenAiJson({
    system,
    prompt,
    schemaName: 'fleetbase_content_brief',
    jsonSchema: BRIEF_JSON_SCHEMA,
    zodSchema: ContentBriefSchema,
    maxOutputTokens: 3200,
    fetchImpl,
  });
}

async function generateDraft({ brief, topic, contextSummary, citationCandidates, researchInput, config, fetchImpl }) {
  const system =
    'You write polished Fleetbase blog articles in clean semantic HTML. Return only valid JSON matching the schema.';
  const prompt = JSON.stringify(
    {
      task: 'Write one complete Fleetbase blog article.',
      topic,
      brief,
      contentFocus: getContentFocus(researchInput),
      siteUrl: config.siteUrl,
      editorialRules: config.contentStrategy.editorialRules,
      sourceContext: contextSummary,
      citationCandidates,
      requirements: [
        'Write a useful, publishable article for a human editor to review.',
        'Use semantic HTML body content only: h2, h3, p, ul, ol, pre, code, table when useful.',
        'Do not include markdown fences, scripts, styles, iframes, or publication boilerplate.',
        'Use Fleet-Ops spelling exactly.',
        'Avoid outdated API-first positioning.',
        'Every Fleetbase product/API claim must be supported by sourceContext and represented in sourceCitations.',
        'Use https://fleetbase.io and https://fleetbase.io/docs links only.',
      ],
    },
    null,
    2,
  );

  return callOpenAiJson({
    system,
    prompt,
    schemaName: 'fleetbase_article_draft',
    jsonSchema: DRAFT_JSON_SCHEMA,
    zodSchema: DraftWithCitationsSchema,
    maxOutputTokens: 9000,
    temperature: 0.5,
    fetchImpl,
  });
}

async function generateQa({ brief, draft, topic, ruleCheck, researchInput, fetchImpl }) {
  const system =
    'You are an advisory Fleetbase editor. Return only valid JSON matching the schema.';
  const prompt = JSON.stringify(
    {
      task: 'QA this Fleetbase blog draft for human review.',
      topic,
      brief,
      draft,
      contentFocus: getContentFocus(researchInput),
      ruleCheck,
      requirements: [
        'Set publishReady true unless there is a severe factual or structural issue.',
        'Put review concerns in warnings and recommendedFixes, not blockingIssues.',
        'Do not ask to publish or schedule the post.',
      ],
    },
    null,
    2,
  );

  return callOpenAiJson({
    system,
    prompt,
    schemaName: 'fleetbase_article_qa',
    jsonSchema: QA_JSON_SCHEMA,
    zodSchema: QaResultSchema,
    maxOutputTokens: 1600,
    temperature: 0.2,
    fetchImpl,
  });
}

function buildFallbackFeatureImageBrief({ brief, draft, config }) {
  const tags = draft.publicTags?.length ? draft.publicTags.join(', ') : 'logistics software';
  const prompt = [
    config.featureImage.styleGuide,
    `Create a landscape editorial feature image for an article titled "${draft.title || brief.title}".`,
    `Show modern logistics software, dispatch planning, delivery routes, fleet operations, and workflow panels related to ${tags}.`,
    'No visible text, logos, brand marks, UI labels, watermarks, or close-up people.',
  ].join(' ');
  const altText = truncateText(
    `Editorial logistics software scene for ${draft.title || brief.title}.`,
    160,
  );
  const fallback = {
    prompt,
    altText: altText.length >= 20 ? altText : 'Editorial logistics software scene with delivery routes and dispatch panels.',
    filename: `${slugifyText(draft.slug || brief.slug || draft.title || brief.title)}.png`,
  };

  return FeatureImageBriefSchema.parse(fallback);
}

async function generateFeatureImageBrief({ brief, draft, config, fetchImpl }) {
  const system =
    'You write image-generation prompts for Fleetbase blog feature images. Return only valid JSON matching the schema.';
  const prompt = JSON.stringify(
    {
      task: 'Create a feature image brief for this article.',
      styleGuide: config.featureImage.styleGuide,
      brief,
      draft: {
        title: draft.title,
        excerpt: draft.excerpt,
        publicTags: draft.publicTags,
      },
      requirements: [
        'Use a landscape editorial composition.',
        'Avoid visible text, logos, brand marks, UI labels, and watermarks.',
        'Keep altText at 160 characters or fewer.',
        'Use a lowercase kebab-case PNG filename.',
      ],
    },
    null,
    2,
  );

  return callOpenAiJson({
    system,
    prompt,
    schemaName: 'fleetbase_feature_image_brief',
    jsonSchema: FEATURE_IMAGE_JSON_SCHEMA,
    zodSchema: FeatureImageBriefSchema,
    maxOutputTokens: 900,
    temperature: 0.4,
    fetchImpl,
  });
}

export async function generateArtifacts({ outputDir, config = contentAgentConfig, fetchImpl = fetch, generateFeatureImage = true } = {}) {
  const researchInput = await readJsonFile(path.join(outputDir, 'research-input.json'));
  const { topic } = await generateTopic({ researchInput, config, fetchImpl });
  const selectedContext = selectContextSources(researchInput.sourceManifest || [], config, {
    contentFocus: getContentFocus(researchInput),
    topic,
    keyword: topic.keyword,
    contentStrategy: config.contentStrategy,
    maxSelectedFiles: 10,
  });
  const boundedContext = selectedContext.length > 0 ? selectedContext : (researchInput.sourceManifest || []).slice(0, 10);
  const contextSummary = summarizeContext(boundedContext);
  const citationCandidates = boundedContext.map(({ repo, category, path: sourcePath, title, excerpt }) => ({
    repo,
    category,
    path: sourcePath,
    title,
    evidence: String(excerpt || '').slice(0, 500),
  }));
  const brief = await generateBrief({ topic, contextSummary, researchInput, config, fetchImpl });
  const draftResult = await generateDraft({
    brief,
    topic,
    contextSummary,
    citationCandidates,
    researchInput,
    config,
    fetchImpl,
  });
  const opportunity = findOpportunityForTopic(topic, researchInput.ahrefs?.opportunities || []);
  const draft = normalizeFleetbaseArticle({
    ...draftResult,
    targetKeyword: brief.targetKeyword || topic.keyword,
    ahrefsOpportunity: opportunity,
  });
  const ruleCheck = validateFleetbaseArticle(draft);
  const qa = await generateQa({ brief, draft, topic, ruleCheck, researchInput, fetchImpl });

  await writeJsonFile(path.join(outputDir, 'topic.json'), topic);
  await writeJsonFile(path.join(outputDir, 'brief.json'), brief);
  await writeJsonFile(path.join(outputDir, 'draft.json'), draft);
  await writeJsonFile(path.join(outputDir, 'source-citations.json'), draft.sourceCitations);
  await writeJsonFile(path.join(outputDir, 'qa.json'), {
    ...qa,
    blockingIssues: [],
    warnings: [...(qa.warnings || []), ...ruleCheck.warnings],
  });

  if (generateFeatureImage) {
    try {
      const featureImageBrief = await generateFeatureImageBrief({ brief, draft, config, fetchImpl });
      await writeJsonFile(path.join(outputDir, 'feature-image-brief.json'), featureImageBrief);
    } catch (error) {
      const fallbackFeatureImageBrief = buildFallbackFeatureImageBrief({ brief, draft, config });
      await writeJsonFile(path.join(outputDir, 'feature-image-brief.json'), fallbackFeatureImageBrief);
      console.warn(
        `[content-agent:generate-artifacts] Feature image brief failed; using fallback brief: ${error.message}`,
      );
    }
  }

  await readAgentArtifacts(outputDir);

  return { topic, brief, draft, qa };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  await generateArtifacts(args);
  console.log(`[content-agent:generate-artifacts] Artifacts written to ${args.outputDir}`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(`[content-agent:generate-artifacts] ${error.message}`);
    process.exitCode = 1;
  });
}
