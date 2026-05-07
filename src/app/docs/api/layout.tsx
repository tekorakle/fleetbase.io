import type { PageTree } from 'fumadocs-core/server';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import { ApiSidebar } from '@/components/api-reference/api-sidebar';
import { DocsToggle } from '@/components/docs/docs-toggle';

// We replace fumadocs' tree-based sidebar with a custom anchor-aware sidebar
// (ApiSidebar) so we can show per-resource endpoint anchors with scroll-spy.
// fumadocs' tree slot still renders below the banner — we pass an empty tree
// so it produces no content, and put the section picker + custom sidebar in
// the `sidebar.banner` slot.
//
// The banner wrapper is bounded to viewport height so the API navigation
// scrolls when it's longer than the sidebar (which it is, with per-API
// groups). DocsToggle is pinned at the top; ApiSidebar fills remaining space
// and scrolls.
const emptyTree: PageTree.Root = { name: '', children: [] };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={
        { '--fd-nav-height': 'var(--header-height)' } as React.CSSProperties
      }
    >
      <DocsLayout
        tree={emptyTree}
        {...baseOptions}
        nav={{ enabled: false, title: undefined }}
        containerProps={{ className: 'md:[&_#nd-page_article]:pt-6' }}
        sidebar={{
          collapsible: false,
          banner: (
            <div className="flex h-[calc(100dvh-var(--fd-nav-height)-1rem)] flex-col gap-4 [&>*:first-child]:shrink-0 [&>*:first-child>button]:w-full">
              <DocsToggle />
              <div className="-mr-2 min-h-0 flex-1 overflow-y-auto pr-2 pb-32">
                <ApiSidebar />
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
