import type { Metadata } from 'next';

import FleetOpsPageContent from './fleetops-page-content';

export const metadata: Metadata = {
  title: 'Fleet-Ops — Fleet Management & Dispatch Software | Fleetbase',
  description:
    'Fleet-Ops by Fleetbase is open-source fleet management and dispatch software. Real-time GPS tracking, route optimization, configurable workflows, and automated dispatch — self-hosted or cloud.',
  keywords: [
    'fleet management software',
    'dispatch software',
    'route optimization',
    'real time fleet tracking',
    'GPS fleet tracking',
    'driver management software',
    'open source fleet management',
    'transport management system',
    'TMS software',
  ],
  openGraph: {
    title: 'Fleet-Ops — Fleet Management & Dispatch Software | Fleetbase',
    description:
      'Open-source fleet management and dispatch software. Real-time GPS tracking, route optimization, configurable workflows, and automated dispatch — self-hosted or cloud.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleet-Ops — Fleet Management & Dispatch Software | Fleetbase',
    description:
      'Open-source fleet management and dispatch software. Real-time GPS tracking, route optimization, configurable workflows, and automated dispatch — self-hosted or cloud.',
  },
};

export default function FleetOpsPage() {
  return <FleetOpsPageContent />;
}
