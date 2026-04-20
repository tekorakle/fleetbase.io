import type { Metadata } from 'next';
import OTPPageContent from './otp-page-content';

export const metadata: Metadata = {
  title: 'Verify Your Account | Fleetbase',
  description: 'Enter your one-time passcode to verify your Fleetbase account.',
  keywords: 'fleetbase login, otp verification, account access',
  openGraph: {
    title: 'Verify Your Account | Fleetbase',
    description: 'Enter your one-time passcode to verify your Fleetbase account.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify Your Account | Fleetbase',
    description: 'Enter your one-time passcode to verify your Fleetbase account.',
  },
};

export default function OTPPage() {
  return <OTPPageContent />;
}
