import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Navigator | Driver App for Fleet Management',
  description: 'Navigator is the free open-source driver app for Fleetbase FleetOps. Real-time job assignments, turn-by-turn navigation, proof of delivery, and live tracking. Available on Android.',
};

export default function NavigatorPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Navigator</span>
              <span className="px-3">Open-Source Driver App</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              The Driver App Built for{' '}
              <span className="text-gradient">Real-World Operations</span>
            </h1>

            {/* Description */}
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Navigator is Fleetbase&apos;s open-source mobile app for drivers and field agents. Real-time location tracking, turn-by-turn navigation, proof of delivery, and instant dispatch communication — all in one app. Free to use, white-label, or extend.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link
                href="https://play.google.com/store/apps/details?id=io.fleetbase.navigator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Download on Google Play</Button>
              </Link>
              <Link
                href="https://github.com/fleetbase/navigator-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">View on GitHub</Button>
              </Link>
              <Link
                href="https://console.fleetbase.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost">Try the Console</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">99.8%</div>
                <div className="text-sm text-muted-foreground mt-1">App Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">1K+</div>
                <div className="text-sm text-muted-foreground mt-1">Play Store Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">Open</div>
                <div className="text-sm text-muted-foreground mt-1">Source on GitHub</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Languages Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-16 bg-muted/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">See Navigator in Action</h2>
            <p className="text-muted-foreground">Real screenshots from the Navigator driver app</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border shadow-lg">
              <Image
                src="/images/console-screenshots/navigator-orders-calendar.png"
                alt="Navigator app showing scheduled orders calendar view"
                width={400}
                height={700}
                className="w-full object-cover"
                priority
              />
            </div>
            <div className="rounded-2xl overflow-hidden border shadow-lg">
              <Image
                src="/images/console-screenshots/navigator-order-detail.png"
                alt="Navigator app showing order detail with map and route"
                width={400}
                height={700}
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border shadow-lg">
              <Image
                src="/images/console-screenshots/navigator-chat-list.png"
                alt="Navigator app showing real-time chat with operations and customers"
                width={400}
                height={700}
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border shadow-lg">
              <Image
                src="/images/console-screenshots/navigator-tracking-dashboard.png"
                alt="Navigator app showing real-time location tracking dashboard"
                width={400}
                height={700}
                className="w-full object-cover"
              />
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Available now on{' '}
            <Link
              href="https://play.google.com/store/apps/details?id=io.fleetbase.navigator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Google Play
            </Link>{' '}
            · Source code on{' '}
            <Link
              href="https://github.com/fleetbase/navigator-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              GitHub
            </Link>
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Driver Experience Redefined</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Intuitive tools designed for drivers, built for operations teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Smart Navigation</h3>
              <p className="text-muted-foreground mb-4">
                Turn-by-turn GPS directions with real-time traffic, automatic rerouting, and multi-stop route optimisation.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Offline map support</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Voice-guided directions</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Predictive ETAs</span></li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">Proof of Delivery</h3>
              <p className="text-muted-foreground mb-4">
                Capture photos, QR codes, and digital signatures instantly. Full compliance with delivery requirements.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Digital signatures</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>QR code scanning</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Timestamped records</span></li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Instant Communication</h3>
              <p className="text-muted-foreground mb-4">
                Real-time chat with dispatch, customers, and team members. Stay connected without leaving the app.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>In-app messaging</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Push notifications</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Multi-participant chat</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Driver Toolkit</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything drivers need to succeed, built into one powerful open-source app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📍', title: 'Live Location Tracking', desc: 'Real-time GPS tracking visible to dispatch and customers for complete transparency.' },
              { icon: '📋', title: 'Order Management', desc: 'Complete order details, special instructions, and delivery requirements at a glance.' },
              { icon: '⏱️', title: 'Time Tracking', desc: 'Automatic arrival and departure timestamps for accurate service level reporting.' },
              { icon: '💳', title: 'Payment Processing', desc: 'Accept cash, card, and digital payments directly from the app with secure processing.' },
              { icon: '📊', title: 'Performance Analytics', desc: 'Track personal stats, earnings, and performance metrics in real-time.' },
              { icon: '🔌', title: 'Offline Capability', desc: 'Full functionality even without internet — syncs automatically when reconnected.' },
            ].map((f) => (
              <div key={f.title} className="bg-card border rounded-lg p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">⚙️</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fully Open Source</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Navigator is open source under AGPL-3.0. Use it as-is, white-label it as your own brand, or extend it with custom workflows. The full source code is available on GitHub. A commercial licence is available if you need to keep your modifications proprietary.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="https://github.com/fleetbase/navigator-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">View Source on GitHub</Button>
              </Link>
              <Link href="/developers/api">
                <Button size="lg" variant="outline">API Documentation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Navigator</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Available on Android now. iOS and PWA versions coming soon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card border rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Android</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Available now on Google Play. Free to download and use with your Fleetbase account.
              </p>
              <Link
                href="https://play.google.com/store/apps/details?id=io.fleetbase.navigator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">Get on Google Play</Button>
              </Link>
            </div>

            <div className="bg-card border rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Self-Build</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Clone the repo, customise, and build your own branded version using the open-source code.
              </p>
              <Link
                href="https://github.com/fleetbase/navigator-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">Clone on GitHub</Button>
              </Link>
            </div>

            <div className="bg-card border rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Join our Discord community for setup help, feature requests, and direct access to the Fleetbase team.
              </p>
              <Link
                href="https://discord.com/invite/HnTqQ6zAVn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">Join Discord</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Give Your Drivers the Tools They Deserve
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Navigator makes delivery operations faster, easier, and more professional. Free to download, open source, and built for scale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://play.google.com/store/apps/details?id=io.fleetbase.navigator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Download on Google Play</Button>
            </Link>
            <Link
              href="https://cal.com/shivthakker/enquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">Book a Demo</Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Free to download · Open source · No credit card required
          </p>
        </div>
      </section>
    </div>
  );
}
