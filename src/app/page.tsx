import type { Metadata } from 'next';

import { getGitHubStars } from '@/lib/github-stars';
import { OrganizationSchema, SoftwareApplicationSchema, WebSiteSchema } from '@/components/seo/json-ld';
import DeploymentOptions from '@/components/sections/deployment-options';
import FeaturesTabsSection from '@/components/sections/features-tabs';
import FinalCTA from '@/components/sections/final-cta';
import FleetOpsShowcase from '@/components/sections/fleetops-showcase';
import Hero from '@/components/sections/hero';
import IndustryUseCases from '@/components/sections/industry-use-cases';
import IntegrationsEcosystem from '@/components/sections/integrations-ecosystem';
import OpenSourceAdvantage from '@/components/sections/open-source-advantage';
import PlatformModules from '@/components/sections/platform-modules';
import StatsBar from '@/components/sections/stats-bar';

export const metadata: Metadata = {
  title: 'Fleetbase | Open-Source Logistics & Supply Chain Platform',
  description:
    'Fleetbase is the open-source logistics OS. Fleet management, e-commerce fulfillment, warehouse, and accounting — one platform, no per-driver fees, self-hosted or cloud.',
  keywords:
    'open source logistics platform, fleet management software, TMS software, transportation management system, delivery management, supply chain software, self hosted fleet management, open source logistics, last mile delivery software, route optimization software, warehouse management',
  alternates: {
    canonical: 'https://fleetbase.io',
  },
  openGraph: {
    title: 'Fleetbase | Open-Source Logistics & Supply Chain Platform',
    description:
      'Fleet management, e-commerce fulfillment, warehouse, and accounting — unified in one open-source platform. No per-driver fees. Self-hosted or cloud.',
    url: 'https://fleetbase.io',
    type: 'website',
  },
};

export default async function Home() {
  const stars = await getGitHubStars();
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <Hero />
      <StatsBar />
      <PlatformModules />
      <FleetOpsShowcase />
      <OpenSourceAdvantage stars={stars} />
      <FeaturesTabsSection />
      <IndustryUseCases />
      <IntegrationsEcosystem />
      <DeploymentOptions />
      <FinalCTA />
    </>
  );
}
