import type { Metadata } from 'next';
import { BarChart3, TrendingUp, MapPin, FileText, Zap, Settings } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Logistics Analytics & Reporting | Fleetbase',
  description:
    'Turn logistics operational data into actionable insights with live dashboards, KPI tracking, and exportable reports. Fleetbase analytics covers fleet performance, delivery SLAs, driver metrics, and cost analysis.',
  keywords: ['logistics analytics software', 'fleet performance dashboard', 'delivery KPI tracking', 'logistics reporting platform', 'supply chain analytics'],
  openGraph: {
    title: 'Logistics Analytics & Reporting | Fleetbase',
    description: 'Turn operational data into actionable insights with live dashboards and KPI tracking.',
  },
};

export default function AnalyticsPage() {
  return (
    <SolutionPageLayout
      badge="Use Case — Analytics & Reporting"
      title={<>Stop Guessing. <span className="text-gradient">Start Knowing.</span></>}
      description="Fleetbase turns your logistics operation data into clear, actionable insights. Track the KPIs that matter — delivery performance, fleet utilization, driver efficiency, and cost-per-order — and make decisions backed by real data."
      stats={[
        { value: '100+', label: 'Pre-built metrics tracked' },
        { value: 'Real-time', label: 'Dashboard updates' },
        { value: '40%', label: 'Faster operational decisions' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-kanban-board.webp"
      heroScreenshotAlt="Fleetbase FleetOps order board providing operational analytics view across delivery pipeline stages"
      heroScreenshotNeeded="FleetOps analytics dashboard — overview with KPI cards, delivery performance chart, and fleet utilization graph"
      painPoints={{
        heading: 'Running blind on data you already have',
        items: [
          'KPIs tracked in spreadsheets updated manually once a week',
          'No visibility into which drivers or zones are underperforming',
          'Cost-per-delivery unknown because data lives in three systems',
          'Reporting takes days to compile for management reviews',
          'No early warning when SLAs are trending toward breach',
          'Decisions made on gut feel rather than operational data',
        ],
      }}
      features={[
        {
          title: 'Live Operations Dashboard',
          description:
            'See your entire operation at a glance — active orders, driver positions, delivery completion rate, and SLA status — all updating in real-time. No refresh required.',
          icon: BarChart3,
          screenshotNeeded: 'FleetOps live operations dashboard — KPI cards, active order count, on-time rate, and fleet status',
        },
        {
          title: 'Delivery Performance Analytics',
          description:
            'Track on-time delivery rate, first-attempt success rate, average delivery time, and SLA compliance by zone, order type, driver, and time period. Drill down to identify root causes of underperformance.',
          icon: TrendingUp,
          screenshotNeeded: 'FleetOps analytics — on-time rate trend chart with zone breakdown and SLA compliance table',
        },
        {
          title: 'Fleet Utilization & Cost Analysis',
          description:
            'Understand vehicle utilization rates, cost-per-mile, fuel consumption, and maintenance spend per vehicle. Identify underutilized assets and optimize your fleet size and composition.',
          icon: MapPin,
          screenshotNeeded: 'FleetOps analytics — fleet utilization heatmap and cost-per-vehicle breakdown chart',
        },
        {
          title: 'Driver Performance Metrics',
          description:
            'Rank drivers by on-time rate, delivery completion, customer ratings, and efficiency metrics. Identify coaching opportunities and reward top performers with data to back your decisions.',
          icon: Zap,
          screenshotNeeded: 'FleetOps driver analytics — driver leaderboard with on-time %, completion rate, and rating columns',
        },
        {
          title: 'Custom Dashboards & Reports',
          description:
            'Build custom dashboards for different stakeholders — operations, finance, executive — with the metrics they care about. Schedule automated report delivery via email.',
          icon: Settings,
          screenshotNeeded: 'FleetOps custom dashboard builder — drag-and-drop widget layout with metric selector',
        },
        {
          title: 'Exportable Reports for Stakeholders',
          description:
            'Export any report to CSV or PDF for sharing with management, clients, or regulators. Schedule automated report generation and delivery on a daily, weekly, or monthly basis.',
          icon: FileText,
          screenshotNeeded: 'FleetOps report export panel — showing report type selection, date range, and format options',
        },
      ]}
      testimonial={{
        quote:
          "Our weekly operations review used to take half a day to prepare. Now it takes 10 minutes — everything we need is already in Fleetbase, live and accurate.",
        author: 'Marcus W.',
        role: 'Operations Director',
        company: 'Apex Logistics Group',
      }}
      faqs={[
        {
          q: 'How real-time is the analytics data?',
          a: 'The live operations dashboard updates in real-time as events occur. Historical analytics and reports are updated within minutes of data being recorded.',
        },
        {
          q: 'Can I build custom dashboards for different teams?',
          a: 'Yes. Fleetbase supports multiple custom dashboards with different metric sets. You can create separate views for operations, finance, and executive stakeholders.',
        },
        {
          q: 'Can I export data to our BI tool or data warehouse?',
          a: 'Yes. Fleetbase provides a REST API for data export and supports webhook-based data streaming to external systems. CSV and JSON exports are available for all report types.',
        },
        {
          q: 'Does Fleetbase track cost-per-delivery?',
          a: 'Yes. Cost-per-delivery analytics are available when cost data (fuel, driver pay, vehicle costs) is configured in the platform. The system calculates cost-per-order, cost-per-mile, and cost-per-zone.',
        },
        {
          q: 'Can I set KPI targets and receive alerts when they are missed?',
          a: 'Yes. KPI targets can be configured for key metrics. The system sends alerts when performance falls below thresholds, allowing proactive intervention before issues escalate.',
        },
      ]}
      ctaHeading="Make data-driven decisions about your logistics operation"
      ctaBody="Real-time dashboards, driver performance metrics, and cost analysis — all built into Fleetbase. Start your free trial and see your operation clearly for the first time."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
