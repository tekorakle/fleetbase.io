import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'Pallet | Open-Source Warehouse Management System (WMS)',
  description: 'Pallet is an open-source WMS for inventory management, pick-and-pack, and warehouse operations. Fully integrated with FleetOps for end-to-end logistics.',
  keywords: ['warehouse management system', 'open source WMS', 'inventory management software', 'pick and pack software', 'warehouse logistics software'],
  openGraph: {
    title: 'Pallet | Open-Source Warehouse Management System (WMS)',
    description: 'Pallet is an open-source WMS for inventory management, pick-and-pack, and warehouse operations. Fully integrated with FleetOps for end-to-end logistics.',
  },
};

export default function PalletPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="section-padding relative">
                <div className="relative container">
                    <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="flex items-center rounded-full border p-1 text-xs">
                            <span className="bg-muted rounded-full px-3 py-1">
                                Pallet
                            </span>
                            <span className="px-3">Warehouse & Inventory Management</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
                            Enterprise WMS{' '}
                            <span className="text-gradient">Without the Enterprise Price Tag</span>
                        </h1>

                        {/* Description */}
                        <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
                            The open-source warehouse management system that gives you complete control, from receiving to delivery. Stop paying $100K+ for rigid software and run your warehouse your way.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 justify-center mt-4">
                            <Link href="/pricing">
                                <Button size="lg">Start 7-Day Free Trial</Button>
                            </Link>
                            <Link href="https://cal.com/shivthakker/enquiry">
                                <Button size="lg" variant="outline">Book a Demo</Button>
                            </Link>
                            <Link href="https://github.com/fleetbase/pallet" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="ghost">Explore the Code</Button>
                            </Link>
                        </div>

                        {/* Hero Screenshot */}
                        <div className="w-full mt-12 rounded-lg border overflow-hidden shadow-2xl relative aspect-video">
                            <Image
                                src="/images/console-screenshots/storefront-products-grid.webp"
                                alt="Fleetbase Pallet WMS platform showing inventory management, warehouse locations, and stock control dashboard"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 80vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-24 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Is Your Warehouse Holding You Back?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Traditional warehouse management is broken. It's expensive, inflexible, and disconnected from the rest of your supply chain.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card border rounded-lg p-8">
                            <div className="relative w-full h-48 rounded-lg mb-6 overflow-hidden border">
                                <Image src="/images/console-screenshots/fleetops-orders-table-detail.webp" alt="Order management showing cost of legacy WMS" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Prohibitive Licensing Fees</h3>
                            <p className="text-muted-foreground">
                                Commercial WMS solutions cost $50K to $500K+ in upfront licensing, plus ongoing maintenance fees. This locks out growing businesses and drains enterprise budgets.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-8">
                            <div className="relative w-full h-48 rounded-lg mb-6 overflow-hidden border">
                                <Image src="/images/console-screenshots/fleetops-vendors.webp" alt="FleetOps vendor integration showing disconnected system problem" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">No Integration with Delivery</h3>
                            <p className="text-muted-foreground">
                                Your WMS and TMS don't talk to each other, creating manual work, data entry errors, and a blind spot between your warehouse and your customer's doorstep.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-8">
                            <div className="relative w-full h-48 rounded-lg mb-6 overflow-hidden border">
                                <Image src="/images/console-screenshots/fleetops-order-config-activity-flow.webp" alt="Fleetbase configurable activity flow for custom workflows" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Forced, Rigid Workflows</h3>
                            <p className="text-muted-foreground">
                                Your business is unique, but your software forces you into predefined processes. You can't adapt to new challenges or customize workflows without expensive consultants.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Complete Control, From Receiving to Delivery
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Pallet is the modern, open-source WMS that puts you in control. It's affordable, fully integrated, and built for enterprise-scale operations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card border rounded-lg p-8">
                            <div className="relative w-full h-48 rounded-lg mb-6 overflow-hidden border">
                                <Image src="/images/console-screenshots/extensions-marketplace.webp" alt="Fleetbase extensions marketplace showing open-source modules" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Keep Your Capital</h3>
                            <p className="text-muted-foreground">
                                Stop paying for expensive licenses. Pallet is open-source and usage-based, so you only pay for what you use. Reinvest your capital into growth, not software.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-8">
                            <div className="relative w-full h-48 rounded-lg mb-6 overflow-hidden border">
                                <Image src="/images/console-screenshots/fleetops-kanban-board-detail.webp" alt="FleetOps kanban board showing end-to-end order visibility" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Seamless Order-to-Delivery</h3>
                            <p className="text-muted-foreground">
                                With native FleetOps integration, your warehouse and delivery operations are one. Orders flow seamlessly from pick list to proof of delivery, giving you end-to-end visibility.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-8">
                            <div className="relative w-full h-48 rounded-lg mb-6 overflow-hidden border">
                                <Image src="/images/console-screenshots/fleetops-live-map-singapore.png" alt="Fleetbase enterprise-scale live map and fleet operations" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Scale Without Limits</h3>
                            <p className="text-muted-foreground">
                                Get enterprise features like wave picking, cycle counting, and multi-warehouse support out of the box. Pallet is built to handle your growth, from your first order to millions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section 1: Multi-Warehouse Management */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                                <span className="text-primary">●</span>
                                <span className="ml-2">Multi-Warehouse Management</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Manage Your Entire Warehouse Network
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Run all your warehouses from a single platform. Transfer stock, manage location-specific inventory, and get a unified view of your entire operation.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🏢</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Unlimited Warehouse Locations</h4>
                                        <p className="text-sm text-muted-foreground">Scale to as many facilities as you need. Each warehouse has its own inventory, users, and configuration while maintaining centralized control.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">↔️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Inter-Warehouse Stock Transfers</h4>
                                        <p className="text-sm text-muted-foreground">Move inventory between locations seamlessly. Track transfer status, maintain audit trails, and automatically update stock levels.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🏷️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Multi-Client Support for 3PLs</h4>
                                        <p className="text-sm text-muted-foreground">Manage inventory for multiple clients in the same warehouse. Separate stock, billing, and reporting by client with complete data isolation.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Hierarchical Location Management</h4>
                                        <p className="text-sm text-muted-foreground">Organize your warehouse with Zones, Aisles, Racks, and Bins. Track inventory down to the exact bin location for maximum accuracy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[600px] rounded-lg border overflow-hidden shadow-lg relative">
                            <Image
                                src="/images/console-screenshots/storefront-products-grid.webp"
                                alt="Fleetbase Pallet WMS multi-warehouse dashboard showing inventory levels, warehouse locations, and stock transfer status"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section 2: Advanced Picking Strategies */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="w-full h-[600px] rounded-lg border overflow-hidden shadow-lg relative">
                            <Image
                                src="/images/console-screenshots/fleetops-orders-table-detail.webp"
                                alt="Fleetbase Pallet WMS wave picking dashboard showing pick list generation, batch creation, and picker assignment"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                                <span className="text-primary">●</span>
                                <span className="ml-2">Advanced Picking Strategies</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Pick Faster, Ship More, Reduce Errors
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Choose the right picking strategy for your operation. From wave picking for high-volume fulfillment to discrete picking for accuracy-critical orders.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🌊</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Wave Picking</h4>
                                        <p className="text-sm text-muted-foreground">Batch process high-volume orders in waves. Group orders by zone, product type, or time window to maximize picker efficiency.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🗺️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Zone Picking</h4>
                                        <p className="text-sm text-muted-foreground">Assign pickers to specific warehouse zones. Reduce travel time and increase throughput in large warehouses.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📦</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Batch Picking</h4>
                                        <p className="text-sm text-muted-foreground">Pick multiple orders simultaneously. Walk the warehouse once and fulfill many orders, reducing pick time per order.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Discrete Picking</h4>
                                        <p className="text-sm text-muted-foreground">One order at a time for maximum accuracy. Ideal for high-value items, custom orders, or when precision is critical.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section 3: Inventory Accuracy */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                                <span className="text-primary">●</span>
                                <span className="ml-2">Inventory Accuracy & Control</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Achieve 99.9% Inventory Accuracy
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Maintain perfect inventory records with cycle counting, real-time adjustments, and complete audit trails. Know exactly what you have, where it is, and when it expires.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🔄</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Scheduled & On-Demand Cycle Counts</h4>
                                        <p className="text-sm text-muted-foreground">Automate cycle counting schedules or trigger counts on demand. Count by zone, product, or ABC classification.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📊</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Real-Time Variance Reporting</h4>
                                        <p className="text-sm text-muted-foreground">Identify discrepancies immediately. Track variances by location, product, or user to pinpoint accuracy issues.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">✅</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Automatic Stock Adjustments</h4>
                                        <p className="text-sm text-muted-foreground">Approve and apply adjustments with full audit trail. Track who made changes, when, and why.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Bin-Level Accuracy Tracking</h4>
                                        <p className="text-sm text-muted-foreground">Track inventory down to the exact bin location. Know not just what you have, but exactly where it is.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[600px] rounded-lg border overflow-hidden shadow-lg relative">
                            <Image
                                src="/images/console-screenshots/fleetops-orders-table-detail.webp"
                                alt="Fleetbase Pallet WMS cycle count interface showing inventory variance reports, count assignments, and adjustment workflow"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section 4: Traceability & Compliance */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="w-full h-[600px] rounded-lg border overflow-hidden shadow-lg relative">
                            <Image
                                src="/images/console-screenshots/developers-monitoring-detail.webp"
                                alt="Fleetbase Pallet WMS traceability report showing lot genealogy, serial number tracking, and recall management"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                                <span className="text-primary">●</span>
                                <span className="ml-2">Traceability & Compliance</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Full Traceability From Supplier to Customer
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Track products by lot, serial number, or batch. Meet regulatory requirements for food, pharma, and other compliance-critical industries.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🏷️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Lot Number Tracking & Genealogy</h4>
                                        <p className="text-sm text-muted-foreground">Track products by lot from receiving to shipping. Trace forward and backward through your supply chain for recalls.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🔢</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Unique Serial Number Tracking</h4>
                                        <p className="text-sm text-muted-foreground">Track individual items with unique serial numbers. Perfect for electronics, medical devices, and high-value goods.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📦</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Batch Management</h4>
                                        <p className="text-sm text-muted-foreground">Group products into batches for production tracking. Maintain batch records for quality control and compliance.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📅</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Expiry Date Tracking (FEFO)</h4>
                                        <p className="text-sm text-muted-foreground">First-Expired, First-Out picking logic ensures you ship the oldest stock first. Reduce waste and meet food safety requirements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section 5: Temperature Control */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                                <span className="text-primary">●</span>
                                <span className="ml-2">Temperature Control & Cold Chain</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Maintain Cold Chain Integrity
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Manage temperature-controlled zones for cold, frozen, and ambient storage. Ensure compliance with food safety and pharmaceutical regulations.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">❄️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Temperature-Controlled Zones</h4>
                                        <p className="text-sm text-muted-foreground">Define zones for cold, frozen, and ambient storage. Assign products to appropriate zones based on storage requirements.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🌡️</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Min/Max Temperature Monitoring</h4>
                                        <p className="text-sm text-muted-foreground">Set acceptable temperature ranges for each zone. Get alerts when temperatures fall outside safe limits.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📊</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Temperature Compliance Reporting</h4>
                                        <p className="text-sm text-muted-foreground">Generate compliance reports for audits. Prove you maintained proper storage conditions throughout the supply chain.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📅</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Shelf-Life Management</h4>
                                        <p className="text-sm text-muted-foreground">Track expiry dates and shelf life. FEFO picking logic ensures you ship products before they expire.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[600px] rounded-lg border overflow-hidden shadow-lg relative">
                            <Image
                                src="/images/console-screenshots/storefront-dashboard-detail.webp"
                                alt="Fleetbase Pallet WMS temperature zone management showing warehouse map with cold chain monitoring and alerts"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section 6: Mobile Operations */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="w-full h-[600px] rounded-lg border overflow-hidden shadow-lg relative">
                            <Image
                                src="/images/console-screenshots/fleetops-drivers-create.webp"
                                alt="Fleetbase Pallet WMS mobile interface showing barcode scanning, pick list navigation, and bin location guidance"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                                <span className="text-primary">●</span>
                                <span className="ml-2">Mobile Operations</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Run Your Warehouse From Any Device
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Pallet works on tablets, smartphones, and industrial handhelds. Scan barcodes, pick orders, and update inventory from anywhere in your warehouse.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📱</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Mobile-Friendly Interface</h4>
                                        <p className="text-sm text-muted-foreground">Optimized for tablets and smartphones. Large buttons, clear text, and intuitive navigation for warehouse floor use.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">📷</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Barcode Scanning for All Operations</h4>
                                        <p className="text-sm text-muted-foreground">Scan products, locations, and orders. Use your device camera or connect Bluetooth scanners for faster processing.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">✅</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Scan-to-Verify Functionality</h4>
                                        <p className="text-sm text-muted-foreground">Reduce picking errors with scan verification. Ensure the right product is picked from the right location every time.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <span className="text-2xl">🔄</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Real-Time Data Sync</h4>
                                        <p className="text-sm text-muted-foreground">Updates sync instantly across all devices. Everyone sees the same inventory levels and order status in real-time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Built for Every Industry
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            From e-commerce fulfillment to pharmaceutical distribution, Pallet adapts to your industry's unique requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🛒</div>
                            <h3 className="text-lg font-semibold mb-2">E-commerce Fulfillment</h3>
                            <p className="text-sm text-muted-foreground">
                                High-volume order processing with wave picking, batch fulfillment, and real-time inventory sync to your storefront.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">📦</div>
                            <h3 className="text-lg font-semibold mb-2">3PL Operations</h3>
                            <p className="text-sm text-muted-foreground">
                                Multi-client inventory management, client-specific billing, and complete data isolation for third-party logistics providers.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🍎</div>
                            <h3 className="text-lg font-semibold mb-2">Food & Beverage</h3>
                            <p className="text-sm text-muted-foreground">
                                FEFO picking, lot tracking, expiry date management, and temperature-controlled zones for food safety compliance.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">💊</div>
                            <h3 className="text-lg font-semibold mb-2">Pharmaceuticals</h3>
                            <p className="text-sm text-muted-foreground">
                                Serial number tracking, batch genealogy, cold chain management, and full traceability for regulatory compliance.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🏭</div>
                            <h3 className="text-lg font-semibold mb-2">Manufacturing</h3>
                            <p className="text-sm text-muted-foreground">
                                Raw material tracking, work-in-progress inventory, finished goods management, and production batch tracking.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🏬</div>
                            <h3 className="text-lg font-semibold mb-2">Retail Distribution</h3>
                            <p className="text-sm text-muted-foreground">
                                Multi-store inventory allocation, cross-docking, and store replenishment with automated reorder points.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">❄️</div>
                            <h3 className="text-lg font-semibold mb-2">Cold Chain Logistics</h3>
                            <p className="text-sm text-muted-foreground">
                                Temperature zone management, compliance reporting, and shelf-life tracking for perishable goods.
                            </p>
                        </div>

                        <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <div className="text-4xl mb-4">🏢</div>
                            <h3 className="text-lg font-semibold mb-2">B2B Wholesale</h3>
                            <p className="text-sm text-muted-foreground">
                                Bulk order processing, pallet-level tracking, and customer-specific pricing with integrated invoicing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Seamlessly Integrated with FleetOps
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Pallet and FleetOps work together to give you end-to-end visibility from warehouse to doorstep. Orders flow automatically from pick list to delivery without manual handoffs.
                        </p>
                    </div>

                    <div className="w-full max-w-4xl mx-auto h-[400px] rounded-lg border overflow-hidden shadow-lg relative">
                    <Image
                        src="/images/console-screenshots/fleetops-kanban-board-detail.webp"
                        alt="Fleetbase Pallet WMS order lifecycle showing complete flow from receiving through putaway, picking, packing, dispatch, and delivery"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 80vw"
                    />
                </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>How is Pallet different from a basic inventory system?</AccordionTrigger>
                                <AccordionContent>
                                    Basic inventory systems track what you have and where it is. Pallet is a full Warehouse Management System (WMS) that also manages how you receive, store, pick, pack, and ship products. It includes advanced features like wave picking, cycle counting, lot tracking, multi-warehouse management, and native integration with delivery operations through FleetOps.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>Can Pallet handle multiple warehouses?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Pallet supports unlimited warehouse locations. You can manage inventory across multiple facilities, transfer stock between warehouses, and get a centralized view of your entire network. Each warehouse can have its own users, configurations, and hierarchical location structure (zones, aisles, racks, bins).
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>What picking strategies does Pallet support?</AccordionTrigger>
                                <AccordionContent>
                                    Pallet supports Wave Picking (batch process high-volume orders), Zone Picking (assign pickers to specific areas), Batch Picking (pick multiple orders simultaneously), and Discrete Picking (one order at a time for accuracy). You can choose the strategy that best fits your operation or use different strategies for different order types.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>Does Pallet support barcode scanning?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Pallet's mobile-friendly interface works with device cameras or Bluetooth barcode scanners. You can scan products, locations, and orders for all warehouse operations. Scan-to-verify functionality reduces picking errors by ensuring the right product is picked from the right location.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>Can I track products by lot or serial number?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. Pallet supports lot number tracking with full genealogy (trace forward and backward through your supply chain), unique serial number tracking for individual items, batch management for production tracking, and expiry date tracking with FEFO (First-Expired, First-Out) picking logic. This is essential for food, pharmaceutical, and other compliance-critical industries.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>Is Pallet suitable for cold chain logistics?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Pallet includes temperature-controlled zone management, min/max temperature range monitoring, compliance reporting for audits, and shelf-life management with FEFO picking logic. You can define zones for cold, frozen, and ambient storage and ensure products are stored and shipped according to temperature requirements.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-7" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>How does the FleetOps integration work?</AccordionTrigger>
                                <AccordionContent>
                                    Pallet and FleetOps are natively integrated. When an order is picked and packed in Pallet, it automatically flows to FleetOps for dispatch and delivery. You get end-to-end visibility from the moment an order is created to proof of delivery at the customer's door. No manual handoffs, no data entry, no blind spots.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-8" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>Is Pallet really free?</AccordionTrigger>
                                <AccordionContent>
                                    Pallet is open-source and free to download, install, and use. You can self-host it on your own servers at no cost. For cloud hosting, we offer usage-based pricing with no per-user fees. You only pay for what you use (storage, orders processed, etc.), not for the number of warehouse workers or managers using the system. Start with a 7-day free trial to test all features.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-9" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>Can I use Pallet for my 3PL business?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Pallet is ideal for 3PL operations. It supports multi-client inventory management with complete data isolation, client-specific billing and reporting, and the ability to manage inventory for multiple clients in the same warehouse. Each client can have their own users, configurations, and branding.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-10" className="bg-card border rounded-lg px-6">
                                <AccordionTrigger>What kind of support is available?</AccordionTrigger>
                                <AccordionContent>
                                    We offer multiple support tiers: Community support through Discord and GitHub for self-hosted users, email and chat support for cloud customers, and dedicated support with SLA for enterprise customers. We also provide migration assistance, training, and consulting services for complex implementations.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Testimonials */}

            {/* Final CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Take Control of Your Warehouse?
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Join businesses that have ditched expensive WMS licenses and gained complete control over their warehouse operations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-card border rounded-lg p-8 text-center">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-3">Start Your Free Trial</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Get full access to all WMS features for 7 days. No credit card required.
                            </p>
                            <Link href="/pricing">
                                <Button size="lg" className="w-full">Start Free Trial</Button>
                            </Link>
                        </div>

                        <div className="bg-card border rounded-lg p-8 text-center">
                            <div className="text-5xl mb-4">📅</div>
                            <h3 className="text-xl font-semibold mb-3">Book a Live Demo</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                See Pallet in action with a personalized walkthrough from our team.
                            </p>
                            <Link href="https://cal.com/shivthakker/enquiry">
                                <Button size="lg" variant="outline" className="w-full">Book a Demo</Button>
                            </Link>
                        </div>

                        <div className="bg-card border rounded-lg p-8 text-center">
                            <div className="text-5xl mb-4">💬</div>
                            <h3 className="text-xl font-semibold mb-3">Talk to an Expert</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Have complex requirements? Let's discuss your warehouse operation.
                            </p>
                            <Link href="https://cal.com/shivthakker/enquiry">
                                <Button size="lg" variant="ghost" className="w-full">Talk to an Expert</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
