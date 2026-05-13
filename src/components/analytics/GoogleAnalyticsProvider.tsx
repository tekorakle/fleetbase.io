'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { Suspense, useEffect, useRef } from 'react';

import { readConsentCookie } from '@/lib/analytics/consent';
import { setConsent, trackPageview } from '@/lib/analytics/google';

interface Props {
  /** True for visitors who must explicitly opt in (EU/EEA/UK or Sec-GPC). */
  optInRequired: boolean;
}

/**
 * Initializes Google Analytics 4 and wires page_view on every Next.js route
 * change. Mirrors PostHogProvider's shape and consent posture.
 *
 *   - optInRequired=true → Consent Mode v2 defaults all flags to "denied";
 *     cookie-less modeled hits flow until the banner grants.
 *   - optInRequired=false → defaults to "granted"; banner offers decline.
 *
 * Self-hosted via /gtm/* rewrite in next.config.ts so the loader script and
 * collection requests are first-party.
 */
export function GoogleAnalyticsProvider({ optInRequired }: Props) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    if (process.env.NODE_ENV === 'development') {

      console.warn(
        '[GA] NEXT_PUBLIC_GA_MEASUREMENT_ID not set — Google Analytics disabled',
      );
    }
    return null;
  }

  const defaultConsent = optInRequired ? 'denied' : 'granted';

  return (
    <>
      <Script id="ga-bootstrap" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: '${defaultConsent}',
            analytics_storage: '${defaultConsent}',
            ad_user_data: '${defaultConsent}',
            ad_personalization: '${defaultConsent}',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            transport_url: window.location.origin,
            cookie_domain: /\\.fleetbase\\.io$/.test(window.location.hostname) ? 'fleetbase.io' : 'auto',
            cookie_flags: 'SameSite=Lax;Secure',
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
      <Script
        id="ga-loader"
        src={`/gtm/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <ConsentReplay />
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
    </>
  );
}

/**
 * Replay the persisted consent decision on mount. Without this, a returning
 * visitor who previously granted/declined would re-enter the default state
 * until the banner re-fires (which it never does for known decisions).
 */
function ConsentReplay() {
  useEffect(() => {
    const decision = readConsentCookie();
    if (decision === 'granted') setConsent(true);
    else if (decision === 'declined') setConsent(false);
  }, []);
  return null;
}

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;
    const search = searchParams?.toString();
    const url = search ? `${pathname}?${search}` : pathname;
    if (url === lastUrlRef.current) return;
    lastUrlRef.current = url;
    trackPageview(url);
  }, [pathname, searchParams]);

  return null;
}
