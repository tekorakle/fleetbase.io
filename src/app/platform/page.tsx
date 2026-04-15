import Link from 'next/link';
import { Button } from '@/components/ui/button';
import IntegrationsEcosystem from '@/components/sections/integrations-ecosystem';
import OpenSourceAdvantage from '@/components/sections/open-source-advantage';
import DeploymentOptions from '@/components/sections/deployment-options';

export default function PlatformOverviewPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">
                Platform Overview
              </span>
              <span className="px-3">Complete Logistics Operating System</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              The Complete{' '}
              <span className="text-gradient">Logistics Operating System</span>
            </h1>

            {/* Description */}
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Fleetbase is a modular, open-source platform that unifies fleet management, order orchestration, and supply chain operations into one powerful system. Built for flexibility, scalability, and total control.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/pricing">
                <Button size="lg">Try Fleetbase Cloud</Button>
              </Link>
              <Link href="https://cal.com/shivthakker/enquiry">
                <Button size="lg" variant="outline">Schedule Demo</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Active Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">10M+</div>
                <div className="text-sm text-muted-foreground mt-1">Orders Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-muted-foreground mt-1">Fleet Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">99.9%</div>
                <div className="text-sm text-muted-foreground mt-1">API Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Modules */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modular Platform Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each module works independently or together, giving you the flexibility to deploy exactly what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FleetOps Module */}
            <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">FleetOps</h3>
              <p className="text-muted-foreground mb-4">
                Complete fleet and order management with real-time tracking, route optimization, and driver coordination.
              </p>
              <Link href="/platform/fleetops" className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center">
                Learn more →
              </Link>
            </div>

            {/* Storefront Module */}
            <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Storefront</h3>
              <p className="text-muted-foreground mb-4">
                Customer-facing ordering interface with real-time tracking, delivery scheduling, and payment processing.
              </p>
              <Link href="/platform/storefront" className="text-purple-500 hover:text-purple-600 font-medium inline-flex items-center">
                Learn more →
              </Link>
            </div>

            {/* Navigator Module */}
            <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Navigator</h3>
              <p className="text-muted-foreground mb-4">
                Mobile driver app with turn-by-turn navigation, proof of delivery, and real-time communication.
              </p>
              <Link href="/platform/navigator" className="text-green-500 hover:text-green-600 font-medium inline-flex items-center">
                Learn more →
              </Link>
            </div>

            {/* Pallet Module */}
            <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pallet</h3>
              <p className="text-muted-foreground mb-4">
                Warehouse management with inventory tracking, pick/pack workflows, and dock scheduling.
              </p>
              <Link href="/platform/pallet" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center">
                Learn more →
              </Link>
            </div>

            {/* Mobile Apps */}
            <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile SDKs</h3>
              <p className="text-muted-foreground mb-4">
                Native iOS and Android SDKs for building custom mobile experiences on top of Fleetbase.
              </p>
              <Link href="/platform/mobile" className="text-cyan-500 hover:text-cyan-600 font-medium inline-flex items-center">
                Learn more →
              </Link>
            </div>

            {/* Extensions Marketplace */}
            <div className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Extensions</h3>
              <p className="text-muted-foreground mb-4">
                Extend platform capabilities with pre-built extensions for payments, notifications, analytics, and more.
              </p>
              <Link href="/developers/extensions" className="text-pink-500 hover:text-pink-600 font-medium inline-flex items-center">
                Browse extensions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Ecosystem */}
      <IntegrationsEcosystem />

      {/* Open Source Advantage */}
      <OpenSourceAdvantage />

      {/* Deployment Options */}
      <DeploymentOptions />

      {/* Testimonials */}

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Building Your Logistics Future Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you choose our managed Cloud or a self-hosted solution, Fleetbase gives you the power to build, scale, and control your entire logistics operation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg">Try Fleetbase Cloud</Button>
            </Link>
            <Link href="https://cal.com/shivthakker/enquiry">
              <Button size="lg" variant="outline">Schedule Enterprise Demo</Button>
            </Link>
            <Link href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">View on GitHub</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
