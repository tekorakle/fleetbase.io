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
              <span className="px-3">Open-Source Transport Management</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              The Open-Source TMS{' '}
              <span className="text-gradient">That Adapts to Your Business</span>
            </h1>

            {/* Description */}
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Stop forcing your operations into rigid software. FleetOps is the infinitely flexible transport management system designed to manage your entire logistics operation, from first mile to last.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/pricing">
                <Button size="lg">Start 7-Day Free Trial</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Book a Demo</Button>
              </Link>
              <Link href="https://github.com/fleetbase/fleetops" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost">Explore the Code</Button>
              </Link>
            </div>

            {/* Video Placeholder */}
            <div className="w-full mt-12 rounded-lg border bg-muted/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎥</div>
                <p className="text-muted-foreground">FleetOps Platform Overview Video</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Dashboard, Live Map & Order Management Demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Is Your Logistics Software Working Against You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional transport management systems are built on outdated, monolithic architecture. They're expensive to license, difficult to customize, and lock you into a single vendor's ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">📋</div>
                  <p className="text-xs text-muted-foreground">Messy manual processes</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inflexible Workflows</h3>
              <p className="text-muted-foreground">
                Your operations are unique, but your TMS treats you like everyone else. You're stuck with predefined workflows that don't match your business processes, causing manual workarounds and data silos.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">💸</div>
                  <p className="text-xs text-muted-foreground">Exponential cost growth</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prohibitive Costs</h3>
              <p className="text-muted-foreground">
                Per-user pricing models penalize you for growing. Every new driver, dispatcher, or manager adds to your monthly bill, making it impossible to scale affordably.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🔒</div>
                  <p className="text-xs text-muted-foreground">Trapped by vendor lock-in</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Vendor Lock-In</h3>
              <p className="text-muted-foreground">
                Your data is held hostage in a proprietary system. Migrating is a nightmare, and integrations are limited and expensive. You have no control over the product roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Freedom to Run Your Logistics, Your Way
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FleetOps is an open-source, API-first Transport Management System that gives you the freedom to build, customize, and scale your logistics operations without limits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">⚙️</div>
                  <p className="text-xs text-muted-foreground">Custom workflow builder</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build Your Perfect Workflow</h3>
              <p className="text-muted-foreground">
                Create custom fields, define your own activity flows, and trigger updates based on your unique business logic. The system adapts to you, not the other way around.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">📈</div>
                  <p className="text-xs text-muted-foreground">Linear, predictable growth</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scale Affordably</h3>
              <p className="text-muted-foreground">
                Our usage-based pricing means you never pay per user. Scale your team, your fleet, and your order volume without worrying about exponential cost increases.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🔓</div>
                  <p className="text-xs text-muted-foreground">Open-source freedom</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Own Your Data & Destiny</h3>
              <p className="text-muted-foreground">
                As an open-source platform, FleetOps gives you complete control. Host it yourself, access the full codebase, and integrate with any system using our powerful API.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1: Order Management */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Order Management & Dispatch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Centralize and Automate Your Entire Order Lifecycle
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From simple point-to-point deliveries to complex multi-stop routes, FleetOps provides a powerful command center to manage every order. Create custom workflows, automate dispatching, and track progress in real-time.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Custom Order Workflows</h4>
                    <p className="text-sm text-muted-foreground">Define unique activity flows, statuses, and logic for any type of order. Add custom fields, conditional triggers, and automated actions.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Automated Dispatch</h4>
                    <p className="text-sm text-muted-foreground">Automatically assign orders to the best driver based on location, availability, vehicle capacity, and custom business rules.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Tracking</h4>
                    <p className="text-sm text-muted-foreground">Monitor order progress live on a map from the moment it's created to the final proof of delivery. Track every waypoint and status change.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proof of Delivery</h4>
                    <p className="text-sm text-muted-foreground">Capture digital signatures, photos, and notes at the point of delivery for complete accountability and customer satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[600px] rounded-lg border bg-muted/30 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📦</div>
                <p className="text-muted-foreground font-medium">Order Management Dashboard</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Screenshot: Order list with statuses, live map, and tracking details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Fleet & Driver Management */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[600px] rounded-lg border bg-muted/30 flex items-center justify-center order-2 md:order-1">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🚚</div>
                <p className="text-muted-foreground font-medium">Fleet Management View</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Screenshot: Driver list, status indicators, and live map locations</p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Fleet & Driver Management</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete Visibility and Control Over Your Fleet
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Manage your vehicles, drivers, and equipment in one centralized system. Track locations, monitor performance, and ensure your entire fleet is operating at peak efficiency.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Live GPS Tracking</h4>
                    <p className="text-sm text-muted-foreground">See your entire fleet on a live map with real-time location updates. Track vehicle movements, driver routes, and delivery progress.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Driver Profiles & Scheduling</h4>
                    <p className="text-sm text-muted-foreground">Manage driver information, availability, and schedules. Assign drivers to vehicles and orders with ease. Track hours of service for compliance.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Vehicle Management</h4>
                    <p className="text-sm text-muted-foreground">Keep detailed records of all vehicles, including documents, service history, telematics data, and assignments.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Performance Analytics</h4>
                    <p className="text-sm text-muted-foreground">Monitor driver performance, vehicle utilization, and fleet efficiency with comprehensive analytics and reporting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Route Optimization */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Route Planning & Optimization</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Smarter Routes, Lower Costs, Faster Deliveries
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our advanced route optimization engine finds the most efficient routes for your multi-stop deliveries. Reduce fuel costs, minimize drive time, and increase the number of deliveries your fleet can handle each day.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Multi-Stop Optimization</h4>
                    <p className="text-sm text-muted-foreground">Automatically calculate the most efficient sequence for unlimited stops. Consider time windows, vehicle capacity, and driver schedules.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dynamic Rerouting</h4>
                    <p className="text-sm text-muted-foreground">Adjust routes on the fly based on traffic conditions, delays, or new orders. Keep your fleet moving efficiently all day long.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Service Areas & Zones</h4>
                    <p className="text-sm text-muted-foreground">Define geographic territories for your drivers and vehicles. Ensure efficient assignments and balanced workloads across your service areas.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Accurate ETA Calculations</h4>
                    <p className="text-sm text-muted-foreground">Provide customers with real-time, traffic-aware ETAs. Reduce customer inquiries and improve satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[600px] rounded-lg border bg-muted/30 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-muted-foreground font-medium">Route Optimization View</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Screenshot: Optimized multi-stop route vs. unoptimized route comparison</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 4: Maintenance & Compliance */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[600px] rounded-lg border bg-muted/30 flex items-center justify-center order-2 md:order-1">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🔧</div>
                <p className="text-muted-foreground font-medium">Maintenance Dashboard</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Screenshot: Upcoming services, open issues, work order statuses</p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Maintenance & Compliance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Keep Your Fleet on the Road and Out of the Shop
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Proactively manage vehicle maintenance with automated scheduling, issue tracking, and work order management. Ensure your fleet is safe, compliant, and always ready for the next job.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Preventive Maintenance Scheduling</h4>
                    <p className="text-sm text-muted-foreground">Set up recurring service schedules based on mileage, engine hours, or time. Never miss an oil change or inspection again.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Issue Tracking</h4>
                    <p className="text-sm text-muted-foreground">Allow drivers to report issues from the road. Track problems from discovery through resolution with full history and documentation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Work Order Management</h4>
                    <p className="text-sm text-muted-foreground">Create, assign, and track maintenance work orders. Manage internal technicians or coordinate with third-party vendors.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⛽</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fuel & Parts Tracking</h4>
                    <p className="text-sm text-muted-foreground">Monitor fuel consumption, identify inefficiencies, and manage your spare parts inventory all in one place.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 5: Dynamic Pricing */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Dynamic Pricing & Quoting</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Flexible Pricing That Adapts to Every Scenario
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Configure complex pricing rules based on distance, weight, zones, and custom parameters. Automate rate selection and generate instant quotes for your customers.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dynamic Rate Engine</h4>
                    <p className="text-sm text-muted-foreground">Create pricing rules based on any combination of factors: distance, weight, zones, time of day, vehicle type, and more.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Zone-to-Zone Pricing</h4>
                    <p className="text-sm text-muted-foreground">Define service areas and set different rates for each zone combination. Perfect for complex metropolitan or regional operations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instant Quote Generation</h4>
                    <p className="text-sm text-muted-foreground">Generate professional quotes in seconds. Convert quotes to orders with a single click when customers are ready to book.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">➕</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Surcharges & Fees</h4>
                    <p className="text-sm text-muted-foreground">Add fuel surcharges, after-hours fees, handling charges, and other custom fees to your pricing structure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[600px] rounded-lg border bg-muted/30 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">💵</div>
                <p className="text-muted-foreground font-medium">Service Rate Configuration</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Screenshot: Rate builder with zones, distance tiers, and pricing rules</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 6: API & Integrations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
              <span className="text-primary">●</span>
              <span className="ml-2">Developer Platform</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Developers: The Ultimate Integration Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FleetOps was built from the ground up with developers in mind. Our robust, API-first architecture allows you to integrate with any system, build custom applications, and extend the platform to meet your exact needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">🔌</div>
              <h4 className="font-semibold mb-2">RESTful API</h4>
              <p className="text-sm text-muted-foreground">
                Access every piece of data and functionality through our comprehensive, well-documented API.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Event Webhooks</h4>
              <p className="text-sm text-muted-foreground">
                Get real-time notifications for any event in the system, from order creation to driver location updates.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2">Open Source</h4>
              <p className="text-sm text-muted-foreground">
                Get under the hood, contribute to the project, and customize anything you want.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">🧩</div>
              <h4 className="font-semibold mb-2">Modular Extensions</h4>
              <p className="text-sm text-muted-foreground">
                Build your own extensions and add new capabilities to the platform.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-lg border bg-card p-8">
            <div className="text-sm font-mono bg-muted/50 p-6 rounded-lg overflow-x-auto">
              <div className="text-muted-foreground mb-2">// Create an order via the API</div>
              <div className="text-foreground">
                <span className="text-blue-500">POST</span> /api/v1/orders
              </div>
              <div className="text-foreground mt-4">{'{'}</div>
              <div className="text-foreground ml-4">"pickup": "123 Main St",</div>
              <div className="text-foreground ml-4">"dropoff": "456 Oak Ave",</div>
              <div className="text-foreground ml-4">"scheduled_at": "2026-02-09T10:00:00Z",</div>
              <div className="text-foreground ml-4">"driver_id": "driver_abc123"</div>
              <div className="text-foreground">{'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Simple, powerful API for all your integration needs
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Engine for Any Logistics Operation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FleetOps is trusted by businesses across dozens of industries to power their unique logistics operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">📦</div>
              <h4 className="font-semibold mb-2">Last-Mile Delivery</h4>
              <p className="text-sm text-muted-foreground">
                Perfect for e-commerce, food, grocery, and parcel delivery. Optimize routes, track drivers, and provide customers with real-time ETAs.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h4 className="font-semibold mb-2">Field Service</h4>
              <p className="text-sm text-muted-foreground">
                Manage your technicians, schedule service appointments, and dispatch the right person with the right equipment to every job.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🚛</div>
              <h4 className="font-semibold mb-2">Freight & Trucking</h4>
              <p className="text-sm text-muted-foreground">
                From LTL to FTL, manage your loads, drivers, and compliance in one system. Integrate with telematics and ELD providers.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-semibold mb-2">On-Demand Services</h4>
              <p className="text-sm text-muted-foreground">
                Power your on-demand business, whether it's ride-sharing, mobile services, or asset rentals. Handle complex, real-time dispatching.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="font-semibold mb-2">Healthcare Logistics</h4>
              <p className="text-sm text-muted-foreground">
                Deliver medical supplies, specimens, and equipment with compliance and temperature monitoring.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🏪</div>
              <h4 className="font-semibold mb-2">Retail Distribution</h4>
              <p className="text-sm text-muted-foreground">
                Manage wholesale, B2B, and route sales operations. Optimize multi-stop routes for maximum efficiency.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">♻️</div>
              <h4 className="font-semibold mb-2">Waste Management</h4>
              <p className="text-sm text-muted-foreground">
                Schedule recurring routes, manage on-demand pickups, and track container locations and status.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="font-semibold mb-2">Government & Military</h4>
              <p className="text-sm text-muted-foreground">
                Secure, compliant logistics for asset transport, supply chain management, and emergency response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why FleetOps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why FleetOps? The Fleetbase Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Unmatched Flexibility</h3>
              <p className="text-muted-foreground">
                Open-source and API-first, giving you the freedom to customize and integrate like no other TMS. Your operations, your rules.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictable, Fair Pricing</h3>
              <p className="text-muted-foreground">
                Our usage-based model means you never pay per user. Scale your operations without fear of runaway costs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">A Thriving Ecosystem</h3>
              <p className="text-muted-foreground">
                Backed by a vibrant community and a suite of powerful extensions like Navigator App, Storefront, and Customer Portal.
              </p>
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
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take control of your operations with a TMS that works for you, not against you. Start your free 7-day trial and experience the power and flexibility of FleetOps.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg">Start 7-Day Free Trial</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Talk to an Expert</Button>
            </Link>
            <Link href="https://docs.fleetbase.io" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost">Read the Documentation</Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Full platform access • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
