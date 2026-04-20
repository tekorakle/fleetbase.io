import type { Metadata } from 'next';
import DeveloperExtensionsPageContent from './extensions-page-content';

export const metadata: Metadata = {
  title: 'Build Extensions | Fleetbase Developer Platform',
  description: 'Build, publish, and monetise Fleetbase extensions. Extend the platform with custom modules using Ember.js and Laravel.',
  keywords: 'fleetbase extensions, build extension, logistics plugin, ember.js, laravel, fleet management extension',
  openGraph: {
    title: 'Build Extensions | Fleetbase Developer Platform',
    description: 'Build, publish, and monetise Fleetbase extensions. Extend the platform with custom modules using Ember.js and Laravel.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Extensions | Fleetbase Developer Platform',
    description: 'Build, publish, and monetise Fleetbase extensions. Extend the platform with custom modules using Ember.js and Laravel.',
  },
};

export default function DeveloperExtensionsPage() {
  return <DeveloperExtensionsPageContent />;
}
