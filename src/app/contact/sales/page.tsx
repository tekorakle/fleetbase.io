import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail, MessageSquare, Calendar, Phone, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Sales | Fleetbase',
  description:
    'Talk to the Fleetbase sales team about enterprise plans, custom deployments, professional services, and partnerships. Get a response within 1 business day.',
  keywords: ['fleetbase contact sales', 'fleetbase enterprise', 'logistics software sales', 'fleetbase demo'],
  openGraph: {
    title: 'Contact Sales | Fleetbase',
    description: 'Talk to the Fleetbase team about enterprise plans, custom deployments, and partnerships.',
  },
};

const contactReasons = [
  {
    icon: Zap,
    title: 'Enterprise plan',
    description: 'Large-scale deployments, custom SLAs, dedicated support, and volume pricing.',
  },
  {
    icon: Globe,
    title: 'Custom deployment',
    description: 'On-premise, private cloud, or air-gapped deployments with custom configuration.',
  },
  {
    icon: MessageSquare,
    title: 'Professional services',
    description: 'Implementation, integration development, training, and ongoing technical support.',
  },
  {
    icon: ArrowRight,
    title: 'Partnership enquiry',
    description: 'Integration, reseller, implementation, or technology partnership opportunities.',
  },
];

const faqs = [
  {
    q: 'How quickly will I hear back?',
    a: 'Our sales team responds to all enquiries within 1 business day. For urgent matters, mention it in your message and we will prioritise accordingly.',
  },
  {
    q: 'Can I get a demo before committing?',
    a: 'Yes. We offer personalised demos tailored to your specific operation and use case. Book a demo via the form and our team will prepare a session focused on what matters most to you.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes. All plans include a 7-day free trial with full platform access and no credit card required. You can start a trial immediately without contacting sales.',
  },
  {
    q: 'What information should I include in my message?',
    a: 'The more context you provide — fleet size, order volumes, current tools, and specific requirements — the more useful our first conversation will be. But even a brief message is fine to get started.',
  },
];

export default function ContactSalesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Contact Sales
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Let&apos;s talk about{' '}
            <span className="text-primary">your operation.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Whether you&apos;re evaluating Fleetbase for your fleet, exploring enterprise options, or
            looking for a partner — our team is here to help. We respond within 1 business day.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactReasons.map((reason) => (
              <div key={reason.title} className="rounded-xl border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-lg border bg-background">
                  <reason.icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight">Send us a message</h2>
              <p className="mb-8 text-muted-foreground">
                Fill in the form and our team will be in touch within 1 business day.
              </p>
              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">First name</label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Last name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Work email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Logistics"
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Fleet size</label>
                  <select className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">Select fleet size</option>
                    <option value="1-10">1–10 vehicles</option>
                    <option value="11-50">11–50 vehicles</option>
                    <option value="51-200">51–200 vehicles</option>
                    <option value="201-500">201–500 vehicles</option>
                    <option value="500+">500+ vehicles</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">How can we help?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your operation and what you're looking for..."
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <Button size="lg" className="w-full" type="submit">
                  Send message <ArrowRight className="ml-2 size-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  We respond within 1 business day. No spam, ever.
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight">Other ways to reach us</h2>
                <p className="text-muted-foreground">
                  Not ready to fill in a form? Here are other ways to get in touch.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl border bg-card p-5">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-semibold">Email us directly</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      <Link href="mailto:sales@fleetbase.io" className="text-primary hover:underline">
                        sales@fleetbase.io
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-start gap-4 rounded-xl border bg-card p-5 hover:border-primary/50 transition-colors cursor-pointer">
                    <Calendar className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <div className="font-semibold">Book a demo</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Schedule a 30-minute personalised demo with our team. We&apos;ll tailor it to
                        your specific operation and use case.
                      </div>
                      <div className="mt-2 text-sm text-primary font-medium">Book a time on Cal.com →</div>
                    </div>
                  </div>
                </Link>
                <div className="flex items-start gap-4 rounded-xl border bg-card p-5">
                  <MessageSquare className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-semibold">Community Discord</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      For technical questions and community support, join our{' '}
                      <Link href="https://discord.com/invite/HnTqQ6zAVn" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Discord server
                      </Link>
                      . Our team is active there daily.
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Common questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="rounded-xl border bg-card p-5">
                      <div className="mb-2 font-medium">{faq.q}</div>
                      <div className="text-sm leading-relaxed text-muted-foreground">{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border bg-muted/20 p-6">
                <div className="mb-2 font-semibold">Just want to try it?</div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Start a free 7-day trial with full platform access. No credit card required.
                </p>
                <Button variant="outline" asChild>
                  <Link href="https://console.fleetbase.io">
                    Start free trial <ArrowRight className="ml-2 size-4" />
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
