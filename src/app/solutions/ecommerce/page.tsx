import type { Metadata } from 'next';
import { ShoppingCart, Package, Zap, BarChart3, Webhook, Store } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'E-commerce Delivery & Fulfillment Management Software',
  description: 'Connect your e-commerce store to a powerful delivery management platform. Automate order fulfillment, dispatch drivers, and track deliveries in real time with Fleetbase.',
  keywords: ['ecommerce logistics software', 'retail fulfillment platform', 'order fulfillment software', 'ecommerce delivery management', 'WMS for ecommerce'],
  openGraph: {
    title: 'E-commerce & Retail Logistics Software | Fleetbase',
    description: 'Sync inventory, fulfill orders faster, and delight customers with real-time delivery tracking.',
  },
};

export default function EcommercePage() {
  return (
    <SolutionPageLayout
      badge="E-commerce & Retail"
      title={<>From Cart to Doorstep. <span className="text-gradient">Seamlessly.</span></>}
      description="Fleetbase connects your online store to your fulfillment and delivery operation — syncing inventory, automating order routing, and giving customers the real-time delivery experience they expect."
      stats={[
        { value: '60%', label: 'Faster order fulfillment' },
        { value: '45%', label: 'Reduction in delivery errors' },
        { value: '4.9★', label: 'Post-delivery customer rating' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/storefront-products-grid.webp"
      heroScreenshotAlt="Fleetbase Storefront product catalogue integrated with FleetOps dispatch for e-commerce fulfilment"
      heroScreenshotNeeded="FleetOps + Pallet side-by-side — e-commerce orders flowing from Storefront into dispatch"
      painPoints={{
        heading: 'Where e-commerce logistics breaks down',
        items: [
          'Orders sitting in a queue because dispatch is manual',
          'Inventory counts out of sync between your store and warehouse',
          'Customers getting no updates after they place an order',
          'Returns and exchanges handled in a completely separate system',
          'Carrier integrations that break every time a platform updates',
          'No single view of orders, inventory, and deliveries',
        ],
      }}
      features={[
        {
          title: 'Storefront to Dispatch in One Click',
          description:
            'Fleetbase Storefront connects directly to FleetOps. When a customer places an order, it flows automatically into your dispatch queue — no manual data entry, no delays, no errors.',
          icon: Store,
          screenshot: '/images/console-screenshots/fleetops-scheduler.webp',
          screenshotAlt: 'Storefront to Dispatch in One Click',
          screenshotNeeded: 'Storefront order panel — showing new orders auto-populating into FleetOps dispatch queue',
        },
        {
          title: 'Inventory Sync with Pallet WMS',
          description:
            'Keep your online store inventory in sync with your warehouse in real-time. When stock is picked and packed in Pallet, your Storefront product counts update automatically.',
          icon: Package,
          screenshot: '/images/console-screenshots/storefront-products-grid.webp',
          screenshotAlt: 'Inventory Sync with Pallet WMS',
          screenshotNeeded: 'Pallet WMS inventory view — showing stock levels synced with Storefront product listings',
        },
        {
          title: 'Automated Order Routing',
          description:
            'Route orders to the right warehouse, fulfillment centre, or carrier based on customer location, stock availability, and delivery SLA. Handle multi-location fulfillment without complexity.',
          icon: Zap,
          screenshot: '/images/console-screenshots/developers-monitoring-detail.webp',
          screenshotAlt: 'Automated Order Routing',
          screenshotNeeded: 'FleetOps order routing rules panel — showing warehouse selection logic',
        },
        {
          title: 'Customer Delivery Tracking',
          description:
            'Every order generates a live tracking link sent automatically at dispatch. Customers see real-time driver position, ETA, and delivery confirmation — reducing support tickets by up to 40%.',
          icon: ShoppingCart,
          screenshot: '/images/console-screenshots/fleetops-live-map-singapore.png',
          screenshotAlt: 'Customer Delivery Tracking',
          screenshotNeeded: 'Customer tracking page — branded with live map, ETA, and order summary',
        },
        {
          title: 'API & Platform Integrations',
          description:
            'Connect Fleetbase to Shopify, WooCommerce, Magento, or any custom platform via REST API and webhooks. Sync orders, inventory, and fulfilment status bidirectionally.',
          icon: Webhook,
          screenshot: '/images/console-screenshots/developers-api-keys.webp',
          screenshotAlt: 'API & Platform Integrations',
          screenshotNeeded: 'Fleetbase developer console — showing active Shopify webhook integration',
        },
        {
          title: 'Returns & Reverse Logistics',
          description:
            'Manage returns end-to-end — from customer return request to driver collection, warehouse receipt, and inventory restock. All tracked in the same system as your outbound orders.',
          icon: BarChart3,
          screenshot: '/images/console-screenshots/developers-monitoring-detail.webp',
          screenshotAlt: 'Returns & Reverse Logistics',
          screenshotNeeded: 'FleetOps return order flow — showing return request, driver collection, and warehouse receipt steps',
        },
      ]}
      testimonial={{
        quote:
          "We used to have three separate systems for our store, warehouse, and delivery. Fleetbase replaced all of them. Order errors dropped 45% in the first month.",
        author: 'Sarah K.',
        role: 'Head of Fulfilment',
        company: 'Bloom & Co.',
      }}
      faqs={[
        {
          q: 'Does Fleetbase integrate with Shopify or WooCommerce?',
          a: 'Yes. Fleetbase connects to Shopify, WooCommerce, Magento, and any platform with a REST API or webhook support. Orders, inventory, and fulfilment status sync bidirectionally.',
        },
        {
          q: 'Can Fleetbase handle multi-warehouse fulfilment?',
          a: 'Yes. You can configure multiple warehouses or fulfilment centres and set routing rules to determine which location fulfils each order based on stock availability, customer location, and SLA.',
        },
        {
          q: 'Does it support click-and-collect or in-store pickup?',
          a: 'Yes. Fleetbase Storefront supports click-and-collect order types with configurable pickup workflows and customer notification at each stage.',
        },
        {
          q: 'How does Fleetbase handle peak season volume?',
          a: 'Fleetbase scales horizontally on cloud infrastructure. The automated dispatch and routing engine handles high order volumes without manual intervention, making peak seasons manageable.',
        },
        {
          q: 'Can we use Fleetbase for our own delivery fleet and third-party carriers?',
          a: 'Yes. Fleetbase supports both own-fleet delivery (via FleetOps and Navigator) and third-party carrier integrations. You can mix both within the same order management workflow.',
        },
      ]}
      ctaHeading="Connect your store to your logistics operation"
      ctaBody="Stop managing orders in one system and deliveries in another. Fleetbase brings it all together — from checkout to doorstep."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
