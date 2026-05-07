'use client';

import { ChevronRight } from 'lucide-react';
import { useState, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ParamTableProps {
  children: ReactNode;
  /** Heading shown above the parameter list. Default: "Parameters". */
  title?: string;
  className?: string;
}

export function ParamTable({
  children,
  title = 'Parameters',
  className,
}: ParamTableProps) {
  return (
    <div className={cn('not-prose my-4', className)}>
      {title && (
        <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
      )}
      <div className="border-t border-border/40 [&>*]:border-b [&>*]:border-border/40">
        {children}
      </div>
    </div>
  );
}

interface ParamProps {
  name: string;
  /**
   * Param type label. Common values: `string`, `integer`, `boolean`, `object`,
   * `array of strings`, `enum`, `timestamp`. Free-form so the generator can
   * produce things like `"array of objects"` directly.
   */
  type: string;
  /** Mark as required. Renders a "required" pill. */
  required?: boolean;
  /** Default value, rendered as code. */
  default?: string;
  /** Param description. Plain text or rich JSX. */
  children?: ReactNode;
  /** Nested child params — pass <Param> elements as children inside this prop or via children. */
  nested?: ReactNode;
}

/**
 * Stripe-style parameter row. Renders the parameter name, type pill, and
 * description. If nested params are passed (or any child <Param> elements are
 * detected), shows a collapsible "Show child attributes" toggle.
 */
export function Param({
  name,
  type,
  required,
  default: defaultValue,
  children,
  nested,
}: ParamProps) {
  const [open, setOpen] = useState(false);

  // Detect nested <Param> children mixed in with description content.
  const { description, hasNested } = splitChildren(children, nested);

  return (
    <div className="py-2">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <code className="font-mono text-[13px] font-semibold text-foreground">
          {name}
        </code>
        <span className="font-mono text-[11px] text-muted-foreground">
          {type}
        </span>
        {required && (
          <span className="text-[10px] font-medium uppercase tracking-wider text-rose-600 dark:text-rose-400">
            required
          </span>
        )}
        {!required && (
          <span className="text-[10px] text-muted-foreground/60">optional</span>
        )}
        {defaultValue !== undefined && (
          <span className="text-[10px] text-muted-foreground">
            Default:{' '}
            <code className="font-mono text-[10px] text-foreground">
              {defaultValue}
            </code>
          </span>
        )}
      </div>

      {description && (
        <div className="mt-0.5 text-xs leading-snug text-muted-foreground [&>p]:my-0">
          {description}
        </div>
      )}

      {hasNested && (
        <>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline"
          >
            <ChevronRight
              className={cn(
                'h-3 w-3 transition-transform',
                open && 'rotate-90',
              )}
            />
            {open ? 'Hide' : 'Show'} child attributes
          </button>
          {open && (
            <div className="ml-3 mt-1.5 border-l border-border/40 pl-3">
              {nested ?? extractNested(children)}
            </div>
          )}
        </>
      )}
    </div>
  );
}

/** True if the React node tree contains a <Param> element. */
function containsParam(node: ReactNode): boolean {
  if (!node) return false;
  if (Array.isArray(node)) return node.some(containsParam);
  if (typeof node === 'object' && 'type' in (node as object)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const n = node as any;
    if (n.type === Param) return true;
    if (n.props?.children) return containsParam(n.props.children);
  }
  return false;
}

function splitChildren(children: ReactNode, nested: ReactNode) {
  if (nested) {
    return { description: children, hasNested: true };
  }

  if (!children) return { description: null, hasNested: false };

  // If children is a single <Param>, treat it as nested with no description.
  if (containsParam(children)) {
    // Filter out direct <Param> elements from the description; keep the rest.
    const arr = Array.isArray(children) ? children : [children];
    const description = arr.filter((c) => !isParam(c));
    const hasNested = arr.some((c) => containsParam(c));
    return {
      description: description.length ? description : null,
      hasNested,
    };
  }

  return { description: children, hasNested: false };
}

function extractNested(children: ReactNode): ReactNode {
  if (!children) return null;
  const arr = Array.isArray(children) ? children : [children];
  return arr.filter((c) => isParam(c) || containsParam(c));
}

function isParam(node: ReactNode): boolean {
  if (!node || typeof node !== 'object') return false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (node as any).type === Param;
}
