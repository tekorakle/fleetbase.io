import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Code2, Building2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Licensing Options | Fleetbase',
  description:
    'Understand Fleetbase licensing — AGPL-3.0 open source for self-hosted deployments and commercial licences for proprietary modifications and OEM use. Choose the right option for your business.',
  keywords: ['fleetbase licensing', 'AGPL logistics software', 'open source logistics licence', 'commercial logistics software licence'],
  openGraph: {
    title: 'Licensing Options | Fleetbase',
    description: 'AGPL-3.0 open source and commercial licensing options for Fleetbase.',
  },
};

const licences = [
  {
    icon: Code2,
    title: 'AGPL-3.0 — Open Source',
    badge: 'Free',
    description:
      'The Fleetbase core platform is released under the GNU Affero General Public License v3.0. Use, modify, and deploy freely — with the requirement that modifications you distribute must also be open-source.',
    suitable: [
      'Internal deployments (no distribution required)',
      'Non-commercial and academic use',
      'Open-source projects and extensions',
      'Operators running Fleetbase for their own fleet',
      'Developers building open-source integrations',
    ],
    notSuitable: [
      'Distributing modified versions without open-sourcing changes',
      'Building proprietary SaaS products on the core platform',
      'OEM or white-label distribution',
    ],
    cta: 'Get started free',
    ctaHref: '/trial',
    highlight: false,
  },
  {
    icon: Building2,
    title: 'Commercial Licence',
    badge: 'Enterprise',
    description:
      'For businesses that need to distribute modified versions of Fleetbase, build proprietary SaaS products on the platform, or use Fleetbase in OEM/white-label products without open-source obligations.',
    suitable: [
      'Distributing modified Fleetbase without open-sourcing changes',
      'Building proprietary SaaS logistics products',
      'OEM and white-label distribution',
      'Managed service providers offering Fleetbase to clients',
      'Enterprise deployments requiring specific licence terms',
    ],
    notSuitable: [],
    cta: 'Contact sales',
    ctaHref: '/contact/sales',
    highlight: true,
  },
  {
    icon: Shield,
    title: 'MIT — SDKs & Client Libraries',
    badge: 'Free',
    description:
      'The Fleetbase JavaScript SDK, PHP SDK, Extensions SDK, and Navigator app are released under the MIT licence. Maximum flexibility for building integrations and commercial products on top of the API.',
    suitable: [
      'Commercial integrations and applications',
      'Custom mobile apps using the Navigator codebase',
      'White-label driver apps',
      'SaaS products built on the Fleetbase API',
      'Any commercial or non-commercial use',
    ],
    notSuitable: [],
    cta: 'View on GitHub',
    ctaHref: 'https://github.com/fleetbase',
    highlight: false,
  },
];

const faqs = [
  {
    q: 'If I run Fleetbase internally for my own fleet, do I need a commercial licence?',
    a: 'No. Running Fleetbase internally for your own operations — even in a commercial business — does not require a commercial licence under AGPL-3.0. The AGPL copyleft obligation only applies when you distribute the software to others.',
  },
  {
    q: 'Can I build a SaaS product on top of Fleetbase?',
    a: 'If you are offering Fleetbase as a service to others (SaaS), the AGPL-3.0 treats this as distribution, which means you must open-source your modifications. If you want to build a proprietary SaaS product, a commercial licence is required.',
  },
  {
    q: 'What counts as "distribution" under AGPL-3.0?',
    a: 'Distribution includes providing the software to external users — either as a download or as a network service (SaaS). Running Fleetbase internally within your own organisation is not distribution.',
  },
  {
    q: 'Can I use the Extensions SDK to build commercial extensions?',
    a: 'Yes. The Extensions SDK is MIT-licensed, so you can build and sell commercial extensions without any open-source obligation. Extensions that use only the API and SDK are not subject to AGPL copyleft.',
  },
  {
    q: 'How is commercial licence pricing structured?',
    a: 'Commercial licence pricing depends on your use case, deployment scale, and distribution model. Contact our sales team to discuss your specific requirements and get a quote.',
  },
];

export default function LicensingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Licensing
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Choose the right licence{' '}
            <span className="text-primary">for your use case.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Fleetbase uses different licences for different parts of the platform. Most deployments
            are fully covered by the free AGPL-3.0 licence. Commercial licences are available for
            specific distribution and OEM use cases.
          </p>
        </div>
      </section>

      {/* Licence Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {licences.map((licence) => (
              <div
                key={licence.title}
                className={`flex flex-col rounded-xl border p-8 ${licence.highlight ? 'border-primary bg-primary/5' : 'bg-card'}`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
                    <licence.icon className="size-5 text-primary" />
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${licence.highlight ? 'bg-primary text-primary-foreground' : 'border bg-muted/40 text-muted-foreground'}`}>
                    {licence.badge}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{licence.title}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{licence.description}</p>
                <div className="mb-6">
                  <div className="mb-3 text-sm font-medium text-green-600 dark:text-green-400">Suitable for:</div>
                  <ul className="space-y-2">
                    {licence.suitable.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant={licence.highlight ? 'default' : 'outline'} asChild>
                  <Link href={licence.ctaHref} target={licence.ctaHref.startsWith('http') ? '_blank' : undefined} rel={licence.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    {licence.cta} <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
              Licensing FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border bg-card p-6">
                  <div className="mb-2 font-semibold">{faq.q}</div>
                  <div className="text-sm leading-relaxed text-muted-foreground">{faq.a}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Still unsure which licence applies to your use case?{' '}
              <Link href="/contact/sales" className="text-primary hover:underline">
                Contact our team
              </Link>{' '}
              and we will help you choose the right option.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
