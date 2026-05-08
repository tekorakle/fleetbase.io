'use client';

import { useEffect, useRef } from 'react';

import { track } from '@/lib/analytics/posthog';

interface Props {
  slug: string;
  tags?: string[];
  publishedAt?: string;
}

/**
 * Fires `blog_post_viewed` on mount and `blog_post_read_depth` at 50/75/100%
 * scroll progress through the document.
 *
 * Mounted from the blog post server component — passed only safe metadata,
 * never the full post body.
 */
export function BlogPostTracker({ slug, tags, publishedAt }: Props) {
  const firedRef = useRef<{ '50': boolean; '75': boolean; '100': boolean }>({
    '50': false,
    '75': false,
    '100': false,
  });

  useEffect(() => {
    track('blog_post_viewed', { slug, tags, published_at: publishedAt });
  }, [slug, tags, publishedAt]);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total <= 0) return;
      const pct = Math.min(100, Math.round((scrolled / total) * 100));

      const fired = firedRef.current;
      if (!fired['50'] && pct >= 50) {
        fired['50'] = true;
        track('blog_post_read_depth', { slug, depth: 50 });
      }
      if (!fired['75'] && pct >= 75) {
        fired['75'] = true;
        track('blog_post_read_depth', { slug, depth: 75 });
      }
      if (!fired['100'] && pct >= 99) {
        fired['100'] = true;
        track('blog_post_read_depth', { slug, depth: 100 });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  return null;
}
