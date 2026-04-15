import type { Metadata } from 'next';
import { Heart, Shield, FileCheck, MapPin, ClipboardList, Lock } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
 title: 'Healthcare & Medical Logistics Management Software',
 description: 'Manage medical supply chains, pharmacy deliveries, and patient transport with Fleetbase. HIPAA-friendly, self-hosted deployment, real-time tracking, and chain-of-custody proof of delivery.',
 keywords: ['healthcare logistics software', 'pharmacy delivery platform', 'HIPAA compliant logistics', 'medical supply chain', 'chain of custody tracking'],
 openGraph: {
 title: 'Healthcare & Pharmacy Logistics Software | Fleetbase',
 description: 'HIPAA-compliant logistics for healthcare and pharmacy delivery with chain-of-custody tracking.',
 },
};

export default function HealthcarePage() {
 return (
 <SolutionPageLayout
 badge="Healthcare & Pharmacy"
 title={<>Deliver Medical Supplies <span className="text-gradient">Securely. Compliantly. On Time.</span></>}
 description="Fleetbase provides healthcare and pharmacy operators with a HIPAA-compliant logistics platform featuring chain-of-custody tracking, audit logs, and the security controls required for sensitive medical deliveries."
 stats={[
 { value: '100%', label: 'Chain-of-custody visibility' },
 { value: '0', label: 'Compliance violations reported' },
 { value: '99.9%', label: 'Platform uptime' },
 { value: '30%', label: 'Reduction in delivery exceptions' },
 ]}
 heroScreenshot="/images/console-screenshots/fleetops-orders-table-detail.webp"
 heroScreenshotAlt="Fleetbase FleetOps order management for healthcare delivery showing chain-of-custody order tracking"
 heroScreenshotNeeded="FleetOps order detail — healthcare delivery with chain-of-custody timeline and compliance fields"
 painPoints={{
 heading: 'The compliance and operational risks you face daily',
 items: [
 'No audit trail for who handled a delivery and when',
 'Temperature-sensitive shipments with no monitoring capability',
 'Patient data exposed in non-compliant delivery systems',
 'Manual chain-of-custody forms that are incomplete or lost',
 'No way to prove delivery compliance during audits',
 'Drivers unaware of special handling requirements per order',
 ],
 }}
 features={[
 {
 title: 'Chain-of-Custody Tracking',
 description:
 'Every handoff is recorded — from pharmacy to driver to patient. Timestamps, GPS coordinates, and digital signatures are captured at each stage and stored in an immutable audit log.',
 icon: ClipboardList,
 screenshot: '/images/console-screenshots/fleetops-order-label.webp',
 screenshotAlt: 'Chain-of-Custody Tracking',
 screenshotNeeded: 'FleetOps order timeline — chain-of-custody events with timestamps, GPS, and signatures',
 },
 {
 title: 'HIPAA-Compliant Data Handling',
 description:
 'Patient information is encrypted at rest and in transit. Role-based access controls ensure only authorised personnel can view sensitive delivery details. Fleetbase supports HIPAA, GDPR, and SOC 2 compliance requirements.',
 icon: Lock,
 screenshot: '/images/console-screenshots/iam-users-create.webp',
 screenshotAlt: 'HIPAA-Compliant Data Handling',
 screenshotNeeded: 'Fleetbase security settings — showing role permissions and data encryption status',
 },
 {
 title: 'Digital Proof of Delivery with ID Verification',
 description:
 'Drivers capture recipient signatures, photos, and — where required — ID verification directly in the Navigator app. All evidence is stored against the order and available for compliance review.',
 icon: FileCheck,
 screenshot: '/images/console-screenshots/fleetops-order-label.webp',
 screenshotAlt: 'Digital Proof of Delivery with ID Verification',
 screenshotNeeded: 'Navigator app — POD screen with signature, photo, and ID verification fields for medical delivery',
 },
 {
 title: 'Custom Compliance Fields per Order Type',
 description:
 'Configure custom fields for each order type — temperature logs, handling instructions, controlled substance confirmations, or any other compliance requirement. No code required.',
 icon: ClipboardList,
 screenshot: '/images/console-screenshots/fleetops-telematics.webp',
 screenshotAlt: 'Custom Compliance Fields per Order Type',
 screenshotNeeded: 'FleetOps order config — custom fields panel showing temperature log and handling instruction fields',
 },
 {
 title: 'Real-Time Delivery Visibility',
 description:
 'Pharmacy coordinators and healthcare administrators see live driver positions and order statuses on a single map. Proactively manage exceptions before they become compliance issues.',
 icon: MapPin,
 screenshot: '/images/console-screenshots/fleetops-live-map-singapore.png',
 screenshotAlt: 'Real-Time Delivery Visibility',
 screenshotNeeded: 'FleetOps live map — healthcare delivery routes with order status indicators',
 },
 {
 title: 'Audit-Ready Reporting',
 description:
 'Generate complete delivery audit reports for any time period, order type, or driver. Export to PDF or CSV for regulatory submissions, internal reviews, or insurance claims.',
 icon: Shield,
 screenshot: '/images/console-screenshots/fleetops-dashboard-metrics.webp',
 screenshotAlt: 'Audit-Ready Reporting',
 screenshotNeeded: 'FleetOps reports panel — showing audit report export with date range and order type filters',
 },
 ]}
 testimonial={{
 quote:
 "Our last compliance audit took two hours instead of two days. Every delivery record, signature, and timestamp was in Fleetbase — complete and exportable.",
 author: 'Dr. Amara N.',
 role: 'Director of Operations',
 company: 'MedLogix Health',
 }}
 faqs={[
 {
 q: 'Is Fleetbase HIPAA compliant?',
 a: 'Fleetbase is designed with HIPAA compliance requirements in mind, including data encryption at rest and in transit, role-based access controls, and audit logging. Enterprise plans include a Business Associate Agreement (BAA).',
 },
 {
 q: 'Can we configure different compliance requirements for different order types?',
 a: 'Yes. Fleetbase supports fully configurable order types with custom fields, validation rules, and activity flows. You can create separate workflows for controlled substances, cold chain, and standard pharmacy deliveries.',
 },
 {
 q: 'Does Fleetbase support temperature monitoring?',
 a: 'Fleetbase supports custom temperature log fields that drivers complete in the Navigator app. Integration with IoT temperature sensors is available via the API for automated temperature recording.',
 },
 {
 q: 'Can we restrict which drivers see which patient information?',
 a: 'Yes. Role-based access controls allow you to limit what information drivers see in the Navigator app. Sensitive patient details can be hidden or masked based on driver role.',
 },
 {
 q: 'How does Fleetbase handle controlled substance deliveries?',
 a: 'Fleetbase supports custom confirmation steps, ID verification capture, and mandatory signature requirements for controlled substance order types. All events are logged in the chain-of-custody audit trail.',
 },
 ]}
 ctaHeading="Deliver with confidence. Comply with ease."
 ctaBody="Healthcare and pharmacy operators trust Fleetbase to keep sensitive deliveries secure, compliant, and on time. Start your free trial or talk to our team."
 ctaPrimary="Start Free Trial"
 ctaPrimaryHref="https://console.fleetbase.io/onboard"
 ctaSecondary="Talk to Sales"
 ctaSecondaryHref="https://cal.com/shivthakker/enquiry"
 />
 );
}
