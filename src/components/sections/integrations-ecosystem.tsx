'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Marquee } from '@/components/magicui/marquee';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const INTEGRATIONS = [
  {
    category: 'Communication',
    tools: [
      { name: 'Twilio', purpose: 'SMS & Voice' },
      { name: 'SendGrid', purpose: 'Email Delivery' },
      { name: 'Slack', purpose: 'Team Alerts' },
    ],
  },
  {
    category: 'Business & ERP',
    tools: [
      { name: 'SAP', purpose: 'Enterprise ERP' },
      { name: 'QuickBooks', purpose: 'Accounting' },
      { name: 'Oracle', purpose: 'Supply Chain' },
    ],
  },
  {
    category: 'Data & Analytics',
    tools: [
      { name: 'Tableau', purpose: 'BI Dashboards' },
      { name: 'Power BI', purpose: 'Data Viz' },
      { name: 'Looker', purpose: 'Analytics' },
    ],
  },
  {
    category: 'Payments',
    tools: [
      { name: 'Stripe', purpose: 'Payment Processing' },
      { name: 'PayPal', purpose: 'Online Payments' },
      { name: 'Square', purpose: 'Point of Sale' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    tools: [
      { name: 'AWS', purpose: 'Cloud Hosting' },
      { name: 'Google Cloud', purpose: 'Infrastructure' },
      { name: 'Azure', purpose: 'Enterprise Cloud' },
    ],
  },
  {
    category: 'Developer Tools',
    tools: [
      { name: 'GitHub', purpose: 'Version Control' },
      { name: 'Zapier', purpose: 'Automation' },
      { name: 'Postman', purpose: 'API Testing' },
    ],
  },
];

const firstRow = INTEGRATIONS.slice(0, INTEGRATIONS.length / 2);
const secondRow = INTEGRATIONS.slice(INTEGRATIONS.length / 2);

const IntegrationsEcosystem = () => {
  return (
    <section className="container flex flex-col gap-y-10 overflow-x-hidden py-10 md:py-15 lg:flex-row">
      <div className="flex max-w-lg flex-col gap-15 text-balance">
        <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
          Connect Your Entire Logistics Stack
        </h2>
        <div className="space-y-7.5">
          <p className="text-muted-foreground text-lg leading-snug">
            Fleetbase integrates seamlessly with your existing tools via REST
            APIs, WebSockets, and webhooks. Connect your ERP, communication
            platforms, analytics tools, and more to create a unified logistics
            ecosystem.
          </p>

          <Button
            variant="ghost"
            asChild
            className="text-accent-foreground group gap-3 !px-0 hover:!bg-transparent hover:opacity-90"
          >
            <Link href="https://docs.fleetbase.io">
              View API Documentation
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))] flex flex-1 flex-col gap-2.25 overflow-hidden mask-l-from-50% mask-l-to-100%">
        <Marquee
          pauseOnHover
          className="py-0 [--duration:25s] [--gap:calc(var(--spacing)*2.25)]"
        >
          {firstRow.map((integration) => (
            <IntegrationCard key={integration.category} {...integration} />
          ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          className="py-0 [--duration:25s] [--gap:calc(var(--spacing)*2.25)]"
        >
          {secondRow.map((integration) => (
            <IntegrationCard key={integration.category} {...integration} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default IntegrationsEcosystem;

const IntegrationCard = ({
  category,
  tools,
}: {
  category: string;
  tools: { name: string; purpose: string }[];
}) => {
  return (
    <Card
      className={cn(
        'hover:bg-accent/60 max-w-xs cursor-pointer gap-4 bg-transparent p-6 md:max-w-sm md:p-8',
        'transition-colors duration-200',
      )}
    >
      <CardContent className="space-y-4 p-0">
        <div className="border-primary/20 mb-4 border-b pb-2">
          <h3 className="text-base font-semibold">{category}</h3>
        </div>
        <div className="space-y-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-between gap-3"
            >
              <span className="font-medium">{tool.name}</span>
              <span className="text-muted-foreground text-xs">
                {tool.purpose}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
