'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  CONSENT_COOKIE,
  type ConsentStatus,
  readConsentCookie,
  writeConsentCookie,
} from '@/lib/analytics/consent';
import { optIn, optOut } from '@/lib/analytics/posthog';
import { cn } from '@/lib/utils';

interface Props {
  /** True for visitors in EU/EEA/UK or with Sec-GPC: 1. */
  optInRequired: boolean;
}

/**
 * GDPR-aware consent banner.
 *
 * - Opt-in jurisdictions: shown when no decision has been recorded.
 * - Opt-out jurisdictions: never shown by default; visitors manage preferences
 *   from the privacy page.
 *
 * Decisions persist via the {@link CONSENT_COOKIE} cookie on `.fleetbase.io`.
 */
export function ConsentBanner({ optInRequired }: Props) {
  const [status, setStatus] = useState<ConsentStatus>('unknown');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setStatus(readConsentCookie());
  }, []);

  if (!mounted) return null;
  if (!optInRequired) return null;
  if (status !== 'unknown') return null;

  const accept = () => {
    writeConsentCookie('granted');
    optIn();
    setStatus('granted');
  };

  const decline = () => {
    writeConsentCookie('declined');
    optOut();
    setStatus('declined');
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-labelledby="consent-heading"
      className={cn(
        'fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl',
        'rounded-xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur',
        'sm:inset-x-auto sm:right-4 sm:left-auto sm:bottom-4 sm:p-5',
      )}
      data-ph-no-capture
    >
      <p
        id="consent-heading"
        className="text-base font-medium text-foreground"
      >
        We use cookies to improve Fleetbase.
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        We use a small set of cookies for product analytics and to understand
        how visitors use the site. You can change your mind anytime — see our{' '}
        <Link href="/privacy" className="underline underline-offset-2">
          privacy policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <Button
          size="sm"
          variant="outline"
          onClick={decline}
          data-ph-no-capture
        >
          Decline
        </Button>
        <Button size="sm" onClick={accept} data-ph-no-capture>
          Accept
        </Button>
      </div>
    </div>
  );
}
