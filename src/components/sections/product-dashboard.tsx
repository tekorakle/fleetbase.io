'use client';

import { ArrowRight, Map, Package, Truck, Wallet, Zap, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const FEATURE_CARDS = [
  {
    title: 'Live Fleet Tracking',
    description:
      'Monitor every driver and vehicle in real time on an interactive map. Know exactly where your fleet is at all times.',
    icon: Map,
    cta: 'Explore FleetOps',
    href: '/products/fleetops',
  },
  {
    title: 'Smart Dispatch',
    description:
      'Assign orders to the nearest available driver automatically, or manage assignments manually from the dispatch board.',
    icon: Truck,
    cta: 'Explore FleetOps',
    href: '/products/fleetops',
  },
  {
    title: 'Order Lifecycle',
    description:
      'Track every order from creation to proof of delivery. Customers get live updates. You get full visibility.',
    icon: Package,
    cta: 'Explore Storefront',
    href: '/products/storefront',
  },
  {
    title: 'Financial Ledger',
    description:
      'Built-in accounting for logistics — track driver earnings, order revenue, and operational costs in one place.',
    icon: Wallet,
    cta: 'Explore Ledger',
    href: '/products/ledger',
  },
  {
    title: 'Extensions & Automations',
    description:
      'Connect your WMS, ERP, or any third-party tool via REST API. Build custom extensions with the Fleetbase SDK.',
    icon: Zap,
    cta: 'View Extensions',
    href: '/products/extensions',
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Deep operational insights across fleet performance, delivery SLAs, driver behaviour, and revenue metrics.',
    icon: BarChart3,
    cta: 'Learn more',
    href: '/products/fleetops',
  },
];

export default function ProductDashboard() {
  return (
    <section className="section-padding relative container !pt-0">
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-4xl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
          The complete logistics command centre
        </h2>
      </div>

      {/* Main Dashboard Image */}
      <Image
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/fleetbase-live-fleet-map_45501733.webp"
        alt="Fleetbase dispatch dashboard — real-time fleet management"
        width={1440}
        height={905}
        className="mx-auto mt-10 mask-b-from-50% mask-b-to-95% md:mt-16"
      />

      {/* Tagline */}
      <h3 className="text-muted-foreground mt-4 text-center uppercase">
        EVERYTHING YOUR LOGISTICS TEAM NEEDS. NOTHING YOU DON&apos;T.
      </h3>

      {/* Feature Cards */}
      <div className="mx-auto mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURE_CARDS.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <Card
              key={index}
              className="group bg-accent/80 gap-4 border-none shadow-none"
            >
              <CardHeader className="gap-2.5">
                <div className="bg-card/50 flex size-10 items-center justify-center rounded-md border">
                  <IconComponent className="size-4.5 opacity-70" />
                </div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="text-muted-foreground flex-1 text-sm">
                  {card.description}
                </CardDescription>
                <div>
                  <Button
                    variant="ghost"
                    asChild
                    className="group mt-6 h-12 gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95"
                  >
                    <Link href={card.href}>
                      {card.cta}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
