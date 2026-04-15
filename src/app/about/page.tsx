import type { Metadata } from 'next';
import AboutHero from '@/components/sections/about-hero';
import AboutNews from '@/components/sections/about-news';
import AboutTeam from '@/components/sections/about-team';
import Features from '@/components/sections/features';

export const metadata: Metadata = {
  title: 'About Fleetbase | Open-Source Logistics Platform',
  description: 'Learn about Fleetbase — the open-source logistics and fleet management platform built by operators and enterprise technologists.',
  keywords: 'about fleetbase, fleetbase team, open source logistics, fleet management founders',
  openGraph: {
    title: 'About Fleetbase | Open-Source Logistics Platform',
    description: 'Learn about Fleetbase — the open-source logistics and fleet management platform built by operators and enterprise technologists.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Fleetbase | Open-Source Logistics Platform',
    description: 'Learn about Fleetbase — the open-source logistics and fleet management platform built by operators and enterprise technologists.',
  },
};
export default function AboutPage() {
 return (
 <>
 <AboutHero />

 <AboutTeam />
 <AboutNews />
 <Features className="section-padding" />
 </>
 );
}
