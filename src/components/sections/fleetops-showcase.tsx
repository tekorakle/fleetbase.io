'use client';

import { ArrowRight, BarChart3, GitBranch, Radio, Workflow, Wrench } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const tabs = [
  {
    id: 'order-config',
    icon: Workflow,
    title: 'Dynamic Order Config',
    tagline: 'Build any workflow — without code.',
    description:
      'Design custom order types, activity flows, and validation rules that match exactly how your operations work. Add any data fields your business needs and set up automation triggers — no developers required.',
    features: [
      'Custom fields for any order type',
      'Visual activity flow designer',
      'Conditional validation & business rules',
      'Automation triggers on status changes',
      'Industry-specific order templates',
    ],
    image: '/images/console-screenshots/fleetops-order-config-activity-flow.webp',
    imageAlt: 'Fleet-Ops dynamic order configuration showing activity flow designer with custom statuses and triggers',
  },
  {
    id: 'orchestrator',
    icon: GitBranch,
    title: 'Dispatch & Orchestrator',
    tagline: 'Automate allocation. Eliminate manual dispatch.',
    description:
      'The Orchestrator engine automatically assigns orders to the right drivers based on your rules — proximity, capacity, vehicle type, or service zone. Override manually at any time with full map visibility.',
    features: [
      'Rule-based automated driver allocation',
      'Multi-stop route optimization',
      'Load balancing across vehicle types',
      'Service zone management',
      'Real-time manual override controls',
    ],
    image: '/images/console-screenshots/fleetops-live-map.webp',
    imageAlt: 'Fleet-Ops live dispatch map showing driver locations, active orders, and route assignments',
  },
  {
    id: 'telematics',
    icon: Radio,
    title: 'Live Telematics',
    tagline: 'Real-time data from every vehicle.',
    description:
      'Connect GPS devices, OBD-II sensors, and third-party telematics providers like Samsara, Geotab, and Motive. Track location, speed, fuel, and driver behavior — all in a single dashboard.',
    features: [
      'Live GPS tracking & interactive map',
      'OBD-II & sensor data ingestion',
      'Samsara, Geotab & Motive integrations',
      'Driver behavior & idle time monitoring',
      'Location history & journey replay',
    ],
    image: '/images/console-screenshots/fleetops-telematics.webp',
    imageAlt: 'Fleet-Ops telematics dashboard showing vehicle data, GPS tracking, and driver behavior analytics',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Maintenance Module',
    tagline: 'Keep every vehicle roadworthy.',
    description:
      'Track vehicle issues, schedule preventive maintenance, and log fuel consumption. Every vehicle has a complete service history so nothing slips through the cracks — and you stay ahead of costly breakdowns.',
    features: [
      'Issue tracking with priority queues',
      'Preventive maintenance schedules',
      'Fuel consumption & cost reports',
      'Complete vehicle service history',
      'Photo & document attachments',
    ],
    image: '/images/console-screenshots/fleetops-issues.webp',
    imageAlt: 'Fleet-Ops maintenance and issues dashboard showing vehicle problems, service schedules, and reports',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & Reporting',
    tagline: 'Turn operations data into decisions.',
    description:
      'Track on-time delivery rates, cost per shipment, route profitability, and driver performance — all in real time. Build custom dashboards for your KPIs and export to your BI tools when you need more depth.',
    features: [
      'Real-time operational KPI dashboards',
      'On-time rate & SLA performance tracking',
      'Cost-per-delivery analysis by route',
      'Driver performance & scoring',
      'Exportable reports & data access',
    ],
    image: '/images/console-screenshots/fleetops-dashboard-metrics.webp',
    imageAlt: 'Fleet-Ops analytics dashboard with charts showing delivery performance, costs, and fleet utilization',
  },
];

export default function FleetOpsShowcase() {
  const [activeId, setActiveId] = useState('order-config');
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section className="section-padding">
      <div className="container space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Fleet-Ops
          </div>
          <h2 className="max-w-3xl text-4xxl leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            Fleet-Ops Powers the Core of{' '}
            <br className="hidden md:block" />
            Modern Transport Operations
          </h2>
          <p className="max-w-2xl text-lg leading-snug text-muted-foreground">
            If fleet and transport is your core operation, Fleet-Ops gives you dispatch, live
            tracking, telematics, route optimization, maintenance, and analytics — inside the
            same platform your warehouse and finance teams use.
          </p>
        </div>

        {/* Tab layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Left: Tab nav */}
          <div className="flex flex-col lg:col-span-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
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
                      layoutId="fleetops-tab-indicator"
                      className="absolute bottom-0 left-0 h-0.5 w-1/3 origin-left rounded-full bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3"
                    />
                  )}
                </button>
              );
            })}

            <div className="pt-6">
              <Button variant="outline" asChild>
                <Link href="/platform/fleetops">
                  Explore Fleet-Ops <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Screenshot */}
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

                {/* Description */}
                <p className="text-base leading-relaxed text-muted-foreground">
                  {active.description}
                </p>

                {/* Feature bullets */}
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
  );
}
