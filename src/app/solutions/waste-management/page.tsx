import type { Metadata } from 'next';
import { Recycle, MapPin, BarChart3, Truck, ClipboardList, Zap } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Waste & Recycling Collection Software | Fleetbase',
  description:
    'Optimize waste collection routes, manage recycling operations, and track fleet compliance — all on an open-source logistics platform built for waste and recycling operators.',
  keywords: ['waste management software', 'recycling collection platform', 'waste fleet management', 'route optimization waste', 'bin collection software'],
  openGraph: {
    title: 'Waste & Recycling Collection Software | Fleetbase',
    description: 'Optimize waste collection routes and manage recycling operations efficiently.',
  },
};

export default function WasteManagementPage() {
  return (
    <SolutionPageLayout
      badge="Waste & Recycling"
      title={<>More Collections. <span className="text-gradient">Less Fuel. Full Compliance.</span></>}
      description="Fleetbase helps waste and recycling operators optimize collection routes, track vehicle compliance, manage driver schedules, and report on environmental KPIs — all from a single open-source platform."
      stats={[
        { value: '28%', label: 'Reduction in fuel costs' },
        { value: '20%', label: 'More collections per vehicle per day' },
        { value: '100%', label: 'Digital compliance records' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-live-map.webp"
      heroScreenshotAlt="Fleetbase FleetOps live map showing waste collection vehicles on optimized collection routes"
      heroScreenshotNeeded="FleetOps live map — waste collection vehicles on optimized routes with collection point markers"
      painPoints={{
        heading: 'Challenges waste operators face every day',
        items: [
          'Drivers taking inefficient routes with no optimization',
          'Paper collection records that are incomplete or illegible',
          'No visibility into which collection points were missed',
          'Vehicle compliance and maintenance tracked in spreadsheets',
          'Environmental reporting taking days to compile manually',
          'Scaling to new service areas requires rebuilding route plans from scratch',
        ],
      }}
      features={[
        {
          title: 'Optimized Collection Route Planning',
          description:
            'Fleetbase calculates the most efficient collection sequences for each vehicle, minimizing fuel consumption and maximizing the number of collection points per shift. Re-plan routes dynamically when new collections are added.',
          icon: Truck,
          screenshotNeeded: 'FleetOps route planning — waste collection route with optimized sequence and collection point markers',
        },
        {
          title: 'Live Fleet Tracking & Geofencing',
          description:
            'Monitor every collection vehicle in real-time on a live map. Set geofences around collection zones and receive automatic alerts when vehicles enter, depart, or skip a collection point.',
          icon: MapPin,
          screenshotNeeded: 'FleetOps live map — waste fleet with geofence zones and vehicle positions',
        },
        {
          title: 'Digital Collection Records',
          description:
            'Drivers log collection completions, weights, and exceptions directly in the Navigator app. Records are timestamped, geotagged, and stored against the job — eliminating paper logs and disputes.',
          icon: ClipboardList,
          screenshotNeeded: 'Navigator app — waste collection job completion screen with weight input and photo capture',
        },
        {
          title: 'Missed Collection Management',
          description:
            'When a collection is missed, the system flags it automatically and triggers a configurable follow-up workflow — re-schedule, notify the customer, or escalate to a supervisor.',
          icon: Zap,
          screenshotNeeded: 'FleetOps exception panel — missed collection alerts with re-schedule workflow',
        },
        {
          title: 'Vehicle Maintenance & Compliance',
          description:
            'Track vehicle service schedules, MOT dates, and compliance certificates from the fleet dashboard. Receive automated reminders before deadlines and maintain a complete maintenance history.',
          icon: Truck,
          screenshotNeeded: 'FleetOps vehicle compliance panel — showing service dates, MOT status, and upcoming reminders',
        },
        {
          title: 'Environmental KPI Reporting',
          description:
            'Generate reports on tonnes collected, fuel consumption, CO2 emissions, and recycling rates by zone, vehicle, or time period. Export for council reporting, sustainability audits, or internal reviews.',
          icon: BarChart3,
          screenshotNeeded: 'FleetOps analytics — environmental KPI dashboard with tonnes collected and CO2 emissions chart',
        },
      ]}
      testimonial={{
        quote:
          "We added 20% more collections per vehicle without adding a single truck. The route optimization paid for the platform in the first quarter.",
        author: 'Mark H.',
        role: 'Fleet Manager',
        company: 'GreenRoute Waste Services',
      }}
      faqs={[
        {
          q: 'Can Fleetbase handle both residential and commercial waste collection?',
          a: 'Yes. You can configure separate order types, workflows, and route rules for residential, commercial, and hazardous waste collections — all managed from the same console.',
        },
        {
          q: 'Does Fleetbase support scheduled recurring collections?',
          a: 'Yes. Recurring collection schedules can be configured per customer or zone. The system automatically generates jobs on the scheduled frequency and assigns them to the appropriate vehicle.',
        },
        {
          q: 'Can we track waste weights and materials per collection?',
          a: 'Yes. Custom fields can be added to collection order types for weight, material type, contamination flags, and any other data point required for compliance or billing.',
        },
        {
          q: 'Does it integrate with council or local authority reporting systems?',
          a: 'Fleetbase exports data in standard formats (CSV, JSON) and has a REST API that can push collection data to council reporting systems or environmental management platforms.',
        },
        {
          q: 'How does Fleetbase handle hazardous waste compliance?',
          a: 'Hazardous waste order types can be configured with mandatory compliance fields, driver certification checks, and chain-of-custody tracking. All records are stored in an audit-ready log.',
        },
      ]}
      ctaHeading="Optimize your collection operation today"
      ctaBody="Waste and recycling operators use Fleetbase to cut fuel costs, increase collections, and stay compliant — without the complexity of legacy software."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
