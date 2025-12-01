import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/sections/testimonials';

export default function NavigatorPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">
                Navigator
              </span>
              <span className="px-3">Driver Mobile App</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Empower Your Drivers with{' '}
              <span className="text-gradient">Real-Time Navigation</span>
            </h1>

            {/* Description */}
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Navigator is the native mobile app that puts complete delivery control in your drivers' hands. Real-time turn-by-turn navigation, proof of delivery, and instant communication—all optimized for field operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/pricing">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Request Demo</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">99.8%</div>
                <div className="text-sm text-muted-foreground mt-1">App Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-muted-foreground mt-1">Active Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">4.8★</div>
                <div className="text-sm text-muted-foreground mt-1">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Driver Experience Redefined
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Intuitive tools designed for drivers, built for operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Smart Navigation</h3>
              <p className="text-muted-foreground mb-4">
                Turn-by-turn directions with real-time traffic updates, automatic rerouting, and multi-stop optimization.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Offline map support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Voice-guided directions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Predictive ETAs</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">Proof of Delivery</h3>
              <p className="text-muted-foreground mb-4">
                Capture photos, signatures, and notes instantly. Automatic compliance with delivery requirements and customer expectations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Digital signatures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Photo capture & tagging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Timestamped records</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Instant Communication</h3>
              <p className="text-muted-foreground mb-4">
                Two-way messaging with dispatch, customers, and team members. Stay connected without leaving the app.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>In-app messaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Push notifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real-time alerts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Driver Toolkit
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything drivers need to succeed, built into one powerful app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-lg font-semibold mb-2">Live Location Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Real-time GPS tracking visible to dispatch and customers for complete transparency.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-semibold mb-2">Order Details</h3>
              <p className="text-sm text-muted-foreground">
                Complete order information, special instructions, and delivery requirements at a glance.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg font-semibold mb-2">Time Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Automatic arrival and departure timestamps for accurate service level reporting.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-lg font-semibold mb-2">Payment Processing</h3>
              <p className="text-sm text-muted-foreground">
                Accept cash, card, and digital payments directly from the app with secure processing.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Performance Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Track personal stats, earnings, and performance metrics in real-time.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-lg font-semibold mb-2">Offline Capability</h3>
              <p className="text-sm text-muted-foreground">
                Full functionality even without internet connection—sync automatically when reconnected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Compatibility */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available on All Platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Native apps for iOS and Android, plus progressive web app for any device.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🍎</div>
              <h3 className="text-xl font-semibold mb-2">iOS</h3>
              <p className="text-muted-foreground mb-4">
                Native app optimized for iPhone and iPad with full access to device features.
              </p>
              <Link href="https://apps.apple.com" target="_blank">
                <Button variant="outline" className="w-full">Download on App Store</Button>
              </Link>
            </div>

            <div className="bg-card border rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Android</h3>
              <p className="text-muted-foreground mb-4">
                Native app for Android devices with seamless integration across all screen sizes.
              </p>
              <Link href="https://play.google.com" target="_blank">
                <Button variant="outline" className="w-full">Get on Google Play</Button>
              </Link>
            </div>

            <div className="bg-card border rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Web</h3>
              <p className="text-muted-foreground mb-4">
                Progressive web app accessible from any browser on any device.
              </p>
              <Link href="/navigator-web">
                <Button variant="outline" className="w-full">Access Web App</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Give Your Drivers the Tools They Deserve
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Navigator makes delivery operations faster, easier, and more professional. Your drivers will thank you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Schedule Demo</Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
