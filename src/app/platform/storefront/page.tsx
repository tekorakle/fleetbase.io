import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Testimonials from '@/components/sections/testimonials';

export default function StorefrontPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10"></div>
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-5xl mx-auto">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Storefront</span>
              <span className="px-3">Headless Commerce & Marketplace</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Own Your Commerce, <span className="text-gradient">Control Your Delivery</span>
            </h1>
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              The open-source, logistics-first e-commerce platform for hyperlocal businesses. No commissions. No vendor lock-in. Just your brand, your customers, your way.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/pricing"><Button size="lg">Start Your Free Trial</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline">Book a Demo</Button></Link>
              <Link href="https://github.com/fleetbase/storefront" target="_blank"><Button size="lg" variant="ghost">Explore the Code →</Button></Link>
            </div>
            
            {/* Video Placeholder */}
            <div className="mt-12 w-full max-w-5xl">
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <div className="text-xl font-semibold text-white mb-2">Platform Overview Video</div>
                  <div className="text-sm text-slate-400 max-w-md">90-second demo showing customer ordering from branded mobile app → restaurant receiving order → driver delivering, all within the Fleetbase ecosystem</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Stop Paying 30% Commissions to Delivery Platforms</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Third-party delivery apps are eating your profits, controlling your customer relationships, and limiting your brand's potential. It's time to take back control.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pain Point 1 */}
            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-lg mb-6 flex items-center justify-center border border-red-500/20">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">💸</div>
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">-30%</div>
                  <div className="text-sm text-muted-foreground mt-2">Per Order Commission</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Crippling Commission Fees</h3>
              <p className="text-muted-foreground">
                With fees up to 30% per order, you're losing a massive chunk of your revenue just to be listed on their platform. That's money that should be reinvested in your business, not theirs.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-lg mb-6 flex items-center justify-center border border-orange-500/20">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🏷️</div>
                  <div className="text-sm text-muted-foreground mt-2 max-w-[200px]">Your brand is just another logo in a crowded marketplace</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">No Brand Control</h3>
              <p className="text-muted-foreground">
                Your brand is just another logo in a crowded marketplace. You can't control the customer experience, build brand loyalty, or differentiate yourself from competitors.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg mb-6 flex items-center justify-center border border-purple-500/20">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🚫</div>
                  <div className="text-sm text-muted-foreground mt-2 max-w-[200px]">Platform owns your customer data and relationships</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">You Don't Own Your Customers</h3>
              <p className="text-muted-foreground">
                The delivery platforms own the customer data, preventing you from marketing to your own customers and building direct relationships. They control your business, not you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Build Your Own Delivery Empire</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Storefront gives you everything you need to launch a powerful, branded on-demand commerce experience, from checkout to doorstep, all in one platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg mb-6 flex items-center justify-center border border-green-500/20">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">💰</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
                  <div className="text-sm text-muted-foreground mt-2">Keep All Your Revenue</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Keep 100% of Your Revenue</h3>
              <p className="text-muted-foreground">
                With zero commission fees, you keep all the revenue from every sale. Reinvest in your business, hire more staff, or increase your margins. The choice is yours.
              </p>
            </div>

            {/* Solution 2 */}
            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg mb-6 flex items-center justify-center border border-blue-500/20">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🎨</div>
                  <div className="text-sm text-muted-foreground mt-2 max-w-[200px]">Branded app, website, and delivery experience</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Own Your Brand & Customers</h3>
              <p className="text-muted-foreground">
                From a white-label mobile app to a custom web storefront, you control the entire customer experience and own all your customer data. Build loyalty, not dependency.
              </p>
            </div>

            {/* Solution 3 */}
            <div className="bg-card border rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg mb-6 flex items-center justify-center border border-purple-500/20">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">🚚</div>
                  <div className="text-sm text-muted-foreground mt-2 max-w-[200px]">Order → FleetOps → Dispatch → Delivery</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrated Logistics Included</h3>
              <p className="text-muted-foreground">
                Storefront is natively integrated with FleetOps, our powerful logistics engine, for seamless dispatch, route optimization, and real-time tracking. No third-party integrations needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase - Tabs */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">The All-in-One Platform for On-Demand Commerce</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to launch, manage, and scale your on-demand commerce business, all in one powerful platform.
            </p>
          </div>

          <Tabs defaultValue="mobile-apps" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="mobile-apps">Mobile Apps</TabsTrigger>
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="logistics">Logistics</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>

            {/* Tab 1: Mobile Apps */}
            <TabsContent value="mobile-apps" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Branded Mobile Apps</h3>
                  <p className="text-muted-foreground mb-6">
                    Launch production-ready, white-label iOS and Android apps for your customers. No coding required. Customize with your logo, colors, and branding to create a seamless mobile experience that drives loyalty and repeat orders.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Native iOS & Android Apps</strong> - Production-ready apps for App Store and Google Play</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Push Notifications</strong> - Order updates, promotions, and customer engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Real-Time Order Tracking</strong> - Live map with driver location and ETA</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>In-App Payments</strong> - Stripe, PayPal, Apple Pay, Google Pay</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>White-Label Ready</strong> - Your brand, your colors, your logo</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-[9/16] bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden">
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-lg font-semibold text-white mb-2">Mobile App Screenshots</div>
                    <div className="text-sm text-slate-400 max-w-xs">Animated GIF showing: browsing products → adding to cart → checkout → order tracking with live map</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab 2: Marketplace */}
            <TabsContent value="marketplace" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Multi-Vendor Marketplace</h3>
                  <p className="text-muted-foreground mb-6">
                    Create your own multi-vendor marketplace and onboard unlimited stores. Set commission rates, manage payouts, and provide a unified shopping experience for your customers. Perfect for food courts, local business networks, and franchise operations.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Network Creation & Management</strong> - Build your own marketplace ecosystem</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Store Onboarding & Invitations</strong> - Automated workflows for vendor signup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Commission & Revenue Sharing</strong> - Flexible fee structures and payouts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Marketplace-Wide Search</strong> - Customers search across all stores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Aggregated Analytics</strong> - Track GMV, orders, and store performance</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden">
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-6xl mb-4">🏪</div>
                    <div className="text-lg font-semibold text-white mb-2">Marketplace Dashboard</div>
                    <div className="text-sm text-slate-400 max-w-md">Screenshot showing: network overview → multiple stores → aggregated sales metrics → commission tracking → store performance rankings</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab 3: Products */}
            <TabsContent value="products" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Advanced Product Management</h3>
                  <p className="text-muted-foreground mb-6">
                    Manage complex product catalogs with ease. Support for unlimited variants, customizable addons, time-based availability, and location-specific menus gives you complete control over your offerings.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Unlimited Products & Variants</strong> - Size, color, flavor variations with independent pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Customizable Addons & Options</strong> - Toppings, sides, extras with conditional pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Time-Based Availability</strong> - Happy hours, limited-time offers, seasonal items</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Location-Specific Menus</strong> - Different products for different locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Rich Product Descriptions & Images</strong> - SEO-optimized with image galleries</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden">
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-6xl mb-4">📦</div>
                    <div className="text-lg font-semibold text-white mb-2">Product Management Interface</div>
                    <div className="text-sm text-slate-400 max-w-md">Screenshot showing: product editor → variants (size, color) → addons (toppings, extras) → availability settings → pricing rules</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab 4: Logistics */}
            <TabsContent value="logistics" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Integrated Delivery & Logistics</h3>
                  <p className="text-muted-foreground mb-6">
                    Storefront's native integration with FleetOps means your orders flow seamlessly from checkout to dispatch. Automate driver assignment, optimize routes, and provide customers with accurate ETAs and live tracking.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Automated Dispatch & Driver Assignment</strong> - Orders route to FleetOps automatically</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Multi-Stop Route Optimization</strong> - Efficient routes save time and fuel</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Real-Time Driver Tracking</strong> - Live map with driver location and progress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Proof of Delivery</strong> - Signature, photo, and delivery notes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Accurate ETA Calculations</strong> - Real-time traffic and route data</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden">
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <div className="text-lg font-semibold text-white mb-2">FleetOps Integration</div>
                    <div className="text-sm text-slate-400 max-w-md">Screenshot showing: map view with driver route → multiple stops → real-time location → ETA countdown → delivery status updates</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab 5: Location */}
            <TabsContent value="location" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Location-Based Commerce</h3>
                  <p className="text-muted-foreground mb-6">
                    Define custom delivery zones with polygon mapping, set zone-specific pricing and delivery fees, and offer location-aware product catalogs. Perfect for hyperlocal delivery, food trucks, and businesses with multiple service areas.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Polygon-Based Delivery Zones</strong> - Draw custom zones on a map</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Zone-Specific Pricing & Fees</strong> - Different rates for different areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Location-Aware Catalogs</strong> - Show only available products by location</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Store Finder with Map View</strong> - Customers find nearby stores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Distance-Based Rate Calculation</strong> - Automatic delivery fee calculation</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden">
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-6xl mb-4">📍</div>
                    <div className="text-lg font-semibold text-white mb-2">Zone-Based Delivery</div>
                    <div className="text-sm text-slate-400 max-w-md">Screenshot showing: map with drawn delivery zones → zone pricing editor → Zone A: $5, Zone B: $7, Zone C: $10 → minimum order values</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab 6: API */}
            <TabsContent value="api" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Headless API for Developers</h3>
                  <p className="text-muted-foreground mb-6">
                    Build completely custom commerce experiences with our comprehensive RESTful API. Integrate with your existing website, build a custom frontend, or connect to any third-party service. The possibilities are endless.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Complete RESTful API</strong> - Full access to all platform features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Webhook Support for Events</strong> - Real-time notifications for orders, payments, etc.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>JavaScript, PHP, and React Native SDKs</strong> - Pre-built libraries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Interactive API Documentation</strong> - Test endpoints in the browser</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Sandbox Environment</strong> - Test integrations safely</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden p-8">
                  <div className="h-full flex flex-col">
                    <div className="text-sm text-slate-400 mb-2">Create Order via API</div>
                    <pre className="text-xs text-green-400 font-mono overflow-auto flex-1">
{`// Create a new order
const order = await storefront.orders.create({
  customer_id: "cust_123",
  store_id: "store_456",
  items: [
    {
      product_id: "prod_789",
      quantity: 2,
      addons: ["addon_101", "addon_102"]
    }
  ],
  delivery_address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    postal_code: "94102"
  },
  payment_method: "card_xyz",
  tip_amount: 500 // $5.00 in cents
});

console.log(order.id); // "order_abc123"
console.log(order.status); // "pending"
console.log(order.total); // 2450 ($24.50)`}
                    </pre>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">The Engine for Any On-Demand Business</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From food delivery to services booking, Storefront powers hyperlocal commerce across every industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🍕</div>
              <div className="font-semibold">Restaurants & Food</div>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🛒</div>
              <div className="font-semibold">Grocery & Convenience</div>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏪</div>
              <div className="font-semibold">Retail & E-Commerce</div>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🍷</div>
              <div className="font-semibold">Alcohol & Cannabis</div>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔧</div>
              <div className="font-semibold">Services & Bookings</div>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏢</div>
              <div className="font-semibold">Multi-Vendor Markets</div>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🚚</div>
              <div className="font-semibold">Food Trucks</div>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏭</div>
              <div className="font-semibold">B2B & Wholesale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">The Clear Choice for Modern Commerce</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how Storefront compares to traditional e-commerce platforms and delivery apps.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card border rounded-lg">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold bg-primary/5">Storefront</th>
                  <th className="text-center p-4 font-semibold">Shopify</th>
                  <th className="text-center p-4 font-semibold">DoorDash / Uber Eats</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Commission Fees</td>
                  <td className="text-center p-4 bg-primary/5 font-semibold text-green-600 dark:text-green-400">None</td>
                  <td className="text-center p-4">2.9% + 30¢</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">15-30%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Integrated Logistics</td>
                  <td className="text-center p-4 bg-primary/5">✅ Built-in</td>
                  <td className="text-center p-4">❌ 3rd Party</td>
                  <td className="text-center p-4">✅ Built-in</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Branded Mobile Apps</td>
                  <td className="text-center p-4 bg-primary/5 font-semibold text-green-600 dark:text-green-400">✅ Included</td>
                  <td className="text-center p-4">❌ Extra Cost</td>
                  <td className="text-center p-4">❌ Their App</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Customer Data Ownership</td>
                  <td className="text-center p-4 bg-primary/5 font-semibold text-green-600 dark:text-green-400">✅ You Own It</td>
                  <td className="text-center p-4">✅ You Own It</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">❌ They Own It</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Multi-Vendor Marketplace</td>
                  <td className="text-center p-4 bg-primary/5">✅ Built-in</td>
                  <td className="text-center p-4">❌ Add-on</td>
                  <td className="text-center p-4">✅ Built-in</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Open Source & Self-Hosted</td>
                  <td className="text-center p-4 bg-primary/5 font-semibold text-green-600 dark:text-green-400">✅ Yes</td>
                  <td className="text-center p-4">❌ No</td>
                  <td className="text-center p-4">❌ No</td>
                </tr>
                <tr>
                  <td className="p-4">Brand Control</td>
                  <td className="text-center p-4 bg-primary/5 font-semibold text-green-600 dark:text-green-400">✅ Full Control</td>
                  <td className="text-center p-4">✅ Full Control</td>
                  <td className="text-center p-4 text-red-600 dark:text-red-400">❌ Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How is Storefront different from Shopify?</AccordionTrigger>
              <AccordionContent>
                Storefront is built specifically for hyperlocal, on-demand commerce with integrated logistics. Unlike Shopify, which is designed for shipping products, Storefront includes native delivery management via FleetOps, production-ready mobile apps, and multi-vendor marketplace capabilities out of the box. Plus, it's open-source and self-hostable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I really pay zero commission fees?</AccordionTrigger>
              <AccordionContent>
                Yes. Storefront charges no commission fees on your orders. You pay a flat monthly subscription based on your usage (resource units), not a percentage of your sales. This means you keep 100% of your revenue, minus standard payment processing fees (Stripe, PayPal, etc.).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I use my own drivers or do I have to use FleetOps?</AccordionTrigger>
              <AccordionContent>
                You can use FleetOps for delivery management (included with Storefront), integrate with third-party delivery services via API, or manage your own driver fleet. FleetOps provides dispatch, route optimization, and tracking, but you're not locked in.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Are the mobile apps really included?</AccordionTrigger>
              <AccordionContent>
                Yes. Storefront includes production-ready iOS and Android apps built with React Native. You can customize the branding, colors, and logo, then submit to the App Store and Google Play. No additional fees or per-app charges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I build a multi-vendor marketplace like DoorDash?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Storefront includes full multi-vendor marketplace capabilities. You can create networks, invite stores, set commission rates, manage payouts, and provide a unified shopping experience. Perfect for food courts, local business networks, or building your own delivery platform.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Is Storefront really open-source?</AccordionTrigger>
              <AccordionContent>
                Yes. Storefront is fully open-source under the MIT license. You can view the code on GitHub, self-host it on your own infrastructure, and customize it to your exact needs. No vendor lock-in, no hidden fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>What payment gateways are supported?</AccordionTrigger>
              <AccordionContent>
                Storefront supports Stripe, PayPal, and QPay out of the box, with support for credit cards, debit cards, Apple Pay, Google Pay, and ACH transfers. The payment system is extensible, so you can integrate additional gateways as needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Can I migrate from DoorDash or Uber Eats?</AccordionTrigger>
              <AccordionContent>
                Yes. Many businesses migrate from third-party delivery platforms to Storefront to eliminate commission fees and own their customer relationships. We can help you export your product catalog, customer data, and set up your branded storefront and mobile apps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Do I need technical skills to use Storefront?</AccordionTrigger>
              <AccordionContent>
                No. Storefront includes a user-friendly web console for managing products, orders, customers, and settings. However, if you want to customize the mobile apps or build a custom frontend, some technical knowledge is helpful. We also offer professional services for setup and customization.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>What's included in the free trial?</AccordionTrigger>
              <AccordionContent>
                The 14-day free trial includes full access to all Storefront features: product management, mobile apps, marketplace capabilities, FleetOps integration, API access, and more. No credit card required, and you can cancel anytime.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Ready to Build Your Delivery Empire?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Take control of your commerce, own your customer relationships, and stop paying crippling commission fees. Start your free 14-day trial today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Start Your Free Trial</h3>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>✓ No credit card required</li>
                <li>✓ Full platform access</li>
                <li>✓ Cancel anytime</li>
              </ul>
              <Link href="/pricing"><Button size="lg" className="w-full">Start Building</Button></Link>
            </div>

            <div className="bg-card border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Book a Live Demo</h3>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>✓ Personalized walkthrough</li>
                <li>✓ Get your questions answered</li>
                <li>✓ See it in action</li>
              </ul>
              <Link href="/contact"><Button size="lg" variant="outline" className="w-full">Schedule Demo</Button></Link>
            </div>

            <div className="bg-card border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Talk to an Expert</h3>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li>✓ Have complex requirements?</li>
                <li>✓ Need help with migration?</li>
                <li>✓ Let's chat about your business</li>
              </ul>
              <Link href="/contact"><Button size="lg" variant="outline" className="w-full">Contact Sales</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
