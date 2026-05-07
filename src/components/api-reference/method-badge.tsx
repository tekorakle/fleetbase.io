import { cn } from '@/lib/utils';

export type HttpMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS';

const methodColors: Record<HttpMethod, string> = {
  GET: 'text-emerald-600 dark:text-emerald-400',
  POST: 'text-sky-600 dark:text-sky-400',
  PUT: 'text-amber-600 dark:text-amber-400',
  PATCH: 'text-violet-600 dark:text-violet-400',
  DELETE: 'text-rose-600 dark:text-rose-400',
  HEAD: 'text-slate-600 dark:text-slate-400',
  OPTIONS: 'text-slate-600 dark:text-slate-400',
};

interface MethodBadgeProps {
  method: HttpMethod | string;
  className?: string;
}

/**
 * Inline HTTP-method label. No background, border, or chrome — just colored
 * uppercase monospace text. Stripe-style.
 */
export function MethodBadge({ method, className }: MethodBadgeProps) {
  const m = method.toUpperCase() as HttpMethod;
  return (
    <span
      className={cn(
        'font-mono text-[10px] font-semibold uppercase tracking-wider',
        methodColors[m] ?? methodColors.GET,
        className,
      )}
    >
      {m}
    </span>
  );
}
