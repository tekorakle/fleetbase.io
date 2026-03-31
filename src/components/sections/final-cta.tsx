'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-16 text-center md:px-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
              Get Started Today
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
              Ready to Take Control of{' '}
              <span className="text-gradient">Your Logistics?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join hundreds of companies running smarter, faster, and more cost-effective operations on Fleetbase. 7-day free trial. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/signup">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/contact">
                  <Calendar className="h-4 w-4" /> Book a Demo
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required &nbsp;·&nbsp; Full platform access &nbsp;·&nbsp; Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
