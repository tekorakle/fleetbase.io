import type { Metadata } from 'next';
import ExtensionsMarketplacePageContent from './extensions-page-content';

export const metadata: Metadata = {
  title: 'Extensions Marketplace | Fleetbase',
  description: 'Browse and install Fleetbase extensions to add new capabilities to your logistics platform — payments, integrations, custom workflows, and more.',
  keywords: 'fleetbase extensions marketplace, logistics plugins, fleet management extensions, install extension',
  openGraph: {
    title: 'Extensions Marketplace | Fleetbase',
    description: 'Browse and install Fleetbase extensions to add new capabilities to your logistics platform — payments, integrations, custom workflows, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extensions Marketplace | Fleetbase',
    description: 'Browse and install Fleetbase extensions to add new capabilities to your logistics platform — payments, integrations, custom workflows, and more.',
  },
};

export default function ExtensionsMarketplacePage() {
  return <ExtensionsMarketplacePageContent />;
}
