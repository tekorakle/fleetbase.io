#!/usr/bin/env node

import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { buildAhrefsKeywordUrl, normalizeAhrefsKeyword } from './ahrefs.mjs';
import { callClaudeJson } from './claude.mjs';
import { contentAgentConfig } from './content-agent.config.mjs';
import { buildContextManifest, selectContextSources } from './context.mjs';
import {
  buildGhostDraftPayload,
  createGhostAdminToken,
  getGhostPost,
  updateGhostPost,
} from './ghost-admin.mjs';
import { ArticleDraftSchema, RevisedArticleSchema, parseJsonObject } from './schemas.mjs';

async function testAhrefsUrl() {
  const url = buildAhrefsKeywordUrl(contentAgentConfig, 'route optimization API', {
    apiBaseUrl: 'https://example.test/v3',
    country: 'us',
    limit: 25,
  });

  assert.equal(url.origin, 'https://example.test');
  assert.equal(url.pathname, '/v3/keywords-explorer/matching-terms');
  assert.equal(url.searchParams.get('matching'), 'route optimization API');
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
    },
    contentAgentConfig,
  );

  assert.equal(payload.posts[0].status, 'draft');
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
            html: `<h2>${'Updated'.repeat(130)}</h2><p>${'Useful revised content. '.repeat(80)}</p>`,
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
  assert.equal(draft.revisionSummary.length, 2);
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

function testParseJsonObject() {
  assert.deepEqual(parseJsonObject('prefix {"ok": true} suffix'), { ok: true });
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
  ];

  assert.deepEqual(
    contentAgentConfig.sourceTruthRepos.map((repo) => repo.repo),
    expectedRepos,
  );
  assert.equal(
    contentAgentConfig.sourceTruthRepos.every((repo) => repo.path.startsWith('source-truth/')),
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
testGhostTokenAndPayload();
await testClaudeJsonParsing();
await testRevisedArticleJsonParsing();
await testGhostAdminReadAndUpdate();
testParseJsonObject();
testSourceTruthRepoConfig();
await testContextManifestAndSelection();

console.log('[content-agent:test] All self-tests passed.');
