#!/usr/bin/env node

import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import {
  buildAhrefsKeywordUrl,
  fetchAhrefsResearch,
  normalizeAhrefsKeyword,
  resolveAhrefsClusters,
} from './ahrefs.mjs';
import { readAgentArtifacts } from './artifacts.mjs';
import { callClaudeJson, generateFeatureImageBrief } from './claude.mjs';
import { contentAgentConfig } from './content-agent.config.mjs';
import { normalizeFleetbaseArticle, validateFleetbaseArticle } from './content-rules.mjs';
import { buildContextManifest, selectContextSources } from './context.mjs';
import { assertNoDuplicateContent, findDuplicateContent } from './dedupe.mjs';
import { generateArtifacts } from './generate-artifacts.mjs';
import {
  buildGhostDraftPayload,
  createGhostAdminToken,
  getGhostPost,
  listGhostPosts,
  uploadGhostImage,
  updateGhostPost,
} from './ghost-admin.mjs';
import { normalizeArticleLinks, normalizeFleetbaseLinks } from './links.mjs';
import { generateFeatureImage } from './openai-image.mjs';
import { buildAhrefsOrManualResearch, buildAiTopicResearch, buildManualResearch } from './research.mjs';
import { ArticleDraftSchema, RevisedArticleSchema, parseJsonObject } from './schemas.mjs';

async function testAhrefsUrl() {
  const url = buildAhrefsKeywordUrl(contentAgentConfig, 'route optimization API', {
    apiBaseUrl: 'https://example.test/v3',
    country: 'us',
    limit: 25,
  });

  assert.equal(url.origin, 'https://example.test');
  assert.equal(url.pathname, '/v3/keywords-explorer/matching-terms');
  assert.equal(url.searchParams.get('keywords'), 'route optimization API');
  assert.equal(url.searchParams.get('match_mode'), 'terms');
  assert.equal(url.searchParams.get('terms'), 'all');
  assert.equal(url.searchParams.get('limit'), '25');
  assert.ok(url.searchParams.get('select').includes('keyword'));
  assert.ok(url.searchParams.get('select').includes('volume'));
}

function testAhrefsNormalize() {
  const row = normalizeAhrefsKeyword(
    {
      keyword: 'open source fleet management software',
      volume: '1200',
      difficulty: '18',
      traffic_potential: '2100',
      parent_topic: { keyword: 'fleet management software' },
      intents: 'commercial,informational',
    },
    'open source fleet management',
  );

  assert.equal(row.volume, 1200);
  assert.equal(row.difficulty, 18);
  assert.deepEqual(row.intents, ['commercial', 'informational']);
}

function testAhrefsClusterBudget() {
  assert.deepEqual(resolveAhrefsClusters(contentAgentConfig, {
    contentFocus: 'fleetbase-api-tutorial',
  }), [
    'delivery tracking API',
    'proof of delivery API',
    'dispatch API',
  ]);
  assert.deepEqual(resolveAhrefsClusters(contentAgentConfig, {
    contentFocus: 'logistics-software',
    maxClusters: 2,
  }), [
    'last mile delivery software',
    'delivery management software',
  ]);
}

async function testAhrefsResearchFailsOnZeroRows() {
  const fakeFetch = async () => ({
    ok: true,
    status: 200,
    json: async () => ({ keywords: [] }),
  });

  await assert.rejects(
    fetchAhrefsResearch(contentAgentConfig, {
      token: 'test-token',
      fetchImpl: fakeFetch,
      clusters: ['fleet management software'],
    }),
    /zero valid keyword opportunities/,
  );
}

async function testAhrefsResearchArtifacts() {
  const fakeFetch = async () => ({
    ok: true,
    status: 200,
    json: async () => ({
      keywords: [
        {
          keyword: 'open source fleet management software',
          volume: 100,
          difficulty: 12,
          traffic_potential: 300,
        },
        {
          volume: 10,
        },
      ],
    }),
  });

  const research = await fetchAhrefsResearch(contentAgentConfig, {
    token: 'test-token',
    fetchImpl: fakeFetch,
    clusters: ['fleet management software'],
  });

  assert.equal(research.opportunities.length, 1);
  assert.equal(research.requests[0].rowCount, 2);
  assert.equal(research.requests[0].validRowCount, 1);
  assert.equal(research.requests[0].malformedRowCount, 1);
  assert.equal(research.summary.validOpportunityCount, 1);
}

function testManualResearchBypass() {
  const research = buildManualResearch({
    topic: 'Build a delivery tracking workflow with Fleetbase',
    keyword: 'fleetbase delivery tracking workflow',
  });

  assert.equal(research.bypassedAhrefs, true);
  assert.equal(research.opportunities[0].source, 'manual');
  assert.equal(research.summary.bypassedReason.includes('Manual topic'), true);
}

async function testAhrefsUnavailableFallback() {
  const fakeFetch = async () => ({
    ok: false,
    status: 403,
    text: async () =>
      JSON.stringify({
        error: 'API units limit reached. Expected usage: 30, API units left: 0.',
      }),
  });

  const research = await buildAhrefsOrManualResearch(contentAgentConfig, {
    contentFocus: 'logistics-software',
    allowSeedFallback: true,
    useAhrefs: true,
    token: 'test-token',
    fetchImpl: fakeFetch,
  });

  assert.equal(research.ahrefsUnavailable, true);
  assert.equal(research.opportunities[0].source, 'curated-fallback');
  assert.equal(research.summary.ahrefsError.includes('API units limit reached'), true);
}

async function testAhrefsDisabledUsesAiTopicResearch() {
  let fetchCalled = false;
  const fakeFetch = async () => {
    fetchCalled = true;
    throw new Error('Ahrefs should not be called when useAhrefs is false.');
  };

  const research = await buildAhrefsOrManualResearch(contentAgentConfig, {
    contentFocus: 'logistics-software',
    topicMode: 'integration',
    integrationTarget: 'WordPress',
    useAhrefs: false,
    token: 'test-token',
    fetchImpl: fakeFetch,
  });

  assert.equal(fetchCalled, false);
  assert.equal(research.bypassedAhrefs, true);
  assert.equal(research.ahrefsUnavailable, false);
  assert.equal(research.opportunities.length > 0, true);
  assert.equal(research.opportunities[0].source, 'ai-topic-idea');
  assert.equal(
    research.opportunities.some((opportunity) => opportunity.keyword.includes('WordPress')),
    true,
  );

  const directResearch = buildAiTopicResearch(contentAgentConfig, {
    contentFocus: 'logistics-software',
    topicMode: 'api-tutorial',
  });

  assert.equal(directResearch.summary.validOpportunityCount > 0, true);
}

function testGhostTokenAndPayload() {
  const token = createGhostAdminToken(
    'abc123:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
    1700000000,
  );
  const parts = token.split('.');

  assert.equal(parts.length, 3);

  const payload = buildGhostDraftPayload(
    {
      title: 'Route Optimization API Guide',
      slug: 'route-optimization-api-guide',
      html: '<h2>Guide</h2><p>Useful draft.</p>',
      excerpt: 'A practical guide to route optimization APIs.',
      metaTitle: 'Route Optimization API Guide',
      metaDescription: 'Learn how route optimization APIs help logistics teams.',
      publicTags: ['Route Optimization'],
      featureImage: 'https://ghost.example/content/images/feature.png',
      featureImageAlt: 'Abstract logistics dashboard with route planning cards.',
    },
    contentAgentConfig,
  );

  assert.equal(payload.posts[0].status, 'draft');
  assert.equal(payload.posts[0].feature_image, 'https://ghost.example/content/images/feature.png');
  assert.equal(payload.posts[0].feature_image_alt, 'Abstract logistics dashboard with route planning cards.');
  assert.equal(payload.posts[0].tags.some((tag) => tag.name === '#needs-review'), true);
  assert.equal(payload.posts[0].tags.some((tag) => tag.name === 'Route Optimization'), true);
}

async function testClaudeJsonParsing() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            title: 'Route Optimization API Guide',
            slug: 'route-optimization-api-guide',
            excerpt:
              'A practical guide to route optimization APIs for logistics operators evaluating Fleetbase.',
            html: `<h2>${'Guide'.repeat(130)}</h2><p>${'Useful content. '.repeat(80)}</p>`,
            metaTitle: 'Route Optimization API Guide',
            metaDescription: 'Learn how route optimization APIs help logistics teams plan better deliveries.',
            publicTags: ['Route Optimization'],
          }),
        },
      ],
    }),
  });

  const draft = await callClaudeJson({
    apiKey: 'test-key',
    model: 'test-model',
    system: 'test',
    prompt: 'test',
    schema: ArticleDraftSchema,
    fetchImpl: fakeFetch,
  });

  assert.equal(draft.slug, 'route-optimization-api-guide');
}

async function testClaudeToolJsonParsing() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'tool_use',
          name: 'submit_json',
          input: {
            title: 'Route Optimization API Guide',
            slug: 'route-optimization-api-guide',
            excerpt:
              'A practical guide to route optimization APIs for logistics operators evaluating Fleetbase.',
            html: `<h2>${'Guide'.repeat(130)}</h2><p>${'Useful content. '.repeat(80)}</p>`,
            metaTitle: 'Route Optimization API Guide',
            metaDescription: 'Learn how route optimization APIs help logistics teams plan better deliveries.',
            publicTags: ['Route Optimization'],
          },
        },
      ],
    }),
  });

  const draft = await callClaudeJson({
    apiKey: 'test-key',
    model: 'test-model',
    system: 'test',
    prompt: 'test',
    schema: ArticleDraftSchema,
    fetchImpl: fakeFetch,
  });

  assert.equal(draft.slug, 'route-optimization-api-guide');
}

async function testClaudeMaxTokensResponseFails() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      stop_reason: 'max_tokens',
      content: [
        {
          type: 'tool_use',
          name: 'submit_json',
          input: {
            title: 'Route Optimization API Guide',
            slug: 'route-optimization-api-guide',
            excerpt:
              'A practical guide to route optimization APIs for logistics operators evaluating Fleetbase.',
            html: `<h2>${'Guide'.repeat(130)}</h2><p>Truncated response`,
            metaTitle: 'Route Optimization API Guide',
            metaDescription: 'Learn how route optimization APIs help logistics teams plan better deliveries.',
            publicTags: ['Route Optimization'],
          },
        },
      ],
    }),
  });

  await assert.rejects(
    callClaudeJson({
      apiKey: 'test-key',
      model: 'test-model',
      system: 'test',
      prompt: 'test',
      schema: ArticleDraftSchema,
      fetchImpl: fakeFetch,
      retries: 0,
    }),
    /max_tokens/,
  );
}

async function testRevisedArticleJsonParsing() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            title: 'Updated Fleetbase API Tutorial',
            slug: 'updated-fleetbase-api-tutorial',
            excerpt:
              'A revised Fleetbase API tutorial for logistics teams building order workflows.',
            htmlBase64: Buffer.from(
              `<h2>${'Updated'.repeat(130)}</h2><p>${'Useful revised content. '.repeat(80)}</p>`,
            ).toString('base64'),
            metaTitle: 'Updated Fleetbase API Tutorial',
            metaDescription:
              'Revise a Fleetbase API tutorial for logistics and supply chain operators.',
            revisionSummary: ['Tightened intro', 'Added API workflow emphasis'],
          }),
        },
      ],
    }),
  });

  const draft = await callClaudeJson({
    apiKey: 'test-key',
    model: 'test-model',
    system: 'test',
    prompt: 'test',
    schema: RevisedArticleSchema,
    fetchImpl: fakeFetch,
  });

  assert.equal(draft.slug, 'updated-fleetbase-api-tutorial');
  assert.equal(Boolean(draft.htmlBase64), true);
  assert.equal(draft.revisionSummary.length, 2);
}

async function testRevisedArticleMetadataFallbackParsing() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'tool_use',
          name: 'submit_json',
          input: {
            title: 'Updated Fleetbase API Tutorial',
            slug: 'updated-fleetbase-api-tutorial',
            excerpt:
              'A revised Fleetbase API tutorial for logistics teams building order workflows.',
            htmlBase64: Buffer.from(
              `<h2>${'Updated'.repeat(130)}</h2><p>${'Useful revised content. '.repeat(80)}</p>`,
            ).toString('base64'),
            revisionSummary: ['Tightened intro', 'Kept metadata fallback compatible'],
          },
        },
      ],
    }),
  });

  const draft = await callClaudeJson({
    apiKey: 'test-key',
    model: 'test-model',
    system: 'test',
    prompt: 'test',
    schema: RevisedArticleSchema,
    fetchImpl: fakeFetch,
  });

  assert.equal(draft.metaTitle, undefined);
  assert.equal(draft.metaDescription, undefined);
}

async function testFeatureImageBriefGeneration() {
  const previousApiKey = process.env.ANTHROPIC_API_KEY;
  process.env.ANTHROPIC_API_KEY = 'test-key';
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            prompt:
              'Landscape editorial image of a modern logistics software dashboard with route lines, dispatch cards, and warehouse workflow panels. No text or logos.',
            altText: 'Modern logistics software dashboard with route and dispatch visuals.',
            filename: 'fleetbase-logistics-dashboard.png',
          }),
        },
      ],
    }),
  });

  const brief = await generateFeatureImageBrief({
    brief: {
      title: 'Fleetbase API Tutorial',
      targetKeyword: 'fleetbase api tutorial',
    },
    draft: {
      title: 'Fleetbase API Tutorial',
      excerpt: 'Build logistics workflows with Fleetbase.',
      metaTitle: 'Fleetbase API Tutorial',
      metaDescription: 'Build logistics workflows with Fleetbase.',
      publicTags: ['API'],
    },
    config: contentAgentConfig,
    contentFocus: 'fleetbase-api-tutorial',
    fetchImpl: fakeFetch,
  });

  assert.equal(brief.filename, 'fleetbase-logistics-dashboard.png');

  if (previousApiKey === undefined) {
    delete process.env.ANTHROPIC_API_KEY;
  } else {
    process.env.ANTHROPIC_API_KEY = previousApiKey;
  }
}

async function testOpenAiImageGeneration() {
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      data: [
        {
          b64_json: Buffer.from('image-bytes').toString('base64'),
          revised_prompt: 'Revised prompt',
        },
      ],
    }),
  });

  const image = await generateFeatureImage(
    {
      prompt:
        'Landscape editorial image of a logistics software dashboard with map routes and dispatch panels.',
    },
    contentAgentConfig,
    {
      apiKey: 'test-openai-key',
      fetchImpl: fakeFetch,
    },
  );

  assert.equal(image.bytes.toString(), 'image-bytes');
  assert.equal(image.revisedPrompt, 'Revised prompt');
}

async function testGhostImageUpload() {
  const fakeFetch = async (url, options) => {
    assert.equal(String(url), 'https://ghost.example/ghost/api/admin/images/upload/');
    assert.equal(options.method, 'POST');
    assert.equal(options.body instanceof FormData, true);

    return {
      ok: true,
      json: async () => ({
        images: [{ url: 'https://ghost.example/content/images/fleetbase.png' }],
      }),
    };
  };

  const image = await uploadGhostImage(
    {
      bytes: Buffer.from('image-bytes'),
      mimeType: 'image/png',
    },
    'fleetbase.png',
    contentAgentConfig,
    {
      adminApiUrl: 'https://ghost.example',
      adminApiKey: 'abc123:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
      fetchImpl: fakeFetch,
    },
  );

  assert.equal(image.url, 'https://ghost.example/content/images/fleetbase.png');
}

async function testGhostAdminReadAndUpdate() {
  const calls = [];
  const fakeFetch = async (url, options) => {
    calls.push({ url: String(url), options });

    if (options.method === 'PUT') {
      const body = JSON.parse(options.body);
      assert.equal(body.posts[0].status, 'draft');
      assert.equal(body.posts[0].updated_at, '2026-05-28T00:00:00.000Z');

      return {
        ok: true,
        json: async () => ({
          posts: [
            {
              id: 'post-id',
              title: body.posts[0].title,
              slug: body.posts[0].slug,
              status: 'draft',
            },
          ],
        }),
      };
    }

    return {
      ok: true,
      json: async () => ({
        posts: [
          {
            id: 'post-id',
            title: 'Original title',
            slug: 'original-title',
            status: 'draft',
            html: '<p>Original content</p>',
            updated_at: '2026-05-28T00:00:00.000Z',
          },
        ],
      }),
    };
  };

  const post = await getGhostPost('original-title', contentAgentConfig, {
    adminApiUrl: 'https://ghost.example',
    adminApiKey: 'abc123:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
    fetchImpl: fakeFetch,
  });
  const updated = await updateGhostPost(
    post,
    {
      title: 'Revised title',
      slug: 'revised-title',
      html: '<p>Revised content</p>',
      excerpt: 'Revised excerpt for the post.',
      metaTitle: 'Revised title',
      metaDescription: 'Revised meta description for the post.',
    },
    contentAgentConfig,
    {
      adminApiUrl: 'https://ghost.example',
      adminApiKey: 'abc123:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
      fetchImpl: fakeFetch,
    },
  );

  assert.equal(calls.length, 2);
  assert.equal(updated.slug, 'revised-title');
}

async function testGhostAdminListPosts() {
  const fakeFetch = async (url) => {
    assert.equal(String(url).includes('/ghost/api/admin/posts/'), true);
    assert.equal(String(url).includes('limit=all'), true);

    return {
      ok: true,
      json: async () => ({
        posts: [
          {
            id: 'post-id',
            title: 'Existing Fleetbase API Tutorial',
            slug: 'existing-fleetbase-api-tutorial',
            status: 'draft',
          },
        ],
      }),
    };
  };

  const posts = await listGhostPosts(contentAgentConfig, {
    adminApiUrl: 'https://ghost.example',
    adminApiKey: 'abc123:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
    fetchImpl: fakeFetch,
  });

  assert.equal(posts.length, 1);
  assert.equal(posts[0].status, 'draft');
}

function testDuplicateDetection() {
  const posts = [
    {
      title: 'Building Delivery Tracking with Fleetbase',
      slug: 'building-delivery-tracking-with-fleetbase',
      status: 'draft',
      custom_excerpt: 'A Fleetbase delivery tracking workflow guide.',
    },
  ];
  const duplicates = findDuplicateContent(
    {
      title: 'Building Delivery Tracking with Fleetbase',
      slug: 'building-delivery-tracking-with-fleetbase',
      targetKeyword: 'Fleetbase delivery tracking workflow',
    },
    posts,
  );

  assert.equal(duplicates.length > 0, true);
  assert.throws(
    () =>
      assertNoDuplicateContent(
        {
          title: 'Building Delivery Tracking with Fleetbase',
          slug: 'building-delivery-tracking-with-fleetbase',
          targetKeyword: 'Fleetbase delivery tracking workflow',
        },
        posts,
      ),
    /Duplicate content blocked/,
  );
}

async function testAgentArtifactValidation() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'fleetbase-content-agent-artifacts-'));
  const longHtml = `<h2>${'Fleetbase '.repeat(70)}</h2><p>${'Useful logistics content. '.repeat(80)}</p>`;

  await fs.writeFile(
    path.join(root, 'topic.json'),
    JSON.stringify({
      keyword: 'fleetbase delivery tracking workflow',
      cluster: 'fleetbase api tutorial',
      title: 'Build Delivery Tracking with Fleetbase',
      score: 88,
      searchIntent: 'Tutorial',
      businessFit: 10,
      opportunity: 8,
      competitorWeakness: 6,
      cannibalizationRisk: 'low',
      rationale: 'Strong Fleetbase tutorial fit for delivery tracking workflows.',
      suggestedInternalLinks: ['/docs/api/fleetbase/orders'],
    }),
  );
  await fs.writeFile(
    path.join(root, 'brief.json'),
    JSON.stringify({
      title: 'Build Delivery Tracking with Fleetbase',
      slug: 'build-delivery-tracking-with-fleetbase',
      targetKeyword: 'fleetbase delivery tracking workflow',
      secondaryKeywords: ['delivery tracking api'],
      audience: 'Developers building logistics apps',
      searchIntent: 'Tutorial',
      thesis: 'Fleetbase provides source-backed logistics primitives for delivery tracking workflows.',
      outline: ['Intro', 'Create order', 'Track driver', 'Review proof'],
      internalLinks: ['/docs/api/fleetbase/orders'],
      cta: 'Explore Fleetbase docs to build the workflow.',
      metaTitle: 'Build Delivery Tracking with Fleetbase',
      metaDescription: 'Learn how to build delivery tracking workflows with Fleetbase.',
      publicTags: ['API'],
      sourceNotes: ['Verified with source files.'],
    }),
  );
  await fs.writeFile(
    path.join(root, 'draft.json'),
    JSON.stringify({
      title: 'Build Delivery Tracking with Fleetbase',
      slug: 'build-delivery-tracking-with-fleetbase',
      excerpt: 'Learn how to build a delivery tracking workflow with Fleetbase and verified API sources.',
      html: longHtml,
      metaTitle: 'Build Delivery Tracking with Fleetbase',
      metaDescription: 'Learn how to build delivery tracking workflows with Fleetbase.',
      publicTags: ['API'],
      targetKeyword: 'fleetbase delivery tracking workflow',
      ahrefsOpportunity: {
        keyword: 'fleetbase delivery tracking workflow',
        cluster: 'fleetbase api tutorial',
        volume: null,
        difficulty: null,
        trafficPotential: null,
        parentTopic: null,
        intents: [],
        source: 'manual',
      },
      sourceCitations: [
        {
          repo: 'fleetbase/core-api',
          path: 'source-truth/core-api/routes/api.php',
          title: 'Routes',
          claim: 'Fleetbase exposes order API routes.',
          evidence: 'Route definition inspected.',
        },
      ],
    }),
  );
  await fs.writeFile(
    path.join(root, 'source-citations.json'),
    JSON.stringify([
      {
        repo: 'fleetbase/core-api',
        path: 'source-truth/core-api/routes/api.php',
        title: 'Routes',
        claim: 'Fleetbase exposes order API routes.',
        evidence: 'Route definition inspected.',
      },
    ]),
  );
  await fs.writeFile(
    path.join(root, 'qa.json'),
    JSON.stringify({
      publishReady: true,
      score: 88,
      blockingIssues: [],
      warnings: [],
      recommendedFixes: [],
    }),
  );

  const artifacts = await readAgentArtifacts(root);
  assert.equal(artifacts.draft.targetKeyword, 'fleetbase delivery tracking workflow');
  assert.equal(artifacts.sourceCitations.length, 1);
}

async function testStructuredArtifactGeneration() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'fleetbase-content-agent-structured-'));
  const longHtml = [
    '<h2>Connect WordPress orders to Fleetbase delivery operations</h2>',
    `<p>${'A practical Fleetbase and WordPress integration can keep ecommerce order intake separate from delivery execution while giving dispatch teams a source-backed workflow for orders, tracking, and proof of delivery. '.repeat(4)}</p>`,
    '<h2>Use Fleetbase as the logistics control layer</h2>',
    `<p>${'Fleetbase source context supports delivery management, dispatch workflows, driver tracking, and proof-of-delivery content for human editors to refine before publishing. '.repeat(5)}</p>`,
  ].join('');
  const responses = [
    {
      topics: [
        {
          keyword: 'integrate Fleetbase with WordPress',
          cluster: 'integration',
          title: 'Integrate Fleetbase with WordPress for Delivery Operations',
          score: 91,
          searchIntent: 'Tutorial',
          businessFit: 10,
          opportunity: 8,
          competitorWeakness: 6,
          cannibalizationRisk: 'low',
          rationale:
            'A WordPress integration article is specific, practical, and aligned with Fleetbase delivery operations.',
          suggestedInternalLinks: ['https://fleetbase.io/docs'],
        },
      ],
    },
    {
      title: 'Integrate Fleetbase with WordPress for Delivery Operations',
      slug: 'integrate-fleetbase-with-wordpress-delivery-operations',
      targetKeyword: 'integrate Fleetbase with WordPress',
      secondaryKeywords: ['WordPress delivery integration', 'WooCommerce logistics workflow'],
      audience: 'Developers and operations teams connecting ecommerce sites to logistics workflows',
      searchIntent: 'Tutorial',
      thesis:
        'Fleetbase can act as the delivery operations layer behind WordPress or WooCommerce order intake.',
      outline: [
        'Why connect WordPress to Fleetbase',
        'Map ecommerce orders to delivery operations',
        'Use dispatch and tracking workflows',
        'Prepare proof-of-delivery handoff',
      ],
      internalLinks: ['https://fleetbase.io/docs'],
      cta: 'Review the Fleetbase docs and plan a source-verified integration workflow.',
      metaTitle: 'Integrate Fleetbase With WordPress',
      metaDescription:
        'Learn how a WordPress or WooCommerce store can hand delivery operations to Fleetbase.',
      publicTags: ['Integrations', 'Delivery Management'],
      sourceNotes: ['Use provided Fleetbase source context for product claims.'],
    },
    {
      title: 'Integrate Fleetbase with WordPress for Delivery Operations',
      slug: 'integrate-fleetbase-with-wordpress-delivery-operations',
      excerpt:
        'Learn how WordPress or WooCommerce order intake can connect to Fleetbase delivery operations.',
      html: longHtml,
      metaTitle: 'Integrate Fleetbase With WordPress',
      metaDescription:
        'Learn how a WordPress or WooCommerce store can hand delivery operations to Fleetbase.',
      publicTags: ['Integrations', 'Delivery Management'],
      sourceCitations: [
        {
          repo: 'fleetbase.io',
          path: 'src/app/solutions/use-cases/last-mile-delivery/page.tsx',
          title: 'Last-mile delivery',
          claim: 'Fleetbase supports last-mile delivery management workflows.',
          evidence: 'The page describes last-mile delivery, dispatch, and proof-of-delivery workflows.',
        },
      ],
    },
    {
      publishReady: true,
      score: 90,
      blockingIssues: [],
      warnings: [],
      recommendedFixes: ['Human editor should verify integration details before publishing.'],
    },
  ];
  let callCount = 0;
  const previousApiKey = process.env.OPENAI_API_KEY;
  process.env.OPENAI_API_KEY = 'test-openai-key';
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      output_text: JSON.stringify(responses[callCount++]),
    }),
  });

  try {
    await fs.writeFile(
      path.join(root, 'research-input.json'),
      JSON.stringify({
        siteUrl: 'https://fleetbase.io',
        contentFocus: 'logistics-software',
        topicMode: 'integration',
        integrationTarget: 'WordPress',
        ahrefs: {
          bypassedAhrefs: true,
          ahrefsUnavailable: false,
          opportunities: [
            {
              keyword: 'integrate Fleetbase with WordPress',
              cluster: 'integration',
              volume: null,
              difficulty: null,
              trafficPotential: null,
              parentTopic: 'WordPress logistics integration',
              intents: ['informational', 'developer'],
              source: 'ai-topic-idea',
            },
          ],
          requests: [],
          rawResults: [],
          summary: {
            validOpportunityCount: 1,
            bypassedReason: 'Ahrefs disabled for test.',
          },
        },
        existingGhostContent: [],
        sourceManifest: [
          {
            repo: 'fleetbase.io',
            category: 'website-page',
            path: 'src/app/solutions/use-cases/last-mile-delivery/page.tsx',
            title: 'Last-mile delivery',
            excerpt:
              'Fleetbase provides software context for last-mile delivery management, dispatch workflows, driver tracking, and proof of delivery.',
          },
          {
            repo: 'fleetbase/fleetops',
            category: 'fleetops',
            path: 'source-truth/fleetops/addon/routes/operations/orders/index.js',
            title: 'Fleet-Ops orders',
            excerpt:
              'Fleet-Ops contains operational order workflows that help dispatchers manage delivery activity.',
          },
        ],
      }),
    );

    await generateArtifacts({ outputDir: root, fetchImpl: fakeFetch, generateFeatureImage: false });

    const artifacts = await readAgentArtifacts(root);
    assert.equal(callCount, 4);
    assert.equal(artifacts.topic.keyword, 'integrate Fleetbase with WordPress');
    assert.equal(typeof artifacts.topic.businessFit, 'number');
    assert.equal(artifacts.topic.cannibalizationRisk, 'low');
    assert.equal(artifacts.draft.targetKeyword, 'integrate Fleetbase with WordPress');
    assert.equal(artifacts.sourceCitations.length, 1);
  } finally {
    if (previousApiKey === undefined) {
      delete process.env.OPENAI_API_KEY;
    } else {
      process.env.OPENAI_API_KEY = previousApiKey;
    }
  }
}

async function testManualTopicWinsStructuredGeneration() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'fleetbase-content-agent-manual-'));
  const previousApiKey = process.env.OPENAI_API_KEY;
  process.env.OPENAI_API_KEY = 'test-openai-key';
  let callCount = 0;
  const responses = [
    {
      title: 'Build a Fleetbase WordPress Delivery Workflow',
      slug: 'build-fleetbase-wordpress-delivery-workflow',
      targetKeyword: 'build a Fleetbase WordPress delivery workflow',
      secondaryKeywords: ['Fleetbase WordPress integration'],
      audience: 'Developers connecting WordPress to delivery operations',
      searchIntent: 'Manual editorial request',
      thesis:
        'A manual Fleetbase topic should drive the generated brief without another topic-selection pass.',
      outline: ['Context', 'Workflow', 'Citations', 'Review'],
      internalLinks: ['https://fleetbase.io/docs'],
      cta: 'Use Fleetbase docs to verify the integration workflow.',
      metaTitle: 'Fleetbase WordPress Delivery Workflow',
      metaDescription:
        'Plan a source-backed Fleetbase and WordPress delivery workflow for editorial review.',
      publicTags: ['Integrations'],
      sourceNotes: ['Manual topic smoke test.'],
    },
    {
      title: 'Build a Fleetbase WordPress Delivery Workflow',
      slug: 'build-fleetbase-wordpress-delivery-workflow',
      excerpt:
        'Plan a Fleetbase and WordPress delivery workflow with validated content-agent artifacts.',
      html: `<h2>Manual topics stay fixed</h2><p>${'The manual topic path keeps editorial intent intact while still using structured generation for the brief, article, citations, and QA artifacts. '.repeat(7)}</p>`,
      metaTitle: 'Fleetbase WordPress Delivery Workflow',
      metaDescription:
        'Plan a source-backed Fleetbase and WordPress delivery workflow for editorial review.',
      publicTags: ['Integrations'],
      sourceCitations: [
        {
          repo: 'fleetbase.io',
          path: 'content/docs/index.mdx',
          title: 'Fleetbase docs',
          claim: 'Fleetbase documentation is the source for integration planning.',
          evidence: 'Docs source context is passed into the generator.',
        },
      ],
    },
    {
      publishReady: true,
      score: 88,
      blockingIssues: [],
      warnings: [],
      recommendedFixes: [],
    },
  ];
  const fakeFetch = async () => ({
    ok: true,
    json: async () => ({
      output_text: JSON.stringify(responses[callCount++]),
    }),
  });

  try {
    await fs.writeFile(
      path.join(root, 'research-input.json'),
      JSON.stringify({
        contentFocus: 'logistics-software',
        ahrefs: {
          opportunities: [
            {
              keyword: 'build a Fleetbase WordPress delivery workflow',
              cluster: 'manual',
              volume: null,
              difficulty: null,
              trafficPotential: null,
              parentTopic: null,
              intents: [],
              source: 'manual',
            },
          ],
        },
        existingGhostContent: [],
        sourceManifest: [
          {
            repo: 'fleetbase.io',
            category: 'documentation',
            path: 'content/docs/index.mdx',
            title: 'Fleetbase docs',
            excerpt:
              'Fleetbase documentation supports source-backed planning for logistics workflows.',
          },
        ],
      }),
    );

    await generateArtifacts({ outputDir: root, fetchImpl: fakeFetch, generateFeatureImage: false });

    const artifacts = await readAgentArtifacts(root);
    assert.equal(callCount, 3);
    assert.equal(artifacts.topic.keyword, 'build a Fleetbase WordPress delivery workflow');
    assert.equal(artifacts.topic.score, 100);
    assert.equal(artifacts.topic.businessFit, 10);
  } finally {
    if (previousApiKey === undefined) {
      delete process.env.OPENAI_API_KEY;
    } else {
      process.env.OPENAI_API_KEY = previousApiKey;
    }
  }
}

function testParseJsonObject() {
  assert.deepEqual(parseJsonObject('prefix {"ok": true} suffix'), { ok: true });
  assert.deepEqual(parseJsonObject('{"html": "<p>Line one\nLine two</p>"}'), {
    html: '<p>Line one\nLine two</p>',
  });
}

function testFleetbaseLinkNormalization() {
  assert.equal(
    normalizeFleetbaseLinks('Read https://fleetbase.ghost.io/docs/api/fleetbase/orders now.'),
    'Read https://fleetbase.io/docs/api/fleetbase/orders now.',
  );
  assert.equal(
    normalizeFleetbaseLinks('<a href="https://www.fleetbase.io/docs">Docs</a>'),
    '<a href="https://fleetbase.io/docs">Docs</a>',
  );

  const article = normalizeArticleLinks({
    excerpt: 'See https://fleetbase.ghost.io/docs',
    html: '<a href="https://fleetbase.ghost.io/docs/platform">Platform docs</a>',
    metaDescription: 'Visit https://www.fleetbase.io/docs',
  });

  assert.equal(article.excerpt, 'See https://fleetbase.io/docs');
  assert.equal(article.html, '<a href="https://fleetbase.io/docs/platform">Platform docs</a>');
  assert.equal(article.metaDescription, 'Visit https://fleetbase.io/docs');
}

function testFleetbaseContentRules() {
  const normalized = normalizeFleetbaseArticle({
    title: 'FleetOps Order Configurations Guide',
    excerpt: 'See https://fleetbase.ghost.io/docs for FleetOps help.',
    html: '<p>FleetOps extension docs at https://fleetbase.ghost.io/docs/api.</p>',
    metaTitle: 'FleetOps Guide',
    metaDescription: 'FleetOps and Order Configurations.',
  });

  assert.equal(normalized.title, 'Fleet-Ops Order Config Guide');
  assert.equal(normalized.excerpt, 'See https://fleetbase.io/docs for Fleet-Ops help.');
  assert.equal(normalized.html, '<p>Fleet-Ops docs at https://fleetbase.io/docs/api.</p>');
  assert.equal(normalized.metaDescription, 'Fleet-Ops and Order Config.');

  const invalid = validateFleetbaseArticle({
    title: 'API-first ride hailing app',
    excerpt: 'Use order_config for quotes.',
    html: '<p>Create an adhoc order and then run orchestrator for manual dispatch.</p>',
    metaTitle: 'API-first guide',
    metaDescription: 'Uses platform-level activity.',
  });

  assert.equal(invalid.blockingIssues.length, 0);
  assert.equal(
    invalid.warnings.some((item) => item.includes('[outdated-api-first-positioning]')),
    true,
  );

  const warning = validateFleetbaseArticle({
    title: 'Build proof of delivery in Fleetbase',
    excerpt: 'A proof of delivery guide.',
    html: '<p>Capture delivery proof for an order.</p>',
    metaTitle: 'Proof of delivery',
    metaDescription: 'Proof of delivery guide.',
  });

  assert.equal(warning.warnings.some((item) => item.includes('/v1/orders/:id/proofs')), true);
}

function testSourceTruthRepoConfig() {
  const expectedRepos = [
    'fleetbase/core-api',
    'fleetbase/fleetops',
    'fleetbase/ledger',
    'fleetbase/storefront',
    'fleetbase/dev-engine',
    'fleetbase/iam-engine',
    'fleetbase/ember-core',
    'fleetbase/pallet',
    'fleetbase/postman',
  ];

  assert.deepEqual(
    contentAgentConfig.sourceTruthRepos.map((repo) => repo.repo),
    expectedRepos,
  );
  assert.equal(
    contentAgentConfig.sourceTruthRepos.every(
      (repo) => repo.path.startsWith('source-truth/') || repo.path === 'vendor/postman',
    ),
    true,
  );
}

async function writeFixtureFile(root, filePath, content) {
  const absolutePath = path.join(root, filePath);
  await fs.mkdir(path.dirname(absolutePath), { recursive: true });
  await fs.writeFile(absolutePath, content);
}

async function testContextManifestAndSelection() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'fleetbase-content-agent-'));

  await writeFixtureFile(
    root,
    'content/docs/api/fleetbase/orders.mdx',
    '# Orders API\nCreate and manage Fleetbase orders with pickup, dropoff, payload, tracking, and dispatch examples.',
  );
  await writeFixtureFile(
    root,
    'src/app/developers/api/api-page-content.tsx',
    'export default function ApiPageContent() { return <main>Fleetbase API tutorials for developers building logistics workflows.</main>; }',
  );
  await writeFixtureFile(
    root,
    'src/app/page.tsx',
    'export default function HomePage() { return <main>Fleetbase logistics software for fleet operations, dispatch, and supply chain workflows.</main>; }',
  );
  await writeFixtureFile(
    root,
    'source-truth/core-api/src/Http/Controllers/Api/v1/OrderController.php',
    '<?php class OrderController { public function create() { return "Create Fleetbase orders, payloads, and dispatch workflows through the API."; } }',
  );

  const manifest = await buildContextManifest(contentAgentConfig, { root });
  const selected = selectContextSources(manifest, contentAgentConfig, {
    contentFocus: 'fleetbase-api-tutorial',
    topic: {
      title: 'Build an order tracking workflow with the Fleetbase API',
      keyword: 'fleetbase api tutorial',
    },
  });

  assert.equal(
    manifest.some((item) => item.path === 'content/docs/api/fleetbase/orders.mdx'),
    true,
  );
  assert.equal(
    manifest.some((item) => item.path === 'src/app/developers/api/api-page-content.tsx'),
    true,
  );
  assert.equal(manifest.some((item) => item.path === 'src/app/page.tsx'), true);
  assert.equal(selected.some((item) => item.path.includes('content/docs/api/')), true);
  assert.equal(
    selected.some(
      (item) =>
        item.path ===
        'source-truth/core-api/src/Http/Controllers/Api/v1/OrderController.php',
    ),
    true,
  );
}

await testAhrefsUrl();
testAhrefsNormalize();
testAhrefsClusterBudget();
await testAhrefsResearchFailsOnZeroRows();
await testAhrefsResearchArtifacts();
testManualResearchBypass();
await testAhrefsUnavailableFallback();
await testAhrefsDisabledUsesAiTopicResearch();
testGhostTokenAndPayload();
await testClaudeJsonParsing();
await testClaudeToolJsonParsing();
await testClaudeMaxTokensResponseFails();
await testRevisedArticleJsonParsing();
await testRevisedArticleMetadataFallbackParsing();
await testFeatureImageBriefGeneration();
await testOpenAiImageGeneration();
await testGhostImageUpload();
await testGhostAdminReadAndUpdate();
await testGhostAdminListPosts();
testDuplicateDetection();
await testAgentArtifactValidation();
await testStructuredArtifactGeneration();
await testManualTopicWinsStructuredGeneration();
testParseJsonObject();
testFleetbaseLinkNormalization();
testFleetbaseContentRules();
testSourceTruthRepoConfig();
await testContextManifestAndSelection();

console.log('[content-agent:test] All self-tests passed.');
