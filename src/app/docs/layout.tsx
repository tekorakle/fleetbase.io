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
        }}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
