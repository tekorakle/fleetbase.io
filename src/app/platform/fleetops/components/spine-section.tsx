import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

/**
 * A continuous vertical "spine" with labeled beats. Each beat is rendered
 * inside <SpineBeat />. The spine is a CSS border-l with a fading gradient
 * border-image — see fleet-ops.css. Inspired by spoke.com/dispatch's
 * Plan → Manage → Delight → Scale → Automate section.
 */
export function Spine({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'fo-spine relative ml-3 space-y-24 pl-6 lg:ml-px lg:space-y-32 lg:pl-10',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SpineBeat({
  label,
  title,
  description,
  cta,
  children,
}: {
  label: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  children: ReactNode;
}) {
  return (
    <section className="relative">
      <span className="relative inline-block text-[12px] font-semibold uppercase tracking-[0.7px] text-[var(--fo-blue)]">
        <span className="fo-spine-dot" />
        {label}
      </span>
      <h2 className="mt-4 text-[32px] font-[680] leading-[36px] tracking-[-0.4px] text-balance text-[var(--fo-fg-strong)] lg:mt-6 lg:text-[50px] lg:leading-[54px] lg:tracking-[-0.6px]">
        {title}
      </h2>
      <div className="mt-6 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
        <p className="text-[18px] font-[460] leading-[25px] tracking-[0.15px] text-[var(--fo-fg-muted)] lg:max-w-[515px] lg:text-[22px] lg:leading-[29px] lg:tracking-[0.12px]">
          {description}
        </p>
        {cta ? (
          <a
            href={cta.href}
            className="inline-flex h-[38px] items-center gap-1.5 rounded-[10px] bg-[var(--fo-surface-2)] px-[14px] text-[16px] font-[550] leading-none tracking-[0.2px] text-[var(--fo-fg-strong)] transition-colors hover:bg-[var(--fo-border)]"
          >
            {cta.label}
          </a>
        ) : null}
      </div>
      <div className="mt-10 lg:mt-12">{children}</div>
    </section>
  );
}
