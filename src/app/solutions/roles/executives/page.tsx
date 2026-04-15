import type { Metadata } from 'next';
import { TrendingUp, DollarSign, BarChart3, Shield, Zap, Globe } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Logistics Platform for Executives & Leadership | Fleetbase',
  description:
    'Give executives real-time visibility into logistics performance, cost efficiency, and growth metrics. Open-source logistics infrastructure that scales with your business without vendor lock-in.',
  keywords: ['logistics software for executives', 'logistics ROI platform', 'logistics cost reduction', 'supply chain executive dashboard', 'logistics business intelligence'],
  openGraph: {
    title: 'Logistics Platform for Executives & Leadership | Fleetbase',
    description: 'Real-time visibility into logistics performance, cost efficiency, and growth metrics.',
  },
};

export default function ExecutivesPage() {
  return (
    <SolutionPageLayout
      badge="For Executives & Leadership"
      title={<>Logistics That Drives <span className="text-gradient">Business Performance.</span></>}
      description="Executives need logistics infrastructure that reduces costs, scales with growth, and doesn't create vendor dependency. Fleetbase delivers measurable ROI, executive-level visibility, and the strategic flexibility of open-source ownership."
      stats={[
        { value: '30%', label: 'Average operational cost reduction' },
        { value: '3×', label: 'Faster time to new market' },
        { value: '100%', label: 'Data ownership — no vendor lock-in' },
        { value: '99.9%', label: 'Platform uptime SLA' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-kanban-board-detail.webp"
      heroScreenshotAlt="Fleetbase FleetOps executive view showing order pipeline performance across all delivery stages"
      heroScreenshotNeeded="FleetOps executive dashboard — high-level KPI cards showing cost per delivery, on-time rate, fleet utilization, and revenue impact"
      painPoints={{
        heading: 'Strategic risks in your current logistics setup',
        items: [
          'Logistics costs growing faster than revenue as you scale',
          'Vendor lock-in with no ability to switch or negotiate',
          'No visibility into logistics performance at the executive level',
          'Technology debt from legacy systems slowing down innovation',
          'Inability to expand to new markets without rebuilding your stack',
          'Data locked in vendor systems you do not own or control',
        ],
      }}
      features={[
        {
          title: 'Executive Performance Dashboard',
          description:
            'See the metrics that matter at the business level — cost per delivery, on-time rate, fleet utilization, customer satisfaction, and revenue impact — in a single executive dashboard updated in real-time.',
          icon: BarChart3,
          screenshot: '/images/console-screenshots/fleetops-dashboard-metrics.webp',
          screenshotAlt: 'Executive Performance Dashboard',
          screenshotNeeded: 'FleetOps executive dashboard — high-level KPI cards with trend indicators and period comparison',
        },
        {
          title: 'Cost Reduction & ROI Visibility',
          description:
            'Track cost-per-order, cost-per-mile, and total logistics spend over time. Fleetbase customers average a 30% reduction in operational costs within the first year through route optimization, automation, and reduced overhead.',
          icon: DollarSign,
          screenshot: '/images/console-screenshots/fleetops-issues.webp',
          screenshotAlt: 'Cost Reduction & ROI Visibility',
          screenshotNeeded: 'FleetOps cost analytics — total logistics spend trend with cost-per-order breakdown',
        },
        {
          title: 'Scalable Infrastructure Without Vendor Lock-In',
          description:
            'Fleetbase is fully open-source. You own the code, the data, and the deployment. Scale to new markets, add new order types, and build custom integrations — without asking a vendor for permission or paying for custom development.',
          icon: Globe,
          screenshot: '/images/console-screenshots/fleetops-vendors.webp',
          screenshotAlt: 'Scalable Infrastructure Without Vendor Lock-In',
          screenshotNeeded: 'Fleetbase architecture overview — showing modular extensions and self-hosted deployment options',
        },
        {
          title: 'Operational Efficiency at Scale',
          description:
            'Automated dispatch, intelligent routing, and digital workflows replace manual coordination. As your order volume grows, your team size does not have to grow proportionally.',
          icon: Zap,
          screenshot: '/images/console-screenshots/fleetops-order-config-activity-flow.webp',
          screenshotAlt: 'Operational Efficiency at Scale',
          screenshotNeeded: 'FleetOps automation dashboard — showing automated workflows and their time/cost savings',
        },
        {
          title: 'Data Ownership & Security',
          description:
            'Your logistics data stays in your infrastructure. No third-party access, no data sharing with competitors, no surprise policy changes. Full data sovereignty with enterprise-grade security controls.',
          icon: Shield,
          screenshot: '/images/console-screenshots/iam-users-create.webp',
          screenshotAlt: 'Data Ownership & Security',
          screenshotNeeded: 'Fleetbase security overview — data residency, encryption status, and access control summary',
        },
        {
          title: 'Business Growth Analytics',
          description:
            'Track market expansion performance, new zone profitability, and customer retention metrics tied to delivery performance. Understand the direct relationship between logistics quality and business growth.',
          icon: TrendingUp,
          screenshot: '/images/console-screenshots/fleetops-fleets.webp',
          screenshotAlt: 'Business Growth Analytics',
          screenshotNeeded: 'FleetOps growth analytics — zone expansion performance and customer retention correlation chart',
        },
      ]}
      testimonial={{
        quote:
          "Switching to Fleetbase was one of the best infrastructure decisions we made. We reduced logistics costs by 28%, expanded to three new cities in four months, and we own our entire stack.",
        author: 'Elena V.',
        role: 'CEO',
        company: 'Nexus Delivery Group',
      }}
      faqs={[
        {
          q: 'What is the typical ROI timeline for Fleetbase?',
          a: 'Most operations see measurable cost reductions within the first 90 days through route optimization and dispatch automation. Full ROI is typically achieved within 6-12 months depending on operation size and baseline efficiency.',
        },
        {
          q: 'How does open-source reduce our vendor risk?',
          a: 'With Fleetbase, you have full access to the source code and can self-host on your own infrastructure. You are never dependent on a vendor\'s pricing decisions, product roadmap, or business continuity. You can fork, modify, and maintain the platform independently.',
        },
        {
          q: 'How does Fleetbase scale as our business grows?',
          a: 'Fleetbase scales horizontally on cloud or on-premise infrastructure. There are no per-driver or per-vehicle fees — you pay for resource units on a flat monthly plan. Adding new markets, order types, or integrations requires no additional development.',
        },
        {
          q: 'What does implementation look like?',
          a: 'Most operations are live within 2-4 weeks. Fleetbase provides onboarding support, documentation, and implementation guidance. Complex enterprise deployments with custom integrations typically take 4-8 weeks.',
        },
        {
          q: 'Is Fleetbase suitable for enterprise-scale operations?',
          a: 'Yes. Fleetbase serves operations ranging from small regional fleets to large enterprise logistics networks. Enterprise plans include dedicated support, custom SLAs, and professional services for complex deployments.',
        },
      ]}
      ctaHeading="Make logistics a competitive advantage"
      ctaBody="Reduce costs, eliminate vendor lock-in, and scale your logistics operation with open-source infrastructure you own completely. Talk to our team about your business."
      ctaPrimary="Talk to Sales"
      ctaPrimaryHref="/contact/sales"
      ctaSecondary="Start Free Trial"
      ctaSecondaryHref="/trial"
    />
  );
}
