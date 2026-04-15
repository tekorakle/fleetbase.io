import type { Metadata } from 'next';
import { Code2, Webhook, Puzzle, Shield, GitBranch, Zap } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Logistics Platform for Developers & IT Teams | Fleetbase',
  description:
    'Open-source, API-first logistics platform built for developers. Full REST API, webhooks, Extensions SDK, self-hosted deployment, and complete source code access. Build anything on top of Fleetbase.',
  keywords: ['logistics API for developers', 'open source logistics platform', 'fleet management API', 'logistics developer tools', 'self-hosted logistics software'],
  openGraph: {
    title: 'Logistics Platform for Developers & IT Teams | Fleetbase',
    description: 'Open-source, API-first logistics platform. Full REST API, webhooks, and Extensions SDK.',
  },
};

export default function DevelopersPage() {
  return (
    <SolutionPageLayout
      badge="For IT & Developers"
      title={<>Open Source. API-First. <span className="text-gradient">Built for Builders.</span></>}
      description="Fleetbase is the logistics platform developers actually want to work with — fully open-source, API-first, self-hostable, and extensible. Integrate it into your stack, build on top of it, or fork it entirely. The code is yours."
      stats={[
        { value: 'AGPL-3.0', label: 'Open source licence' },
        { value: 'REST', label: 'Full API coverage' },
        { value: '100+', label: 'Webhook event types' },
        { value: '99.9%', label: 'API uptime SLA' },
      ]}
      heroScreenshot="/images/console-screenshots/developers-api-keys.webp"
      heroScreenshotAlt="Fleetbase developer console API key management panel for developers building logistics integrations"
      heroScreenshotNeeded="Fleetbase developer console — API key management, webhook configuration, and live API event log"
      painPoints={{
        heading: 'What developers hate about logistics software',
        items: [
          'Closed-source black boxes you cannot inspect or modify',
          'Partial APIs that don\'t cover the resources you need',
          'Vendor lock-in with no migration path',
          'Poor documentation with no code examples',
          'No sandbox environment for testing integrations',
          'Forced cloud hosting with no self-hosted option',
        ],
      }}
      features={[
        {
          title: 'Full REST API with OpenAPI Docs',
          description:
            'Every Fleetbase resource is accessible via a clean REST API with full OpenAPI documentation, code examples in multiple languages, and interactive API explorer. No undocumented endpoints, no surprises.',
          icon: Code2,
          screenshot: '/images/console-screenshots/developers-api-keys.webp',
          screenshotAlt: 'Full REST API with OpenAPI Docs',
          screenshotNeeded: 'Fleetbase API documentation — endpoint list with request/response schema and code examples',
        },
        {
          title: 'Webhook Event System',
          description:
            'Subscribe to any operational event via HTTP webhooks. Over 100 event types covering orders, drivers, vehicles, routes, and more. Configure retry logic, signing secrets, and event filtering per endpoint.',
          icon: Webhook,
          screenshot: '/images/console-screenshots/fleetops-order-config-activity-flow.webp',
          screenshotAlt: 'Webhook Event System',
          screenshotNeeded: 'Fleetbase developer console — webhook endpoint configuration with event type selector and signing secret',
        },
        {
          title: 'Extensions SDK',
          description:
            'Build custom Fleetbase extensions using the open-source Extensions SDK. Add new order types, API endpoints, UI panels, and integrations that appear natively in the Fleetbase console. Publish to the marketplace or keep private.',
          icon: Puzzle,
          screenshot: '/images/console-screenshots/developers-api-keys.webp',
          screenshotAlt: 'Extensions SDK',
          screenshotNeeded: 'Fleetbase console — custom extension installed with its own navigation item and panel',
        },
        {
          title: 'Self-Hosted Deployment',
          description:
            'Deploy Fleetbase on your own infrastructure — bare metal, VMs, Kubernetes, or Docker. Full deployment documentation, Helm charts, and Docker Compose files available. No external dependencies required.',
          icon: GitBranch,
          screenshot: '/images/console-screenshots/fleetops-order-label.webp',
          screenshotAlt: 'Self-Hosted Deployment',
          screenshotNeeded: 'Fleetbase self-hosted architecture diagram — Docker/Kubernetes deployment with component labels',
        },
        {
          title: 'Granular API Key Permissions',
          description:
            'Create API keys scoped to specific resources and actions. Separate keys for different integrations, with read-only or write access per resource type. Rotate keys without downtime.',
          icon: Shield,
          screenshot: '/images/console-screenshots/iam-users-create.webp',
          screenshotAlt: 'Granular API Key Permissions',
          screenshotNeeded: 'Fleetbase developer console — API key creation with resource permission checkboxes',
        },
        {
          title: 'Sandbox & Production Environments',
          description:
            'Every account includes a fully isolated sandbox environment with separate API keys and data. Test integrations, webhooks, and custom extensions without affecting production.',
          icon: Zap,
          screenshot: '/images/console-screenshots/developers-api-keys.webp',
          screenshotAlt: 'Sandbox & Production Environments',
          screenshotNeeded: 'Fleetbase developer console — environment switcher showing sandbox vs production with separate API keys',
        },
      ]}
      testimonial={{
        quote:
          "We built our entire custom delivery platform on top of Fleetbase in six weeks. The API is clean, the docs are accurate, and having the source code meant we could extend anything we needed.",
        author: 'Alex P.',
        role: 'Lead Backend Engineer',
        company: 'Rapid Commerce',
      }}
      faqs={[
        {
          q: 'What licence is Fleetbase released under?',
          a: 'Fleetbase is released under AGPL-3.0. The network copyleft clause means that if you deploy a modified version over a network, you must make those modifications available under AGPL-3.0. A commercial licence is available for businesses that need to keep their modifications proprietary or build SaaS products without open-source disclosure obligations.'
        },
        {
          q: 'Is there an official SDK?',
          a: 'Yes. Official SDKs are available for JavaScript/Node.js and PHP. Community SDKs exist for Python and other languages. The REST API can be used directly from any language.',
        },
        {
          q: 'Can I contribute to Fleetbase?',
          a: 'Yes. Fleetbase is open to contributions on GitHub. The contribution guide, architecture documentation, and development setup instructions are all available in the repository.',
        },
        {
          q: 'How do I set up a local development environment?',
          a: 'Fleetbase provides a Docker Compose development setup that spins up the full stack locally in minutes. Full local development documentation is available in the GitHub repository.',
        },
        {
          q: 'Can I build a white-label product on top of Fleetbase?',
          a: 'Yes. Fleetbase can be white-labelled for commercial products. The Extensions framework allows you to customise the UI, branding, and functionality. If you need to keep your modifications proprietary while distributing to customers, a commercial licence is required to remove the AGPL network copyleft obligation.'
        },
      ]}
      ctaHeading="Start building on Fleetbase"
      ctaBody="Open-source logistics infrastructure with a full REST API, webhooks, and Extensions SDK. Everything you need to build, integrate, and extend."
      ctaPrimary="View API Docs"
      ctaPrimaryHref="/developers/api-reference"
      ctaSecondary="View on GitHub"
      ctaSecondaryHref="https://github.com/fleetbase/fleetbase"
    />
  );
}
