import AboutHero from '@/components/sections/about-hero';
import AboutNews from '@/components/sections/about-news';
import AboutTeam from '@/components/sections/about-team';
import Features from '@/components/sections/features';

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
