'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';

import { readConsentCookie } from '@/lib/analytics/consent';
import type { CtaId, CtaLocation } from '@/lib/analytics/events';
import {
  capturePageview,
  initPostHog,
  isReady,
  optIn,
  optOut,
  track,
} from '@/lib/analytics/posthog';

interface Props {
  /** True for visitors who must explicitly opt in (EU/EEA/UK or Sec-GPC). */
  optInRequired: boolean;
  children: React.ReactNode;
}

/**
 * Initializes PostHog and wires:
 *   - $pageview on every Next.js route change
 *   - cta_clicked via [data-cta-id] delegated click listener
 *   - outbound_link_clicked for any external <a> click
 *
 * Consent posture:
 *   - optInRequired=true → init with capture suppressed; banner grants opt-in.
 *   - optInRequired=false → init with capture enabled; banner offers opt-out.
 */
export function PostHogProvider({ optInRequired, children }: Props) {
  return (
    <>
      <PostHogBootstrap optInRequired={optInRequired} />
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      <ClickTracker />
      {children}
    </>
  );
}

function PostHogBootstrap({ optInRequired }: { optInRequired: boolean }) {
  const bootedRef = useRef(false);

  useEffect(() => {
    if (bootedRef.current) return;
    bootedRef.current = true;

    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? '/ingest';
    if (!apiKey) {
      if (process.env.NODE_ENV === 'development') {
         
        console.warn(
          '[PostHog] NEXT_PUBLIC_POSTHOG_KEY not set — analytics disabled',
        );
      }
      return;
    }

    const isProdHost =
      typeof window !== 'undefined' &&
      /\.fleetbase\.io$/.test(window.location.hostname);

    void initPostHog({
      apiKey,
      apiHost,
      sessionReplay: process.env.NODE_ENV === 'production',
      optOutByDefault: optInRequired,
      crossSubdomain: isProdHost,
    }).then(() => {
      // Apply persisted consent decision after init.
      const decision = readConsentCookie();
      if (decision === 'granted') optIn();
      else if (decision === 'declined') optOut();
    });
  }, [optInRequired]);

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

    // Defer until after init resolves on first mount.
    const fire = () => capturePageview(pathname, search || undefined);
    if (isReady()) fire();
    else {
      const id = window.setTimeout(fire, 0);
      return () => window.clearTimeout(id);
    }
  }, [pathname, searchParams]);

  return null;
}

/**
 * Document-level click delegation. Reads data-attrs from any clicked element
 * (or its closest ancestor) and emits cta_clicked / outbound_link_clicked.
 *
 * Catches all current and future CTAs without per-component wiring.
 */
function ClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const ctaEl = target.closest<HTMLElement>('[data-cta-id]');
      const linkEl = target.closest<HTMLAnchorElement>('a[href]');

      if (ctaEl) {
        const ctaId = ctaEl.getAttribute('data-cta-id') as CtaId | null;
        const ctaLocation = ctaEl.getAttribute(
          'data-cta-location',
        ) as CtaLocation | null;
        const ctaVariant = ctaEl.getAttribute('data-cta-variant') as
          | 'primary'
          | 'secondary'
          | 'tertiary'
          | null;
        if (ctaId && ctaLocation) {
          const href =
            ctaEl instanceof HTMLAnchorElement
              ? ctaEl.href
              : (linkEl?.href ?? undefined);
          track('cta_clicked', {
            cta_id: ctaId,
            cta_location: ctaLocation,
            cta_variant: ctaVariant ?? undefined,
            destination_url: href,
            link_text: ctaEl.textContent?.trim().slice(0, 80) || undefined,
          });
        }
      }

      if (linkEl) {
        try {
          const href = linkEl.href;
          if (!href) return;
          const url = new URL(href, window.location.href);
          const sameHost =
            url.hostname === window.location.hostname ||
            url.protocol === 'mailto:' ||
            url.protocol === 'tel:' ||
            url.protocol === 'javascript:';
          if (sameHost && url.protocol.startsWith('http')) return;

          track('outbound_link_clicked', {
            href: url.href,
            host: url.hostname || url.protocol.replace(':', ''),
            link_text:
              linkEl.textContent?.trim().slice(0, 80) || undefined,
            pathname: window.location.pathname,
            is_cta: !!ctaEl,
          });
        } catch {
          // ignore malformed URLs
        }
      }

      // Fumadocs CodeBlock copy button — detect via aria-label inside <pre>.
      const copyBtn = target.closest<HTMLButtonElement>(
        'button[aria-label*="Copy" i]',
      );
      if (copyBtn && copyBtn.closest('figure, pre, [data-figure]')) {
        const pre = copyBtn.closest('pre');
        track('docs_code_copied', {
          pathname: window.location.pathname,
          language:
            pre?.querySelector('code')?.className.match(/language-(\w+)/)?.[1] ??
            undefined,
        });
      }
    }

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
