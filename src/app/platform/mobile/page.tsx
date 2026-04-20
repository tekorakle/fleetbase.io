import type { Metadata } from 'next';
import MobileAppsPageContent from './mobile-page-content';

export const metadata: Metadata = {
  title: 'Mobile Apps | Fleetbase Platform',
  description: 'Fleetbase mobile apps for drivers and customers. Real-time tracking, proof of delivery, in-app chat, and route navigation on iOS and Android.',
  keywords: 'fleetbase mobile app, driver app, delivery app, fleet management mobile, iOS Android logistics',
  openGraph: {
    title: 'Mobile Apps | Fleetbase Platform',
    description: 'Fleetbase mobile apps for drivers and customers. Real-time tracking, proof of delivery, in-app chat, and route navigation on iOS and Android.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Apps | Fleetbase Platform',
    description: 'Fleetbase mobile apps for drivers and customers. Real-time tracking, proof of delivery, in-app chat, and route navigation on iOS and Android.',
  },
};

export default function MobileAppsPage() {
  return <MobileAppsPageContent />;
}
