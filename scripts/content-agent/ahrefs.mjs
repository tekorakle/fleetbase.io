import { KeywordOpportunitySchema } from './schemas.mjs';

function toNumber(value) {
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function toIntentList(value) {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === 'string') {
    return value
      .split(/[,|]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

export function buildAhrefsKeywordUrl(config, cluster, options = {}) {
  const baseUrl = options.apiBaseUrl || config.ahrefs.apiBaseUrl;
  const url = new URL(`${baseUrl.replace(/\/+$/, '')}${config.ahrefs.keywordEndpoint}`);
  const select = config.ahrefs.keywordSelectFields.join(',');

  url.searchParams.set('country', options.country || config.defaultCountry);
  url.searchParams.set('limit', String(options.limit || config.maxAhrefsRowsPerRequest));
  url.searchParams.set('select', select);
  url.searchParams.set('keywords', cluster);
  url.searchParams.set('match_mode', options.matchMode || config.ahrefs.matchMode || 'terms');
  url.searchParams.set('terms', options.terms || config.ahrefs.terms || 'all');

  return url;
}

export function normalizeAhrefsKeyword(row, cluster) {
  const keyword = row.keyword || row.query || row.term || row.phrase;

  return KeywordOpportunitySchema.parse({
    keyword,
    cluster,
    volume: toNumber(row.volume),
    difficulty: toNumber(row.difficulty ?? row.keyword_difficulty ?? row.kd),
    trafficPotential: toNumber(row.traffic_potential ?? row.trafficPotential),
    parentTopic:
      row.parent_topic?.keyword ||
      row.parent_topic ||
      row.parentTopic ||
      row.parent ||
      null,
    intents: toIntentList(row.intents ?? row.intent),
    source: 'ahrefs',
  });
}

function extractRows(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.keywords)) return payload.keywords;
  if (Array.isArray(payload.rows)) return payload.rows;
  if (Array.isArray(payload.data)) return payload.data;
  return [];
}

export async function fetchAhrefsKeywordIdeas(config, options = {}) {
  const token = options.token || process.env.AHREFS_API_TOKEN;

  if (!token) {
    throw new Error('Missing AHREFS_API_TOKEN. Add it as a GitHub Actions secret.');
  }

  const fetchImpl = options.fetchImpl || fetch;
  const clusters = options.clusters || config.seedClusters;
  const opportunities = [];

  for (const cluster of clusters) {
    const url = buildAhrefsKeywordUrl(config, cluster, options);
    const response = await fetchImpl(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(
        `Ahrefs request failed for "${cluster}" with status ${response.status}: ${body.slice(0, 500)}`,
      );
    }

    const payload = await response.json();
    const rows = extractRows(payload).slice(0, config.maxAhrefsRowsPerRequest);

    for (const row of rows) {
      try {
        opportunities.push(normalizeAhrefsKeyword(row, cluster));
      } catch (error) {
        console.warn(`[content-agent] Skipping malformed Ahrefs row for "${cluster}": ${error.message}`);
      }
    }
  }

  return opportunities;
}
