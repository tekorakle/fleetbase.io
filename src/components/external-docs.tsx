import type { ReactNode } from 'react';

import { EXTERNAL_DOCS } from '@/lib/external-docs';

type LinkProps = {
  /** Path appended to the prefix. Leading slash optional. */
  path?: string;
  /** Override link text. Defaults to children, falling back to a derived label. */
  children?: ReactNode;
};

function buildHref(prefix: string, path?: string): string {
  if (!path) return prefix;
  const trimmed = path.startsWith('/') ? path.slice(1) : path;
  return `${prefix}/${trimmed}`;
}

function ExternalLink({
  href,
  children,
  fallback,
}: {
  href: string;
  children?: ReactNode;
  fallback: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children ?? <code>{fallback}</code>}
    </a>
  );
}

/** Link into the Ember.js API docs. Example: `<EmberApi path="classes/Service" />`. */
export function EmberApi({ path, children }: LinkProps) {
  return (
    <ExternalLink
      href={buildHref(EXTERNAL_DOCS.ember, path)}
      fallback={path ?? 'Ember API'}
    >
      {children}
    </ExternalLink>
  );
}

/** Link into the Ember Data API docs. Example: `<EmberDataApi path="classes/Store" />`. */
export function EmberDataApi({ path, children }: LinkProps) {
  return (
    <ExternalLink
      href={buildHref(EXTERNAL_DOCS.emberData, path)}
      fallback={path ?? 'Ember Data API'}
    >
      {children}
    </ExternalLink>
  );
}

/** Link into the Ember.js guides. */
export function EmberGuides({ path, children }: LinkProps) {
  return (
    <ExternalLink
      href={buildHref(EXTERNAL_DOCS.emberGuides, path)}
      fallback={path ?? 'Ember Guides'}
    >
      {children}
    </ExternalLink>
  );
}

/** Link to the ember-can repository / README. */
export function EmberCan({ children }: { children?: ReactNode }) {
  return (
    <ExternalLink href={EXTERNAL_DOCS.emberCan} fallback="ember-can">
      {children}
    </ExternalLink>
  );
}

/** Link into the Laravel documentation. Example: `<LaravelDocs path="eloquent" />`. */
export function LaravelDocs({ path, children }: LinkProps) {
  return (
    <ExternalLink
      href={buildHref(EXTERNAL_DOCS.laravel, path)}
      fallback={path ?? 'Laravel docs'}
    >
      {children}
    </ExternalLink>
  );
}

/** Link into the Laravel API reference. */
export function LaravelApi({ path, children }: LinkProps) {
  return (
    <ExternalLink
      href={buildHref(EXTERNAL_DOCS.laravelApi, path)}
      fallback={path ?? 'Laravel API'}
    >
      {children}
    </ExternalLink>
  );
}

/** Link into the PHP manual. */
export function PhpDocs({ path, children }: LinkProps) {
  return (
    <ExternalLink
      href={buildHref(EXTERNAL_DOCS.php, path)}
      fallback={path ?? 'PHP manual'}
    >
      {children}
    </ExternalLink>
  );
}

/** Link into the SocketCluster docs. */
export function SocketClusterDocs({ path, children }: LinkProps) {
  return (
    <ExternalLink
      href={buildHref(EXTERNAL_DOCS.socketCluster, path)}
      fallback={path ?? 'SocketCluster docs'}
    >
      {children}
    </ExternalLink>
  );
}
