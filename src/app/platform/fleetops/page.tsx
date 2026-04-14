import Image from 'next/image';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  MapPin,
  Truck,
  Route,
  BarChart3,
  Wrench,
  AlertTriangle,
  Calendar,
  FileText,
  Package,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'FleetOps | Fleet Management & Dispatch Software',
  description: 'FleetOps by Fleetbase is open-source fleet management and dispatch software. Real-time GPS tracking, route optimization, driver management, and automated dispatch — self-hosted or cloud.',
  keywords: ['fleet management software', 'dispatch software', 'route optimization', 'real time fleet tracking', 'GPS fleet tracking', 'driver management software', 'open source fleet management'],
  openGraph: {
    title: 'FleetOps | Fleet Management & Dispatch Software',
    description: 'FleetOps by Fleetbase is open-source fleet management and dispatch software. Real-time GPS tracking, route optimization, driver management, and automated dispatch — self-hosted or cloud.',
  },
};

const outcomes = [
  { value: '30%', label: 'Average fuel cost reduction' },
  { value: '40%', label: 'Fewer customer support calls' },
  { value: '99.9%', label: 'Platform uptime SLA' },
  { value: '2×', label: 'Faster dispatch vs manual' },
];

const problems = [
  {
    title: 'Rigid, One-Size-Fits-All Workflows',
    description:
      "Traditional TMS platforms force you to adapt your operations to their software. Custom fields, order types, and activity flows require expensive professional services — if they're possible at all.",
  },
  {
    title: 'No Real-Time Visibility',
    description:
      "Dispatchers are flying blind. Without live GPS, driver status, and ETA data flowing in real time, you're always reacting instead of managing proactively.",
  },
  {
    title: 'Per-Seat Pricing That Punishes Growth',
    description:
      "Every new driver, dispatcher, or partner you add increases your software bill. Scaling your team shouldn't mean scaling your costs at the same rate.",
  },
];

const coreFeatures = [
  {
    badge: 'Dispatch & Routing',
    title: 'Intelligent Dispatch and Route Optimization',
    description:
      'Stop manually assigning orders. FleetOps automatically dispatches to the nearest available driver, optimizes multi-stop routes for fuel efficiency, and re-routes in real time when conditions change.',
    points: [
      'Auto-dispatch to nearest available driver',
      'Multi-stop route optimization with traffic awareness',
      'Dynamic re-routing on delays or cancellations',
      'Delivery window and vehicle capacity constraints',
      'Bulk order import and batch dispatch',
    ],
    screenshot: '/images/console-screenshots/fleetops-orders-table.webp',
    screenshotAlt: 'Fleetbase FleetOps order management table showing dispatch queue with pickup, dropoff, driver assignment and status columns',
    placeholderLabel: 'Route Optimization Map',
    placeholderDesc: 'Live map showing optimized multi-stop routes, driver positions, and ETAs',
    imageLeft: false,
  },
  {
    badge: 'Live Tracking',
    title: 'Real-Time Fleet and Order Visibility',
    description:
      "Every driver, vehicle, and order on a single live map. Know exactly where your fleet is, what status each order is in, and what your customers' ETAs look like — without making a single phone call.",
    points: [
      'Live GPS tracking with sub-minute updates',
      'Order status timeline with activity feed',
      'Customer-facing tracking links with live ETA',
      'Geofence-triggered status updates',
      'Driver location history and replay',
    ],
    screenshot: '/images/console-screenshots/fleetops-live-map.webp',
    screenshotAlt: 'Fleetbase FleetOps live map view showing real-time vehicle positions across Singapore with order pins and driver status indicators',
    placeholderLabel: 'Live Fleet Map',
    placeholderDesc: 'Real-time map view showing driver locations, order statuses, and ETAs',
    imageLeft: true,
  },
  {
    badge: 'Order Management',
    title: 'Flexible Order Configuration for Any Workflow',
    description:
      "Not every delivery is a simple A-to-B. FleetOps supports multi-waypoint orders, custom order types, configurable activity flows, and custom fields — so your software matches your operations.",
    points: [
      'Custom order types with configurable fields',
      'Multi-waypoint and multi-leg order support',
      'Drag-and-drop activity flow builder',
      'Proof of delivery: signatures, photos, notes',
      'Barcode and QR code scanning via mobile',
    ],
    screenshot: '/images/console-screenshots/fleetops-kanban-board.webp',
    screenshotAlt: 'Fleetbase FleetOps kanban board view showing orders organised by status: Created, Dispatched, Started, Enroute, and Completed columns',
    placeholderLabel: 'Order Management Dashboard',
    placeholderDesc: 'Order list view with status filters, custom fields, and activity timeline',
    imageLeft: false,
  },
  {
    badge: 'Driver & Fleet Management',
    title: 'Manage Your Drivers and Vehicles in One Place',
    description:
      'From onboarding drivers to tracking vehicle utilization, FleetOps gives you complete control over your fleet. Assign vehicles, track hours, manage documents, and monitor performance.',
    points: [
      'Driver profiles with documents and certifications',
      'Vehicle assignment and availability management',
      'Driver performance metrics and scorecards',
      'Shift scheduling and availability windows',
      'Mobile app for drivers: Navigator (iOS & Android)',
    ],
    screenshot: '/images/console-screenshots/fleetops-drivers.webp',
    screenshotAlt: 'Fleetbase FleetOps driver management panel showing driver list with IDs, vehicle assignments, phone numbers, and active status',
    placeholderLabel: 'Driver Management Panel',
    placeholderDesc: 'Driver list with performance metrics, vehicle assignments, and status',
    imageLeft: true,
  },
];

const maintenanceFeatures = [
  { icon: Wrench, title: 'Work Order Management', description: 'Create, assign, and track maintenance work orders from open to resolved. Attach parts, labor, and costs to every job.' },
  { icon: AlertTriangle, title: 'Fault & Issue Reporting', description: 'Drivers report faults directly from the Navigator app. Issues are automatically escalated to the maintenance queue.' },
  { icon: Calendar, title: 'Preventive Maintenance Schedules', description: 'Set maintenance intervals by mileage, engine hours, or calendar date. Get alerts before vehicles go overdue.' },
  { icon: Package, title: 'Parts & Inventory Tracking', description: 'Manage your parts inventory, track stock levels, and link parts consumption to specific work orders and vehicles.' },
  { icon: FileText, title: 'Service History & Audit Trail', description: 'Complete maintenance history for every vehicle. Searchable records for compliance, resale, and insurance purposes.' },
  { icon: BarChart3, title: 'Maintenance Cost Analytics', description: 'Track total cost of ownership per vehicle, identify high-maintenance assets, and make data-driven fleet replacement decisions.' },
];

const analyticsItems = [
  { icon: BarChart3, title: 'On-Time Delivery Rate', description: 'Track delivery performance against committed windows across your entire fleet.' },
  { icon: Route, title: 'Route Efficiency Score', description: 'Compare planned vs actual routes to identify optimization opportunities.' },
  { icon: Truck, title: 'Vehicle Utilization', description: 'Understand how much of your fleet capacity is being used at any given time.' },
  { icon: Clock, title: 'Driver Hours & Productivity', description: 'Monitor active hours, idle time, and orders completed per driver per shift.' },
];

const useCases = [
  { title: 'Last-Mile Delivery', description: 'Optimize multi-stop routes, automate dispatch, and give customers live tracking links.' },
  { title: '3PL Operations', description: 'Manage multiple client operations from one platform with separate data and workflows per organization.' },
  { title: 'Food & Beverage', description: 'Handle time-sensitive deliveries with temperature tracking, POD capture, and real-time driver status.' },
  { title: 'Field Service', description: 'Dispatch technicians, track job completion, and capture signatures and photos on-site.' },
  { title: 'Freight & Haulage', description: 'Manage long-haul routes, multi-leg shipments, and carrier assignments from a single dashboard.' },
  { title: 'E-Commerce Fulfillment', description: 'Connect your storefront to your delivery operations and automate order-to-dispatch flows.' },
  { title: 'Healthcare Logistics', description: 'Manage sensitive deliveries with chain-of-custody tracking, compliance fields, and audit logs.' },
  { title: 'Retail Distribution', description: 'Coordinate store replenishment runs, manage delivery schedules, and track in-store confirmations.' },
];

const faqs = [
  { q: 'How does FleetOps handle route optimization?', a: 'FleetOps uses constraint-based route optimization that considers traffic conditions, delivery time windows, vehicle capacity, and driver availability. Routes are optimized at dispatch time and can be re-optimized dynamically when conditions change.' },
  { q: 'Can I customize order types and workflows?', a: 'Yes. FleetOps supports fully configurable order types with custom fields, custom activity flows, and custom statuses. You can build workflows that match your exact operational processes without writing any code.' },
  { q: 'Does FleetOps include a mobile app for drivers?', a: 'Yes. The Navigator app (iOS and Android) is an open-source mobile app built for FleetOps. Drivers receive dispatched orders, navigate to stops, capture proof of delivery, and report vehicle faults — all from the app.' },
  { q: 'What is the maintenance module and when is it available?', a: 'The maintenance module adds full vehicle maintenance management: work orders, preventive maintenance schedules, parts inventory, fault reporting, and cost analytics. It is currently in active development.' },
  { q: 'How does FleetOps pricing work?', a: "FleetOps uses resource-unit-based pricing. You pay a flat monthly fee based on your plan tier with included resource units. There are no per-seat or per-driver fees — scale your team without scaling your software costs." },
  { q: 'Can I integrate FleetOps with my existing systems?', a: 'Yes. FleetOps exposes a full REST API and supports webhooks for all major events. Integrate with ERPs, WMS systems, e-commerce platforms, accounting software, and any other system via the API or pre-built integrations.' },
  { q: 'Is FleetOps open source?', a: 'Yes. FleetOps is fully open-source and available on GitHub at github.com/fleetbase/fleetops. You can self-host it, inspect the code, contribute, and build extensions on top of it.' },
  { q: 'How does real-time tracking work?', a: 'Drivers share their location via the Navigator app. Dispatchers see live positions on the map, and customers receive a tracking link with a live ETA. Geofences can trigger automatic status updates when drivers arrive or depart.' },
];

export default function FleetOpsPage() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background section-padding">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center rounded-full border w-fit mx-auto px-3 py-1 text-xs mb-6 gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Transport Management System
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl mb-6">
              The Open-Source TMS That{' '}
              <span className="text-gradient">Adapts to Your Business</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl max-w-2xl mx-auto mb-10">
              Stop forcing your operations into rigid software. FleetOps gives you intelligent dispatch, real-time tracking, and fully configurable workflows — all on an open-source platform you actually own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/pricing">
                <Button size="lg">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Book a Demo</Button>
              </Link>
              <Link href="https://github.com/fleetbase/fleetops" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost">View on GitHub</Button>
              </Link>
            </div>

            {/* Outcome Stats */}
            <div className="grid grid-cols-2 gap-px rounded-xl border bg-border md:grid-cols-4 overflow-hidden mb-16">
              {outcomes.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 bg-background px-6 py-8 text-center">
                  <span className="text-3xl font-bold tracking-tight md:text-4xl">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Screenshot */}
          <div className="rounded-xl border overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                <div className="h-3 w-3 rounded-full bg-green-400/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">FleetOps — Live Operations Dashboard</span>
            </div>
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/console-screenshots/fleetops-live-map.webp"
                alt="Fleetbase FleetOps live operations dashboard showing real-time fleet map with driver positions, active orders, and route overlays across Singapore"
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </section>

      {/* ── Problem Section ──────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="flex items-center justify-center rounded-full border w-fit mx-auto px-3 py-1 text-xs mb-4">The Problem</div>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">
              Your TMS Should Work for You — Not Against You
            </h2>
            <p className="text-muted-foreground text-lg">
              Most fleet management platforms were built for a different era. They&apos;re expensive, inflexible, and designed to keep you dependent on the vendor.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem.title} className="rounded-xl border bg-card p-6">
                <XCircle className="h-8 w-8 text-destructive mb-4" />
                <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Features ────────────────────────────────────────────────── */}
      {coreFeatures.map((feature, i) => (
        <section key={feature.badge} className={`py-24 ${i % 2 === 0 ? 'bg-background' : 'bg-muted/10'}`}>
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <div className={feature.imageLeft ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4 gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature.badge}
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">{feature.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-xl border bg-muted/30 overflow-hidden shadow-lg ${feature.imageLeft ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">{feature.placeholderLabel}</span>
                </div>
                {feature.screenshot ? (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={feature.screenshot}
                      alt={feature.screenshotAlt || feature.placeholderLabel}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center p-8">
                    <div className="text-center space-y-2">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                        <MapPin className="h-6 w-6 text-primary/50" />
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">{feature.placeholderLabel}</p>
                      <p className="text-xs text-muted-foreground/60 max-w-48">{feature.placeholderDesc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Maintenance Module ───────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4 gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Coming Soon — Maintenance Module
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">
              Complete Vehicle Maintenance Management
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Keep your fleet on the road and out of the shop. The FleetOps Maintenance Module brings work orders, preventive schedules, parts inventory, and cost analytics directly into your operations platform.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {maintenanceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-xl border bg-card p-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 mb-4">
                    <Icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 rounded-xl border overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">FleetOps — Vehicle Management</span>
            </div>
            <div className="relative aspect-[16/6] w-full">
              <Image
                src="/images/console-screenshots/fleetops-vehicles.webp"
                alt="Fleetbase FleetOps vehicle management panel showing fleet list with vehicle status, plate numbers, driver assignments, and maintenance indicators"
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Analytics ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="rounded-xl border overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">FleetOps — Analytics Dashboard</span>
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/console-screenshots/fleetops-kanban-board.webp"
                  alt="Fleetbase FleetOps analytics and order pipeline view showing delivery performance across all operational stages"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4 gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Analytics & Reporting
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">
                Make Every Decision with Data
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                FleetOps surfaces the metrics that matter most to your operations. Track performance trends, identify inefficiencies, and make data-driven decisions — from individual driver scorecards to fleet-wide cost analysis.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {analyticsItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/10">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="flex items-center justify-center rounded-full border w-fit mx-auto px-3 py-1 text-xs mb-4">Industry Use Cases</div>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">
              Built for Every Fleet Operation
            </h2>
            <p className="text-muted-foreground text-lg">
              FleetOps adapts to your industry and workflow — not the other way around.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-xl border bg-card p-5">
                <h3 className="font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Developer Section ────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4 gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Open Source & API-First
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl mb-4">
                Extend, Integrate, and Build on FleetOps
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                FleetOps is fully open-source and exposes a complete REST API, WebSocket events, and webhook system. Build custom integrations, automate workflows, or extend the platform with your own modules.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Full REST API with comprehensive documentation',
                  'WebSocket channels for real-time event streaming',
                  'Webhooks for order, driver, and fleet events',
                  'JavaScript SDK for rapid integration',
                  'Self-hostable — deploy on your own infrastructure',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link href="/developers/api">
                  <Button>View API Docs</Button>
                </Link>
                <Link href="https://github.com/fleetbase/fleetops" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">GitHub</Button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl border bg-muted/30 overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">FleetOps API — Create & Dispatch Order</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <pre className="text-muted-foreground leading-relaxed overflow-x-auto text-xs">{`import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('YOUR_API_KEY');

// Create and dispatch an order
const order = await fleetbase.orders.create({
  payload: {
    pickup: '123 Warehouse Rd, Sydney',
    dropoff: '456 Customer St, Melbourne',
    scheduled_at: new Date(),
  },
  dispatch: true,
});

console.log(\`Order: \${order.id}\`);
console.log(\`Driver: \${order.driver.name}\`);
console.log(\`ETA: \${order.eta}\`);`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-muted/10">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center rounded-full border w-fit mx-auto px-3 py-1 text-xs mb-4">FAQ</div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">Everything you need to know about FleetOps.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border bg-card px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center justify-center rounded-full border w-fit mx-auto px-3 py-1 text-xs mb-6">Start Today</div>
              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
                Ready to Transform Your{' '}
                <span className="text-gradient">Fleet Operations?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Join hundreds of logistics teams using FleetOps to dispatch smarter, track in real time, and cut costs. 7-day free trial, no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <Button size="lg">
                    Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">Book a Demo</Button>
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                No credit card required &nbsp;·&nbsp; Full platform access &nbsp;·&nbsp; Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
