'use client';

import { useEffect, useState } from 'react';

interface UseActiveSectionOptions {
  /** Section ids to watch — order matters for tie-breaking. */
  ids: string[];
  /**
   * Pixel offset from the top of the viewport at which a section becomes
   * "active". Tuned to the docs nav height. Default: 96.
   */
  topOffset?: number;
}

/**
 * Tracks which `<section id="…">` is currently in view. Returns the active
 * section's id, or the first id if none has been observed yet.
 *
 * Strategy: an IntersectionObserver fires whenever any tracked section
 * crosses the viewport. We then sort visible sections by `boundingClientRect.top`
 * (closest to the top wins) — this matches Stripe's behaviour where the
 * sidebar entry corresponding to the section nearest the viewport top is
 * highlighted, even when several sections are partially visible.
 */
export function useActiveSection({
  ids,
  topOffset = 96,
}: UseActiveSectionOptions): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    let visible = new Set<string>();

    const recompute = () => {
      if (!visible.size) return;
      // Pick the visible section closest to topOffset from the viewport top.
      let bestId: string | null = null;
      let bestDistance = Infinity;
      for (const id of visible) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        const distance = Math.abs(top - topOffset);
        if (top - topOffset <= 0 || distance < bestDistance) {
          if (top - topOffset <= 0) {
            // Section is at or above the trigger line — prefer it.
            if (bestId === null || top > -bestDistance) {
              bestId = id;
              bestDistance = -top + topOffset;
            }
          } else if (bestId === null) {
            bestId = id;
            bestDistance = distance;
          }
        }
      }
      if (bestId) setActive(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        }
        recompute();
      },
      {
        rootMargin: `-${topOffset}px 0px -60% 0px`,
        threshold: [0, 1],
      },
    );

    for (const el of elements) observer.observe(el);

    // Initial pass — pick whichever section is currently above the trigger.
    requestAnimationFrame(() => {
      let bestId: string | null = null;
      let bestTop = -Infinity;
      for (const el of elements) {
        const top = el.getBoundingClientRect().top - topOffset;
        if (top <= 0 && top > bestTop) {
          bestTop = top;
          bestId = el.id;
        }
      }
      if (bestId) setActive(bestId);
    });

    return () => observer.disconnect();
  }, [ids, topOffset]);

  return active;
}
