import type { Metadata } from 'next';
import SecurityCompliancePageContent from './security-page-content';

export const metadata: Metadata = {
  title: 'Security & Compliance — RBAC, Encryption & Audit Logs | Fleetbase',
  description:
    'Enterprise-grade security for logistics operations. End-to-end encryption, granular RBAC, MFA, comprehensive audit logs, GDPR compliance, and full self-hosting for data sovereignty.',
  keywords: [
    'Fleetbase security',
    'logistics platform security',
    'IAM access control',
    'role-based access control logistics',
    'RBAC fleet management',
    'GDPR logistics software',
    'SOC 2 logistics platform',
    'self-hosted logistics security',
    'API key management',
    'audit logs fleet management',
    'data encryption logistics',
    'open-source security logistics',
  ],
  openGraph: {
    title: 'Security & Compliance | Fleetbase',
    description:
      'End-to-end encryption, granular RBAC, MFA, audit logs, and full self-hosting for complete data sovereignty.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security & Compliance | Fleetbase',
    description:
      'Enterprise-grade security built into every layer — encryption, RBAC, audit logs, and self-hosting for total control.',
  },
};

export default function SecurityCompliancePage() {
  return <SecurityCompliancePageContent />;
}
