import type { Metadata } from 'next';
import MobileAppsPageContent from './mobile-page-content';

export const metadata: Metadata = {
  title: 'Mobile Apps — Navigator & Storefront for iOS & Android | Fleetbase',
  description:
    'Fleetbase ships two open-source mobile apps — Navigator for drivers and Storefront for customers. White-label them or build your own on the Fleetbase API.',
  keywords: [
    'Fleetbase mobile apps',
    'driver app',
    'delivery driver app',
    'Navigator app',
    'Storefront customer app',
    'fleet management mobile',
    'open-source driver app',
    'React Native logistics',
    'proof of delivery app',
    'iOS Android logistics',
    'white-label delivery app',
  ],
  openGraph: {
    title: 'Mobile Apps — Navigator & Storefront | Fleetbase',
    description:
      'Two open-source mobile apps for every delivery — Navigator for drivers, Storefront for customers. Use as-is, white-label, or build your own.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Apps | Fleetbase',
    description:
      'Navigator for drivers, Storefront for customers — open-source React Native apps built on the Fleetbase platform.',
  },
};

export default function MobileAppsPage() {
  return <MobileAppsPageContent />;
}
