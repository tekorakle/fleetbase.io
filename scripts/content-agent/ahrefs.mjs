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

function sanitizeAhrefsUrl(url) {
  return {
    pathname: url.pathname,
    params: Object.fromEntries(url.searchParams.entries()),
  };
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

function getPositiveIntegerEnv(name, fallback) {
  const value = Number(process.env[name]);
  return Number.isInteger(value) && value > 0 ? value : fallback;
}

export function resolveAhrefsClusters(config, options = {}) {
  const configured =
    options.clusters ||
    config.seedClustersByFocus?.[options.contentFocus] ||
    config.seedClusters;
  const maxClusters =
    options.maxClusters ||
    getPositiveIntegerEnv(
      'CONTENT_AGENT_MAX_AHREFS_CLUSTERS',
      config.maxAhrefsClustersPerRun || configured.length,
    );

  return configured.slice(0, maxClusters);
}

export async function fetchAhrefsResearch(config, options = {}) {
  const token = options.token || process.env.AHREFS_API_TOKEN;

  if (!token) {
    throw new Error('Missing AHREFS_API_TOKEN. Add it as a GitHub Actions secret.');
  }

  const fetchImpl = options.fetchImpl || fetch;
  const clusters = resolveAhrefsClusters(config, options);
  const limit =
    options.limit ||
    getPositiveIntegerEnv('CONTENT_AGENT_MAX_AHREFS_ROWS', config.maxAhrefsRowsPerRequest);
  const opportunities = [];
  const requests = [];
  const rawResults = [];

  for (const cluster of clusters) {
    const url = buildAhrefsKeywordUrl(config, cluster, { ...options, limit });
    const response = await fetchImpl(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    });
    const request = {
      cluster,
      ...sanitizeAhrefsUrl(url),
      status: response.status,
      ok: response.ok,
      rowCount: 0,
      validRowCount: 0,
      malformedRowCount: 0,
      select: config.ahrefs.keywordSelectFields,
    };

    if (!response.ok) {
      const body = await response.text();
      request.error = body.slice(0, 500);
      requests.push(request);
      const error = new Error(
        `Ahrefs request failed for "${cluster}" with status ${response.status}: ${body.slice(0, 500)}`,
      );
      error.requests = requests;
      throw error;
    }

    const payload = await response.json();
    const rows = extractRows(payload).slice(0, config.maxAhrefsRowsPerRequest);
    request.rowCount = rows.length;
    rawResults.push({ cluster, rows });

    for (const row of rows) {
      try {
        opportunities.push(normalizeAhrefsKeyword(row, cluster));
        request.validRowCount += 1;
      } catch (error) {
        request.malformedRowCount += 1;
        console.warn(`[content-agent] Skipping malformed Ahrefs row for "${cluster}": ${error.message}`);
      }
    }

    requests.push(request);
  }

  const summary = {
    clusterCount: clusters.length,
    requestCount: requests.length,
    totalRows: requests.reduce((sum, request) => sum + request.rowCount, 0),
    validOpportunityCount: opportunities.length,
    malformedRowCount: requests.reduce((sum, request) => sum + request.malformedRowCount, 0),
    selectedFields: config.ahrefs.keywordSelectFields,
    strict: options.strict !== false,
  };

  if (summary.validOpportunityCount === 0 && options.strict !== false) {
    const error = new Error(
      'Ahrefs returned zero valid keyword opportunities. Check AHREFS_API_TOKEN, plan access, request parameters, and seed clusters before generating content.',
    );
    error.requests = requests;
    throw error;
  }

  return { opportunities, requests, rawResults, summary };
}

export async function fetchAhrefsKeywordIdeas(config, options = {}) {
  const research = await fetchAhrefsResearch(config, options);
  return research.opportunities;
}
