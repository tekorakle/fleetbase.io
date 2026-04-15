import type { Metadata } from 'next';
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Mobile Apps | Fleetbase Platform',
  description: 'Fleetbase mobile apps for drivers and customers. Real-time tracking, proof of delivery, in-app chat, and route navigation on iOS and Android.',
  keywords: 'fleetbase mobile app, driver app, delivery app, fleet management mobile, iOS Android logistics',
  openGraph: {
    title: 'Mobile Apps | Fleetbase Platform',
    description: 'Fleetbase mobile apps for drivers and customers. Real-time tracking, proof of delivery, in-app chat, and route navigation on iOS and Android.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Apps | Fleetbase Platform',
    description: 'Fleetbase mobile apps for drivers and customers. Real-time tracking, proof of delivery, in-app chat, and route navigation on iOS and Android.',
  },
};


const faqs = [
 {
 q: 'Are the Fleetbase mobile apps free to use?',
 a: 'Yes. Both Navigator and Storefront mobile apps are fully open-source and free to use. You can download them from the App Store and Google Play, or build and deploy your own branded version from the source code on GitHub.',
 },
 {
 q: 'Can I white-label the Navigator or Storefront app?',
 a: 'Absolutely. Both apps are open-source under AGPL-3.0. You can fork the repositories, replace the branding, customise the UI, add features, and publish your own branded app to the App Store and Google Play. If you need to keep your modifications proprietary, a commercial licence is available.',
 },
 {
 q: 'What technology are the apps built with?',
 a: 'Both apps are built with React Native and Expo, enabling a single codebase to run natively on both iOS and Android. They use the Fleetbase REST API and WebSocket channels for real-time data, and support offline-first operation for areas with poor connectivity.',
 },
 {
 q: 'Can I build my own custom app on top of Fleetbase?',
 a: 'Yes. The Fleetbase API is fully documented and open. You can build any mobile or web application on top of Fleetbase using any technology stack. The Navigator and Storefront apps serve as reference implementations showing exactly how to integrate with the platform.',
 },
 {
 q: 'Does Navigator support offline operation?',
 a: 'Yes. Navigator is designed for drivers who may operate in areas with limited connectivity. The app caches active orders and routes locally and syncs updates when connectivity is restored. Critical actions like completing stops and capturing proof of delivery work offline.',
 },
 {
 q: 'What is the difference between Navigator and Storefront app?',
 a: 'Navigator is a driver-facing app for completing deliveries — it shows assigned orders, turn-by-turn navigation, stop management, and proof of delivery capture. The Storefront app is a customer-facing app for browsing stores, placing orders, and tracking deliveries in real time.',
 },
];

const navigatorFeatures = [
 { icon: '🗺️', title: 'Turn-by-Turn Navigation', desc: 'Integrated maps with optimized routing guide drivers to every stop efficiently.' },
 { icon: '📦', title: 'Order Management', desc: 'View assigned orders, stop sequences, and delivery details in a clean driver-friendly interface.' },
 { icon: '📷', title: 'Proof of Delivery', desc: 'Capture photo, signature, barcode, and QR code proof of delivery at every stop.' },
 { icon: '⚡', title: 'Real-Time Sync', desc: 'Live order updates, dispatch notifications, and status changes sync instantly via WebSocket.' },
 { icon: '📵', title: 'Offline Support', desc: 'Continue working in areas with poor connectivity. Data syncs automatically when back online.' },
 { icon: '💬', title: 'In-App Messaging', desc: 'Communicate with dispatch and customers directly from the app without switching tools.' },
 { icon: '📊', title: 'Activity Tracking', desc: 'Automatic tracking of driver hours, distance, stops completed, and performance metrics.' },
 { icon: '🔔', title: 'Push Notifications', desc: 'Instant alerts for new assignments, order changes, and customer messages.' },
];

const storefrontFeatures = [
 { icon: '🏪', title: 'Multi-Store Browsing', desc: 'Customers can discover and browse multiple stores within a delivery network from one app.' },
 { icon: '🛍️', title: 'Product Catalog', desc: 'Rich product listings with images, descriptions, variants, modifiers, and pricing.' },
 { icon: '🛒', title: 'Cart & Checkout', desc: 'Smooth cart management and checkout flow with multiple payment method support.' },
 { icon: '📍', title: 'Live Order Tracking', desc: 'Real-time map tracking showing driver location and ETA from dispatch to delivery.' },
 { icon: '📜', title: 'Order History', desc: 'Full order history with reorder functionality and detailed receipts.' },
 { icon: '👤', title: 'Customer Accounts', desc: 'Saved addresses, payment methods, and preferences for a seamless repeat experience.' },
 { icon: '⭐', title: 'Ratings & Reviews', desc: 'Customers can rate deliveries and leave feedback to help improve service quality.' },
 { icon: '🔔', title: 'Status Notifications', desc: 'Push notifications at every order milestone keep customers informed and reduce support queries.' },
];

export default function MobileAppsPage() {
 const [openFaq, setOpenFaq] = useState<number | null>(null);

 return (
 <div className="flex flex-col">
 {/* Hero */}
 <section className="section-padding relative">
 <div className="relative container">
 <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
 <div className="flex items-center rounded-full border p-1 text-xs">
 <span className="bg-muted rounded-full px-3 py-1">Platform</span>
 <span className="px-3">Mobile Apps</span>
 </div>
 <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
 Open-Source Mobile Apps,{' '}
 <span className="text-gradient">Ready to Deploy</span>
 </h1>
 <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
 Fleetbase ships with two production-ready open-source mobile apps — Navigator for drivers and Storefront for customers. Use them as-is, white-label them as your own, or use them as the foundation for a fully custom app built on the Fleetbase API.
 </p>
 <div className="flex flex-wrap gap-4 justify-center mt-4">
 <Link href="https://github.com/fleetbase/navigator-app" target="_blank" rel="noopener noreferrer"><Button size="lg">Navigator on GitHub</Button></Link>
 <Link href="https://github.com/fleetbase/storefront-app" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="outline">Storefront App on GitHub</Button></Link>
 <Link href="/developers/api"><Button size="lg" variant="ghost">Build Your Own App</Button></Link>
 </div>
 <div className="w-full mt-12 rounded-lg border overflow-hidden shadow-2xl relative aspect-video">
 <Image
 src="/images/console-screenshots/navigator-order-detail.png"
 alt="Fleetbase mobile app ecosystem — Navigator driver app and Storefront customer app connected to live FleetOps dispatch"
 fill
 className="object-cover object-top"
 sizes="(max-width: 768px) 100vw, 80vw"
 priority
 />
 </div>
 </div>
 </div>
 </section>

 {/* Two Apps Overview */}
 <section className="py-24 bg-gradient-to-b from-background to-muted/20">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">Two Apps. One Platform.</h2>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Fleetbase provides dedicated mobile experiences for both sides of every delivery — the driver completing it and the customer receiving it.</p>
 </div>
 <div className="grid md:grid-cols-2 gap-8">
 <div className="bg-card border rounded-lg p-8">
 <div className="text-5xl mb-4">🧭</div>
 <h3 className="text-2xl font-bold mb-2">Navigator</h3>
 <p className="text-muted-foreground mb-4">The driver app. Built for the field.</p>
 <p className="text-sm text-muted-foreground mb-6">Navigator gives drivers everything they need to complete deliveries efficiently — assigned orders, optimized routing, proof of delivery capture, real-time dispatch communication, and offline support for areas with poor connectivity.</p>
 <div className="flex gap-3">
 <Link href="https://github.com/fleetbase/navigator-app" target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline">View Source</Button></Link>
 <Button size="sm" variant="ghost">App Store</Button>
 <Button size="sm" variant="ghost">Google Play</Button>
 </div>
 </div>
 <div className="bg-card border rounded-lg p-8">
 <div className="text-5xl mb-4">🛍️</div>
 <h3 className="text-2xl font-bold mb-2">Storefront</h3>
 <p className="text-muted-foreground mb-4">The customer app. Built for conversion.</p>
 <p className="text-sm text-muted-foreground mb-6">The Storefront customer app lets shoppers browse stores, place orders, track deliveries in real time, and manage their account — all under your brand. It connects directly to your Fleetbase Storefront instance with zero additional backend work.</p>
 <div className="flex gap-3">
 <Link href="https://github.com/fleetbase/storefront-app" target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline">View Source</Button></Link>
 <Button size="sm" variant="ghost">App Store</Button>
 <Button size="sm" variant="ghost">Google Play</Button>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Navigator Deep Dive */}
 <section className="py-24">
 <div className="container mx-auto px-4">
 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
 <div>
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Navigator App</span></div>
 <h2 className="text-3xl md:text-4xl font-bold mb-6">Give Your Drivers the Tools They Need to Succeed</h2>
 <p className="text-lg text-muted-foreground mb-8">Navigator is a purpose-built driver app that integrates directly with FleetOps. From the moment a driver is dispatched to the moment a delivery is confirmed, Navigator handles the entire workflow — on iOS, Android, and even in areas with no signal.</p>
 </div>
 <div className="w-full h-[400px] rounded-lg border overflow-hidden shadow-lg relative">
 <Image
 src="/images/console-screenshots/navigator-orders-calendar.png"
 alt="Fleetbase Navigator driver app showing orders calendar and scheduled deliveries"
 fill
 className="object-cover object-top"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {navigatorFeatures.map((feat, i) => (
 <div key={i} className="bg-card border rounded-lg p-5">
 <div className="text-3xl mb-3">{feat.icon}</div>
 <h4 className="font-semibold text-sm mb-2">{feat.title}</h4>
 <p className="text-xs text-muted-foreground">{feat.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Storefront App Deep Dive */}
 <section className="py-24 bg-muted/20">
 <div className="container mx-auto px-4">
 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
 <div className="w-full h-[400px] rounded-lg border overflow-hidden shadow-lg relative order-last md:order-first">
 <Image
 src="/images/console-screenshots/storefront-customer-app.png"
 alt="Fleetbase Storefront customer app showing product catalogue, store listing, and order management interface"
 fill
 className="object-cover object-top"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 <div>
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Storefront App</span></div>
 <h2 className="text-3xl md:text-4xl font-bold mb-6">A Customer App That Drives Repeat Business</h2>
 <p className="text-lg text-muted-foreground mb-8">The Storefront customer app delivers a polished, branded shopping and delivery experience that keeps customers coming back. Real-time order tracking, seamless checkout, and push notifications at every step create the kind of experience customers expect from leading delivery platforms — but under your brand, not theirs.</p>
 </div>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {storefrontFeatures.map((feat, i) => (
 <div key={i} className="bg-card border rounded-lg p-5">
 <div className="text-3xl mb-3">{feat.icon}</div>
 <h4 className="font-semibold text-sm mb-2">{feat.title}</h4>
 <p className="text-xs text-muted-foreground">{feat.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Build Your Own */}
 <section className="py-24">
 <div className="container mx-auto px-4">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4"><span className="text-primary">●</span><span className="ml-2">Custom App Development</span></div>
 <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Your Own App on the Fleetbase API</h2>
 <p className="text-lg text-muted-foreground mb-8">Navigator and Storefront are just the beginning. The Fleetbase API is fully open and documented, enabling you to build any mobile experience you can imagine — custom driver apps, field service apps, customer portals, or entirely new logistics products. The existing apps are your reference implementation.</p>
 <div className="space-y-4">
 {[
 'Full REST API with 50+ endpoints across all resources',
 'Real-time WebSocket channels for live data',
 'Webhook events for every platform action',
 'React Native reference apps to accelerate development',
 'Comprehensive API documentation and Postman collection',
 'Active developer community and open-source codebase',
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
 <Link href="/developers/api"><Button>View API Reference</Button></Link>
 <Link href="/developers/console"><Button variant="outline">Developer Console</Button></Link>
 </div>
 </div>
 <div className="w-full h-[460px] rounded-lg border overflow-hidden shadow-lg relative">
 <Image
 src="/images/console-screenshots/navigator-tracking-dashboard.png"
 alt="Fleetbase Navigator mobile app showing driver job list with active delivery, navigation controls, and proof of delivery capture"
 fill
 className="object-cover object-top"
 sizes="(max-width: 768px) 100vw, 50vw"
 />
 </div>
 </div>
 </div>
 </section>

 {/* Tech Stack */}
 <section className="py-24 bg-muted/20">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Modern, Open Technology</h2>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Both apps are built with the same technology stack, making it easy for any React Native developer to customize, extend, or build from scratch.</p>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
 {[
 { icon: '⚛️', name: 'React Native', desc: 'Cross-platform native apps from a single codebase' },
 { icon: '📦', name: 'Expo', desc: 'Managed workflow for fast development and deployment' },
 { icon: '📘', name: 'TypeScript', desc: 'Type-safe code for reliability and maintainability' },
 { icon: '🔄', name: 'Fleetbase API', desc: 'REST API and WebSocket channels for all data' },
 ].map((tech, i) => (
 <div key={i} className="bg-card border rounded-lg p-6">
 <div className="text-4xl mb-3">{tech.icon}</div>
 <h4 className="font-semibold mb-2">{tech.name}</h4>
 <p className="text-sm text-muted-foreground">{tech.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-24">
 <div className="container mx-auto px-4">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Common questions about Fleetbase mobile apps.</p>
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
 <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Drivers and Customers on Mobile Today</h2>
 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Deploy Navigator and Storefront as-is, white-label them as your own, or build a completely custom app on the Fleetbase API.</p>
 <div className="flex flex-wrap gap-4 justify-center">
 <Link href="https://github.com/fleetbase/navigator-app" target="_blank" rel="noopener noreferrer"><Button size="lg">Get Navigator</Button></Link>
 <Link href="https://github.com/fleetbase/storefront-app" target="_blank" rel="noopener noreferrer"><Button size="lg" variant="outline">Get Storefront App</Button></Link>
 <Link href="/developers/api"><Button size="lg" variant="ghost">Build Custom App</Button></Link>
 </div>
 <p className="text-sm text-muted-foreground mt-6">100% open-source · iOS & Android · Free to use and white-label</p>
 </div>
 </section>
 </div>
 );
}
