'use client';

import {
  CheckCircle2,
  FileText,
  GitBranch,
  Settings,
  Workflow,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { useRef } from 'react';

import { AnimatedBeam } from '@/components/magicui/animated-beam';
import { cn } from '@/lib/utils';

const configCards = [
  {
    id: 'custom-fields',
    title: 'Custom Fields',
    subtitle: 'Add order-specific data fields',
    icon: FileText,
    iconColor: 'text-blue-500',
    position: 'absolute top-0 left-0',
  },
  {
    id: 'business-rules',
    title: 'Business Rules',
    subtitle: 'Define conditional logic',
    icon: GitBranch,
    iconColor: 'text-purple-500',
    position: 'absolute top-32 left-0',
  },
  {
    id: 'processing',
    title: 'Processing',
    subtitle: '',
    icon: Settings,
    iconColor: 'text-primary',
    position: 'absolute top-18 right-0',
    isProcessing: true,
  },
  {
    id: 'status-flow',
    title: 'Custom Status Flow',
    subtitle: 'Automated status updates',
    icon: Workflow,
    iconColor: 'text-emerald-500',
    position: 'absolute right-0 bottom-0',
  },
];

export default function OrderConfigShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const connectorRef = useRef<HTMLDivElement>(null);

  // Create dynamic refs for each card
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];

  return (
    <section className="section-padding container">
      <div
        ref={containerRef}
        className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0"
      >
        {/* Left Content */}
        <div className="relative z-1 flex flex-col gap-4">
          <motion.div
            ref={connectorRef}
            className="after:bg-accent relative mt-10 w-fit rounded-full after:absolute after:inset-[2px] after:rounded-full max-lg:order-3 lg:mt-0"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--chart-1)] via-[var(--chart-2)] to-[var(--chart-3)] blur-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            />
            <motion.div
              className="from-chart-2 to-chart-3 absolute inset-0 top-0 bg-gradient-to-r blur-3xl will-change-transform"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--chart-1)] via-[var(--chart-2)] to-[var(--chart-3)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            />
            <div className="relative z-10 flex items-center gap-2 px-5 py-4 text-xs lg:text-sm">
              <Zap className="fill-foreground size-3.5 shrink-0" />
              <div>
                <span className="text-muted-foreground">No Code Required:</span>{' '}
                <span className="text-accent-foreground">
                  Configure complex workflows visually
                </span>
              </div>
            </div>
          </motion.div>
          <h2 className="text-4xxl leading-tight tracking-normal md:text-5xl">
            One Platform, <br className="hidden md:block" />
            <span className="text-gradient">Infinite Configurations</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl text-lg leading-snug">
            From trucking to healthcare, food delivery to military logistics—Fleetbase adapts to any industry and operational flow. Configure custom fields, business rules, and workflows that match your exact processes. No code, no limits, no vendor lock-in.
          </p>
        </div>

        {/* Right Workflow */}
        <div className="relative h-full min-h-[300px]">
          {configCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                ref={cardRefs[index]}
                className={cn(
                  'z-10 w-fit space-y-2 px-3 py-2.5',
                  card.position,
                  card.isProcessing
                    ? 'after:bg-accent rounded-full before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-[var(--chart-1)] before:via-[var(--chart-2)] before:to-[var(--chart-3)] after:absolute after:inset-[1px] after:rounded-full'
                    : 'bg-accent rounded-md shadow-xl',
                )}
              >
                {card.isProcessing ? (
                  <div className="relative z-10 flex items-center gap-1.5">
                    <Settings className="size-3 animate-spin" />

                    <h3 className="text-accent-foreground text-[0.625rem] font-semibold lg:text-sm">
                      {card.title}
                    </h3>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      {IconComponent && (
                        <IconComponent
                          className={`size-3 lg:size-3.5 ${card.iconColor}`}
                        />
                      )}
                      <h3 className="text-xs font-bold lg:text-sm">
                        {card.title}
                      </h3>
                    </div>
                    {card.subtitle && (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-3 text-emerald-600 lg:size-3.5" />
                        <p className="text-muted-foreground text-[0.625rem] lg:text-xs">
                          {card.subtitle}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Animated Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={connectorRef}
          toRef={card1Ref}
          gradientStartColor="var(--chart-3)"
          gradientStopColor="var(--chart-1)"
          duration={30}
          curvature={0}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={connectorRef}
          toRef={card2Ref}
          gradientStartColor="var(--chart-3)"
          gradientStopColor="var(--chart-1)"
          duration={30}
          curvature={0}
          className="hidden lg:block"
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={card1Ref}
          toRef={card3Ref}
          gradientStartColor="var(--chart-3)"
          gradientStopColor="var(--chart-1)"
          duration={25}
          curvature={70}
          startYOffset={20}
          endXOffset={30}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={card2Ref}
          toRef={card3Ref}
          gradientStartColor="var(--chart-3)"
          gradientStopColor="var(--chart-1)"
          duration={20}
          curvature={0}
          className="hidden lg:block"
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={card3Ref}
          toRef={card4Ref}
          gradientStartColor="var(--chart-3)"
          gradientStopColor="var(--chart-1)"
          duration={35}
          curvature={20}
          endXOffset={40}
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={card4Ref}
          toRef={card2Ref}
          gradientStartColor="var(--chart-3)"
          gradientStopColor="var(--chart-1)"
          duration={48}
          curvature={0}
        />
      </div>

      {/* Key Capabilities */}
      <div className="mx-auto max-w-4xl pt-16">
        <p className="text-muted-foreground text-center mb-8">
          What you can configure:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-lg border bg-card/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Custom Fields</h3>
              <p className="text-muted-foreground text-sm">
                Add any data fields your orders need - from special handling
                instructions to custom pricing
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-lg border bg-card/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <GitBranch className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Logic & Triggers</h3>
              <p className="text-muted-foreground text-sm">
                Set conditions and triggers to automate actions based on order
                status, location, or custom rules
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-lg border bg-card/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Workflow className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Activity Flows</h3>
              <p className="text-muted-foreground text-sm">
                Design custom status progressions that match your exact
                operational workflow
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-10">
            <Button 
              className="bg-[#4A90E2] hover:bg-[#3D7DC2] text-white shadow-md px-8 py-6 text-lg" 
              asChild
            >
              <a href="/order-config">
                See Configuration Examples
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
