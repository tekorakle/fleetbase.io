import type { Metadata } from 'next';
import DownloadPageContent from './download-page-content';

export const metadata: Metadata = {
  title: 'Download Fleetbase | Self-Hosted Open-Source Logistics',
  description: 'Download and self-host Fleetbase on your own infrastructure. Docker, Kubernetes, and bare-metal deployment guides included.',
  keywords: 'download fleetbase, self hosted fleet management, open source logistics download, docker fleet management',
  openGraph: {
    title: 'Download Fleetbase | Self-Hosted Open-Source Logistics',
    description: 'Download and self-host Fleetbase on your own infrastructure. Docker, Kubernetes, and bare-metal deployment guides included.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Fleetbase | Self-Hosted Open-Source Logistics',
    description: 'Download and self-host Fleetbase on your own infrastructure. Docker, Kubernetes, and bare-metal deployment guides included.',
  },
};

export default function DownloadPage() {
  return <DownloadPageContent />;
}
