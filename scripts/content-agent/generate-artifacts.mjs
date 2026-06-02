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
    repo: { type: 'string', minLength: 1 },
    path: { type: 'string', minLength: 1 },
    title: { type: 'string' },
    claim: { type: 'string', minLength: 8 },
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
          keyword: { type: 'string', minLength: 1 },
          cluster: { type: 'string', minLength: 1 },
          title: { type: 'string', minLength: 8 },
          score: { type: 'number', minimum: 0, maximum: 100 },
          searchIntent: { type: 'string', minLength: 1 },
          businessFit: { type: 'number', minimum: 0, maximum: 10 },
          opportunity: { type: 'number', minimum: 0, maximum: 10 },
          competitorWeakness: { type: 'number', minimum: 0, maximum: 10 },
          cannibalizationRisk: { type: 'string', enum: ['low', 'medium', 'high'] },
          rationale: { type: 'string', minLength: 20 },
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
    title: { type: 'string', minLength: 8 },
    slug: { type: 'string', minLength: 3 },
    targetKeyword: { type: 'string', minLength: 1 },
    secondaryKeywords: { type: 'array', items: { type: 'string' } },
    audience: { type: 'string', minLength: 1 },
    searchIntent: { type: 'string', minLength: 1 },
    thesis: { type: 'string', minLength: 20 },
    outline: { type: 'array', minItems: 4, items: { type: 'string', minLength: 3 } },
    internalLinks: { type: 'array', items: { type: 'string' } },
    cta: { type: 'string', minLength: 10 },
    metaTitle: { type: 'string', minLength: 10, maxLength: 80 },
    metaDescription: { type: 'string', minLength: 30, maxLength: 180 },
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
    title: { type: 'string', minLength: 8 },
    slug: { type: 'string', minLength: 3 },
    excerpt: { type: 'string', minLength: 30, maxLength: 300 },
    html: { type: 'string', minLength: 500 },
    metaTitle: { type: 'string', minLength: 10, maxLength: 80 },
    metaDescription: { type: 'string', minLength: 30, maxLength: 180 },
    publicTags: { type: 'array', items: { type: 'string' } },
    sourceCitations: {
      type: 'array',
      minItems: 1,
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
    score: { type: 'number', minimum: 0, maximum: 100 },
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

const MAX_EXPANDED_TOPICS = 25;
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

function normalizeKeyword(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function dedupeTopics(topics) {
  const seen = new Set();
  const uniqueTopics = [];

  for (const topic of topics) {
    const key = normalizeKeyword(topic.keyword || topic.title);
    if (!key || seen.has(key)) continue;

    seen.add(key);
    uniqueTopics.push(topic);
  }

  return uniqueTopics;
}

function summarizeFleetbaseKnowledge(manifest = [], { maxItems = 18, maxExcerptChars = 260 } = {}) {
  const preferredCategories = new Set(['website-page', 'documentation', 'api-reference', 'fleetops', 'core-api']);

  return manifest
    .filter((item) => preferredCategories.has(item.category) || ['fleetbase.io', 'fleetops', 'core-api'].includes(item.repo))
    .slice(0, maxItems)
    .map((item) => ({
      repo: item.repo,
      category: item.category,
      path: item.path,
      title: item.title,
      excerpt: String(item.excerpt || '').slice(0, maxExcerptChars),
    }));
}

function topicToOpportunity(topic) {
  return {
    keyword: topic.keyword,
    cluster: topic.cluster,
    volume: null,
    difficulty: null,
    trafficPotential: null,
    parentTopic: topic.title,
    intents: [topic.searchIntent].filter(Boolean),
    source: 'ai-topic-expansion',
    title: topic.title,
    score: topic.score,
    businessFit: topic.businessFit,
    opportunity: topic.opportunity,
    competitorWeakness: topic.competitorWeakness,
    cannibalizationRisk: topic.cannibalizationRisk,
    rationale: topic.rationale,
    suggestedInternalLinks: topic.suggestedInternalLinks,
  };
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

async function expandTopicCandidates({ researchInput, config, fetchImpl }) {
  const system =
    'You are a Fleetbase content strategist. Brainstorm useful, specific article topics with strong logistics, developer, and operations intent. Return only valid JSON matching the schema.';
  const prompt = JSON.stringify(
    {
      task: 'Expand Fleetbase blog topic candidates before final topic selection.',
      contentFocus: getContentFocus(researchInput),
      topicMode: researchInput.topicMode || 'auto',
      integrationTarget: researchInput.integrationTarget || '',
      siteUrl: config.siteUrl,
      fleetbasePositioning: config.contentStrategy.requiredRelevance,
      contentMix: config.contentStrategy.contentMix,
      editorialRules: config.contentStrategy.editorialRules,
      curatedTopicIdeas: config.topicIdeas,
      seedOpportunities: (researchInput.ahrefs?.opportunities || []).slice(0, 60),
      existingGhostContent: compactPosts(researchInput.existingGhostContent),
      fleetbaseKnowledge: summarizeFleetbaseKnowledge(researchInput.sourceManifest || []),
      requirements: [
        `Return ${MAX_EXPANDED_TOPICS} varied topic candidates.`,
        'Use your general knowledge of logistics, ecommerce, ERP, CRM, dispatch, delivery operations, and developer integration patterns.',
        'Do not merely restate the seed topics. Create fresh angles, practical workflows, comparisons, integration guides, and operator pain-point articles.',
        'Prefer topics Fleetbase can credibly support with website, docs, Fleet-Ops, core API, or source-truth context.',
        'Include integration ideas beyond the seed list when they are plausible for logistics operations, such as marketplaces, ERPs, CRMs, ecommerce platforms, webhooks, automation tools, and order-management systems.',
        'Do not invent specific Fleetbase endpoint names, UI screens, SocketCluster channels, parameters, or product behavior.',
        'Avoid topics already covered by existingGhostContent.',
        'Numeric score fields must be numbers. cannibalizationRisk must be low, medium, or high.',
      ],
    },
    null,
    2,
  );
  const result = await callOpenAiJson({
    system,
    prompt,
    schemaName: 'fleetbase_topic_expansion',
    jsonSchema: TOPIC_JSON_SCHEMA,
    zodSchema: TopicListSchema,
    maxOutputTokens: 7200,
    temperature: 0.75,
    fetchImpl,
  });

  return dedupeTopics(result.topics).slice(0, MAX_EXPANDED_TOPICS);
}

async function generateTopic({ researchInput, config, fetchImpl }) {
  const opportunities = researchInput.ahrefs?.opportunities || [];
  const manualOpportunity = opportunities.find((opportunity) => opportunity.source === 'manual');

  if (manualOpportunity) {
    const topic = topicFromManualOpportunity(manualOpportunity);
    return { topic, topics: [topic] };
  }

  const expandedTopics = await expandTopicCandidates({ researchInput, config, fetchImpl });
  const expandedOpportunities = dedupeTopics([
    ...expandedTopics,
    ...opportunities.map((opportunity) => ({
      keyword: opportunity.keyword,
      cluster: opportunity.cluster,
      title: opportunity.title || titleizeKeyword(opportunity.keyword),
      score: opportunity.score || 50,
      searchIntent: opportunity.intents?.[0] || 'Informational',
      businessFit: opportunity.businessFit || 7,
      opportunity: opportunity.opportunity || 6,
      competitorWeakness: opportunity.competitorWeakness || 5,
      cannibalizationRisk: opportunity.cannibalizationRisk || 'low',
      rationale: opportunity.rationale || 'Seed topic candidate from configured topic opportunities.',
      suggestedInternalLinks: opportunity.suggestedInternalLinks || ['https://fleetbase.io/docs'],
    })),
  ]).map(topicToOpportunity);

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
      expandedTopicCandidates: expandedTopics,
      candidateOpportunities: expandedOpportunities.slice(0, 60),
      existingGhostContent: compactPosts(researchInput.existingGhostContent),
      requirements: [
        'Prefer practical articles a logistics operator or developer would actually read.',
        'Choose from the expanded candidate pool or synthesize a stronger topic from it.',
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
    expandedTopics,
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
        'Do not include steps to install, enable, activate, add, or turn on Fleet-Ops or other core Fleetbase extensions. They are bundled and active by default in Fleetbase Cloud and standard self-hosted Fleetbase.',
        'Keep metaTitle between 10 and 80 characters. Keep metaDescription between 30 and 180 characters.',
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
        'Do not tell readers to install, enable, activate, add, turn on, or set up Fleet-Ops or other core Fleetbase extensions before use. Fleet-Ops and other core extensions are already bundled, installed, and active by default in Fleetbase Cloud and standard self-hosted Fleetbase.',
        'Every Fleetbase product/API claim must be supported by sourceContext and represented in sourceCitations.',
        'Do not name API request fields, query parameters, response properties, webhook fields, or configuration keys unless the exact name appears in sourceContext or citationCandidates.',
        'Keep excerpt between 30 and 300 characters. Keep metaTitle between 10 and 80 characters. Keep metaDescription between 30 and 180 characters.',
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
        'Warn if the draft tells readers to install, enable, activate, add, turn on, or set up Fleet-Ops or another bundled core Fleetbase extension.',
        'Warn if the draft names API fields, query parameters, response properties, webhook fields, or configuration keys that are not visibly supported by the provided citations or source context.',
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
  const { topic, topics, expandedTopics } = await generateTopic({ researchInput, config, fetchImpl });
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
  const opportunity = findOpportunityForTopic(topic, [
    ...(expandedTopics || []).map(topicToOpportunity),
    ...(researchInput.ahrefs?.opportunities || []),
  ]);
  const draft = normalizeFleetbaseArticle({
    ...draftResult,
    targetKeyword: brief.targetKeyword || topic.keyword,
    ahrefsOpportunity: opportunity,
  });
  const ruleCheck = validateFleetbaseArticle(draft);
  const qa = await generateQa({ brief, draft, topic, ruleCheck, researchInput, fetchImpl });

  await writeJsonFile(path.join(outputDir, 'topic.json'), topic);
  await writeJsonFile(path.join(outputDir, 'topic-candidates.json'), {
    selectedTopic: topic,
    expandedTopics: expandedTopics || [],
    finalistTopics: topics || [topic],
  });
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

  return { topic, brief, draft, qa, expandedTopics };
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
