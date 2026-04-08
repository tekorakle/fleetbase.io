import type { Metadata } from 'next';
import { Shield, Lock, MapPin, ClipboardList, Server, BarChart3 } from 'lucide-react';
import SolutionPageLayout from '@/components/solutions/solution-page-layout';

export const metadata: Metadata = {
  title: 'Military & Government Logistics Software | Fleetbase',
  description:
    'Secure, self-hostable logistics platform for military and government operations. Air-gapped deployment, end-to-end encryption, role-based access, and full audit trails for defense and public sector logistics.',
  keywords: ['military logistics software', 'government fleet management', 'defense logistics platform', 'secure logistics software', 'battle management logistics'],
  openGraph: {
    title: 'Military & Government Logistics Software | Fleetbase',
    description: 'Secure, self-hostable logistics for military and government operations.',
  },
};

export default function GovernmentPage() {
  return (
    <SolutionPageLayout
      badge="Military & Government"
      title={<>Mission-Critical Logistics. <span className="text-gradient">Secure. Sovereign. Reliable.</span></>}
      description="Fleetbase provides military and government operators with a self-hostable, air-gap capable logistics platform featuring end-to-end encryption, role-based access controls, and full audit trails — built on open-source infrastructure you own completely."
      stats={[
        { value: '100%', label: 'Self-hostable — no vendor lock-in' },
        { value: 'Air-gap', label: 'Capable deployment option' },
        { value: 'SOC 2', label: 'Security compliance ready' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
      heroScreenshot="/images/console-screenshots/fleetops-live-map.webp"
      heroScreenshotAlt="Fleetbase FleetOps live map showing government fleet operations with real-time vehicle tracking"
      heroScreenshotNeeded="FleetOps live map — government fleet operations with classified zone indicators and secure access panel"
      painPoints={{
        heading: 'The security and operational gaps in legacy systems',
        items: [
          'Logistics data stored on third-party cloud servers outside your control',
          'No ability to deploy in air-gapped or classified environments',
          'Insufficient audit trails for accountability and compliance',
          'Role-based access too coarse-grained for operational security',
          'Vendor lock-in with no access to source code',
          'Legacy systems unable to integrate with modern C2 or ERP platforms',
        ],
      }}
      features={[
        {
          title: 'Self-Hosted & Air-Gap Capable Deployment',
          description:
            'Fleetbase is fully open-source and can be deployed on your own infrastructure — on-premise, private cloud, or in air-gapped environments with no external network dependencies. You own the code, the data, and the deployment.',
          icon: Server,
          screenshotNeeded: 'Fleetbase self-hosted deployment architecture diagram — showing on-premise and air-gap options',
        },
        {
          title: 'End-to-End Encryption & Data Sovereignty',
          description:
            'All data is encrypted at rest and in transit. No data leaves your infrastructure. Fleetbase supports bring-your-own-key (BYOK) encryption for maximum data sovereignty.',
          icon: Lock,
          screenshotNeeded: 'Fleetbase security settings — encryption status, key management, and data residency options',
        },
        {
          title: 'Granular Role-Based Access Control',
          description:
            'Define precise access permissions per user, role, and resource. Restrict visibility of sensitive routes, assets, or personnel data to authorised personnel only. Supports multi-level security classifications.',
          icon: Shield,
          screenshotNeeded: 'Fleetbase RBAC panel — showing role hierarchy with granular permission toggles',
        },
        {
          title: 'Full Audit Trail & Chain of Custody',
          description:
            'Every action in the platform — order creation, status change, access event, or data export — is logged with user identity, timestamp, and IP address. Immutable audit logs for accountability and compliance.',
          icon: ClipboardList,
          screenshotNeeded: 'Fleetbase audit log — showing timestamped events with user identity and action type',
        },
        {
          title: 'Real-Time Asset & Fleet Tracking',
          description:
            'Track vehicles, assets, and personnel on a live operational map. Configure geofences, restricted zones, and automated alerts for boundary violations or status changes.',
          icon: MapPin,
          screenshotNeeded: 'FleetOps live map — government asset tracking with restricted zone geofences',
        },
        {
          title: 'Operational Reporting & Intelligence',
          description:
            'Generate mission readiness reports, asset utilization analyses, and logistics performance dashboards. Export in standard formats for command reporting or integration with existing C2 systems.',
          icon: BarChart3,
          screenshotNeeded: 'FleetOps analytics — operational readiness dashboard with asset availability and mission metrics',
        },
      ]}
      testimonial={{
        quote:
          "The ability to self-host in our own secure environment was non-negotiable. Fleetbase was the only open-source platform that met our security requirements out of the box.",
        author: 'Col. R. Davies',
        role: 'Director of Logistics',
        company: 'Government Logistics Command',
      }}
      faqs={[
        {
          q: 'Can Fleetbase be deployed in a fully air-gapped environment?',
          a: 'Yes. Fleetbase is fully open-source and can be deployed on-premise with no external network dependencies. All required dependencies can be bundled for air-gapped installation.',
        },
        {
          q: 'What security certifications does Fleetbase support?',
          a: 'Fleetbase is designed to support SOC 2, GDPR, HIPAA, and ISO 27001 compliance requirements. Enterprise deployments include security documentation and BAA agreements where applicable.',
        },
        {
          q: 'Can we integrate Fleetbase with our existing C2 or ERP systems?',
          a: 'Yes. Fleetbase has a full REST API and webhook system. Custom integrations with command and control systems, ERPs, and other government platforms can be built using the API or via the Extensions framework.',
        },
        {
          q: 'Is the source code available for security review?',
          a: 'Yes. Fleetbase is fully open-source on GitHub. Government and defense customers can conduct full source code reviews and security audits before deployment.',
        },
        {
          q: 'Does Fleetbase support multi-classification data handling?',
          a: 'Role-based access controls and data segmentation allow different classification levels to be managed within the platform. Custom security configurations are available for enterprise and government deployments.',
        },
      ]}
      ctaHeading="Secure logistics infrastructure you own completely"
      ctaBody="Military and government operators choose Fleetbase for its open-source transparency, self-hosted deployment, and enterprise-grade security. Talk to our team about your requirements."
      ctaPrimary="Talk to Sales"
      ctaPrimaryHref="/contact/sales"
      ctaSecondary="View on GitHub"
      ctaSecondaryHref="https://github.com/fleetbase/fleetbase"
    />
  );
}
