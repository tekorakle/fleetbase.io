import type { Metadata } from 'next';
import SignUpPageContent from './signup-page-content';

export const metadata: Metadata = {
  title: 'Create Your Account | Fleetbase',
  description: 'Create a free Fleetbase account and start building your logistics operations today.',
  keywords: 'fleetbase signup, create account, free logistics platform',
  openGraph: {
    title: 'Create Your Account | Fleetbase',
    description: 'Create a free Fleetbase account and start building your logistics operations today.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create Your Account | Fleetbase',
    description: 'Create a free Fleetbase account and start building your logistics operations today.',
  },
};

export default function SignUpPage() {
  return <SignUpPageContent />;
}
