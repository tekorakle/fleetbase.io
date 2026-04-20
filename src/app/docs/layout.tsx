import type { ReactNode } from 'react';

// This is a minimal passthrough layout for the /docs route segment.
// Each sub-section ((platform), fleet-ops, storefront, etc.) has its own
// DocsLayout defined in its own layout.tsx. This root layout must NOT
// add a DocsLayout wrapper, otherwise section layouts would be double-nested.
export default function DocsRootLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
