'use client';

import { useState } from 'react';
import {
  BarChart3,
  LayoutDashboard,
  Radio,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';

type Layer = {
  id: string;
  icon: LucideIcon;
  name: string;
  tag: string;
  description: string;
  capabilities: string[];
};

const layers: Layer[] = [
  {
    id: 'operations',
    icon: LayoutDashboard,
    name: 'Operations',
    tag: 'Dispatch & Configuration',
    description:
      'The dispatch command center. Phase-based orchestration, scheduling, order configuration, and service rates — everything that turns an incoming order into a completed delivery.',
    capabilities: ['Orchestrator Workbench', 'Scheduler', 'Order Configuration', 'Service Rates'],
  },
  {
    id: 'resources',
    icon: Users,
    name: 'Resources',
    tag: 'People, Vehicles, Places',
    description:
      'Every person, vehicle, and location your operation depends on — managed, assigned, and tracked in one place.',
    capabilities: ['Drivers & Vehicles', 'Fleets', 'Vendors & Contacts', 'Places & Fuel Reports'],
  },
  {
    id: 'maintenance',
    icon: Wrench,
    name: 'Maintenance',
    tag: 'Vehicle Health',
    description:
      'Keep every vehicle roadworthy. Preventive schedules, work orders, parts inventory, and fault reporting wired into the same fleet data as dispatch.',
    capabilities: ['Preventive Schedules', 'Work Orders', 'Parts Inventory', 'Fault Reporting'],
  },
  {
    id: 'connectivity',
    icon: Radio,
    name: 'Connectivity',
    tag: 'Telematics & Sensors',
    description:
      'Bridge the physical and digital fleet. Telematics providers and IoT devices stream live location, speed, fuel, and sensor data into one operational view.',
    capabilities: ['Samsara · Geotab · Flespi', 'GPS Devices', 'Sensor Ingestion', 'Device Event Log'],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    name: 'Analytics',
    tag: 'Reports & Insights',
    description:
      'Surface the metrics that drive decisions — delivery performance, cost-per-route, driver scoring, and any custom report you can build.',
    capabilities: ['KPI Dashboards', 'SLA Tracking', 'Cost-per-Delivery', 'Driver Scorecards'],
  },
];

/**
 * "Why Fleet-Ops" stacked-layer visual. Each layer is a tilted card; clicking
 * a layer lifts it and shows its description on the right.
 *
 * Inspired by spoke.com/dispatch's clickable stack component.
 */
export function LayerStack() {
  const [activeId, setActiveId] = useState<string>('console');
  const active = layers.find((l) => l.id === activeId) ?? layers[0];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      {/* Layer stack */}
      <div className="fo-layer-stack relative flex flex-col gap-2.5">
        {layers.map((layer, i) => {
          const Icon = layer.icon;
          const isActive = layer.id === activeId;
          return (
            <button
              key={layer.id}
              type="button"
              data-active={isActive}
              onClick={() => setActiveId(layer.id)}
              className={cn(
                'fo-layer group flex items-center gap-4 rounded-2xl border bg-white p-4 text-left transition-colors',
                'hover:border-[var(--fo-blue)]/40',
                isActive
                  ? 'border-[var(--fo-blue)] shadow-[0_25px_60px_-25px_oklch(0.65_0.154_254/0.35)]'
                  : 'border-[var(--fo-border)]',
              )}
            >
              <div
                className={cn(
                  'flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors',
                  isActive
                    ? 'bg-[var(--fo-blue)] text-white'
                    : 'bg-[var(--fo-blue-tint)] text-[var(--fo-blue)] group-hover:bg-[var(--fo-blue-soft)]',
                )}
              >
                <Icon className="size-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-semibold text-[var(--fo-fg-strong)]">
                    {layer.name}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--fo-fg-soft)]">
                    {layer.tag}
                  </span>
                </div>
                <p className="mt-0.5 text-xs leading-snug text-[var(--fo-fg-muted)] line-clamp-1">
                  {layer.description}
                </p>
              </div>
              <span
                className={cn(
                  'text-[10px] font-mono tracking-wider transition-colors',
                  isActive ? 'text-[var(--fo-blue)]' : 'text-[var(--fo-fg-soft)]',
                )}
              >
                0{i + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active layer detail */}
      <div className="rounded-3xl border border-[var(--fo-border)] bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--fo-blue)] text-white">
            <active.icon className="size-5" />
          </div>
          <div>
            <div className="text-[10px] font-medium uppercase tracking-[0.7px] text-[var(--fo-blue)]">
              Module {String(layers.findIndex((l) => l.id === active.id) + 1).padStart(2, '0')} ·{' '}
              {active.tag}
            </div>
            <h3 className="text-2xl font-[680] tracking-tight text-[var(--fo-fg-strong)]">
              {active.name}
            </h3>
          </div>
        </div>
        <p className="mt-6 text-base leading-relaxed text-[var(--fo-fg-muted)]">
          {active.description}
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
          {active.capabilities.map((cap) => (
            <li
              key={cap}
              className="flex items-center gap-2 text-sm text-[var(--fo-fg-muted)]"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-[var(--fo-blue)]" />
              {cap}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-[var(--fo-border)] pt-6">
          {layers.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setActiveId(l.id)}
              className={cn(
                'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                l.id === active.id
                  ? 'border-[var(--fo-blue)] bg-[var(--fo-blue)] text-white'
                  : 'border-[var(--fo-border)] bg-white text-[var(--fo-fg-muted)] hover:border-[var(--fo-blue)]/30 hover:text-[var(--fo-fg-strong)]',
              )}
            >
              {l.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
