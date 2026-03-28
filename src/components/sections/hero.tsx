import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, Star, Truck, Package, Globe } from 'lucide-react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Hero() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="relative container">
        <div className="flex max-w-4xl flex-col items-start gap-6">
          {/* Announcement badge */}
          <Link href="/changelog" className="group">
            <Badge
              variant="outline"
              className="gap-2 rounded-full border-chart-1/30 bg-chart-1/10 px-4 py-1.5 text-chart-1 transition-all hover:border-chart-1/50 hover:bg-chart-1/20"
            >
              <span className="size-1.5 rounded-full bg-chart-1 animate-pulse" />
              <span className="text-xs font-medium">v2.0 — Extensions Marketplace now live</span>
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Badge>
          </Link>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-balance md:text-6xl lg:text-7xl">
            The{' '}
            <span className="text-gradient">open-source</span>{' '}
            logistics &amp; operations OS
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
            Fleetbase gives every logistics team — from solo couriers to enterprise fleets — a modular, self-hostable platform to manage dispatch, drivers, storefronts, and supply chains.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild className="gap-2 px-6">
              <Link href="https://app.fleetbase.io">
                Start for free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 px-6">
              <Link href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                Star on GitHub
              </Link>
            </Button>
          </div>

          {/* Social proof stats */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Star className="size-4 text-chart-1 fill-chart-1" />
              <span><strong className="text-foreground">1,200+</strong> GitHub stars</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="size-4 text-chart-1" />
              <span><strong className="text-foreground">500+</strong> active deployments</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Package className="size-4 text-chart-1" />
              <span><strong className="text-foreground">30+</strong> countries</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="size-4 text-chart-1" />
              <span>AGPL-3.0 open source</span>
            </div>
          </div>
        </div>

        {/* Hero Screenshot */}
        <div className="relative mt-12 md:mt-20">
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-chart-1/20 via-chart-2/10 to-chart-3/20 blur-2xl" />
          <Image
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169626730/J4w6d7p35FS5oTJJ4JyigN/fleetbase-dispatch-map-real_d84fe41f.webp"
            alt="Fleetbase dashboard — fleet management and dispatch operations"
            className="ring-foreground/5 relative w-full rounded-lg shadow-2xl ring-1 md:rounded-xl md:ring-2"
            width={1440}
            height={905}
            priority
          />
        </div>
        <GradientSVG className="absolute top-0 right-0 -z-10 origin-right scale-30 md:scale-50 lg:scale-100 opacity-60" />
      </div>
    </section>
  );
}

// SVG Components
function GradientSVG({ ...props }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1342}
      height={1199}
      fill="none"
      {...props}
    >
      <path
        fill="#D9D9D9"
        d="M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
      />
      <path
        fill="url(#a)"
        d="M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
      />
      <path
        stroke="url(#b)"
        strokeWidth={0.631}
        d="M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"
      />
      <path
        fill="url(#c)"
        d="m875.715 420.318 203.405-357.96c50.52-10.487-50.57 96.246 0 186.332 80.45 143.304 298.36 312.903 256.86 419.243-67.58 173.19-306.7 49.523-396.529 0-71.863-39.618-72.434-181.585-63.736-247.615Z"
      />
      <path
        fill="url(#d)"
        d="m46.623 746.37 908.336-619.388 130.381-66.714-46.89 196.709-156.685 413.622c-27.829 50.066-111.545 120.16-223.775 0-98.592-105.557-466.882-3.975-611.367 75.771L.814 777.607c10.115-9.59 25.82-20.205 45.809-31.237Z"
      />
      <g filter="url(#e)">
        <path
          fill="url(#f)"
          d="m883.093 595.649 164.727-565.43 4.66 326.52-169.387 238.91Z"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1={1027.3}
          x2={1027.73}
          y1={587.333}
          y2={1198.11}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9D83E7" />
          <stop offset={0.516} stopColor="#D445E7" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={1027.3}
          x2={1027.3}
          y1={587.333}
          y2={1197.77}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#10CBF4" />
          <stop offset={1} stopColor="#10CBF4" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={871.897}
          x2={1188.44}
          y1={575.509}
          y2={575.628}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9259ED" />
          <stop offset={0.514} stopColor="#CF54EE" />
          <stop offset={1} stopColor="#FB8684" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={676.669}
          x2={677.051}
          y1={60.268}
          y2={757.516}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B956EE" />
          <stop offset={1} stopColor="#9672FF" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={1020.81}
          x2={814.267}
          y1={202.771}
          y2={477.618}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB07FF" />
          <stop offset={0.505} stopColor="#FF6847" />
          <stop offset={1} stopColor="#FF474A" />
        </linearGradient>
        <filter
          id="e"
          width={228.968}
          height={625.009}
          x={853.303}
          y={0.429}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_401_39842"
            stdDeviation={14.895}
          />
        </filter>
      </defs>
    </svg>
  );
}
