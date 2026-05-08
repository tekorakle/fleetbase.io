/**
 * Consent helpers — geo-aware opt-in for EU/EEA/UK, opt-out elsewhere
 * (with Sec-GPC honored globally).
 *
 * The decision flow:
 *   1. If Sec-GPC: 1 → user opted out via Global Privacy Control. Treat as
 *      declined regardless of geography.
 *   2. Else if country ∈ EU/EEA/UK → opt-in required. Show banner until the
 *      visitor explicitly grants or declines.
 *   3. Else → opt-out posture. Capture by default; visitor can decline via
 *      privacy page link.
 *
 * Consent decisions persist in a first-party cookie (`fb_consent`) on the
 * `.fleetbase.io` apex so the choice carries across subdomains.
 */

export const CONSENT_COOKIE = 'fb_consent';
export const CONSENT_COOKIE_DAYS = 180;

export type ConsentStatus = 'granted' | 'declined' | 'unknown';

/**
 * EU + EEA + UK ISO-3166 alpha-2 country codes — visitors from these
 * countries see an opt-in banner.
 */
const OPT_IN_COUNTRIES = new Set([
  // EU member states
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA non-EU
  'IS', 'LI', 'NO',
  // UK + Switzerland (UK GDPR / FADP)
  'GB', 'CH',
]);

export interface ConsentContext {
  /** ISO-3166 alpha-2 country code (Vercel: x-vercel-ip-country). */
  country: string | null;
  /** Whether the request carried Sec-GPC: 1. */
  gpc: boolean;
}

export function isOptInRequired(ctx: ConsentContext): boolean {
  if (ctx.gpc) return true;
  if (!ctx.country) return false;
  return OPT_IN_COUNTRIES.has(ctx.country.toUpperCase());
}

export function readConsentCookie(): ConsentStatus {
  if (typeof document === 'undefined') return 'unknown';
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]+)`),
  );
  if (!match) return 'unknown';
  const value = decodeURIComponent(match[1]);
  return value === 'granted' || value === 'declined' ? value : 'unknown';
}

export function writeConsentCookie(status: 'granted' | 'declined'): void {
  if (typeof document === 'undefined') return;
  const maxAge = CONSENT_COOKIE_DAYS * 24 * 60 * 60;
  // Apex-domain cookie so the decision carries to console.fleetbase.io.
  // In dev/local, host is "localhost" — let the browser default the domain.
  const isProd =
    typeof window !== 'undefined' &&
    /\.fleetbase\.io$/.test(window.location.hostname);
  const domainPart = isProd ? '; domain=.fleetbase.io' : '';
  document.cookie =
    `${CONSENT_COOKIE}=${encodeURIComponent(status)}` +
    `; path=/${domainPart}; max-age=${maxAge}; SameSite=Lax`;
}

/**
 * Read consent context from server-side request headers.
 *
 * Vercel sets `x-vercel-ip-country`; on other hosts callers may pass null.
 */
export function readConsentContextFromHeaders(headers: Headers): ConsentContext {
  return {
    country: headers.get('x-vercel-ip-country'),
    gpc: headers.get('sec-gpc') === '1',
  };
}
