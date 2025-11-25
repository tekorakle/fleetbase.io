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
    logo: 'https://cdn.simpleicons.org/twilio/F22F46',
  },
  {
    name: 'SendGrid',
    category: 'Communication',
    description: 'Email delivery platform',
    logo: 'https://cdn.simpleicons.org/sendgrid/1A82E2',
  },
  {
    name: 'Slack',
    category: 'Communication',
    description: 'Team collaboration',
    logo: 'https://cdn.simpleicons.org/slack/4A154B',
  },
  {
    name: 'SAP',
    category: 'Business & ERP',
    description: 'Enterprise resource planning',
    logo: 'https://cdn.simpleicons.org/sap/0FAAFF',
  },
  {
    name: 'QuickBooks',
    category: 'Business & ERP',
    description: 'Accounting software',
    logo: 'https://cdn.simpleicons.org/quickbooks/2CA01C',
  },
  {
    name: 'Oracle',
    category: 'Business & ERP',
    description: 'Supply chain management',
    logo: 'https://cdn.simpleicons.org/oracle/F80000',
  },
  {
    name: 'Tableau',
    category: 'Data & Analytics',
    description: 'Business intelligence',
    logo: 'https://cdn.simpleicons.org/tableau/E97627',
  },
  {
    name: 'Power BI',
    category: 'Data & Analytics',
    description: 'Data visualization',
    logo: 'https://cdn.simpleicons.org/powerbi/F2C811',
  },
  {
    name: 'Stripe',
    category: 'Payments',
    description: 'Payment processing',
    logo: 'https://cdn.simpleicons.org/stripe/008CDD',
  },
  {
    name: 'PayPal',
    category: 'Payments',
    description: 'Online payments',
    logo: 'https://cdn.simpleicons.org/paypal/00457C',
  },
  {
    name: 'Square',
    category: 'Payments',
    description: 'Point of sale',
    logo: 'https://cdn.simpleicons.org/square/000000',
  },
  {
    name: 'AWS',
    category: 'Cloud',
    description: 'Cloud infrastructure',
    logo: 'https://cdn.simpleicons.org/amazonaws/FF9900',
  },
  {
    name: 'Google Cloud',
    category: 'Cloud',
    description: 'Cloud platform',
    logo: 'https://cdn.simpleicons.org/googlecloud/4285F4',
  },
  {
    name: 'Azure',
    category: 'Cloud',
    description: 'Microsoft cloud',
    logo: 'https://cdn.simpleicons.org/microsoftazure/0078D4',
  },
  {
    name: 'GitHub',
    category: 'Developer Tools',
    description: 'Version control',
    logo: 'https://cdn.simpleicons.org/github/181717',
  },
  {
    name: 'Zapier',
    category: 'Developer Tools',
    description: 'Workflow automation',
    logo: 'https://cdn.simpleicons.org/zapier/FF4A00',
  },
  {
    name: 'Postman',
    category: 'Developer Tools',
    description: 'API development',
    logo: 'https://cdn.simpleicons.org/postman/FF6C37',
  },
  {
    name: 'Microsoft Teams',
    category: 'Communication',
    description: 'Enterprise messaging',
    logo: 'https://cdn.simpleicons.org/microsoftteams/6264A7',
  },
];

const firstRow = INTEGRATIONS.slice(0, Math.ceil(INTEGRATIONS.length / 2));
const secondRow = INTEGRATIONS.slice(Math.ceil(INTEGRATIONS.length / 2));

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
