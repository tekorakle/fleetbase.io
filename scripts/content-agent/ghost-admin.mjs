import crypto from 'node:crypto';

import { GhostDraftResultSchema } from './schemas.mjs';

function base64url(input) {
  return Buffer.from(input).toString('base64url');
}

export function createGhostAdminToken(adminApiKey, now = Math.floor(Date.now() / 1000)) {
  if (!adminApiKey || !adminApiKey.includes(':')) {
    throw new Error('GHOST_ADMIN_API_KEY must use Ghost Admin API key format: id:secret.');
  }

  const [id, secret] = adminApiKey.split(':');
  const header = { alg: 'HS256', kid: id, typ: 'JWT' };
  const payload = {
    iat: now,
    exp: now + 5 * 60,
    aud: '/admin/',
  };
  const encodedHeader = base64url(JSON.stringify(header));
  const encodedPayload = base64url(JSON.stringify(payload));
  const signature = crypto
    .createHmac('sha256', Buffer.from(secret, 'hex'))
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest('base64url');

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

function normalizeAdminUrl(value) {
  const apiUrl = value?.trim().replace(/\/+$/, '');

  if (!apiUrl) {
    throw new Error('Missing GHOST_ADMIN_API_URL. Add it as a GitHub Actions secret.');
  }

  return apiUrl;
}

function toGhostTags(publicTags, internalTags) {
  return [...new Set([...(publicTags || []), ...internalTags])]
    .filter(Boolean)
    .map((name) => ({ name }));
}

export function buildGhostDraftPayload(draft, config) {
  return {
    posts: [
      {
        title: draft.title,
        slug: draft.slug,
        status: 'draft',
        html: draft.html,
        custom_excerpt: draft.excerpt,
        meta_title: draft.metaTitle,
        meta_description: draft.metaDescription,
        tags: toGhostTags(draft.publicTags, config.ghost.internalTags),
      },
    ],
  };
}

export async function createGhostDraft(draft, config, options = {}) {
  const adminApiUrl = normalizeAdminUrl(options.adminApiUrl || process.env.GHOST_ADMIN_API_URL);
  const adminApiKey = options.adminApiKey || process.env.GHOST_ADMIN_API_KEY;

  if (!adminApiKey) {
    throw new Error('Missing GHOST_ADMIN_API_KEY. Add it as a GitHub Actions secret.');
  }

  const token = createGhostAdminToken(adminApiKey);
  const url = new URL(`${adminApiUrl}/ghost/api/admin/posts/`);
  url.searchParams.set('source', 'html');

  const response = await (options.fetchImpl || fetch)(url, {
    method: 'POST',
    headers: {
      Authorization: `Ghost ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Version': process.env.GHOST_API_VERSION || config.ghost.apiVersion,
    },
    body: JSON.stringify(buildGhostDraftPayload(draft, config)),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Ghost Admin API draft creation failed with status ${response.status}: ${body.slice(0, 500)}`,
    );
  }

  const payload = await response.json();
  const post = payload.posts?.[0];

  return GhostDraftResultSchema.parse({
    id: post.id,
    title: post.title,
    slug: post.slug,
    url: post.url || null,
    status: post.status,
  });
}
