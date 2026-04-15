import type { Metadata } from 'next';
import { Truck, MapPin, Wrench, BarChart3, FileCheck, Smartphone } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Fleet Management Software for Trucking & Haulage',
  description: 'Open-source fleet management software for trucking and haulage companies. Dispatch loads, track vehicles in real time, manage drivers, and optimize routes. Free to start.',
  keywords: ['trucking software', 'haulage management', 'fleet management', 'TMS', 'freight tracking', 'route optimization trucking'],
  openGraph: {
    title: 'Trucking & Haulage Logistics Software | Fleetbase',
    description: 'Open-source fleet management and TMS built for trucking and haulage operators.',
  },
};

export default function TruckingPage() {
  return (
    <SolutionPageLayout
      badge="Trucking & Haulage"
      title={<>Run a Tighter Fleet. <span className="text-gradient">Cut Costs. Deliver On Time.</span></>}
      description="Fleetbase gives trucking and haulage operators real-time freight visibility, intelligent route optimization, and driver management tools — all on an open-source platform you own and control."
      stats={[
        { value: '30%', label: 'Average fuel cost reduction' },
        { value: '40%', label: 'Fewer customer status calls' },
        { value: '99.9%', label: 'Platform uptime' },
        { value: '2×', label: 'Faster dispatch times' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-live-map-singapore.png"
      heroScreenshotAlt="Fleetbase FleetOps live map showing trucking fleet positions with real-time GPS tracking across routes"
      heroScreenshotNeeded="FleetOps live map view showing multiple trucks on long-haul routes with ETAs"
      painPoints={{
        heading: 'Sound familiar?',
        items: [
          'Dispatchers calling drivers every hour for location updates',
          'Fuel costs rising with no visibility into idle time or route inefficiency',
          'Paper POD forms causing billing disputes and delays',
          'No single view of all vehicles, orders, and drivers',
          'Legacy TMS software too rigid to match your workflows',
          'Compliance paperwork eating hours every week',
        ],
      }}
      features={[
        {
          title: 'Live Fleet Tracking on a Single Map',
          description:
            'See every truck, trailer, and driver in real-time on an interactive map. Get live ETAs, geofence alerts, and automatic status updates as drivers arrive and depart stops — without a single phone call.',
          icon: MapPin,
          screenshot: '/images/console-screenshots/fleetops-live-map-singapore.png',
          screenshotAlt: 'Live Fleet Tracking on a Single Map',
          screenshotNeeded: 'FleetOps live map — multiple trucks with route lines, ETAs, and driver names visible',
        },
        {
          title: 'Intelligent Route Optimization',
          description:
            'Fleetbase calculates the most efficient routes considering traffic, delivery time windows, vehicle capacity, and driver hours. Re-optimize dynamically when conditions change mid-route.',
          icon: Truck,
          screenshot: '/images/console-screenshots/fleetops-live-map-full.webp',
          screenshotAlt: 'Intelligent Route Optimization',
          screenshotNeeded: 'Route optimization panel — showing optimized multi-stop route with distance/time savings',
        },
        {
          title: 'Digital Proof of Delivery',
          description:
            'Drivers capture signatures, photos, and delivery notes directly in the Navigator mobile app. PODs are timestamped, geotagged, and instantly available in the console — eliminating billing disputes.',
          icon: FileCheck,
          screenshot: '/images/console-screenshots/fleetops-order-label.webp',
          screenshotAlt: 'Digital Proof of Delivery',
          screenshotNeeded: 'Navigator app POD screen — signature capture and photo upload on mobile',
        },
        {
          title: 'Vehicle Maintenance Management',
          description:
            'Track vehicle health, schedule preventive maintenance, manage work orders, and monitor fault reports from the fleet dashboard. Reduce breakdowns and keep your fleet roadworthy.',
          icon: Wrench,
          screenshot: '/images/console-screenshots/fleetops-scheduler.webp',
          screenshotAlt: 'Vehicle Maintenance Management',
          screenshotNeeded: 'FleetOps vehicle maintenance panel — showing service schedule and fault log',
        },
        {
          title: 'Operations Analytics & Reporting',
          description:
            'Monitor KPIs like cost-per-mile, on-time delivery rate, fuel consumption, and driver utilization. Build custom dashboards and export reports for stakeholders and compliance.',
          icon: BarChart3,
          screenshot: '/images/console-screenshots/fleetops-fuel-reports.webp',
          screenshotAlt: 'Operations Analytics & Reporting',
          screenshotNeeded: 'FleetOps analytics dashboard — cost per mile, on-time rate, utilization charts',
        },
        {
          title: 'Driver Mobile App (Navigator)',
          description:
            'Drivers get turn-by-turn navigation, job notifications, and proof-of-delivery capture on iOS or Android. No hardware required — just a smartphone.',
          icon: Smartphone,
          screenshot: '/images/console-screenshots/fleetops-order-label.webp',
          screenshotAlt: 'Driver Mobile App (Navigator)',
          screenshotNeeded: 'Navigator app home screen — showing active job, navigation button, and POD capture',
        },
      ]}
      testimonial={{
        quote:
          'We cut our dispatch time in half and our fuel costs dropped 22% in the first three months. The live map alone saved us from hiring another operations coordinator.',
        author: 'James O.',
        role: 'Head of Operations',
        company: 'Regional Haulage Co.',
      }}
      faqs={[
        {
          q: 'Does Fleetbase work for long-haul as well as local delivery?',
          a: 'Yes. Fleetbase handles both long-haul freight and local multi-stop delivery. Route optimization works across any distance, and the live tracking map updates in real-time regardless of route length.',
        },
        {
          q: 'Can I integrate with my existing ERP or accounting system?',
          a: 'Fleetbase exposes a full REST API and supports webhooks for all major events. Pre-built integrations are available for common accounting and ERP platforms, and custom integrations can be built using the API.',
        },
        {
          q: 'How does driver tracking work without dedicated hardware?',
          a: 'Drivers share their location through the Navigator mobile app (iOS and Android). No additional GPS hardware is required, though Fleetbase also supports integration with hardware telematics devices.',
        },
        {
          q: 'Is Fleetbase open source?',
          a: 'Yes. Fleetbase is fully open-source under AGPL-3.0. You can self-host it on your own infrastructure, inspect the code, and extend it to fit your exact workflows. If you deploy a modified version as a service to external users, AGPL requires those modifications to be open source. A commercial licence is available if you need to keep changes proprietary.',
        },
        {
          q: 'How is pricing structured for trucking fleets?',
          a: 'Fleetbase uses resource-unit-based pricing — a flat monthly fee based on your plan tier with included resource units. There are no per-driver or per-vehicle fees, so you can scale your team without scaling your software costs.',
        },
      ]}
      ctaHeading="Ready to modernize your fleet operations?"
      ctaBody="Join hundreds of trucking and haulage operators running smarter, leaner fleets on Fleetbase. Start your free trial today — no credit card required."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
