import type { Metadata } from 'next';
import PlaceholderPage from '@/components/placeholder-page';

export const metadata: Metadata = {
  title: 'Start Your Free Trial | Fleetbase',
  description: 'Start a 7-day free trial of Fleetbase Cloud with a 50 resource unit cap. Billing begins when either limit is reached first.',
  keywords: 'fleetbase free trial, try fleetbase, logistics platform trial, fleet management free trial',
  openGraph: {
    title: 'Start Your Free Trial | Fleetbase',
    description: 'Start a 7-day free trial of Fleetbase Cloud with a 50 resource unit cap. Billing begins when either limit is reached first.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Your Free Trial | Fleetbase',
    description: 'Start a 7-day free trial of Fleetbase Cloud with a 50 resource unit cap. Billing begins when either limit is reached first.',
  },
};
export default function Page() {
 return (
 <PlaceholderPage
 title="Start Free Trial"
 description="Try Fleetbase Cloud free for 7 days or 50 resource units, whichever comes first."
 comingSoon={true}
 />
 );
}
