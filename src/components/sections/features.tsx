import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const ITEMS = [
  {
    title: 'Know Where Everything Is, Instantly.',
    image: {
      src: '/images/home/features/1.webp',
      width: 198,
      height: 133,
    },
    desc: 'Give your customers the real-time tracking they expect. See your entire fleet on a live map, anticipate delays before they happen, and reduce time-consuming "where\'s my order?" calls.',
  },
  {
    title: 'A System That Grows With You.',
    image: {
      src: '/images/home/features/2.webp',
      width: 148,
      height: 124,
    },
    desc: 'Start with what you need today and add new capabilities as you expand. Our modular design lets you add features like warehouse management or customer portals, so you only pay for what you use.',
  },
  {
    title: 'Cut Fuel Costs & Deliver Faster.',
    image: {
      src: '/images/home/features/3.webp',
      width: 154,
      height: 99,
    },
    desc: 'Automatically find the smartest routes for your fleet. Our system analyzes traffic, delivery windows, and vehicle capacity to create efficient schedules that save you money on fuel and labor.',
  },
  {
    title: 'Your Business At a Glance.',
    image: {
      src: '/images/home/features/4.webp',
      width: 171,
      height: 120,
    },
    desc: 'Get the answers you need, when you need them. Create dashboards that track your most important metrics—like cost-per-mile, on-time delivery rates, and fleet utilization—in one simple view.',
  },
  {
    title: 'Connects With the Tools You Already Use.',
    image: {
      src: '/images/home/features/5.webp',
      width: 195,
      height: 74.6,
    },
    desc: 'Fleetbase works seamlessly with your existing accounting, ERP, and customer management software. Eliminate double-entry and ensure your data is always in sync across your entire business.',
  },
  {
    title: 'Handle Any Job, No Matter How Complex.',
    image: {
      src: '/images/home/features/6.webp',
      width: 148,
      height: 124,
    },
    desc: 'Easily manage specialized orders with unique requirements. Set up custom fields, rules, and workflows to handle any job your customers throw at you, without needing expensive custom development.',
  },
  {
    title: 'Get Paid Faster & Reduce Disputes.',
    image: {
      src: '/images/home/features/7.webp',
      width: 186,
      height: 103,
    },
    desc: 'Go paperless and confirm deliveries instantly. Drivers can capture signatures, photos, and notes on their mobile device, giving you an indisputable record that helps you invoice faster and resolve issues quickly.',
  },
  {
    title: 'Uncover Hidden Profits in Your Operation.',
    image: {
      src: '/images/home/hero.webp',
      width: 186,
      height: 103,
    },
    desc: 'Turn your operational data into a strategic advantage. Analyze performance trends, identify your most profitable routes and customers, and make data-driven decisions to improve your bottom line.',
  },
];

const Features = ({ className }: { className?: string }) => {
  return (
    <section className={cn('py-10 md:py-20', className)}>
      <Carousel>
        <div className="container flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Logistics Software That Adapts to Your Business. Not the Other Way Around.
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-snug">
              Don't get locked into a rigid, one-size-fits-all system. Fleetbase is designed to fit your unique processes. Customize workflows, add new capabilities as you grow, and build the exact system your business needs to thrive.
            </p>
          </div>
          <div className="hidden gap-3 md:flex">
            <CarouselPrevious className="via-muted/20 border-border to-muted/50 relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br from-transparent" />
            <CarouselNext className="via-muted/20 border-border to-muted/50 relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br from-transparent" />
          </div>
        </div>

        <CarouselContent className="mx-auto mt-10 max-w-[3000px] cursor-grab">
          {ITEMS.map((card, idx) => (
            <CarouselItem key={idx} className="min-w-70 basis-[16%] pl-6">
              <div className="flex h-full flex-col">
                <Card className="dark:via-muted/20 dark:to-muted/50 to-background via-card from-card h-43 bg-gradient-to-br dark:from-transparent">
                  <CardContent className="flex h-full items-center justify-center">
                    <Image
                      src={card.image.src}
                      alt={card.title}
                      width={card.image.width}
                      height={card.image.height}
                      className="object-contain invert dark:invert-0"
                    />
                  </CardContent>
                </Card>

                {/* Text block outside of card */}
                <h3 className="text-accent-foreground mt-3 mb-2 text-lg font-bold">
                  {card.title}
                </h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="container mt-10 flex justify-center gap-3 md:hidden">
          <CarouselPrevious className="dark:via-muted/20 border-border dark:to-muted/50 to-background via-card from-card relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br dark:from-transparent" />
          <CarouselNext className="dark:via-muted/20 border-border dark:to-muted/50 to-background via-card from-card relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br dark:from-transparent" />
        </div>
      </Carousel>
    </section>
  );
};

export default Features;
