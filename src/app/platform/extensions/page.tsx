'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';



const faqs = [
  {
    q: 'What is the Fleetbase Extensions Marketplace?',
    a: 'The Extensions Marketplace is the central hub for discovering, installing, and managing extensions that expand the capabilities of your Fleetbase platform. Extensions can add entirely new modules, integrations, workflows, or UI components. Both free and paid extensions are available, published by Fleetbase and the broader developer community.',
  },
  {
    q: 'Can I install extensions on a self-hosted Fleetbase instance?',
    a: 'Yes. Extensions can be installed on both Fleetbase Cloud and self-hosted instances. For self-hosted deployments, the marketplace provides self-managed install instructions so your team can deploy extensions directly to your infrastructure.',
  },
  {
    q: 'How do I publish my own extension?',
    a: 'Any developer can publish an extension to the marketplace. You create a developer account, build your extension following the Fleetbase extension architecture, submit it for review, and once approved it becomes available to all Fleetbase users. You can also choose to monetize your extension and receive payments directly through the platform.',
  },
  {
    q: 'How does extension monetization work?',
    a: 'When publishing a paid extension, you connect your Stripe account through the developer payment onboarding flow. You set your own pricing and the marketplace handles payment processing, licensing, and access control. Fleetbase takes a small platform fee and the remainder goes directly to you.',
  },
  {
    q: 'What are extension bundles?',
    a: 'Extension bundles allow publishers to package multiple versions or configurations of an extension together. For example, a bundle might include a lite version and a pro version, or separate builds for different deployment environments. Users select the appropriate bundle when installing.',
  },
  {
    q: 'Are extensions reviewed before being published?',
    a: 'Yes. All extensions go through a review process before being listed in the marketplace. This ensures quality, security, and compatibility with the Fleetbase platform. The review process checks both the frontend and backend components of the extension.',
  },
];

const categories = [
  { icon: '🚚', name: 'Fleet & Dispatch', count: 12 },
  { icon: '🗺️', name: 'Mapping & Routing', count: 8 },
  { icon: '💳', name: 'Payments & Billing', count: 9 },
  { icon: '📦', name: 'Inventory & WMS', count: 6 },
  { icon: '🔗', name: 'Integrations', count: 15 },
  { icon: '📊', name: 'Analytics & Reports', count: 7 },
  { icon: '💬', name: 'Communication', count: 5 },
  { icon: '🔒', name: 'Security & Auth', count: 4 },
];

const featuredExtensions = [
  { icon: '🚚', name: 'FleetOps', tag: 'Free', desc: 'The core TMS and fleet management module for orders, drivers, routes, and real-time tracking.', publisher: 'Fleetbase' },
  { icon: '🛍️', name: 'Storefront', tag: 'Free', desc: 'Headless e-commerce and on-demand ordering platform with native delivery integration.', publisher: 'Fleetbase' },
  { icon: '📦', name: 'Pallet WMS', tag: 'Free', desc: 'Enterprise warehouse management with inventory tracking, receiving, and fulfilment.', publisher: 'Fleetbase' },
  { icon: '📊', name: 'Ledger', tag: 'Free', desc: 'Double-entry accounting engine for logistics finance, invoicing, and driver payouts.', publisher: 'Fleetbase' },
  { icon: '🗺️', name: 'HERE Maps Integration', tag: 'Paid', desc: 'Replace the default mapping layer with HERE Maps for enhanced routing and geocoding.', publisher: 'Community' },
  { icon: '💬', name: 'WhatsApp Notifications', tag: 'Paid', desc: 'Send order status updates and driver alerts directly via WhatsApp Business API.', publisher: 'Community' },
];

export default function ExtensionsMarketplacePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Platform</span>
              <span className="px-3">Extensions Marketplace</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Extend, Customize, and{' '}
              <span className="text-gradient">Build on Fleetbase</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              The Fleetbase Extensions Marketplace is where the platform grows. Browse and install extensions built by Fleetbase and the open-source community — or publish your own and monetize it to reach thousands of logistics operators worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="https://console.fleetbase.io" target="_blank" rel="noopener noreferrer"><Button size="lg">Browse Extensions</Button></Link>
              <Link href="/developers"><Button size="lg" variant="outline">Publish an Extension</Button></Link>
              <Link href="https://github.com/fleetbase/registry-bridge" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="ghost">View Registry Source</Button></Link>
            </div>
            <div className="w-full mt-12 rounded-lg border overflow-hidden shadow-2xl relative aspect-video">
              <Image
                src="/images/console-screenshots/extensions-marketplace.webp"
                alt="Fleetbase console showing extensions marketplace with installed modules, API monitoring dashboard, and developer tools"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl font-bold mb-1">60+</div><div className="text-sm text-muted-foreground">Extensions Available</div></div>
            <div><div className="text-3xl font-bold mb-1">8</div><div className="text-sm text-muted-foreground">Categories</div></div>
            <div><div className="text-3xl font-bold mb-1">Free</div><div className="text-sm text-muted-foreground">Core Extensions</div></div>
            <div><div className="text-3xl font-bold mb-1">Open</div><div className="text-sm text-muted-foreground">Publisher Platform</div></div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find extensions that match your operational needs across every area of your logistics business.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <div key={i} className="bg-card border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer text-center">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-semibold text-sm mb-1">{cat.name}</div>
                <div className="text-xs text-muted-foreground">{cat.count} extensions</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Operators */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">For Operators</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Extend Your Platform in Minutes, Not Months</h2>
              <p className="text-lg text-muted-foreground mb-8">Installing an extension takes seconds. Browse the marketplace, click install, and the new capability is immediately available in your Fleetbase console — no restarts, no deployments, no engineering required.</p>
              <div className="space-y-6">
                {[
                  { icon: '🔍', title: 'Browse & Discover', desc: 'Search by category, keyword, or publisher. Read detailed descriptions, view screenshots, and check reviews before installing.' },
                  { icon: '⚡', title: 'One-Click Install', desc: 'Free extensions install instantly. Paid extensions prompt a secure checkout flow, then activate immediately upon payment confirmation.' },
                  { icon: '🔄', title: 'Manage & Update', desc: 'View all installed extensions from a single dashboard. Receive update notifications, manage licenses, and uninstall with one click when needed.' },
                  { icon: '🏗️', title: 'Self-Managed Install', desc: 'Running a self-hosted instance? The marketplace provides step-by-step self-managed install instructions for every extension.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">{item.icon}</div>
                    <div><h4 className="font-semibold mb-1">{item.title}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[500px] rounded-lg border overflow-hidden shadow-lg relative">
              <Image
                src="/images/console-screenshots/extensions-marketplace.webp"
                alt="Fleetbase extensions marketplace showing available extensions with categories, install buttons, and publisher information"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Publishers */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[500px] rounded-lg border overflow-hidden shadow-lg relative order-last md:order-first">
              <Image
                src="/images/console-screenshots/developers-webhooks.webp"
                alt="Fleetbase developer console webhook configuration showing event subscriptions, endpoint URLs, and delivery logs"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">For Developers & Publishers</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Once. Sell to Thousands of Logistics Operators.</h2>
              <p className="text-lg text-muted-foreground mb-8">The Fleetbase developer platform gives you everything you need to build, publish, and monetize extensions. Reach a global audience of logistics operators without managing your own distribution or payment infrastructure.</p>
              <div className="space-y-6">
                {[
                  { icon: '👤', title: 'Developer Account & Credentials', desc: 'Create a developer account and generate registry credentials to authenticate your publishing pipeline.' },
                  { icon: '📝', title: 'Extension Builder & Bundles', desc: 'Create detailed extension listings with descriptions, screenshots, and categorization. Package multiple versions as bundles.' },
                  { icon: '💰', title: 'Built-In Monetization', desc: 'Connect your Stripe account and set your own pricing. The marketplace handles payment processing, licensing, and access control automatically.' },
                  { icon: '📊', title: 'Analytics & Revenue Tracking', desc: 'Track installs, active users, revenue, and conversion rates from your developer dashboard in real time.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">{item.icon}</div>
                    <div><h4 className="font-semibold mb-1">{item.title}</h4><p className="text-sm text-muted-foreground">{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Extension Architecture</span></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Full-Stack Extension Framework</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Fleetbase extensions are full-stack modules with a frontend Ember.js engine and a backend Laravel package — giving you complete control over both the UI and the server-side logic.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold mb-3">Frontend: Ember.js Engine</h3>
              <p className="text-muted-foreground mb-4">The frontend of every extension is an Ember.js engine that integrates seamlessly into the Fleetbase console. Extensions can add new routes, UI components, dashboards, and widgets that feel native to the platform.</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                {['Custom routes and navigation', 'Reusable UI components', 'Dashboard widgets', 'Full access to Fleetbase UI library'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2"><span className="text-primary">→</span> {f}</div>
                ))}
              </div>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">Backend: Laravel Package</h3>
              <p className="text-muted-foreground mb-4">The backend is a Laravel package that integrates with the Fleetbase API layer. Extensions can define new models, API endpoints, database migrations, jobs, events, and webhooks.</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                {['Custom data models and migrations', 'New REST API endpoints', 'Background jobs and queues', 'Custom events and webhooks'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2"><span className="text-primary">→</span> {f}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-8">
            <div className="text-sm font-mono bg-muted/50 p-6 rounded-lg overflow-x-auto">
              <div className="text-muted-foreground mb-2">{'// Install the Fleetbase extension scaffold CLI'}</div>
              <div className="text-foreground">npm install -g @fleetbase/create-extension</div>
              <div className="text-foreground mt-3">npx @fleetbase/create-extension my-extension</div>
              <div className="text-muted-foreground mt-4 mb-2">{'// Your extension structure'}</div>
              <div className="text-foreground">my-extension/</div>
              <div className="text-foreground ml-4">{"├── addon/          # Ember.js frontend engine"}</div>
              <div className="text-foreground ml-4">{"├── server/         # Laravel backend package"}</div>
              <div className="text-foreground ml-4">{"└── package.json"}</div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Get started building your extension in minutes with the official scaffold CLI</p>
          </div>
        </div>
      </section>

      {/* Featured Extensions */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Extensions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore some of the most popular extensions used by logistics operators on the Fleetbase platform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredExtensions.map((ext, i) => (
              <div key={i} className="bg-card border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{ext.icon}</div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${ext.tag === 'Free' ? 'text-green-600 border-green-200 bg-green-50 dark:bg-green-950/20' : 'text-primary border-primary/20 bg-primary/5'}`}>{ext.tag}</span>
                </div>
                <h3 className="font-semibold mb-2">{ext.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ext.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">by {ext.publisher}</span>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="https://console.fleetbase.io" target="_blank" rel="noopener noreferrer"><Button size="lg">Browse All Extensions</Button></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to know about the Extensions Marketplace.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border rounded-lg overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 text-muted-foreground text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="px-6 pb-6"><p className="text-muted-foreground leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Extend Your Fleetbase Platform?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Browse the marketplace to find extensions that fit your workflow, or start building your own and reach thousands of logistics operators.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="https://console.fleetbase.io" target="_blank" rel="noopener noreferrer"><Button size="lg">Browse Marketplace</Button></Link>
            <Link href="/developers"><Button size="lg" variant="outline">Start Building</Button></Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">Free to browse · No credit card to install free extensions · Open publisher platform</p>
        </div>
      </section>
    </div>
  );
}
