'use client';

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Gauge,
  GitBranch,
  LayoutDashboard,
  MapPin,
  Package,
  Radio,
  Route,
  Signal,
  Truck,
  Users,
  Workflow,
  Wrench,
  XCircle,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';
import { cn } from '@/lib/utils';

// ── Data ─────────────────────────────────────────────────────────────────────

const outcomes = [
  { value: '30%', label: 'Average fuel cost reduction' },
  { value: '40%', label: 'Fewer customer support calls' },
  { value: '2×', label: 'Faster orchestration vs manual planning' },
  { value: '99.9%', label: 'Platform uptime SLA' },
];

const problems = [
  {
    title: 'Rigid, one-size-fits-all workflows',
    description:
      "Traditional TMS platforms force you to adapt your operations to their software. Custom fields and activity flows require expensive professional services — if they're possible at all.",
  },
  {
    title: 'No real-time visibility',
    description:
      "Dispatchers are flying blind. Without live GPS, driver status, and ETA data flowing in real time, you're always reacting instead of managing proactively.",
  },
  {
    title: 'Per-seat pricing that punishes growth',
    description:
      "Every new driver, dispatcher, or partner you add increases your software bill. Scaling your team shouldn't mean scaling your costs at the same rate.",
  },
];

const featureTabs = [
  {
    id: 'dispatch',
    icon: GitBranch,
    title: 'Orchestrator Workbench',
    tagline: 'Phase-based optimization. Visual plan. One commit.',
    description:
      'The Orchestrator Workbench runs configurable optimization phases — skill-based driver allocation, payload-based vehicle matching, and route optimization — stacked into a pipeline that produces a visual plan for dispatcher review before committing. Or configure predefined phases in settings to run hands-free on every incoming order.',
    features: [
      'Stackable optimization phases run in sequence',
      'Driver allocation by skills and availability',
      'Vehicle matching by payload and type',
      'Route optimization as a configurable phase',
      'Visual plan output: review before you commit',
    ],
    image: '/images/screenshots/fleet-ops/fleet-ops-orchestrator-1.webp',
    imageAlt:
      'Fleet-Ops Orchestrator Workbench showing stacked optimization phases and a visual plan ready for dispatcher review',
  },
  {
    id: 'tracking',
    icon: MapPin,
    title: 'Live Tracking',
    tagline: 'Every driver, vehicle, and order on one live map.',
    description:
      "Know exactly where your fleet is, what status each order is in, and what your customers' ETAs look like — without making a single phone call. Sub-minute GPS updates, geofence-triggered status changes, and customer tracking links included.",
    features: [
      'Live GPS tracking with sub-minute updates',
      'Order status timeline with full activity feed',
      'Customer-facing tracking links with live ETA',
      'Geofence-triggered automatic status updates',
      'Driver location history and journey replay',
    ],
    image: '/images/screenshots/fleet-ops/fleet-ops-geofences.webp',
    imageAlt:
      'Fleet-Ops live map showing geofences drawn around pickup and dropoff zones for automatic status updates',
  },
  {
    id: 'order-config',
    icon: Workflow,
    title: 'Order Configuration',
    tagline: 'Build any workflow — without writing code.',
    description:
      'Not every delivery is a simple A-to-B. Design custom order types, activity flows, and validation rules that match exactly how your operations work. Add any data fields your business needs — no developers required.',
    features: [
      'Custom order types with configurable fields',
      'Visual drag-and-drop activity flow builder',
      'Conditional validation and business rules',
      'Multi-waypoint and multi-leg order support',
      'Proof of delivery: signatures, photos, barcodes',
    ],
    image: '/images/screenshots/fleet-ops/fleet-ops-order-config-activity-flow.webp',
    imageAlt:
      'Fleet-Ops order configuration showing the visual activity flow designer with custom statuses and automation triggers',
  },
  {
    id: 'fleet',
    icon: Truck,
    title: 'Driver & Fleet Management',
    tagline: 'From onboarding to performance — all in one place.',
    description:
      'Manage your entire driver and vehicle roster without juggling spreadsheets. Track certifications, assign vehicles, monitor performance, and schedule shifts — all connected to your live operational data.',
    features: [
      'Driver profiles with documents and certifications',
      'Vehicle assignment and availability management',
      'Driver performance metrics and scorecards',
      'Shift scheduling and availability windows',
      'Navigator mobile app for drivers (iOS & Android)',
    ],
    image: '/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp',
    imageAlt:
      'Fleet-Ops driver position playback showing a driver journey replay with timeline scrubber and live status',
  },
  {
    id: 'telematics',
    icon: Radio,
    title: 'Live Telematics',
    tagline: 'Real-time data from every vehicle.',
    description:
      'Connect GPS devices, OBD-II sensors, and third-party telematics providers like Samsara, Geotab, and Motive. Track location, speed, fuel, and driver behavior — all in a single dashboard.',
    features: [
      'Live GPS tracking and interactive map',
      'OBD-II and sensor data ingestion',
      'Samsara, Geotab, and Motive integrations',
      'Driver behavior and idle time monitoring',
      'Location history and journey replay',
    ],
    image: '/images/screenshots/fleet-ops/fleet-ops-flespi-telematics-integration.webp',
    imageAlt:
      'Fleet-Ops Flespi telematics integration showing live vehicle data, GPS positions, and sensor streams from connected devices',
  },
];

const modules = [
  {
    icon: LayoutDashboard,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    dot: 'bg-blue-500',
    name: 'Operations',
    description:
      'Your dispatch command center. Run phase-based optimization with the Orchestrator Workbench, schedule deliveries, configure order types without code, and manage any pricing model.',
    capabilities: ['Orchestrator Workbench', 'Order Configuration', 'Scheduler', 'Service rates'],
  },
  {
    icon: Users,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    dot: 'bg-violet-500',
    name: 'Resources',
    description:
      'Every person, vehicle, and place your operation depends on — managed, assigned, and tracked in one place. From drivers to vendors to fuel records.',
    capabilities: ['Drivers & vehicles', 'Fleet grouping', 'Vendors & contacts', 'Places & fuel reports'],
  },
  {
    icon: Wrench,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    dot: 'bg-amber-500',
    name: 'Maintenance',
    description:
      'Keep your fleet on the road. Preventive schedules, work orders, parts inventory, and driver fault reporting — before a breakdown becomes a crisis.',
    capabilities: ['Preventive schedules', 'Work orders', 'Parts inventory', 'Driver fault reporting'],
  },
  {
    icon: Radio,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    dot: 'bg-emerald-500',
    name: 'Connectivity',
    description:
      'Bridge the physical and digital. Connect telematics providers, GPS devices, and IoT sensors to stream live asset data directly into Fleet-Ops.',
    capabilities: ['Samsara, Geotab & Motive', 'GPS device management', 'Sensor ingestion', 'Device event log'],
  },
  {
    icon: BarChart3,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    dot: 'bg-pink-500',
    name: 'Analytics',
    description:
      'Surface the metrics that drive decisions. Delivery performance, cost-per-route, driver scoring, and reports you can actually act on.',
    capabilities: ['KPI dashboards', 'SLA & on-time tracking', 'Cost-per-delivery', 'Driver performance scoring'],
  },
];

const maintenanceFeatures = [
  {
    icon: Wrench,
    title: 'Work Order Management',
    description:
      'Create, assign, and track maintenance jobs from open to resolved. Attach parts, labor, and costs to every work order.',
  },
  {
    icon: AlertTriangle,
    title: 'Fault & Issue Reporting',
    description:
      'Drivers report faults directly from the Navigator app. Issues are automatically escalated to the maintenance queue.',
  },
  {
    icon: Calendar,
    title: 'Preventive Maintenance Schedules',
    description:
      'Set service intervals by mileage, engine hours, or calendar date. Get alerts before vehicles go overdue.',
  },
  {
    icon: Package,
    title: 'Parts & Inventory Tracking',
    description:
      'Manage your parts inventory, track stock levels, and link parts consumption to specific work orders.',
  },
  {
    icon: FileText,
    title: 'Service History & Audit Trail',
    description:
      'Complete maintenance history for every vehicle — searchable records for compliance, resale, and insurance.',
  },
  {
    icon: BarChart3,
    title: 'Maintenance Cost Analytics',
    description:
      'Track total cost of ownership per vehicle, identify high-cost assets, and make data-driven fleet decisions.',
  },
];

const analyticsItems = [
  {
    icon: BarChart3,
    title: 'On-Time Delivery Rate',
    description: 'Track delivery performance against committed windows across your entire fleet.',
  },
  {
    icon: Route,
    title: 'Route Efficiency Score',
    description: 'Compare planned vs actual routes to identify optimization opportunities.',
  },
  {
    icon: Truck,
    title: 'Vehicle Utilization',
    description: 'Understand how much of your fleet capacity is being used at any given time.',
  },
  {
    icon: Clock,
    title: 'Driver Hours & Productivity',
    description: 'Monitor active hours, idle time, and orders completed per driver per shift.',
  },
];

const operationsFeatures = [
  {
    icon: GitBranch,
    title: 'Orchestrator Workbench',
    description:
      'Stack optimization phases — driver allocation by skills, vehicle matching by payload, and route optimization — into a pipeline that outputs a visual plan for review before you commit. Or run phases hands-free on every incoming order.',
  },
  {
    icon: LayoutDashboard,
    title: 'Live Order Dashboard',
    description:
      'Manage your full order queue in real time. Switch between kanban, table, and live map views. Filter by status, driver, zone, or custom fields — and act on what needs attention.',
  },
  {
    icon: Calendar,
    title: 'Scheduler',
    description:
      'Plan deliveries ahead of time without flooding the dispatch queue. Queue orders by date, assign time windows, and give dispatchers a visual ahead-of-time plan to work from.',
  },
  {
    icon: Workflow,
    title: 'Order Configuration',
    description:
      'Design custom order types with configurable fields, drag-and-drop activity flows, and business rules — without writing a line of code. Match the software to your operation, not the other way around.',
  },
  {
    icon: Route,
    title: 'Service Rates',
    description:
      'Build pricing rules for distance, weight, zone, vehicle type, or any combination. Attach rates to order types and let Fleet-Ops calculate costs automatically at dispatch time.',
  },
];

const connectivityFeatures = [
  {
    icon: Radio,
    title: 'Telematics Provider Integrations',
    description:
      'Connect Samsara, Geotab, Motive, and other third-party providers out of the box. Pull live vehicle data directly into Fleet-Ops without building custom middleware.',
  },
  {
    icon: Signal,
    title: 'GPS Device Management',
    description:
      'Register and manage GPS trackers across your fleet. All connected devices appear on the Fleet-Ops live map, with historical position data and replay available.',
  },
  {
    icon: Gauge,
    title: 'Sensor Data Ingestion',
    description:
      'Ingest OBD-II engine data, temperature sensors, fuel levels, and custom IoT sensor streams. Surface sensor readings alongside your operational data in one dashboard.',
  },
  {
    icon: Activity,
    title: 'Device Event Stream',
    description:
      'A complete, timestamped log of every event emitted by your connected devices — speeding, harsh braking, geofence crossings, ignition events, and more. Fully queryable and exportable.',
  },
];

const useCases = [
  {
    icon: Truck,
    title: 'Last-Mile Delivery',
    description: 'Optimize multi-stop routes, automate dispatch, and give customers live tracking links.',
  },
  {
    icon: Package,
    title: '3PL Operations',
    description: 'Manage multiple client operations from one platform with separate data per organization.',
  },
  {
    icon: Clock,
    title: 'Food & Beverage',
    description: 'Handle time-sensitive deliveries with temperature tracking, POD capture, and live driver status.',
  },
  {
    icon: Wrench,
    title: 'Field Service',
    description: 'Dispatch technicians, track job completion, and capture signatures and photos on-site.',
  },
  {
    icon: Route,
    title: 'Freight & Haulage',
    description: 'Manage long-haul routes, multi-leg shipments, and carrier assignments from a single dashboard.',
  },
  {
    icon: MapPin,
    title: 'E-Commerce Fulfillment',
    description: 'Connect your storefront to your delivery operations and automate order-to-dispatch flows.',
  },
  {
    icon: FileText,
    title: 'Healthcare Logistics',
    description: 'Manage sensitive deliveries with chain-of-custody tracking, compliance fields, and audit logs.',
  },
  {
    icon: BarChart3,
    title: 'Retail Distribution',
    description: 'Coordinate store replenishment runs, manage delivery schedules, and track in-store confirmations.',
  },
];

const faqs = [
  {
    q: 'How does the Orchestrator Workbench work?',
    a: 'The Orchestrator Workbench uses a phase-based optimization pipeline. Each phase targets a specific optimization: driver-to-order allocation by skills and availability, vehicle-to-order matching by payload and type, or route optimization. Phases can be stacked and run in sequence. The output is a visual plan a dispatcher reviews and commits — or you can configure predefined phases in Settings to run automatically on every incoming order for fully hands-off optimization.',
  },
  {
    q: 'Can I customize order types and workflows?',
    a: 'Yes. Fleet-Ops supports fully configurable order types with custom fields, custom activity flows, and custom statuses. You can build workflows that match your exact operational processes without writing any code.',
  },
  {
    q: 'Does Fleet-Ops include a mobile app for drivers?',
    a: 'Yes. The Navigator app (iOS and Android) is an open-source mobile app built for Fleet-Ops. Drivers receive dispatched orders, navigate to stops, capture proof of delivery, and report vehicle faults — all from the app.',
  },
  {
    q: 'How does the Maintenance Module work?',
    a: 'The Fleet-Ops Maintenance Module adds complete vehicle maintenance management: work orders, preventive maintenance schedules, parts inventory tracking, fault reporting from the driver app, and cost analytics. It integrates directly with your fleet and vehicle data inside the same platform.',
  },
  {
    q: 'How does Fleet-Ops pricing work?',
    a: "Fleet-Ops uses resource-unit-based pricing. You pay a flat monthly fee based on your plan tier with included resource units. There are no per-seat or per-driver fees — scale your team without scaling your software costs.",
  },
  {
    q: 'Can I integrate Fleet-Ops with my existing systems?',
    a: 'Yes. Fleet-Ops exposes a full REST API and supports webhooks for all major events. Integrate with ERPs, WMS systems, e-commerce platforms, accounting software, and any other system via the API or pre-built integrations.',
  },
  {
    q: 'Is Fleet-Ops open source?',
    a: 'Yes. Fleet-Ops is fully open-source and available on GitHub at github.com/fleetbase/fleetops. You can self-host it, inspect the code, contribute, and build extensions on top of it.',
  },
  {
    q: 'How does real-time tracking work?',
    a: 'Drivers share their location via the Navigator app. Dispatchers see live positions on the map, and customers receive a tracking link with a live ETA. Geofences can trigger automatic status updates when drivers arrive or depart locations.',
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

export default function FleetOpsPageContent() {
  const [activeTab, setActiveTab] = useState('dispatch');
  const active = featureTabs.find((t) => t.id === activeTab) ?? featureTabs[0];

  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-chart-1/[0.12] blur-[120px]" />
          <div className="absolute top-1/3 -right-24 h-[500px] w-[500px] rounded-full bg-chart-3/[0.08] blur-3xl" />
          <div className="absolute top-1/2 -left-24 h-[400px] w-[400px] rounded-full bg-chart-2/[0.07] blur-3xl" />
        </div>
        <div className="container space-y-12">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Fleet-Ops · Transport Management System
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              The TMS That Adapts to{' '}
              <span className="text-gradient">Your Operations</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-snug text-muted-foreground md:text-xl">
              Intelligent dispatch, real-time tracking, configurable workflows, and full fleet
              visibility — on an open-source platform you actually own. No per-driver fees.
              Self-host or cloud.
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
                <a href="https://github.com/fleetbase/fleetops" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Outcome stats */}
          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px' }}
          >
            {outcomes.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 bg-card px-6 py-8 text-center"
              >
                <span className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Hero screenshot */}
          <BrowserFrame label="Fleet-Ops — Live Operations Dashboard" className="shadow-2xl">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
                alt="Fleet-Ops live operations dashboard showing real-time fleet map with driver positions, active orders, and route overlays"
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
                Your TMS Should Work for You — Not Against You
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Most fleet management platforms were built for a different era. They're expensive,
                inflexible, and designed to keep you dependent on the vendor.
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

      {/* ── Core Feature Tabs ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Core Capabilities
            </div>
            <h2 className="max-w-3xl text-4xxl leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Everything Your Operations{' '}
              <span className="text-gradient">Need in One Platform</span>
            </h2>
            <p className="max-w-2xl text-lg leading-snug text-muted-foreground">
              From first dispatch to final delivery — Fleet-Ops gives your team the tools to move
              faster, see further, and operate without gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Tab nav */}
            <div className="flex flex-col lg:col-span-2">
              {featureTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'relative flex items-start gap-4 border-b py-5 text-left transition-all',
                      isActive ? 'opacity-100' : 'opacity-45 hover:opacity-70',
                    )}
                  >
                    <div
                      className={cn(
                        'flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors',
                        isActive
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'bg-gradient-to-br from-muted/30 via-muted/10 to-card',
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <span
                        className={cn(
                          'text-base font-semibold leading-tight transition-colors',
                          isActive ? 'text-accent-foreground' : 'text-muted-foreground',
                        )}
                      >
                        {tab.title}
                      </span>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-sm leading-snug text-muted-foreground"
                        >
                          {tab.tagline}
                        </motion.span>
                      )}
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="fleetops-page-tab-indicator"
                        className="absolute bottom-0 left-0 h-0.5 w-1/3 origin-left rounded-full bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  <Card className="dark:to-muted/30 dark:via-muted/10 to-background via-card from-card overflow-hidden bg-gradient-to-br dark:from-transparent p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={active.image}
                        alt={active.imageAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </Card>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {active.description}
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {active.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <div className="size-1.5 shrink-0 rounded-full bg-chart-2" />
                        <span className="text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Five Modules ──────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              Five Modules. One Platform.
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Structured for the Way{' '}
              <span className="text-gradient">Operations Teams Think</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Fleet-Ops is organized into five purpose-built modules — each covering a distinct
              domain of fleet operations. Use them all from day one, or expand into new modules as
              your operation grows.
            </p>
          </div>

          <div
            className="grid grid-cols-1 overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-5"
            style={{ gap: '1px' }}
          >
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.name} className="flex flex-col gap-4 bg-card p-6">
                  <div
                    className={cn(
                      'flex size-10 items-center justify-center rounded-lg',
                      mod.bg,
                    )}
                  >
                    <Icon className={cn('size-5', mod.color)} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-accent-foreground">{mod.name}</h3>
                    <p className="text-xs leading-snug text-muted-foreground">{mod.description}</p>
                  </div>
                  <ul className="mt-auto space-y-1.5">
                    {mod.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2">
                        <div className={cn('size-1.5 shrink-0 rounded-full', mod.dot)} />
                        <span className="text-xs text-muted-foreground">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Operations ────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Operations
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              The Control Center for Every{' '}
              <span className="text-gradient">Order and Route</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              From the moment an order arrives to the moment it's delivered — Fleet-Ops Operations
              keeps dispatch, scheduling, configuration, and pricing in one coherent command center.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: feature list */}
            <div className="divide-y lg:col-span-2">
              {operationsFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/30">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-accent-foreground">{feature.title}</h4>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: screenshots */}
            <div className="flex flex-col gap-5 lg:col-span-3">
              <BrowserFrame label="Fleet-Ops — Order Management">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/screenshots/fleet-ops/fleet-ops-orders-kanban.webp"
                    alt="Fleet-Ops order management kanban board showing orders organised by status with driver assignments"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
              <BrowserFrame label="Fleet-Ops — Scheduler">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src="/images/screenshots/fleet-ops/fleet-ops-scheduler.webp"
                    alt="Fleet-Ops scheduler showing calendar view with planned deliveries and unscheduled orders"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ── Maintenance ───────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Maintenance
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Keep Every Vehicle <span className="text-gradient">Roadworthy</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Work orders, preventive schedules, fault reporting, parts inventory, and cost
              analytics — built directly into your operations platform. No separate maintenance
              tool required.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: feature list */}
            <div className="divide-y lg:col-span-2">
              {maintenanceFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/30">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-accent-foreground">{feature.title}</h4>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: screenshots */}
            <div className="flex flex-col gap-5 lg:col-span-3">
              <BrowserFrame label="Fleet-Ops — Maintenance Log">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/screenshots/fleet-ops/fleet-ops-maintenance-log.webp"
                    alt="Fleet-Ops maintenance log showing work order history, parts consumption, and service records per vehicle"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
              <BrowserFrame label="Fleet-Ops — Preventive Maintenance Schedules">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src="/images/screenshots/fleet-ops/fleet-ops-maintenance-schedules.webp"
                    alt="Fleet-Ops preventive maintenance schedules showing service intervals by mileage, engine hours, and calendar date"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ── Connectivity ──────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Connectivity
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Bridge Your Physical Fleet{' '}
              <span className="text-gradient">and Digital Platform</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Connect GPS devices, IoT sensors, and telematics providers directly into Fleet-Ops.
              Every data point from your physical fleet — location, speed, fuel, temperature —
              streams into a single operational view.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: screenshot */}
            <div className="lg:col-span-3">
              <BrowserFrame label="Fleet-Ops — Telematics & Connectivity">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/screenshots/fleet-ops/fleet-ops-vehicle-position-playback.webp"
                    alt="Fleet-Ops vehicle position playback showing connected device data, live GPS positions, and sensor readings streamed from telematics providers"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
            </div>

            {/* Right: feature list */}
            <div className="divide-y lg:col-span-2">
              {connectivityFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/30">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-accent-foreground">{feature.title}</h4>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Analytics ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-600 dark:text-pink-400">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              Analytics
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Make Every Decision{' '}
              <span className="text-gradient">with Data</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Surface the metrics that matter — from individual driver scorecards to fleet-wide cost
              analysis. Track trends, identify inefficiencies, and act before they become problems.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: screenshot */}
            <div className="lg:col-span-3">
              <BrowserFrame label="Fleet-Ops — Report Builder">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/screenshots/fleet-ops/fleet-ops-report-builder.webp"
                    alt="Fleet-Ops report builder showing custom report configuration with charts for delivery performance, costs, and fleet utilization"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
            </div>

            {/* Right: feature list */}
            <div className="divide-y lg:col-span-2">
              {analyticsItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/30">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-accent-foreground">{item.title}</h4>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
              Built for Every Fleet Operation
            </h2>
            <p className="text-lg leading-snug text-muted-foreground">
              Fleet-Ops adapts to your industry and workflow — not the other way around.
            </p>
          </div>
          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px' }}
          >
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div key={useCase.title} className="flex items-start gap-4 bg-card p-5">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-semibold text-accent-foreground">{useCase.title}</h3>
                    <p className="text-xs leading-snug text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Developer / API ───────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Open Source & API-First
                </div>
                <h2 className="text-4xxl leading-tight tracking-tight text-balance md:text-5xl">
                  Extend, Integrate,{' '}
                  <span className="text-gradient">Build on Fleet-Ops</span>
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Fleet-Ops is fully open-source and exposes a complete REST API, WebSocket events,
                  and webhook system. Build custom integrations, automate workflows, or extend the
                  platform with your own modules.
                </p>
              </div>
              <div className="divide-y">
                {[
                  'Full REST API with comprehensive documentation',
                  'WebSocket channels for real-time event streaming',
                  'Webhooks for order, driver, and fleet events',
                  'JavaScript SDK for rapid integration',
                  'Self-hostable — deploy to your own infrastructure',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="/docs/fleet-ops">View API Docs</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/fleetbase/fleetops"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <CodeBlock
              label="Fleet-Ops API — Create & Dispatch Order"
              language="javascript"
              code={`import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('YOUR_API_KEY');

// Create and auto-dispatch an order
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
console.log(\`ETA: \${order.eta}\`);`}
            />
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
              <p className="text-muted-foreground">Everything you need to know about Fleet-Ops.</p>
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
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-chart-1/[0.12] blur-3xl" />
              <div className="absolute -bottom-1/2 right-1/4 h-72 w-72 rounded-full bg-chart-3/[0.08] blur-3xl" />
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                Start Today
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
                Stop Paying Per Driver.{' '}
                <span className="text-gradient">Start Owning Your Stack.</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
                Join 8,000+ logistics operations running on Fleetbase. Open source, no per-seat
                fees, free to self-host. Start with a 7-day free trial.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/pricing">
                    Start Free Trial <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://cal.com/shivthakker/enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Free 7-day trial · Free to self-host under AGPL
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
