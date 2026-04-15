import type { Metadata } from 'next';
import PlaceholderPage from '@/components/placeholder-page';

export const metadata: Metadata = {
  title: 'SDKs & Libraries | Fleetbase',
  description: 'Official Fleetbase SDKs for JavaScript, PHP, and more. Integrate fleet management and logistics into your application in minutes.',
  keywords: 'fleetbase SDK, javascript SDK, PHP SDK, logistics SDK, fleet management library',
  openGraph: {
    title: 'SDKs & Libraries | Fleetbase',
    description: 'Official Fleetbase SDKs for JavaScript, PHP, and more. Integrate fleet management and logistics into your application in minutes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDKs & Libraries | Fleetbase',
    description: 'Official Fleetbase SDKs for JavaScript, PHP, and more. Integrate fleet management and logistics into your application in minutes.',
  },
};
export default function Page() {
 return (
 <PlaceholderPage
 title="SDKs & Libraries"
 description="Official SDKs and libraries for JavaScript, PHP, Java, Python, and more."
 comingSoon={true}
 />
 );
}
