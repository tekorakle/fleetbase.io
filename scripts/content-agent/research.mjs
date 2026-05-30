import { fetchAhrefsResearch } from './ahrefs.mjs';

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

  return fetchAhrefsResearch(config, {
    contentFocus: options.contentFocus,
    strict: options.allowSeedFallback !== true,
  });
}
