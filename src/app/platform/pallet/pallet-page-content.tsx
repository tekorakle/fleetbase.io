'use client';

import {
  ArrowRight,
  BarChart3,
  Box,
  CheckCircle2,
  ClipboardList,
  GitMerge,
  Globe,
  Layers,
  MapPin,
  Package,
  RefreshCcw,
  ShoppingBag,
  Truck,
  Users,
  XCircle,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ── Data ─────────────────────────────────────────────────────────────────────

const problems = [
  {
    title: 'Your WMS and TMS don\'t talk to each other',
    description:
      'Orders leave your warehouse and disappear into a separate system. You lose visibility at the handoff point and spend time manually bridging the gap between picking and dispatch.',
  },
  {
    title: 'Enterprise WMS costs are out of reach',
    description:
      'Commercial WMS platforms charge $50K–$500K+ in upfront licensing before you\'ve fulfilled a single order. Growing businesses and lean operations can\'t justify that overhead.',
  },
  {
    title: 'Rigid software that doesn\'t fit your workflows',
    description:
      'Most WMS platforms were built for one type of operation. When your warehouse doesn\'t match their model, you either change your process or pay consultants to customize it.',
  },
];

const capabilities = [
  {
    icon: Box,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    title: 'Inventory Management',
    description:
      'Track stock levels, locations, and movements across your warehouse. Know exactly what you have, where it is, and what\'s moved — in real time.',
  },
  {
    icon: Layers,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    title: 'Location & Bin Tracking',
    description:
      'Organize your warehouse into zones, aisles, racks, and bins. Track inventory down to exact bin locations for maximum pick accuracy.',
  },
  {
    icon: ClipboardList,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    title: 'Pick Lists & Fulfillment',
    description:
      'Generate optimized pick lists from incoming orders. Guide warehouse staff to the right locations and confirm picks before packing.',
  },
  {
    icon: RefreshCcw,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    title: 'Cycle Counts & Audits',
    description:
      'Schedule cycle counts or trigger on-demand audits. Track variances, approve adjustments, and maintain a full audit trail of every change.',
  },
  {
    icon: GitMerge,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    title: 'Stock Transfers',
    description:
      'Move inventory between locations or warehouses with tracked transfer orders. Stock levels update automatically when transfers are confirmed.',
  },
  {
    icon: BarChart3,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    title: 'Inventory Reporting',
    description:
      'Stock level reports, movement history, and fulfillment metrics — giving you a clear picture of warehouse performance at any point in time.',
  },
];

const integrationSteps = [
  {
    icon: ShoppingBag,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    module: 'Storefront',
    title: 'Customer places order',
    description: 'An order arrives via Storefront or API. Pallet receives it and generates a pick list automatically.',
  },
  {
    icon: ClipboardList,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    module: 'Pallet',
    title: 'Picked, packed & ready',
    description: 'Warehouse staff work through the pick list, confirm each item, and pack the order. Status updates in real time.',
  },
  {
    icon: Truck,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    module: 'Fleet-Ops',
    title: 'Auto-dispatched for delivery',
    description: 'Once packed, Fleet-Ops receives the fulfilment trigger and assigns a driver. No manual handoff required.',
  },
  {
    icon: MapPin,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    module: 'Navigator',
    title: 'Delivered to the customer',
    description: 'Driver navigates to the customer, captures proof of delivery, and the order is marked complete across all modules.',
  },
];

const useCases = [
  {
    icon: Package,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    title: 'E-Commerce Fulfillment',
    description: 'High-volume order picking connected directly to Storefront and Fleet-Ops dispatch — no manual handoffs between systems.',
  },
  {
    icon: Users,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    title: '3PL Operations',
    description: 'Multi-client inventory management with separate stock, reporting, and billing per client — all in one warehouse.',
  },
  {
    icon: ShoppingBag,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    title: 'Retail Distribution',
    description: 'Multi-store inventory allocation, stock transfers between locations, and replenishment workflows.',
  },
  {
    icon: Globe,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    title: 'Food & Beverage',
    description: 'Stock level tracking, expiry-aware fulfillment, and warehouse-to-delivery in one connected platform.',
  },
];

const faqs = [
  {
    q: 'What does "Beta" mean for Pallet?',
    a: 'Pallet is in active development and available for early access. Core inventory management, pick lists, cycle counts, and Fleet-Ops integration are functional. Some advanced features are still being built. We recommend using Pallet for non-critical operations during this period, and we actively incorporate feedback from beta users into the roadmap.',
  },
  {
    q: 'How is Pallet different from a basic inventory system?',
    a: 'Basic inventory systems track what you have. Pallet is a full Warehouse Management System — it manages how you receive, store, pick, pack, and fulfil orders, with the critical addition of native Fleet-Ops and Storefront integration. The handoff from warehouse to dispatch happens automatically, with no separate integration to build.',
  },
  {
    q: 'How does Pallet connect with Fleet-Ops?',
    a: 'Pallet and Fleet-Ops are native Fleetbase modules sharing the same data layer. When an order is fulfilled in Pallet, Fleet-Ops receives the dispatch trigger automatically — no webhook, no middleware, no manual step. You get full end-to-end visibility from inbound stock to proof of delivery.',
  },
  {
    q: 'Can Pallet handle multiple warehouses?',
    a: 'Yes. Pallet supports multiple warehouse locations, each with its own inventory, location hierarchy, and configuration. Stock transfers between warehouses are tracked as transfer orders, and stock levels update automatically when transfers are confirmed.',
  },
  {
    q: 'Does Pallet work with Storefront orders?',
    a: 'Yes. When a customer places an order via Storefront, Pallet can receive it and generate a pick list. Once fulfilled, Fleet-Ops dispatches the delivery. The full Storefront → Pallet → Fleet-Ops flow works natively without any integration work.',
  },
  {
    q: 'Is Pallet open source?',
    a: 'Yes. Pallet is open-source under AGPL-3.0. You can view the code on GitHub, self-host it, and contribute. A commercial licence is available if you need to keep modifications proprietary.',
  },
  {
    q: 'Can I use Pallet for 3PL operations?',
    a: 'Yes. Pallet supports multi-client inventory management with data isolation per client. Each client can have separate stock, reporting, and configuration within the same warehouse infrastructure.',
  },
];

// ── Shared Components ─────────────────────────────────────────────────────────

function BrowserFrame({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('overflow-hidden rounded-xl border shadow-lg', className)}>
      <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="ml-2 text-xs text-muted-foreground">{label}</span>
      </div>
      {children}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PalletPageContent() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/[0.08] blur-[120px]" />
          <div className="absolute top-1/3 -right-24 h-[500px] w-[500px] rounded-full bg-chart-3/[0.07] blur-3xl" />
        </div>
        <div className="container space-y-12">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Pallet · Warehouse & Inventory Management
              </div>
              <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                Beta
              </div>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Warehouse Management,{' '}
              <span className="text-gradient">Connected to Delivery</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-snug text-muted-foreground md:text-xl">
              Pallet is an open-source WMS built natively into Fleetbase. Inventory, pick lists,
              cycle counts, and stock transfers — connected directly to Fleet-Ops dispatch and
              Storefront orders with no integration layer required.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Start Free Trial <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="https://github.com/fleetbase/pallet" target="_blank" rel="noopener noreferrer">
                  Explore the Code
                </a>
              </Button>
            </div>
          </div>

          {/* Hero screenshot */}
          <BrowserFrame label="Fleetbase — Operations Dashboard" className="shadow-2xl">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/screenshots/fleet-ops/fleet-ops-orders-kanban.webp"
                alt="Fleetbase platform showing order and inventory management across warehouse and delivery operations"
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority
              />
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="flex flex-col justify-center gap-5 lg:col-span-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                The Problem
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
                Your Warehouse and Delivery Shouldn't Be Two Separate Worlds
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Most warehouses run on software that has no idea what happens after a pallet leaves
                the dock. Pallet closes that gap — natively, not through an integration.
              </p>
            </div>
            <div className="divide-y lg:col-span-3">
              {problems.map((problem, i) => (
                <div key={i} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-destructive/10">
                    <XCircle className="size-4 text-destructive" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-accent-foreground">{problem.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Capabilities ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              Core Capabilities
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Everything Your Warehouse{' '}
              <span className="text-gradient">Needs to Operate</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              From inbound stock to outbound dispatch — Pallet covers the core warehouse workflows
              your team runs every day, connected to the rest of your Fleetbase operation.
            </p>
          </div>

          <div
            className="grid grid-cols-1 overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '1px' }}
          >
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="flex flex-col gap-4 bg-card p-6">
                  <div className={cn('flex size-10 items-center justify-center rounded-lg', cap.bg)}>
                    <Icon className={cn('size-5', cap.color)} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-accent-foreground">{cap.title}</h3>
                    <p className="text-sm leading-snug text-muted-foreground">{cap.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── End-to-End Integration ────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Native Integration
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              From Order to Doorstep —{' '}
              <span className="text-gradient">One Connected Platform</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Pallet sits between your commerce layer and your delivery layer. Orders from
              Storefront become pick lists in Pallet, and fulfilled orders trigger dispatch in
              Fleet-Ops — automatically, with no manual handoffs.
            </p>
          </div>

          {/* Step flow */}
          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px' }}
          >
            {integrationSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.module} className="relative flex flex-col gap-3 bg-card p-6">
                  {i < integrationSteps.length - 1 && (
                    <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 lg:flex">
                      <ArrowRight className="size-4 text-muted-foreground/40" />
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <div className={cn('flex size-8 items-center justify-center rounded-md', step.bg)}>
                      <Icon className={cn('size-4', step.color)} />
                    </div>
                    <span className={cn('text-xs font-semibold', step.color)}>{step.module}</span>
                  </div>
                  <h4 className="font-semibold text-accent-foreground">{step.title}</h4>
                  <p className="text-xs leading-snug text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>

          {/* Supporting points */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              'No webhook or middleware required between modules',
              'Shared order, contact, and product data across all modules',
              'Inventory updates propagate to Storefront stock levels automatically',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-lg border bg-muted/20 p-4">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm leading-snug text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>

          {/* Fleet-Ops screenshot as the integration proof */}
          <BrowserFrame label="Fleet-Ops — Deliveries triggered from Pallet fulfilment">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
                alt="Fleet-Ops live map showing deliveries automatically dispatched after Pallet warehouse fulfilment"
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              Industry Use Cases
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
              Built for Operations That Move Goods
            </h2>
            <p className="text-lg leading-snug text-muted-foreground">
              Whether you run a single fulfilment centre or a multi-location 3PL network, Pallet
              gives you the warehouse layer your operation is missing.
            </p>
          </div>
          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px' }}
          >
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div key={uc.title} className="flex items-start gap-4 bg-card p-5">
                  <div className={cn('flex size-8 shrink-0 items-center justify-center rounded-md', uc.bg)}>
                    <Icon className={cn('size-4', uc.color)} />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-semibold text-accent-foreground">{uc.title}</h3>
                    <p className="text-xs leading-snug text-muted-foreground">{uc.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Beta Notice ───────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/5 px-8 py-12 md:px-12">
            <div className="grid gap-8 lg:grid-cols-5 lg:gap-16">
              <div className="space-y-4 lg:col-span-3">
                <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                  Beta — Early Access
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                  Pallet is in Active Development
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Core inventory management, pick lists, cycle counts, stock transfers, and
                  Fleet-Ops integration are functional and available today. We\'re actively
                  expanding capabilities based on feedback from beta users.
                </p>
                <p className="text-sm text-muted-foreground">
                  If you have warehouse operations running today and want to help shape the
                  roadmap, we\'d love to hear from you.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 lg:col-span-2">
                <div className="divide-y rounded-xl border bg-card">
                  {[
                    { label: 'Inventory management', done: true },
                    { label: 'Pick lists & fulfilment', done: true },
                    { label: 'Cycle counts & audits', done: true },
                    { label: 'Stock transfers', done: true },
                    { label: 'Fleet-Ops integration', done: true },
                    { label: 'Storefront integration', done: true },
                    { label: 'Advanced picking strategies', done: false },
                    { label: 'Barcode scanning', done: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 px-4 py-3">
                      <div className={cn(
                        'flex size-4 shrink-0 items-center justify-center rounded-full',
                        item.done ? 'bg-primary/20' : 'bg-muted',
                      )}>
                        {item.done && <div className="size-1.5 rounded-full bg-primary" />}
                      </div>
                      <span className={cn(
                        'text-sm',
                        item.done ? 'text-accent-foreground' : 'text-muted-foreground',
                      )}>
                        {item.label}
                      </span>
                      {!item.done && (
                        <span className="ml-auto text-xs text-muted-foreground">Coming soon</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                FAQ
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">Everything you need to know about Pallet.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-lg border bg-card px-6"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/[0.10] blur-3xl" />
              <div className="absolute -bottom-1/2 right-1/4 h-72 w-72 rounded-full bg-chart-3/[0.08] blur-3xl" />
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                Beta — Join Early Access
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
                Connect Your Warehouse{' '}
                <span className="text-gradient">to Your Delivery Operation.</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
                Start your free trial and explore Pallet alongside Fleet-Ops and Storefront.
                Self-host for free, or run on Fleetbase Cloud.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/pricing">
                    Start Free Trial <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a href="https://github.com/fleetbase/pallet" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Free 7-day trial · Free to self-host under AGPL-3.0
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
