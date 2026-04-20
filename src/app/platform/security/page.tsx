import type { Metadata } from 'next';
import SecurityCompliancePageContent from './security-page-content';

export const metadata: Metadata = {
  title: 'Security & IAM | Fleetbase Platform',
  description: 'Enterprise-grade security for your logistics operations. Role-based access control, multi-tenant isolation, API key management, and audit logs.',
  keywords: 'fleetbase security, IAM, role based access control, logistics security, fleet management RBAC',
  openGraph: {
    title: 'Security & IAM | Fleetbase Platform',
    description: 'Enterprise-grade security for your logistics operations. Role-based access control, multi-tenant isolation, API key management, and audit logs.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security & IAM | Fleetbase Platform',
    description: 'Enterprise-grade security for your logistics operations. Role-based access control, multi-tenant isolation, API key management, and audit logs.',
  },
};

export default function SecurityCompliancePage() {
  return <SecurityCompliancePageContent />;
}
