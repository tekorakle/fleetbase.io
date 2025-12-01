import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/sections/testimonials';

export default function ExtensionsPage() {
  return (
    <div className="flex flex-col">
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Extensions</span>
              <span className="px-3">Marketplace</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Extend Fleetbase with <span className="text-gradient">Pre-Built Integrations</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Discover and install extensions from our marketplace. Connect with your favorite tools, add custom functionality, and build the platform that fits your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/pricing"><Button size="lg">Browse Extensions</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline">Build an Extension</Button></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full">
              <div className="text-center"><div className="text-3xl font-bold text-gradient">500+</div><div className="text-sm text-muted-foreground mt-1">Extensions</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-gradient">10K+</div><div className="text-sm text-muted-foreground mt-1">Developers</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-gradient">100K+</div><div className="text-sm text-muted-foreground mt-1">Installations</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-gradient">4.9★</div><div className="text-sm text-muted-foreground mt-1">Avg Rating</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Extend Your Platform</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Connect with 500+ pre-built extensions or create your own.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-2">Popular Integrations</h3>
              <p className="text-muted-foreground mb-4">Connect with Stripe, Twilio, SendGrid, Slack, and 400+ more services.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>One-click installation</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Verified partners</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>24/7 support</span></li>
              </ul>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Custom Extensions</h3>
              <p className="text-muted-foreground mb-4">Build and publish your own extensions using our SDK and documentation.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Complete SDK</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Developer tools</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Revenue sharing</span></li>
              </ul>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Curated Collections</h3>
              <p className="text-muted-foreground mb-4">Browse extensions by category, use case, and industry.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Industry-specific</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Trending now</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Top rated</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Perfect Logistics Platform</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Start with Fleetbase and extend it with the tools you need.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing"><Button size="lg">Browse Marketplace</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline">Developer Program</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
