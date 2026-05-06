'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Receipt, Wallet, BarChart3, RefreshCw, CreditCard, FileText } from 'lucide-react';

const features = [
 {
 icon: Receipt,
 title: 'Automated Invoicing',
 desc: 'Generate professional invoices automatically on order completion. Apply custom branding, tax rules, and payment terms.',
 },
 {
 icon: Wallet,
 title: 'Driver & Stakeholder Wallets',
 desc: 'Manage digital wallets for drivers, vendors, and partners. Track earnings, payouts, and balance history in one place.',
 },
 {
 icon: BarChart3,
 title: 'Financial Reporting',
 desc: 'Real-time P&L, revenue by route, cost-per-delivery, and cash flow dashboards — built for logistics finance teams.',
 },
 {
 icon: RefreshCw,
 title: 'Billing & Reconciliation',
 desc: 'Reconcile payments across multiple customers and service types. Reduce billing disputes with a full audit trail.',
 },
 {
 icon: CreditCard,
 title: 'Payment Gateway Integration',
 desc: 'Connect Stripe, PayPal, and regional gateways. Accept payments online and auto-reconcile against orders.',
 },
 {
 icon: FileText,
 title: 'Chart of Accounts',
 desc: 'Full double-entry accounting with a customisable chart of accounts. Export to your ERP or accounting software.',
 },
];

export default function LedgerShowcase() {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, amount: 0.2 });

 return (
 <section className="section-padding bg-gradient-to-b from-muted/20 to-background" ref={ref}>
 <div className="container mx-auto px-4">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={isInView ? { opacity: 1, y: 0 } : {}}
 transition={{ duration: 0.5 }}
 className="text-center mb-16 max-w-3xl mx-auto"
 >
 <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs mb-4">
 <span className="text-primary">●</span>
 <span>Ledger — Finance & Billing</span>
 </div>
 <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
 Close the Loop on{' '}
 <span className="text-primary">Logistics Finance</span>
 </h2>
 <p className="text-lg text-muted-foreground">
 Ledger brings financial operations directly into your logistics workflow. From automated invoicing to driver wallets and full reconciliation — manage money the same way you manage movement.
 </p>
 </motion.div>

 {/* Main content — screenshot + features */}
 <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
 {/* Screenshot */}
 <motion.div
 initial={{ opacity: 0, x: -24 }}
 animate={isInView ? { opacity: 1, x: 0 } : {}}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="relative"
 >
 <div className="relative rounded-xl border overflow-hidden shadow-2xl aspect-[4/3]">
 <Image
 src="/images/screenshots/ledger/ledger-balance-sheet.webp"
 alt="Fleetbase Ledger balance sheet showing assets, liabilities, and equity totals generated automatically from logistics operations"
 fill
 className="object-cover object-top"
 unoptimized
 />
 {/* Overlay badge */}
 <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border rounded-lg px-3 py-2 flex items-center gap-2">
 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
 <span className="text-xs font-medium">Live financial data</span>
 </div>
 </div>
 {/* Floating stat card */}
 <div className="absolute -bottom-6 -right-4 bg-card border rounded-xl shadow-lg px-4 py-3 hidden md:block">
 <div className="text-2xl font-bold text-primary">100%</div>
 <div className="text-xs text-muted-foreground">Audit trail coverage</div>
 </div>
 </motion.div>

 {/* Features grid */}
 <motion.div
 initial={{ opacity: 0, x: 24 }}
 animate={isInView ? { opacity: 1, x: 0 } : {}}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="grid grid-cols-1 sm:grid-cols-2 gap-4"
 >
 {features.map((feature, i) => (
 <motion.div
 key={feature.title}
 initial={{ opacity: 0, y: 16 }}
 animate={isInView ? { opacity: 1, y: 0 } : {}}
 transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
 className="bg-card border rounded-lg p-4 hover:border-primary/50 transition-colors"
 >
 <div className="flex items-center gap-2 mb-2">
 <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
 <feature.icon className="w-4 h-4 text-primary" />
 </div>
 <h3 className="font-semibold text-sm">{feature.title}</h3>
 </div>
 <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
 </motion.div>
 ))}
 </motion.div>
 </div>

 {/* Bottom CTA bar */}
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 animate={isInView ? { opacity: 1, y: 0 } : {}}
 transition={{ duration: 0.5, delay: 0.4 }}
 className="bg-card border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
 >
 <div>
 <h3 className="text-xl font-bold mb-1">Ready to unify your logistics finance?</h3>
 <p className="text-muted-foreground text-sm">
 Ledger is included in every Fleetbase plan. No additional cost. No separate finance tool needed.
 </p>
 </div>
 <div className="flex gap-3 flex-shrink-0">
 <Button asChild>
 <Link href="/platform/ledger">
 Explore Ledger <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 <Button variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry">Talk to Sales</Link>
 </Button>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
