import type { Metadata } from 'next';
import { Ship, MapPin, ClipboardList, BarChart3, Webhook, Shield } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
 title: 'Container & Port Logistics Software | Fleetbase',
 description:
 'Track containers from port to destination with real-time visibility, customs documentation management, and end-to-end supply chain control. Open-source container logistics platform.',
 keywords: ['container logistics software', 'port logistics platform', 'container tracking system', 'freight forwarding software', 'intermodal logistics'],
 openGraph: {
 title: 'Container & Port Logistics Software | Fleetbase',
 description: 'Track containers from port to destination with real-time visibility and supply chain control.',
 },
};

export default function ContainerOperationsPage() {
 return (
 <SolutionPageLayout
 badge="Container Operations"
 title={<>Full Visibility. <span className="text-gradient">Port to Destination.</span></>}
 description="Fleetbase gives container and port logistics operators real-time container tracking, customs documentation workflows, and end-to-end supply chain visibility — from vessel arrival to final delivery."
 stats={[
 { value: '100%', label: 'Container visibility end-to-end' },
 { value: '40%', label: 'Reduction in documentation errors' },
 { value: '3×', label: 'Faster customs clearance workflows' },
 { value: '99.9%', label: 'Platform uptime' },
 ]}
 heroScreenshot="/images/console-screenshots/fleetops-orders-table-detail.webp"
 heroScreenshotAlt="Fleetbase FleetOps container operations order list showing port logistics and container tracking"
 heroScreenshotNeeded="FleetOps live map — container shipments tracked from port with status indicators and ETA"
 painPoints={{
 heading: 'Where container operations lose control',
 items: [
 'Containers sitting at port with no visibility into their status',
 'Customs documentation managed across email and spreadsheets',
 'No single view of all containers across multiple shipments',
 'Demurrage charges accumulating because of slow clearance workflows',
 'Last-mile delivery disconnected from port operations',
 'Clients demanding real-time tracking you cannot provide',
 ],
 }}
 features={[
 {
 title: 'End-to-End Container Tracking',
 description:
 'Track every container from vessel arrival through port handling, customs clearance, and final delivery. Every status update, location change, and handoff is recorded in real-time.',
 icon: Ship,
 screenshot: '/images/console-screenshots/fleetops-live-map-singapore.png',
 screenshotAlt: 'End-to-End Container Tracking',
 screenshotNeeded: 'FleetOps container tracking view — shipment timeline from vessel arrival to delivery with status stages',
 },
 {
 title: 'Live Map Visibility',
 description:
 'See all active containers and transport vehicles on a single live map. Monitor port dwell times, truck positions, and delivery ETAs from one operations dashboard.',
 icon: MapPin,
 screenshot: '/images/console-screenshots/fleetops-live-map-singapore.png',
 screenshotAlt: 'Live Map Visibility',
 screenshotNeeded: 'FleetOps live map — container trucks at port and in transit with container IDs visible',
 },
 {
 title: 'Customs & Documentation Workflows',
 description:
 'Configure customs clearance workflows with required document checklists, approval steps, and automated notifications. Reduce clearance time and eliminate documentation errors.',
 icon: ClipboardList,
 screenshot: '/images/console-screenshots/fleetops-order-config-activity-flow.webp',
 screenshotAlt: 'Customs & Documentation Workflows',
 screenshotNeeded: 'FleetOps order workflow — customs clearance steps with document upload and approval status',
 },
 {
 title: 'Multi-Modal Shipment Management',
 description:
 'Manage intermodal shipments across sea, rail, and road from a single platform. Track handoffs between transport modes and maintain a complete chain-of-custody for every container.',
 icon: Shield,
 screenshot: '/images/console-screenshots/fleetops-orders-table-detail.webp',
 screenshotAlt: 'Multi-Modal Shipment Management',
 screenshotNeeded: 'FleetOps shipment detail — multi-modal journey showing sea, rail, and road legs',
 },
 {
 title: 'API Integration with Port & Carrier Systems',
 description:
 'Connect Fleetbase to port management systems, shipping line APIs, and customs platforms via REST API and webhooks. Automate status updates and document exchanges without manual entry.',
 icon: Webhook,
 screenshot: '/images/console-screenshots/developers-api-keys.webp',
 screenshotAlt: 'API Integration with Port & Carrier Systems',
 screenshotNeeded: 'Fleetbase developer console — showing active port system and carrier API integrations',
 },
 {
 title: 'Demurrage & Detention Analytics',
 description:
 'Track container dwell times, identify bottlenecks causing demurrage charges, and report on port performance. Reduce detention costs with proactive visibility into at-risk containers.',
 icon: BarChart3,
 screenshot: '/images/console-screenshots/fleetops-dashboard-metrics.webp',
 screenshotAlt: 'Demurrage & Detention Analytics',
 screenshotNeeded: 'FleetOps analytics — container dwell time chart with demurrage risk indicators',
 },
 ]}
 testimonial={{
 quote:
 "We reduced our average customs clearance time from 4 days to 1.5 days by digitizing the documentation workflow in Fleetbase. The demurrage savings alone were significant.",
 author: 'Carlos M.',
 role: 'Logistics Director',
 company: 'Pacific Freight Solutions',
 }}
 faqs={[
 {
 q: 'Can Fleetbase integrate with port management systems?',
 a: 'Yes. Fleetbase has a REST API and webhook system that connects to port management systems, shipping line APIs, and customs platforms. Custom integrations can be built using the API.',
 },
 {
 q: 'Does Fleetbase support multi-modal shipment tracking?',
 a: 'Yes. You can configure multi-leg shipments covering sea, rail, and road transport. Each leg has its own tracking, status updates, and documentation requirements.',
 },
 {
 q: 'How does Fleetbase handle customs documentation?',
 a: 'Fleetbase supports configurable document checklists and approval workflows per order type. Required documents can be uploaded directly in the console or via the API, and approvals are tracked with timestamps.',
 },
 {
 q: 'Can clients track their own containers?',
 a: 'Yes. Each shipment can have a shareable tracking link that gives clients real-time visibility into their container status without requiring a Fleetbase login.',
 },
 {
 q: 'Does Fleetbase support dangerous goods or hazmat container tracking?',
 a: 'Yes. Custom order types can be configured with mandatory compliance fields, handling instructions, and documentation requirements for dangerous goods or hazmat shipments.',
 },
 ]}
 ctaHeading="Take control of your container operations"
 ctaBody="Port-to-destination visibility, customs workflow automation, and real-time tracking — all on one open-source platform. Start your free trial today."
 ctaPrimary="Start Free Trial"
 ctaPrimaryHref="https://console.fleetbase.io/onboard"
 ctaSecondary="Talk to Sales"
 ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
 />
 );
}
