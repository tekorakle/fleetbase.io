import type { Metadata } from 'next';
import { MapPin, Zap, Smartphone, BarChart3, FileCheck, Users } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Last-Mile Delivery Software | Fleetbase',
  description:
    'Streamline last-mile delivery with smart dispatch, real-time driver tracking, customer notifications, and digital proof of delivery. Open-source last-mile logistics platform.',
  keywords: ['last mile delivery software', 'last mile logistics platform', 'delivery management system', 'final mile delivery', 'delivery dispatch software'],
  openGraph: {
    title: 'Last-Mile Delivery Software | Fleetbase',
    description: 'Streamline last-mile delivery with smart dispatch and real-time driver tracking.',
  },
};

export default function LastMileDeliveryPage() {
  return (
    <SolutionPageLayout
      badge="Use Case — Last-Mile Delivery"
      title={<>The Last Mile is <span className="text-gradient">Where You Win or Lose.</span></>}
      description="Last-mile delivery is your most expensive, most visible, and most customer-facing operation. Fleetbase gives you the tools to make it fast, efficient, and transparent — for your team and your customers."
      stats={[
        { value: '50%', label: 'Reduction in dispatch time' },
        { value: '40%', label: 'Fewer customer support calls' },
        { value: '25%', label: 'More deliveries per driver per day' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-live-map-singapore.png"
      heroScreenshotAlt="Fleetbase FleetOps live map showing last-mile delivery drivers on optimized routes with stop sequences"
      heroScreenshotNeeded="FleetOps live map — last-mile delivery drivers on routes with stop sequence numbers and ETAs"
      painPoints={{
        heading: 'Last-mile problems that cost you money and customers',
        items: [
          'Drivers taking inefficient routes between stops',
          'Customers with no visibility into when their delivery will arrive',
          'Failed first-attempt deliveries requiring expensive re-delivery',
          'Dispatchers manually assigning orders one by one',
          'No proof of delivery for billing or dispute resolution',
          'No data to understand where delivery performance is breaking down',
        ],
      }}
      features={[
        {
          title: 'Smart Dispatch & Auto-Assignment',
          description:
            'Fleetbase automatically assigns incoming orders to the nearest available driver based on location, zone, and capacity. Dispatchers review and approve — or let the system run fully automated during peak hours.',
          icon: Zap,
          screenshotNeeded: 'FleetOps dispatch panel — auto-assignment queue with driver proximity and capacity indicators',
        },
        {
          title: 'Optimized Multi-Stop Routes',
          description:
            'Every driver run is automatically sequenced for maximum efficiency — factoring in delivery time windows, traffic, and vehicle capacity. Drivers follow optimized routes in the Navigator app with turn-by-turn guidance.',
          icon: MapPin,
          screenshotNeeded: 'FleetOps route view — optimized multi-stop sequence on map with numbered stops and ETA per stop',
        },
        {
          title: 'Live Customer Tracking',
          description:
            'Every delivery generates a live tracking link sent automatically to the customer at dispatch. They see the driver\'s real-time position, ETA, and delivery confirmation — no app download required.',
          icon: Users,
          screenshotNeeded: 'Customer tracking page — live map with driver position, ETA countdown, and delivery status',
        },
        {
          title: 'Driver Mobile App (Navigator)',
          description:
            'Drivers receive their job list, navigate to each stop, and capture proof of delivery — all in the Navigator app on their own smartphone. No dedicated hardware required.',
          icon: Smartphone,
          screenshotNeeded: 'Navigator app — active delivery job with navigation, stop list, and POD capture button',
        },
        {
          title: 'Digital Proof of Delivery',
          description:
            'Capture signatures, photos, and delivery notes at every stop. PODs are timestamped, geotagged, and instantly available in the console — eliminating billing disputes and failed delivery claims.',
          icon: FileCheck,
          screenshotNeeded: 'Navigator app POD screen — signature capture with timestamp and GPS coordinates',
        },
        {
          title: 'Last-Mile Performance Analytics',
          description:
            'Track first-attempt delivery rate, average delivery time, on-time performance, and driver efficiency. Identify problem zones and underperforming routes with data-driven insights.',
          icon: BarChart3,
          screenshotNeeded: 'FleetOps analytics — first-attempt delivery rate, on-time %, and average delivery time by zone',
        },
      ]}
      testimonial={{
        quote:
          "Our first-attempt delivery rate went from 78% to 94% after we switched to Fleetbase. The combination of optimized routes and live customer tracking made the difference.",
        author: 'Rachel T.',
        role: 'VP of Operations',
        company: 'Urban Delivery Co.',
      }}
      faqs={[
        {
          q: 'How does Fleetbase reduce failed first-attempt deliveries?',
          a: 'Fleetbase sends customers automated notifications with live tracking links and accurate ETAs. Customers can also provide delivery instructions or request rescheduling before the driver arrives, significantly reducing failed attempts.',
        },
        {
          q: 'Can Fleetbase handle same-day and scheduled deliveries together?',
          a: 'Yes. You can manage same-day, next-day, and scheduled deliveries in the same console with separate workflows, SLAs, and dispatch rules for each type.',
        },
        {
          q: 'Does the Navigator app work offline?',
          a: 'Yes. The Navigator app caches job details and maps for offline use. Actions taken offline sync automatically when connectivity is restored.',
        },
        {
          q: 'Can we set delivery time windows per order?',
          a: 'Yes. Delivery time windows can be set per order and are factored into route optimization. The system alerts dispatchers when a time window is at risk of being missed.',
        },
        {
          q: 'How does Fleetbase handle returns and failed deliveries?',
          a: 'Drivers mark failed deliveries with reason codes and evidence in the Navigator app. Configurable follow-up workflows automatically trigger re-delivery scheduling or customer notification.',
        },
      ]}
      ctaHeading="Make your last mile your competitive advantage"
      ctaBody="Faster dispatch, smarter routes, happier customers. Start your free trial and see the difference Fleetbase makes in your last-mile operation."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
