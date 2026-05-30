import { fetchAhrefsResearch } from './ahrefs.mjs';

function toFallbackOpportunity(item, contentFocus) {
  return {
    keyword: item.keyword,
    cluster: item.cluster || contentFocus || 'curated-fallback',
    volume: null,
    difficulty: null,
    trafficPotential: null,
    parentTopic: item.parentTopic || null,
    intents: item.intents || [],
    source: 'curated-fallback',
  };
}

export function buildFallbackResearch(config, { contentFocus, reason, error = null } = {}) {
  const fallbackItems =
    config.fallbackOpportunitiesByFocus?.[contentFocus] ||
    config.fallbackOpportunitiesByFocus?.['logistics-software'] ||
    [];
  const opportunities = fallbackItems.map((item) => toFallbackOpportunity(item, contentFocus));

  return {
    bypassedAhrefs: true,
    ahrefsUnavailable: true,
    opportunities,
    requests: error?.requests || [],
    rawResults: [],
    summary: {
      clusterCount: 0,
      requestCount: error?.requests?.length || 0,
      totalRows: 0,
      validOpportunityCount: opportunities.length,
      malformedRowCount: 0,
      selectedFields: [],
      fallbackReason: reason,
      ahrefsError: error?.message || null,
      strict: false,
    },
  };
}

export function buildManualResearch({ topic, keyword }) {
  const targetKeyword = keyword || topic;

  return {
    bypassedAhrefs: true,
    opportunities: [
      {
        keyword: targetKeyword,
        cluster: 'manual',
        volume: null,
        difficulty: null,
        trafficPotential: null,
        parentTopic: null,
        intents: [],
        source: 'manual',
      },
    ],
    requests: [],
    rawResults: [],
    summary: {
      clusterCount: 0,
      requestCount: 0,
      totalRows: 0,
      validOpportunityCount: 1,
      malformedRowCount: 0,
      selectedFields: [],
      bypassedReason: 'Manual topic override supplied through workflow_dispatch.',
      strict: false,
    },
  };
}

export async function buildAhrefsOrManualResearch(config, options = {}) {
  if (options.topic) {
    return buildManualResearch({ topic: options.topic, keyword: options.keyword });
  }

  const allowFallback =
    options.allowSeedFallback ||
    config.allowAhrefsFallbackByDefault ||
    process.env.CONTENT_AGENT_REQUIRE_AHREFS !== 'true';

  try {
    return await fetchAhrefsResearch(config, {
      token: options.token,
      fetchImpl: options.fetchImpl,
      contentFocus: options.contentFocus,
      strict: true,
    });
  } catch (error) {
    if (!allowFallback) {
      throw error;
    }

    console.warn(
      `[content-agent:prepare] Ahrefs unavailable; using curated fallback opportunities: ${error.message}`,
    );

    return buildFallbackResearch(config, {
      contentFocus: options.contentFocus,
      reason: 'Ahrefs unavailable or quota exhausted.',
      error,
    });
  }
}
