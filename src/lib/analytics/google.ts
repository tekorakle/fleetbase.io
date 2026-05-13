/**
 * Google Analytics 4 client wrapper.
 *
 * GA4 runs alongside PostHog as a SEO + Google Ads attribution endpoint —
 * PostHog stays the source of truth for product analytics. Only curated
 * conversion events (start_free_trial, book_demo, sign_up, etc.) are mirrored
 * here from the typed track() bridge in events.ts.
 *
 * Privacy posture:
 *   - Consent Mode v2 — all storage flags default to "denied" in opt-in
 *     geographies (EU/EEA/UK/Sec-GPC); cookie-less modeled hits flow until
 *     the consent banner grants. Elsewhere we mirror PostHog's opt-out
 *     posture: capture by default, banner offers decline.
 *   - Self-hosted via /gtm/* and /g/collect rewrites in next.config.ts so the
 *     loader script and collection requests are first-party and bypass ad
 *     blockers that target googletagmanager.com / google-analytics.com.
 *
 * The bootstrap scripts (consent default + gtag('config')) live inline in
 * GoogleAnalyticsProvider.tsx — they must execute synchronously before
 * gtag.js loads. This module only exposes runtime helpers.
 */

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Push an event into gtag's dataLayer. Safe to call before gtag.js loads —
 * events are queued and replayed once the script initializes. Also safe to
 * call before the provider has mounted (e.g. from a server-rendered consent
 * banner): we lazily create the dataLayer + gtag shim if missing.
 */
function pushGtag(...args: unknown[]): void {
  if (typeof window === 'undefined') return;
  if (!window.dataLayer) window.dataLayer = [];
  if (!window.gtag) {
    window.gtag = function gtag(...rest: unknown[]) {
      window.dataLayer.push(rest);
    };
  }
  window.gtag(...args);
}

/** Whether GA is configured via env. */
export function isGAConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
}

/** Fire a page_view on Next.js route change. */
export function trackPageview(url: string): void {
  if (typeof window === 'undefined') return;
  pushGtag('event', 'page_view', {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/**
 * Fire a conversion event. Called from the PostHog track() bridge for the
 * curated set of events mapped in events.ts → mapToGAConversion().
 */
export function trackConversion(
  eventName: string,
  params: Record<string, unknown> = {},
): void {
  pushGtag('event', eventName, params);
}

/**
 * Update Consent Mode v2 flags. Called by the consent banner on accept/decline.
 * Persisted across sessions via the fb_consent cookie — replayed on mount.
 */
export function setConsent(granted: boolean): void {
  pushGtag('consent', 'update', {
    ad_storage: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
  });
}
