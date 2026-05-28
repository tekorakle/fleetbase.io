const LINK_REWRITES = [
  [/https:\/\/fleetbase\.ghost\.io\/docs(?=\/|["')\s?#]|$)/gi, 'https://fleetbase.io/docs'],
  [/https:\/\/www\.fleetbase\.io\/docs(?=\/|["')\s?#]|$)/gi, 'https://fleetbase.io/docs'],
  [/https:\/\/fleetbase\.ghost\.io\/blog(?=\/|["')\s?#]|$)/gi, 'https://fleetbase.io/blog'],
  [/https:\/\/www\.fleetbase\.io\/blog(?=\/|["')\s?#]|$)/gi, 'https://fleetbase.io/blog'],
  [/https:\/\/fleetbase\.ghost\.io(?=\/|["')\s?#]|$)/gi, 'https://fleetbase.io'],
  [/https:\/\/www\.fleetbase\.io(?=\/|["')\s?#]|$)/gi, 'https://fleetbase.io'],
];

export function normalizeFleetbaseLinks(value) {
  if (typeof value !== 'string') return value;

  return LINK_REWRITES.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    value,
  );
}

export function normalizeArticleLinks(article) {
  return {
    ...article,
    excerpt: normalizeFleetbaseLinks(article.excerpt),
    html: normalizeFleetbaseLinks(article.html),
    metaDescription: normalizeFleetbaseLinks(article.metaDescription),
  };
}
