import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Handshake, Code2, Globe, Wrench, Puzzle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// All integrations grouped by category
const INTEGRATIONS = [
 // Maps & Location
 { name: 'Google Maps', category: 'Maps & Location', logo: 'https://cdn.simpleicons.org/googlemaps/4285F4' },
 { name: 'Mapbox', category: 'Maps & Location', logo: 'https://cdn.simpleicons.org/mapbox/000000' },
 { name: 'HERE Maps', category: 'Maps & Location', logo: 'https://cdn.simpleicons.org/here/00AFAA' },
 { name: 'OpenStreetMap', category: 'Maps & Location', logo: 'https://cdn.simpleicons.org/openstreetmap/7EBC6F' },
 // Payments
 { name: 'Stripe', category: 'Payments', logo: 'https://cdn.simpleicons.org/stripe/635BFF' },
 { name: 'PayPal', category: 'Payments', logo: 'https://cdn.simpleicons.org/paypal/003087' },
 { name: 'Braintree', category: 'Payments', logo: 'https://cdn.simpleicons.org/braintree/009CDE' },
 // Communication
 { name: 'Twilio', category: 'Communication', logo: 'https://cdn.simpleicons.org/twilio/F22F46' },
 { name: 'SendGrid', category: 'Communication', logo: 'https://cdn.simpleicons.org/sendgrid/51A9E3' },
 { name: 'Slack', category: 'Communication', logo: 'https://cdn.simpleicons.org/slack/4A154B' },
 { name: 'Microsoft Teams', category: 'Communication', logo: 'https://cdn.simpleicons.org/microsoftteams/6264A7' },
 { name: 'WhatsApp', category: 'Communication', logo: 'https://cdn.simpleicons.org/whatsapp/25D366' },
 { name: 'Mailgun', category: 'Communication', logo: 'https://cdn.simpleicons.org/mailgun/F06B66' },
 // Cloud & Infrastructure
 { name: 'AWS', category: 'Cloud & Infrastructure', logo: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
 { name: 'Google Cloud', category: 'Cloud & Infrastructure', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
 { name: 'Microsoft Azure', category: 'Cloud & Infrastructure', logo: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
 { name: 'DigitalOcean', category: 'Cloud & Infrastructure', logo: 'https://cdn.simpleicons.org/digitalocean/0080FF' },
 { name: 'Docker', category: 'Cloud & Infrastructure', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
 { name: 'Kubernetes', category: 'Cloud & Infrastructure', logo: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
 // Databases
 { name: 'MySQL', category: 'Databases', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
 { name: 'PostgreSQL', category: 'Databases', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
 { name: 'Redis', category: 'Databases', logo: 'https://cdn.simpleicons.org/redis/DC382D' },
 { name: 'MongoDB', category: 'Databases', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
 // Developer Tools
 { name: 'GitHub', category: 'Developer Tools', logo: 'https://cdn.simpleicons.org/github/181717' },
 { name: 'Zapier', category: 'Developer Tools', logo: 'https://cdn.simpleicons.org/zapier/FF4A00' },
 { name: 'Postman', category: 'Developer Tools', logo: 'https://cdn.simpleicons.org/postman/FF6C37' },
 // Analytics & Monitoring
 { name: 'Google Analytics', category: 'Analytics & Monitoring', logo: 'https://cdn.simpleicons.org/googleanalytics/E37400' },
 { name: 'Sentry', category: 'Analytics & Monitoring', logo: 'https://cdn.simpleicons.org/sentry/362D59' },
 { name: 'Datadog', category: 'Analytics & Monitoring', logo: 'https://cdn.simpleicons.org/datadog/632CA6' },
 { name: 'Grafana', category: 'Analytics & Monitoring', logo: 'https://cdn.simpleicons.org/grafana/F46800' },
 // E-commerce
 { name: 'Shopify', category: 'E-commerce', logo: 'https://cdn.simpleicons.org/shopify/96BF48' },
 { name: 'WooCommerce', category: 'E-commerce', logo: 'https://cdn.simpleicons.org/woocommerce/96588A' },
 { name: 'Magento', category: 'E-commerce', logo: 'https://cdn.simpleicons.org/magento/EE672F' },
 // Auth & Security
 { name: 'Auth0', category: 'Auth & Security', logo: 'https://cdn.simpleicons.org/auth0/EB5424' },
 { name: 'Keycloak', category: 'Auth & Security', logo: 'https://cdn.simpleicons.org/keycloak/4D4D4D' },
 // Mobile
 { name: 'Android', category: 'Mobile', logo: 'https://cdn.simpleicons.org/android/3DDC84' },
 { name: 'React Native', category: 'Mobile', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
 { name: 'Expo', category: 'Mobile', logo: 'https://cdn.simpleicons.org/expo/000020' },
 // Backend & Framework
 { name: 'Laravel', category: 'Backend & Framework', logo: 'https://cdn.simpleicons.org/laravel/FF2D20' },
 { name: 'Node.js', category: 'Backend & Framework', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
 { name: 'Next.js', category: 'Backend & Framework', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
 { name: 'PHP', category: 'Backend & Framework', logo: 'https://cdn.simpleicons.org/php/777BB4' },
];
const INTEGRATION_CATEGORIES = [...new Set(INTEGRATIONS.map((i) => i.category))];

export const metadata: Metadata = {
 title: 'Partners & Integrations | Fleetbase',
 description:
 'Fleetbase integrates with 50+ tools across payments, maps, communication, ERP, cloud, and more. Join the Fleetbase partner program as an integration, implementation, technology, or reseller partner.',
 keywords: ['Fleetbase integrations', 'fleet management integrations', 'logistics software integrations', 'Fleetbase partner program', 'logistics API integrations'],
 openGraph: {
 title: 'Partners & Integrations | Fleetbase',
 description: 'Fleetbase integrates with 50+ tools. Join the partner program as an integration, implementation, technology, or reseller partner.',
 },
 alternates: { canonical: 'https://fleetbase.io/partners' },
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
 <Link href="https://cal.com/shivthakker/enquiry">
 Apply to partner <ArrowRight className="ml-2 size-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="/developers">View API docs</Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Integration Ecosystem */}
 <section className="py-16 md:py-20 border-b">
 <div className="container">
 <div className="mb-12 text-center">
 <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Integration Ecosystem</h2>
 <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
 Connect Fleetbase to the tools you already use. All integrations are available via the Extensions marketplace or directly through our REST API and webhooks.
 </p>
 </div>
 {INTEGRATION_CATEGORIES.map((category) => (
 <div key={category} className="mb-10">
 <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 border-b pb-2">
 {category}
 </h3>
 <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
 {INTEGRATIONS.filter((i) => i.category === category).map((integration) => (
 <div
 key={integration.name}
 className="flex flex-col items-center gap-2 rounded-lg border bg-card p-3 hover:border-primary/40 hover:shadow-sm transition-all"
 >
 {/* eslint-disable-next-line @next/next/no-img-element */}
 <img
 src={integration.logo}
 alt={`${integration.name} logo`}
 className="h-8 w-8 object-contain"
 loading="lazy"
 />
 <span className="text-xs text-center text-muted-foreground leading-tight">{integration.name}</span>
 </div>
 ))}
 </div>
 </div>
 ))}
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
 <Link href="https://cal.com/shivthakker/enquiry" className="flex items-center text-sm font-medium text-primary hover:underline">
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
 <Link href="https://cal.com/shivthakker/enquiry">
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
