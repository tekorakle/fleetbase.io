import type { Metadata } from 'next';
import { Truck, Wrench, MapPin, BarChart3, Shield, Smartphone } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Fleet Management Software | Fleetbase',
  description:
    'Monitor vehicle health, driver performance, and fleet utilization from one dashboard. Open-source fleet management platform with real-time tracking, maintenance scheduling, and compliance management.',
  keywords: ['fleet management software', 'vehicle tracking system', 'fleet maintenance software', 'driver management platform', 'fleet compliance software'],
  openGraph: {
    title: 'Fleet Management Software | Fleetbase',
    description: 'Monitor vehicle health, driver performance, and fleet utilization from one dashboard.',
  },
};

export default function FleetManagementPage() {
  return (
    <SolutionPageLayout
      badge="Use Case — Fleet Management"
      title={<>Every Vehicle. Every Driver. <span className="text-gradient">One Dashboard.</span></>}
      description="Fleetbase gives fleet managers complete visibility and control over their entire fleet — vehicle health, driver performance, compliance status, and real-time locations — all from a single operations dashboard."
      stats={[
        { value: '35%', label: 'Reduction in vehicle downtime' },
        { value: '22%', label: 'Lower maintenance costs' },
        { value: '100%', label: 'Fleet visibility in real-time' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshotNeeded="FleetOps fleet dashboard — vehicle list with health status, location, driver assignment, and utilization"
      painPoints={{
        heading: 'What fleet managers deal with every day',
        items: [
          'Vehicles breaking down because maintenance was missed',
          'No visibility into which vehicles are idle vs. active',
          'Driver compliance and licence checks managed in spreadsheets',
          'Fuel costs rising with no data on consumption per vehicle',
          'Incident reports filed on paper and impossible to retrieve',
          'No single source of truth for vehicle history and costs',
        ],
      }}
      features={[
        {
          title: 'Real-Time Fleet Visibility',
          description:
            'See every vehicle\'s live position, current driver, job status, and speed on a single interactive map. Filter by zone, vehicle type, or status to focus on what matters.',
          icon: MapPin,
          screenshotNeeded: 'FleetOps live map — fleet overview with vehicle type icons, driver names, and status indicators',
        },
        {
          title: 'Vehicle Maintenance Management',
          description:
            'Schedule preventive maintenance, track service history, manage work orders, and receive automated reminders before service deadlines. Reduce unplanned breakdowns and extend vehicle lifespan.',
          icon: Wrench,
          screenshotNeeded: 'FleetOps vehicle maintenance panel — service schedule, work order list, and upcoming reminders',
        },
        {
          title: 'Driver Management & Performance',
          description:
            'Manage driver profiles, licence expiry dates, and certifications in one place. Track on-time rate, delivery completion rate, and customer ratings per driver.',
          icon: Truck,
          screenshotNeeded: 'FleetOps driver management panel — driver list with licence status, performance metrics, and assignment history',
        },
        {
          title: 'Fleet Compliance Tracking',
          description:
            'Monitor vehicle compliance certificates, insurance expiry, and regulatory requirements. Receive automated alerts before deadlines and maintain a complete compliance history per vehicle.',
          icon: Shield,
          screenshotNeeded: 'FleetOps compliance panel — vehicle compliance status with expiry dates and alert indicators',
        },
        {
          title: 'Driver Mobile App (Navigator)',
          description:
            'Drivers report vehicle faults, complete pre-trip inspections, and submit incident reports directly in the Navigator app. All reports are logged against the vehicle and available instantly in the console.',
          icon: Smartphone,
          screenshotNeeded: 'Navigator app — vehicle inspection checklist and fault reporting screen',
        },
        {
          title: 'Fleet Analytics & Cost Reporting',
          description:
            'Analyse fleet utilization, fuel consumption, maintenance costs, and driver performance over time. Identify your most and least efficient vehicles and make data-driven fleet investment decisions.',
          icon: BarChart3,
          screenshotNeeded: 'FleetOps analytics — fleet utilization chart, cost per vehicle, and maintenance spend over time',
        },
      ]}
      testimonial={{
        quote:
          "We cut our unplanned vehicle downtime by 35% in six months. The automated maintenance reminders alone have saved us more than the cost of the platform.",
        author: 'Kevin O.',
        role: 'Fleet Manager',
        company: 'National Distribution Ltd.',
      }}
      faqs={[
        {
          q: 'Does Fleetbase support GPS hardware integration?',
          a: 'Yes. Fleetbase integrates with hardware GPS trackers via the API. The Navigator app also provides GPS tracking without additional hardware for driver-operated vehicles.',
        },
        {
          q: 'Can I track fuel consumption per vehicle?',
          a: 'Yes. Fuel consumption can be logged manually or via integration with fuel card systems. Analytics show consumption per vehicle, per route, and over time.',
        },
        {
          q: 'How does the maintenance scheduling work?',
          a: 'You can set maintenance schedules based on mileage, engine hours, or calendar intervals. The system generates work orders automatically and sends reminders to fleet managers and drivers.',
        },
        {
          q: 'Can drivers report faults from their mobile app?',
          a: 'Yes. The Navigator app includes a fault reporting feature where drivers can describe issues, attach photos, and flag severity. Reports are immediately visible in the fleet console.',
        },
        {
          q: 'Does Fleetbase support electric vehicle fleet management?',
          a: 'Yes. Fleetbase supports EV fleet management including range tracking, charging schedule management, and energy consumption analytics.',
        },
      ]}
      ctaHeading="Take full control of your fleet"
      ctaBody="Real-time visibility, proactive maintenance, and driver performance data — all in one open-source platform. Start your free trial today."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
