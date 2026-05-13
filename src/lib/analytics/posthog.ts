/**
 * PostHog client wrapper for the marketing site.
 *
 * Mirrors the surface of console.fleetbase.io's PosthogService
 * (packages/internals/addon/services/posthog.js) so both apps reason about
 * tracking the same way. Identity is shared across `*.fleetbase.io` via
 * cross_subdomain_cookie so a marketing visitor's distinct_id rides through
 * to the console after they click "Start Free Trial".
 *
 * Initialization is lazy and consent-aware — see PostHogProvider.
 */

import posthog from 'posthog-js';

import { trackConversion as trackGAConversion } from './google';
import {
  type EventName,
  type EventProperties,
  mapToGAConversion,
} from './events';

let initialized = false;
let initPromise: Promise<void> | null = null;

const COOKIE_DOMAIN = '.fleetbase.io';

interface InitOptions {
  apiKey: string;
  /** Reverse-proxy path (e.g. "/ingest") or full PostHog host. */
  apiHost: string;
  /** Whether to enable session recording. Off in dev / when consent withheld. */
  sessionReplay?: boolean;
  /** When true, capture is opted-out by default until consent is granted. */
  optOutByDefault?: boolean;
  /** Whether to enable cross-subdomain cookies. Off on localhost. */
  crossSubdomain?: boolean;
}

/**
 * Initialize PostHog. Idempotent — safe to call multiple times.
 *
 * Returns a promise that resolves once the SDK has loaded so callers can
 * safely fire events afterwards.
 */
export function initPostHog(options: InitOptions): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (initialized) return Promise.resolve();
  if (initPromise) return initPromise;

  initPromise = new Promise<void>((resolve) => {
    try {
      posthog.init(options.apiKey, {
        api_host: options.apiHost,
        ui_host: 'https://us.posthog.com',

        // Disciplined event capture — match console's posture.
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: true,

        // Cross-subdomain identity stitching with console.fleetbase.io.
        cross_subdomain_cookie: options.crossSubdomain ?? true,
        cookie_name: 'ph_marketing',
        ...(options.crossSubdomain
          ? { cookie_domain: COOKIE_DOMAIN }
          : {}),

        // Privacy posture — mask all inputs in replays by default.
        session_recording: {
          maskAllInputs: true,
          maskTextSelector: '[data-ph-no-capture]',
        },
        disable_session_recording: !options.sessionReplay,

        // Honor Do Not Sell (Sec-GPC) and respect user consent state.
        opt_out_capturing_by_default: options.optOutByDefault ?? false,
        respect_dnt: true,
        property_blacklist: ['$ip'],

        loaded: (ph) => {
          initialized = true;
          // Super-property: every event sent from this app is tagged.
          ph.register({ app: 'marketing' });
          if (process.env.NODE_ENV === 'development') {
             
            console.info('[PostHog] initialized');
          }
          resolve();
        },
      });
    } catch (error) {
       
      console.error('[PostHog] init failed', error);
      resolve();
    }
  });

  return initPromise;
}

/** Whether PostHog has finished loading and capture is permitted. */
export function isReady(): boolean {
  return typeof window !== 'undefined' && initialized;
}

/**
 * Type-safe event capture. The `name` parameter narrows `properties`.
 *
 * Matches console's enrichment pattern by adding an ISO timestamp on every
 * event (PostHog also adds `$time`, but the explicit field keeps shapes
 * symmetric across both apps).
 */
export function track<N extends EventName>(
  name: N,
  properties: EventProperties<N>,
): void {
  // GA conversion bridge runs independently of PostHog readiness — GA has its
  // own consent gating via Consent Mode v2, so it's safe to call even when
  // PostHog is uninitialized or the visitor has opted out.
  const gaConversion = mapToGAConversion(name, properties);
  if (gaConversion) {
    trackGAConversion(gaConversion.eventName, gaConversion.params);
  }

  if (!isReady()) return;
  try {
    posthog.capture(name, {
      ...properties,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {

    console.error('[PostHog] capture failed', name, error);
  }
}

/** Capture a Next.js route change as $pageview. */
export function capturePageview(url: string, search?: string): void {
  if (!isReady()) return;
  try {
    posthog.capture('$pageview', {
      $current_url: search ? `${url}?${search}` : url,
      $pathname: url,
    });
  } catch {
    // ignore
  }
}

/**
 * Identify a known user. Only call after a successful auth event with a
 * canonical user ID — never with email-only or ephemeral IDs.
 *
 * Property shape matches console's identifyUser() so person profiles merge
 * cleanly when the same user is identified from both apps.
 */
export interface IdentifyableUser {
  id: string;
  email?: string | null;
  name?: string | null;
  company?: { id?: string; name?: string } | null;
  createdAt?: string | Date | null;
}

export function identifyUser(user: IdentifyableUser): void {
  if (!isReady() || !user?.id) return;
  try {
    posthog.identify(user.id, {
      name: user.name ?? undefined,
      email: user.email ?? undefined,
      company_name: user.company?.name,
      company_id: user.company?.id,
      created_at:
        user.createdAt instanceof Date
          ? user.createdAt.toISOString()
          : (user.createdAt ?? undefined),
    });
  } catch (error) {
     
    console.error('[PostHog] identify failed', error);
  }
}

/** Set arbitrary person properties without identifying. */
export function setPersonProperties(props: Record<string, unknown>): void {
  if (!isReady()) return;
  try {
    posthog.setPersonProperties(props);
  } catch {
    // ignore
  }
}

/** Associate the current user with a group (e.g. company). */
export function associateWithGroup(
  groupType: string,
  groupId: string,
  groupProperties: Record<string, unknown> = {},
): void {
  if (!isReady()) return;
  try {
    posthog.group(groupType, groupId, groupProperties);
  } catch {
    // ignore
  }
}

/** Reset identity (call on explicit logout — rarely needed on marketing). */
export function reset(): void {
  if (!isReady()) return;
  try {
    posthog.reset();
  } catch {
    // ignore
  }
}

/** Opt the visitor in to capture. Persists across sessions. */
export function optIn(): void {
  if (typeof window === 'undefined') return;
  try {
    posthog.opt_in_capturing();
  } catch {
    // ignore
  }
}

/** Opt the visitor out of capture. Persists across sessions. */
export function optOut(): void {
  if (typeof window === 'undefined') return;
  try {
    posthog.opt_out_capturing();
  } catch {
    // ignore
  }
}

/** Whether the visitor has explicitly opted out. */
export function hasOptedOut(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return posthog.has_opted_out_capturing();
  } catch {
    return false;
  }
}

/** Underlying client — escape hatch for advanced use (feature flags, etc). */
export { posthog };
