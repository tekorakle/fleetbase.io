import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Code2, Globe, Zap, BarChart3, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Blog | Fleetbase',
  description:
    'Product updates, engineering deep-dives, logistics industry insights, and open-source news from the Fleetbase team. Stay up to date with the latest from the platform.',
  keywords: ['fleetbase blog', 'logistics technology blog', 'fleet management insights', 'open source logistics news'],
  openGraph: {
    title: 'Blog | Fleetbase',
    description: 'Product updates, engineering deep-dives, and logistics industry insights from Fleetbase.',
  },
};

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Product Updates', value: 'product' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Industry Insights', value: 'industry' },
  { label: 'Open Source', value: 'open-source' },
  { label: 'Customer Stories', value: 'customers' },
];

const featuredPost = {
  category: 'Product Update',
  title: 'Fleetbase 2.0: A rebuilt dispatch engine, smarter route optimization, and a new Extensions marketplace',
  excerpt:
    'After six months of development, Fleetbase 2.0 ships with a completely rebuilt dispatch engine, a new multi-stop route optimization algorithm, and a public Extensions marketplace that lets the community build and share capabilities for the platform.',
  date: 'March 2025',
  readTime: '8 min read',
  icon: Zap,
};

const posts = [
  {
    category: 'Engineering',
    title: 'How we rebuilt the Fleetbase dispatch engine for 10x throughput',
    excerpt: 'A deep dive into the architectural decisions behind the new dispatch engine — from event sourcing to optimistic concurrency and real-time WebSocket delivery.',
    date: 'February 2025',
    readTime: '12 min read',
    icon: Code2,
  },
  {
    category: 'Industry Insights',
    title: 'The true cost of last-mile delivery: what operators get wrong',
    excerpt: 'Most fleet operators focus on fuel costs and driver wages. But the hidden costs — failed deliveries, manual dispatch, and customer support overhead — often dwarf them.',
    date: 'January 2025',
    readTime: '6 min read',
    icon: Truck,
  },
  {
    category: 'Open Source',
    title: 'Building your first Fleetbase extension: a step-by-step guide',
    excerpt: 'The Extensions SDK makes it possible to add new order types, custom UI panels, and third-party integrations to Fleetbase without touching the core codebase.',
    date: 'December 2024',
    readTime: '15 min read',
    icon: BookOpen,
  },
  {
    category: 'Customer Stories',
    title: 'How Nexus Delivery Group reduced logistics costs by 28% in 90 days',
    excerpt: 'Elena V., CEO of Nexus Delivery Group, shares how switching to Fleetbase transformed their operations — and why owning their own logistics stack changed everything.',
    date: 'November 2024',
    readTime: '5 min read',
    icon: Globe,
  },
  {
    category: 'Industry Insights',
    title: 'Route optimization in 2025: beyond the travelling salesman problem',
    excerpt: 'Modern route optimization is about more than finding the shortest path. Time windows, driver skills, vehicle capacity, and real-time traffic all matter — and the algorithms have caught up.',
    date: 'October 2024',
    readTime: '9 min read',
    icon: BarChart3,
  },
  {
    category: 'Product Update',
    title: 'Introducing Pallet: open-source warehouse management for Fleetbase',
    excerpt: 'Pallet brings full warehouse management — inventory tracking, pick lists, bin management, and barcode scanning — directly into the Fleetbase platform as a first-party extension.',
    date: 'September 2024',
    readTime: '4 min read',
    icon: Zap,
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
            Blog
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Insights from the{' '}
            <span className="text-primary">Fleetbase team.</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Product updates, engineering deep-dives, logistics industry analysis, and open-source
            news. Written by the people building and using Fleetbase every day.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b py-4">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors hover:border-primary hover:text-primary ${cat.value === 'all' ? 'border-primary bg-primary/10 text-primary' : 'text-muted-foreground'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="rounded-2xl border bg-card p-8 md:p-12">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full border bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Featured — {featuredPost.category}
              </span>
              <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
              <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              {featuredPost.title}
            </h2>
            <p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">
              {featuredPost.excerpt}
            </p>
            <Button asChild>
              <Link href="/blog/fleetbase-2-0">
                Read article <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="border-t py-12 md:py-16">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Latest articles</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.title}
                href="/blog"
                className="group flex flex-col rounded-xl border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="mb-3 flex-1 font-semibold leading-snug group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t py-16 md:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Stay up to date
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Get the latest Fleetbase updates, engineering articles, and logistics insights
                delivered to your inbox. No spam — unsubscribe any time.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full max-w-sm rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 sm:w-auto"
                />
                <Button>
                  Subscribe <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
