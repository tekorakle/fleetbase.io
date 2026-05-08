import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { MethodBadge, type HttpMethod } from './method-badge';

interface EndpointProps {
  method: HttpMethod | string;
  path: string;
  id?: string;
  /** Optional short label rendered as the section heading. */
  title?: string;
  children: ReactNode;
}

/**
 * Two-column endpoint section, Stripe-style.
 *
 * Each section reserves at least one viewport's worth of vertical space (via
 * `min-h-[calc(100dvh-…)]`). The left column receives prose, parameter
 * tables, and any descriptive content. The right column hosts <HttpExample>
 * (opted in via `data-api-aside`), which is sticky-pinned and bounded to the
 * available viewport so its internal request / response panels can scroll
 * independently — matching Stripe's API reference layout.
 */
export function Endpoint({
  method,
  path,
  id,
  title,
  children,
}: EndpointProps) {
  const slug = id ?? slugify(`${method}-${path}`);

  return (
    <section
      id={slug}
      data-api-endpoint={slug}
      className={cn(
        'api-endpoint group relative scroll-mt-16 border-t border-border/40 py-6 first:border-t-0 first:pt-2',
        // Each endpoint section reserves a full viewport so the sticky aside
        // has room to display request + response side-by-side without short
        // sections forcing the next endpoint up against this one.
        'lg:min-h-[calc(100dvh-var(--fd-nav-height))]',
        'lg:grid lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] lg:gap-x-8',
        // Default every direct child into the left column.
        '[&>*]:lg:col-start-1',
        // <HttpExample> opts into the right column via data-api-aside, gets
        // sticky-pinned, and is bounded to the available viewport height so
        // its internal 50/50 split between request and response works.
        '[&>[data-api-aside]]:lg:col-start-2',
        '[&>[data-api-aside]]:lg:row-start-1',
        '[&>[data-api-aside]]:lg:row-end-[span_999]',
        '[&>[data-api-aside]]:lg:self-start',
        '[&>[data-api-aside]]:lg:sticky',
        '[&>[data-api-aside]]:lg:top-[var(--fd-nav-height)]',
        '[&>[data-api-aside]]:lg:h-[calc(100dvh-var(--fd-nav-height))]',
        '[&>[data-api-aside]]:lg:py-4',
      )}
    >
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
        <MethodBadge method={method} />
        <code className="font-mono text-xs text-muted-foreground">{path}</code>
      </div>

      {title && (
        <h2 className="!mt-0 mb-3 scroll-mt-16 text-base font-semibold tracking-tight">
          <a
            href={`#${slug}`}
            className="!text-foreground !no-underline hover:!text-primary"
          >
            {title}
          </a>
        </h2>
      )}

      {children}
    </section>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
