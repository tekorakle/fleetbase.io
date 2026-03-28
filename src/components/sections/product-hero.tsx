'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github } from 'lucide-react';

export default function ProductHero() {
  return (
    <section className="section-padding relative container overflow-hidden">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-center">
        <div className="flex items-center rounded-full border p-1 text-xs">
          <span className="bg-muted rounded-full px-3 py-1">
            What&apos;s New?
          </span>
          <span className="px-3">Introducing Fleetbase v2.0 — Extensions Marketplace</span>
        </div>

        <h1 className="text-foreground text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
          Real-time fleet operations <br className="hidden sm:block" />
          <span className="text-gradient">powered by open source</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl leading-snug md:text-lg lg:text-xl">
          Fleetbase gives you full visibility into your fleet — live driver tracking, automated dispatch, route optimisation, and proof of delivery — all in one self-hostable platform.
        </p>
      </div>

      {/* Hero Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="relative mt-12 md:mt-16"
      >
        <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-chart-1/20 via-chart-2/10 to-chart-3/20 blur-2xl" />
        <Image
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/hero_7dbb1a93.webp"
          alt="Fleetbase FleetOps — live dispatch and fleet management dashboard"
          className="ring-foreground/5 relative w-full rounded-lg shadow-2xl ring-1 md:rounded-xl md:ring-2"
          width={1440}
          height={905}
          priority
        />
      </motion.div>

      {/* CTA Buttons */}
      <div className="mx-auto mt-10 max-w-md space-y-3 md:mt-16">
        <div className="flex gap-4">
          <Button className="flex-1 md:min-w-45" asChild>
            <Link href="https://app.fleetbase.io">
              Start for free
              <ArrowRight className="size-4 ml-2" />
            </Link>
          </Button>
          <Button className="flex-1 md:min-w-45" variant="outline" asChild>
            <Link href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
              <Github className="size-4 mr-2" />
              View on GitHub
            </Link>
          </Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          1,200+ GitHub stars · AGPL-3.0 open source · 500+ active deployments
        </div>
      </div>
    </section>
  );
}
