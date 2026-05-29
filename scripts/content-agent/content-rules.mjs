import { normalizeArticleLinks } from './links.mjs';

const TERM_REWRITES = [
  [/\bFleetOps\b/g, 'Fleet-Ops'],
  [/\bFleet-Ops extension\b/gi, 'Fleet-Ops'],
  [/\bOrder Configurations\b/g, 'Order Config'],
  [/\bhttps:\/\/www\.fleetbase\.io\/docs\b/gi, 'https://fleetbase.io/docs'],
];

const REVIEW_RULES = [
  {
    id: 'outdated-api-first-positioning',
    pattern: /\bAPI[- ]first\b/i,
    message: 'Remove outdated "API-first" Fleetbase positioning.',
  },
  {
    id: 'ghost-docs-url',
    pattern: /fleetbase\.ghost\.io\/docs/i,
    message: 'Use https://fleetbase.io/docs, never fleetbase.ghost.io/docs.',
  },
  {
    id: 'wrong-service-quote-param',
    pattern: /\border_config\b/i,
    message:
      'Do not use order_config for service quote queries; use service and serviceType.',
  },
  {
    id: 'platform-level-activity',
    pattern: /platform[- ]level activit/i,
    message: 'Do not invent platform-level activity definitions; activity is defined by order config.',
  },
  {
    id: 'manual-dispatch-for-adhoc',
    pattern: /adhoc[\s\S]{0,700}(manual dispatch|driver assignment|orchestrator)/i,
    message:
      'Ad hoc order flows broadcast to nearby drivers; do not require manual dispatch, driver assignment, or orchestrator allocation.',
  },
];

const WARNING_RULES = [
  {
    id: 'missing-adhoc-param',
    appliesTo: /uber|ride[- ]hailing|on[- ]demand|ad hoc|adhoc/i,
    pattern: /\badhoc\b/i,
    message: 'Uber-like or ad hoc order tutorials should mention adhoc: true.',
  },
  {
    id: 'missing-proof-endpoint',
    appliesTo: /proof of delivery|pod|delivery proof/i,
    pattern: /\/v1\/orders\/:id\/proofs/i,
    message: 'Proof-of-delivery tutorials should reference /v1/orders/:id/proofs.',
  },
  {
    id: 'missing-socketcluster-location',
    appliesTo: /real[- ]time location|driver location|tracking/i,
    pattern: /socketcluster|driver(?:'s)? channel/i,
    message:
      'Driver realtime location guidance should mention Fleetbase SocketCluster and the accepted driver channel.',
  },
];

function rewriteText(value) {
  if (typeof value !== 'string') return value;

  return TERM_REWRITES.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    value,
  );
}

export function normalizeFleetbaseArticle(article) {
  const linked = normalizeArticleLinks(article);

  return {
    ...linked,
    title: rewriteText(linked.title),
    excerpt: rewriteText(linked.excerpt),
    html: rewriteText(linked.html),
    metaTitle: rewriteText(linked.metaTitle),
    metaDescription: rewriteText(linked.metaDescription),
  };
}

export function validateFleetbaseArticle(article) {
  const text = [
    article.title,
    article.excerpt,
    article.html,
    article.metaTitle,
    article.metaDescription,
  ]
    .filter(Boolean)
    .join('\n');
  const reviewWarnings = REVIEW_RULES.filter((rule) => rule.pattern.test(text)).map(
    (rule) => `[${rule.id}] ${rule.message}`,
  );
  const missingGuidanceWarnings = WARNING_RULES.filter((rule) => rule.appliesTo.test(text) && !rule.pattern.test(text)).map(
    (rule) => `[${rule.id}] ${rule.message}`,
  );

  return {
    blockingIssues: [],
    warnings: [...reviewWarnings, ...missingGuidanceWarnings],
  };
}
