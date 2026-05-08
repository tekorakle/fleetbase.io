'use client';

import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Package,
  User,
  Truck,
  Layers,
  MapPin,
  Navigation,
  Activity,
  Webhook,
  ShoppingCart,
} from 'lucide-react';
import { FaGithub, FaJs, FaPhp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';

// ─── Data ─────────────────────────────────────────────────────────────────────

const CAPABILITIES = [
  { icon: Package, label: 'Orders' },
  { icon: User, label: 'Drivers' },
  { icon: Truck, label: 'Vehicles' },
  { icon: Layers, label: 'Fleets' },
  { icon: MapPin, label: 'Places' },
  { icon: Navigation, label: 'Routes' },
  { icon: Activity, label: 'Tracking' },
  { icon: Webhook, label: 'Webhooks' },
];

const REPOS = [
  { name: 'fleetbase/fleetbase-js', href: 'https://github.com/fleetbase/fleetbase-js' },
  { name: 'fleetbase/fleetbase-php', href: 'https://github.com/fleetbase/fleetbase-php' },
  { name: 'fleetbase/storefront-js', href: 'https://github.com/fleetbase/storefront-js' },
];

// ─── Code Samples ─────────────────────────────────────────────────────────────

const jsCode = `import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('flb_live_xxxx');

// Create an order
const order = await fleetbase.orders.create({
  payload: {
    pickup: 'place_abc123',
    dropoff: 'place_xyz789',
    entities: [{ name: 'Package', weight: 2.5 }],
  },
  type: 'delivery',
  scheduled_at: '2026-05-01T09:00:00Z',
});

// Track a driver's live location
const location = await fleetbase.drivers.getLocation('driver_xxx');
console.log(location.coordinates); // [lng, lat]`;

const phpCode = `use Fleetbase\\FleetbaseSDK;

$fleetbase = new FleetbaseSDK('flb_live_xxxx');

// Create an order
$order = $fleetbase->orders->create([
    'payload' => [
        'pickup'  => 'place_abc123',
        'dropoff' => 'place_xyz789',
    ],
    'type' => 'delivery',
]);

echo $order->tracking_number; // FB-000001

// List all active drivers
$drivers = $fleetbase->drivers->findAll(['status' => 'active']);`;

const storefrontCode = `import Storefront from '@fleetbase/storefront-sdk';

const store = new Storefront('public_key_xxxx');

// Browse product categories
const categories = await store.categories.query();

// Add to cart and checkout
await store.cart.add('product_xxx', 1);

const order = await store.cart.checkout({
  customer: { name: 'Jane Doe', phone: '+1234567890' },
  delivery_address: 'place_xyz789',
  payment_method: 'cash',
});`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SdksPageContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
            <Code2 className="w-3 h-3 text-primary" />
            <span>Official Client Libraries</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            SDKs &amp; <span className="text-primary">Libraries</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Official client libraries for the Fleetbase API. Available for JavaScript and PHP, with a
            dedicated Storefront SDK for custom commerce experiences.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link
                href="https://github.com/fleetbase"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 w-4 h-4" />
                View on GitHub
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">
                Browse Docs <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SDK Cards */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* JavaScript SDK */}
            <Card className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-3">
                  <FaJs className="w-5 h-5 text-yellow-500" />
                </div>
                <CardTitle className="text-base">JavaScript SDK</CardTitle>
                <CardDescription className="font-mono text-xs">@fleetbase/sdk</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="bg-muted/40 rounded-md px-3 py-2 font-mono text-xs text-muted-foreground">
                  npm install @fleetbase/sdk
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Runtime:</span>{' '}
                  <span className="font-medium">Node.js · Browser</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Official JavaScript SDK for the Fleetbase API. Works in Node.js and modern browser
                  environments with full TypeScript support.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <Link
                    href="https://github.com/fleetbase/fleetbase-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1.5 w-3.5 h-3.5" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="flex-1" asChild>
                  <Link
                    href="https://www.npmjs.com/package/@fleetbase/sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 w-3.5 h-3.5" />
                    npm
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* PHP SDK */}
            <Card className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
                  <FaPhp className="w-5 h-5 text-indigo-400" />
                </div>
                <CardTitle className="text-base">PHP SDK</CardTitle>
                <CardDescription className="font-mono text-xs">
                  fleetbase/fleetbase-php
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="bg-muted/40 rounded-md px-3 py-2 font-mono text-xs text-muted-foreground">
                  composer require fleetbase/fleetbase-php
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Runtime:</span>{' '}
                  <span className="font-medium">PHP 7.4+</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Official PHP SDK for server-side Fleetbase API integration. Composer installable
                  and PSR-4 compliant.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <Link
                    href="https://github.com/fleetbase/fleetbase-php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1.5 w-3.5 h-3.5" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="flex-1" asChild>
                  <Link
                    href="https://packagist.org/packages/fleetbase/fleetbase-php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 w-3.5 h-3.5" />
                    Packagist
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Storefront SDK */}
            <Card className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-base">Storefront SDK</CardTitle>
                <CardDescription className="font-mono text-xs">
                  @fleetbase/storefront-sdk
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="bg-muted/40 rounded-md px-3 py-2 font-mono text-xs text-muted-foreground">
                  npm install @fleetbase/storefront-sdk
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Runtime:</span>{' '}
                  <span className="font-medium">Node.js · Browser</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Purpose-built JavaScript SDK for Fleetbase Storefront. Browse products, manage
                  carts, place orders, and track deliveries from any custom storefront.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <Link
                    href="https://github.com/fleetbase/storefront-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1.5 w-3.5 h-3.5" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="flex-1" asChild>
                  <Link
                    href="https://www.npmjs.com/package/@fleetbase/storefront-sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 w-3.5 h-3.5" />
                    npm
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Quick Start</h2>
            <p className="text-muted-foreground">
              Authenticate with your API key and make your first call in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FaJs className="w-4 h-4 text-yellow-500" />
                JavaScript
              </div>
              <CodeBlock code={jsCode} language="javascript" label="orders.js" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FaPhp className="w-4 h-4 text-indigo-400" />
                PHP
              </div>
              <CodeBlock code={phpCode} language="php" label="orders.php" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShoppingCart className="w-4 h-4 text-primary" />
              Storefront SDK
            </div>
            <CodeBlock code={storefrontCode} language="javascript" label="storefront.js" />
          </div>
        </div>
      </section>

      {/* API Resources Covered */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">API Resources Covered</h2>
            <p className="text-muted-foreground">
              The JavaScript and PHP SDKs provide typed access to all core Fleetbase API resources.
            </p>
          </div>
          <div
            className="bg-border rounded-xl overflow-hidden max-w-3xl mx-auto"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}
          >
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                className="bg-card flex flex-col items-center gap-2 p-6 text-center"
              >
                <cap.icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">{cap.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="section-padding bg-muted/20">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Open Source</h2>
              <p className="text-muted-foreground mb-6">
                All Fleetbase SDKs are open-source under the AGPL-3.0 license. Read the source, file
                issues, or contribute improvements directly on GitHub.
              </p>
              <div className="space-y-2.5">
                {[
                  'Full source available on GitHub',
                  'Issues and pull requests welcome',
                  'AGPL-3.0 licensed',
                  'Semantic versioning',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {REPOS.map((repo) => (
                <Link
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:border-primary transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FaGithub className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="text-sm font-mono font-medium">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto">
          <div className="relative rounded-2xl border bg-card overflow-hidden p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">Start building today</h2>
              <p className="text-muted-foreground mb-8">
                Install an SDK, grab your API key from the Developer Console, and make your first API
                call in minutes.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" asChild>
                  <Link href="/platform/developer-console">
                    Get API Keys <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs">Browse Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
