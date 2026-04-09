import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Fleetbase vs Route4Me | Open-Source Route4Me Alternative',
  description:
    'Compare Fleetbase vs Route4Me. Fleetbase is the open-source Route4Me alternative with full dispatch, fleet management, driver app, and route optimization — no per-route fees.',
  keywords: [
    'Route4Me alternative',
    'Fleetbase vs Route4Me',
    'open source route optimization software',
    'route planning software alternative',
    'Route4Me competitor',
    'cheaper than Route4Me',
    'fleet management with route optimization',
  ],
  openGraph: {
    title: 'Fleetbase vs Route4Me | Open-Source Route4Me Alternative',
    description:
      'Compare Fleetbase vs Route4Me. Full dispatch, fleet management, driver app, and route optimization — no per-route fees.',
  },
  alternates: { canonical: 'https://fleetbase.io/compare/vs-route4me' },
};

type FeatureRow = {
  feature: string;
  fleetbase: string | boolean;
  route4me: string | boolean;
  note?: string;
};

const COMPARISON: FeatureRow[] = [
  { feature: 'Open Source', fleetbase: true, route4me: false },
  { feature: 'Self-Hosted Deployment', fleetbase: true, route4me: false },
  { feature: 'Cloud Hosting', fleetbase: true, route4me: true },
  { feature: 'Free Tier', fleetbase: 'Free trial + open source', route4me: '7-day trial only' },
  { feature: 'Pricing Model', fleetbase: 'Usage-based (from $50/mo)', route4me: 'Per-route + per-driver fees' },
  { feature: 'Route Optimization', fleetbase: true, route4me: true },
  { feature: 'Real-Time GPS Tracking', fleetbase: true, route4me: true },
  { feature: 'Automated Dispatch', fleetbase: true, route4me: 'Limited' },
  { feature: 'Driver Mobile App', fleetbase: 'Free open-source (Navigator)', route4me: 'Proprietary (extra cost)' },
  { feature: 'Proof of Delivery (POD)', fleetbase: true, route4me: true },
  { feature: 'Customer Notifications', fleetbase: true, route4me: 'Paid add-on' },
  { feature: 'Fleet Management', fleetbase: 'Full FleetOps module', route4me: 'Basic' },
  { feature: 'Driver Management', fleetbase: true, route4me: 'Limited' },
  { feature: 'Vehicle Management', fleetbase: true, route4me: 'Limited' },
  { feature: 'Full REST API', fleetbase: true, route4me: 'Limited' },
  { feature: 'Webhooks', fleetbase: true, route4me: 'Limited' },
  { feature: 'White-Label Branding', fleetbase: true, route4me: false },
  { feature: 'Warehouse Management (WMS)', fleetbase: 'Pallet WMS included', route4me: false },
  { feature: 'Storefront / Online Ordering', fleetbase: true, route4me: false },
  { feature: 'Accounting / Ledger', fleetbase: true, route4me: false },
  { feature: 'Multi-Tenant / Multi-Org', fleetbase: true, route4me: 'Enterprise only' },
  { feature: 'Custom Extensions / SDK', fleetbase: true, route4me: false },
  { feature: 'Data Ownership', fleetbase: 'Full — self-host or export', route4me: 'Vendor-controlled' },
  { feature: 'Community Support', fleetbase: 'Discord + GitHub', route4me: 'Email only' },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />;
  if (value === false) return <XCircle className="h-5 w-5 text-red-400 mx-auto" />;
  return <span className="text-sm text-center block">{value}</span>;
}

export default function VsRoute4MePage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://fleetbase.io' },
          { name: 'Compare', url: 'https://fleetbase.io/compare' },
          { name: 'Fleetbase vs Route4Me', url: 'https://fleetbase.io/compare/vs-route4me' },
        ]}
      />

      {/* Hero */}
      <section className="section-padding border-b bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Comparison
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
            Fleetbase vs Route4Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Route4Me is a route planning tool. Fleetbase is a complete open-source fleet management and TMS platform — with route optimization built in, plus dispatch, driver management, WMS, storefront, and accounting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button size="lg" asChild>
              <Link href="https://console.fleetbase.io">
                Try Fleetbase Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="py-16 md:py-20 border-b">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold mb-10 text-center">Why teams choose Fleetbase over Route4Me</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'More than route planning',
                description:
                  'Route4Me optimizes routes. Fleetbase does that and much more — full dispatch, real-time tracking, driver management, POD capture, WMS, and storefront all in one platform.',
              },
              {
                title: 'Open source & self-hostable',
                description:
                  'Route4Me is closed-source and cloud-only. Fleetbase is fully open source under AGPL. Deploy on your own infrastructure and keep full control of your data.',
              },
              {
                title: 'No per-route fees',
                description:
                  "Route4Me charges per route and per driver. Fleetbase uses resource units — one predictable pool that covers everything. No surprise bills as you scale.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border bg-card p-6">
                <CheckCircle2 className="h-6 w-6 text-green-500 mb-3" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Full Feature Comparison</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/40">
                  <th className="text-left px-4 py-3 font-semibold w-1/2">Feature</th>
                  <th className="text-center px-4 py-3 font-semibold text-primary w-1/4">Fleetbase</th>
                  <th className="text-center px-4 py-3 font-semibold text-muted-foreground w-1/4">Route4Me</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-4 py-3 font-medium">
                      {row.feature}
                      {row.note && <span className="block text-xs text-muted-foreground mt-0.5">{row.note}</span>}
                    </td>
                    <td className="px-4 py-3 text-center"><Cell value={row.fleetbase} /></td>
                    <td className="px-4 py-3 text-center"><Cell value={row.route4me} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Ready to switch from Route4Me?</h2>
          <p className="text-lg text-muted-foreground">
            Get route optimization plus a complete fleet management platform. Our team provides free onboarding for teams migrating from Route4Me.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="https://console.fleetbase.io">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                Talk to Sales
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">No credit card required · Free migration support · Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
