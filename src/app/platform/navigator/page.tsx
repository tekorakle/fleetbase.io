import type { Metadata } from 'next';
import NavigatorPageContent from './navigator-page-content';

export const metadata: Metadata = {
  title: 'Navigator — Open-Source Driver App | Fleetbase',
  description:
    'Navigator is Fleetbase\'s open-source mobile app for drivers. Real-time dispatch, turn-by-turn navigation, proof of delivery, and offline support — available on iOS and Android.',
  keywords: [
    'driver app',
    'open source driver app',
    'fleet driver app',
    'proof of delivery app',
    'last mile delivery app',
    'Navigator Fleetbase',
    'white-label driver app',
    'iOS Android driver app',
  ],
  openGraph: {
    title: 'Navigator — Open-Source Driver App | Fleetbase',
    description:
      'Open-source iOS and Android driver app with live dispatch, turn-by-turn navigation, proof of delivery, and offline-first operation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navigator — Open-Source Driver App | Fleetbase',
    description:
      'Free, white-label driver app for iOS and Android. Connects natively to Fleet-Ops dispatch.',
  },
};

export default function NavigatorPage() {
  return <NavigatorPageContent />;
}
