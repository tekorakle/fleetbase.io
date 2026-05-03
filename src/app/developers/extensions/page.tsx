import type { Metadata } from 'next';
import DeveloperExtensionsPageContent from './extensions-page-content';

export const metadata: Metadata = {
  title: 'Build Extensions — Custom Modules for the Fleetbase Platform | Fleetbase',
  description:
    'Build, publish, and distribute Fleetbase extensions using Ember.js and Laravel. Scaffold full-stack modules, backend integrations, and UI components with the Fleetbase CLI.',
  keywords: [
    'Fleetbase extensions',
    'build Fleetbase extension',
    'logistics platform plugin',
    'Ember.js extension',
    'Laravel extension',
    'fleet management module',
    'Fleetbase CLI',
    'extension registry',
    'open source logistics',
  ],
  openGraph: {
    title: 'Build Extensions | Fleetbase Developer Platform',
    description:
      'Build custom modules for Fleetbase using Ember.js and Laravel. Scaffold, develop, and publish extensions to the marketplace.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Extensions | Fleetbase',
    description:
      'Build and publish custom Fleetbase extensions. Full-stack modules, backend integrations, and UI components.',
  },
};

export default function DeveloperExtensionsPage() {
  return <DeveloperExtensionsPageContent />;
}
