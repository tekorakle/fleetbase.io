import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/sections/testimonials';

export default function FleetOpsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">
                FleetOps
              </span>
              <span className="px-3">Fleet & Order Management</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Fleet & Order Management{' '}
              <span className="text-gradient">Built for Scale</span>
            </h1>

            {/* Description */}
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Orchestrate complex logistics operations with real-time visibility, intelligent routing, and automated workflows. FleetOps gives you complete control over orders, drivers, and vehicles from a single platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/pricing">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Watch Demo</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100K+</div>
                <div className="text-sm text-muted-foreground mt-1">Orders Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-muted-foreground mt-1">Fleet Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">30%</div>
                <div className="text-sm text-muted-foreground mt-1">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">98%</div>
                <div className="text-sm text-muted-foreground mt-1">On-Time Rate</div>
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
              Why Operations Teams Choose FleetOps
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Purpose-built for logistics professionals who need powerful tools without the complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-semibold mb-2">Reduce Operational Costs</h3>
              <p className="text-muted-foreground mb-4">
                Optimize routes, reduce empty miles, and improve fleet utilization to cut costs by up to 30%.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>AI-powered route optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Automated dispatch workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Real-time capacity planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Increase Delivery Speed</h3>
              <p className="text-muted-foreground mb-4">
                Achieve 98%+ on-time delivery rates with intelligent routing and real-time driver coordination.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Dynamic route adjustments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Traffic-aware ETAs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Priority order handling</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Improve Customer Experience</h3>
              <p className="text-muted-foreground mb-4">
                Keep customers informed with real-time tracking, accurate ETAs, and proactive notifications.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Live order tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Automated status updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Digital proof of delivery</span>
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
              Everything You Need to Manage Fleet Operations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools for order management, fleet coordination, and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-semibold mb-2">Order Management</h3>
              <p className="text-sm text-muted-foreground">
                Create, track, and manage orders with custom workflows, automated routing, and real-time status updates.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="text-lg font-semibold mb-2">Fleet Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor vehicle locations, driver status, and route progress in real-time with GPS tracking.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-lg font-semibold mb-2">Route Optimization</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered routing that considers traffic, delivery windows, vehicle capacity, and driver schedules.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-semibold mb-2">Driver Mobile App</h3>
              <p className="text-sm text-muted-foreground">
                Native mobile app for drivers with turn-by-turn navigation, proof of delivery, and instant messaging.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Analytics & Reporting</h3>
              <p className="text-sm text-muted-foreground">
                Track KPIs, analyze performance trends, and generate custom reports for data-driven decisions.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">🔔</div>
              <h3 className="text-lg font-semibold mb-2">Automated Notifications</h3>
              <p className="text-sm text-muted-foreground">
                Keep customers and stakeholders informed with automated SMS, email, and push notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Every Logistics Scenario
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From last-mile delivery to long-haul trucking, FleetOps adapts to your operation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Last-Mile Delivery</h4>
              <p className="text-sm text-muted-foreground">
                E-commerce, food delivery, grocery, pharmacy
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Courier Services</h4>
              <p className="text-sm text-muted-foreground">
                Same-day, express, scheduled pickups
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Field Services</h4>
              <p className="text-sm text-muted-foreground">
                Technicians, maintenance, installations
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Distribution</h4>
              <p className="text-sm text-muted-foreground">
                Wholesale, B2B, route sales
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Waste Management</h4>
              <p className="text-sm text-muted-foreground">
                Scheduled routes, on-demand pickups
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Healthcare Logistics</h4>
              <p className="text-sm text-muted-foreground">
                Medical supplies, specimens, equipment
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Container Operations</h4>
              <p className="text-sm text-muted-foreground">
                Drayage, intermodal, port logistics
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h4 className="font-semibold mb-2">Government & Military</h4>
              <p className="text-sm text-muted-foreground">
                Asset transport, supply chain, logistics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/*// Final CTA
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Achieve 98% On-Time Delivery?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of logistics professionals using FleetOps to reduce costs, improve delivery times, and delight customers.
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
      </section>n>
    </div>
  );
}
