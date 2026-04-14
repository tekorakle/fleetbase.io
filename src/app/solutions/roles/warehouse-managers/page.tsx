import type { Metadata } from 'next';
import { Package, BarChart3, Zap, ClipboardList, Truck, Smartphone } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Warehouse Management Software | Fleetbase',
  description:
    'Connect your warehouse to your delivery operation with Fleetbase Pallet WMS. Manage inventory, pick-and-pack workflows, and outbound dispatch from one integrated platform.',
  keywords: ['warehouse management software', 'WMS for logistics', 'inventory management platform', 'pick and pack software', 'warehouse to delivery integration'],
  openGraph: {
    title: 'Warehouse Management Software | Fleetbase',
    description: 'Connect your warehouse to your delivery operation with Pallet WMS.',
  },
};

export default function WarehouseManagersPage() {
  return (
    <SolutionPageLayout
      badge="For Warehouse Managers"
      title={<>From Warehouse to Doorstep. <span className="text-gradient">One Connected System.</span></>}
      description="Warehouse managers need inventory accuracy, efficient pick-and-pack workflows, and seamless handoff to delivery — without manual data entry between systems. Fleetbase Pallet WMS connects your warehouse directly to your dispatch operation."
      stats={[
        { value: '45%', label: 'Reduction in pick errors' },
        { value: '60%', label: 'Faster order fulfillment' },
        { value: '100%', label: 'Real-time inventory accuracy' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-orders-table-detail.webp"
      heroScreenshotAlt="Fleetbase FleetOps order table for warehouse managers showing outbound order queue and fulfilment status"
      heroScreenshotNeeded="Pallet WMS dashboard — inventory overview with stock levels, pending picks, and outbound order queue"
      painPoints={{
        heading: 'Where warehouse operations lose efficiency',
        items: [
          'Inventory counts out of sync between warehouse and ordering systems',
          'Pick lists printed on paper and prone to errors',
          'Orders fulfilled but not automatically pushed to dispatch',
          'No visibility into where an order is in the fulfillment process',
          'Returns processed in a completely separate system',
          'Warehouse KPIs tracked manually in spreadsheets',
        ],
      }}
      features={[
        {
          title: 'Real-Time Inventory Management',
          description:
            'Track stock levels, locations, and movements in real-time across your warehouse. Receive low-stock alerts, manage bin locations, and maintain accurate inventory counts without manual reconciliation.',
          icon: Package,
          screenshotNeeded: 'Pallet WMS inventory panel — stock list with bin locations, quantities, and low-stock alerts',
        },
        {
          title: 'Digital Pick-and-Pack Workflows',
          description:
            'Generate optimized pick lists automatically when orders are received. Pickers use the Pallet mobile app to scan items, confirm picks, and flag discrepancies — eliminating paper pick lists and reducing errors.',
          icon: ClipboardList,
          screenshotNeeded: 'Pallet mobile app — pick list with item scan confirmation and bin location navigation',
        },
        {
          title: 'Automatic Dispatch Integration',
          description:
            'When an order is packed and ready, it automatically flows into FleetOps for dispatch assignment. No manual data entry, no delay between fulfillment and delivery dispatch.',
          icon: Zap,
          screenshotNeeded: 'Pallet to FleetOps handoff — packed order automatically appearing in dispatch queue',
        },
        {
          title: 'Outbound Order Management',
          description:
            'Manage the full outbound order lifecycle — from order receipt to pick, pack, dispatch, and delivery confirmation — in one connected system. Every stage is tracked and visible in real-time.',
          icon: Truck,
          screenshotNeeded: 'Pallet order management — outbound order list with fulfillment stage indicators',
        },
        {
          title: 'Returns & Reverse Logistics',
          description:
            'Process returns end-to-end in the same system as outbound orders. Receive returned items, inspect and restock, and update inventory automatically. Complete return history per order.',
          icon: Smartphone,
          screenshotNeeded: 'Pallet returns panel — return receipt workflow with condition assessment and restock action',
        },
        {
          title: 'Warehouse Performance Analytics',
          description:
            'Track pick accuracy, order fulfillment time, throughput per picker, and inventory turnover. Identify bottlenecks in your warehouse workflow and optimize staffing and layout decisions.',
          icon: BarChart3,
          screenshotNeeded: 'Pallet analytics — pick accuracy rate, fulfillment time trend, and throughput by picker',
        },
      ]}
      testimonial={{
        quote:
          "Our pick error rate dropped from 4% to under 0.5% after switching to Pallet. And because it connects directly to FleetOps, our dispatch team gets orders the moment they're packed.",
        author: 'Sandra O.',
        role: 'Warehouse Operations Manager',
        company: 'Clearview Distribution',
      }}
      faqs={[
        {
          q: 'Does Pallet WMS support barcode and QR code scanning?',
          a: 'Yes. The Pallet mobile app supports barcode and QR code scanning for item picking, receiving, and stock counting. Any standard barcode format is supported.',
        },
        {
          q: 'Can Pallet manage multiple warehouse locations?',
          a: 'Yes. Pallet supports multi-location warehouse management with separate bin structures, inventory pools, and fulfillment rules per location.',
        },
        {
          q: 'How does the Pallet to FleetOps integration work?',
          a: 'When an order is marked as packed in Pallet, it automatically creates a dispatch job in FleetOps. The dispatch team can then assign a driver and the order flows through the delivery workflow.',
        },
        {
          q: 'Does Pallet integrate with our e-commerce platform?',
          a: 'Yes. Pallet connects to Shopify, WooCommerce, and other platforms via the Fleetbase API. Orders flow in automatically and inventory levels sync back to your store in real-time.',
        },
        {
          q: 'Can we use Pallet without FleetOps?',
          a: 'Yes. Pallet WMS can be used as a standalone warehouse management system. The FleetOps integration is optional and can be enabled when you are ready to connect your warehouse to your delivery operation.',
        },
      ]}
      ctaHeading="Connect your warehouse to your delivery operation"
      ctaBody="Accurate inventory, digital pick-and-pack, and automatic dispatch integration — all in one connected platform. Start your free trial today."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="/trial"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="/contact/sales"
    />
  );
}
