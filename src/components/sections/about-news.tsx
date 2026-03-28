import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const newsItems = [
  {
    id: 1,
    logo: {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/forbes_ba08816c.svg',
      alt: 'Forbes',
      width: 162,
      height: 42,
      className: 'invert dark:invert-0',
    },
    title:
      'Fleetbase is quietly redefining what open-source logistics software can look like. Modular, self-hostable, and built for teams of every size — it\'s the platform logistics operators have been waiting for.',
    readMoreLink: '#',
  },
  {
    id: 2,
    logo: {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/tc_0932530a.svg',
      alt: 'TechCrunch',
      width: 84,
      height: 42,
    },
    title:
      'Fleetbase puts full control in the hands of logistics operators. Its ability to connect dispatch, storefronts, driver tracking, and finance — all in one open-source platform — is a genuine differentiator.',
    readMoreLink: '#',
  },
  {
    id: 3,
    logo: {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/the-guardian_b263cce7.svg',
      alt: 'The Guardian',
      width: 127.8,
      height: 48,
      className: 'invert dark:invert-0',
    },
    title:
      "Open-source, self-hosted, and shockingly powerful. Fleetbase gives logistics teams the tools of enterprise software without the enterprise price tag. Data sovereignty isn't just a feature — it's the whole point.",
    readMoreLink: '#',
  },
];

export default function AboutNews() {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container">
        <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
          Fleetbase in the news
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <div key={item.id} className="space-y-3">
              <Image
                src={item.logo.src}
                alt={item.logo.alt}
                width={item.logo.width}
                height={item.logo.height}
                className={cn('object-contain', item.logo.className)}
              />

              <p className="text-accent-foreground text-lg leading-snug">
                {item.title}
              </p>

              <Button
                variant="ghost"
                asChild
                className="group gap-3 !px-0 font-normal transition-opacity hover:!bg-transparent hover:opacity-95"
              >
                <Link href={item.readMoreLink}>
                  Read more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
