import type { Metadata } from 'next';
import LedgerPageContent from './ledger-page-content';

export const metadata: Metadata = {
  title: 'Ledger — Financial Management | Fleetbase Platform',
  description: 'Fleetbase Ledger gives logistics operators full financial visibility — invoicing, revenue tracking, payment gateways, and chart of accounts.',
  keywords: 'fleetbase ledger, logistics financial management, fleet invoicing, delivery billing, logistics accounting',
  openGraph: {
    title: 'Ledger — Financial Management | Fleetbase Platform',
    description: 'Fleetbase Ledger gives logistics operators full financial visibility — invoicing, revenue tracking, payment gateways, and chart of accounts.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ledger — Financial Management | Fleetbase Platform',
    description: 'Fleetbase Ledger gives logistics operators full financial visibility — invoicing, revenue tracking, payment gateways, and chart of accounts.',
  },
};

export default function LedgerPage() {
  return <LedgerPageContent />;
}
