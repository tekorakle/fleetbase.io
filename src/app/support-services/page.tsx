import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Headphones, Wrench, BookOpen, Clock, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Support Services | Fleetbase',
  description:
    'Fleetbase support plans — from community support for self-hosted deployments to dedicated enterprise support with SLAs, onboarding, and professional services.',
  keywords: ['fleetbase support', 'logistics software support', 'fleetbase enterprise support', 'fleetbase professional services'],
  openGraph: {
    title: 'Support Services | Fleetbase',
    description: 'Support plans for every deployment — from community to dedicated enterprise support.',
  },
};

const plans = [
  {
    title: 'Community Support',
    price: 'Free',
    description: 'For self-hosted deployments and developers getting started with Fleetbase.',
    features: [
      'GitHub issue tracking',
      'Community Discord access',
      'Public documentation',
      'Community forums',
      'Open-source bug fixes',
    ],
    cta: 'Get started free',
    ctaHref: '/trial',
    highlight: false,
  },
  {
    title: 'Standard Support',
    price: 'Included with paid plans',
    description: 'For growing operations that need reliable, timely support from the Fleetbase team.',
    features: [
      'Email support with 2-business-day response',
      'Priority bug fixes',
      'Onboarding assistance',
      'Access to private support portal',
      'Monthly check-in calls',
      'Platform update guidance',
    ],
    cta: 'View pricing',
    ctaHref: '/pricing',
    highlight: false,
  },
  {
    title: 'Enterprise Support',
    price: 'Custom pricing',
    description: 'For large-scale deployments requiring dedicated support, SLAs, and professional services.',
    features: [
      'Dedicated support engineer',
      '4-hour response SLA for critical issues',
      'Custom onboarding and implementation',
      'Integration development assistance',
      'Quarterly business reviews',
      'Training for operations and IT teams',
      'Direct access to engineering team',
      '24/7 emergency support available',
    ],
    cta: 'Contact sales',
    ctaHref: '/contact/sales',
    highlight: true,
  },
];

const services = [
  {
    icon: Wrench,
    title: 'Implementation Services',
    description:
      'End-to-end implementation support — from infrastructure setup and data migration to custom configuration and go-live assistance. Our team has deployed Fleetbase across dozens of industries and operation types.',
  },
  {
    icon: BookOpen,
    title: 'Training & Enablement',
    description:
      'Structured training programmes for operations teams, dispatchers, fleet managers, and IT staff. Available as on-site workshops, live virtual sessions, or self-paced recorded modules.',
  },
  {
    icon: Users,
    title: 'Integration Development',
    description:
      'Custom integration development for your existing ERP, WMS, e-commerce platform, or third-party systems. Our engineers build, test, and maintain integrations to your specifications.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance Review',
    description:
      'Architecture review, security hardening, and compliance assessment for regulated industries. Includes documentation for GDPR, SOC 2, and industry-specific compliance requirements.',
  },
];

export default function SupportServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Support Services
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Support that scales{' '}
            <span className="text-primary">with your operation.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            From community forums to dedicated enterprise support engineers — Fleetbase offers
            support options for every deployment size and business requirement.
          </p>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Support plans</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`flex flex-col rounded-xl border p-8 ${plan.highlight ? 'border-primary bg-primary/5' : 'bg-card'}`}
              >
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  {plan.highlight && (
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="mb-3 text-sm font-medium text-primary">{plan.price}</div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlight ? 'default' : 'outline'} asChild>
                  <Link href={plan.ctaHref}>
                    {plan.cta} <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Professional services</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Beyond support, our professional services team can help you deploy, integrate, and
              optimise Fleetbase for your specific operation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border bg-card p-8">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
                  <service.icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <Link href="/contact/sales">
                Discuss your requirements <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SLA Table */}
      <section className="border-t py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
              Response time SLAs
            </h2>
            <div className="overflow-hidden rounded-xl border">
              <table className="w-full text-sm">
                <thead className="border-b bg-muted/40">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Issue severity</th>
                    <th className="px-6 py-4 text-left font-semibold">Standard</th>
                    <th className="px-6 py-4 text-left font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { severity: 'Critical — platform down', standard: '1 business day', enterprise: '4 hours' },
                    { severity: 'High — major feature broken', standard: '2 business days', enterprise: '8 hours' },
                    { severity: 'Medium — feature impaired', standard: '5 business days', enterprise: '2 business days' },
                    { severity: 'Low — general question', standard: '10 business days', enterprise: '5 business days' },
                  ].map((row) => (
                    <tr key={row.severity} className="bg-card">
                      <td className="px-6 py-4 text-muted-foreground">{row.severity}</td>
                      <td className="px-6 py-4">{row.standard}</td>
                      <td className="px-6 py-4 font-medium text-primary">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
