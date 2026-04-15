import type { Metadata } from 'next';
import { Package, MapPin, FileCheck, BarChart3, Zap, Smartphone } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Courier & Parcel Delivery Management Software',
  description: 'Open-source courier and parcel delivery management software. Automate dispatch, track packages in real time, manage drivers, and send customer notifications. Onfleet alternative.',
  keywords: ['courier management software', 'parcel delivery platform', 'last mile courier', 'proof of delivery software', 'courier dispatch system'],
  openGraph: {
    title: 'Courier & Parcel Delivery Software | Fleetbase',
    description: 'Automate courier dispatch, proof of delivery, and last-mile optimization.',
  },
};

export default function CourierServicesPage() {
  return (
    <SolutionPageLayout
      badge="Courier & Parcel Services"
      title={<>More Parcels. <span className="text-gradient">Fewer Headaches. Zero Disputes.</span></>}
      description="Fleetbase gives courier and parcel operators the tools to automate dispatch, capture digital proof of delivery, and optimize last-mile routes — so you can handle more volume without adding overhead."
      stats={[
        { value: '50%', label: 'Reduction in dispatch time' },
        { value: '0', label: 'Billing disputes with digital POD' },
        { value: '25%', label: 'More stops per driver per day' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-orders-table-detail.webp"
      heroScreenshotAlt="Fleetbase FleetOps order table showing courier parcel orders with pickup, dropoff, driver and status columns"
      heroScreenshotNeeded="FleetOps order list view — parcel orders with statuses, driver assignments, and tracking links"
      painPoints={{
        heading: 'What slows courier operations down',
        items: [
          'Manual dispatch eating hours every morning',
          'Drivers completing wrong addresses with no accountability',
          'Paper POD forms lost or disputed by recipients',
          'No visibility into where parcels are between pickup and delivery',
          'Scaling volume means hiring more coordinators',
          'Customers demanding real-time tracking you cannot provide',
        ],
      }}
      features={[
        {
          title: 'Automated Multi-Stop Dispatch',
          description:
            'Fleetbase automatically groups parcels into optimized runs and assigns them to the right driver based on zone, capacity, and availability. What used to take an hour takes seconds.',
          icon: Zap,
          screenshot: '/images/console-screenshots/fleetops-scheduler.webp',
          screenshotAlt: 'Automated Multi-Stop Dispatch',
          screenshotNeeded: 'FleetOps dispatch view — auto-grouped parcel runs assigned to drivers with stop counts',
        },
        {
          title: 'Digital Proof of Delivery',
          description:
            'Drivers capture signatures, photos, and recipient names directly in the Navigator app. Every POD is timestamped, geotagged, and stored against the order — accessible instantly from the console.',
          icon: FileCheck,
          screenshot: '/images/console-screenshots/fleetops-order-label.webp',
          screenshotAlt: 'Digital Proof of Delivery',
          screenshotNeeded: 'Navigator app POD capture — signature pad, photo, and recipient name fields',
        },
        {
          title: 'Live Parcel Tracking for Customers',
          description:
            'Every order generates a shareable tracking link with live driver position and ETA. Send it automatically via SMS or email at dispatch. Eliminate "where is my parcel?" calls entirely.',
          icon: MapPin,
          screenshot: '/images/console-screenshots/fleetops-live-map-singapore.png',
          screenshotAlt: 'Live Parcel Tracking for Customers',
          screenshotNeeded: 'Customer-facing tracking page — live map with driver dot, ETA, and order status',
        },
        {
          title: 'Route Optimization for Multi-Stop Runs',
          description:
            'Optimize delivery sequences across dozens of stops per driver run, factoring in time windows, traffic, and vehicle capacity. Cut fuel costs and increase stops-per-hour.',
          icon: Package,
          screenshot: '/images/console-screenshots/fleetops-live-map-full.webp',
          screenshotAlt: 'Route Optimization for Multi-Stop Runs',
          screenshotNeeded: 'FleetOps route view — optimized multi-stop sequence on map with stop numbers',
        },
        {
          title: 'Driver App with Offline Mode',
          description:
            'The Navigator app works in low-connectivity areas and syncs when back online. Drivers never lose their job list or miss a delivery due to a signal drop.',
          icon: Smartphone,
          screenshot: '/images/console-screenshots/fleetops-drivers-create.webp',
          screenshotAlt: 'Driver App with Offline Mode',
          screenshotNeeded: 'Navigator app — job list screen with offline indicator and sync status',
        },
        {
          title: 'Courier Performance Analytics',
          description:
            'Track first-attempt delivery rate, average stops per hour, and on-time performance by driver, zone, and time period. Identify inefficiencies and reward top performers.',
          icon: BarChart3,
          screenshot: '/images/console-screenshots/fleetops-dashboard-metrics.webp',
          screenshotAlt: 'Courier Performance Analytics',
          screenshotNeeded: 'FleetOps analytics — first-attempt delivery rate and stops-per-hour by driver chart',
        },
      ]}
      testimonial={{
        quote:
          "Digital POD alone paid for the platform in the first month. We had three billing disputes a week before Fleetbase. Now we have zero.",
        author: 'Tom B.',
        role: 'Operations Director',
        company: 'SwiftParcel UK',
      }}
      faqs={[
        {
          q: 'Can Fleetbase handle same-day and next-day delivery in the same system?',
          a: 'Yes. You can configure separate order types, workflows, and SLAs for same-day, next-day, and scheduled deliveries — all managed from the same console.',
        },
        {
          q: 'Does it support barcode or QR code scanning for parcel intake?',
          a: 'Yes. The Navigator app supports barcode and QR code scanning for parcel intake and confirmation. Custom scan workflows can be configured per order type.',
        },
        {
          q: 'Can we white-label the customer tracking page?',
          a: 'Yes. The customer tracking experience can be customised with your branding, colours, and domain. Enterprise plans include full white-label support.',
        },
        {
          q: 'How does Fleetbase handle returns and failed deliveries?',
          a: 'Drivers can mark deliveries as failed with reason codes and evidence. The system triggers configurable re-delivery or return workflows automatically, and all events are logged against the order.',
        },
        {
          q: 'Can I import orders from our existing system?',
          a: 'Yes. Fleetbase accepts order imports via CSV, REST API, and webhooks. Most courier operations connect their existing order management or e-commerce systems via the API.',
        },
      ]}
      ctaHeading="Scale your courier operation without scaling your team"
      ctaBody="Automate dispatch, eliminate paper POD, and give customers the tracking experience they expect — all on one open-source platform."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Talk to Sales"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
