import type { Metadata } from 'next';
import ApiIntegrationsPageContent from './api-page-content';

export const metadata: Metadata = {
  title: 'REST API | Fleetbase Developer Documentation',
  description: 'Integrate with Fleetbase using the REST API. Manage orders, drivers, vehicles, and real-time tracking programmatically.',
  keywords: 'fleetbase API, REST API, logistics API, fleet management API, delivery API',
  openGraph: {
    title: 'REST API | Fleetbase Developer Documentation',
    description: 'Integrate with Fleetbase using the REST API. Manage orders, drivers, vehicles, and real-time tracking programmatically.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REST API | Fleetbase Developer Documentation',
    description: 'Integrate with Fleetbase using the REST API. Manage orders, drivers, vehicles, and real-time tracking programmatically.',
  },
};

export default function ApiIntegrationsPage() {
  return <ApiIntegrationsPageContent />;
}
