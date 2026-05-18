import type { Metadata } from 'next';
import ChangelogPageContent from './changelog-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://fleetbase.io/changelog' },
  title: 'Changelog | Fleetbase',
  description: 'See the latest updates, new features, and improvements to the Fleetbase platform.',
  keywords: 'fleetbase changelog, platform updates, new features, release notes',
  openGraph: {
    title: 'Changelog | Fleetbase',
    description: 'See the latest updates, new features, and improvements to the Fleetbase platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog | Fleetbase',
    description: 'See the latest updates, new features, and improvements to the Fleetbase platform.',
  },
};

export default function ChangelogPage() {
  return <ChangelogPageContent />;
}
