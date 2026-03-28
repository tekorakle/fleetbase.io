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
  { title: 'Live Dispatch Board', image: { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/fleetbase-order-board_603f1205.webp', width: 280, height: 180 }, desc: 'Assign and manage orders in real time with drag-and-drop dispatch.' },
  { title: 'Live Fleet Map', image: { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/fleetbase-live-fleet-map_45501733.webp', width: 280, height: 180 }, desc: 'Live GPS tracking for every driver and vehicle in your fleet.' },
  { title: 'Order Tracking', image: { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/fleetbase-order-tracking_d5bd5a2c.webp', width: 280, height: 180 }, desc: 'Track individual orders in real-time on an interactive map.' },
  { title: 'Order Config', image: { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/fleetbase-order-config_3940d8c3.webp', width: 280, height: 180 }, desc: 'Create custom order configurations with logic, rules, and automation.' },
  { title: 'Service Zones', image: { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/fleetbase-service-zones_278a05bd.webp', width: 280, height: 180 }, desc: 'Define and manage service areas and zones for your fleet.' },
  { title: 'Dispatch Operations', image: { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/fleetbase-dispatch-map-real_d84fe41f.webp', width: 280, height: 180 }, desc: 'Full dispatch control with real-time order and driver management.' },
];

const Features = ({ className }: { className?: string }) => {
  return (
    <section className={cn('py-10 md:py-20', className)}>
      <Carousel>
        <div className="container flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
              Everything your logistics team needs
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-snug">
              From dispatch and driver tracking to storefronts and finance — Fleetbase covers the full operational stack in one modular platform.
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
                      className="object-contain"
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
