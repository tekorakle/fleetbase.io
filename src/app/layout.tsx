import './globals.css';

import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata } from 'next';
import { Azeret_Mono, DM_Sans, Space_Grotesk } from 'next/font/google';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const azeretMono = Azeret_Mono({
  variable: '--font-azeret-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Fleetbase — Open-Source Logistics & Operations OS',
    template: '%s | Fleetbase',
  },
  description:
    'Fleetbase is the #1 open-source logistics and operations platform. Self-host or use cloud. Manage fleets, dispatch drivers, run storefronts, and automate supply chains — all in one modular OS.',
  keywords: [
    'open source logistics',
    'open source fleet management',
    'logistics platform',
    'fleet management software',
    'open source dispatch',
    'supply chain management',
    'last mile delivery',
    'logistics OS',
    'Fleetbase',
    'FleetOps',
    'self-hosted logistics',
    'logistics API',
    'fleet tracking',
  ],
  authors: [{ name: 'Fleetbase' }],
  creator: 'Fleetbase',
  publisher: 'Fleetbase',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: 'Fleetbase — Open-Source Logistics & Operations OS',
    description:
      'The #1 open-source logistics platform. Manage fleets, dispatch drivers, run storefronts, and automate supply chains.',
    siteName: 'Fleetbase',
    images: [
      {
        url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/og-image_1c8c9702.jpeg',
        width: 1200,
        height: 630,
        alt: 'Fleetbase — Open-Source Logistics OS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleetbase — Open-Source Logistics & Operations OS',
    description:
      'The #1 open-source logistics platform. Manage fleets, dispatch drivers, run storefronts, and automate supply chains.',
    images: ['https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/og-image_1c8c9702.jpeg'],
    creator: '@fleetbase_io',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*17)]',
          spaceGrotesk.variable,
          dmSans.variable,
          azeretMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <RootProvider
            search={{
              options: {
                type: 'static',
              },
            }}
          >
            {/* Background Blur */}
            <div className="bg-background/10 absolute inset-0 z-[-2] backdrop-blur-[85px] will-change-transform md:backdrop-blur-[170px]" />
            {/* Noise Background */}
            <div
              className="absolute inset-0 z-[-1] size-full opacity-70 mix-blend-overlay dark:md:opacity-100"
              style={{
                background: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/noise_73f0de7f.webp) lightgray 0% 0% / 83.69px 83.69px repeat`,
              }}
            />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
