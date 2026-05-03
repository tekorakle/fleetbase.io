'use client';

import {
  ArrowRight,
  Bell,
  Camera,
  CheckCircle2,
  Code2,
  Globe,
  Map,
  MessageSquare,
  Navigation,
  Package,
  PenLine,
  QrCode,
  Radio,
  RefreshCcw,
  Smartphone,
  Star,
  Truck,
  Wifi,
  WifiOff,
  Zap,
} from 'lucide-react';
import { FaApple, FaGithub, FaGooglePlay } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

function PhoneFrame({ alt, className = '' }: { alt: string; className?: string }) {
  return (
    <div
      className={`relative mx-auto flex flex-col overflow-hidden rounded-[2.5rem] border-2 border-border bg-background shadow-2xl ${className}`}
      style={{ width: 220, height: 440 }}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-border/60" />
      <div className="relative flex-1 overflow-hidden">
        <Image
          src="/images/placeholder.png"
          alt={alt}
          fill
          className="object-cover"
          sizes="220px"
        />
      </div>
    </div>
  );
}

export default function NavigatorPageContent() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="container relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left — copy */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center rounded-full border p-1 text-xs w-fit">
                <span className="rounded-full bg-muted px-3 py-1">Navigator</span>
                <span className="px-3">Open-Source Driver App</span>
              </div>

              <h1 className="text-4xxl leading-none tracking-tight text-balance">
                The Driver App Built for{' '}
                <span className="text-gradient">Real-World Logistics</span>
              </h1>

              <p className="text-foreground/90 leading-snug md:text-lg dark:text-foreground/95 max-w-xl">
                Navigator is Fleetbase&apos;s open-source mobile app for drivers and field agents.
                Jobs auto-dispatch from Fleet-Ops, routes are calculated instantly, and proof of
                delivery is captured on the spot — with or without a signal.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://play.google.com/store/apps/details?id=io.fleetbase.navigator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    <FaGooglePlay className="mr-2 h-4 w-4" />
                    Google Play
                  </Button>
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/fleetbase-navigator/id1554208255"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline">
                    <FaApple className="mr-2 h-4 w-4" />
                    App Store
                  </Button>
                </Link>
                <Link
                  href="https://github.com/fleetbase/navigator-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="ghost">
                    <FaGithub className="mr-2 h-4 w-4" />
                    View Source
                  </Button>
                </Link>
              </div>

              {/* Stat strip */}
              <div className="flex flex-wrap gap-8 pt-2">
                {[
                  { value: 'AGPL-3.0', label: 'Open source licence' },
                  { value: 'iOS + Android', label: 'Both platforms' },
                  { value: 'Offline-first', label: 'Works without signal' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-gradient">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — phone gallery */}
            <div className="flex items-end justify-center gap-4">
              <PhoneFrame alt="Navigator app — job list" className="mb-8 opacity-70 scale-90" />
              <PhoneFrame alt="Navigator app — active route" />
              <PhoneFrame alt="Navigator app — proof of delivery" className="mb-8 opacity-70 scale-90" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Three pillars ────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Navigation,
                title: 'Smart Navigation',
                body: 'Turn-by-turn GPS with offline maps, live traffic rerouting, and multi-stop route optimisation so drivers always take the fastest path.',
              },
              {
                icon: Camera,
                title: 'Proof of Delivery',
                body: 'Capture photos, QR codes, and digital signatures at the doorstep. Every delivery is timestamped and synced to the dispatch console instantly.',
              },
              {
                icon: MessageSquare,
                title: 'In-App Comms',
                body: 'Real-time chat with dispatch, customers, and teammates — no switching apps, no personal numbers shared, no dead air.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border bg-card p-8">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature: Live Dispatch ───────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Radio className="mr-2 h-3 w-3 text-primary" />
                Live Job Dispatch
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Orders from Fleet-Ops land in the app the moment they&apos;re assigned
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dispatchers assign jobs in the Fleet-Ops console and Navigator alerts the driver
                immediately via push notification. No phone calls, no WhatsApp chains — the full
                order brief is already on the driver&apos;s screen.
              </p>
              <ul className="space-y-3">
                {[
                  'Push-notification on assignment with full order details',
                  'Accept or reject jobs directly from the lock screen',
                  'Priority and scheduling visible at a glance',
                  'Automatic status updates back to Fleet-Ops on every action',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center gap-6">
              <PhoneFrame alt="Navigator — incoming job notification" className="mb-6 opacity-80 scale-95" />
              <PhoneFrame alt="Navigator — job detail view" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature: Navigation ─────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex justify-center gap-6 order-2 lg:order-1">
              <PhoneFrame alt="Navigator — map view with route" />
              <PhoneFrame alt="Navigator — offline map indicator" className="mt-6 opacity-80 scale-95" />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Map className="mr-2 h-3 w-3 text-primary" />
                Turn-by-Turn Navigation
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Gets drivers there — with or without a signal
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Navigator downloads map tiles for the route automatically so drivers never get
                stuck when coverage drops in a warehouse district, basement car park, or rural
                area. When connectivity returns, position and status sync instantly.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: WifiOff, label: 'Offline maps', desc: 'Pre-cached route tiles' },
                  { icon: Zap, label: 'Live rerouting', desc: 'Real-time traffic data' },
                  { icon: Globe, label: 'Multi-stop routes', desc: 'Optimised stop order' },
                  { icon: RefreshCcw, label: 'ETA updates', desc: 'Pushed to dispatch' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="rounded-lg border bg-card p-4">
                    <Icon className="mb-2 h-4 w-4 text-primary" />
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature: Proof of Delivery ──────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Camera className="mr-2 h-3 w-3 text-primary" />
                Proof of Delivery
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Every delivery is verified, timestamped, and dispute-proof
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Configure exactly what proof each order type requires. Photo of the parcel,
                recipient signature, QR scan of a label — or all three. Evidence is attached to
                the order record in Fleet-Ops and available for download immediately.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Camera, label: 'Photo capture' },
                  { icon: PenLine, label: 'Digital signature' },
                  { icon: QrCode, label: 'QR code scan' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 rounded-lg border bg-card p-4 text-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-xs font-medium">{label}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {[
                  'GPS-stamped coordinates at time of capture',
                  'Stored on the order record — no manual upload',
                  'Per-order-type configuration in Fleet-Ops',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center gap-6">
              <PhoneFrame alt="Navigator — proof of delivery capture" />
              <PhoneFrame alt="Navigator — signature screen" className="mt-6 opacity-80 scale-95" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature: Chat ───────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex justify-center gap-6 order-2 lg:order-1">
              <PhoneFrame alt="Navigator — channel list" className="mb-6 opacity-80 scale-95" />
              <PhoneFrame alt="Navigator — chat thread" />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <MessageSquare className="mr-2 h-3 w-3 text-primary" />
                In-App Communication
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Dispatch and drivers stay in sync without leaving the app
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Navigator includes built-in real-time messaging so drivers can flag issues,
                request clarification, or confirm delivery details without switching to WhatsApp
                or SMS. Threads are attached to the order so context is never lost.
              </p>
              <ul className="space-y-3">
                {[
                  'Direct messages between driver and dispatcher',
                  'Order-scoped threads keep conversations in context',
                  'Push notifications for new messages even when app is backgrounded',
                  'Customer-facing channels for ETA updates and access instructions',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full capability grid ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Complete driver toolkit</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Every feature a driver needs to execute deliveries professionally — built into one
              open-source app that you fully control.
            </p>
          </div>

          <div
            className="rounded-xl overflow-hidden border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}
          >
            {[
              { icon: Radio, label: 'Live Location Tracking', desc: 'Real-time GPS breadcrumbs visible to dispatch and customers throughout the job.' },
              { icon: Package, label: 'Order Management', desc: 'Full order details, special instructions, and multi-waypoint manifests at a glance.' },
              { icon: Bell, label: 'Push Notifications', desc: 'Instant alerts for new assignments, status changes, and customer messages.' },
              { icon: WifiOff, label: 'Offline-First', desc: 'All core features work without internet — data syncs the moment connectivity returns.' },
              { icon: Star, label: 'Performance Stats', desc: 'Drivers can track their own delivery count, ratings, and on-time performance.' },
              { icon: Truck, label: 'Multi-Vehicle Support', desc: 'Drivers can switch between assigned vehicles; capacity and type carried on the job.' },
              { icon: Smartphone, label: 'iOS & Android', desc: 'One codebase, two platforms — same feature set on both app stores.' },
              { icon: Wifi, label: 'Real-Time Sync', desc: 'Every status tap reflects in Fleet-Ops immediately — zero polling delays.' },
              { icon: Code2, label: 'Extensible via SDK', desc: 'Add custom screens, scan-and-confirm flows, or third-party integrations using the extension SDK.' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col gap-3 bg-background p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── White-label ──────────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Globe className="mr-2 h-3 w-3 text-primary" />
                White-Label & Custom Builds
              </div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Ship it under your own brand — not ours
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Navigator is AGPL-3.0 open source. Fork the repo, swap the logo, set your
                primary colour, point it at your Fleetbase instance, and submit to the app stores
                as your own product. No royalties, no white-label fees — or purchase a commercial
                licence if you need to keep your modifications proprietary.
              </p>
              <ul className="space-y-3">
                {[
                  'Replace name, logo, and colours in a single config file',
                  'Point at any self-hosted or cloud Fleetbase instance',
                  'Extend with custom screens via the extension SDK',
                  'Commercial licence available for proprietary forks',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="https://github.com/fleetbase/navigator-app" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <FaGithub className="mr-2 h-4 w-4" />
                    Fork on GitHub
                  </Button>
                </Link>
                <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost">
                    Commercial licence <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden border">
                <Image
                  src="/images/placeholder.png"
                  alt="White-label Navigator configuration — custom branding"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fleet-Ops integration ────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              One system, from dispatch to doorstep
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Navigator and Fleet-Ops are designed together. Every driver action updates the
              console in real time — no webhooks to configure, no middleware to maintain.
            </p>
          </div>

          {/* Flow */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-4xl mx-auto mb-12">
            {[
              { icon: Package, step: '1', label: 'Order created', sub: 'Fleet-Ops console or API' },
              { icon: Radio, step: '2', label: 'Job dispatched', sub: 'Navigator notified instantly' },
              { icon: Navigation, step: '3', label: 'Driver en route', sub: 'Live map in Fleet-Ops' },
              { icon: Camera, step: '4', label: 'POD captured', sub: 'Attached to order record' },
            ].map(({ icon: Icon, step, label, sub }, i) => (
              <div key={label} className="relative flex flex-col items-center text-center gap-3 p-6 rounded-xl border bg-card">
                {i < 3 && (
                  <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground hidden md:block" />
                )}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {step}
                </div>
                <Icon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-xl border">
            <Image
              src="/images/placeholder.png"
              alt="Fleet-Ops console showing live driver location from Navigator"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </section>

      {/* ── Download ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Get Navigator</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Free on both platforms. Self-host the backend or use Fleetbase Cloud.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
            <div className="flex flex-col gap-4 rounded-xl border bg-card p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FaGooglePlay className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Google Play</h3>
              <p className="text-sm text-muted-foreground">
                Download the official Navigator app and connect it to any Fleetbase instance.
              </p>
              <Link
                href="https://play.google.com/store/apps/details?id=io.fleetbase.navigator"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <FaGooglePlay className="h-3.5 w-3.5" />
                  Google Play
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border bg-card p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FaApple className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">App Store</h3>
              <p className="text-sm text-muted-foreground">
                iPhone and iPad — same feature set, native iOS build.
              </p>
              <Link
                href="https://apps.apple.com/us/app/fleetbase-navigator/id1554208255"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <FaApple className="h-3.5 w-3.5" />
                  App Store
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border bg-card p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <FaGithub className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Build Your Own</h3>
              <p className="text-sm text-muted-foreground">
                Fork the repo, white-label, extend, and publish under your own brand.
              </p>
              <Link
                href="https://github.com/fleetbase/navigator-app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <FaGithub className="h-3.5 w-3.5" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: 'Does Navigator work without an internet connection?',
                  a: 'Yes. Navigator is offline-first. Map tiles for the active route are pre-cached, and drivers can capture proof of delivery, update job statuses, and send messages. Everything syncs to Fleet-Ops the moment connectivity is restored.',
                },
                {
                  q: 'Is Navigator available on iOS as well as Android?',
                  a: 'Yes — Navigator is available on both the Google Play Store and the Apple App Store. Both apps share the same feature set and are maintained in the same open-source repository.',
                },
                {
                  q: 'Can I white-label Navigator as my own app?',
                  a: 'Absolutely. Navigator is AGPL-3.0, so you can fork the repo, replace the name, logo, and colours, and publish it to the app stores as your own product at no cost. If you need to keep your modifications private, a commercial licence is available — contact us to discuss.',
                },
                {
                  q: 'Does Navigator require Fleetbase Cloud, or can I self-host?',
                  a: 'Navigator connects to any Fleetbase instance — cloud or self-hosted. Set your instance URL in the app during login. There is no lock-in to Fleetbase-managed infrastructure.',
                },
                {
                  q: 'What proof-of-delivery options does Navigator support?',
                  a: 'Navigator supports photo capture, freehand digital signature, and QR code scanning. You configure which proof types are required per order type in the Fleet-Ops console. All evidence is GPS-stamped and attached to the order record.',
                },
                {
                  q: 'How does Navigator communicate with Fleet-Ops?',
                  a: 'Navigator uses the Fleetbase REST API and a persistent WebSocket connection for real-time events. Driver location is broadcast every few seconds while a job is active. No additional configuration or third-party services are required.',
                },
                {
                  q: 'Can drivers see and manage multiple stops on a single job?',
                  a: 'Yes. Navigator displays the full waypoint manifest for multi-stop orders and guides drivers through each stop in sequence. Completion of each waypoint updates Fleet-Ops in real time.',
                },
              ].map(({ q, a }, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border bg-card px-6"
                >
                  <AccordionTrigger className="text-left font-medium">{q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="text-4xl font-bold tracking-tight text-balance">
                Give your drivers the tools they deserve
              </h2>
              <p className="max-w-xl text-muted-foreground">
                Navigator is free, open source, and ready to deploy today. Connect it to your
                Fleetbase instance in minutes and put professional-grade tools in every
                driver&apos;s pocket.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="https://play.google.com/store/apps/details?id=io.fleetbase.navigator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    <FaGooglePlay className="mr-2 h-4 w-4" />
                    Google Play
                  </Button>
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/fleetbase-navigator/id1554208255"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline">
                    <FaApple className="mr-2 h-4 w-4" />
                    App Store
                  </Button>
                </Link>
                <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="ghost">
                    Book a demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground">
                Free to use · AGPL-3.0 open source · iOS &amp; Android
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
