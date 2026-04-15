import type { Metadata } from 'next';
import PlaceholderPage from '@/components/placeholder-page';

export const metadata: Metadata = {
  title: 'Start Your Free Trial | Fleetbase',
  description: 'Start a 7-day free trial of Fleetbase Cloud. Full platform access, no setup fees. Cancel anytime.',
  keywords: 'fleetbase free trial, try fleetbase, logistics platform trial, fleet management free trial',
  openGraph: {
    title: 'Start Your Free Trial | Fleetbase',
    description: 'Start a 7-day free trial of Fleetbase Cloud. Full platform access, no setup fees. Cancel anytime.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Your Free Trial | Fleetbase',
    description: 'Start a 7-day free trial of Fleetbase Cloud. Full platform access, no setup fees. Cancel anytime.',
  },
};
export default function Page() {
 return (
 <PlaceholderPage
 title="Start Free Trial"
 description="Try Fleetbase Cloud free for 14 days with unlimited drivers and users."
 comingSoon={true}
 />
 );
}
