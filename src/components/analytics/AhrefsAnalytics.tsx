import Script from 'next/script';

/**
 * Ahrefs Web Analytics — cookieless, GDPR-compliant by default. No consent
 * gating required; runs identically for all visitors. Source-of-truth for SEO
 * attribution and cross-references with Ahrefs' organic search data.
 *
 * No-op if NEXT_PUBLIC_AHREFS_KEY is unset.
 */
export function AhrefsAnalytics() {
  const key = process.env.NEXT_PUBLIC_AHREFS_KEY;
  if (!key) return null;

  return (
    <Script
      id="ahrefs-analytics"
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={key}
      strategy="afterInteractive"
    />
  );
}
