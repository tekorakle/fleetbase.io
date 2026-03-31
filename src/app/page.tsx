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

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProblemSolution />
      <Features />
      <Features2 />
      <OrderConfigShowcase />
      <IndustryUseCases />
      <FeaturesTabsSection />
      <IntegrationsEcosystem />
      <DeploymentOptions />
      <FinalCTA />
    </>
  );
}
