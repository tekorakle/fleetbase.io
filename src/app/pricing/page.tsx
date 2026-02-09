'use client';

import {
  Check,
  Zap,
  Users,
  Truck,
  MapPin,
  Package,
  Webhook,
  Key,
  Building,
  Activity,
  TrendingUp,
  Shield,
  Clock,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  UserCircle,
  Store,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type BillingPeriod = 'monthly' | 'annual';

interface PricingTier {
  tier: number;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  includedUnits: number;
  overageRate: number;
  description: string;
  recommended?: boolean;
  supportLevel: string;
  plusVariant?: {
    name: string;
    monthlyPrice: number;
    annualPrice: number;
    includedUnits: number;
    overageRate: number;
    supportLevel: string;
  };
}

const PRICING_TIERS: PricingTier[] = [
  {
    tier: 1,
    name: 'Starter',
    monthlyPrice: 200,
    annualPrice: 1920,
    includedUnits: 300,
    overageRate: 0.75,
    description: 'Perfect for small businesses',
    supportLevel: 'Email support',
    plusVariant: {
      name: 'Starter Plus',
      monthlyPrice: 300,
      annualPrice: 2880,
      includedUnits: 500,
      overageRate: 0.65,
      supportLevel: 'Priority email support',
    },
  },
  {
    tier: 2,
    name: 'Scale',
    monthlyPrice: 400,
    annualPrice: 3840,
    includedUnits: 800,
    overageRate: 0.55,
    description: 'For growing operations',
    recommended: true,
    supportLevel: 'Phone & email support',
    plusVariant: {
      name: 'Scale Plus',
      monthlyPrice: 500,
      annualPrice: 4800,
      includedUnits: 1200,
      overageRate: 0.45,
      supportLevel: 'Dedicated support',
    },
  },
  {
    tier: 3,
    name: 'Pro',
    monthlyPrice: 600,
    annualPrice: 5760,
    includedUnits: 1700,
    overageRate: 0.4,
    description: 'Professional-grade',
    supportLevel: '24/7 support',
    plusVariant: {
      name: 'Pro Plus',
      monthlyPrice: 700,
      annualPrice: 6720,
      includedUnits: 2300,
      overageRate: 0.35,
      supportLevel: 'Premium support',
    },
  },
  {
    tier: 4,
    name: 'Elite',
    monthlyPrice: 800,
    annualPrice: 7680,
    includedUnits: 3000,
    overageRate: 0.3,
    description: 'Elite-level service',
    supportLevel: 'White-glove support',
    plusVariant: {
      name: 'Elite Plus',
      monthlyPrice: 900,
      annualPrice: 8640,
      includedUnits: 3800,
      overageRate: 0.25,
      supportLevel: 'Executive support',
    },
  },
  {
    tier: 5,
    name: 'Enterprise',
    monthlyPrice: 1000,
    annualPrice: 9600,
    includedUnits: 5000,
    overageRate: 0.2,
    description: 'Enterprise-grade',
    supportLevel: 'Enterprise SLA',
    plusVariant: {
      name: 'Enterprise Plus',
      monthlyPrice: 1500,
      annualPrice: 14400,
      includedUnits: 7500,
      overageRate: 0.15,
      supportLevel: 'Dedicated infrastructure',
    },
  },
];

interface ResourceUnitPack {
  name: string;
  units: number;
  price: number;
  perUnitCost: number;
}

const RESOURCE_PACKS: ResourceUnitPack[] = [
  { name: 'Small Pack', units: 100, price: 90, perUnitCost: 0.9 },
  { name: 'Medium Pack', units: 300, price: 240, perUnitCost: 0.8 },
  { name: 'Large Pack', units: 500, price: 375, perUnitCost: 0.75 },
  { name: 'Jumbo Pack', units: 1000, price: 700, perUnitCost: 0.7 },
];

interface ResourceType {
  name: string;
  icon: React.ElementType;
  weight: number;
  description: string;
  isRolling: boolean;
}

// Top 8 resources based on CSV data
const RESOURCES: ResourceType[] = [
  {
    name: 'Orders',
    icon: Package,
    weight: 2,
    description: 'Customer orders',
    isRolling: false,
  },
  {
    name: 'Places',
    icon: MapPin,
    weight: 1,
    description: 'Locations and addresses',
    isRolling: false,
  },
  {
    name: 'Contacts',
    icon: UserCircle,
    weight: 1,
    description: 'Customer contacts',
    isRolling: false,
  },
  {
    name: 'Vendors',
    icon: Store,
    weight: 1,
    description: 'Service vendors',
    isRolling: false,
  },
  {
    name: 'Users',
    icon: Users,
    weight: 5,
    description: 'System users',
    isRolling: true,
  },
  {
    name: 'Webhooks',
    icon: Webhook,
    weight: 5,
    description: 'API webhook endpoints',
    isRolling: true,
  },
  {
    name: 'Vehicles',
    icon: Truck,
    weight: 1,
    description: 'Fleet vehicles',
    isRolling: true,
  },
  {
    name: 'Drivers',
    icon: Users,
    weight: 1,
    description: 'Fleet drivers',
    isRolling: true,
  },
];

const FAQ_ITEMS = [
  {
    question: 'How can I monitor my resource unit usage?',
    answer:
      'You can view your current usage, including a breakdown by resource type, directly from your billing dashboard within the Fleetbase console. Track your consumption in real-time to stay informed and avoid surprises.',
  },
  {
    question: 'What exactly is a "rolling" resource?',
    answer:
      'A rolling resource is an item that provides continuous value, like an active Vehicle or User. As long as it exists in your account, it will be counted towards your usage in each billing period. In contrast, a non-rolling resource, like an Order, is a one-time event and is only counted in the billing period it was created.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes! All our plans come with a 7-day free trial so you can experience the full power of Fleetbase. The trial includes a starting balance of 50 resource units to get you up and running. No credit card required to start.',
  },
  {
    question: 'What if I have a question about my bill?',
    answer:
      "Our support team is always here to help! You can reach out to us anytime through your Fleetbase console or by visiting our support page. We're committed to making billing transparent and easy to understand.",
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. When you upgrade, you'll immediately get access to the higher tier's included units. When you downgrade, the change will take effect at the start of your next billing period.",
  },
  {
    question: 'What happens to unused resource units?',
    answer:
      'Unused resource units from your monthly plan allocation do not roll over to the next billing period. However, Resource Unit Packs that you purchase separately never expire and remain in your account until used.',
  },
  {
    question: 'What if I go over my included units?',
    answer:
      "If you use more than your plan's included units, additional units are charged at your plan's overage rate. There are no hidden fees or penalties. You can track usage in real-time from your dashboard.",
  },
  {
    question: 'How do Plus plans differ from standard plans?',
    answer:
      'Plus plans offer significantly more included resource units and lower overage rates, making them more cost-effective for high-volume operations. They also include enhanced support and additional features specific to each tier.',
  },
  {
    question: 'Can I purchase Resource Unit Packs on any plan?',
    answer:
      'Yes! Resource Unit Packs are available as add-ons for any subscription plan. They never expire and are perfect for handling temporary spikes in usage without changing your base plan.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express) and ACH transfers for annual plans. Enterprise customers can also arrange for invoice-based billing.',
  },
];

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');

  return (
    <div className="section-padding relative container space-y-20 md:space-y-28 lg:space-y-36">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl space-y-6 text-balance text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-2 text-sm font-medium">
          <Zap className="size-4" />
          <span>Pay for What You Use</span>
        </div>

        <h1 className="text-5xl font-bold leading-none tracking-tight md:text-6xl lg:text-7xl">
          Transparent Pricing That{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Scales With You
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Fair and transparent pricing based on Resource Units. All plans
          include full platform access. Pay a flat monthly fee with included
          units, then simple per-unit overage rates.
        </p>

        <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="https://console.fleetbase.io">
              Start 7-Day Free Trial
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8" asChild>
            <Link href="/contact">Book a Demo</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          All plans include a 7-day free trial with 50 resource units • No
          credit card required
        </p>
      </div>

      {/* Billing Period Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border bg-card p-1.5">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={cn(
              'rounded-full px-6 py-2 text-sm font-medium transition-all',
              billingPeriod === 'monthly'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={cn(
              'rounded-full px-6 py-2 text-sm font-medium transition-all',
              billingPeriod === 'annual'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            Annual
            <span className="ml-2 text-xs font-semibold text-green-600 dark:text-green-400">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Tiers Grid - 5 Columns */}
      <div className="overflow-x-auto">
        <div className="mx-auto grid min-w-[1200px] grid-cols-5 gap-4">
          {PRICING_TIERS.map((tier) => (
            <PricingTierCard
              key={tier.tier}
              tier={tier}
              billingPeriod={billingPeriod}
            />
          ))}
        </div>
      </div>

      {/* What Are Resource Units Section */}
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-2 text-sm font-medium">
            <Activity className="size-4" />
            <span>Understanding Resource Units</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            What Are Resource Units?
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Resource Units are the currency of Fleetbase. Every key action you
            perform consumes a certain number of units. It's a simple way to
            measure your usage across the platform.
          </p>
        </div>

        {/* 4x2 Resource Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.name} resource={resource} />
          ))}
        </div>

        {/* Billing Type Explanation */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-green-500/20">
                  <Check className="size-4 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">One-Time Resources</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Billed once when created. Usage count resets at the end of each
                billing cycle. Examples: Orders, Places, Contacts, Vendors.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500/20">
                  <TrendingUp className="size-4 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">
                  Recurring (Rolling) Resources
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Charged every billing period while active. Examples: Users,
                Webhooks, Vehicles, Drivers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Overage Explanation */}
      <div className="mx-auto max-w-4xl">
        <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-purple-500/20">
                <TrendingUp className="size-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-2xl">
                  What If I Go Over My Limit?
                </CardTitle>
                <CardDescription className="text-base">
                  No hidden fees or penalties—just transparent overage pricing
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              If your business has a great month and you use more than your
              plan's included units, that's fantastic! Any additional units are
              charged at your plan's clear <strong>overage rate</strong>. Track
              your usage in real-time from your dashboard.
            </p>
            <div className="flex items-start gap-3 rounded-lg bg-purple-500/10 p-4">
              <Shield className="size-5 text-purple-600 dark:text-purple-400" />
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  Transparent & Predictable
                </p>
                <p className="text-sm text-muted-foreground">
                  If you consistently exceed your limit, upgrading to the next
                  tier (or Plus variant) is often more cost-effective.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resource Unit Packs */}
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 px-4 py-2 text-sm font-medium">
            <Package className="size-4" />
            <span>Flexible Options</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Need a Temporary Boost?
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Resource Unit Packs are one-time purchases that add extra units to
            your account. Perfect for seasonal spikes without changing your base
            plan.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCE_PACKS.map((pack) => (
            <Card key={pack.name} className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">{pack.name}</CardTitle>
                <CardDescription>
                  {pack.units.toLocaleString()} resource units
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold">${pack.price}</div>
                  <div className="text-sm text-muted-foreground">
                    ${pack.perUnitCost.toFixed(2)} per unit
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="https://console.fleetbase.io">
                    Purchase Pack
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-start gap-3 rounded-lg border bg-card p-6">
          <Clock className="size-6 text-blue-600 dark:text-blue-400" />
          <div className="space-y-1">
            <p className="font-medium">One-Time Purchase, No Expiration</p>
            <p className="text-sm text-muted-foreground">
              Resource Unit Packs are added to your account immediately and
              never expire. Use them whenever you need them.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section - Accordion */}
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-2 text-sm font-medium">
            <HelpCircle className="size-4" />
            <span>Common Questions</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Final CTA */}
      <div className="mx-auto max-w-4xl">
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-[1px]">
          <div className="rounded-lg bg-card p-8 md:p-12">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Transform Your Operations?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Start your 7-day free trial today. No credit card required.
                Experience the full power of Fleetbase with 50 resource units.
              </p>
              <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="https://console.fleetbase.io">
                    Start Free Trial
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8"
                  asChild
                >
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions?{' '}
                <Link
                  href="/contact"
                  className="font-medium text-primary hover:underline"
                >
                  Contact our team
                </Link>{' '}
                for personalized guidance.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const PricingTierCard = ({
  tier,
  billingPeriod,
}: {
  tier: PricingTier;
  billingPeriod: BillingPeriod;
}) => {
  const [showPlus, setShowPlus] = useState(false);
  const price =
    billingPeriod === 'monthly' ? tier.monthlyPrice : tier.annualPrice / 12;
  const isRecommended = tier.recommended;

  const displayTier = showPlus && tier.plusVariant ? tier.plusVariant : tier;
  const displayPrice = showPlus && tier.plusVariant
    ? billingPeriod === 'monthly'
      ? tier.plusVariant.monthlyPrice
      : tier.plusVariant.annualPrice / 12
    : price;

  return (
    <Card
      className={cn(
        'relative flex flex-col overflow-hidden',
        isRecommended &&
          'border-purple-500/50 shadow-lg shadow-purple-500/20 ring-1 ring-purple-500/20',
      )}
    >
      {isRecommended && (
        <div className="absolute right-2 top-2 z-10">
          <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-0.5 text-xs font-semibold text-white">
            Popular
          </div>
        </div>
      )}

      <CardHeader className="pb-3">
        <CardTitle className="text-xl">
          {showPlus && tier.plusVariant ? tier.plusVariant.name : tier.name}
        </CardTitle>
        <CardDescription className="text-xs">
          {tier.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div className="space-y-1">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight">
              ${Math.round(displayPrice)}
            </span>
            <span className="text-xs text-muted-foreground">/mo</span>
          </div>
          {billingPeriod === 'annual' && (
            <p className="text-xs text-muted-foreground">
              $
              {(showPlus && tier.plusVariant
                ? tier.plusVariant.annualPrice
                : tier.annualPrice
              ).toLocaleString()}{' '}
              /year
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div className="rounded-lg bg-muted/50 p-2">
            <div className="text-xs text-muted-foreground">Included Units</div>
            <div className="text-lg font-bold">
              {(showPlus && tier.plusVariant
                ? tier.plusVariant.includedUnits
                : tier.includedUnits
              ).toLocaleString()}
            </div>
          </div>
          <div className="rounded-lg bg-muted/50 p-2">
            <div className="text-xs text-muted-foreground">Overage Rate</div>
            <div className="text-lg font-bold">
              $
              {showPlus && tier.plusVariant
                ? tier.plusVariant.overageRate
                : tier.overageRate}
              /unit
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Check className="size-4 shrink-0 text-green-600 dark:text-green-400" />
            <span className="text-xs text-muted-foreground">
              Full platform access
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="size-4 shrink-0 text-green-600 dark:text-green-400" />
            <span className="text-xs text-muted-foreground">
              {showPlus && tier.plusVariant
                ? tier.plusVariant.supportLevel
                : tier.supportLevel}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Check className="size-4 shrink-0 text-green-600 dark:text-green-400" />
            <span className="text-xs text-muted-foreground">
              7-day free trial
            </span>
          </div>
        </div>

        {tier.plusVariant && (
          <button
            onClick={() => setShowPlus(!showPlus)}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed p-2 text-xs font-medium transition-colors hover:bg-muted/50"
          >
            <span>
              {showPlus ? `Show ${tier.name}` : `Show ${tier.plusVariant.name}`}
            </span>
            <ArrowRight className="size-3" />
          </button>
        )}
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          className="w-full"
          size="sm"
          variant={isRecommended ? 'default' : 'outline'}
          asChild
        >
          <Link href="https://console.fleetbase.io">
            {tier.tier <= 2 ? 'Start Free Trial' : 'Contact Sales'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ResourceCard = ({ resource }: { resource: ResourceType }) => {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
            <resource.icon className="size-5" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{resource.weight}</div>
            <div className="text-xs text-muted-foreground">
              {resource.weight === 1 ? 'unit' : 'units'}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{resource.name}</h3>
          <div
            className={cn(
              'rounded-full px-2 py-0.5 text-xs font-medium',
              resource.isRolling
                ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                : 'bg-green-500/20 text-green-600 dark:text-green-400',
            )}
          >
            {resource.isRolling ? 'Recurring' : 'One-time'}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{resource.description}</p>
      </CardContent>
    </Card>
  );
};

export default PricingPage;
