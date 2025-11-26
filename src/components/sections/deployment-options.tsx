'use client';

import { Cloud, Server, Wrench, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const deploymentOptions = [
  {
    icon: Cloud,
    title: 'Fleetbase Cloud',
    description: 'Fully managed cloud platform with automatic updates, backups, and 99.9% uptime SLA.',
    features: [
      'No infrastructure management',
      'Automatic scaling',
      'Enterprise-grade security',
      'Global CDN & edge locations',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/signup',
    ctaVariant: 'default' as const,
    highlight: true,
  },
  {
    icon: Server,
    title: 'Self-Hosted',
    description: 'Deploy on your own infrastructure with complete control over data, security, and customization.',
    features: [
      'Full source code access',
      'Deploy anywhere (AWS, Azure, GCP, on-prem)',
      'Custom licensing options',
      'No vendor lock-in',
    ],
    cta: 'View Deployment Guide',
    ctaLink: '/docs/self-hosting',
    ctaVariant: 'outline' as const,
  },
  {
    icon: Wrench,
    title: 'Professional Services',
    description: 'Expert implementation, custom development, and dedicated support for enterprise deployments.',
    features: [
      'Custom feature development',
      'White-label solutions',
      'Dedicated support team',
      'Training & onboarding',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact/sales',
    ctaVariant: 'outline' as const,
  },
];

export default function DeploymentOptions() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
          <h2 className="text-4xxl mb-4 leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
            Deploy Your Way
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            Choose the deployment option that fits your needs—from fully managed cloud to self-hosted infrastructure, with professional services available for every stage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {deploymentOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <Card
                key={option.title}
                className={`relative overflow-hidden ${
                  option.highlight
                    ? 'border-primary shadow-lg ring-2 ring-primary/20'
                    : ''
                }`}
              >
                {option.highlight && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Recommended
                  </div>
                )}
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-snug">
                    {option.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    variant={option.ctaVariant}
                    className={`w-full group ${
                      option.ctaVariant === 'default'
                        ? 'bg-[#4A90E2] hover:bg-[#3D7DC2] text-white'
                        : ''
                    }`}
                    asChild
                  >
                    <Link href={option.ctaLink} className="flex items-center justify-center gap-2">
                      {option.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which option is right for you?
          </p>
          <Button variant="outline" asChild>
            <Link href="/pricing" className="gap-2">
              Compare All Options
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
