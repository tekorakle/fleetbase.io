import type { Metadata } from 'next';
import ExtensionsMarketplacePageContent from './extensions-page-content';

export const metadata: Metadata = {
  title: 'Extensions Marketplace — Build, Install & Monetize | Fleetbase',
  description:
    'Browse and install extensions from Fleetbase and the open-source community, or publish your own and monetize it to reach thousands of logistics operators worldwide.',
  keywords: [
    'Fleetbase extensions',
    'logistics platform extensions',
    'fleet management plugins',
    'extensions marketplace',
    'Fleetbase developer platform',
    'build Fleetbase extension',
    'logistics integrations',
  ],
  openGraph: {
    title: 'Extensions Marketplace — Build, Install & Monetize | Fleetbase',
    description:
      'Install first-party and community extensions into Fleetbase in one click, or publish your own and earn from thousands of logistics operators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extensions Marketplace | Fleetbase',
    description:
      'Browse, install, and monetize Fleetbase extensions. Open publisher platform with built-in Stripe payouts.',
  },
};

export default function ExtensionsMarketplacePage() {
  return <ExtensionsMarketplacePageContent />;
}
