'use client';

import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef } from 'react';

import {
  apiNav,
  endpointHref,
  resourceHref,
  topAnchorHref,
  type ResourceEndpoint,
  type ResourcePage,
} from '@/lib/api-nav';
import { cn } from '@/lib/utils';

import { MethodBadge } from './method-badge';
import { useActiveSection } from './use-active-section';

/**
 * Stripe-style API navigation sidebar.
 *
 * Top region: anchored sections of the index/intro page (Introduction,
 * Authentication, Errors, …) — clicking scrolls to the anchor.
 *
 * Bottom region: resource groups. Each resource page expands to show its
 * endpoint anchors when the user is on that page; the active anchor is
 * highlighted via scroll-spy.
 */
export function ApiSidebar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const isIndex =
    pathname === '/docs/api' ||
    pathname === '/docs/api/' ||
    (apiNav.topSectionsPageSlug &&
      pathname === `/docs/api/${apiNav.topSectionsPageSlug}`);

  // Build the active-id list for the current page.
  const watchedIds = useMemo(() => {
    if (isIndex) return apiNav.topSections.map((s) => s.id);
    const resource = findResourceByPathname(pathname);
    return resource ? resource.endpoints.map((e) => e.id) : [];
  }, [isIndex, pathname]);

  const activeId = useActiveSection({ ids: watchedIds });

  // On page load (and when the route changes), scroll the active resource
  // entry into view inside the sidebar's scroll container. Without this, deep
  // links to a resource page that lives below the fold leave the sidebar
  // scrolled to the top with the active link off-screen.
  useEffect(() => {
    if (!navRef.current) return;

    const activeResource = navRef.current.querySelector<HTMLElement>(
      '[data-active-resource="true"]',
    );
    if (!activeResource) return;

    // `nearest` so we don't yank the user away from a perfectly-fine view if
    // the active link is already on-screen.
    activeResource.scrollIntoView({ block: 'nearest', behavior: 'auto' });
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-label="API reference"
      className="api-sidebar w-full text-[13px]"
    >
      {/* Top — intro/conceptual sections */}
      <ul className="space-y-px">
        {apiNav.topSections.map((section) => {
          const isActive = isIndex && activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={topAnchorHref(section)}
                className={cn(
                  'block rounded-md px-2 py-1 text-foreground/70 transition-colors hover:bg-muted/60 hover:text-foreground',
                  isActive && 'bg-primary/10 font-medium text-primary',
                )}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Resource groups */}
      {apiNav.resourceGroups.map((group) => (
        <div key={group.title} className="mt-4">
          <div className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">
            {group.title}
          </div>
          <ul className="space-y-px">
            {group.resources.map((resource) => (
              <ResourceItem
                key={resource.slug}
                resource={resource}
                activeEndpointId={activeId}
                pathname={pathname}
              />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function ResourceItem({
  resource,
  activeEndpointId,
  pathname,
}: {
  resource: ResourcePage;
  activeEndpointId: string | null;
  pathname: string;
}) {
  const onPage = pathname === `/docs/api/${resource.slug}`;

  return (
    <li data-active-resource={onPage ? 'true' : undefined}>
      <a
        href={resourceHref(resource)}
        aria-current={onPage ? 'page' : undefined}
        className={cn(
          'flex items-center justify-between gap-2 rounded-md px-2 py-1 text-foreground/70 transition-colors hover:bg-muted/60 hover:text-foreground',
          onPage && 'font-medium text-foreground',
        )}
      >
        <span className="truncate">{resource.title}</span>
        <ChevronRight
          className={cn(
            'h-3 w-3 text-muted-foreground/60 transition-transform',
            onPage && 'rotate-90',
          )}
          aria-hidden="true"
        />
      </a>

      {onPage && resource.endpoints.length > 0 && (
        <ul className="ml-2 mt-0.5 space-y-px border-l border-border/50 pl-2">
          {resource.endpoints.map((endpoint) => (
            <EndpointSidebarItem
              key={endpoint.id}
              resource={resource}
              endpoint={endpoint}
              isActive={activeEndpointId === endpoint.id}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function EndpointSidebarItem({
  resource,
  endpoint,
  isActive,
}: {
  resource: ResourcePage;
  endpoint: ResourceEndpoint;
  isActive: boolean;
}) {
  return (
    <li>
      <a
        href={endpointHref(resource, endpoint)}
        className={cn(
          'flex items-center gap-2 rounded-md px-2 py-1 text-[12px] text-foreground/65 transition-colors hover:bg-muted/60 hover:text-foreground',
          isActive && 'bg-primary/10 font-medium text-primary',
        )}
      >
        {endpoint.method && (
          <MethodBadge
            method={endpoint.method}
            className="text-[10px]"
          />
        )}
        <span className="truncate">{endpoint.title}</span>
      </a>
    </li>
  );
}

function findResourceByPathname(pathname: string): ResourcePage | null {
  for (const group of apiNav.resourceGroups) {
    for (const resource of group.resources) {
      if (pathname === `/docs/api/${resource.slug}`) return resource;
    }
  }
  return null;
}
