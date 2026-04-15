import type { Metadata } from 'next';
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Build Extensions | Fleetbase Developer Platform',
  description: 'Build, publish, and monetise Fleetbase extensions. Extend the platform with custom modules using Ember.js and Laravel.',
  keywords: 'fleetbase extensions, build extension, logistics plugin, ember.js, laravel, fleet management extension',
  openGraph: {
    title: 'Build Extensions | Fleetbase Developer Platform',
    description: 'Build, publish, and monetise Fleetbase extensions. Extend the platform with custom modules using Ember.js and Laravel.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Extensions | Fleetbase Developer Platform',
    description: 'Build, publish, and monetise Fleetbase extensions. Extend the platform with custom modules using Ember.js and Laravel.',
  },
};
const faqs = [
  {
    q: 'What is a Fleetbase extension?',
    a: 'A Fleetbase extension is a modular package that adds new features, integrations, or complete modules to the Fleetbase platform. Each extension is a combination of an Ember Engine (frontend) and a Laravel package (API backend). Extensions are installed via the Fleetbase CLI and appear as first-class modules inside the console — indistinguishable from core platform features.',
  },
  {
    q: 'Do I need to know Ember.js to build an extension?',
    a: 'The Fleetbase frontend is built with Ember.js and Ember Engines. You will need familiarity with Ember to build a full-stack extension with a custom UI. However, if you only need to add backend logic, API endpoints, or data models, you can build a backend-only Laravel package extension without any Ember knowledge.',
  },
  {
    q: 'How do I publish an extension to the marketplace?',
    a: 'Use the Fleetbase CLI: run `flb publish` from your extension directory. The CLI packages your extension and submits it to the Fleetbase Extension Registry at registry.fleetbase.io. Once reviewed, your extension appears in the in-console marketplace and can be installed by any Fleetbase user.',
  },
  {
    q: 'Can I build a private extension for my own deployment?',
    a: 'Yes. You can build and install extensions locally without publishing them to the public registry. Self-hosted Fleetbase deployments can point to a private registry or install extensions directly from a local path or private npm/Composer repository.',
  },
  {
    q: 'What is the extension.json file?',
    a: 'Every Fleetbase extension must include an extension.json manifest file at its root. This file declares the extension name, version, description, author, required Fleetbase version, and any dependencies. The registry validates this file before accepting a submission.',
  },
  {
    q: 'How does the extension backend integrate with Fleetbase core?',
    a: 'The Laravel package backend uses the Fleetbase Core API as its foundation. This gives your extension access to the composable REST API framework, shared data models (orders, drivers, places, contacts), authentication, middleware, notifications, and the event system — all without reimplementing them.',
  },
  {
    q: 'Can extensions communicate with each other?',
    a: 'Yes. The Ember Core framework (`fleetbase/ember-core`) provides integration capabilities that allow extensions to register services, share state, and expose APIs to other extensions. On the backend, Laravel service providers allow extensions to bind shared services into the container.',
  },
  {
    q: 'Is there a commercial licence requirement for publishing extensions?',
    a: 'Extensions you build for your own use are covered by the AGPL-3.0 licence that governs Fleetbase. If you want to sell or distribute extensions commercially — or keep your extension source code proprietary — you will need a Fleetbase Commercial Licence. Contact hello@fleetbase.io to discuss extension licensing.',
  },
];

const extensionTypes = [
  {
    icon: '🧩',
    title: 'Full-Stack Extensions',
    desc: 'A complete Ember Engine frontend paired with a Laravel API backend. Adds new screens, navigation items, and data models to the console.',
    examples: ['FleetOps', 'Storefront', 'Ledger', 'Pallet WMS'],
  },
  {
    icon: '⚙️',
    title: 'Backend-Only Extensions',
    desc: 'A Laravel package that adds API endpoints, data models, background jobs, or integrations — without a custom UI.',
    examples: ['Payment gateway adapters', 'ERP sync jobs', 'Custom notification channels'],
  },
  {
    icon: '🎨',
    title: 'UI Component Extensions',
    desc: 'Ember addons that contribute reusable UI components, widgets, or dashboard panels to existing extensions.',
    examples: ['Custom map overlays', 'Analytics widgets', 'Branded themes'],
  },
  {
    icon: '🔌',
    title: 'Integration Extensions',
    desc: 'Extensions that bridge Fleetbase with third-party platforms — shipping carriers, ERPs, payment processors, and more.',
    examples: ['FedEx / DHL carrier integration', 'Shopify order sync', 'Stripe billing'],
  },
];

const buildSteps = [
  {
    step: '01',
    title: 'Install the Fleetbase CLI',
    code: 'npm install -g @fleetbase/cli',
    desc: 'The CLI scaffolds new extensions, manages dependencies, and handles publishing to the registry.',
  },
  {
    step: '02',
    title: 'Scaffold a New Extension',
    code: 'flb new my-extension',
    desc: 'Generates the full extension structure: an Ember Engine for the frontend and a Laravel package for the backend, pre-wired together.',
  },
  {
    step: '03',
    title: 'Develop Your Extension',
    code: 'flb serve',
    desc: 'Start the development server. Your extension hot-reloads inside a local Fleetbase instance as you build.',
  },
  {
    step: '04',
    title: 'Publish to the Registry',
    code: 'flb publish',
    desc: 'Package and submit your extension to the Fleetbase Extension Registry. Once approved, it appears in the marketplace.',
  },
];

const coreFrameworks = [
  {
    name: 'fleetbase/ember-core',
    type: 'Frontend',
    desc: 'Provides foundational services, adapters, and utilities for initializing and managing your extension\'s Ember Engine. Handles authentication, routing integration, and cross-extension communication.',
    link: 'https://github.com/fleetbase/ember-core',
  },
  {
    name: 'fleetbase/ember-ui',
    type: 'Frontend',
    desc: 'A suite of standardized UI components and styles that match the Fleetbase console aesthetic. Tables, modals, forms, maps, and more — all pre-built and ready to use.',
    link: 'https://github.com/fleetbase/ember-ui',
  },
  {
    name: 'fleetbase/core-api',
    type: 'Backend',
    desc: 'The Laravel package that forms the backbone of every extension backend. Provides the composable REST API framework, shared models, authentication middleware, notifications, and the event system.',
    link: 'https://github.com/fleetbase/core-api',
  },
  {
    name: 'fleetbase/fleetbase-php',
    type: 'Backend',
    desc: 'PHP SDK for interacting with the Fleetbase API from server-side applications and extension backends.',
    link: 'https://github.com/fleetbase/fleetbase-php',
  },
];

export default function DeveloperExtensionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Developers</span>
              <span className="px-3">Build Extensions</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Extend Fleetbase with{' '}
              <span className="text-gradient">Custom Modules</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Fleetbase is built as an extensible operating system for logistics. Every core feature — FleetOps, Storefront, Ledger — is itself an extension. Build your own modules, publish them to the marketplace, or keep them private for your own deployment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="https://docs.fleetbase.io/developers/building-an-extension" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Read the Extension Guide</Button>
              </Link>
              <Link href="https://github.com/fleetbase/registry" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">Extension Registry on GitHub</Button>
              </Link>
              <Link href="/extensions">
                <Button size="lg" variant="ghost">Browse Marketplace</Button>
              </Link>
            </div>
            <div className="w-full mt-12 rounded-lg border overflow-hidden shadow-2xl relative aspect-video">
              <Image
                src="/images/console-screenshots/extensions-marketplace.webp"
                alt="Fleetbase Extensions Marketplace showing available extensions including FleetOps, Storefront, Ledger, and community-built modules"
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
            <div><div className="text-3xl font-bold mb-1">Ember</div><div className="text-sm text-muted-foreground">Frontend Framework</div></div>
            <div><div className="text-3xl font-bold mb-1">Laravel</div><div className="text-sm text-muted-foreground">Backend Framework</div></div>
            <div><div className="text-3xl font-bold mb-1">1 CLI</div><div className="text-sm text-muted-foreground">Scaffold, Dev & Publish</div></div>
            <div><div className="text-3xl font-bold mb-1">AGPL</div><div className="text-sm text-muted-foreground">Open Source Licence</div></div>
          </div>
        </div>
      </section>

      {/* What is an Extension */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span><span className="ml-2">Architecture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Every Feature is an Extension</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Fleetbase is not a monolith — it is an operating system for logistics built from composable extensions. FleetOps, Storefront, Ledger, and Pallet are all extensions that ship with Fleetbase. Your custom extension is a first-class citizen with exactly the same capabilities.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Each extension is a combination of an <strong>Ember Engine</strong> (the frontend module) and a <strong>Laravel package</strong> (the API backend). The two halves are developed independently and communicate through the Fleetbase Core API.
              </p>
              <div className="space-y-4">
                {[
                  'Adds new navigation items and screens to the console',
                  'Defines its own data models, API endpoints, and business logic',
                  'Shares authentication, permissions, and core models with the platform',
                  'Can communicate with and extend other installed extensions',
                  'Packaged and distributed via the Fleetbase Extension Registry',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-xs text-muted-foreground">extension.json</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto space-y-1">
                <div className="text-foreground">{`{`}</div>
                <div className="ml-4 text-green-400">{`"name": "my-logistics-module",`}</div>
                <div className="ml-4 text-green-400">{`"version": "1.0.0",`}</div>
                <div className="ml-4 text-green-400">{`"description": "Custom logistics module for Fleetbase",`}</div>
                <div className="ml-4 text-green-400">{`"author": "Your Company",`}</div>
                <div className="ml-4 text-foreground">{`"fleetbase": {`}</div>
                <div className="ml-8 text-blue-400">{`"requires": ">=1.0.0",`}</div>
                <div className="ml-8 text-blue-400">{`"engine": "my-logistics-module",`}</div>
                <div className="ml-8 text-blue-400">{`"backend": "your-company/my-logistics-module"`}</div>
                <div className="ml-4 text-foreground">{`},`}</div>
                <div className="ml-4 text-foreground">{`"dependencies": {`}</div>
                <div className="ml-8 text-muted-foreground">{`"@fleetbase/ember-core": "^1.0.0",`}</div>
                <div className="ml-8 text-muted-foreground">{`"@fleetbase/ember-ui": "^1.0.0"`}</div>
                <div className="ml-4 text-foreground">{`}`}</div>
                <div className="text-foreground">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extension Types */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Extensions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extensions range from full-stack modules with custom UIs to lightweight backend integrations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {extensionTypes.map((type, i) => (
              <div key={i} className="bg-card border rounded-lg p-6">
                <div className="text-3xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((ex, j) => (
                    <span key={j} className="text-xs bg-muted px-2 py-1 rounded-full">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Steps */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Zero to Published in Four Steps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Fleetbase CLI handles scaffolding, local development, and publishing so you can focus on building.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildSteps.map((step, i) => (
              <div key={i} className="bg-card border rounded-lg p-6">
                <div className="text-4xl font-bold text-primary/30 mb-4">{step.step}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <div className="bg-muted rounded px-3 py-2 font-mono text-xs mb-3">{step.code}</div>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="https://docs.fleetbase.io/developers/building-an-extension/getting-started" target="_blank" rel="noopener noreferrer">
              <Button size="lg">Full Getting Started Guide</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Frameworks */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Development Frameworks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fleetbase provides dedicated libraries for both the frontend and backend halves of your extension.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coreFrameworks.map((fw, i) => (
              <div key={i} className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${fw.type === 'Frontend' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'}`}>
                    {fw.type}
                  </span>
                  <code className="text-sm font-mono">{fw.name}</code>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{fw.desc}</p>
                <Link href={fw.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                  View on GitHub →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extension Registry */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span><span className="ml-2">Registry</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Fleetbase Extension Registry</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Fleetbase Extension Registry at <strong>registry.fleetbase.io</strong> is the official package repository for Fleetbase extensions. It supports both Composer (PHP) and npm (JavaScript) packages, with built-in validation to ensure every extension meets the platform standards.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Dual Composer + npm package support',
                  'extension.json validation on every submission',
                  'Versioned releases with semantic versioning',
                  'In-console marketplace for one-click installation',
                  'Private registry support for self-hosted deployments',
                  'Open source — self-host your own registry',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Link href="https://github.com/fleetbase/registry" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">Registry Source on GitHub</Button>
                </Link>
                <Link href="/extensions">
                  <Button variant="outline" size="sm">Browse Marketplace</Button>
                </Link>
              </div>
            </div>
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-xs text-muted-foreground">Publishing an Extension</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto space-y-2">
                <div className="text-muted-foreground"># Install the Fleetbase CLI</div>
                <div className="text-foreground">npm install -g @fleetbase/cli</div>
                <div className="mt-4 text-muted-foreground"># Scaffold a new extension</div>
                <div className="text-foreground">flb new my-extension</div>
                <div className="mt-4 text-muted-foreground"># Develop with hot reload</div>
                <div className="text-foreground">flb serve</div>
                <div className="mt-4 text-muted-foreground"># Publish to the registry</div>
                <div className="text-foreground">flb publish</div>
                <div className="mt-4 text-muted-foreground"># Install from the registry</div>
                <div className="text-foreground">flb install my-extension</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Extensions in the Console</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Installed extensions appear as first-class modules in the Fleetbase console — with their own navigation, screens, and data.
            </p>
          </div>
          <div className="rounded-lg border overflow-hidden shadow-2xl relative aspect-video max-w-5xl mx-auto">
            <Image
              src="/images/console-screenshots/extensions-marketplace.webp"
              alt="Fleetbase Extensions Marketplace in the console showing available and installed extensions"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <span className="text-muted-foreground flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 text-muted-foreground border-t bg-muted/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Extension?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start with the official extension development guide, scaffold your first extension with the CLI, and join the Fleetbase developer community on Discord.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://docs.fleetbase.io/developers/building-an-extension" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Start Building</Button>
              </Link>
              <Link href="https://discord.com/invite/HnTqQ6zAVn" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">Join the Discord</Button>
              </Link>
              <Link href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost">View on GitHub</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
