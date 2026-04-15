import Link from 'next/link';
import {
 Truck,
 Utensils,
 Package,
 ShoppingCart,
 Heart,
 Recycle,
 Ship,
 Shield,
 MapPin,
 Navigation,
 ClipboardList,
 BarChart3,
 Zap,
 UserCog,
 Briefcase,
 Code,
 Users,
 ArrowRight,
} from 'lucide-react';

export const metadata = {
 title: 'Solutions',
 description: 'Explore Fleetbase solutions by industry, use case, and role — tailored to how your logistics operation actually works.',
};

const BY_INDUSTRY = [
 {
 label: 'Trucking & Haulage',
 href: '/solutions/trucking',
 description: 'Optimize long-haul routes, manage assets, and track freight in real-time.',
 icon: Truck,
 },
 {
 label: 'Food & Grocery Delivery',
 href: '/solutions/food-delivery',
 description: 'Power on-demand delivery with live tracking and temperature monitoring.',
 icon: Utensils,
 },
 {
 label: 'Courier & Parcel Services',
 href: '/solutions/courier-services',
 description: 'Automate dispatch, proof of delivery, and last-mile optimization.',
 icon: Package,
 },
 {
 label: 'E-commerce & Retail',
 href: '/solutions/ecommerce',
 description: 'Sync inventory, fulfill orders, and delight customers with fast shipping.',
 icon: ShoppingCart,
 },
 {
 label: 'Healthcare & Pharmacy',
 href: '/solutions/healthcare',
 description: 'Deliver medical supplies securely with HIPAA-compliant logistics.',
 icon: Heart,
 },
 {
 label: 'Waste & Recycling',
 href: '/solutions/waste-management',
 description: 'Optimize collection routes and manage recycling operations efficiently.',
 icon: Recycle,
 },
 {
 label: 'Container Operations',
 href: '/solutions/container-operations',
 description: 'Track containers from port to destination with real-time visibility.',
 icon: Ship,
 },
 {
 label: 'Military & Government',
 href: '/solutions/government',
 description: 'Secure logistics for defense operations and battle management systems.',
 icon: Shield,
 },
];

const BY_USE_CASE = [
 {
 label: 'Last-Mile Delivery',
 href: '/solutions/use-cases/last-mile-delivery',
 description: 'Streamline final-leg delivery with smart dispatch and real-time tracking.',
 icon: MapPin,
 },
 {
 label: 'Route Optimization',
 href: '/solutions/use-cases/route-optimization',
 description: 'Cut fuel costs and improve on-time rates with AI-powered routing.',
 icon: Navigation,
 },
 {
 label: 'Fleet Management',
 href: '/solutions/use-cases/fleet-management',
 description: 'Monitor vehicle health, utilization, and compliance from one dashboard.',
 icon: Truck,
 },
 {
 label: 'Order Management',
 href: '/solutions/use-cases/order-management',
 description: 'Configure, track, and fulfill any order type with custom workflows.',
 icon: ClipboardList,
 },
 {
 label: 'Analytics & Reporting',
 href: '/solutions/use-cases/analytics',
 description: 'Turn operational data into actionable insights with live dashboards.',
 icon: BarChart3,
 },
 {
 label: 'API & Integrations',
 href: '/solutions/use-cases/integrations',
 description: 'Connect your ERP, WMS, and third-party tools via REST APIs and webhooks.',
 icon: Zap,
 },
];

const BY_ROLE = [
 {
 label: 'Operations Managers',
 href: '/solutions/roles/operations-managers',
 description: 'Get full visibility and control over daily logistics operations.',
 icon: UserCog,
 },
 {
 label: 'Fleet Managers',
 href: '/solutions/roles/fleet-managers',
 description: 'Manage drivers, vehicles, and routes from a single command center.',
 icon: Truck,
 },
 {
 label: 'IT & Developers',
 href: '/solutions/roles/developers',
 description: 'Build, extend, and integrate Fleetbase into your existing tech stack.',
 icon: Code,
 },
 {
 label: 'Business Owners & CEOs',
 href: '/solutions/roles/executives',
 description: 'Scale logistics operations and reduce costs with a platform that grows with you.',
 icon: Briefcase,
 },
 {
 label: 'Warehouse Managers',
 href: '/solutions/roles/warehouse-managers',
 description: 'Coordinate inventory, fulfillment, and inbound/outbound flows seamlessly.',
 icon: Package,
 },
 {
 label: 'Customer Success Teams',
 href: '/solutions/roles/customer-success',
 description: 'Deliver proactive updates and reduce WISMO calls with live tracking.',
 icon: Users,
 },
];

interface SolutionCardProps {
 label: string;
 href: string;
 description: string;
 icon: React.ElementType;
}

function SolutionCard({ label, href, description, icon: Icon }: SolutionCardProps) {
 return (
 <Link
 href={href}
 className="group flex flex-col gap-3 rounded-xl border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:bg-accent/30 hover:shadow-sm"
 >
 <div className="flex items-center gap-3">
 <div className="flex size-9 items-center justify-center rounded-lg border bg-background">
 <Icon className="size-4.5 text-foreground" />
 </div>
 <span className="text-sm font-semibold leading-tight">{label}</span>
 </div>
 <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
 <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
 Learn more <ArrowRight className="size-3" />
 </div>
 </Link>
 );
}

interface SectionProps {
 title: string;
 subtitle: string;
 items: SolutionCardProps[];
}

function SolutionSection({ title, subtitle, items }: SectionProps) {
 return (
 <section className="py-14 md:py-18">
 <div className="container">
 <div className="mb-8">
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground mb-3">
 {title}
 </div>
 <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{subtitle}</h2>
 </div>
 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
 {items.map((item) => (
 <SolutionCard key={item.href} {...item} />
 ))}
 </div>
 </div>
 </section>
 );
}

export default function SolutionsPage() {
 return (
 <>
 {/* Hero */}
 <section className="border-b py-16 md:py-24">
 <div className="container">
 <div className="mx-auto max-w-3xl text-center">
 <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
 Solutions
 </div>
 <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl mb-5">
 Built for every logistics{' '}
 <span className="text-gradient">operation</span>
 </h1>
 <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
 Whether you run a fleet of two or two thousand, Fleetbase adapts to your industry, your workflows, and your team.
 </p>
 </div>
 </div>
 </section>

 {/* By Industry */}
 <SolutionSection
 title="By Industry"
 subtitle="Solutions tailored to your vertical"
 items={BY_INDUSTRY}
 />

 {/* Divider */}
 <div className="container">
 <div className="border-t" />
 </div>

 {/* By Use Case */}
 <SolutionSection
 title="By Use Case"
 subtitle="Solve specific operational challenges"
 items={BY_USE_CASE}
 />

 {/* Divider */}
 <div className="container">
 <div className="border-t" />
 </div>

 {/* By Role */}
 <SolutionSection
 title="By Role"
 subtitle="Designed for the people who run logistics"
 items={BY_ROLE}
 />

 {/* Bottom CTA */}
 <section className="py-16 md:py-20">
 <div className="container">
 <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-12 text-center md:px-16">
 <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
 <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
 </div>
 <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-3">
 Not sure where to start?
 </h2>
 <p className="text-muted-foreground mb-8 max-w-md mx-auto">
 Talk to our team and we&apos;ll map Fleetbase to your exact operation in 30 minutes.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Link
 href="https://cal.com/shivthakker/enquiry"
 className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
 >
 Talk to Sales <ArrowRight className="size-4" />
 </Link>
 <Link
 href="https://console.fleetbase.io"
 className="inline-flex items-center justify-center gap-2 rounded-md border px-6 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
 >
 Start Free Trial
 </Link>
 </div>
 </div>
 </div>
 </section>
 </>
 );
}
