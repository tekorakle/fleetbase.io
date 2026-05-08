'use client';

import { Activity, ArrowRight, Check, Copy, DollarSign, MapPin, Package } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const CODE_BG_DARK = '#1e1e1e';
const CODE_HEADER_BG_DARK = '#252526';
const CODE_BG_LIGHT = '#fafafa';
const CODE_HEADER_BG_LIGHT = '#f0f0f0';

const TABS_DATA = [
  {
    id: 'quotes',
    icon: DollarSign,
    title: 'Fetch Service Quotes',
    description: 'Get real-time quotes for pickup/dropoff',
    code: `import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<Your API Key>');

const serviceQuotes = await fleetbase.serviceQuotes.query({
  pickup: '10020 2nd Ave S, Seattle, WA',
  dropoff: '101 W Olympic Pl, Seattle, WA',
  currency: 'USD',
});

if (serviceQuotes.length === 0) {
  console.log('No quotes available for this route.');
  return;
}

// Choose the cheapest option
const cheapest = serviceQuotes.reduce((prev, curr) =>
  prev.getAttribute('amount') < curr.getAttribute('amount') ? prev : curr
);

console.log(
  \`Cheapest: \${cheapest.getAttribute('service_name')} — \` +
  \`\${cheapest.getAttribute('currency')} \${cheapest.getAttribute('amount')}\`
);`,
  },
  {
    id: 'create',
    icon: Package,
    title: 'Create an Order',
    description: 'Easily create logistics orders via API',
    code: `import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<Your API Key>');

const order = await fleetbase.orders.create({
  payload: {
    pickup: '123 Main St, Seattle, WA 98101',
    dropoff: '456 Pike St, Seattle, WA 98102',
    description: 'Package delivery',
    scheduled_at: new Date('2025-06-01T14:00:00Z'),
  },
  entities: [
    {
      name: 'John Doe',
      phone: '+1234567890',
      email: 'john@example.com',
    },
  ],
});

console.log('Order created:');
console.log(\`  ID:              \${order.id}\`);
console.log(\`  Status:          \${order.getAttribute('status')}\`);
console.log(\`  Tracking Number: \${order.getAttribute('tracking_number')}\`);`,
  },
  {
    id: 'events',
    icon: Activity,
    title: 'Subscribe to Activity',
    description: 'Listen for order and driver events live',
    code: `import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<Your API Key>');

// Order status changes
fleetbase.on('order.status_changed', (event) => {
  console.log('Order updated:');
  console.log(\`  ID:         \${event.data.id}\`);
  console.log(\`  New Status: \${event.data.status}\`);
  console.log(\`  Updated At: \${event.data.updated_at}\`);
});

// Driver location updates
fleetbase.on('driver.location_updated', (event) => {
  console.log('Driver moved:');
  console.log(\`  Driver:   \${event.data.name}\`);
  console.log(\`  Location: \${event.data.latitude}, \${event.data.longitude}\`);
  console.log(\`  Speed:    \${event.data.speed} km/h\`);
});

// Order completion with proof of delivery
fleetbase.on('order.completed', (event) => {
  console.log(\`Order \${event.data.tracking_number} completed!\`);
  console.log(\`  POD: \${event.data.proof_of_delivery_url}\`);
});`,
  },
  {
    id: 'drivers',
    icon: MapPin,
    title: 'Locate Nearby Drivers',
    description: 'Search for drivers by proximity radius',
    code: `import Fleetbase from '@fleetbase/sdk';

const fleetbase = new Fleetbase('<Your API Key>');

const drivers = await fleetbase.drivers.queryNearby({
  latitude: 47.6062,
  longitude: -122.3321,
  radius: 5000,   // 5 km
  status: 'active',
  limit: 10,
});

console.log(\`Found \${drivers.length} drivers nearby:\`);

for (const driver of drivers) {
  const km = (driver.getAttribute('distance') / 1000).toFixed(2);
  const name = driver.getAttribute('name');
  const vehicle = driver.getAttribute('vehicle_type');

  console.log(\`  \${name} (\${vehicle}) — \${km} km away\`);
}

// Closest available driver
const [closest] = drivers;
if (closest) {
  console.log(\`\\nAssigning to: \${closest.getAttribute('name')}\`);
}`,
  },
];

const FeaturesTabsSection = () => {
  const [activeTab, setActiveTab] = useState('quotes');
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const codeBg = isDarkMode ? CODE_BG_DARK : CODE_BG_LIGHT;
  const headerBg = isDarkMode ? CODE_HEADER_BG_DARK : CODE_HEADER_BG_LIGHT;
  const borderColor = isDarkMode ? '#333333' : '#e5e7eb';

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
            Integrate in{' '}
            <br className="hidden lg:block" />
            Minutes, Not{' '}
            <br className="hidden lg:block" />
            Months
          </h2>
          <span className="text-xl font-bold leading-7">Fleetbase Developer Toolkit</span>
          <p className="text-muted-foreground mt-3 text-lg leading-snug">
            A fully documented REST API, JavaScript SDK, and real-time WebSocket events give your
            team everything needed to build, automate, and extend your logistics operations —
            without waiting on vendor support.
          </p>
        </div>

        {/* Tabs */}
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="relative h-auto w-full flex-col bg-transparent p-0">
              {TABS_DATA.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    '!border-border relative w-full cursor-pointer flex-col items-start rounded-none border-0 border-b !bg-transparent px-0 py-5 transition-all hover:opacity-80',
                    activeTab === tab.id && 'pb-4',
                  )}
                >
                  <div className="flex w-full items-center justify-between gap-3">
                    <div className="flex flex-col items-start gap-1">
                      <div className="flex items-center gap-2">
                        <tab.icon
                          className={cn(
                            'size-4 shrink-0 text-muted-foreground transition-colors',
                            activeTab === tab.id && 'text-accent-foreground',
                          )}
                        />
                        <span
                          className={cn(
                            'text-lg text-muted-foreground transition-colors',
                            activeTab === tab.id && 'text-accent-foreground',
                          )}
                        >
                          {tab.title}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{tab.description}</span>
                    </div>
                    <AnimatePresence>
                      {activeTab === tab.id && (
                        <motion.div
                          key="arrow"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, amount: 1 }}
                        className="from-chart-1 via-chart-2 to-chart-3 absolute bottom-0 left-0 h-0.5 w-1/2 origin-left translate-y-1/2 rounded-full bg-gradient-to-r"
                      />
                    )}
                  </AnimatePresence>

                  {/* Mobile code view */}
                  {activeTab === tab.id && (
                    <div
                      className="mt-3 w-full overflow-hidden rounded-lg border lg:hidden"
                      style={{ backgroundColor: codeBg, borderColor }}
                    >
                      <div
                        className="flex items-center justify-between border-b px-3 py-2"
                        style={{ backgroundColor: headerBg, borderColor }}
                      >
                        <span className="font-mono text-xs text-muted-foreground">JavaScript</span>
                        <Button variant="ghost" size="sm" onClick={handleCopy} className="h-7 px-2">
                          {copied ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </Button>
                      </div>
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="max-h-80 overflow-auto"
                      >
                        <SyntaxHighlighter
                          language="javascript"
                          style={isDarkMode ? vscDarkPlus : vs}
                          customStyle={{
                            margin: 0,
                            padding: '1rem',
                            background: 'transparent',
                            fontSize: '0.8rem',
                            lineHeight: '1.6',
                          }}
                        >
                          {tab.code}
                        </SyntaxHighlighter>
                      </motion.div>
                    </div>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Right: Desktop code viewer */}
      <div
        className="hidden h-[560px] overflow-hidden rounded-xl border lg:flex lg:flex-col"
        style={{ backgroundColor: codeBg, borderColor }}
      >
        {/* Header */}
        <div
          className="flex shrink-0 items-center justify-between border-b px-4 py-3"
          style={{ backgroundColor: headerBg, borderColor }}
        >
          <span className="font-mono text-sm text-muted-foreground">JavaScript</span>
          <Button variant="ghost" size="sm" onClick={handleCopy} className="h-8 px-2">
            {copied ? (
              <>
                <Check className="mr-1.5 h-3.5 w-3.5" />
                <span className="text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="mr-1.5 h-3.5 w-3.5" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </Button>
        </div>

        {/* Code area */}
        <div className="relative min-h-0 flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            {TABS_DATA.filter((tab) => tab.id === activeTab).map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <SyntaxHighlighter
                  language="javascript"
                  style={isDarkMode ? vscDarkPlus : vs}
                  customStyle={{
                    margin: 0,
                    padding: '1.25rem 1rem',
                    background: 'transparent',
                    fontSize: '0.875rem',
                    lineHeight: '1.7',
                  }}
                  showLineNumbers
                  lineNumberStyle={{
                    color: isDarkMode ? '#4a4a4a' : '#bbb',
                    paddingRight: '1.5rem',
                    minWidth: '2.5rem',
                    userSelect: 'none',
                  }}
                >
                  {tab.code}
                </SyntaxHighlighter>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTabsSection;
