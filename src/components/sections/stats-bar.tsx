'use client';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { NumberTicker } from '@/components/magicui/number-ticker';

const stats = [
  { value: 10, suffix: 'M+', label: 'Orders Processed' },
  { value: 500, suffix: '+', label: 'Companies Worldwide' },
  { value: 99.9, suffix: '%', label: 'Platform Uptime', decimal: true },
  { value: 30, suffix: '%', label: 'Average Cost Reduction' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="border-y bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 divide-x divide-y md:grid-cols-4 md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 px-6 py-10 text-center"
            >
              <div className="text-4xl font-bold tracking-tight md:text-5xl">
                {isInView ? (
                  <>
                    <NumberTicker
                      value={stat.value}
                      decimalPlaces={stat.decimal ? 1 : 0}
                    />
                    <span>{stat.suffix}</span>
                  </>
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
