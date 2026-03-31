'use client';
import Link from 'next/link';
import { ArrowRight, Truck, Warehouse, UtensilsCrossed, Wrench, ShoppingCart, Container } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const industries = [
  {
    icon: Truck,
    title: 'Last-Mile Delivery',
    description: 'Optimize multi-stop routes, track drivers in real time, and send automated ETAs to customers. Cut delivery costs and reduce failed attempts.',
    href: '/solutions/last-mile',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Warehouse,
    title: '3PL & Warehousing',
    description: 'Manage multiple client operations from a single platform. Separate data by organization, automate order flows, and integrate with WMS.',
    href: '/solutions/3pl',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverage',
    description: 'Handle time-sensitive deliveries with temperature tracking, proof of delivery, and real-time driver dispatch for restaurants and distributors.',
    href: '/solutions/food-beverage',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Wrench,
    title: 'Field Service',
    description: 'Dispatch technicians, track job status, manage work orders, and capture signatures and photos on-site with the Navigator mobile app.',
    href: '/solutions/field-service',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Fulfillment',
    description: 'Connect your storefront to your delivery operations. Automate order ingestion, dispatch, and customer notifications end-to-end.',
    href: '/solutions/ecommerce',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
  },
  {
    icon: Container,
    title: 'Freight & Haulage',
    description: 'Manage long-haul routes, multi-leg shipments, carrier assignments, and freight documentation from a single operations dashboard.',
    href: '/solutions/freight',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
];

export default function IndustryUseCases() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            Built for Every Vertical
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">
            One Platform, Every Industry
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you&apos;re running last-mile deliveries, managing a 3PL network, or dispatching field technicians — Fleetbase adapts to how your business operates.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Card
                key={industry.title}
                className="group relative overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className={cn('inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4', industry.bg)}>
                    <Icon className={cn('h-5 w-5', industry.color)} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
