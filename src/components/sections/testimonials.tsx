'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Marquee } from '@/components/magicui/marquee';
import { Button } from '@/components/ui/button';
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const REVIEWS = [
  {
    name: 'Ahmed Al-Rashidi',
    username: 'Operations Director',
    body: "Switched from a per-driver TMS and cut our software cost by 60%. @fleetbase handles our 80-driver fleet and integrates directly with our storefront. The ROI was immediate.",
    img: 'https://avatar.vercel.sh/rashidi_logistics',
  },
  {
    name: 'Priya Nair',
    username: 'Head of Logistics, FreshDrop',
    body: "The Storefront + Fleet-Ops integration is what sold us. Customer places an order, it's automatically dispatched to the nearest driver. Zero manual work in between.",
    img: 'https://avatar.vercel.sh/priya_ops',
  },
  {
    name: 'Marcus Chen',
    username: 'Software Engineer',
    body: "Built a custom @fleetbase extension for our specific workflow in two weeks. The starter template and SDK docs are solid — it just works.",
    img: 'https://avatar.vercel.sh/mchen_dev',
  },
  {
    name: 'Sarah Müller',
    username: 'Supply Chain Manager',
    body: "Self-hosted on AWS in under an hour using Docker. Full data sovereignty was non-negotiable for us — @fleetbase was the only open-source option that could do it all.",
    img: 'https://avatar.vercel.sh/sarahm_supply',
  },
  {
    name: 'James Okafor',
    username: 'CEO, SwiftLine 3PL',
    body: "We run 12 client operations from one @fleetbase instance. The multi-tenant org management is exactly what we needed — and would have cost 10x more anywhere else.",
    img: 'https://avatar.vercel.sh/jokafor_3pl',
  },
  {
    name: 'Lucía Torres',
    username: 'Founder, VeloExpress',
    body: "Our drivers have a branded app, customers see our branding — and we wrote zero mobile code. The Navigator app is genuinely white-label ready out of the box.",
    img: 'https://avatar.vercel.sh/ltorres_courier',
  },
];

const firstRow = REVIEWS.slice(0, REVIEWS.length / 2);
const secondRow = REVIEWS.slice(REVIEWS.length / 2);
const Testimonials = () => {
 return (
 <section className="container flex flex-col gap-y-10 overflow-x-hidden py-10 md:py-15 lg:flex-row">
      <div className="flex max-w-lg flex-col gap-15 text-balance">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Trusted by logistics teams worldwide
          </h2>
          <div className="space-y-7.5">
            <p className="text-muted-foreground text-lg leading-snug">
              From solo courier operators to enterprise 3PLs — teams choose Fleetbase for full control, no per-seat pricing, and a platform that actually fits how they work.
            </p>

            <Button
              variant="ghost"
              asChild
              className="text-accent-foreground group gap-3 !px-0 hover:!bg-transparent hover:opacity-90"
            >
              <Link href="https://console.fleetbase.io/onboard" target="_blank" rel="noopener noreferrer">
                Start your free trial
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

 <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))] flex flex-1 flex-col gap-2.25 overflow-hidden mask-l-from-50% mask-l-to-100%">
 <Marquee
 pauseOnHover
 className="py-0 [--duration:20s] [--gap:calc(var(--spacing)*2.25)]"
 >
 {firstRow.map((review) => (
 <ReviewCard key={review.username} {...review} />
 ))}
 </Marquee>
 <Marquee
 reverse
 pauseOnHover
 className="py-0 [--duration:20s] [--gap:calc(var(--spacing)*2.25)]"
 >
 {secondRow.map((review) => (
 <ReviewCard key={review.username} {...review} />
 ))}
 </Marquee>
 </div>
 </section>
 );
};

export default Testimonials;

const ReviewCard = ({
 img,
 name,
 username,
 body,
}: {
 img: string;
 name: string;
 username: string;
 body: string;
}) => {
 return (
 <Card
 className={cn(
 'hover:bg-accent/60 max-w-xs cursor-pointer gap-4 bg-transparent p-6 md:max-w-sm md:p-8',
 'transition-colors duration-200',
 )}
 >
 <CardHeader className="flex items-center gap-4 p-0">
 <Image
 className="rounded-full"
 width={32}
 height={32}
 alt={`${name} avatar`}
 src={img}
 />
 <div className="flex flex-col">
 <CardTitle className="text-sm font-bold">{name}</CardTitle>
 <CardDescription className="text-muted-foreground text-xs">
 {username}
 </CardDescription>
 </div>
 </CardHeader>
 <CardContent className="p-0">
 <blockquote className="text-sm leading-snug">
          {body.split(/(@fleetbase)/g).map((part, index) =>
            part === '@fleetbase' ? (
              <span key={index} className="text-chart-1">
                {part}
              </span>
            ) : (
              part
            ),
          )}
 </blockquote>
 </CardContent>
 </Card>
 );
};
