import type { Metadata } from 'next';
import PlaceholderPage from '@/components/placeholder-page';

export const metadata: Metadata = {
  title: 'Developer Platform | Fleetbase',
  description: 'Fleetbase is built for developers. REST API, webhooks, SDKs, and an open extension framework to build any logistics workflow.',
  keywords: 'fleetbase developer platform, logistics API, fleet management SDK, open source logistics developer',
  openGraph: {
    title: 'Developer Platform | Fleetbase',
    description: 'Fleetbase is built for developers. REST API, webhooks, SDKs, and an open extension framework to build any logistics workflow.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Platform | Fleetbase',
    description: 'Fleetbase is built for developers. REST API, webhooks, SDKs, and an open extension framework to build any logistics workflow.',
  },
};
export default function Page() {
 return (
 <PlaceholderPage
 title="Developers"
 description="Build powerful integrations and extensions with Fleetbase's comprehensive developer tools."
 comingSoon={true}
 />
 );
}
