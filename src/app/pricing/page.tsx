import type { Metadata } from 'next';
import PricingClient from './pricing-client';

export const metadata: Metadata = {
 title: 'Pricing | Open-Source Fleet Management Software',
 description:
 'Fleetbase pricing starts at $50/month for cloud. Self-hosted implementation from $2,500 one-time. No per-seat fees. Usage-based pricing that scales with your operations.',
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
 'Fleetbase pricing starts at $50/month for cloud. Self-hosted implementation from $2,500 one-time. No per-seat fees. Usage-based pricing that scales with your operations.',
 },
};

export default function PricingPage() {
 return <PricingClient />;
}
