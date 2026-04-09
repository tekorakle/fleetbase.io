import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star, Globe, Truck, Package, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Customer Stories | Fleetbase',
  description:
    'See how logistics businesses around the world use Fleetbase to reduce costs, improve delivery performance, and scale their operations. Real stories from real operators.',
  keywords: ['fleetbase customer stories', 'logistics software case studies', 'fleet management success stories', 'delivery platform testimonials'],
  openGraph: {
    title: 'Customer Stories | Fleetbase',
    description: 'Real stories from logistics operators using Fleetbase to transform their operations.',
  },
};

const testimonials = [
  {
    quote: "We reduced our total fleet mileage by 28% in the first month. The route optimization engine handles what used to take our dispatch team two hours in about 30 seconds.",
    author: 'David L.',
    role: 'Fleet Operations Manager',
    company: 'FastTrack Logistics',
    industry: 'Trucking & Haulage',
    icon: Truck,
    stats: [
      { value: '28%', label: 'Fuel cost reduction' },
      { value: '2 hrs → 30 sec', label: 'Route planning time' },
      { value: '94%', label: 'On-time delivery rate' },
    ],
  },
  {
    quote: "Our first-attempt delivery rate went from 78% to 94% after we switched to Fleetbase. The combination of optimized routes and live customer tracking made the difference.",
    author: 'Rachel T.',
    role: 'VP of Operations',
    company: 'Urban Delivery Co.',
    industry: 'Last-Mile Delivery',
    icon: Zap,
    stats: [
      { value: '78% → 94%', label: 'First-attempt delivery rate' },
      { value: '40%', label: 'Fewer support calls' },
      { value: '3 weeks', label: 'Time to go live' },
    ],
  },
  {
    quote: "We have seven different order types — from standard deliveries to multi-leg pharmaceutical shipments. Fleetbase handles all of them in one system without any compromise.",
    author: 'Nadia F.',
    role: 'Head of Logistics Technology',
    company: 'Meridian Supply Chain',
    industry: 'Healthcare & Pharma',
    icon: Package,
    stats: [
      { value: '7', label: 'Order types in one system' },
      { value: '100%', label: 'Chain of custody compliance' },
      { value: '60%', label: 'Reduction in admin time' },
    ],
  },
  {
    quote: "Switching to Fleetbase was one of the best infrastructure decisions we made. We reduced logistics costs by 28%, expanded to three new cities in four months, and we own our entire stack.",
    author: 'Elena V.',
    role: 'CEO',
    company: 'Nexus Delivery Group',
    industry: 'E-commerce Fulfillment',
    icon: Globe,
    stats: [
      { value: '28%', label: 'Logistics cost reduction' },
      { value: '3 cities', label: 'Expanded in 4 months' },
      { value: '100%', label: 'Data ownership' },
    ],
  },
  {
    quote: "Our pick error rate dropped from 4% to under 0.5% after switching to Pallet. And because it connects directly to FleetOps, our dispatch team gets orders the moment they're packed.",
    author: 'Sandra O.',
    role: 'Warehouse Operations Manager',
    company: 'Clearview Distribution',
    industry: 'Warehouse & Distribution',
    icon: Package,
    stats: [
      { value: '4% → 0.5%', label: 'Pick error rate' },
      { value: '60%', label: 'Faster order fulfillment' },
      { value: 'Real-time', label: 'Warehouse to dispatch sync' },
    ],
  },
  {
    quote: "Our delivery-related support tickets dropped 70% after we started sending customers live tracking links automatically. The ones that do come in are resolved in under two minutes.",
    author: 'Jasmine K.',
    role: 'Head of Customer Experience',
    company: 'Bloom Delivery',
    industry: 'Food & Grocery Delivery',
    icon: Star,
    stats: [
      { value: '70%', label: 'Fewer support tickets' },
      { value: '< 2 min', label: 'Average query resolution' },
      { value: '4.8★', label: 'Customer satisfaction score' },
    ],
  },
];

const industries = [
  'Trucking & Haulage', 'Food & Grocery Delivery', 'Courier & Parcel',
  'E-commerce Fulfillment', 'Healthcare & Pharma', 'Waste Management',
  'Container Operations', 'Government & Public Sector',
];

export default function CustomersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Customer Stories
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Real operators.{' '}
            <span className="text-primary">Real results.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Over 500 logistics businesses across 40+ countries use Fleetbase to run their operations.
            Here are some of their stories.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-muted/20 py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '500+', label: 'Companies worldwide' },
              { value: '40+', label: 'Countries' },
              { value: '10M+', label: 'Orders processed' },
              { value: '30%', label: 'Average cost reduction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Customer stories</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              From last-mile couriers to enterprise freight networks — see how Fleetbase is making a
              difference.
            </p>
          </div>
          <div className="space-y-8">
            {testimonials.map((t) => (
              <div key={t.company} className="rounded-xl border bg-card p-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                    {t.industry}
                  </span>
                </div>
                <blockquote className="mb-6 text-lg leading-relaxed text-foreground md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mb-6 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.author}</span>
                  {' — '}{t.role}, {t.company}
                </div>
                <div className="grid grid-cols-3 gap-4 border-t pt-6">
                  {t.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-bold text-primary">{stat.value}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t py-16 md:py-20">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Industries we serve</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span key={industry} className="rounded-full border bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Join 500+ logistics operators worldwide
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Start your free trial and see why logistics teams around the world choose Fleetbase.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="https://console.fleetbase.io">
                    Start free trial <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact/sales">Talk to sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
