import { parseJsonObject } from './schemas.mjs';

function extractTextFromMessage(message) {
  return (message.content || [])
    .filter((block) => block.type === 'text')
    .map((block) => block.text)
    .join('\n')
    .trim();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRetryDelayMs(response) {
  const retryAfter = Number(response.headers?.get?.('retry-after'));

  if (Number.isFinite(retryAfter) && retryAfter > 0) {
    return retryAfter * 1000;
  }

  return 65000;
}

export async function callClaudeJson({
  apiKey = process.env.ANTHROPIC_API_KEY,
  model = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6',
  system,
  prompt,
  schema,
  maxTokens = 4096,
  temperature = 0.2,
  fetchImpl = fetch,
  retries = 2,
}) {
  if (!apiKey) {
    throw new Error('Missing ANTHROPIC_API_KEY. Add it as a GitHub Actions secret.');
  }

  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const response = await fetchImpl('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: maxTokens,
        temperature,
        system,
        messages: [
          {
            role: 'user',
            content: `${prompt}\n\nReturn only one valid JSON object. Do not include markdown fences.`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const body = await response.text();

      if (response.status === 429 && attempt < retries) {
        const delayMs = getRetryDelayMs(response);
        console.warn(
          `Anthropic rate limit hit. Waiting ${Math.ceil(delayMs / 1000)} seconds before retrying.`,
        );
        await sleep(delayMs);
        continue;
      }

      throw new Error(
        `Anthropic request failed with status ${response.status}: ${body.slice(0, 500)}`,
      );
    }

    const message = await response.json();
    const text = extractTextFromMessage(message);

    try {
      return schema.parse(parseJsonObject(text));
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(`Claude response failed schema validation: ${lastError.message}`);
}

export async function scoreTopics({ opportunities, context, config, contentFocus, fetchImpl }) {
  const system =
    'You are Fleetbase SEO strategist. Prefer accurate, product-backed logistics and supply chain topics over generic traffic. Avoid inventing Fleetbase capabilities.';
  const prompt = JSON.stringify(
    {
      task: 'Score SEO content opportunities for Fleetbase.',
      contentFocus,
      contentStrategy: config.contentStrategy,
      hardRules: [
        'Reject generic keywords that cannot be tied directly to Fleetbase logistics software, supply chain software, fleet operations, delivery management, warehouse/inventory workflows, or Fleetbase API tutorials.',
        'For fleetbase-api-tutorial focus, prefer build/use/tutorial topics over comparison or generic definition posts.',
        'For logistics-software and supply-chain-software focus, prefer commercial and informational SEO topics with clear Fleetbase product relevance.',
        'Do not choose topics where Fleetbase context does not support a credible article.',
      ],
      scoring: {
        score: '0-100 weighted total',
        businessFit: '0-10',
        opportunity: '0-10',
        competitorWeakness: '0-10',
      },
      maxResults: config.maxShortlistedTopics,
      competitorDomains: config.competitorDomains,
      opportunities: opportunities.slice(0, 40),
      fleetbaseContext: context.summary,
      existingBlogPosts: context.existingBlogPosts,
      requiredJsonShape: {
        topics: [
          {
            keyword: 'string',
            cluster: 'string',
            title: 'string',
            score: 0,
            searchIntent: 'string',
            businessFit: 0,
            opportunity: 0,
            competitorWeakness: 0,
            cannibalizationRisk: 'low|medium|high',
            rationale: 'string',
            suggestedInternalLinks: ['string'],
          },
        ],
      },
    },
    null,
    2,
  );

  const { z } = await import('zod');
  const { TopicScoreSchema } = await import('./schemas.mjs');

  const result = await callClaudeJson({
    system,
    prompt,
    fetchImpl,
    schema: z.object({ topics: z.array(TopicScoreSchema).min(1) }),
  });

  return result.topics
    .sort((a, b) => b.score - a.score)
    .slice(0, config.maxShortlistedTopics);
}

export async function generateBrief({ topic, context, config, contentFocus, fetchImpl }) {
  const { ContentBriefSchema } = await import('./schemas.mjs');
  const system =
    'You write SEO briefs for Fleetbase. Every claim must be supported by provided Fleetbase context or framed as general industry guidance.';
  const prompt = JSON.stringify(
    {
      task: 'Create a detailed content brief for one Fleetbase blog article.',
      contentFocus,
      contentStrategy: config.contentStrategy,
      topic,
      siteUrl: config.siteUrl,
      fleetbaseContext: context.summary,
      requirements: [
        'The article must be specific to Fleetbase logistics software, supply chain software, or a practical Fleetbase API/tutorial workflow.',
        'Include Fleetbase-specific internal links from the provided context.',
        `Use ${config.siteUrl} for all Fleetbase website links and ${config.siteUrl}/docs for all documentation links. Never use fleetbase.ghost.io for docs or website links.`,
        'If this is a tutorial focus, define what the reader will build or configure with Fleetbase.',
        'Avoid generic SaaS content that could apply to any logistics vendor.',
      ],
      requiredJsonShape: {
        title: 'string',
        slug: 'kebab-case-string',
        targetKeyword: 'string',
        secondaryKeywords: ['string'],
        audience: 'string',
        searchIntent: 'string',
        thesis: 'string',
        outline: ['h2/h3 outline item'],
        internalLinks: ['/docs/... or /platform/...'],
        cta: 'string',
        metaTitle: 'string <= 80 chars',
        metaDescription: 'string <= 180 chars',
        publicTags: ['string'],
        sourceNotes: ['string'],
      },
    },
    null,
    2,
  );

  return callClaudeJson({ system, prompt, fetchImpl, schema: ContentBriefSchema });
}

export async function generateArticle({ brief, context, config, contentFocus, fetchImpl }) {
  const { ArticleDraftSchema } = await import('./schemas.mjs');
  const system =
    'You write polished Fleetbase blog tutorials and SEO content. Output clean semantic HTML. Do not invent product features. Do not include scripts, styles, or iframes.';
  const prompt = JSON.stringify(
    {
      task: 'Write the article draft from the approved brief.',
      contentFocus,
      contentStrategy: config.contentStrategy,
      brief,
      fleetbaseContext: context.summary,
      requirements: [
        'Use semantic HTML: h2, h3, p, ul, ol, pre, code, table when useful.',
        'Include practical Fleetbase-specific guidance and internal links.',
        `Use ${config.siteUrl} for all Fleetbase website links and ${config.siteUrl}/docs for all documentation links. Never link to fleetbase.ghost.io/docs or fleetbase.ghost.io website paths.`,
        'Keep the article useful even if the reader is evaluating open-source logistics software.',
        'For Fleetbase API tutorials, include a practical build/configure/use flow with code or request examples only when supported by context.',
        'For software SEO articles, connect the topic to Fleetbase modules and logistics/supply-chain operating workflows.',
        'No publication language such as "in this AI-generated draft".',
      ],
      requiredJsonShape: {
        title: 'string',
        slug: 'string',
        excerpt: 'string <= 300 chars',
        html: 'string',
        metaTitle: 'string <= 80 chars',
        metaDescription: 'string <= 180 chars',
        publicTags: ['string'],
      },
    },
    null,
    2,
  );

  return callClaudeJson({
    system,
    prompt,
    fetchImpl,
    schema: ArticleDraftSchema,
    maxTokens: 8192,
  });
}

export async function generateFeatureImageBrief({ brief, draft, config, contentFocus, fetchImpl }) {
  const { FeatureImageBriefSchema } = await import('./schemas.mjs');
  const system =
    'You write image-generation prompts for Fleetbase blog feature images. Create precise visual direction for an image model. Avoid text, logos, trademarked marks, and UI labels.';
  const prompt = JSON.stringify(
    {
      task: 'Create a feature image prompt for this Fleetbase blog article.',
      contentFocus,
      styleGuide: config.featureImage.styleGuide,
      brief,
      draft: {
        title: draft.title,
        excerpt: draft.excerpt,
        metaTitle: draft.metaTitle,
        metaDescription: draft.metaDescription,
        tags: draft.publicTags,
      },
      requirements: [
        'Use a landscape editorial composition suitable for a blog hero image.',
        'Represent logistics software, fleet operations, supply chain workflows, APIs, dashboards, maps, routes, inventory, or dispatch depending on the article.',
        'Do not request visible text, letters, logos, brand marks, UI labels, or watermarks.',
        'Return a short filename stem ending in .png using lowercase kebab-case.',
      ],
      requiredJsonShape: {
        prompt: 'string',
        altText: 'string <= 160 chars',
        filename: 'kebab-case.png',
      },
    },
    null,
    2,
  );

  return callClaudeJson({
    system,
    prompt,
    fetchImpl,
    schema: FeatureImageBriefSchema,
    maxTokens: 1200,
  });
}

export async function qaArticle({ brief, draft, context, config, contentFocus, fetchImpl }) {
  const { QaResultSchema } = await import('./schemas.mjs');
  const system =
    'You are the final editor for Fleetbase. Block drafts with hallucinated product claims, weak SEO fit, unsafe code, missing internal links, or poor tutorial value.';
  const prompt = JSON.stringify(
    {
      task: 'QA this Fleetbase blog draft.',
      contentFocus,
      contentStrategy: config.contentStrategy,
      brief,
      draft,
      fleetbaseContext: context.summary,
      passCriteria: [
        'No unsupported Fleetbase claims.',
        'Matches search intent and target keyword.',
        'Is clearly specific to Fleetbase logistics software, supply chain software, or a Fleetbase API/tutorial workflow.',
        'Does not read like generic logistics SaaS content.',
        'Tutorial-focused drafts explain a concrete build/configure/use workflow.',
        'Unsupported API or code claims should be reported as warnings unless they make the entire article misleading or unsafe.',
        'Contains useful internal links.',
        'No publish/schedule action requested.',
        'Ready for human review in Ghost.',
      ],
      requiredJsonShape: {
        publishReady: true,
        score: 0,
        blockingIssues: ['string'],
        warnings: ['string'],
        recommendedFixes: ['string'],
      },
    },
    null,
    2,
  );

  return callClaudeJson({ system, prompt, fetchImpl, schema: QaResultSchema });
}
