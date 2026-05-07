import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { MethodBadge, type HttpMethod } from './method-badge';

export interface EndpointLink {
  title: string;
  id: string;
  method?: HttpMethod | string;
  path?: string;
}

interface ResourceHeaderProps {
  /** Display name. e.g. "Places". */
  title: string;
  /** Short description of the resource. */
  description?: ReactNode;
  /** The endpoints declared on this page — rendered as a clickable index. */
  endpoints?: EndpointLink[];
  className?: string;
}

/**
 * The header at the top of every resource page — Stripe's "two-column" pattern
 * with the resource title and description on the left and a clickable index of
 * the page's endpoints on the right.
 */
export function ResourceHeader({
  title,
  description,
  endpoints,
  className,
}: ResourceHeaderProps) {
  return (
    <header
      className={cn(
        'api-resource-header mb-6',
        'lg:grid lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] lg:gap-x-8',
        className,
      )}
    >
      <div className="min-w-0">
        <h1 className="!mt-0 mb-2 text-xl font-semibold tracking-tight">
          {title}
        </h1>
        {description && (
          <div className="text-xs leading-snug text-muted-foreground [&>p]:my-0">
            {description}
          </div>
        )}
      </div>

      {endpoints && endpoints.length > 0 && (
        <nav
          aria-label={`${title} endpoints`}
          className="not-prose mt-4 lg:mt-0"
        >
          <ul className="divide-y divide-border/40 overflow-hidden rounded-lg border border-border/40 bg-card/40">
            {endpoints.map((e) => (
              <li key={e.id}>
                <a
                  href={`#${e.id}`}
                  className="group flex items-center gap-2 px-2.5 py-1.5 transition-colors hover:bg-muted/50"
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5 text-left">
                    <span className="truncate text-[13px] font-semibold text-foreground">
                      {e.title}
                    </span>
                    {(e.method || e.path) && (
                      <span className="flex items-center gap-1.5">
                        {e.method && <MethodBadge method={e.method} />}
                        {e.path && (
                          <code className="truncate font-mono text-[10px] text-muted-foreground">
                            {e.path}
                          </code>
                        )}
                      </span>
                    )}
                  </div>
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground/80"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
