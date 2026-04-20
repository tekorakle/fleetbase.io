import type { Metadata } from 'next';
import DeveloperConsolePageContent from './console-page-content';

export const metadata: Metadata = {
  title: 'Developer Console | Fleetbase',
  description: 'Access the Fleetbase Developer Console to manage API keys, webhooks, sandbox environments, and integrations.',
  keywords: 'fleetbase developer console, API keys, webhooks, sandbox, developer tools',
  openGraph: {
    title: 'Developer Console | Fleetbase',
    description: 'Access the Fleetbase Developer Console to manage API keys, webhooks, sandbox environments, and integrations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Console | Fleetbase',
    description: 'Access the Fleetbase Developer Console to manage API keys, webhooks, sandbox environments, and integrations.',
  },
};

export default function DeveloperConsolePage() {
  return <DeveloperConsolePageContent />;
}
