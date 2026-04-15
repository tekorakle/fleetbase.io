import type { Metadata } from 'next';
import { ClipboardList, Zap, FileCheck, Webhook, BarChart3, Settings } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Order Management Software | Fleetbase',
  description:
    'Configure, track, and fulfill any order type with custom workflows, fields, and statuses. Fleetbase\'s flexible order management system adapts to your exact logistics operation.',
  keywords: ['order management software', 'logistics order management', 'custom order workflows', 'order fulfillment platform', 'order tracking system'],
  openGraph: {
    title: 'Order Management Software | Fleetbase',
    description: 'Configure, track, and fulfill any order type with custom workflows and fields.',
  },
};

export default function OrderManagementPage() {
  return (
    <SolutionPageLayout
      badge="Use Case — Order Management"
      title={<>Every Order Type. <span className="text-gradient">Your Way.</span></>}
      description="Most order management systems force you to fit your operation into their rigid structure. Fleetbase is different — fully configurable order types, custom fields, custom statuses, and custom workflows that match exactly how your business works."
      stats={[
        { value: '100%', label: 'Configurable order workflows' },
        { value: '60%', label: 'Reduction in order processing time' },
        { value: '0', label: 'Code required for configuration' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-orders-table-detail.webp"
      heroScreenshotAlt="Fleetbase FleetOps order management table showing full order queue with custom columns and status filters"
      heroScreenshotNeeded="FleetOps order management view — order list with custom columns, statuses, and filter panel"
      painPoints={{
        heading: 'Why rigid order management holds you back',
        items: [
          'Your order types don\'t fit the fields the software provides',
          'Custom statuses require expensive development work',
          'Order workflows are hardcoded and cannot be changed',
          'No way to add compliance or business-specific fields',
          'Separate systems for different order types creating data silos',
          'Reporting limited to the metrics the vendor decided to include',
        ],
      }}
      features={[
        {
          title: 'Fully Configurable Order Types',
          description:
            'Create unlimited order types — each with its own fields, statuses, activity flows, and validation rules. Whether you handle standard deliveries, returns, collections, or complex multi-leg shipments, Fleetbase adapts to your operation.',
          icon: Settings,
          screenshot: '/images/console-screenshots/fleetops-order-config-activity-flow.webp',
          screenshotAlt: 'Fully Configurable Order Types',
          screenshotNeeded: 'FleetOps order config panel — order type builder with custom fields and status workflow editor',
        },
        {
          title: 'Custom Fields & Validation Rules',
          description:
            'Add any field type — text, number, date, dropdown, file upload, or signature — to any order type. Set validation rules to ensure data quality at order creation or completion.',
          icon: ClipboardList,
          screenshot: '/images/console-screenshots/fleetops-orders-table-detail.webp',
          screenshotAlt: 'Custom Fields & Validation Rules',
          screenshotNeeded: 'FleetOps custom field builder — showing field types, validation rules, and required/optional toggle',
        },
        {
          title: 'Automated Order Workflows',
          description:
            'Define what happens at each stage of an order — auto-assign to a driver, send a customer notification, trigger a webhook, or require a supervisor approval. Automate your entire order lifecycle.',
          icon: Zap,
          screenshot: '/images/console-screenshots/fleetops-order-config-activity-flow.webp',
          screenshotAlt: 'Automated Order Workflows',
          screenshotNeeded: 'FleetOps workflow builder — order lifecycle stages with automation rules and trigger conditions',
        },
        {
          title: 'Digital Proof of Completion',
          description:
            'Configure exactly what drivers must capture to complete each order type — signatures, photos, barcodes, custom form fields, or any combination. All evidence is stored against the order.',
          icon: FileCheck,
          screenshot: '/images/console-screenshots/fleetops-order-label.webp',
          screenshotAlt: 'Digital Proof of Completion',
          screenshotNeeded: 'FleetOps order completion config — showing required POD fields per order type',
        },
        {
          title: 'API & Webhook Integration',
          description:
            'Connect your order management to any upstream system — e-commerce platforms, ERPs, WMS, or customer portals — via REST API and webhooks. Orders flow in automatically and status updates flow back out.',
          icon: Webhook,
          screenshot: '/images/console-screenshots/fleetops-order-config-activity-flow.webp',
          screenshotAlt: 'API & Webhook Integration',
          screenshotNeeded: 'Fleetbase developer console — order webhook configuration with event types and payload preview',
        },
        {
          title: 'Order Analytics & SLA Tracking',
          description:
            'Track order volumes, completion rates, SLA performance, and exception rates by order type, zone, driver, or time period. Identify bottlenecks and optimize your fulfillment operation.',
          icon: BarChart3,
          screenshot: '/images/console-screenshots/fleetops-dashboard-metrics.webp',
          screenshotAlt: 'Order Analytics & SLA Tracking',
          screenshotNeeded: 'FleetOps analytics — order volume chart, SLA performance by order type, and exception rate trend',
        },
      ]}
      testimonial={{
        quote:
          "We have seven different order types — from standard deliveries to multi-leg pharmaceutical shipments. Fleetbase handles all of them in one system without any compromise.",
        author: 'Nadia F.',
        role: 'Head of Logistics Technology',
        company: 'Meridian Supply Chain',
      }}
      faqs={[
        {
          q: 'How many order types can I create in Fleetbase?',
          a: 'There is no limit on the number of order types you can create. Each order type is fully independent with its own fields, statuses, workflows, and completion requirements.',
        },
        {
          q: 'Can I import orders from an external system?',
          a: 'Yes. Fleetbase accepts order imports via CSV, REST API, and webhooks. Most operations connect their existing order management or e-commerce systems via the API for automatic order ingestion.',
        },
        {
          q: 'Can I create custom order statuses?',
          a: 'Yes. Every order type can have its own set of custom statuses. You define the status names, the allowed transitions between them, and any automation rules triggered at each status change.',
        },
        {
          q: 'Does Fleetbase support multi-leg or multi-stop orders?',
          a: 'Yes. Orders can have multiple waypoints, each with their own completion requirements, time windows, and assigned drivers. Multi-leg shipments are tracked end-to-end.',
        },
        {
          q: 'Can I set SLA targets per order type?',
          a: 'Yes. SLA targets can be configured per order type and priority level. The system tracks SLA performance in real-time and alerts dispatchers when orders are at risk of breaching their SLA.',
        },
      ]}
      ctaHeading="Build the order management system your operation actually needs"
      ctaBody="Stop compromising on rigid software. Fleetbase gives you fully configurable order types, workflows, and fields — no code required."
      ctaPrimary="Start Free Trial"
      ctaPrimaryHref="https://console.fleetbase.io/onboard"
      ctaSecondary="Book a Demo"
      ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
    />
  );
}
