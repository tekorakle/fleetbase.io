import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Testimonials from '@/components/sections/testimonials';

export default function PalletPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm font-medium mb-6">
                            Pallet - Warehouse & Inventory Management
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Enterprise WMS Without the Enterprise Price Tag
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8">
                            The open-source warehouse management system that gives you complete control, from receiving to delivery. Stop paying $100K+ for rigid software and run your warehouse your way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                Start Your Free Trial
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                Book a Demo
                            </Button>
                            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                                Explore the Code →
                            </Button>
                        </div>
                        <div className="aspect-video bg-slate-700/50 rounded-lg border border-slate-600 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🎬</div>
                                <p className="text-slate-400">
                                    [VIDEO PLACEHOLDER: 90-second Pallet WMS overview demo]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Is Your Warehouse Holding You Back?
                        </h2>
                        <p className="text-xl text-slate-600">
                            Traditional warehouse management is broken. It's expensive, inflexible, and disconnected from the rest of your supply chain.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                            <div className="text-4xl mb-4">💸</div>
                            <h3 className="text-2xl font-bold mb-4">Prohibitive Licensing Fees</h3>
                            <p className="text-slate-700 mb-6">
                                Commercial WMS solutions cost $50K to $500K+ in upfront licensing, plus ongoing maintenance fees. This locks out growing businesses and drains enterprise budgets.
                            </p>
                            <div className="aspect-video bg-red-100 rounded border border-red-200 flex items-center justify-center">
                                <p className="text-sm text-red-600 text-center px-4">
                                    [IMAGE: Piggy bank being smashed with "WMS License" hammer]
                                </p>
                            </div>
                        </div>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
                            <div className="text-4xl mb-4">🔗</div>
                            <h3 className="text-2xl font-bold mb-4">No Integration with Delivery</h3>
                            <p className="text-slate-700 mb-6">
                                Your WMS and TMS don't talk to each other, creating manual work, data entry errors, and a blind spot between your warehouse and your customer's doorstep.
                            </p>
                            <div className="aspect-video bg-orange-100 rounded border border-orange-200 flex items-center justify-center">
                                <p className="text-sm text-orange-600 text-center px-4">
                                    [IMAGE: WMS box and TMS box with gap and question mark]
                                </p>
                            </div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
                            <div className="text-4xl mb-4">⚙️</div>
                            <h3 className="text-2xl font-bold mb-4">Forced, Rigid Workflows</h3>
                            <p className="text-slate-700 mb-6">
                                Your business is unique, but your software forces you into predefined processes. You can't adapt to new challenges or customize workflows without expensive consultants.
                            </p>
                            <div className="aspect-video bg-yellow-100 rounded border border-yellow-200 flex items-center justify-center">
                                <p className="text-sm text-yellow-600 text-center px-4">
                                    [IMAGE: Star peg trying to fit in square hole labeled "WMS"]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Complete Control, From Receiving to Delivery
                        </h2>
                        <p className="text-xl text-slate-600">
                            Pallet is the modern, open-source WMS that puts you in control. It's affordable, fully integrated, and built for enterprise-scale operations.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="text-2xl font-bold mb-4">Keep Your Capital</h3>
                            <p className="text-slate-700 mb-6">
                                Stop paying for expensive licenses. Pallet is open-source and usage-based, so you only pay for what you use. Reinvest your capital into growth, not software.
                            </p>
                            <div className="aspect-video bg-green-50 rounded border border-green-200 flex items-center justify-center">
                                <p className="text-sm text-green-600 text-center px-4">
                                    [IMAGE: Growing money tree with "Open Source" roots]
                                </p>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                            <div className="text-4xl mb-4">🔄</div>
                            <h3 className="text-2xl font-bold mb-4">Seamless Order-to-Delivery</h3>
                            <p className="text-slate-700 mb-6">
                                With native FleetOps integration, your warehouse and delivery operations are one. Orders flow seamlessly from pick list to proof of delivery, giving you end-to-end visibility.
                            </p>
                            <div className="aspect-video bg-blue-50 rounded border border-blue-200 flex items-center justify-center">
                                <p className="text-sm text-blue-600 text-center px-4">
                                    [IMAGE: Smooth flow from warehouse → truck → customer]
                                </p>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold mb-4">Scale Without Limits</h3>
                            <p className="text-slate-700 mb-6">
                                Get enterprise features like wave picking, cycle counting, and multi-warehouse support out of the box. Pallet is built to handle your growth, from your first order to millions.
                            </p>
                            <div className="aspect-video bg-purple-50 rounded border border-purple-200 flex items-center justify-center">
                                <p className="text-sm text-purple-600 text-center px-4">
                                    [IMAGE: Exponential growth graph with warehouse icons]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Showcase - Tabs */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            The All-in-One Platform for Modern Warehouse Operations
                        </h2>
                    </div>
                    <Tabs defaultValue="multi-warehouse" className="max-w-6xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
                            <TabsTrigger value="multi-warehouse">Multi-Warehouse</TabsTrigger>
                            <TabsTrigger value="picking">Picking</TabsTrigger>
                            <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
                            <TabsTrigger value="tracking">Tracking</TabsTrigger>
                            <TabsTrigger value="temperature">Temperature</TabsTrigger>
                            <TabsTrigger value="mobile">Mobile</TabsTrigger>
                        </TabsList>

                        <TabsContent value="multi-warehouse" className="space-y-6">
                            <div className="bg-slate-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Manage Your Entire Network</h3>
                                <p className="text-slate-700 mb-6">
                                    Run all your warehouses from a single platform. Transfer stock, manage location-specific inventory, and get a unified view of your entire operation.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Unlimited Warehouse Locations</strong> - Scale to as many facilities as you need</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Inter-Warehouse Stock Transfers</strong> - Move inventory between locations seamlessly</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Multi-Client Support for 3PLs</strong> - Manage inventory for multiple clients</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Hierarchical Location Management</strong> - Zones, Aisles, Racks, Bins for precise control</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Centralized Inventory View</strong> - See all your inventory across all locations</span>
                                    </li>
                                </ul>
                                <div className="aspect-video bg-slate-200 rounded border border-slate-300 flex items-center justify-center">
                                    <p className="text-sm text-slate-600 text-center px-4">
                                        [IMAGE: Map view with multiple warehouse locations and inventory levels]
                                    </p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="picking" className="space-y-6">
                            <div className="bg-slate-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Pick, Pack, and Ship Faster</h3>
                                <p className="text-slate-700 mb-6">
                                    Boost your fulfillment speed and accuracy with enterprise-grade picking strategies. Fulfill more orders with fewer errors and less labor.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Wave Picking</strong> - Batch process high-volume orders for maximum efficiency</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Zone Picking</strong> - Optimize large warehouses by assigning pickers to zones</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Batch Picking</strong> - Pick multiple orders simultaneously for efficiency</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Discrete Picking</strong> - One order at a time for accuracy-critical operations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Priority-based Pick Lists</strong> - Rush orders get picked first automatically</span>
                                    </li>
                                </ul>
                                <div className="aspect-video bg-slate-200 rounded border border-slate-300 flex items-center justify-center">
                                    <p className="text-sm text-slate-600 text-center px-4">
                                        [IMAGE: Dashboard showing wave picking progress with pick lists]
                                    </p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="accuracy" className="space-y-6">
                            <div className="bg-slate-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Achieve 99.9% Inventory Accuracy</h3>
                                <p className="text-slate-700 mb-6">
                                    Eliminate stockouts and discrepancies with real-time tracking and automated cycle counting. Know what you have and where you have it, down to the last unit.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Scheduled & On-Demand Cycle Counts</strong> - Maintain accuracy without full shutdowns</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Real-time Variance Reporting</strong> - Identify discrepancies immediately</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Automatic Stock Adjustments</strong> - Correct inventory levels with approval workflow</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Bin-level Accuracy Tracking</strong> - Know exactly where every unit is located</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Complete Audit Trail</strong> - Track every movement for compliance and analysis</span>
                                    </li>
                                </ul>
                                <div className="aspect-video bg-slate-200 rounded border border-slate-300 flex items-center justify-center">
                                    <p className="text-sm text-slate-600 text-center px-4">
                                        [IMAGE: Cycle count interface showing expected vs. counted with variance]
                                    </p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="tracking" className="space-y-6">
                            <div className="bg-slate-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Complete Traceability & Compliance</h3>
                                <p className="text-slate-700 mb-6">
                                    Meet strict compliance requirements with end-to-end traceability. Track every unit from receiving to shipping with lot, serial, and batch number control.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Lot Number Tracking & Genealogy</strong> - Know where every lot came from and where it went</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Unique Serial Number Tracking</strong> - Track individual units for high-value or regulated products</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Batch Management</strong> - Group inventory for manufacturing and quality control</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Expiry Date Tracking (FEFO)</strong> - Prevent shipping expired products with First-Expired, First-Out logic</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Recall Management & Reporting</strong> - Quickly identify and isolate affected inventory</span>
                                    </li>
                                </ul>
                                <div className="aspect-video bg-slate-200 rounded border border-slate-300 flex items-center justify-center">
                                    <p className="text-sm text-slate-600 text-center px-4">
                                        [IMAGE: Traceability report showing complete product history]
                                    </p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="temperature" className="space-y-6">
                            <div className="bg-slate-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Protect Your Perishable Goods</h3>
                                <p className="text-slate-700 mb-6">
                                    Ensure cold chain integrity with temperature-controlled zones and monitoring. Perfect for food & beverage, pharmaceuticals, and other sensitive products.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Temperature-Controlled Zones</strong> - Define cold, frozen, and ambient zones</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Min/Max Temperature Range Monitoring</strong> - Track and alert on temperature excursions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Temperature Compliance Reporting</strong> - Prove cold chain integrity for audits</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Expiry Date & Shelf-Life Management</strong> - Prevent waste and ensure product quality</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>FEFO Picking Logic</strong> - Automatically pick products closest to expiration first</span>
                                    </li>
                                </ul>
                                <div className="aspect-video bg-slate-200 rounded border border-slate-300 flex items-center justify-center">
                                    <p className="text-sm text-slate-600 text-center px-4">
                                        [IMAGE: Warehouse map with temperature zones color-coded]
                                    </p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="mobile" className="space-y-6">
                            <div className="bg-slate-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold mb-4">Run Your Warehouse from a Tablet</h3>
                                <p className="text-slate-700 mb-6">
                                    Empower your team with a mobile-first WMS. Use any barcode scanner or mobile device to execute tasks faster and with fewer errors.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Mobile-friendly Interface</strong> - All operations accessible from tablets and smartphones</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Barcode Scanning</strong> - Scan for receiving, picking, counting, and transfers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Scan-to-Verify</strong> - Eliminate picking errors with barcode verification</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Real-time Data Sync</strong> - Changes sync instantly with the backend</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-2">✓</span>
                                        <span><strong>Works on Any Device</strong> - Compatible with modern tablets and mobile scanners</span>
                                    </li>
                                </ul>
                                <div className="aspect-video bg-slate-200 rounded border border-slate-300 flex items-center justify-center">
                                    <p className="text-sm text-slate-600 text-center px-4">
                                        [IMAGE: Person using tablet to scan bin location barcode]
                                    </p>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            The WMS for Any Industry
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: '📦', title: 'E-commerce Fulfillment', desc: 'High-volume picking for online orders' },
                            { icon: '🏭', title: '3PL Operations', desc: 'Multi-client inventory and billing' },
                            { icon: '🍔', title: 'Food & Beverage', desc: 'Temperature control and lot tracking' },
                            { icon: '💊', title: 'Pharmaceuticals', desc: 'Serial number tracking and compliance' },
                            { icon: '🏗️', title: 'Manufacturing', desc: 'Raw material and finished goods' },
                            { icon: '🏪', title: 'Retail Distribution', desc: 'Multi-location inventory' },
                            { icon: '❄️', title: 'Cold Chain Logistics', desc: 'End-to-end temperature monitoring' },
                            { icon: '🏢', title: 'B2B Wholesale', desc: 'Bulk order fulfillment and kitting' },
                        ].map((useCase, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 border border-slate-200 text-center hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-3">{useCase.icon}</div>
                                <h3 className="font-bold mb-2">{useCase.title}</h3>
                                <p className="text-sm text-slate-600">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Comparison */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            The Clear Choice for Modern Warehousing
                        </h2>
                    </div>
                    <div className="max-w-5xl mx-auto overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border border-slate-300 p-4 text-left">Feature</th>
                                    <th className="border border-slate-300 p-4 text-center bg-blue-50">
                                        <strong className="text-blue-600">Pallet</strong>
                                    </th>
                                    <th className="border border-slate-300 p-4 text-center">Commercial WMS</th>
                                    <th className="border border-slate-300 p-4 text-center">Basic Inventory</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 p-4 font-medium">Licensing Cost</td>
                                    <td className="border border-slate-300 p-4 text-center bg-blue-50">
                                        <span className="text-green-600 font-bold">✓ None (Open Source)</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-red-600">✗ $50K - $500K+</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-green-600">✓ Low Cost</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-4 font-medium">Advanced Picking</td>
                                    <td className="border border-slate-300 p-4 text-center bg-blue-50">
                                        <span className="text-green-600 font-bold">✓ Wave, Zone, Batch</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-green-600">✓ Yes</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-red-600">✗ No</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-4 font-medium">Integrated Delivery</td>
                                    <td className="border border-slate-300 p-4 text-center bg-blue-50">
                                        <span className="text-green-600 font-bold">✓ Built-in (FleetOps)</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-red-600">✗ 3rd Party</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-red-600">✗ No</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-4 font-medium">Lot & Serial Tracking</td>
                                    <td className="border border-slate-300 p-4 text-center bg-blue-50">
                                        <span className="text-green-600 font-bold">✓ Yes</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-green-600">✓ Yes</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-yellow-600">⚠ Limited</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-4 font-medium">Multi-Warehouse</td>
                                    <td className="border border-slate-300 p-4 text-center bg-blue-50">
                                        <span className="text-green-600 font-bold">✓ Yes</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-green-600">✓ Yes</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-red-600">✗ Add-on</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-4 font-medium">Open Source</td>
                                    <td className="border border-slate-300 p-4 text-center bg-blue-50">
                                        <span className="text-green-600 font-bold">✓ Yes</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-red-600">✗ No</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-red-600">✗ No</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-4 font-medium">Deployment Time</td>
                                    <td className="border border-slate-300 p-4 text-center bg-blue-50">
                                        <span className="text-green-600 font-bold">✓ Days</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-red-600">✗ Months</span>
                                    </td>
                                    <td className="border border-slate-300 p-4 text-center">
                                        <span className="text-green-600">✓ Hours</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Seamlessly Integrated with FleetOps
                        </h2>
                        <p className="text-xl text-slate-600">
                            Pallet and FleetOps work together as one unified platform. When an order is picked and packed in Pallet, it automatically becomes a dispatch task in FleetOps. Track your inventory from the moment it arrives at your warehouse to the moment it's signed for by your customer.
                        </p>
                    </div>
                    <div className="max-w-5xl mx-auto bg-white rounded-lg border border-slate-200 p-8">
                        <div className="aspect-video bg-slate-100 rounded border border-slate-300 flex items-center justify-center">
                            <p className="text-sm text-slate-600 text-center px-4">
                                [IMAGE: Order lifecycle diagram: Sales Order → Pick List → Picked & Packed → Dispatch Task → Driver Assigned → Proof of Delivery]
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How is Pallet different from a basic inventory system?</AccordionTrigger>
                                <AccordionContent>
                                    Basic inventory systems track what you have and where it is. Pallet is a full Warehouse Management System (WMS) that manages the entire warehouse operation: receiving, put-away, picking, packing, shipping, cycle counting, and more. It includes advanced features like wave picking, barcode scanning, lot/serial tracking, and multi-warehouse support that basic inventory systems don't offer.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Can Pallet handle multiple warehouses?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Pallet supports unlimited warehouse locations. You can manage inventory across all your facilities, transfer stock between warehouses, and get a unified view of your entire network. Each warehouse can have its own zones, aisles, racks, and bins for precise location tracking.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>What picking strategies does Pallet support?</AccordionTrigger>
                                <AccordionContent>
                                    Pallet supports four picking strategies: Discrete picking (one order at a time for accuracy), Batch picking (multiple orders simultaneously for efficiency), Zone picking (assign pickers to specific warehouse zones), and Wave picking (batch process high-volume orders). You can choose the strategy that best fits your operation.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Does Pallet support barcode scanning?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Pallet has full barcode scanning support for all operations: receiving, picking, cycle counting, and stock transfers. You can scan bin locations, products, lot numbers, and serial numbers. The mobile-friendly interface works on any tablet or mobile barcode scanner, and scan-to-verify functionality eliminates picking errors.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Can I track products by lot or serial number?</AccordionTrigger>
                                <AccordionContent>
                                    Absolutely. Pallet provides complete lot, serial, and batch tracking for full traceability. You can track lot genealogy (where it came from and where it went), capture serial numbers at receiving and verify them at picking, manage batch-based inventory, and handle recalls quickly. This is essential for food & beverage, pharmaceuticals, and other regulated industries.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>Is Pallet suitable for cold chain logistics?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Pallet includes temperature-controlled zone management. You can define cold, frozen, and ambient zones, set min/max temperature ranges, track expiry dates, and use FEFO (First-Expired, First-Out) picking logic. This ensures cold chain integrity and compliance for food, pharmaceuticals, and other perishable products.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger>How does the FleetOps integration work?</AccordionTrigger>
                                <AccordionContent>
                                    Pallet and FleetOps are natively integrated as part of the Fleetbase platform. When you pick and pack an order in Pallet, it automatically creates a dispatch task in FleetOps. Drivers are assigned, routes are optimized, and customers receive real-time tracking. You get end-to-end visibility from warehouse to doorstep, all in one platform.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger>Is Pallet really free?</AccordionTrigger>
                                <AccordionContent>
                                    Pallet is open-source, which means the software itself is free to use and modify. However, the Fleetbase platform uses usage-based pricing (Resource Units) to cover infrastructure, support, and ongoing development. You get a 7-day free trial with 50 Resource Units to test everything, and then you only pay for what you use. There are no per-user fees or expensive licensing costs.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-9">
                                <AccordionTrigger>Can I use Pallet for my 3PL business?</AccordionTrigger>
                                <AccordionContent>
                                    Yes! Pallet is designed with 3PLs in mind. It supports multi-client operations, allowing you to manage inventory for multiple customers in the same warehouse. You can track inventory by client, generate client-specific reports, and manage billing based on usage. The multi-warehouse support also lets you manage multiple facilities for your clients.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-10">
                                <AccordionTrigger>What kind of support is available?</AccordionTrigger>
                                <AccordionContent>
                                    Support varies by plan. All plans include email support and access to our documentation and community forums. Higher-tier plans include phone support, 24/7 support, and white-glove onboarding. Enterprise plans include dedicated account management and SLA guarantees. You can also hire our team for custom development, integrations, and migration assistance.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4 md:px-6">
                    <Testimonials />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Ready to Take Control of Your Warehouse?
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-lg p-8">
                            <h3 className="text-2xl font-bold mb-4">Start Your Free Trial</h3>
                            <p className="text-slate-700 mb-6">
                                Get full access to Pallet and the entire Fleetbase platform for 7 days. No credit card required.
                            </p>
                            <ul className="space-y-2 mb-6 text-sm">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Full WMS Capabilities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>FleetOps Integration</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>API & Webhook Access</span>
                                </li>
                            </ul>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                Start Free Trial
                            </Button>
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg p-8">
                            <h3 className="text-2xl font-bold mb-4">Book a Live Demo</h3>
                            <p className="text-slate-700 mb-6">
                                Schedule a personalized walkthrough with a WMS expert. We'll show you how Pallet can solve your specific challenges.
                            </p>
                            <ul className="space-y-2 mb-6 text-sm">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Personalized Demo</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Q&A with an Expert</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>See Enterprise Features in Action</span>
                                </li>
                            </ul>
                            <Button variant="outline" className="w-full">
                                Book a Demo
                            </Button>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-lg p-8">
                            <h3 className="text-2xl font-bold mb-4">Talk to an Expert</h3>
                            <p className="text-slate-700 mb-6">
                                Have complex requirements or need help with a migration? Our team is here to help you design the perfect solution.
                            </p>
                            <ul className="space-y-2 mb-6 text-sm">
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>For Complex Operations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Migration Support</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Custom Integration Help</span>
                                </li>
                            </ul>
                            <Button variant="outline" className="w-full">
                                Talk to an Expert
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
