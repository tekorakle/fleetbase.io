import type { Metadata } from 'next';
import ExtensionsMarketplacePageContent from './extensions-page-content';

export const metadata: Metadata = {
  title: 'Extensions & Integrations | Fleetbase Platform',
  description: 'Extend Fleetbase with first-party and community extensions. Connect payment gateways, ERP systems, communication tools, and custom modules.',
  keywords: 'fleetbase platform extensions, logistics integrations, fleet management plugins, ERP integration',
  openGraph: {
    title: 'Extensions & Integrations | Fleetbase Platform',
    description: 'Extend Fleetbase with first-party and community extensions. Connect payment gateways, ERP systems, communication tools, and custom modules.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extensions & Integrations | Fleetbase Platform',
    description: 'Extend Fleetbase with first-party and community extensions. Connect payment gateways, ERP systems, communication tools, and custom modules.',
  },
};

export default function ExtensionsMarketplacePage() {
  return <ExtensionsMarketplacePageContent />;
}
