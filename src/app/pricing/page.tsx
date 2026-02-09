'use client';

import {
  Check,
  X,
  Zap,
  Users,
  Truck,
  MapPin,
  Package,
  Webhook,
  Key,
  FileText,
  Building,
  Activity,
  TrendingUp,
  Shield,
  Clock,
  HelpCircle,
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
  features: string[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    tier: 1,
    name: 'Starter',
    monthlyPrice: 200,
    annualPrice: 1920,
    includedUnits: 300,
    overageRate: 0.75,
    description: 'Perfect for small businesses getting started with fleet management',
    features: [
      'All core platform features',
      '300 resource units/month',
      '7-day free trial',
      'Email support',
      'Basic analytics',
    ],
  },
  {
    tier: 2,
    name: 'Starter Plus',
    monthlyPrice: 300,
    annualPrice: 2880,
    includedUnits: 500,
    overageRate: 0.65,
    description: 'For growing operations needing more capacity',
    features: [
      'All Starter features',
      '500 resource units/month',
      'Priority email support',
      'Advanced analytics',
      'Custom webhooks',
    ],
  },
  {
    tier: 3,
    name: 'Scale',
    monthlyPrice: 400,
    annualPrice: 3840,
    includedUnits: 800,
    overageRate: 0.55,
    description: 'Scale your operations with confidence',
    recommended: true,
    features: [
      'All Starter Plus features',
      '800 resource units/month',
      'Phone & email support',
      'API access',
      'Custom integrations',
    ],
  },
  {
    tier: 4,
    name: 'Scale Plus',
    monthlyPrice: 500,
    annualPrice: 4800,
    includedUnits: 1200,
    overageRate: 0.45,
    description: 'For mid-sized fleets with high volume',
    features: [
      'All Scale features',
      '1,200 resource units/month',
      'Dedicated support',
      'Advanced API features',
      'Custom reporting',
    ],
  },
  {
    tier: 5,
    name: 'Pro',
    monthlyPrice: 600,
    annualPrice: 5760,
    includedUnits: 1700,
    overageRate: 0.4,
    description: 'Professional-grade features for demanding operations',
    features: [
      'All Scale Plus features',
      '1,700 resource units/month',
      '24/7 support',
      'SLA guarantee',
      'Advanced security',
    ],
  },
  {
    tier: 6,
    name: 'Pro Plus',
    monthlyPrice: 700,
    annualPrice: 6720,
    includedUnits: 2300,
    overageRate: 0.35,
    description: 'Enhanced capacity for large operations',
    features: [
      'All Pro features',
      '2,300 resource units/month',
      'Premium support',
      'Custom SLA',
      'Dedicated account manager',
    ],
  },
  {
    tier: 7,
    name: 'Elite',
    monthlyPrice: 800,
    annualPrice: 7680,
    includedUnits: 3000,
    overageRate: 0.3,
    description: 'Elite-level service for enterprise operations',
    features: [
      'All Pro Plus features',
      '3,000 resource units/month',
      'White-glove support',
      'Custom development',
      'Training & onboarding',
    ],
  },
  {
    tier: 8,
    name: 'Elite Plus',
    monthlyPrice: 900,
    annualPrice: 8640,
    includedUnits: 3800,
    overageRate: 0.25,
    description: 'Maximum capacity for high-volume enterprises',
    features: [
      'All Elite features',
      '3,800 resource units/month',
      'Executive support',
      'Priority development',
      'Quarterly business reviews',
    ],
  },
  {
    tier: 9,
    name: 'Enterprise',
    monthlyPrice: 1000,
    annualPrice: 9600,
    includedUnits: 5000,
    overageRate: 0.2,
    description: 'Enterprise-grade platform for large organizations',
    features: [
      'All Elite Plus features',
      '5,000 resource units/month',
      'Enterprise SLA',
      'Custom infrastructure',
      'Compliance support',
    ],
  },
  {
    tier: 10,
    name: 'Enterprise Plus',
    monthlyPrice: 1500,
    annualPrice: 14400,
    includedUnits: 7500,
    overageRate: 0.15,
    description: 'Ultimate capacity for the largest operations',
    features: [
      'All Enterprise features',
      '7,500 resource units/month',
      'Dedicated infrastructure',
      'Custom pricing available',
      'Strategic partnership',
    ],
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
  rolling: boolean;
  description: string;
}

const RESOURCE_TYPES: ResourceType[] = [
  {
    name: 'Orders',
    icon: Package,
    weight: 2,
    rolling: false,
    description: 'Customer orders charged once upon creation',
  },
  {
    name: 'Users',
    icon: Users,
    weight: 5,
    rolling: true,
    description: 'System users charged per billing period',
  },
  {
    name: 'Webhooks',
    icon: Webhook,
    weight: 5,
    rolling: true,
    description: 'API webhooks charged per billing period',
  },
  {
    name: 'Vehicles',
    icon: Truck,
    weight: 1,
    rolling: true,
    description: 'Fleet vehicles charged per billing period',
  },
  {
    name: 'Drivers',
    icon: Users,
    weight: 1,
    rolling: true,
    description: 'Active drivers charged per billing period',
  },
  {
    name: 'Places',
    icon: MapPin,
    weight: 1,
    rolling: false,
    description: 'Locations charged once upon creation',
  },
  {
    name: 'API Keys',
    icon: Key,
    weight: 1,
    rolling: true,
    description: 'API credentials charged per billing period',
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
          Fair and transparent pricing based on Resource Units. Pay a flat monthly fee with a generous allocation of units. Use more? Only pay for what you need at a simple per-unit rate. Your costs are always aligned with your operational volume.
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
          All plans include a 7-day free trial with 50 resource units • No credit card required
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

      {/* Pricing Tiers Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PRICING_TIERS.map((tier) => (
          <PricingTierCard
            key={tier.tier}
            tier={tier}
            billingPeriod={billingPeriod}
          />
        ))}
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
            Think of Resource Units as the currency of Fleetbase. Every key action you perform in the system—like creating an order, adding a vehicle, or tracking a driver—consumes a certain number of these units. It's a simple way to measure your usage across the entire platform.
          </p>
        </div>

        {/* Resource Types Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {RESOURCE_TYPES.map((resource) => (
            <Card key={resource.name} className="relative overflow-hidden">
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
                <h3 className="font-semibold">{resource.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
                <div className="flex items-center gap-1.5 pt-1">
                  {resource.rolling ? (
                    <>
                      <div className="size-2 rounded-full bg-blue-500"></div>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        Recurring
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="size-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">
                        One-time
                      </span>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Billing Types Explanation */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-green-500/20">
                  <Check className="size-5 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>One-Time Resources</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Resources like <strong>Orders</strong> and <strong>Places</strong> are billed only once when you create them. Their usage count resets at the end of your billing cycle.
              </p>
              <p className="text-xs text-muted-foreground">
                Examples: Orders, Places, Contacts, Vendors, Service Rates, Zones
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/20">
                  <TrendingUp className="size-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Recurring (Rolling) Resources</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Resources like <strong>Vehicles</strong>, <strong>Drivers</strong>, and <strong>Users</strong> represent active assets in your operation. They consume units in each billing period they remain active.
              </p>
              <p className="text-xs text-muted-foreground">
                Examples: Vehicles, Drivers, Users, Webhooks, API Keys
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
                <CardTitle className="text-2xl">What If I Go Over My Limit?</CardTitle>
                <CardDescription className="text-base">
                  No hidden fees or penalties—just transparent overage pricing
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              If your business has a great month and you use more than your plan's included units, that's fantastic! We make it simple. Any additional units you use are charged at the clear <strong>overage rate</strong> listed for your plan. You can easily track your usage in your Fleetbase dashboard to stay informed.
            </p>
            <p className="text-muted-foreground">
              If you find you are consistently going over your limit, it's often more cost-effective to upgrade to the next plan tier to get more included units at a lower effective cost.
            </p>
            <div className="flex items-start gap-3 rounded-lg bg-purple-500/10 p-4">
              <Shield className="size-5 text-purple-600 dark:text-purple-400" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Transparent & Predictable</p>
                <p className="text-sm text-muted-foreground">
                  Track your usage in real-time from your billing dashboard. No surprises at the end of the month.
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
            Expecting a short-term spike in business for a holiday or a special event? We offer <strong>Resource Unit Packs</strong>, which are one-time purchases of extra units you can add to your account at any time. Perfect for handling temporary increases in volume without changing your base plan.
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
                  <Link href="https://console.fleetbase.io">Purchase Pack</Link>
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
              Resource Unit Packs are added to your account immediately and never expire. Use them whenever you need them, at your own pace.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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

        <div className="space-y-6">
          <FAQItem
            question="How can I monitor my resource unit usage?"
            answer="You can view your current usage, including a breakdown by resource type, directly from your billing dashboard within the Fleetbase console. Track your consumption in real-time to stay informed and avoid surprises."
          />
          
          <FAQItem
            question='What exactly is a "rolling" resource?'
            answer='A rolling resource is an item that provides continuous value, like an active Vehicle or User. As long as it exists in your account, it will be counted towards your usage in each billing period. In contrast, a non-rolling resource, like an Order, is a one-time event and is only counted in the billing period it was created.'
          />
          
          <FAQItem
            question="Is there a free trial?"
            answer="Yes! All our plans come with a 7-day free trial so you can experience the full power of Fleetbase. The trial includes a starting balance of 50 resource units to get you up and running. No credit card required to start."
          />
          
          <FAQItem
            question="What if I have a question about my bill?"
            answer="Our support team is always here to help! You can reach out to us anytime through your Fleetbase console or by visiting our support page. We're committed to making billing transparent and easy to understand."
          />
          
          <FAQItem
            question="Can I switch plans at any time?"
            answer="Absolutely! You can upgrade or downgrade your plan at any time. When you upgrade, you'll immediately get access to the higher tier's included units. When you downgrade, the change will take effect at the start of your next billing period."
          />
          
          <FAQItem
            question="What happens to unused resource units?"
            answer="Unused resource units from your monthly plan allocation do not roll over to the next billing period. However, Resource Unit Packs that you purchase separately never expire and remain in your account until used."
          />
        </div>
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
                Start your 7-day free trial today. No credit card required. Experience the full power of Fleetbase with 50 resource units to get you started.
              </p>
              <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link href="https://console.fleetbase.io">
                    Start Free Trial
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Questions? <Link href="/contact" className="font-medium text-primary hover:underline">Contact our team</Link> for personalized guidance.
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
  const price =
    billingPeriod === 'monthly' ? tier.monthlyPrice : tier.annualPrice / 12;
  const isRecommended = tier.recommended;

  return (
    <Card
      className={cn(
        'relative flex flex-col overflow-hidden',
        isRecommended &&
          'border-purple-500/50 shadow-lg shadow-purple-500/20 ring-1 ring-purple-500/20',
      )}
    >
      {isRecommended && (
        <div className="absolute right-4 top-4">
          <div className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-semibold text-white">
            Recommended
          </div>
        </div>
      )}

      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">{tier.name}</CardTitle>
        <CardDescription className="text-sm">
          {tier.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        <div className="space-y-1">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight">
              ${Math.round(price)}
            </span>
            <span className="text-muted-foreground">/month</span>
          </div>
          {billingPeriod === 'annual' && (
            <p className="text-xs text-muted-foreground">
              ${tier.annualPrice.toLocaleString()} billed annually
            </p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
            <span className="text-sm font-medium">Included Units</span>
            <span className="text-lg font-bold">
              {tier.includedUnits.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
            <span className="text-sm font-medium">Overage Rate</span>
            <span className="text-lg font-bold">${tier.overageRate}/unit</span>
          </div>
        </div>

        <div className="space-y-3">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="size-5 shrink-0 text-green-600 dark:text-green-400" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={isRecommended ? 'default' : 'outline'}
          asChild
        >
          <Link href="https://console.fleetbase.io">
            {tier.tier <= 3 ? 'Start Free Trial' : 'Contact Sales'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{answer}</p>
      </CardContent>
    </Card>
  );
};

export default PricingPage;
