import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Handshake, Code2, Globe, Wrench, BarChart3, Puzzle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Partner Program | Fleetbase',
  description:
    'Join the Fleetbase partner network. Integration partners, solution providers, and implementation specialists helping businesses deploy and extend the open-source logistics platform.',
  keywords: ['fleetbase partners', 'logistics software partners', 'fleetbase integration partners', 'logistics technology partner program'],
  openGraph: {
    title: 'Partner Program | Fleetbase',
    description: 'Join the Fleetbase partner network — integration partners, solution providers, and implementation specialists.',
  },
};

const partnerTypes = [
  {
    icon: Puzzle,
    title: 'Integration Partners',
    description:
      'Technology companies that have built certified integrations with Fleetbase — connecting e-commerce platforms, ERPs, payment processors, mapping providers, and communication tools to the Fleetbase ecosystem.',
    examples: ['E-commerce platforms', 'ERP & WMS systems', 'Payment processors', 'Mapping & routing providers', 'SMS & notification services'],
    cta: 'Become an integration partner',
  },
  {
    icon: Wrench,
    title: 'Implementation Partners',
    description:
      'Consulting firms and system integrators that help businesses deploy, configure, and customise Fleetbase for their specific operations. Implementation partners are certified by Fleetbase and listed in our partner directory.',
    examples: ['Logistics consultancies', 'System integrators', 'IT services firms', 'Digital transformation agencies'],
    cta: 'Become an implementation partner',
  },
  {
    icon: Code2,
    title: 'Technology Partners',
    description:
      'Hardware manufacturers, IoT providers, and technology companies whose products work with Fleetbase — including GPS hardware, barcode scanners, vehicle telematics systems, and mobile device management platforms.',
    examples: ['GPS hardware manufacturers', 'IoT & telematics providers', 'Mobile device management', 'Barcode & RFID hardware'],
    cta: 'Become a technology partner',
  },
  {
    icon: Globe,
    title: 'Reseller Partners',
    description:
      'Regional and vertical-specialist resellers who bring Fleetbase to markets and industries they know deeply — offering local support, implementation, and customisation services alongside the platform.',
    examples: ['Regional logistics specialists', 'Vertical industry experts', 'Managed service providers', 'Value-added resellers'],
    cta: 'Become a reseller partner',
  },
];

const partnerBenefits = [
  { title: 'Partner directory listing', description: 'Featured placement in the Fleetbase partner directory, visible to all prospects and customers.' },
  { title: 'Co-marketing opportunities', description: 'Joint case studies, blog posts, webinars, and event appearances to grow your reach.' },
  { title: 'Technical enablement', description: 'Access to technical documentation, sandbox environments, and direct engineering support.' },
  { title: 'Partner portal access', description: 'Deal registration, lead sharing, and partner-exclusive resources in the Fleetbase partner portal.' },
  { title: 'Revenue sharing', description: 'Referral and revenue share programmes for qualifying partner types and deal sizes.' },
  { title: 'Certification programme', description: 'Official Fleetbase certification for implementation partners and their technical staff.' },
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Partner Program
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Grow your business with{' '}
            <span className="text-primary">Fleetbase.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            The Fleetbase partner network connects integration providers, implementation specialists,
            and technology companies with a global community of logistics operators looking for
            trusted solutions and expertise.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact/sales">
                Apply to partner <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/developers">View API docs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Partner types</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Find the right partnership model for your business.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {partnerTypes.map((type) => (
              <div key={type.title} className="rounded-xl border bg-card p-8">
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
                  <type.icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{type.title}</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">{type.description}</p>
                <div className="mb-6">
                  <div className="mb-2 text-sm font-medium">Includes:</div>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((ex) => (
                      <span key={ex} className="rounded-full border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/contact/sales" className="flex items-center text-sm font-medium text-primary hover:underline">
                  {type.cta} <ArrowRight className="ml-1 size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Partner benefits</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Everything you need to build a successful Fleetbase practice.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl border bg-card p-6">
                <Handshake className="mb-3 size-5 text-primary" />
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Ready to partner with Fleetbase?
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Tell us about your business and the partnership model you have in mind. Our
                partnerships team will be in touch within 2 business days.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact/sales">
                  Apply now <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
