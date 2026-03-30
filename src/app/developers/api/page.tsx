'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    q: 'What authentication method does the Fleetbase API use?',
    a: 'The Fleetbase API uses Bearer token authentication. You generate an API key from the Developer Console and include it in the Authorization header of every request: Authorization: Bearer YOUR_API_KEY. Keys are scoped to your organization and can be rotated or revoked at any time.',
  },
  {
    q: 'Is there a rate limit on API requests?',
    a: 'Core API endpoints have generous rate limits that scale with your plan. Standard plans support up to 1,000 requests per minute. Enterprise plans can negotiate higher limits. Rate limit headers are included in every response so your application can handle limits gracefully.',
  },
  {
    q: 'Does Fleetbase support real-time data via WebSockets?',
    a: 'Yes. Fleetbase provides real-time WebSocket channels powered by Soketi, a Pusher-compatible server. You can subscribe to channels for live order updates, driver location tracking, fleet status changes, and any other platform event. Any Pusher-compatible SDK works out of the box.',
  },
  {
    q: 'How do webhooks work in Fleetbase?',
    a: 'Webhooks allow Fleetbase to push event notifications to your server in real time. You configure a webhook endpoint URL in the Developer Console, select which events to subscribe to, and Fleetbase will POST a JSON payload to your endpoint whenever those events occur. Failed deliveries are automatically retried.',
  },
  {
    q: 'Is there a Storefront-specific API?',
    a: 'Yes. The Storefront extension exposes its own dedicated API for managing stores, products, categories, orders, and customers. The Storefront API is documented separately and uses the same authentication mechanism as the core Fleetbase API.',
  },
  {
    q: 'Can I use the API to build a custom mobile app?',
    a: 'Absolutely. The Fleetbase API is the foundation for our own open-source Navigator and Storefront mobile apps. You can use the same API to build custom driver apps, customer-facing apps, or any other mobile experience on top of Fleetbase.',
  },
  {
    q: 'Where can I find the full API reference?',
    a: 'The full API reference is available at docs.fleetbase.io/developers/api and as a Postman collection at the link in the documentation. The reference covers all endpoints, request/response schemas, authentication, and example payloads.',
  },
];

const apiResources = [
  { icon: '📦', name: 'Orders', desc: 'Create, update, dispatch, and track orders through their full lifecycle.', endpoints: '12 endpoints' },
  { icon: '🚗', name: 'Drivers', desc: 'Manage driver profiles, assignments, location, and status.', endpoints: '8 endpoints' },
  { icon: '📍', name: 'Places', desc: 'Geocode addresses, manage saved locations, and resolve coordinates.', endpoints: '6 endpoints' },
  { icon: '👤', name: 'Contacts', desc: 'Create and manage customer and contact records linked to orders.', endpoints: '5 endpoints' },
  { icon: '🚚', name: 'Vehicles', desc: 'Register and manage your vehicle fleet with full metadata support.', endpoints: '6 endpoints' },
  { icon: '🏢', name: 'Fleets', desc: 'Organize drivers and vehicles into logical fleet groups.', endpoints: '5 endpoints' },
  { icon: '🗺️', name: 'Routes', desc: 'Optimize multi-stop routes and calculate ETAs programmatically.', endpoints: '4 endpoints' },
  { icon: '📊', name: 'Tracking', desc: 'Access real-time and historical location data for any tracked entity.', endpoints: '4 endpoints' },
];

const integrations = [
  { category: 'Mapping & Routing', items: ['Google Maps', 'HERE Maps', 'Mapbox', 'OpenStreetMap'] },
  { category: 'Payments', items: ['Stripe', 'PayPal', 'Braintree', 'Square'] },
  { category: 'Notifications', items: ['Twilio SMS', 'SendGrid', 'Firebase FCM', 'WhatsApp'] },
  { category: 'Logistics', items: ['FedEx', 'UPS', 'DHL', 'EasyPost'] },
  { category: 'ERP & CRM', items: ['Salesforce', 'HubSpot', 'SAP', 'NetSuite'] },
  { category: 'E-Commerce', items: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'] },
];

export default function ApiIntegrationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Developers</span>
              <span className="px-3">API & Integrations</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Build Anything on Top of{' '}
              <span className="text-gradient">Fleetbase</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              A complete REST API, real-time WebSocket channels, and event-driven webhooks give you everything you need to integrate Fleetbase with your existing systems or build entirely new logistics-powered applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="https://docs.fleetbase.io/developers/api" target="_blank" rel="noopener noreferrer"><Button size="lg">View API Reference</Button></Link>
              <Link href="https://documenter.getpostman.com/view/6866273/2s9YyvAfZh" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="outline">Postman Collection</Button></Link>
              <Link href="/developers/console"><Button size="lg" variant="ghost">Developer Console</Button></Link>
            </div>
            <div className="w-full mt-12 rounded-lg border bg-muted/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🔌</div>
                <p className="text-muted-foreground font-medium">API & Integrations Overview</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Screenshot: API documentation page showing endpoint list, request builder, and live response preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl font-bold mb-1">REST</div><div className="text-sm text-muted-foreground">Full REST API</div></div>
            <div><div className="text-3xl font-bold mb-1">WS</div><div className="text-sm text-muted-foreground">WebSocket Channels</div></div>
            <div><div className="text-3xl font-bold mb-1">50+</div><div className="text-sm text-muted-foreground">API Endpoints</div></div>
            <div><div className="text-3xl font-bold mb-1">24+</div><div className="text-sm text-muted-foreground">Native Integrations</div></div>
          </div>
        </div>
      </section>

      {/* REST API */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">REST API</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Complete REST API for Every Logistics Operation</h2>
              <p className="text-lg text-muted-foreground mb-8">The Fleetbase REST API gives you programmatic access to every resource in the platform. Create orders, manage drivers, track shipments, geocode addresses, and automate your entire logistics workflow — all through a clean, consistent JSON API.</p>
              <div className="space-y-4">
                {[
                  'Consistent JSON:API response format across all endpoints',
                  'Bearer token authentication with per-key permissions',
                  'Full CRUD operations on all core resources',
                  'Filtering, sorting, and pagination on list endpoints',
                  'Includes relationships and nested resource expansion',
                  'Comprehensive Postman collection for rapid testing',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <Link href="https://docs.fleetbase.io/developers/api" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm">Core API Docs</Button></Link>
                <Link href="https://docs.fleetbase.io/storefront-api" target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm">Storefront API Docs</Button></Link>
              </div>
            </div>
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-xs text-muted-foreground">Example: Create Order</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto space-y-1">
                <div className="text-muted-foreground">POST /v1/orders</div>
                <div className="text-muted-foreground">Authorization: Bearer flb_live_xxxx</div>
                <div className="mt-3 text-foreground">{`{`}</div>
                <div className="ml-4 text-foreground">{`"payload": {`}</div>
                <div className="ml-8 text-green-400">{`"pickup": "place_abc123",`}</div>
                <div className="ml-8 text-green-400">{`"dropoff": "place_xyz789",`}</div>
                <div className="ml-8 text-green-400">{`"entities": [{ "name": "Package", "weight": 2.5 }]`}</div>
                <div className="ml-4 text-foreground">{`},`}</div>
                <div className="ml-4 text-green-400">{`"type": "delivery",`}</div>
                <div className="ml-4 text-green-400">{`"scheduled_at": "2026-04-01T09:00:00Z"`}</div>
                <div className="text-foreground">{`}`}</div>
                <div className="mt-4 text-muted-foreground">// Response: 201 Created</div>
                <div className="text-foreground">{`{ "data": { "id": "order_xxx", "status": "created", ... } }`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Resources Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core API Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Every major entity in the Fleetbase platform is accessible via the API with full CRUD support.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {apiResources.map((res, i) => (
              <div key={i} className="bg-card border rounded-lg p-5">
                <div className="text-3xl mb-3">{res.icon}</div>
                <h3 className="font-semibold mb-1">{res.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{res.desc}</p>
                <span className="text-xs text-primary font-medium">{res.endpoints}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WebSockets */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[500px] rounded-lg border bg-muted/30 flex items-center justify-center order-last md:order-first">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">⚡</div>
                <p className="text-muted-foreground font-medium">Real-Time WebSocket Channels</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Screenshot: Live order tracking map with WebSocket-powered driver location updates and status events</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">WebSocket Channels</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Data Without Polling</h2>
              <p className="text-lg text-muted-foreground mb-8">Fleetbase&apos;s WebSocket layer is powered by Soketi, a fully Pusher-compatible server. Subscribe to channels and receive live updates the instant something changes — driver location, order status, fleet events, and more. Any Pusher SDK works out of the box.</p>
              <div className="space-y-4">
                {[
                  { label: 'Order Channels', desc: 'Live order status, driver assignment, and ETA updates' },
                  { label: 'Driver Channels', desc: 'Real-time GPS location, speed, and status broadcasts' },
                  { label: 'Fleet Channels', desc: 'Fleet-wide events and aggregate status updates' },
                  { label: 'Custom Channels', desc: 'Emit and subscribe to custom events from your extensions' },
                ].map((ch, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-sm">{ch.label}</span>
                      <span className="text-sm text-muted-foreground"> — {ch.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-card border rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <div className="text-muted-foreground mb-2">// Subscribe to live driver location</div>
                <div>{`const ch = pusher.subscribe('driver.driver_xxx');`}</div>
                <div>{`ch.bind('driver.location_updated', ({ lat, lng }) => {`}</div>
                <div className="ml-4">updateMapMarker(lat, lng);</div>
                <div>{`});`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Webhooks</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Event-Driven Integration with Webhooks</h2>
              <p className="text-lg text-muted-foreground mb-8">Configure webhooks to push real-time notifications to your systems whenever something happens in Fleetbase. No polling required — Fleetbase calls you. Subscribe to specific events or receive everything, with automatic retries on failure.</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'order.created', 'order.dispatched', 'order.completed', 'order.cancelled',
                  'driver.assigned', 'driver.location_updated', 'payment.received', 'entity.updated',
                ].map((ev, i) => (
                  <div key={i} className="bg-muted/50 rounded px-3 py-2 font-mono text-xs">{ev}</div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  'Configure multiple webhook endpoints per organization',
                  'Subscribe to specific events or receive all events',
                  'Automatic retry with exponential backoff on failure',
                  'Full delivery log with request and response inspection',
                  'HMAC signature verification for security',
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
            <div className="w-full h-[500px] rounded-lg border bg-muted/30 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🔔</div>
                <p className="text-muted-foreground font-medium">Webhook Delivery Dashboard</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Screenshot: Webhook delivery log showing event type, endpoint, status, latency, and payload inspector</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Native Integrations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Fleetbase connects natively with the tools your business already uses — from mapping and payments to ERP and e-commerce platforms.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((group, i) => (
              <div key={i} className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4">{group.category}</h3>
                <div className="space-y-2">
                  {group.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">→</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Plus hundreds more available through the Extensions Marketplace</p>
        </div>
      </section>

      {/* Storefront API */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[400px] rounded-lg border bg-muted/30 flex items-center justify-center order-last md:order-first">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🛍️</div>
                <p className="text-muted-foreground font-medium">Storefront API</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Screenshot: Storefront API documentation showing store, product, and order endpoints</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Storefront API</span></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Dedicated API for Commerce and Delivery</h2>
              <p className="text-lg text-muted-foreground mb-8">The Storefront extension exposes its own comprehensive API for building customer-facing commerce experiences. Manage stores, products, categories, carts, orders, and customers — all with the same authentication and developer experience as the core API.</p>
              <div className="space-y-4">
                {[
                  'Store and network management endpoints',
                  'Product catalog with variants and modifiers',
                  'Cart, checkout, and order management',
                  'Customer accounts and address book',
                  'Real-time order tracking for customers',
                  'Fully documented at docs.fleetbase.io/storefront-api',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="https://docs.fleetbase.io/storefront-api" target="_blank" rel="noopener noreferrer"><Button variant="outline">View Storefront API Docs</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Common questions about the Fleetbase API and integration capabilities.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building with the Fleetbase API</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Get your API key, explore the reference documentation, and start integrating Fleetbase into your systems today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="https://console.fleetbase.io" target="_blank" rel="noopener noreferrer"><Button size="lg">Get Your API Key</Button></Link>
            <Link href="https://docs.fleetbase.io/developers/api" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="outline">View API Reference</Button></Link>
            <Link href="https://documenter.getpostman.com/view/6866273/2s9YyvAfZh" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="ghost">Postman Collection</Button></Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">Free API access on all plans · No rate limits on core endpoints · Full REST, WebSocket & Webhook support</p>
        </div>
      </section>
    </div>
  );
}
