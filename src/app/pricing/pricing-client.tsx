'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
 Check, X, ArrowRight, Zap, Server, Users, Truck, Package,
 Webhook, Key,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

// ─── Cloud Pricing Tiers ──────────────────────────────────────────────────────
const CLOUD_TIERS = [
 {
 name: 'Starter',
 monthlyPrice: 50,
 annualPrice: 40,
 units: 100,
 overage: 0.75,
 description: 'Perfect for small operations getting started with Fleetbase.',
 cta: 'Start Free Trial',
 ctaHref: 'https://console.fleetbase.io/register',
 highlight: false,
 badge: null,
 },
 {
 name: 'Essentials',
 monthlyPrice: 100,
 annualPrice: 80,
 units: 175,
 overage: 0.75,
 description: 'For small teams ready to scale beyond the starter plan.',
 cta: 'Start Free Trial',
 ctaHref: 'https://console.fleetbase.io/onboard',
 highlight: false,
 badge: null,
 },
 {
 name: 'Growth',
 monthlyPrice: 200,
 annualPrice: 160,
 units: 300,
 overage: 0.75,
 description: 'For growing teams managing regular delivery operations.',
 cta: 'Start Free Trial',
 ctaHref: 'https://console.fleetbase.io/onboard',
 highlight: false,
 badge: null,
 },
 {
 name: 'Scale',
 monthlyPrice: 400,
 annualPrice: 320,
 units: 800,
 overage: 0.55,
 description: 'For scaling operations with higher order volumes.',
 cta: 'Start Free Trial',
 ctaHref: 'https://console.fleetbase.io/register',
 highlight: true,
 badge: 'Most Popular',
 },
 {
 name: 'Pro',
 monthlyPrice: 600,
 annualPrice: 480,
 units: 1700,
 overage: 0.40,
 description: 'For professional logistics teams with complex workflows.',
 cta: 'Start Free Trial',
 ctaHref: 'https://console.fleetbase.io/register',
 highlight: false,
 badge: 'Best Value',
 },
 {
 name: 'Elite',
 monthlyPrice: 800,
 annualPrice: 640,
 units: 3000,
 overage: 0.30,
 description: 'For high-volume operations requiring maximum efficiency.',
 cta: 'Start Free Trial',
 ctaHref: 'https://console.fleetbase.io/register',
 highlight: false,
 badge: null,
 },
 {
 name: 'Enterprise',
 monthlyPrice: 1000,
 annualPrice: 800,
 units: 5000,
 overage: 0.20,
 description: 'For enterprise logistics operations at scale.',
 cta: 'Contact Sales',
 ctaHref: '/contact/sales',
 highlight: false,
 badge: null,
 },
 {
 name: 'Custom',
 monthlyPrice: null,
 annualPrice: null,
 units: null,
 overage: null,
 description: 'Tailored infrastructure, dedicated support, and custom SLAs for large enterprises.',
 cta: 'Book a Call',
 ctaHref: 'https://cal.com/shivthakker/enquiry',
 highlight: false,
 badge: 'Enterprise',
 },
];

// ─── Resource Unit Costs ──────────────────────────────────────────────────────
const RESOURCE_UNITS = [
 { icon: Package, label: 'Order', units: 2 },
 { icon: Users, label: 'User', units: 5 },
 { icon: Truck, label: 'Vehicle', units: 1 },
 { icon: Users, label: 'Driver', units: 1 },
 { icon: Webhook, label: 'Webhook', units: 5 },
 { icon: Key, label: 'API Key', units: 1 },
];

// ─── Overage Packs ────────────────────────────────────────────────────────────
const OVERAGE_PACKS = [
 { name: 'Small', price: 90, units: 100 },
 { name: 'Medium', price: 240, units: 300 },
 { name: 'Large', price: 375, units: 500 },
 { name: 'Jumbo', price: 700, units: 1000 },
];

// ─── Support Tiers ────────────────────────────────────────────────────────────
const SUPPORT_TIERS = [
 {
 name: 'Community',
 price: 'Free',
 sla: 'None',
 colorClass: 'bg-green-500',
 features: [
 { label: 'Docs & Guides', included: true },
 { label: 'Discord / GitHub Support', included: true },
 { label: 'Email Support', included: false },
 { label: 'SLA Guarantee', included: false },
 { label: 'Priority Bug Fixes', included: false },
 { label: 'Configuration Assistance', included: false },
 { label: 'Technical Troubleshooting', included: false },
 { label: 'Private Discord Channel', included: false },
 ],
 cta: 'Join Discord',
 ctaHref: 'https://discord.com/invite/HnTqQ6zAVn',
 highlight: false,
 },
 {
 name: 'Auto Upgrades',
 price: '$200/mo',
 sla: 'None',
 colorClass: 'bg-gray-400',
 features: [
 { label: 'Docs & Guides', included: true },
 { label: 'Discord / GitHub Support', included: true },
 { label: 'Automatic Security Patches', included: true },
 { label: 'Limited Email Support', included: true },
 { label: 'SLA Guarantee', included: false },
 { label: 'Priority Bug Fixes', included: false },
 { label: 'Configuration Assistance', included: false },
 { label: 'Technical Troubleshooting', included: false },
 ],
 cta: 'Get Started',
 ctaHref: '/contact/sales',
 highlight: false,
 },
 {
 name: 'Business',
 price: '$1,000/mo',
 sla: '72h SLA',
 colorClass: 'bg-blue-500',
 features: [
 { label: 'Docs & Guides', included: true },
 { label: 'Discord / GitHub Support', included: true },
 { label: 'Automatic Security Patches', included: true },
 { label: 'Email Support (72h SLA)', included: true },
 { label: 'Limited Priority Bug Fixes', included: true },
 { label: 'Basic Configuration Assistance', included: true },
 { label: 'Technical Troubleshooting', included: false },
 { label: 'Private Discord Channel', included: false },
 ],
 cta: 'Get Started',
 ctaHref: '/contact/sales',
 highlight: true,
 },
 {
 name: 'Developer',
 price: '$3,500/mo',
 sla: '24h SLA',
 colorClass: 'bg-purple-500',
 features: [
 { label: 'Docs & Guides', included: true },
 { label: 'Email + Private Discord + Weekly Phone', included: true },
 { label: 'Automatic Security Patches', included: true },
 { label: 'Email Support (24h SLA)', included: true },
 { label: 'Priority Bug Fixes', included: true },
 { label: 'Full Configuration Assistance', included: true },
 { label: 'Full Technical Troubleshooting', included: true },
 { label: 'Private Discord with CTO', included: true },
 ],
 cta: 'Contact Sales',
 ctaHref: '/contact/sales',
 highlight: false,
 },
 {
 name: 'Fractional CTO',
 price: '$5,000/mo',
 sla: 'Full-time',
 colorClass: 'bg-orange-500',
 features: [
 { label: 'Dedicated Engineer', included: true },
 { label: '2hr Weekly Calls with CTO', included: true },
 { label: 'Proactive Monitoring', included: true },
 { label: 'Release Management', included: true },
 { label: 'Strategic Reviews', included: true },
 { label: 'PR Reviews', included: true },
 { label: 'Custom Roadmap Collaboration', included: true },
 { label: 'Full Technical Troubleshooting', included: true },
 ],
 cta: 'Contact Sales',
 ctaHref: '/contact/sales',
 highlight: false,
 },
 {
 name: 'Enterprise+',
 price: 'Contact Us',
 sla: 'Full-time scalable',
 colorClass: 'bg-red-500',
 features: [
 { label: 'Scalable Engineering Team', included: true },
 { label: 'Daily Support Access', included: true },
 { label: 'Full Roadmap Collaboration', included: true },
 { label: 'Dedicated Full-Stack Team', included: true },
 { label: 'Enterprise-Level Oversight', included: true },
 { label: 'Team Expansion Available', included: true },
 { label: 'Strategic Quarterly Reviews', included: true },
 { label: 'Custom SLA', included: true },
 ],
 cta: 'Contact Sales',
 ctaHref: 'https://cal.com/shivthakker/enquiry',
 highlight: false,
 },
];


// ─── Commercial License Options ───────────────────────────────────────────────
const LICENSE_OPTIONS = [
 {
 name: 'Annual License',
 price: '$25,000/year',
 flexibility: 'Annual renewal',
 support: 'Includes all upgrades + Business Support',
 coverage: 'All versions during active term',
 note: 'Best value for continuous updates and support.',
 highlight: true,
 },
 {
 name: 'Monthly License',
 price: '$2,500/month',
 flexibility: 'Flexible month-to-month',
 support: 'Same as Annual',
 coverage: 'All versions during active term',
 note: 'Ideal for pilot or short-term use.',
 highlight: false,
 },
 {
 name: 'Major Version License',
 price: '$25,000 one-time',
 flexibility: 'Perpetual',
 support: 'None',
 coverage: 'Single major version (e.g. 1.x.x)',
 note: 'No ongoing support or updates.',
 highlight: false,
 },
 {
 name: 'Minor Version License',
 price: '$15,000 one-time',
 flexibility: 'Perpetual',
 support: 'None',
 coverage: 'Single minor version (e.g. 1.1.x)',
 note: 'No ongoing support or updates.',
 highlight: false,
 },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const FAQS = [
 {
 q: 'What is a Resource Unit?',
 a: 'Resource Units are the currency of your Fleetbase Cloud plan. Different platform resources consume different amounts: Orders = 2 units, Users = 5 units, Vehicles = 1 unit, Drivers = 1 unit, Webhooks = 5 units, API Keys = 1 unit. Your plan includes a monthly allocation, and you only pay overage for what you use beyond that.',
 },
 {
 q: 'Can I switch plans at any time?',
 a: 'Yes. You can upgrade or downgrade your Cloud plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.',
 },
 {
 q: 'What is the difference between Cloud and Self-Hosted?',
 a: 'Fleetbase Cloud is fully managed by us — we handle infrastructure, security patches, and uptime. Self-Hosted means you deploy Fleetbase on your own servers or cloud account. The one-time $2,500 implementation fee covers deployment, CI/CD setup, configuration, and branding.',
 },
 {
 q: 'Do I need a Commercial License?',
 a: 'Only if you plan to build proprietary (closed-source) extensions or integrations on top of Fleetbase. The core platform is AGPL-licensed, which requires open-sourcing modifications. A Commercial License waives this obligation and keeps your custom code private.',
 },
 {
 q: 'Is there a free trial?',
 a: 'Yes — every Cloud plan includes a 7-day free trial with . You get access to the full platform so you can evaluate it against your real operations.',
 },
 {
 q: 'What does the Self-Hosted implementation fee include?',
 a: 'The $2,500 one-time fee covers: server deployment on your infrastructure, CI/CD pipeline setup, environment configuration, custom branding, and a go-live handover session. Ongoing support is available separately via our support tiers.',
 },
 {
 q: 'Can I add more Resource Units mid-month?',
 a: 'Yes. You can purchase Resource Unit Packs at any time: Small (100 units / $90), Medium (300 units / $240), Large (500 units / $375), or Jumbo (1,000 units / $700). These top up your allocation immediately.',
 },
 {
 q: 'What is Professional Services?',
 a: 'Professional Services covers custom development work — building bespoke extensions, integrating with your existing ERP/CRM, custom workflow automation, data migration, and training. Pricing is scoped per project. Contact our sales team for a quote.',
 },
];

export default function PricingClient() {
 const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

 return (
 <div className="flex flex-col">
 {/* Hero */}
 <section className="section-padding text-center">
 <div className="container mx-auto px-4 max-w-4xl">
 <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
 <span className="text-primary">●</span>
 <span>Transparent, Usage-Based Pricing</span>
 </div>
 <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
 Pay for what you use.{' '}
 <span className="text-primary">Nothing more.</span>
 </h1>
 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Fleetbase Cloud starts at $50/month. Self-hosted implementation is a one-time $2,500 fee. No per-seat charges. No hidden fees. No surprises.
 </p>
 <div className="flex gap-4 justify-center flex-wrap">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/register">
 Start 7-Day Free Trial <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">Talk to Sales</Link>
 </Button>
 </div>
 <p className="text-sm text-muted-foreground mt-4"> Cancel anytime</p>
 </div>
 </section>

 {/* Billing Toggle */}
 <section className="pb-4">
 <div className="container mx-auto px-4 flex justify-center">
 <div className="inline-flex items-center gap-1 rounded-full border p-1 bg-muted/30">
 <button
 onClick={() => setBilling('monthly')}
 className={cn(
 'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
 billing === 'monthly' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'
 )}
 >
 Monthly
 </button>
 <button
 onClick={() => setBilling('annual')}
 className={cn(
 'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
 billing === 'annual' ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'
 )}
 >
 Annual
 <span className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full font-semibold">Save 20%</span>
 </button>
 </div>
 </div>
 </section>

 {/* Cloud Pricing Tiers */}
 <section className="py-12">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-2">Fleetbase Cloud</h2>
 <p className="text-muted-foreground">Fully managed. Automatic updates. 99.9% uptime SLA. Unlimited users &amp; drivers.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
 {CLOUD_TIERS.map((tier) => (
 <Card
 key={tier.name}
 className={cn(
 'relative flex flex-col',
 tier.highlight && 'border-primary shadow-lg shadow-primary/10'
 )}
 >
 {tier.badge && (
 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
 {tier.badge}
 </div>
 )}
 <CardHeader className="pb-3">
 <CardTitle className="text-lg">{tier.name}</CardTitle>
 <CardDescription className="text-xs">{tier.description}</CardDescription>
 </CardHeader>
 <CardContent className="flex-1 space-y-3">
 <div>
 {tier.monthlyPrice !== null ? (
 <>
 <span className="text-3xl font-bold">
 ${billing === 'annual' ? tier.annualPrice : tier.monthlyPrice}
 </span>
 <span className="text-muted-foreground text-sm">/mo</span>
 {billing === 'annual' && tier.annualPrice && (
 <div className="text-xs text-green-600 dark:text-green-400 mt-0.5">
 Billed annually (${tier.annualPrice * 12}/yr)
 </div>
 )}
 </>
 ) : (
 <span className="text-3xl font-bold">Custom</span>
 )}
 </div>
 <div className="space-y-1.5 text-sm">
 {tier.units !== null ? (
 <>
 <div className="flex items-center gap-2">
 <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
 <span><strong>{tier.units.toLocaleString()}</strong> units included/mo</span>
 </div>
 <div className="flex items-center gap-2">
 <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
 <span>${tier.overage}/unit overage</span>
 </div>
 </>
 ) : (
 <>
 <div className="flex items-center gap-2">
 <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
 <span>Custom resource unit allocation</span>
 </div>
 <div className="flex items-center gap-2">
 <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
 <span>Negotiated overage rates</span>
 </div>
 <div className="flex items-center gap-2">
 <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
 <span>Dedicated infrastructure</span>
 </div>
 <div className="flex items-center gap-2">
 <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
 <span>Custom SLA &amp; support</span>
 </div>
 </>
 )}
 <div className="flex items-center gap-2">
 <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
 <span>Unlimited users &amp; drivers</span>
 </div>
 <div className="flex items-center gap-2">
 <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
 <span>All platform modules</span>
 </div>
 <div className="flex items-center gap-2">
 <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
 <span>99.9% uptime SLA</span>
 </div>
 </div>
 </CardContent>
 <CardFooter className="pt-4">
 <Button
 className="w-full"
 variant={tier.highlight ? 'default' : 'outline'}
 asChild
 >
 <Link
 href={tier.ctaHref}
 {...(tier.ctaHref.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
 >
 {tier.cta}
 </Link>
 </Button>
 </CardFooter>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* Resource Units Explainer */}
 <section className="py-12 bg-muted/20">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold mb-2">How Resource Units Work</h2>
 <p className="text-muted-foreground">Each resource type in your account consumes a set number of units per month. Your plan includes a monthly allocation — you only pay overage for what you use beyond that.</p>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
 {RESOURCE_UNITS.map((r) => (
 <div key={r.label} className="bg-card border rounded-lg p-4 text-center">
 <r.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
 <div className="text-2xl font-bold">{r.units}</div>
 <div className="text-xs text-muted-foreground">{r.label}</div>
 </div>
 ))}
 </div>
 <div className="bg-card border rounded-xl p-6">
 <h3 className="font-semibold mb-4">Resource Unit Top-Up Packs</h3>
 <p className="text-sm text-muted-foreground mb-4">Need more units mid-month? Purchase a top-up pack at any time — no plan change required.</p>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
 {OVERAGE_PACKS.map((pack) => (
 <div key={pack.name} className="border rounded-lg p-3 text-center">
 <div className="text-xs text-muted-foreground mb-1">{pack.name}</div>
 <div className="text-xl font-bold">${pack.price}</div>
 <div className="text-xs text-muted-foreground">{pack.units} units</div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Self-Hosted + Professional Services */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-2">Other Deployment Options</h2>
 <p className="text-muted-foreground">Full control over your infrastructure, or custom-built solutions for your unique requirements.</p>
 </div>
 <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
 {/* Self-Hosted */}
 <Card className="flex flex-col">
 <CardHeader>
 <div className="flex items-center gap-3 mb-2">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
 <Server className="w-5 h-5 text-primary" />
 </div>
 <div>
 <CardTitle>Self-Hosted Implementation</CardTitle>
 <CardDescription>Deploy on your own infrastructure</CardDescription>
 </div>
 </div>
 <div className="text-3xl font-bold mt-2">$2,500 <span className="text-base font-normal text-muted-foreground">one-time</span></div>
 </CardHeader>
 <CardContent className="flex-1 space-y-2">
 {[
 'Full deployment on your servers or cloud',
 'CI/CD pipeline setup',
 'Environment configuration & branding',
 'Go-live handover session',
 'Complete data sovereignty',
 'Open-source — audit every line of code',
 'Add support tier separately',
 ].map((f) => (
 <div key={f} className="flex items-start gap-2 text-sm">
 <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
 <span>{f}</span>
 </div>
 ))}
 </CardContent>
 <CardFooter>
 <Button className="w-full" asChild>
 <Link href="https://tally.so/r/mVbv2M" target="_blank" rel="noopener noreferrer">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Link>
 </Button>
 </CardFooter>
 </Card>

 {/* Professional Services */}
 <Card className="flex flex-col border-dashed">
 <CardHeader>
 <div className="flex items-center gap-3 mb-2">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
 <Zap className="w-5 h-5 text-primary" />
 </div>
 <div>
 <CardTitle>Professional Services</CardTitle>
 <CardDescription>Custom development &amp; integrations</CardDescription>
 </div>
 </div>
 <div className="text-3xl font-bold mt-2">Custom <span className="text-base font-normal text-muted-foreground">pricing</span></div>
 </CardHeader>
 <CardContent className="flex-1 space-y-2">
 {[
 'Custom extension development',
 'ERP / CRM / WMS integrations',
 'Workflow automation & custom logic',
 'Data migration from legacy systems',
 'White-label & custom branding',
 'Team training & onboarding',
 'Dedicated project manager',
 ].map((f) => (
 <div key={f} className="flex items-start gap-2 text-sm">
 <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
 <span>{f}</span>
 </div>
 ))}
 </CardContent>
 <CardFooter>
 <Button className="w-full" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
 </Button>
 </CardFooter>
 </Card>
 </div>
 </div>
 </section>

 {/* Support Tiers */}
 <section className="py-16 bg-muted/20">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-2">Support Levels</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Once you&apos;re live, choose the level of ongoing support that matches your team&apos;s capacity and ambition. All tiers are available for both Cloud and Self-Hosted customers.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {SUPPORT_TIERS.map((tier) => (
 <Card key={tier.name} className={cn('flex flex-col', tier.highlight && 'border-primary shadow-lg shadow-primary/10')}>
 <CardHeader className="pb-3">
 <div className="flex items-center gap-2 mb-1">
 <div className={cn('w-3 h-3 rounded-full', tier.colorClass)} />
 <CardTitle className="text-base">{tier.name}</CardTitle>
 </div>
 <div className="text-2xl font-bold">{tier.price}</div>
 <div className="text-xs text-muted-foreground">SLA: {tier.sla}</div>
 </CardHeader>
 <CardContent className="flex-1 space-y-2">
 {tier.features.map((f) => (
 <div key={f.label} className="flex items-start gap-2 text-sm">
 {f.included
 ? <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
 : <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />}
 <span className={f.included ? '' : 'text-muted-foreground/50'}>{f.label}</span>
 </div>
 ))}
 </CardContent>
 <CardFooter>
 <Button className="w-full" variant={tier.highlight ? 'default' : 'outline'} asChild>
 <Link href={tier.ctaHref}>{tier.cta}</Link>
 </Button>
 </CardFooter>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* Commercial License Options */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-2">Commercial License Options</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Building proprietary extensions or integrations? A Commercial License waives AGPL obligations and keeps your custom code private. Fleetbase Core remains open-source — only your extensions are covered.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
 {LICENSE_OPTIONS.map((lic) => (
 <Card key={lic.name} className={cn('flex flex-col', lic.highlight && 'border-primary shadow-lg shadow-primary/10')}>
 {lic.highlight && (
 <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5 rounded-t-lg">
 Best Value
 </div>
 )}
 <CardHeader className="pb-3">
 <CardTitle className="text-base">{lic.name}</CardTitle>
 <div className="text-2xl font-bold">{lic.price}</div>
 </CardHeader>
 <CardContent className="flex-1 space-y-2 text-sm">
 <div><span className="text-muted-foreground">Flexibility:</span> {lic.flexibility}</div>
 <div><span className="text-muted-foreground">Support:</span> {lic.support}</div>
 <div><span className="text-muted-foreground">Coverage:</span> {lic.coverage}</div>
 <div className="text-xs text-muted-foreground italic pt-1">{lic.note}</div>
 </CardContent>
 <CardFooter>
 <Button className="w-full" variant={lic.highlight ? 'default' : 'outline'} asChild>
 <Link href="https://cal.com/shivthakker/enquiry">Get License</Link>
 </Button>
 </CardFooter>
 </Card>
 ))}
 </div>
 <p className="text-center text-sm text-muted-foreground mt-6">
 Not sure which license you need?{' '}
 <Link href="/licensing" className="text-primary underline underline-offset-4">Read our licensing guide</Link>
 {' '}or{' '}
 <Link href="https://cal.com/shivthakker/enquiry" className="text-primary underline underline-offset-4">talk to our team</Link>.
 </p>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 bg-muted/20">
 <div className="container mx-auto px-4 max-w-3xl">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
 </div>
 <Accordion type="single" collapsible className="space-y-2">
 {FAQS.map((faq, i) => (
 <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-lg px-4">
 <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
 {faq.q}
 </AccordionTrigger>
 <AccordionContent className="text-muted-foreground pb-4">
 {faq.a}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </section>

 {/* Bottom CTA */}
 <section className="py-20">
 <div className="container mx-auto px-4 text-center max-w-2xl">
 <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
 <p className="text-muted-foreground mb-8">
 Try Fleetbase free for 7 days — . Or speak to our team to find the right plan for your operation.
 </p>
 <div className="flex gap-4 justify-center flex-wrap">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/register">
 Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">Talk to Sales</Link>
 </Button>
 </div>
 </div>
 </section>
 </div>
 );
}
