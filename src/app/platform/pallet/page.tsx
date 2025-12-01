import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Testimonials from '@/components/sections/testimonials';

export default function PalletPage() {
  return (
    <div className="flex flex-col">
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Pallet</span>
              <span className="px-3">Warehouse Management</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Optimize Your Warehouse with <span className="text-gradient">Intelligent Pallet Management</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Pallet is your comprehensive warehouse management system for inventory tracking, pallet management, and shipment coordination. Reduce errors, increase throughput, and gain complete visibility.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/pricing"><Button size="lg">Start Free Trial</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline">Request Demo</Button></Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full">
              <div className="text-center"><div className="text-3xl font-bold text-gradient">50K+</div><div className="text-sm text-muted-foreground mt-1">Warehouses</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-gradient">500M+</div><div className="text-sm text-muted-foreground mt-1">Items Tracked</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-gradient">99.7%</div><div className="text-sm text-muted-foreground mt-1">Accuracy</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-gradient">40%</div><div className="text-sm text-muted-foreground mt-1">Faster Processing</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Warehouse Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Complete control over inventory, pallets, and shipments from receiving to dispatch.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
              <p className="text-muted-foreground mb-4">Real-time inventory tracking with automatic stock level alerts and reorder points.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Barcode scanning</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Stock forecasting</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Multi-warehouse sync</span></li>
              </ul>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-semibold mb-2">Pallet Tracking</h3>
              <p className="text-muted-foreground mb-4">Track pallets from creation through delivery with complete chain of custody.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>RFID integration</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Route optimization</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Damage tracking</span></li>
              </ul>
            </div>
            <div className="bg-card border rounded-lg p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Analytics & Reporting</h3>
              <p className="text-muted-foreground mb-4">Comprehensive warehouse metrics and performance dashboards.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>KPI dashboards</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Throughput analysis</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span>Cost optimization</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Warehouse Operations</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Reduce costs, improve accuracy, and increase efficiency with intelligent warehouse management.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing"><Button size="lg">Start Free Trial</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline">Schedule Demo</Button></Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
