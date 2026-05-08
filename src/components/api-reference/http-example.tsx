'use client';

import { ArrowLeft, ChevronRight, X } from 'lucide-react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { CopyButton } from '@/components/ui/copy-button';
import { cn } from '@/lib/utils';

import {
  LanguageTabs,
  useApiLanguage,
  type LanguageId,
} from './language-tabs';
import { MethodBadge, type HttpMethod } from './method-badge';

// ---------------------------------------------------------------------------
// Variant drawer context
// ---------------------------------------------------------------------------

interface VariantContext {
  open: (variant: HttpRequestVariant) => void;
}

const VariantDrawerContext = createContext<VariantContext | null>(null);

// HttpRequest publishes its method/path so the drawer can echo them in its
// header — variants don't carry their own method/path, they share the parent's.
const ParentMetaContext = createContext<
  ((method: HttpMethod | string, path: string) => void) | null
>(null);

// ---------------------------------------------------------------------------
// HttpExample — right-column container, owns the drawer
// ---------------------------------------------------------------------------

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
 * height 50/50 between the request and the response. It also acts as the
 * positioning root for the variant drawer, which slides in over the entire
 * column when the user picks an alternative request shape.
 */
export function HttpExample({ children, className }: HttpExampleProps) {
  const [activeVariant, setActiveVariant] =
    useState<HttpRequestVariant | null>(null);
  const [parentMeta, setParentMeta] = useState<{
    method: HttpMethod | string;
    path: string;
  }>({ method: 'GET', path: '' });

  const captureParent = useCallback(
    (method: HttpMethod | string, path: string) => {
      setParentMeta((prev) =>
        prev.method === method && prev.path === path ? prev : { method, path },
      );
    },
    [],
  );

  const ctx = useMemo<VariantContext>(
    () => ({ open: (v) => setActiveVariant(v) }),
    [],
  );

  // Dismiss on ESC
  useEffect(() => {
    if (!activeVariant) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVariant(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeVariant]);

  return (
    <VariantDrawerContext.Provider value={ctx}>
      <ParentMetaContext.Provider value={captureParent}>
        <div
          data-api-aside
          className={cn(
            'not-prose relative my-6 flex flex-col gap-3 lg:my-0 lg:h-full lg:gap-2',
            // Force every panel to share the column equally. CSS targets the
            // [data-api-panel] markers on HttpRequest and HttpResponse so the
            // 50/50 (or 100% when alone) split is reliable across reconciler
            // edge cases that React Children inspection couldn't catch.
            'lg:[&>[data-api-panel]]:flex-1',
            'lg:[&>[data-api-panel]]:min-h-0',
            // When the request panel is alone (no response sibling matching
            // [data-api-panel="response"]), let it size to content with a
            // viewport cap so short request examples don't stretch awkwardly.
            'lg:[&:not(:has([data-api-panel="response"]))>[data-api-panel="request"]]:!flex-none',
            'lg:[&:not(:has([data-api-panel="response"]))>[data-api-panel="request"]]:!max-h-full',
            className,
          )}
        >
          {children}

          {activeVariant && (
            <VariantDrawer
              variant={activeVariant}
              parentMethod={parentMeta.method}
              parentPath={parentMeta.path}
              onClose={() => setActiveVariant(null)}
            />
          )}
        </div>
      </ParentMetaContext.Provider>
    </VariantDrawerContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Sample types
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// HttpRequest
// ---------------------------------------------------------------------------

interface HttpRequestProps {
  method: HttpMethod | string;
  path: string;
  samples: SampleSet;
  /**
   * Optional alternative request shapes. Rendered as a compact pill rail at
   * the bottom of the panel. Clicking a pill opens a full-column drawer
   * showing that variant's code at full height.
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
  const captureParent = useContext(ParentMetaContext);
  const available = Object.keys(samples) as LanguageId[];
  const active: LanguageId = available.includes(language)
    ? language
    : (available[0] ?? 'curl');

  const sample = normalizeSample(samples[active]);
  const hasVariants = !!variants && variants.length > 0;

  // Publish method/path to the parent <HttpExample> so the drawer can echo them.
  useEffect(() => {
    captureParent?.(method, path);
  }, [captureParent, method, path]);

  return (
    <div
      data-api-panel="request"
      className={cn(
        'not-prose flex min-h-0 flex-col overflow-hidden rounded-lg border border-border/40 bg-card text-card-foreground shadow-sm',
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

      {hasVariants && <VariantPillRail variants={variants!} />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Variant pill rail (the "at rest" view inside HttpRequest)
// ---------------------------------------------------------------------------

function VariantPillRail({ variants }: { variants: HttpRequestVariant[] }) {
  const ctx = useContext(VariantDrawerContext);
  if (!ctx) return null;

  return (
    <div className="shrink-0 border-t border-border/40 bg-muted/10">
      <div className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        Other ways to call this
      </div>
      <ul className="divide-y divide-border/40 border-t border-border/40">
        {variants.map((v) => (
          <li key={v.title}>
            <button
              type="button"
              onClick={() => ctx.open(v)}
              className="flex w-full items-center justify-between gap-2 px-2.5 py-1 text-left text-[11px] font-medium text-foreground/80 transition-colors hover:bg-muted/40 hover:text-foreground"
            >
              <span className="truncate">{v.title}</span>
              <ChevronRight
                className="h-3 w-3 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Variant drawer — full-column overlay
// ---------------------------------------------------------------------------

function VariantDrawer({
  variant,
  parentMethod,
  parentPath,
  onClose,
}: {
  variant: HttpRequestVariant;
  parentMethod: HttpMethod | string;
  parentPath: string;
  onClose: () => void;
}) {
  const { language } = useApiLanguage();
  const available = Object.keys(variant.samples) as LanguageId[];
  const active: LanguageId = available.includes(language)
    ? language
    : (available[0] ?? 'curl');

  const sample = normalizeSample(variant.samples[active]);

  return (
    <div className="absolute inset-x-0 inset-y-2 z-20 flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card text-card-foreground shadow-lg motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-150">
      <div className="flex shrink-0 items-center justify-between gap-2 border-b border-border/40 bg-muted/30 px-2.5 py-1">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" aria-hidden="true" />
          Back
        </button>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
          <span className="truncate text-[11px] font-semibold text-foreground">
            {variant.title}
          </span>
          <span aria-hidden="true" className="text-muted-foreground/40">
            ·
          </span>
          <MethodBadge method={parentMethod} />
          <code className="truncate font-mono text-[11px] text-muted-foreground">
            {parentPath}
          </code>
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          <CopyButton text={sample.code} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close variant"
            className="inline-flex h-6 w-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <LanguageTabs
        languages={available.length ? available : undefined}
        className="shrink-0"
      />

      <div className="min-h-0 flex-1 overflow-y-auto">
        <CodeBody html={sample.html} code={sample.code} lang={active} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HttpResponse
// ---------------------------------------------------------------------------

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
      data-api-panel="response"
      className={cn(
        'not-prose flex min-h-0 flex-col overflow-hidden rounded-lg border border-border/40 bg-card text-card-foreground shadow-sm',
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

// ---------------------------------------------------------------------------
// Shared body / utilities
// ---------------------------------------------------------------------------

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
