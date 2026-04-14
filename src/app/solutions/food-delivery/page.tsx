import type { Metadata } from 'next';
import { Utensils, MapPin, Zap, Star, Smartphone, BarChart3 } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Food & Grocery Delivery Management Software',
  description: 'Manage food and grocery delivery operations with Fleetbase. Real-time driver tracking, automated dispatch, customer notifications, and proof of delivery — all in one open-source platform.',
  keywords: ['food delivery software', 'grocery delivery platform', 'on-demand delivery', 'restaurant delivery management', 'last mile food delivery'],
  openGraph: {
    title: 'Food & Grocery Delivery Software | Fleetbase',
    description: 'Power on-demand food and grocery delivery with real-time tracking and automated dispatch.',
  },
};

export default function FoodDeliveryPage() {
  return (
    <SolutionPageLayout
      badge="Food & Grocery Delivery"
      title={<>Deliver Faster. <span className="text-gradient">Keep Customers Coming Back.</span></>}
      description="Fleetbase powers on-demand food and grocery delivery operations with real-time driver tracking, intelligent dispatch, live customer notifications, and the analytics to keep every order profitable."
      stats={[
        { value: '8 min', label: 'Average dispatch time reduction' },
        { value: '4.8★', label: 'Average customer satisfaction' },
        { value: '35%', label: 'Fewer failed deliveries' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-kanban-board-detail.webp"
      heroScreenshotAlt="Fleetbase FleetOps order board showing food delivery orders in Created, Dispatched, and Enroute stages"
      heroScreenshotNeeded="FleetOps live map — food delivery orders with driver positions and ETA countdown timers"
      painPoints={{
        heading: 'The problems killing your margins',
        items: [
          'Drivers going offline with no visibility into their location',
          'Customers calling support asking "where is my order?"',
          'Manual dispatch creating bottlenecks during peak hours',
          'No way to measure driver performance or delivery SLAs',
          'Missed time windows causing refunds and bad reviews',
          'Scaling to new zones requires rebuilding your entire stack',
        ],
      }}
      features={[
        {
          title: 'Real-Time Order & Driver Tracking',
          description:
            'Every active order and driver is visible on a live map. Dispatchers see driver positions, order statuses, and ETAs in one view. Customers receive a live tracking link the moment their order is dispatched.',
          icon: MapPin,
          screenshotNeeded: 'FleetOps live map — food delivery orders with colour-coded statuses and driver avatars',
        },
        {
          title: 'Automated Smart Dispatch',
          description:
            'Fleetbase automatically assigns incoming orders to the nearest available driver based on location, capacity, and delivery zone rules. Reduce manual work and eliminate dispatch bottlenecks during peak hours.',
          icon: Zap,
          screenshotNeeded: 'FleetOps dispatch panel — auto-assign rules and incoming order queue',
        },
        {
          title: 'Customer Notification Engine',
          description:
            'Automatically send SMS and push notifications at every order milestone — confirmed, picked up, en route, delivered. Reduce inbound support calls by up to 40% and increase repeat order rates.',
          icon: Smartphone,
          screenshotNeeded: 'FleetOps order detail — customer notification timeline showing SMS/push events',
        },
        {
          title: 'Driver Performance & Ratings',
          description:
            'Track on-time rate, average delivery time, and customer ratings per driver. Identify your top performers and address issues before they impact your reviews.',
          icon: Star,
          screenshotNeeded: 'FleetOps driver profile — showing rating score, on-time %, and delivery history',
        },
        {
          title: 'Delivery Analytics & Zone Insights',
          description:
            'Understand which zones are most profitable, which time slots drive the most volume, and where your delivery SLAs are slipping. Make data-driven decisions to grow the right markets.',
          icon: BarChart3,
          screenshotNeeded: 'FleetOps analytics — delivery zone heatmap and SLA performance chart',
        },
        {
          title: 'Storefront Integration',
          description:
            'Connect Fleetbase Storefront to your delivery operation for end-to-end order management — from customer checkout to doorstep delivery — with no manual data entry between systems.',
          icon: Utensils,
          screenshotNeeded: 'Storefront order flowing into FleetOps dispatch — side-by-side or split-screen view',
        },
      ]}
      testimonial={{
        quote:
          "We went from 45-minute average dispatch times to under 8 minutes after switching to Fleetbase. Our customer satisfaction scores jumped from 3.9 to 4.8 stars within two months.",
        author: 'Priya M.',
        role: 'COO',
        company: 'QuickBite Delivery',
      }}
      faqs={[
        {
          q: 'Can Fleetbase handle high order volumes during peak hours?',
          a: 'Yes. Fleetbase is built to handle thousands of concurrent orders. The automated dispatch engine processes incoming orders in real-time and the platform scales horizontally to handle peak demand.',
        },
        {
          q: 'Does Fleetbase support multiple delivery zones or cities?',
          a: 'Yes. You can configure multiple delivery zones with different rules, pricing, and driver pools. Expand to new zones without rebuilding your operations stack.',
        },
        {
          q: 'Can customers track their own orders?',
          a: "Yes. Every order generates a shareable live tracking link that shows the customer the driver's real-time position and ETA. No app download required for the customer.",
        },
        {
          q: 'Does it integrate with our restaurant POS or ordering platform?',
          a: 'Fleetbase has a REST API and webhook system that integrates with any POS or ordering platform. The Storefront module also provides a native ordering layer if needed.',
        },
        {
          q: 'How does Fleetbase handle failed deliveries?',
          a: 'Drivers can mark orders as failed with a reason code and photo evidence in the Navigator app. The system automatically triggers configurable follow-up workflows such as re-dispatch or customer notification.',
        },
      ]}
      ctaHeading="Ready to scale your delivery operation?"
      ctaBody="Join food and grocery delivery businesses running faster, more profitable operations on Fleetbase. 7-day free trial, no credit card required."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
