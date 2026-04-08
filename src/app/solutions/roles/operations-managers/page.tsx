import type { Metadata } from 'next';
import { LayoutDashboard, Zap, BarChart3, Bell, Settings, Users } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Logistics Software for Operations Managers | Fleetbase',
  description:
    'Give operations managers a single dashboard to oversee dispatch, monitor SLAs, manage exceptions, and report on performance — without switching between systems.',
  keywords: ['logistics software for operations managers', 'operations management platform', 'logistics operations dashboard', 'dispatch management software'],
  openGraph: {
    title: 'Logistics Software for Operations Managers | Fleetbase',
    description: 'A single dashboard to oversee dispatch, monitor SLAs, and manage exceptions.',
  },
};

export default function OperationsManagersPage() {
  return (
    <SolutionPageLayout
      badge="For Operations Managers"
      title={<>Run Your Entire Operation <span className="text-gradient">From One Screen.</span></>}
      description="Operations managers need visibility across every moving part — orders, drivers, vehicles, and SLAs — without toggling between five different systems. Fleetbase gives you a single command centre for your entire logistics operation."
      stats={[
        { value: '60%', label: 'Less time spent on manual coordination' },
        { value: '40%', label: 'Fewer SLA breaches' },
        { value: '2×', label: 'Faster exception resolution' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshotNeeded="FleetOps operations dashboard — live order count, SLA status, active drivers, and exception alerts in one view"
      painPoints={{
        heading: 'What makes operations management harder than it needs to be',
        items: [
          'Switching between dispatch, tracking, and reporting tools constantly',
          'Finding out about SLA breaches after the customer has already complained',
          'No single view of what every driver and vehicle is doing right now',
          'Exception management happening over WhatsApp and phone calls',
          'Weekly performance reports taking half a day to compile',
          'Scaling operations means adding headcount, not just software',
        ],
      }}
      features={[
        {
          title: 'Live Operations Command Centre',
          description:
            'See every active order, driver position, vehicle status, and SLA health on one live dashboard. No refreshing, no switching tabs — your entire operation at a glance, updated in real-time.',
          icon: LayoutDashboard,
          screenshotNeeded: 'FleetOps live operations dashboard — KPI cards, map view, order list, and driver status panel',
        },
        {
          title: 'Automated Dispatch & Workflow Execution',
          description:
            'Configure dispatch rules and order workflows that run automatically. Fleetbase handles routine assignment, notification, and escalation tasks so your team focuses on exceptions, not administration.',
          icon: Zap,
          screenshotNeeded: 'FleetOps automation rules panel — showing dispatch rules and workflow triggers',
        },
        {
          title: 'SLA Monitoring & Proactive Alerts',
          description:
            'Set SLA targets per order type and receive alerts before a breach occurs — not after. Fleetbase flags at-risk orders in real-time so you can intervene while there is still time.',
          icon: Bell,
          screenshotNeeded: 'FleetOps SLA monitor — at-risk orders highlighted with time-to-breach countdown',
        },
        {
          title: 'Exception Management',
          description:
            'All exceptions — failed deliveries, driver delays, vehicle faults — are surfaced in one exception queue with context and suggested actions. Resolve issues faster without hunting through emails and messages.',
          icon: Settings,
          screenshotNeeded: 'FleetOps exception queue — list of active exceptions with type, severity, and resolution options',
        },
        {
          title: 'Team & Driver Management',
          description:
            'Manage driver availability, assignments, and performance from the same console. See who is on shift, who is available for new jobs, and who needs attention based on performance data.',
          icon: Users,
          screenshotNeeded: 'FleetOps driver management panel — shift status, current assignment, and performance indicators',
        },
        {
          title: 'Operations Performance Reporting',
          description:
            'Generate daily, weekly, and monthly performance reports automatically. Track on-time rate, exception rate, cost-per-order, and driver utilization — and share with leadership in one click.',
          icon: BarChart3,
          screenshotNeeded: 'FleetOps operations report — weekly summary with on-time rate, exception count, and cost metrics',
        },
      ]}
      testimonial={{
        quote:
          "I used to start every morning firefighting. Now I open Fleetbase, see exactly what needs attention, and my team handles the rest. It changed how I manage completely.",
        author: 'Lisa M.',
        role: 'Head of Operations',
        company: 'Metro Logistics Group',
      }}
      faqs={[
        {
          q: 'Can I configure what appears on my operations dashboard?',
          a: 'Yes. The Fleetbase dashboard is configurable. You can choose which KPI cards, map views, and data panels are visible, and create separate dashboards for different operational views.',
        },
        {
          q: 'How does the SLA alert system work?',
          a: 'You configure SLA targets per order type. Fleetbase monitors every active order against its SLA in real-time and sends alerts — via the console, email, or webhook — when an order is at risk of breaching.',
        },
        {
          q: 'Can I manage multiple teams or depots from one account?',
          a: 'Yes. Fleetbase supports multi-team and multi-depot operations. You can manage separate teams with their own driver pools, order queues, and performance dashboards within one account.',
        },
        {
          q: 'How do I handle driver absences or vehicle breakdowns mid-shift?',
          a: 'Fleetbase allows you to reassign orders from one driver to another in seconds. The system re-optimizes affected routes automatically and notifies the new driver via the Navigator app.',
        },
        {
          q: 'Can Fleetbase replace our current dispatch and tracking tools?',
          a: 'Yes. Fleetbase is a complete operations platform covering dispatch, tracking, order management, driver management, and reporting. Most operations consolidate from 3-5 tools into Fleetbase alone.',
        },
      ]}
      ctaHeading="Run a tighter operation with less effort"
      ctaBody="One dashboard. Real-time visibility. Automated workflows. Fleetbase gives operations managers the control they need to run efficiently at scale."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
