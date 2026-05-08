'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Marquee } from '@/components/magicui/marquee';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const INTEGRATIONS = [
 {
 name: 'Twilio',
 category: 'Communication',
 description: 'SMS & Voice notifications',
 logo: '/images/integrations/twilio.svg',
 },
 {
 name: 'SendGrid',
 category: 'Communication',
 description: 'Email delivery platform',
 logo: '/images/integrations/sendgrid.svg',
 },
 {
 name: 'Slack',
 category: 'Communication',
 description: 'Team collaboration',
 logo: '/images/integrations/slack.svg',
 },
 {
 name: 'SAP',
 category: 'Business & ERP',
 description: 'Enterprise resource planning',
 logo: '/images/integrations/sap.svg',
 },
 {
 name: 'QuickBooks',
 category: 'Business & ERP',
 description: 'Accounting software',
 logo: '/images/integrations/quickbooks.svg',
 },
 {
 name: 'Oracle',
 category: 'Business & ERP',
 description: 'Supply chain management',
 logo: '/images/integrations/oracle.svg',
 },
 {
 name: 'Tableau',
 category: 'Data & Analytics',
 description: 'Business intelligence',
 logo: '/images/integrations/tableau.svg',
 },
 {
 name: 'Power BI',
 category: 'Data & Analytics',
 description: 'Data visualization',
 logo: '/images/integrations/powerbi.svg',
 },
 {
 name: 'Stripe',
 category: 'Payments',
 description: 'Payment processing',
 logo: '/images/integrations/stripe.svg',
 },
 {
 name: 'PayPal',
 category: 'Payments',
 description: 'Online payments',
 logo: '/images/integrations/paypal.svg',
 },
 {
 name: 'Square',
 category: 'Payments',
 description: 'Point of sale',
 logo: '/images/integrations/square.svg',
 },
 {
 name: 'AWS',
 category: 'Cloud',
 description: 'Cloud infrastructure',
 logo: '/images/integrations/amazonaws.svg',
 },
 {
 name: 'Google Cloud',
 category: 'Cloud',
 description: 'Cloud platform',
 logo: '/images/integrations/googlecloud.svg',
 },
 {
 name: 'Azure',
 category: 'Cloud',
 description: 'Microsoft cloud',
 logo: '/images/integrations/microsoftazure.svg',
 },
 {
 name: 'GitHub',
 category: 'Developer Tools',
 description: 'Version control',
 logo: '/images/integrations/github.svg',
 },
 {
 name: 'Zapier',
 category: 'Developer Tools',
 description: 'Workflow automation',
 logo: '/images/integrations/zapier.svg',
 },
 {
 name: 'Postman',
 category: 'Developer Tools',
 description: 'API development',
 logo: '/images/integrations/postman.svg',
 },
 {
 name: 'Microsoft Teams',
 category: 'Communication',
 description: 'Enterprise messaging',
 logo: '/images/integrations/microsoftteams.svg',
 },
];

const firstRow = INTEGRATIONS.slice(0, Math.ceil(INTEGRATIONS.length / 2));
const secondRow = INTEGRATIONS.slice(Math.ceil(INTEGRATIONS.length / 2));

const IntegrationsEcosystem = () => {
 return (
 <section className="container flex flex-col gap-y-10 overflow-x-hidden py-10 md:py-15 lg:flex-row">
 <div className="flex max-w-lg flex-col gap-15 text-balance">
 <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
 Works with the Stack You Already Have
 </h2>
 <div className="space-y-7.5">
 <p className="text-muted-foreground text-lg leading-snug">
 Fleetbase is built to sit inside real-world operations, not greenfield demos. Connect your ERP,
 accounting, communications, analytics, cloud infrastructure, and custom apps without rebuilding
 your business around a black box.
 </p>

 <Button
 variant="ghost"
 asChild
 className="text-accent-foreground group gap-3 !px-0 hover:!bg-transparent hover:opacity-90"
 >
 <Link href="/developers/api">
 View API Documentation
 <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
 </Link>
 </Button>
 </div>
 </div>

 <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))] flex flex-1 flex-col gap-2.25 overflow-hidden mask-l-from-50% mask-l-to-100%">
 <Marquee
 pauseOnHover
 className="py-0 [--duration:30s] [--gap:calc(var(--spacing)*2.25)]"
 >
 {firstRow.map((integration) => (
 <IntegrationCard key={integration.name} {...integration} />
 ))}
 </Marquee>
 <Marquee
 reverse
 pauseOnHover
 className="py-0 [--duration:30s] [--gap:calc(var(--spacing)*2.25)]"
 >
 {secondRow.map((integration) => (
 <IntegrationCard key={integration.name} {...integration} />
 ))}
 </Marquee>
 </div>
 </section>
 );
};

export default IntegrationsEcosystem;

const IntegrationCard = ({
 name,
 category,
 description,
 logo,
}: {
 name: string;
 category: string;
 description: string;
 logo: string;
}) => {
 return (
 <Card
 className={cn(
 'hover:bg-accent/60 flex w-64 cursor-pointer flex-col items-center gap-4 bg-transparent p-6 transition-colors duration-200 md:p-8',
 )}
 >
 <CardContent className="flex flex-col items-center gap-4 p-0 text-center">
 <div className="bg-background/50 flex h-16 w-16 items-center justify-center rounded-lg p-3">
 <Image
 src={logo}
 alt={`${name} logo`}
 width={48}
 height={48}
 className="h-auto w-full"
 />
 </div>
 <div className="space-y-1">
 <h3 className="text-base font-semibold">{name}</h3>
 <p className="text-muted-foreground text-xs">{category}</p>
 </div>
 <p className="text-muted-foreground text-sm leading-snug">
 {description}
 </p>
 </CardContent>
 </Card>
 );
};
