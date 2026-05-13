'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type BeatDef = { id: string; label: string };

/**
 * Sticky vertical progress indicator that tracks which SpineBeat is closest
 * to the viewport center as the user scrolls through the spine section.
 *
 * Hidden below lg — the spine section on mobile is full-width and a side
 * indicator would just clutter.
 *
 * Implementation: an IntersectionObserver watches the elements named in
 * `beats` and tracks intersection ratios. The dot whose corresponding beat
 * has the highest intersection ratio is rendered as active.
 */
export function SpineProgress({ beats }: { beats: BeatDef[] }) {
  const [activeId, setActiveId] = useState<string>(beats[0]?.id ?? '');
  // The indicator is only visible when at least one beat is intersecting
  // the viewport. Outside the spine section it hides entirely so it
  // doesn't sit on top of unrelated content (hero, automate, CTA, etc.).
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const elements = beats
      .map((b) => document.getElementById(b.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    // Keep a map of id -> current intersection ratio.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }
        // Pick the id with the highest ratio.
        let best = activeId;
        let bestRatio = -1;
        for (const [id, r] of ratios) {
          if (r > bestRatio) {
            bestRatio = r;
            best = id;
          }
        }
        if (best && best !== activeId) setActiveId(best);
        setVisible(bestRatio > 0);
      },
      {
        // Track several thresholds so we know which beat is most visible.
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        // Bias toward the middle of the viewport — beats near the top/bottom
        // shouldn't take priority just because they're poking in.
        rootMargin: '-30% 0px -30% 0px',
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // We intentionally depend only on `beats` here — re-running on every
    // activeId change would tear down and rebuild the observer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beats]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none fixed top-1/2 right-6 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 transition-opacity duration-300 lg:flex',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      {beats.map((beat) => {
        const isActive = beat.id === activeId;
        return (
          <button
            key={beat.id}
            type="button"
            onClick={() => scrollTo(beat.id)}
            title={beat.label}
            aria-label={`Jump to ${beat.label}`}
            className={cn(
              'pointer-events-auto group relative flex items-center transition-all',
            )}
          >
            <span
              className={cn(
                'inline-block size-2 rounded-full transition-all',
                isActive
                  ? 'bg-[var(--fo-blue)] ring-4 ring-[var(--fo-blue)]/15'
                  : 'bg-[var(--fo-border)] group-hover:bg-[var(--fo-blue)]/50',
              )}
            />
            <span
              className={cn(
                'pointer-events-none absolute right-5 rounded-md bg-white px-2 py-0.5 text-[11px] font-medium whitespace-nowrap text-[var(--fo-fg-strong)] shadow-sm transition-opacity',
                isActive
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100',
              )}
            >
              {beat.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
