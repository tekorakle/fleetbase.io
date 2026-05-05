import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const modules = [
  {
    id: 'fleetops',
    label: 'Fleet-Ops',
    labelColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    headline: 'Fleet & Transport Management',
    description:
      'Dispatch drivers, track vehicles in real time, optimize routes, and manage your entire transport operation from a single command center.',
    features: [
      'Live GPS tracking & interactive map',
      'Automated dispatch & route optimization',
      'Driver app with proof of delivery',
      'Telematics, maintenance & fuel tracking',
    ],
    image: '/images/screenshots/fleet-ops/fleet-ops-orders-kanban.webp',
    imageAlt: 'Fleet-Ops order management kanban board with live dispatch and driver assignments',
    href: '/platform/fleetops',
    colSpan: 'lg:col-span-2',
    imageAspect: 'aspect-[16/10]',
  },
  {
    id: 'storefront',
    label: 'Storefront',
    labelColor: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    headline: 'Headless E-Commerce',
    description:
      'Launch delivery-native storefronts or multi-vendor marketplaces. Orders flow directly into Fleet-Ops for automatic dispatch.',
    features: [
      'Single store or multi-vendor marketplace',
      'Stripe, PayPal & regional gateways',
      'White-label customer mobile app',
      'Auto-dispatch on checkout',
    ],
    image: '/images/console-screenshots/storefront-products-grid.webp',
    imageAlt: 'Storefront product catalog and order management interface',
    href: '/platform/storefront',
    colSpan: 'lg:col-span-1',
    imageAspect: 'aspect-[4/3]',
  },
  {
    id: 'pallet',
    label: 'Pallet (Soon)',
    labelColor: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
    headline: 'Warehouse & Inventory',
    description:
      'Prepare for unified warehouse and inventory workflows inside Fleetbase. Pallet will bring stock control, fulfillment operations, and warehouse visibility into the same platform.',
    features: [
      'Inventory visibility by location',
      'Pick, pack & fulfillment workflows',
      'Warehouse operations inside Fleetbase',
      'Launching soon as a first-party module',
    ],
    image: '/images/placeholder.png',
    imageAlt: 'Pallet warehouse management and inventory tracking interface',
    href: '/platform/pallet',
    colSpan: 'lg:col-span-1',
    imageAspect: 'aspect-[4/3]',
  },
  {
    id: 'ledger',
    label: 'Ledger',
    labelColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    headline: 'Accounting & Finance',
    description:
      'Close the loop on logistics finance. Automated invoicing, driver wallets, and real-time P&L — built for logistics operators.',
    features: [
      'Auto-invoicing on order completion',
      'Driver, vendor & partner wallets',
      'Cash flow & P&L dashboards',
      'Full double-entry accounting',
    ],
    image: '/images/console-screenshots/ledger-dashboard.webp',
    imageAlt: 'Ledger finance dashboard showing revenue, invoices and wallet management',
    href: '/platform/ledger',
    colSpan: 'lg:col-span-1',
    imageAspect: 'aspect-[4/3]',
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    labelColor: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
    headline: 'Extensions & Marketplace',
    description:
      'Extend Fleetbase with official and community-built extensions. Build your own or install from the registry in one click.',
    features: [
      'Official & community registry',
      'One-click installation',
      'Build and publish custom extensions',
      'CLI scaffolding tools',
    ],
    image: '/images/console-screenshots/extensions-marketplace.webp',
    imageAlt: 'Fleetbase extensions marketplace showing available modules and integrations',
    href: '/extensions',
    colSpan: 'lg:col-span-1',
    imageAspect: 'aspect-[4/3]',
  },
];

export default function PlatformModules() {
  return (
    <section className="section-padding">
      <div className="container space-y-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            The Platform
          </div>
          <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
            One Platform.{' '}
            <span className="text-gradient">Multiple Logistics Capabilities.</span>
          </h2>
          <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
            Fleetbase includes modules for fleet management, e-commerce delivery, warehouse
            operations, accounting, identity management, and developer tooling. Use what fits
            your operation — it's all on one platform, without stitching tools together.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {modules.map((mod) => (
            <Card
              key={mod.id}
              className={cn(
                'dark:to-muted/30 dark:via-muted/10 to-background via-card from-card group overflow-hidden bg-gradient-to-br dark:from-transparent',
                mod.colSpan,
              )}
            >
              <CardContent className="flex h-full flex-col p-0">
                {/* Screenshot */}
                <div className={cn('relative w-full overflow-hidden border-b', mod.imageAspect)}>
                  <Image
                    src={mod.image}
                    alt={mod.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <span
                    className={cn(
                      'inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
                      mod.labelColor,
                    )}
                  >
                    {mod.label}
                  </span>

                  <div>
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-accent-foreground">
                      {mod.headline}
                    </h3>
                    <p className="text-sm leading-snug text-muted-foreground">{mod.description}</p>
                  </div>

                  <ul className="space-y-1.5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <Link
                      href={mod.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground transition-all hover:gap-2.5"
                    >
                      Learn more <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer link */}
        <div className="flex justify-center">
          <Button
            variant="ghost"
            asChild
            className="group gap-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/platform">
              Explore the full platform
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
