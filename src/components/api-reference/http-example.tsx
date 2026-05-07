'use client';

import { ChevronDown } from 'lucide-react';
import { useState, type ReactNode } from 'react';

import { CopyButton } from '@/components/ui/copy-button';
import { cn } from '@/lib/utils';

import {
  LanguageTabs,
  useApiLanguage,
  type LanguageId,
} from './language-tabs';
import { MethodBadge, type HttpMethod } from './method-badge';

interface HttpExampleProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper that pairs <HttpRequest> with <HttpResponse> in the right column of
 * an <Endpoint>. Marks itself with `data-api-aside` so the parent section
 * positions it as the sticky right pane.
 *
 * On `lg:` and above this becomes a flex column that splits its (bounded)
 * height 50/50 between the request and the response — each child uses
 * `flex-1 min-h-0` to claim half. When only the request is present, it
 * naturally fills the full column.
 */
export function HttpExample({ children, className }: HttpExampleProps) {
  return (
    <div
      data-api-aside
      className={cn(
        'not-prose my-6 flex flex-col gap-3 lg:my-0 lg:h-full lg:gap-2',
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Per-language sample. The generator produces both:
 * - `code` — raw text, used for copy-to-clipboard
 * - `html` — pre-tokenized Shiki HTML, rendered for display
 *
 * The legacy plain-string shape is still accepted (no highlighting).
 */
type CodeSample = { code: string; html?: string } | string;

type SampleSet = Partial<Record<LanguageId, CodeSample>>;

/** A "Other ways to call this" alternative request. */
export interface HttpRequestVariant {
  title: string;
  samples: SampleSet;
}

interface HttpRequestProps {
  method: HttpMethod | string;
  path: string;
  samples: SampleSet;
  /**
   * Optional alternative request shapes (e.g. "Create using Waypoints"). When
   * present, they're rendered as a joined accordion section attached to the
   * bottom of the main code panel — visually one unit, no gap.
   */
  variants?: HttpRequestVariant[];
  className?: string;
}

/**
 * Code panel showing the request in the currently-selected language. Header
 * is fixed; the code body scrolls internally so long samples don't blow out
 * the panel height.
 */
export function HttpRequest({
  method,
  path,
  samples,
  variants,
  className,
}: HttpRequestProps) {
  const { language } = useApiLanguage();
  const available = Object.keys(samples) as LanguageId[];
  const active: LanguageId = available.includes(language)
    ? language
    : (available[0] ?? 'curl');

  const sample = normalizeSample(samples[active]);
  const hasVariants = !!variants && variants.length > 0;

  return (
    <div
      className={cn(
        'not-prose flex min-h-0 flex-col overflow-hidden rounded-lg border border-border/40 bg-card text-card-foreground shadow-sm lg:flex-1',
        className,
      )}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-border/40 bg-muted/30 px-2.5 py-1">
        <div className="flex min-w-0 items-center gap-2">
          <MethodBadge method={method} />
          <code className="truncate font-mono text-[11px] text-muted-foreground">
            {path}
          </code>
        </div>
        <CopyButton text={sample.code} />
      </div>

      <LanguageTabs
        languages={available.length ? available : undefined}
        className="shrink-0"
      />

      <div className="min-h-0 flex-1 overflow-y-auto">
        <CodeBody html={sample.html} code={sample.code} lang={active} />
      </div>

      {hasVariants && (
        <HttpRequestVariants variants={variants!} active={active} />
      )}
    </div>
  );
}

/**
 * The "Other ways to call this" accordion that lives inside <HttpRequest>,
 * sharing its border so the two read as one unit.
 */
function HttpRequestVariants({
  variants,
  active,
}: {
  variants: HttpRequestVariant[];
  active: LanguageId;
}) {
  return (
    <div className="shrink-0 border-t border-border/40 bg-muted/10">
      <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Other ways to call this
      </div>
      <ul className="divide-y divide-border/40 border-t border-border/40">
        {variants.map((v) => (
          <VariantItem key={v.title} variant={v} active={active} />
        ))}
      </ul>
    </div>
  );
}

function VariantItem({
  variant,
  active,
}: {
  variant: HttpRequestVariant;
  active: LanguageId;
}) {
  const [open, setOpen] = useState(false);
  const sample = normalizeSample(variant.samples[active]);

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 px-2.5 py-1 text-left text-[11px] font-medium text-foreground/80 transition-colors hover:bg-muted/30"
      >
        <span className="truncate">{variant.title}</span>
        <ChevronDown
          className={cn(
            'h-3 w-3 shrink-0 text-muted-foreground transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>
      {open && (
        <div className="max-h-80 overflow-y-auto border-t border-border/40">
          <CodeBody html={sample.html} code={sample.code} lang={active} />
        </div>
      )}
    </li>
  );
}

interface HttpResponseProps {
  status?: number;
  /** Status text override. Default: derived from status. */
  statusText?: string;
  /** Raw JSON body — used for copy-to-clipboard. */
  body?: string;
  /** Pre-highlighted Shiki HTML for display. */
  html?: string;
  /** Or pass children as a code block (e.g. ```json … ```). */
  children?: ReactNode;
  className?: string;
}

/**
 * Code panel showing the example response. Same flex-column structure as
 * <HttpRequest> so the two share their bounded height equally.
 */
export function HttpResponse({
  status = 200,
  statusText,
  body,
  html,
  children,
  className,
}: HttpResponseProps) {
  const formatted = body ? formatJson(body) : '';
  const text = statusText ?? defaultStatusText(status);

  return (
    <div
      className={cn(
        'not-prose flex min-h-0 flex-col overflow-hidden rounded-lg border border-border/40 bg-card text-card-foreground shadow-sm lg:flex-1',
        className,
      )}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-border/40 bg-muted/30 px-2.5 py-1">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'font-mono text-[10px] font-semibold uppercase tracking-wider',
              statusBadgeClass(status),
            )}
          >
            {status} {text}
          </span>
        </div>
        {body && <CopyButton text={formatted} />}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {body ? (
          <CodeBody html={html} code={formatted} lang="json" />
        ) : (
          <div className="api-response-body">{children}</div>
        )}
      </div>
    </div>
  );
}

/**
 * Renders highlighted Shiki HTML when available, falling back to a plain
 * `<pre><code>` block when it isn't. The Shiki output already includes its
 * own `<pre class="shiki">` wrapper — we just need to apply our padding /
 * scroll behavior around it.
 */
function CodeBody({
  html,
  code,
  lang,
}: {
  html?: string;
  code: string;
  lang: string;
}) {
  if (html) {
    return (
      <div
        className="api-shiki overflow-x-auto px-3 py-2 text-[11px] leading-relaxed [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <pre className="m-0 overflow-x-auto bg-transparent px-3 py-2 text-[11px] leading-relaxed">
      <code className={`language-${lang} font-mono`}>{code}</code>
    </pre>
  );
}

function normalizeSample(sample: CodeSample | undefined): {
  code: string;
  html?: string;
} {
  if (!sample) return { code: '' };
  if (typeof sample === 'string') return { code: sample };
  return sample;
}

function formatJson(raw: string): string {
  try {
    return JSON.stringify(JSON.parse(raw), null, 2);
  } catch {
    return raw;
  }
}

function defaultStatusText(status: number): string {
  if (status >= 200 && status < 300) return 'OK';
  if (status === 201) return 'Created';
  if (status === 204) return 'No Content';
  if (status === 400) return 'Bad Request';
  if (status === 401) return 'Unauthorized';
  if (status === 403) return 'Forbidden';
  if (status === 404) return 'Not Found';
  if (status === 422) return 'Unprocessable';
  if (status === 429) return 'Too Many Requests';
  if (status >= 500) return 'Server Error';
  return '';
}

function statusBadgeClass(status: number): string {
  if (status >= 200 && status < 300) {
    return 'text-emerald-600 dark:text-emerald-400';
  }
  if (status >= 400 && status < 500) {
    return 'text-amber-600 dark:text-amber-400';
  }
  if (status >= 500) {
    return 'text-rose-600 dark:text-rose-400';
  }
  return 'text-slate-600 dark:text-slate-400';
}
