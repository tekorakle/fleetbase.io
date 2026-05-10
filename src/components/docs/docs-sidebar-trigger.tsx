'use client';

import { useSidebar } from 'fumadocs-ui/contexts/sidebar';
import { PanelLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

// Docs section layouts disable fumadocs's mobile nav (to avoid duplicating
// the site Navbar), which also removes fumadocs's built-in SidebarTrigger.
// This re-exposes that trigger inside the site Navbar on /docs routes,
// only at viewports below `md` (where the desktop sidebar is hidden).
export function DocsSidebarTrigger({ className }: { className?: string }) {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();

  if (!pathname.startsWith('/docs')) return null;

  return (
    <button
      type="button"
      aria-label="Toggle docs navigation"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      className={cn(
        'text-muted-foreground hover:text-foreground relative flex size-8 items-center justify-center rounded-sm border md:hidden',
        className,
      )}
    >
      <PanelLeft className="size-4" />
    </button>
  );
}
