import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ResourceObjectProps {
  /** Display name. e.g. "Order", "Driver". */
  name: string;
  /** Optional id override. Default: `the-{slug-of-name}-object`. */
  id?: string;
  /** A short description of what this resource represents. */
  description?: ReactNode;
  /** A JSON example of the model shape. */
  example: string;
  /** Pre-highlighted Shiki HTML for the example. Falls back to plain `<pre><code>` rendering if absent. */
  exampleHtml?: string;
  /** A <ParamTable> describing each field. */
  children?: ReactNode;
  className?: string;
}

/**
 * "The {name} object" section that opens each resource page. Renders a
 * two-column layout with the field descriptions on the left and the JSON
 * example on the right, mirroring the per-endpoint layout the rest of the
 * page uses.
 */
export function ResourceObject({
  name,
  id,
  description,
  example,
  exampleHtml,
  children,
  className,
}: ResourceObjectProps) {
  const formatted = formatJson(example);
  const sectionId = id ?? `the-${slugify(name)}-object`;

  return (
    <section
      id={sectionId}
      className={cn(
        'api-resource-object my-6 scroll-mt-16',
        'lg:grid lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] lg:gap-x-8',
        'lg:min-h-[calc(100dvh-var(--fd-nav-height))]',
        '[&>*]:lg:col-start-1',
        '[&>[data-api-aside]]:lg:col-start-2',
        '[&>[data-api-aside]]:lg:row-start-1',
        '[&>[data-api-aside]]:lg:row-end-[span_999]',
        '[&>[data-api-aside]]:lg:self-start',
        '[&>[data-api-aside]]:lg:sticky',
        '[&>[data-api-aside]]:lg:top-[var(--fd-nav-height)]',
        '[&>[data-api-aside]]:lg:h-[calc(100dvh-var(--fd-nav-height))]',
        '[&>[data-api-aside]]:lg:py-4',
        className,
      )}
    >
      <h2 className="!mt-0 mb-2 text-base font-semibold tracking-tight">
        The {name} object
      </h2>

      {description && (
        <div className="mb-3 text-xs leading-snug text-muted-foreground [&>p]:my-0">
          {description}
        </div>
      )}

      {children}

      <div data-api-aside className="not-prose my-4 lg:my-0 lg:flex lg:h-full lg:flex-col">
        <div
          data-api-panel="object"
          className="flex min-h-0 flex-col overflow-hidden rounded-lg border border-border/40 bg-card text-card-foreground shadow-sm lg:max-h-full"
        >
          <div className="shrink-0 border-b border-border/40 bg-muted/30 px-2.5 py-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              The {name} object
            </span>
          </div>
          <div className="min-h-0 flex-1 overflow-auto">
            {exampleHtml ? (
              <div
                className="api-shiki overflow-x-auto px-3 py-2 text-[11px] leading-relaxed [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:font-mono"
                dangerouslySetInnerHTML={{ __html: exampleHtml }}
              />
            ) : (
              <pre className="m-0 bg-transparent px-3 py-2 text-[11px] leading-relaxed">
                <code className="language-json font-mono">{formatted}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function formatJson(raw: string): string {
  try {
    return JSON.stringify(JSON.parse(raw), null, 2);
  } catch {
    return raw;
  }
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
