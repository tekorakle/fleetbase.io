import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/sections/testimonials';

export default function StorefrontPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Storefront</span>
              <span className="px-3">Customer Ordering Portal</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Delight Customers with a <span className="text-gradient">Seamless Ordering Experience</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Storefront is your white-label customer portal for placing orders, tracking deliveries, and managing accounts. Beautiful, responsive, and fully customizable to match your brand.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/pricing"><Button size="lg">Start Free Trial</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline">Request Demo</Button></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full">
              <div className="text-center"><div className="text-3xl font-bold text-gradient">99.9%</div><div className="text-sm text-muted-foreground mt-1">Uptime SLA</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-gradient">10M+</div><div className="text-sm text-muted-foreground mt-1">Orders Placed</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-gradient">40+</div><div className="text-sm text-muted-foreground mt-1">Payment Methods</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-gradient">150+</div><div className="text-sm text-muted-foreground mt-1">Integrations</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Drive Customer Engagement & Revenue</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Every interaction designed to increase order frequency and customer lifetime value.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold mb-2">Intuitive Ordering</h3>
              <p className="text-muted-foreground mb-4">Fast, mobile-first ordering experience that reduces cart abandonment and increases conversion.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>One-click reordering</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Saved addresses & preferences</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Smart recommendations</span></li>
              </ul>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-muted-foreground mb-4">Live order tracking with driver location, ETAs, and proactive delivery notifications.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Live map tracking</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Accurate ETAs</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Delivery notifications</span></li>
              </ul>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Flexible Payments</h3>
              <p className="text-muted-foreground mb-4">Support every payment method your customers prefer, with secure processing and fraud protection.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>40+ payment methods</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Wallet & subscriptions</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>PCI DSS compliant</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Your White-Label Storefront Today</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Give your customers a beautiful, branded ordering experience that drives repeat business.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing"><Button size="lg">Start Free Trial</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline">Schedule Demo</Button></Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
