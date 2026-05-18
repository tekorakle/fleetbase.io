import type { Metadata } from 'next';

import { FAQSchema } from '@/components/seo/json-ld';

import { PRICING_FAQS } from './faqs';
import PricingClient from './pricing-client';

export const metadata: Metadata = {
  title: 'Pricing | Open-Source Fleet Management Software',
  description:
    'Fleetbase pricing starts at $25/month for cloud. Self-hosted implementation from $2,500 one-time. No per-seat fees. Usage-based pricing that scales with your operations.',
  keywords: [
    'fleet management software pricing',
    'logistics software pricing',
    'open source fleet management cost',
    'TMS software pricing',
    'delivery management software pricing',
    'Onfleet pricing alternative',
    'open source dispatch software pricing',
  ],
  alternates: { canonical: 'https://fleetbase.io/pricing' },
  openGraph: {
    title: 'Pricing | Open-Source Fleet Management Software',
    description:
      'Fleetbase pricing starts at $25/month for cloud. Self-hosted implementation from $2,500 one-time. No per-seat fees. Usage-based pricing that scales with your operations.',
    images: [
      {
        url: '/og?title=Open-source%20pricing%20that%20scales%20with%20you&eyebrow=Pricing&subtitle=Cloud%20from%20%2425%2Fmo.%20Self-hosted%20from%20%242%2C500%20one-time.%20No%20per-seat%20fees.',
        width: 1200,
        height: 630,
        alt: 'Fleetbase pricing — cloud from $25/mo, self-hosted from $2,500',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleetbase Pricing | No Per-Seat Fees',
    description: 'Cloud from $25/mo. Self-hosted from $2,500 one-time. Usage-based pricing that scales.',
    images: [
      '/og?title=Open-source%20pricing%20that%20scales%20with%20you&eyebrow=Pricing&subtitle=Cloud%20from%20%2425%2Fmo.%20Self-hosted%20from%20%242%2C500%20one-time.%20No%20per-seat%20fees.',
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      <FAQSchema faqs={PRICING_FAQS} />
      <PricingClient />
    </>
  );
}
