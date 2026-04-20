import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // Set --fd-nav-height to the site header height so Fumadocs positions the
    // sidebar top and content padding-top correctly below the fixed navbar.
    <div style={{ '--fd-nav-height': 'var(--header-height)' } as React.CSSProperties}>
      <DocsLayout
        tree={source.pageTree}
        {...baseOptions}
        nav={{ enabled: false, title: undefined }}
        containerProps={{ className: 'md:[&_#nd-page_article]:pt-6' }}
        sidebar={{
          collapsible: false,
          banner: (
            <div className="relative h-8 w-fit rounded-full p-[1px]">
              <div className="from-chart-1/20 via-chart-2/20 to-chart-3/20 absolute inset-0 rounded-full bg-gradient-to-r" />

              {/* Content container */}
              <div className="dark:bg-background/80 border-border/10 relative flex h-full items-center rounded-full border text-xs backdrop-blur-sm">
                <span className="bg-muted/40 text-muted-foreground flex h-full items-center justify-center rounded-full px-3 text-[11px] font-normal">
                  What&apos;s New
                </span>
                <span className="text-muted-foreground/80 flex h-full items-center px-3 font-normal">
                  Join workshop May 6
                </span>
              </div>
            </div>
          ),
        }}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
