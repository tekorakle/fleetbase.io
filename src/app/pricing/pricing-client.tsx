'use client';

import {
ArrowRight, Building2,
  Check, ChevronDown, ChevronUp, Globe, Key, Layers, MapPin, Package,
  Receipt, Server, Truck, User, UserRound,
Users,   Webhook, X, Zap, } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter,CardHeader, CardTitle } from '@/components/ui/card';
import { track } from '@/lib/analytics/posthog';
import { cn } from '@/lib/utils';

import { PRICING_FAQS } from './faqs';

// ─── Cloud Pricing Tiers ──────────────────────────────────────────────────────
const CLOUD_TIERS = [
  {
    name: 'Micro',
    monthlyPrice: 25,
    annualPrice: 20,
    units: 100,
    overage: 0.75,
    description: 'Individuals and very small teams.',
    featured: true,
    highlight: false,
    badge: null,
  },
  {
    name: 'Lite',
    monthlyPrice: 50,
    annualPrice: 40,
    units: 180,
    overage: 0.75,
    description: 'Small teams getting started.',
    featured: true,
    highlight: false,
    badge: null,
  },
  {
    name: 'Essential',
    monthlyPrice: 100,
    annualPrice: 80,
    units: 240,
    overage: 0.75,
    description: 'Growing operations with more to manage.',
    featured: true,
    highlight: false,
    badge: null,
  },
  {
    name: 'Starter',
    monthlyPrice: 200,
    annualPrice: 160,
    units: 300,
    overage: 0.75,
    description: 'Established small teams scaling up.',
    featured: true,
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Starter Plus',
    monthlyPrice: 300,
    annualPrice: 240,
    units: 500,
    overage: 0.65,
    description: 'Enhanced capacity at a lower unit cost.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Scale',
    monthlyPrice: 400,
    annualPrice: 320,
    units: 800,
    overage: 0.55,
    description: 'High-volume operational teams.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Scale Plus',
    monthlyPrice: 500,
    annualPrice: 400,
    units: 1200,
    overage: 0.45,
    description: 'Serious scale with a lower unit cost.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Pro',
    monthlyPrice: 600,
    annualPrice: 480,
    units: 1700,
    overage: 0.40,
    description: 'Power teams running complex operations.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Pro Plus',
    monthlyPrice: 700,
    annualPrice: 560,
    units: 2300,
    overage: 0.35,
    description: 'High-throughput pro operations.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Elite',
    monthlyPrice: 800,
    annualPrice: 640,
    units: 3000,
    overage: 0.30,
    description: 'Enterprise-grade volume at high velocity.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Elite Plus',
    monthlyPrice: 900,
    annualPrice: 720,
    units: 3800,
    overage: 0.25,
    description: 'Maximum capacity before Enterprise.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 1000,
    annualPrice: 800,
    units: 5000,
    overage: 0.20,
    description: 'Full enterprise scale with the lowest unit cost.',
    featured: false,
    highlight: false,
    badge: null,
  },
  {
    name: 'Enterprise Plus',
    monthlyPrice: 1500,
    annualPrice: 1200,
    units: 7500,
    overage: 0.15,
    description: 'Largest cloud plan. Maximum capacity.',
    featured: false,
    highlight: false,
    badge: null,
  },
];

const FEATURED_TIERS = CLOUD_TIERS.filter((t) => t.featured);

// ─── Resource Unit Costs ──────────────────────────────────────────────────────
// rolling: true = count persists across billing cycles (does not reset)
const RESOURCE_UNITS = [
  { icon: Package, label: 'Order', units: 2, rolling: false },
  { icon: UserRound, label: 'Contact', units: 1, rolling: false },
  { icon: MapPin, label: 'Place', units: 1, rolling: false },
  { icon: Building2, label: 'Vendor', units: 1, rolling: false },
  { icon: Truck, label: 'Vehicle', units: 1, rolling: true },
  { icon: User, label: 'Driver', units: 1, rolling: true },
  { icon: Receipt, label: 'Service Rate', units: 1, rolling: false },
  { icon: Globe, label: 'Service Area', units: 1, rolling: false },
  { icon: Layers, label: 'Zone', units: 1, rolling: false },
  { icon: Users, label: 'User', units: 5, rolling: true },
  { icon: Webhook, label: 'Webhook', units: 5, rolling: true },
  { icon: Key, label: 'API Key', units: 1, rolling: true },
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

export default function PricingClient() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [showAllPlans, setShowAllPlans] = useState(false);

  const tierPrice = (tier: (typeof CLOUD_TIERS)[0]) =>
    billing === 'annual' ? tier.annualPrice : tier.monthlyPrice;

  useEffect(() => {
    track('pricing_viewed', { billing_cycle: billing });
    // Initial pricing view only — toggle changes are tracked separately.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setBillingCycle = (cycle: 'monthly' | 'annual') => {
    if (cycle === billing) return;
    setBilling(cycle);
    track('pricing_billing_toggled', { to_cycle: cycle });
  };

  const onTierCtaClick = (tier: (typeof CLOUD_TIERS)[0]) => {
    track('pricing_tier_cta_clicked', {
      tier: tier.name,
      billing_cycle: billing,
      monthly_price: tierPrice(tier),
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding text-center">
        <div className="container max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-6">
            <span className="text-primary">●</span>
            <span>Transparent, Usage-Based Pricing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Pay for what you use.{' '}
            <span className="text-primary">Nothing more.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Fleetbase Cloud starts at $25/month. No per-seat charges. No hidden fees. Self-hosted implementation is a one-time $2,500 fee.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-1 rounded-full border p-1 bg-muted/30">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
                  billing === 'monthly'
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={cn(
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
                  billing === 'annual'
                    ? 'bg-primary text-primary-foreground shadow'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                Annual
                <span className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full font-semibold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link
                href="https://console.fleetbase.io/onboard"
                target="_blank"
                rel="noopener noreferrer"
                data-cta-id="start_free_trial"
                data-cta-location="pricing_page"
                data-cta-variant="primary"
              >
                Start 7-Day Free Trial <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://cal.com/shivthakker/enquiry"
                target="_blank"
                rel="noopener noreferrer"
                data-cta-id="contact_sales"
                data-cta-location="pricing_page"
                data-cta-variant="secondary"
              >
                Talk to Sales
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            7 days or 50 resource units — whichever comes first.
          </p>
        </div>
      </section>

      {/* Featured Plans + All Plans */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Fleetbase Cloud</h2>
            <p className="text-muted-foreground">
              Fully managed. Automatic updates. Unlimited users and drivers. All platform modules included on every plan.
            </p>
          </div>

          {/* Featured Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-4">
            {FEATURED_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={cn('flex flex-col overflow-hidden', tier.highlight && 'border-primary shadow-lg shadow-primary/10 pt-0')}
              >
                {tier.badge && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5">
                    {tier.badge}
                  </div>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{tier.name}</CardTitle>
                  <div className="text-2xl font-bold">
                    ${tierPrice(tier)}
                    <span className="text-base font-normal text-muted-foreground">/mo</span>
                  </div>
                  {billing === 'annual' && (
                    <div className="text-xs text-green-600 dark:text-green-400">
                      Billed annually (${tierPrice(tier) * 12}/yr)
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-1 space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Units/mo:</span>{' '}
                    {tier.units.toLocaleString()}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Overage:</span> ${tier.overage}/unit
                  </div>
                  <div className="text-xs text-muted-foreground italic pt-1">{tier.description}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline" asChild>
                    <Link
                      href="https://console.fleetbase.io/onboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onTierCtaClick(tier)}
                      data-cta-id="pricing_tier_select"
                      data-cta-location="pricing_card"
                      data-cta-variant="primary"
                    >
                      Start Free Trial
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Compare All Plans Toggle */}
          <div className="text-center mb-4">
            <button
              onClick={() => setShowAllPlans(!showAllPlans)}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {showAllPlans ? (
                <>
                  Hide full plan list <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Compare all 13 plans <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Full Plans Table */}
          {showAllPlans && (
            <div className="rounded-xl border bg-card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left px-4 py-3 font-medium">Plan</th>
                    <th className="text-right px-4 py-3 font-medium">
                      {billing === 'annual' ? 'Price (billed annually)' : 'Monthly Price'}
                    </th>
                    <th className="text-right px-4 py-3 font-medium hidden sm:table-cell">Units/mo</th>
                    <th className="text-right px-4 py-3 font-medium hidden md:table-cell">Overage</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {CLOUD_TIERS.map((tier, i) => (
                    <tr
                      key={tier.name}
                      className={cn(
                        'border-b last:border-0',
                        tier.highlight && 'bg-primary/5',
                        !tier.highlight && i % 2 !== 0 && 'bg-muted/10'
                      )}
                    >
                      <td className="px-4 py-3 font-medium">
                        {tier.name}
                        {tier.badge && (
                          <span className="ml-2 text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">
                            {tier.badge}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="font-semibold">${tierPrice(tier)}/mo</span>
                        {billing === 'annual' && (
                          <div className="text-xs text-muted-foreground">
                            ${tierPrice(tier) * 12}/yr
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden sm:table-cell">
                        {tier.units.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right text-muted-foreground hidden md:table-cell">
                        ${tier.overage}/unit
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href="https://console.fleetbase.io/onboard"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline underline-offset-4 whitespace-nowrap"
                          onClick={() => onTierCtaClick(tier)}
                          data-cta-id="pricing_tier_select"
                          data-cta-location="pricing_card"
                          data-cta-variant="tertiary"
                        >
                          Get started
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Resource Units Explainer */}
      <section className="section-padding bg-muted/20">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">How Resource Units Work</h2>
            <p className="text-muted-foreground">
              Your plan includes a monthly unit allocation. Each resource type consumes a set number of units per item created. Most resources reset each billing cycle — rolling resources (marked below) carry their count into the next cycle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
            {RESOURCE_UNITS.map((r) => (
              <div key={r.label} className="bg-card border rounded-xl p-4 text-center">
                <r.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{r.units}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.label}</div>
                {r.rolling && (
                  <div className="text-xs text-amber-600 dark:text-amber-400 mt-1 font-medium">rolling</div>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-6 text-xs text-muted-foreground mb-8">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-muted-foreground/40 inline-block" />
              Resets each billing cycle
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              Rolling — count carries over to next cycle
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="mb-4">
              <h3 className="font-semibold">Resource Unit Top-Up Packs</h3>
              <p className="text-sm text-muted-foreground">
                Need more mid-month? Purchase a top-up at any time — no plan change required.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {OVERAGE_PACKS.map((pack) => (
                <div key={pack.name} className="border rounded-lg p-4 text-center">
                  <div className="text-xs text-muted-foreground font-medium mb-1">{pack.name}</div>
                  <div className="text-xl font-bold">${pack.price}</div>
                  <div className="text-xs text-muted-foreground">{pack.units.toLocaleString()} units</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Self-Hosted + Professional Services */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Other Deployment Options</h2>
            <p className="text-muted-foreground">
              Full control over your infrastructure, or custom-built solutions for your unique requirements.
            </p>
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
                <div className="text-3xl font-bold mt-2">
                  $2,500{' '}
                  <span className="text-base font-normal text-muted-foreground">one-time</span>
                </div>
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
                  <Link href="/services/installation">
                    View Installation Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
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
                <div className="text-3xl font-bold mt-2">
                  Custom{' '}
                  <span className="text-base font-normal text-muted-foreground">pricing</span>
                </div>
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
                  <Link href="https://cal.com/shivthakker/enquiry">
                    Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Support Levels</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the level of ongoing support that matches your team&apos;s capacity and ambition. Available for both Cloud and Self-Hosted customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPORT_TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={cn('flex flex-col', tier.highlight && 'border-primary shadow-lg shadow-primary/10')}
              >
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
                      {f.included ? (
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={f.included ? '' : 'text-muted-foreground/50'}>{f.label}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.highlight ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href={tier.ctaHref}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial License Options */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Commercial License Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building proprietary extensions or integrations? A Commercial License waives AGPL obligations and keeps your custom code private. Fleetbase Core remains open-source — only your extensions are covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {LICENSE_OPTIONS.map((lic) => (
              <Card
                key={lic.name}
                className={cn('flex flex-col overflow-hidden', lic.highlight && 'border-primary shadow-lg shadow-primary/10 pt-0')}
              >
                {lic.highlight && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5">
                    Best Value
                  </div>
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{lic.name}</CardTitle>
                  <div className="text-2xl font-bold">{lic.price}</div>
                </CardHeader>
                <CardContent className="flex-1 space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Flexibility:</span> {lic.flexibility}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Support:</span> {lic.support}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Coverage:</span> {lic.coverage}
                  </div>
                  <div className="text-xs text-muted-foreground italic pt-1">{lic.note}</div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={lic.highlight ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="https://cal.com/shivthakker/enquiry">Get License</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            <Link href="/licensing/commercial" className="text-primary underline underline-offset-4">
              See full commercial licensing details &amp; FAQ →
            </Link>
          </p>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Not sure which license you need?{' '}
            <Link href="/licensing" className="text-primary underline underline-offset-4">
              Read our licensing guide
            </Link>{' '}
            or{' '}
            <Link href="https://cal.com/shivthakker/enquiry" className="text-primary underline underline-offset-4">
              talk to our team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/20">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {PRICING_FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding">
        <div className="container max-w-3xl mx-auto">
          <div className="relative rounded-2xl border bg-card overflow-hidden p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-muted-foreground mb-8">
                Try Fleetbase free for 7 days or 50 resource units, whichever comes first. Or speak to our team to find the right plan for your operation.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" asChild>
                  <Link
                    href="https://console.fleetbase.io/onboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta-id="start_free_trial"
                    data-cta-location="pricing_page"
                    data-cta-variant="primary"
                  >
                    Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="https://cal.com/shivthakker/enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta-id="contact_sales"
                    data-cta-location="pricing_page"
                    data-cta-variant="secondary"
                  >
                    Talk to Sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
