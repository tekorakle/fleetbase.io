import type { Metadata } from 'next';
import { Webhook, Code2, Puzzle, Zap, Shield, BarChart3 } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'API & Integrations for Logistics | Fleetbase',
  description:
    'Connect Fleetbase to your existing tech stack with a full REST API, webhooks, and pre-built integrations. Build custom logistics workflows without rebuilding your entire operation.',
  keywords: ['logistics API', 'fleet management API', 'logistics integration platform', 'delivery API', 'logistics webhook integration'],
  openGraph: {
    title: 'API & Integrations for Logistics | Fleetbase',
    description: 'Connect Fleetbase to your existing tech stack with REST API, webhooks, and pre-built integrations.',
  },
};

export default function IntegrationsPage() {
  return (
    <SolutionPageLayout
      badge="Use Case — API & Integrations"
      title={<>Connect Everything. <span className="text-gradient">Build Anything.</span></>}
      description="Fleetbase is built API-first. Every feature available in the console is accessible via REST API, giving developers the power to integrate logistics into any platform, automate any workflow, and build custom applications on top of Fleetbase infrastructure."
      stats={[
        { value: 'REST', label: 'Full API coverage' },
        { value: '100+', label: 'Webhook event types' },
        { value: 'Open', label: 'Source — inspect everything' },
        { value: '99.9%', label: 'API uptime SLA' },
      ]}
      heroScreenshot="/images/console-screenshots/developers-api-keys.webp"
      heroScreenshotAlt="Fleetbase developer console showing API key management with permission scopes and usage tracking"
      heroScreenshotNeeded="Fleetbase developer console — API key management, webhook configuration, and live event log"
      painPoints={{
        heading: 'Integration problems that slow logistics teams down',
        items: [
          'Order management system disconnected from delivery operation',
          'Status updates manually copied between platforms',
          'Customer tracking built separately from the core logistics system',
          'No way to trigger logistics actions from external events',
          'Vendor lock-in preventing integration with preferred tools',
          'Development team blocked by poor API documentation',
        ],
      }}
      features={[
        {
          title: 'Full REST API Coverage',
          description:
            'Every Fleetbase resource — orders, drivers, vehicles, routes, organizations — is accessible via a clean, well-documented REST API. Create, read, update, and delete any resource programmatically.',
          icon: Code2,
          screenshot: '/images/console-screenshots/developers-api-keys.webp',
          screenshotAlt: 'Full REST API Coverage',
          screenshotNeeded: 'Fleetbase API documentation page — showing endpoint list with request/response examples',
        },
        {
          title: 'Webhook Event System',
          description:
            'Subscribe to any operational event — order created, driver assigned, delivery completed, exception raised — and receive real-time HTTP callbacks to your systems. Over 100 event types supported.',
          icon: Webhook,
          screenshot: '/images/console-screenshots/fleetops-order-config-activity-flow.webp',
          screenshotAlt: 'Webhook Event System',
          screenshotNeeded: 'Fleetbase developer console — webhook configuration with event type selector and endpoint URL',
        },
        {
          title: 'Pre-Built Platform Integrations',
          description:
            'Connect to Shopify, WooCommerce, Stripe, Twilio, and other popular platforms with pre-built integrations. Install from the Extensions marketplace and configure in minutes.',
          icon: Puzzle,
          screenshot: '/images/console-screenshots/storefront-catalogs.webp',
          screenshotAlt: 'Pre-Built Platform Integrations',
          screenshotNeeded: 'Fleetbase Extensions marketplace — showing available platform integrations with install buttons',
        },
        {
          title: 'Developer Console & API Keys',
          description:
            'Manage API keys, configure sandbox and production environments, and monitor API usage from the developer console. Granular key permissions ensure each integration only accesses what it needs.',
          icon: Shield,
          screenshot: '/images/console-screenshots/fleetops-dashboard-metrics.webp',
          screenshotAlt: 'Developer Console & API Keys',
          screenshotNeeded: 'Fleetbase developer console — API key list with permission scopes and usage metrics',
        },
        {
          title: 'Custom Extensions Framework',
          description:
            'Build custom Fleetbase extensions using the open-source Extensions SDK. Add new order types, UI panels, API endpoints, and integrations that appear natively in the Fleetbase console.',
          icon: Zap,
          screenshot: '/images/console-screenshots/extensions-marketplace.webp',
          screenshotAlt: 'Custom Extensions Framework',
          screenshotNeeded: 'Fleetbase console — custom extension installed and visible in the navigation sidebar',
        },
        {
          title: 'API Usage Analytics',
          description:
            'Monitor API call volumes, error rates, and latency per key and endpoint. Identify integration issues before they impact your operation with real-time API health monitoring.',
          icon: BarChart3,
          screenshot: '/images/console-screenshots/fleetops-dashboard-metrics.webp',
          screenshotAlt: 'API Usage Analytics',
          screenshotNeeded: 'Fleetbase developer console — API usage chart with call volume, error rate, and latency metrics',
        },
      ]}
      testimonial={{
        quote:
          "The Fleetbase API is the cleanest logistics API I've worked with. We had our Shopify integration live in two days. The webhook system handles everything we need for real-time sync.",
        author: 'Alex P.',
        role: 'Lead Backend Engineer',
        company: 'Rapid Commerce',
      }}
      faqs={[
        {
          q: 'Is there an API rate limit?',
          a: 'API rate limits depend on your plan tier. All plans include generous rate limits sufficient for production use. Enterprise plans include custom rate limits and dedicated infrastructure.',
        },
        {
          q: 'Does Fleetbase have an official SDK?',
          a: 'Yes. Fleetbase provides official SDKs for JavaScript/Node.js and PHP, with community SDKs available for Python and other languages. The REST API can be used directly from any language.',
        },
        {
          q: 'Can I test integrations in a sandbox environment?',
          a: 'Yes. Every Fleetbase account includes a sandbox environment with separate API keys. Test your integrations without affecting live data.',
        },
        {
          q: 'How do I authenticate API requests?',
          a: 'Fleetbase uses API key authentication with Bearer token format. Keys can be scoped to specific resources and actions for security. OAuth 2.0 is available for user-level authentication.',
        },
        {
          q: 'Can I build a custom mobile app on top of Fleetbase?',
          a: 'Yes. The full Fleetbase API is available for building custom mobile and web applications. The Navigator app is also open-source and can be forked and customised for your brand.',
        },
      ]}
      ctaHeading="Build your logistics integration today"
      ctaBody="Full REST API, 100+ webhook events, and an open-source Extensions framework. Everything you need to connect Fleetbase to your operation."
      ctaPrimary="View API Docs"
      ctaPrimaryHref="/developers/api-reference"
      ctaSecondary="Start Free Trial"
      ctaSecondaryHref="/trial"
    />
  );
}
