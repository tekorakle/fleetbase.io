'use client';

import {
  ArrowRight,
  Container,
  Heart,
  Recycle,
  ShoppingCart,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const industries = [
  {
    icon: Truck,
    title: 'Courier & Parcel Services',
    description: 'Run dispatch, route optimization, proof of delivery, and customer updates from one operational system.',
    href: '/solutions/courier-services',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Retail',
    description: 'Connect storefront orders to fulfillment and delivery workflows without stitching together separate tools.',
    href: '/solutions/ecommerce',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Grocery Delivery',
    description: 'Handle fast-moving, time-sensitive deliveries with live dispatch, real-time tracking, and customer communication.',
    href: '/solutions/food-delivery',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Heart,
    title: 'Healthcare & Pharmacy',
    description: 'Coordinate sensitive deliveries with visibility, accountability, and infrastructure control for regulated operations.',
    href: '/solutions/healthcare',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    icon: Recycle,
    title: 'Waste & Recycling',
    description: 'Manage collection routes, service zones, and vehicle activity with workflows tailored to recurring field operations.',
    href: '/solutions/waste-management',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
  },
  {
    icon: Container,
    title: 'Container & Freight',
    description: 'Track multi-leg movement, coordinate assets, and bring fleet, order, and operations data into one control layer.',
    href: '/solutions/container-operations',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
];

export default function IndustryUseCases() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

          {/* Left: Header block */}
          <div className="flex flex-col justify-between gap-10 lg:col-span-2">
            <div className="space-y-5">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                Built for Real Operations
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
                Built for Operations That Can't Afford Gaps
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Whether you run last-mile delivery, courier dispatch, or freight logistics —
                Fleetbase has the operational depth to fit how your team actually works. Start
                with what you need, expand from there.
              </p>
              <Button
                variant="ghost"
                className="group !px-0 gap-2 hover:!bg-transparent"
                asChild
              >
                <Link href="/solutions">
                  Explore all solutions
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Social proof stat */}
            <div className="rounded-xl border bg-muted/20 p-5">
              <div className="text-4xl font-bold tracking-tight text-primary">8,000+</div>
              <div className="mt-1 text-sm text-muted-foreground">
                active operations running on Fleetbase across these industries
              </div>
            </div>
          </div>

          {/* Right: Industry mosaic grid */}
          <div
            className="overflow-hidden rounded-xl border bg-border lg:col-span-3"
            style={{ gap: '1px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="group flex items-start gap-3 bg-card p-5 transition-colors hover:bg-muted/40"
                >
                  <div
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-md',
                      industry.bg,
                    )}
                  >
                    <Icon className={cn('size-4', industry.color)} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold leading-tight">{industry.title}</h3>
                      <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </div>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
