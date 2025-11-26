'use client';

import { ArrowRight, Check, Copy } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const FeaturesTabsSection = () => {
  const [activeTab, setActiveTab] = useState('quotes');
  const [copied, setCopied] = useState(false);

  const TABS_DATA = [
    {
      id: 'quotes',
      title: '💲 Fetch Service Quotes',
      description: 'Get real-time quotes for pickup/dropoff',
      code: `// Fetch service quotes based on pickup/dropoff and display best option
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<Fleetbase API Key>');

(async () => {
  try {
    const serviceQuotes = await fleetbase.serviceQuotes.query({
      pickup: '10020 2nd Ave S, Seattle, WA',
      dropoff: '101 W Olympic Pl, Seattle, WA',
      currency: 'USD'
    });

    if (serviceQuotes.length === 0) {
      console.log('No service quotes available for the selected route.');
      return;
    }

    console.log('Available service quotes:');
    serviceQuotes.forEach((serviceQuote) => {
      console.log(\`- \${serviceQuote.getAttribute('service_name')}: \${serviceQuote.getAttribute('currency')} \${serviceQuote.getAttribute('amount')}\`);
    });

    // Example: Choose the cheapest quote
    const cheapest = serviceQuotes.reduce((prev, current) => (
      prev.getAttribute('amount') < current.getAttribute('amount') ? prev : current
    ));

    console.log(\`Cheapest option: \${cheapest.getAttribute('service_name')} at \${cheapest.getAttribute('currency')} \${cheapest.getAttribute('amount')}\`);
  } catch (err) {
    console.error('Error fetching service quotes:', err);
  }
})();`,
    },
    {
      id: 'create',
      title: '📦 Create an Order',
      description: 'Easily create logistics orders via API',
      code: `// Create a new logistics order with pickup and dropoff details
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<Fleetbase API Key>');

(async () => {
  try {
    const order = await fleetbase.orders.create({
      payload: {
        pickup: '123 Main St, Seattle, WA 98101',
        dropoff: '456 Pike St, Seattle, WA 98102',
        description: 'Package delivery',
        scheduled_at: new Date('2024-12-01T14:00:00Z')
      },
      entities: [
        {
          name: 'John Doe',
          phone: '+1234567890',
          email: 'john@example.com'
        }
      ]
    });

    console.log('Order created successfully:');
    console.log(\`Order ID: \${order.id}\`);
    console.log(\`Status: \${order.getAttribute('status')}\`);
    console.log(\`Tracking Number: \${order.getAttribute('tracking_number')}\`);
  } catch (err) {
    console.error('Error creating order:', err);
  }
})();`,
    },
    {
      id: 'events',
      title: '🔄 Subscribe to Activity',
      description: 'Listen for order and driver events live',
      code: `// Subscribe to real-time order and driver events using WebSockets
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<Fleetbase API Key>');

// Subscribe to order status changes
fleetbase.on('order.status_changed', (event) => {
  console.log('Order status updated:');
  console.log(\`Order ID: \${event.data.id}\`);
  console.log(\`New Status: \${event.data.status}\`);
  console.log(\`Updated At: \${event.data.updated_at}\`);
});

// Subscribe to driver location updates
fleetbase.on('driver.location_updated', (event) => {
  console.log('Driver location updated:');
  console.log(\`Driver: \${event.data.name}\`);
  console.log(\`Location: \${event.data.latitude}, \${event.data.longitude}\`);
  console.log(\`Speed: \${event.data.speed} km/h\`);
});

// Subscribe to order completion
fleetbase.on('order.completed', (event) => {
  console.log(\`Order \${event.data.tracking_number} completed!\`);
  console.log(\`Proof of Delivery: \${event.data.proof_of_delivery_url}\`);
});

console.log('Listening for real-time events...');`,
    },
    {
      id: 'drivers',
      title: '📍 Locate Nearby Drivers',
      description: 'Search for drivers by proximity radius',
      code: `// Find available drivers within a specified radius
import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<Fleetbase API Key>');

(async () => {
  try {
    const drivers = await fleetbase.drivers.queryNearby({
      latitude: 47.6062,
      longitude: -122.3321,
      radius: 5000, // 5km radius
      status: 'active',
      limit: 10
    });

    console.log(\`Found \${drivers.length} drivers nearby:\`);
    
    drivers.forEach((driver) => {
      const distance = driver.getAttribute('distance');
      const name = driver.getAttribute('name');
      const vehicle = driver.getAttribute('vehicle_type');
      
      console.log(\`- \${name} (\${vehicle}) - \${(distance / 1000).toFixed(2)}km away\`);
    });

    // Get the closest driver
    if (drivers.length > 0) {
      const closest = drivers[0];
      console.log(\`\\nClosest driver: \${closest.getAttribute('name')}\`);
    }
  } catch (err) {
    console.error('Error locating drivers:', err);
  }
})();`,
    },
  ];

  const handleCopy = async () => {
    const activeCode = TABS_DATA.find((tab) => tab.id === activeTab)?.code;
    if (activeCode) {
      await navigator.clipboard.writeText(activeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="section-padding container grid max-w-screen-xl lg:grid-cols-2 lg:gap-18">
      {/* Left: Text & Tabs */}
      <div className="flex flex-col justify-between gap-2">
        <div className="space-y-6 text-balance lg:max-w-lg">
          <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
            Built for <br className="hidden lg:block" />
            the Modern <br className="hidden lg:block" />
            Developer
          </h2>
          <span className="text-xl leading-7 font-bold">
            Fleetbase Developer Toolkit
          </span>
          <p className="text-muted-foreground mt-3 text-lg leading-snug">
            Instantly create, dispatch, and track logistics operations via API.
            Use the SDK to connect to Fleetbase services, manage resources, and
            optimize your workflows with a few lines of code.
          </p>
        </div>
        {/* Tabs Section */}
        <div className="">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="relative h-auto w-full flex-col bg-transparent p-0">
              {TABS_DATA.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    '!border-border relative w-full cursor-pointer flex-col items-start rounded-none border-0 border-b !bg-transparent px-0 py-6 transition-all hover:opacity-80',
                    activeTab === tab.id && 'pb-4',
                  )}
                >
                  <div className="flex items-center justify-between gap-3 w-full">
                    <div className="flex flex-col items-start gap-1">
                      <span
                        className={cn(
                          'text-muted-foreground text-lg transition-colors',
                          activeTab === tab.id && 'text-accent-foreground',
                        )}
                      >
                        {tab.title}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {tab.description}
                      </span>
                    </div>
                    <AnimatePresence>
                      {activeTab === tab.id && (
                        <motion.div
                          key="arrow"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <ArrowRight className="size-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Animated underline */}
                  <AnimatePresence>
                    {activeTab === tab.id && (
                      <motion.div
                        key="underline"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        viewport={{ once: true, amount: 1 }}
                        className="from-chart-1 via-chart-2 to-chart-3 absolute bottom-0 left-0 h-0.5 w-1/2 origin-left translate-y-1/2 rounded-full bg-gradient-to-r"
                      />
                    )}
                  </AnimatePresence>

                  {/* Mobile code view - only show under active tab */}
                  {activeTab === tab.id && (
                    <Card className="to-muted/30 via-muted/20 mt-3 w-full overflow-hidden rounded-sm bg-gradient-to-t from-transparent p-0 lg:hidden">
                      <CardContent className="relative flex flex-col h-full w-full p-0">
                        <div className="flex items-center justify-between p-3 border-b border-border">
                          <span className="text-sm text-muted-foreground">
                            JavaScript
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleCopy}
                            className="h-8 px-2"
                          >
                            {copied ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <motion.div
                          key={tab.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-auto max-h-96"
                        >
                          <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                            customStyle={{
                              margin: 0,
                              padding: 0,
                              background: 'transparent',
                              fontSize: '0.875rem',
                            }}
                          >
                            {tab.code}
                          </SyntaxHighlighter>
                        </motion.div>
                      </CardContent>
                    </Card>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Right: Code Viewer - Desktop Only */}
      <Card className="to-muted/30 via-muted/20 hidden h-142 flex-1 overflow-hidden rounded-xl bg-gradient-to-t from-transparent p-0 lg:flex lg:flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-sm text-muted-foreground">JavaScript</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 px-2"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
        <CardContent className="relative h-full w-full p-0 overflow-auto">
          <AnimatePresence mode="wait">
            {TABS_DATA.filter((tab) => tab.id === activeTab).map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full"
              >
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    background: 'transparent',
                    height: '100%',
                    fontSize: '0.875rem',
                  }}
                  showLineNumbers
                >
                  {tab.code}
                </SyntaxHighlighter>
              </motion.div>
            ))}
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
};

export default FeaturesTabsSection;
