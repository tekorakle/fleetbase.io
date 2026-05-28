#!/usr/bin/env node

import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { buildAhrefsKeywordUrl, normalizeAhrefsKeyword } from './ahrefs.mjs';
import { callClaudeJson } from './claude.mjs';
import { contentAgentConfig } from './content-agent.config.mjs';
import { buildContextManifest, selectContextSources } from './context.mjs';
import { buildGhostDraftPayload, createGhostAdminToken } from './ghost-admin.mjs';
import { ArticleDraftSchema, parseJsonObject } from './schemas.mjs';

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
testParseJsonObject();
testSourceTruthRepoConfig();
await testContextManifestAndSelection();

console.log('[content-agent:test] All self-tests passed.');
