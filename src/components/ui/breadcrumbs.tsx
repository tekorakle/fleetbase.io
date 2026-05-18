import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

import { BreadcrumbSchema } from '@/components/seo/json-ld';
import { cn } from '@/lib/utils';

const BASE_URL = 'https://fleetbase.io';

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

/**
 * Visual breadcrumb trail + matching `BreadcrumbList` JSON-LD for SEO.
 *
 * The first item is always Home — pass only the descendant trail.
 * The final item is rendered as the current page (no link) and gets
 * `aria-current="page"`. JSON-LD includes Home + every item with
 * absolute URLs so Google can render breadcrumbs in SERPs.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const fullTrail: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  const schemaItems = fullTrail.map((item) => ({
    name: item.label,
    url: item.href.startsWith('http') ? item.href : `${BASE_URL}${item.href}`,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav
        aria-label="Breadcrumb"
        className={cn('text-xs text-muted-foreground', className)}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {fullTrail.map((item, idx) => {
            const isLast = idx === fullTrail.length - 1;
            const isHome = idx === 0;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <ChevronRight className="size-3 shrink-0 opacity-50" aria-hidden />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {isHome ? (
                      <>
                        <Home className="inline size-3.5 -mt-0.5 mr-1" aria-hidden />
                        {item.label}
                      </>
                    ) : (
                      item.label
                    )}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {isHome ? (
                      <span className="inline-flex items-center gap-1">
                        <Home className="size-3.5" aria-hidden />
                        <span className="sr-only sm:not-sr-only">{item.label}</span>
                      </span>
                    ) : (
                      item.label
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
