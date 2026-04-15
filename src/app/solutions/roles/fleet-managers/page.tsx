import type { Metadata } from 'next';
import { Truck, Wrench, Shield, MapPin, BarChart3, Bell } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Fleet Management Software for Fleet Managers | Fleetbase',
  description:
    'Give fleet managers complete visibility over vehicle health, compliance, driver performance, and real-time locations — all from one open-source fleet management platform.',
  keywords: ['fleet management software', 'fleet manager tools', 'vehicle compliance tracking', 'fleet maintenance platform', 'driver performance management'],
  openGraph: {
    title: 'Fleet Management Software for Fleet Managers | Fleetbase',
    description: 'Complete visibility over vehicle health, compliance, and driver performance.',
  },
};

export default function FleetManagersPage() {
  return (
    <SolutionPageLayout
      badge="For Fleet Managers"
      title={<>Know the Status of Every Vehicle <span className="text-gradient">Before It Becomes a Problem.</span></>}
      description="Fleet managers need to stay ahead of maintenance, compliance, and driver issues — not react to them after they cause breakdowns or violations. Fleetbase gives you proactive visibility and control over your entire fleet."
      stats={[
        { value: '35%', label: 'Reduction in unplanned breakdowns' },
        { value: '22%', label: 'Lower maintenance costs' },
        { value: '100%', label: 'Compliance deadline visibility' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-vehicles.webp"
      heroScreenshotAlt="Fleetbase FleetOps vehicle management dashboard for fleet managers showing vehicle status and assignments"
      heroScreenshotNeeded="FleetOps fleet dashboard — vehicle list with health status, compliance indicators, and maintenance schedule"
      painPoints={{
        heading: 'What keeps fleet managers up at night',
        items: [
          'Vehicles breaking down because a service was missed',
          'Compliance certificates expiring without warning',
          'No single view of all vehicle locations and statuses',
          'Maintenance history scattered across paper records and spreadsheets',
          'Driver licence and certification checks done manually',
          'Fuel costs rising with no data on consumption per vehicle',
        ],
      }}
      features={[
        {
          title: 'Real-Time Vehicle Tracking',
          description:
            'See every vehicle\'s live position, speed, driver, and job status on an interactive map. Filter by zone, vehicle type, or status. Set geofences and receive alerts for boundary violations.',
          icon: MapPin,
          screenshot: '/images/console-screenshots/fleetops-live-map-singapore.png',
          screenshotAlt: 'Real-Time Vehicle Tracking',
          screenshotNeeded: 'FleetOps live map — fleet overview with vehicle icons, driver names, speed, and status',
        },
        {
          title: 'Preventive Maintenance Scheduling',
          description:
            'Schedule services by mileage, engine hours, or calendar interval. Receive automated reminders before deadlines. Generate work orders and track completion — all in one place.',
          icon: Wrench,
          screenshot: '/images/console-screenshots/fleetops-scheduler.webp',
          screenshotAlt: 'Preventive Maintenance Scheduling',
          screenshotNeeded: 'FleetOps maintenance panel — service schedule calendar with upcoming services and work order list',
        },
        {
          title: 'Vehicle Compliance Management',
          description:
            'Track MOT dates, insurance expiry, operator licences, and any other compliance requirement per vehicle. Receive alerts weeks in advance so nothing slips through.',
          icon: Shield,
          screenshot: '/images/console-screenshots/fleetops-issues.webp',
          screenshotAlt: 'Vehicle Compliance Management',
          screenshotNeeded: 'FleetOps compliance panel — vehicle compliance status table with expiry dates and alert thresholds',
        },
        {
          title: 'Driver Management & Licence Tracking',
          description:
            'Manage driver profiles, licence expiry, endorsements, and certifications. Receive automated alerts before driver licences or certifications expire. Assign vehicles based on driver qualifications.',
          icon: Truck,
          screenshot: '/images/console-screenshots/fleetops-drivers-create.webp',
          screenshotAlt: 'Driver Management & Licence Tracking',
          screenshotNeeded: 'FleetOps driver panel — driver list with licence expiry dates, endorsements, and compliance status',
        },
        {
          title: 'Fault Reporting & Incident Management',
          description:
            'Drivers report vehicle faults and incidents directly in the Navigator app. Reports are instantly visible in the console, logged against the vehicle, and can trigger maintenance work orders automatically.',
          icon: Bell,
          screenshot: '/images/console-screenshots/fleetops-issues.webp',
          screenshotAlt: 'Fault Reporting & Incident Management',
          screenshotNeeded: 'FleetOps vehicle fault log — fault reports with driver, description, severity, and resolution status',
        },
        {
          title: 'Fleet Cost & Utilization Analytics',
          description:
            'Analyse total cost of ownership per vehicle — fuel, maintenance, insurance, and depreciation. Identify underutilized vehicles and make data-driven fleet investment decisions.',
          icon: BarChart3,
          screenshot: '/images/console-screenshots/fleetops-issues.webp',
          screenshotAlt: 'Fleet Cost & Utilization Analytics',
          screenshotNeeded: 'FleetOps analytics — fleet cost breakdown per vehicle and utilization rate chart',
        },
      ]}
      testimonial={{
        quote:
          "We went from reactive to proactive. Fleetbase tells me about a vehicle issue before the driver even calls in. Our breakdown rate dropped by a third in the first six months.",
        author: 'Paul R.',
        role: 'Fleet Manager',
        company: 'Nationwide Freight Ltd.',
      }}
      faqs={[
        {
          q: 'Does Fleetbase support GPS hardware integration?',
          a: 'Yes. Fleetbase integrates with hardware GPS trackers via the API. The Navigator app also provides GPS tracking without additional hardware for driver-operated vehicles.',
        },
        {
          q: 'How does the maintenance reminder system work?',
          a: 'You set service intervals per vehicle (by mileage, engine hours, or calendar date). Fleetbase monitors each vehicle against its schedule and sends reminders at configurable lead times before the service is due.',
        },
        {
          q: 'Can drivers report faults from their mobile app?',
          a: 'Yes. The Navigator app includes a fault reporting feature. Drivers describe the issue, attach photos, and flag severity. Reports appear immediately in the fleet console and can auto-generate work orders.',
        },
        {
          q: 'Can I track fuel consumption per vehicle?',
          a: 'Yes. Fuel consumption can be logged manually or via integration with fuel card systems. Analytics show consumption per vehicle, per route, and over time to identify inefficiencies.',
        },
        {
          q: 'Does Fleetbase support electric vehicle fleet management?',
          a: 'Yes. EV fleet management is supported including range tracking, charging schedule management, and energy consumption analytics alongside traditional fuel tracking.',
        },
      ]}
      ctaHeading="Stay ahead of every vehicle issue"
      ctaBody="Proactive maintenance, compliance tracking, and real-time visibility — all in one open-source fleet management platform. Start your free trial today."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
