import type { Metadata } from 'next';
import OrderConfigShowcase from '@/components/sections/order-config-showcase';
import Features from '@/components/sections/features';
import FeaturesTabsSection from '@/components/sections/features-tabs';
import Features2 from '@/components/sections/features2';
import Hero from '@/components/sections/hero';
import IntegrationsEcosystem from '@/components/sections/integrations-ecosystem';
import DeploymentOptions from '@/components/sections/deployment-options';
import StatsBar from '@/components/sections/stats-bar';
import ProblemSolution from '@/components/sections/problem-solution';
import IndustryUseCases from '@/components/sections/industry-use-cases';
import FinalCTA from '@/components/sections/final-cta';
import LedgerShowcase from '@/components/sections/ledger-showcase';
import { OrganizationSchema, SoftwareApplicationSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
 title: 'Fleetbase | Open-Source Fleet Management & TMS Software',
 description:
 'Fleetbase is open-source fleet management and TMS software. Dispatch, track, and optimize your fleet in real time. Self-hosted or cloud — free to start, no per-seat pricing.',
 alternates: {
 canonical: 'https://fleetbase.io',
 },
 openGraph: {
 title: 'Fleetbase | Open-Source Fleet Management & TMS Software',
 description:
 'Open-source fleet management and TMS software. Dispatch, track, and optimize your fleet in real time. Self-hosted or cloud — free to start, no per-seat pricing.',
 url: 'https://fleetbase.io',
 type: 'website',
 },
};

export default function Home() {
 return (
 <>
 <OrganizationSchema />
 <SoftwareApplicationSchema />
 <Hero />
 <StatsBar />
 <ProblemSolution />
 <Features />
 <Features2 />
 <OrderConfigShowcase />
 <IndustryUseCases />
 <FeaturesTabsSection />
 <LedgerShowcase />
 <IntegrationsEcosystem />
 <DeploymentOptions />
 <FinalCTA />
 </>
 );
}
