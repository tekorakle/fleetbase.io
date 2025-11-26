import OrderConfigShowcase from '@/components/sections/order-config-showcase';
import Features from '@/components/sections/features';
import FeaturesTabsSection from '@/components/sections/features-tabs';
import Features2 from '@/components/sections/features2';
import Hero from '@/components/sections/hero';
import IntegrationsEcosystem from '@/components/sections/integrations-ecosystem';
import DeploymentOptions from '@/components/sections/deployment-options';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Features2 />
      <OrderConfigShowcase />
      <FeaturesTabsSection />
      <IntegrationsEcosystem />
      <DeploymentOptions />
    </>
  );
}
