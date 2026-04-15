import type { Metadata } from 'next';
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Developer Console | Fleetbase',
  description: 'Access the Fleetbase Developer Console to manage API keys, webhooks, sandbox environments, and integrations.',
  keywords: 'fleetbase developer console, API keys, webhooks, sandbox, developer tools',
  openGraph: {
    title: 'Developer Console | Fleetbase',
    description: 'Access the Fleetbase Developer Console to manage API keys, webhooks, sandbox environments, and integrations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Console | Fleetbase',
    description: 'Access the Fleetbase Developer Console to manage API keys, webhooks, sandbox environments, and integrations.',
  },
};
const faqs = [
 {
 q: 'What is the Fleetbase Developer Console?',
 a: 'The Developer Console is a dedicated extension within the Fleetbase platform that gives developers full control over API keys, webhooks, event logs, socket channels, and real-time activity monitoring. It is the central hub for integrating external systems with Fleetbase.',
 },
 {
 q: 'How do API keys work in Fleetbase?',
 a: 'Each organization can generate multiple API keys with configurable expiry dates. Keys are scoped to your organization and can be rotated or revoked at any time from the console. All API requests are authenticated using Bearer token authorization.',
 },
 {
 q: 'What events can I subscribe to via webhooks?',
 a: 'Fleetbase emits webhook events for all major platform actions including order lifecycle events (created, dispatched, completed, cancelled), driver status changes, entity updates, payment events, and custom extension events. You can subscribe to specific events or receive all events.',
 },
 {
 q: 'Can I test webhooks without a public endpoint?',
 a: 'Yes. The Developer Console includes a webhook test tool that lets you send test payloads to any endpoint. You can also use tools like ngrok to tunnel to a local development server and receive live webhook events during development.',
 },
 {
 q: 'What are Socket Channels?',
 a: 'Socket Channels are real-time WebSocket channels powered by Soketi (a Pusher-compatible server). They allow your application to receive live updates from Fleetbase without polling. The console shows all active channels, connected clients, and recent messages.',
 },
 {
 q: 'How long are API logs retained?',
 a: 'API request logs are retained for 30 days on standard plans. Enterprise plans can configure extended retention. Logs include the full request and response payload, latency, status code, and the API key used to authenticate the request.',
 },
 {
 q: 'Can I have multiple API keys for different environments?',
 a: 'Yes. Best practice is to create separate API keys for development, staging, and production environments. Each key can be named and labeled for easy identification. You can also set expiry dates on keys to enforce rotation policies.',
 },
];

const capabilities = [
 { icon: '🔑', title: 'API Key Management', desc: 'Generate, name, and manage multiple API keys per organization. Set expiry dates, rotate keys, and revoke access instantly.' },
 { icon: '🔔', title: 'Webhook Configuration', desc: 'Subscribe to platform events and deliver real-time HTTP notifications to any endpoint. Configure retry logic and view delivery history.' },
 { icon: '📋', title: 'Request Logs', desc: 'Full audit trail of every API request — method, endpoint, payload, response, latency, status code, and authenticating key.' },
 { icon: '⚡', title: 'Socket Channels', desc: 'Monitor active WebSocket channels, connected clients, and real-time message streams for live data integrations.' },
 { icon: '📡', title: 'Event Stream', desc: 'Browse all platform events in chronological order. Filter by type, entity, or time range to debug integration issues.' },
 { icon: '🛡️', title: 'Sandbox Mode', desc: 'Test your integration against a fully isolated sandbox environment without affecting production data.' },
];

export default function DeveloperConsolePage() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);

 return (
 <div className="flex flex-col">
 {/* Hero */}
 <section className="section-padding relative">
 <div className="relative container">
 <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
 <div className="flex items-center rounded-full border p-1 text-xs">
 <span className="bg-muted rounded-full px-3 py-1">Developers</span>
 <span className="px-3">Console</span>
 </div>
 <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
 Full Developer Control,{' '}
 <span className="text-gradient">Built Into the Platform</span>
 </h1>
 <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
 The Fleetbase Developer Console gives you everything you need to integrate, debug, and monitor your logistics platform. Manage API keys, configure webhooks, inspect request logs, and monitor real-time socket channels — all from one place.
 </p>
 <div className="flex flex-wrap gap-4 justify-center mt-4">
 <Link href="https://console.fleetbase.io" target="_blank" rel="noopener noreferrer"><Button size="lg">Open Developer Console</Button></Link>
 <Link href="/developers/api"><Button size="lg" variant="outline">View API Reference</Button></Link>
 <Link href="https://github.com/fleetbase/dev-engine" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="ghost">View Source</Button></Link>
 </div>
 <div className="w-full mt-12 rounded-lg border overflow-hidden shadow-2xl relative aspect-video">
 <Image
 src="/images/console-screenshots/developers-monitoring.webp"
 alt="Fleetbase Developer Console dashboard showing API monitoring, request logs, webhook deliveries, and socket channel activity"
 fill
 className="object-cover object-top"
 sizes="(max-width: 768px) 100vw, 80vw"
 priority
 />
 </div>
 </div>
 </div>
 </section>

 {/* Capabilities Grid */}
 <section className="py-24 bg-gradient-to-b from-background to-muted/20">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything a Developer Needs</h2>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Six core capabilities that make integrating with Fleetbase fast, reliable, and transparent.</p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 {capabilities.map((cap, i) => (
 <div key={i} className="bg-card border rounded-lg p-6">
 <div className="text-4xl mb-4">{cap.icon}</div>
 <h3 className="font-semibold text-lg mb-2">{cap.title}</h3>
 <p className="text-sm text-muted-foreground">{cap.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* API Keys */}
 <section className="py-24">
 <div className="container mx-auto px-4">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">API Key Management</span></div>
 <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure API Keys with Full Lifecycle Control</h2>
 <p className="text-lg text-muted-foreground mb-8">Generate multiple API keys for different environments and use cases. Every key is scoped to your organization, can be named for easy identification, and can be revoked instantly if compromised. Set expiry dates to enforce rotation policies across your team.</p>
 <div className="space-y-4">
 {[
 'Generate unlimited API keys per organization',
 'Set custom expiry dates for automatic rotation',
 'Name and label keys by environment or service',
 'Revoke keys instantly with a single click',
 'View last-used timestamp for each key',
 'Bearer token authentication on all endpoints',
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
 <div className="w-full h-[460px] rounded-lg border overflow-hidden shadow-lg relative">
 <Image
 src="/images/console-screenshots/developers-api-keys.webp"
 alt="Fleetbase Developer Console API key management showing key list with names, creation dates, expiry settings, and revoke controls"
 fill
 className="object-cover object-top"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 </div>
 </div>
 </section>

 {/* Webhooks */}
 <section className="py-24 bg-muted/20">
 <div className="container mx-auto px-4">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div className="w-full h-[460px] rounded-lg border overflow-hidden shadow-lg relative order-last md:order-first">
 <Image
 src="/images/console-screenshots/developers-webhooks.webp"
 alt="Fleetbase Developer Console webhook configuration showing endpoint URL, event type subscriptions, delivery history, and retry settings"
 fill
 className="object-cover object-top"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 <div>
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Webhooks</span></div>
 <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Event Delivery to Any Endpoint</h2>
 <p className="text-lg text-muted-foreground mb-8">Configure webhooks to push real-time event notifications to your systems the moment something happens in Fleetbase. Subscribe to specific event types or receive all events. Every delivery is logged with the full request and response so you can debug failures instantly.</p>
 <div className="grid grid-cols-2 gap-4">
 {[
 { label: 'Order Events', examples: 'created, dispatched, completed, cancelled' },
 { label: 'Driver Events', examples: 'assigned, location updated, status changed' },
 { label: 'Payment Events', examples: 'invoice created, payment received, payout sent' },
 { label: 'Entity Events', examples: 'contact, place, vehicle, fleet updates' },
 ].map((ev, i) => (
 <div key={i} className="bg-card border rounded-lg p-4">
 <div className="font-semibold text-sm mb-1">{ev.label}</div>
 <div className="text-xs text-muted-foreground">{ev.examples}</div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Request Logs */}
 <section className="py-24">
 <div className="container mx-auto px-4">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Request Logs & Monitoring</span></div>
 <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Visibility Into Every API Request</h2>
 <p className="text-lg text-muted-foreground mb-8">The request log gives you a full audit trail of every API call made to your Fleetbase instance. Inspect the request method, endpoint, payload, response body, HTTP status, latency, and which API key was used — all in real time.</p>
 <div className="space-y-6">
 {[
 { icon: '🔍', title: 'Full Request & Response', desc: 'Inspect the complete request payload and response body for every API call, including headers and query parameters.' },
 { icon: '⏱️', title: 'Latency Tracking', desc: 'Monitor response times across all endpoints to identify performance bottlenecks before they impact your users.' },
 { icon: '🚨', title: 'Error Highlighting', desc: '4xx and 5xx responses are highlighted for quick identification. Drill into any failed request to see the exact error returned.' },
 { icon: '🔎', title: 'Filter & Search', desc: 'Filter logs by endpoint, HTTP method, status code, API key, or time range to quickly find the request you need.' },
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
 src="/images/console-screenshots/developers-monitoring-detail.webp"
 alt="Fleetbase Developer Console API request logs showing method, endpoint, HTTP status, response time, and expandable request/response inspector"
 fill
 className="object-cover object-top"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 </div>
 </div>
 </section>

 {/* Socket Channels */}
 <section className="py-24 bg-muted/20">
 <div className="container mx-auto px-4">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div className="w-full h-[460px] rounded-lg border overflow-hidden shadow-lg relative order-last md:order-first">
 <Image
 src="/images/console-screenshots/developers-monitoring.webp"
 alt="Fleetbase Developer Console socket channels monitor showing active WebSocket connections, channel names, client counts, and live message stream"
 fill
 className="object-cover object-top"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 <div>
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Real-Time Socket Channels</span></div>
 <h2 className="text-3xl md:text-4xl font-bold mb-6">Monitor Live WebSocket Connections in Real Time</h2>
 <p className="text-lg text-muted-foreground mb-8">Fleetbase uses Soketi — a Pusher-compatible WebSocket server — to deliver real-time updates to connected clients. The Developer Console gives you full visibility into active channels, connected clients, and message throughput so you can monitor and debug live data streams.</p>
 <div className="space-y-4">
 {[
 'View all active socket channels by name and type',
 'Monitor connected client count per channel',
 'Inspect recent messages and event payloads',
 'Pusher-compatible — works with any Pusher SDK',
 'Used for live order tracking, driver location, and notifications',
 'Automatically scales with your connection volume',
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
 </div>
 </div>
 </section>

 {/* Code Example */}
 <section className="py-24">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Quick Start</span></div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Integrating in Minutes</h2>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Generate an API key from the Developer Console and make your first request in seconds.</p>
 </div>
 <div className="max-w-3xl mx-auto space-y-6">
 <div className="bg-card border rounded-lg overflow-hidden">
 <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
 <div className="w-3 h-3 rounded-full bg-red-400"></div>
 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
 <div className="w-3 h-3 rounded-full bg-green-400"></div>
 <span className="ml-2 text-xs text-muted-foreground">REST API — Create an Order</span>
 </div>
 <div className="p-6 font-mono text-sm overflow-x-auto">
 <div className="text-muted-foreground"># Authenticate with your API key from the Developer Console</div>
 <div className="mt-3">curl -X POST https://api.fleetbase.io/v1/orders \</div>
 <div className="ml-4">-H &quot;Authorization: Bearer YOUR_API_KEY&quot; \</div>
 <div className="ml-4">-H &quot;Content-Type: application/json&quot; \</div>
 <div className="ml-4">{`-d '{ "payload": { "pickup": "place_xxx", "dropoff": "place_yyy" }, "type": "delivery" }'`}</div>
 </div>
 </div>
 <div className="bg-card border rounded-lg overflow-hidden">
 <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
 <div className="w-3 h-3 rounded-full bg-red-400"></div>
 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
 <div className="w-3 h-3 rounded-full bg-green-400"></div>
 <span className="ml-2 text-xs text-muted-foreground">WebSocket — Subscribe to Live Updates</span>
 </div>
 <div className="p-6 font-mono text-sm overflow-x-auto">
 <div className="text-muted-foreground">// Connect to a real-time order channel using Pusher SDK</div>
 <div className="mt-3">import Pusher from &apos;pusher-js&apos;;</div>
 <div className="mt-3">{`const pusher = new Pusher('YOUR_APP_KEY', {`}</div>
 <div className="ml-4">{`wsHost: 'socket.fleetbase.io', cluster: 'default',`}</div>
 <div>{'});'}</div>
 <div className="mt-3">{`const channel = pusher.subscribe('order.order_xxx');`}</div>
 <div>{`channel.bind('order.dispatched', (data) => { console.log(data); });`}</div>
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
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Common questions about the Fleetbase Developer Console.</p>
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
 <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Building?</h2>
 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Open the Developer Console, generate your first API key, and start integrating Fleetbase into your systems today.</p>
 <div className="flex flex-wrap gap-4 justify-center">
 <Link href="https://console.fleetbase.io" target="_blank" rel="noopener noreferrer"><Button size="lg">Open Developer Console</Button></Link>
 <Link href="/developers/api"><Button size="lg" variant="outline">Explore the API</Button></Link>
 </div>
 <p className="text-sm text-muted-foreground mt-6">Free on all plans · Full API access · No rate limits on core endpoints</p>
 </div>
 </section>
 </div>
 );
}
