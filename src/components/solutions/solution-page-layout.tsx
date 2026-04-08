import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  screenshot?: string; // path to /public/...
  screenshotAlt?: string;
  screenshotNeeded?: string; // label for the screenshot request list
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface SolutionPageProps {
  // SEO / meta
  badge: string;
  title: React.ReactNode;
  description: string;
  // Hero
  stats: Stat[];
  heroCta?: { primary: string; primaryHref: string; secondary?: string; secondaryHref?: string };
  heroScreenshot?: string;
  heroScreenshotAlt?: string;
  heroScreenshotNeeded?: string;
  // Sections
  painPoints?: { heading: string; items: string[] };
  features: Feature[];
  testimonial?: Testimonial;
  faqs?: FAQ[];
  // Bottom CTA
  ctaHeading: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ScreenshotPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 text-center text-xs text-muted-foreground',
        className,
      )}
    >
      <div className="p-6">
        <div className="mb-1 text-lg">📸</div>
        <div className="font-medium">Screenshot needed</div>
        <div className="mt-0.5 opacity-70">{label}</div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }: FAQ) {
  return (
    <details className="group border-b py-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
        {q}
        <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
    </details>
  );
}

// ─── Main Layout ──────────────────────────────────────────────────────────────

export default function SolutionPageLayout({
  badge,
  title,
  description,
  stats,
  heroCta,
  heroScreenshot,
  heroScreenshotAlt,
  heroScreenshotNeeded,
  painPoints,
  features,
  testimonial,
  faqs,
  ctaHeading,
  ctaBody,
  ctaPrimary,
  ctaPrimaryHref,
  ctaSecondary,
  ctaSecondaryHref,
}: SolutionPageProps) {
  const primaryCta = heroCta ?? { primary: 'Start Free Trial', primaryHref: '/trial', secondary: 'Book a Demo', secondaryHref: '/contact/sales' };

  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {badge}
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={primaryCta.primaryHref}>
                  {primaryCta.primary} <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              {primaryCta.secondary && primaryCta.secondaryHref && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={primaryCta.secondaryHref}>{primaryCta.secondary}</Link>
                </Button>
              )}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1 bg-background px-6 py-8 text-center">
                  <span className="text-3xl font-bold tracking-tight md:text-4xl">{s.value}</span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero screenshot */}
          <div className="mx-auto mt-14 max-w-5xl">
            {heroScreenshot ? (
              <Image
                src={heroScreenshot}
                alt={heroScreenshotAlt ?? 'Fleetbase Console'}
                width={1200}
                height={700}
                className="w-full rounded-xl border shadow-2xl"
                priority
              />
            ) : (
              <ScreenshotPlaceholder
                label={heroScreenshotNeeded ?? 'Hero dashboard screenshot'}
                className="h-[420px] w-full"
              />
            )}
          </div>
        </div>
      </section>

      {/* ── Pain Points ───────────────────────────────────────────────── */}
      {painPoints && (
        <section className="border-y bg-muted/20 py-14 md:py-18">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
                {painPoints.heading}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {painPoints.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-lg border bg-background p-4">
                    <span className="mt-0.5 text-destructive">✕</span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── Features ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Everything you need, nothing you don&apos;t
            </h2>
          </div>
          <div className="space-y-20">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={cn(
                  'grid items-center gap-10 lg:grid-cols-2',
                  i % 2 === 1 && 'lg:[&>*:first-child]:order-2',
                )}
              >
                {/* Text */}
                <div>
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
                    <feature.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
                {/* Screenshot */}
                <div>
                  {feature.screenshot ? (
                    <Image
                      src={feature.screenshot}
                      alt={feature.screenshotAlt ?? feature.title}
                      width={700}
                      height={440}
                      className="w-full rounded-xl border shadow-lg"
                    />
                  ) : (
                    <ScreenshotPlaceholder
                      label={feature.screenshotNeeded ?? feature.title}
                      className="h-[280px] w-full"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────────────────────── */}
      {testimonial && (
        <section className="border-y bg-muted/20 py-14 md:py-18">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <blockquote className="mb-6 text-xl font-medium leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{testimonial.author}</span>
                {' — '}{testimonial.role}, {testimonial.company}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
                Frequently asked questions
              </h2>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} {...faq} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute -bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                {ctaHeading}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{ctaBody}</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href={ctaPrimaryHref}>
                    {ctaPrimary} <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                {ctaSecondary && ctaSecondaryHref && (
                  <Button size="lg" variant="outline" asChild>
                    <Link href={ctaSecondaryHref}>{ctaSecondary}</Link>
                  </Button>
                )}
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                7-day free trial · No credit card required · Full platform access
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
