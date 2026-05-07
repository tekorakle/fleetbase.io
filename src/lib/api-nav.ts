import type { HttpMethod } from '@/components/api-reference/method-badge';

import { apiNav as generated } from './api-nav.generated';

/**
 * The structural source of truth for the API reference sidebar.
 *
 * - `topSections` are anchored sections of the single `index.mdx` page
 *   (Introduction, Authentication, Errors, etc.) — clicking scrolls to the
 *   anchor.
 * - `resourceGroups` are pages grouped by category. Each resource page lists
 *   its `endpoints` (anchors on that page).
 *
 * The actual `apiNav` value is generated from the postman collection submodule
 * by `scripts/generate-api-docs.mjs` — DO NOT hand-edit `api-nav.generated.ts`.
 * To regenerate, run `node scripts/generate-api-docs.mjs` (also runs in
 * `postinstall`, `predev`, `prebuild`).
 */
export interface AnchorItem {
  /** Display label. */
  title: string;
  /** Anchor id on the page. */
  id: string;
}

export interface ResourceEndpoint extends AnchorItem {
  method?: HttpMethod | string;
  path?: string;
}

export interface ResourcePage {
  /** Display title. */
  title: string;
  /** URL slug under `/docs/api/`. e.g. `"fleetbase/places"`. */
  slug: string;
  /** Endpoint anchors on this page — rendered as sub-items in the sidebar. */
  endpoints: ResourceEndpoint[];
}

export interface ResourceGroup {
  title: string;
  resources: ResourcePage[];
}

export interface ApiNav {
  /** Page slug of the page hosting `topSections`. Default: `''` (index). */
  topSectionsPageSlug: string;
  /** Top-level anchored sections on the intro/index page. */
  topSections: AnchorItem[];
  /** Resource groups (each is a sidebar group with expandable resources). */
  resourceGroups: ResourceGroup[];
}

/** Re-exported from the generator output. */
export const apiNav: ApiNav = generated;

/** Build the absolute href for a top-level anchor section. */
export function topAnchorHref(item: AnchorItem): string {
  const base = apiNav.topSectionsPageSlug
    ? `/docs/api/${apiNav.topSectionsPageSlug}`
    : '/docs/api';
  return `${base}#${item.id}`;
}

/** Build the absolute href for a resource page (no anchor). */
export function resourceHref(resource: ResourcePage): string {
  return `/docs/api/${resource.slug}`;
}

/** Build the absolute href for an endpoint anchor on a resource page. */
export function endpointHref(
  resource: ResourcePage,
  endpoint: ResourceEndpoint,
): string {
  return `${resourceHref(resource)}#${endpoint.id}`;
}
