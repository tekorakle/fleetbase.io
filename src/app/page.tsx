import OrderConfigShowcase from '@/components/sections/order-config-showcase';
import Features from '@/components/sections/features';
import FeaturesTabsSection from '@/components/sections/features-tabs';
import OpenSourceAdvantage from '@/components/sections/open-source-advantage';
import Hero from '@/components/sections/hero';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <OpenSourceAdvantage />
      <OrderConfigShowcase />
      <FeaturesTabsSection />
      <Testimonials />
    </>
  );
}
