import { z } from 'zod';

export const KeywordOpportunitySchema = z.object({
  keyword: z.string().min(1),
  cluster: z.string().min(1),
  volume: z.number().nonnegative().nullable().default(null),
  difficulty: z.number().nonnegative().nullable().default(null),
  trafficPotential: z.number().nonnegative().nullable().default(null),
  parentTopic: z.string().nullable().default(null),
  intents: z.array(z.string()).default([]),
  source: z.string().default('ahrefs'),
});

export const TopicScoreSchema = z.object({
  keyword: z.string().min(1),
  cluster: z.string().min(1),
  title: z.string().min(8),
  score: z.number().min(0).max(100),
  searchIntent: z.string().min(1),
  businessFit: z.number().min(0).max(10),
  opportunity: z.number().min(0).max(10),
  competitorWeakness: z.number().min(0).max(10),
  cannibalizationRisk: z.enum(['low', 'medium', 'high']),
  rationale: z.string().min(20),
  suggestedInternalLinks: z.array(z.string()).default([]),
});

export const ContentBriefSchema = z.object({
  title: z.string().min(8),
  slug: z.string().min(3),
  targetKeyword: z.string().min(1),
  secondaryKeywords: z.array(z.string()).default([]),
  audience: z.string().min(1),
  searchIntent: z.string().min(1),
  thesis: z.string().min(20),
  outline: z.array(z.string().min(3)).min(4),
  internalLinks: z.array(z.string()).default([]),
  cta: z.string().min(10),
  metaTitle: z.string().min(10).max(80),
  metaDescription: z.string().min(30).max(180),
  publicTags: z.array(z.string()).default([]),
  sourceNotes: z.array(z.string()).default([]),
});

export const ArticleDraftSchema = z.object({
  title: z.string().min(8),
  slug: z.string().min(3),
  excerpt: z.string().min(30).max(300),
  html: z.string().min(500),
  metaTitle: z.string().min(10).max(80),
  metaDescription: z.string().min(30).max(180),
  publicTags: z.array(z.string()).default([]),
});

export const QaResultSchema = z.object({
  publishReady: z.boolean(),
  score: z.number().min(0).max(100),
  blockingIssues: z.array(z.string()).default([]),
  warnings: z.array(z.string()).default([]),
  recommendedFixes: z.array(z.string()).default([]),
});

export const GhostDraftResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  url: z.string().nullable().default(null),
  status: z.literal('draft'),
});

export function parseJsonObject(text) {
  const trimmed = text.trim();

  try {
    return JSON.parse(trimmed);
  } catch {
    const start = trimmed.indexOf('{');
    const end = trimmed.lastIndexOf('}');

    if (start === -1 || end === -1 || end <= start) {
      throw new Error('Model response did not contain a JSON object.');
    }

    return JSON.parse(trimmed.slice(start, end + 1));
  }
}
