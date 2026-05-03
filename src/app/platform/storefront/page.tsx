import type { Metadata } from 'next';

import StorefrontPageContent from './storefront-page-content';

export const metadata: Metadata = {
  title: 'Storefront — Headless Commerce & Marketplace Platform | Fleetbase',
  description:
    'Storefront by Fleetbase is open-source headless commerce built for on-demand businesses. Zero commission fees, white-label mobile apps, multi-vendor marketplace, and native Fleet-Ops delivery integration.',
  keywords: [
    'headless commerce platform',
    'online ordering software',
    'white label delivery app',
    'multi vendor marketplace software',
    'on demand commerce platform',
    'open source storefront',
    'delivery management ecommerce',
    'hyperlocal delivery platform',
    'zero commission ordering',
  ],
  openGraph: {
    title: 'Storefront — Headless Commerce & Marketplace Platform | Fleetbase',
    description:
      'Open-source, logistics-first commerce platform. Zero commission fees, white-label mobile apps, multi-vendor marketplace, and delivery built in.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Storefront — Headless Commerce & Marketplace Platform | Fleetbase',
    description:
      'Open-source, logistics-first commerce platform. Zero commission fees, white-label mobile apps, multi-vendor marketplace, and delivery built in.',
  },
};

export default function StorefrontPage() {
  return <StorefrontPageContent />;
}
