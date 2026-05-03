'use client';

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Layers,
  Link2,
  Lock,
  Package,
  Receipt,
  Scale,
  TrendingUp,
  Truck,
  Users,
  Wallet,
  XCircle,
  Zap,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode, useState } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';
import { cn } from '@/lib/utils';

// ── Data ─────────────────────────────────────────────────────────────────────

const outcomes = [
  { value: 'Auto', label: 'Journal entries from every operational event' },
  { value: '100%', label: 'Immutable, double-entry audit trail' },
  { value: 'Real-time', label: 'Financial visibility across your operation' },
  { value: 'Zero', label: 'Manual reconciliation steps required' },
];

const problems = [
  {
    title: 'Manual reconciliation between operations and accounting',
    description:
      'Exporting CSVs from your TMS and importing them into your accounting software is error-prone, slow, and always one step behind. Your financial picture is never current.',
  },
  {
    title: 'No real-time visibility into operational profitability',
    description:
      'Traditional accounting systems are retrospective. By the time your books reflect what happened, the routes are done, the drivers are home, and the decisions have already been made.',
  },
  {
    title: 'Generic chart of accounts that doesn\'t fit logistics',
    description:
      'Off-the-shelf accounting tools were not built for freight revenue, driver earnings wallets, or multi-leg cost allocation. Forcing logistics data into generic structures means losing the detail you need.',
  },
];

const featureTabs = [
  {
    id: 'accounting',
    icon: BookOpen,
    title: 'Accounting Engine',
    tagline: 'Double-entry core. Immutable entries. Full audit trail.',
    description:
      'Ledger is built on a rigorous double-entry bookkeeping engine with a fully customizable Chart of Accounts. Every operational event — completed delivery, driver payout, customer payment — generates a balanced, immutable journal entry automatically. The General Ledger gives you a chronological, drillable record of every financial transaction.',
    features: [
      'Customizable Chart of Accounts (asset, liability, equity, revenue, expense)',
      'Automated, balanced journal entries for every operational event',
      'Immutable posting — corrections via reversing entries only',
      'Full General Ledger with drill-down to operational context',
      'Trial Balance generation for accuracy verification',
    ],
    image: '/images/console-screenshots/ledger-chart-of-accounts.webp',
    imageAlt: 'Ledger chart of accounts showing account hierarchy, types, and balances',
  },
  {
    id: 'invoicing',
    icon: Receipt,
    title: 'Invoicing & Billing',
    tagline: 'Auto-generated invoices. Branded templates. Full payment tracking.',
    description:
      'Generate professional invoices automatically from completed orders, contracts, or recurring schedules — and track them from draft through to settled. Customizable line items, tax rates, payment terms, and branded templates mean every client receives a polished invoice without manual effort.',
    features: [
      'Auto-generate invoices from Fleet-Ops orders on completion',
      'Recurring invoice schedules for contract clients',
      'Branded templates with custom fields and payment terms',
      'Full line-item control: quantity, unit price, tax, discounts',
      'Payment status tracking from draft to settled',
    ],
    image: '/images/console-screenshots/ledger-invoices-create.webp',
    imageAlt: 'Ledger invoice builder showing line items, tax configuration, and invoice preview',
  },
  {
    id: 'wallets',
    icon: Wallet,
    title: 'Digital Wallets',
    tagline: 'Driver earnings. Customer pre-pay. Company funds.',
    description:
      'Ledger\'s polymorphic wallet system creates dedicated digital wallets for drivers, customers, and company funds. Completed orders credit driver earnings automatically. Customers can pre-load a balance for recurring services. Every balance and transaction is recorded with full history and proper journal entries.',
    features: [
      'Driver earnings wallets — auto-credited on order completion',
      'Bulk driver payout review, approval, and settlement',
      'Customer pre-pay wallets with top-up and transfer support',
      'Company operating wallets for internal funds management',
      'All balances stored in smallest currency unit for precision',
    ],
    image: '/images/console-screenshots/ledger-transactions.webp',
    imageAlt: 'Ledger wallet dashboard showing driver balances, transaction history, and transfer controls',
  },
  {
    id: 'reporting',
    icon: BarChart3,
    title: 'Financial Reports',
    tagline: 'Balance Sheet. P&L. Cash Flow. All in real time.',
    description:
      'Stop waiting for month-end. Ledger generates all core financial statements — Balance Sheet, Income Statement, Cash Flow, A/R Aging, Trial Balance — in real time. Every report reflects the current state of your books, so you can make decisions based on what\'s actually happening.',
    features: [
      'Balance Sheet: assets, liabilities, and equity snapshot',
      'Income Statement (P&L): revenue, costs, and net profit by period',
      'Cash Flow Statement: movement of cash in and out',
      'A/R Aging Report: identify overdue invoices proactively',
      'Wallet Summary: consolidated balance and movement view',
    ],
    image: '/images/console-screenshots/ledger-dashboard-detail.webp',
    imageAlt: 'Ledger financial dashboard showing income statement, revenue breakdown, and report export',
  },
  {
    id: 'gateways',
    icon: CreditCard,
    title: 'Payment Gateways',
    tagline: 'Stripe built-in. Sandbox mode. Real-time webhook events.',
    description:
      'Connect payment gateways and manage all configurations from a single secure interface. Test safely in sandbox before going live. Receive real-time webhook notifications for payments, failures, and disputes. The extensible driver architecture lets your team add any custom gateway for local market requirements.',
    features: [
      'Stripe integration out of the box',
      'Sandbox and live environment switching',
      'Encrypted credential storage at rest',
      'Real-time webhook event log for payments, failures, disputes',
      'Extensible gateway driver interface for custom providers',
    ],
    image: '/images/console-screenshots/ledger-gateways.webp',
    imageAlt: 'Ledger payment gateway configuration showing Stripe setup and sandbox toggle',
  },
];

const modules = [
  {
    icon: BookOpen,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    dot: 'bg-blue-500',
    name: 'Accounting',
    description:
      'A rigorous double-entry engine with a customizable Chart of Accounts, automated journal entries, and a fully drillable General Ledger — purpose-built for logistics finance.',
    capabilities: ['Chart of Accounts', 'Journal entries', 'General Ledger', 'Trial Balance'],
  },
  {
    icon: Receipt,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    dot: 'bg-violet-500',
    name: 'Invoicing',
    description:
      'Auto-generate and track professional invoices from completed orders or recurring schedules. Branded templates, line-item control, and full payment status tracking.',
    capabilities: ['Auto-generation', 'Branded templates', 'Line items & tax', 'Payment tracking'],
  },
  {
    icon: Wallet,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    dot: 'bg-amber-500',
    name: 'Wallets',
    description:
      'Polymorphic digital wallets for drivers, customers, and company funds. Earnings auto-credited on order completion, with bulk payout settlement and full transaction history.',
    capabilities: ['Driver earnings', 'Customer pre-pay', 'Company funds', 'Bulk settlement'],
  },
  {
    icon: BarChart3,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    dot: 'bg-emerald-500',
    name: 'Reports',
    description:
      'Real-time Balance Sheet, Income Statement, Cash Flow, A/R Aging, and Wallet Summary — generated on demand from your live operational and financial data.',
    capabilities: ['Balance Sheet', 'Income Statement', 'Cash Flow', 'A/R Aging'],
  },
  {
    icon: CreditCard,
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    dot: 'bg-pink-500',
    name: 'Gateways',
    description:
      'Connect payment gateways with sandbox/live mode, real-time webhook events, and an extensible driver architecture for any custom provider.',
    capabilities: ['Stripe built-in', 'Sandbox mode', 'Webhook events', 'Custom drivers'],
  },
];

const accountingFeatures = [
  {
    icon: Layers,
    title: 'Customizable Chart of Accounts',
    description:
      'Create and manage asset, liability, equity, revenue, and expense accounts that precisely reflect your logistics business — freight revenue, driver wages, fuel costs, and more.',
  },
  {
    icon: Zap,
    title: 'Automated Journal Entries',
    description:
      'Every operational event generates a balanced journal entry automatically. Revenue from completed orders, driver payouts, and customer transactions — all recorded without manual steps.',
  },
  {
    icon: Lock,
    title: 'Immutable Audit Trail',
    description:
      'Posted journal entries cannot be altered. Corrections are made via proper reversing entries, ensuring a tamper-proof financial trail that meets the highest accounting standards.',
  },
  {
    icon: BookOpen,
    title: 'General Ledger',
    description:
      'A chronological record of every financial transaction. Drill down into any entry to see the operational context — the order, driver, or customer behind each number.',
  },
];

const invoicingFeatures = [
  {
    icon: Receipt,
    title: 'Auto Invoice Generation',
    description:
      'Create invoices automatically when Fleet-Ops orders are completed, when contracts reach billing milestones, or on a recurring schedule. Eliminate manual billing entirely.',
  },
  {
    icon: FileText,
    title: 'Branded Templates',
    description:
      'Design professional invoice templates with your branding, payment terms, and custom fields. Every client receives a polished invoice that reflects your business.',
  },
  {
    icon: DollarSign,
    title: 'Line Item & Tax Control',
    description:
      'Full control over line items including quantity, unit price, discount, and tax rate per line. Track payment status from draft through partial payment to fully settled.',
  },
  {
    icon: Clock,
    title: 'A/R Management',
    description:
      'Identify overdue invoices with the A/R Aging report. Send payment reminders and manage collections without leaving your operations platform.',
  },
];

const walletFeatures = [
  {
    icon: Users,
    title: 'Driver Earnings Wallets',
    description:
      'Every driver gets a dedicated earnings wallet. Completed orders automatically credit their balance. Review, approve, and settle payouts in bulk with a full audit trail.',
  },
  {
    icon: DollarSign,
    title: 'Customer Pre-Pay Wallets',
    description:
      'Allow customers to top up a pre-paid balance for recurring services. Supports top-ups, transfers, and frozen wallet states — with every movement recorded properly.',
  },
  {
    icon: Building2,
    title: 'Company Operating Wallets',
    description:
      'Manage company-level funds for operational payouts and internal transfers. All balances stored in the smallest currency unit for precision, with full transaction history.',
  },
  {
    icon: TrendingUp,
    title: 'Wallet Summary Reporting',
    description:
      'Consolidated view of all wallet balances and movement across drivers, customers, and company accounts — available in real time from the reporting dashboard.',
  },
];

const useCases = [
  {
    icon: Truck,
    title: 'Last-Mile Delivery',
    description: 'Automate driver payouts, reconcile cash-on-delivery collections, and track route profitability in real time.',
  },
  {
    icon: Package,
    title: '3PL & 4PL Providers',
    description: 'Manage complex client billing, automate multi-client invoicing, and generate per-client P&L reports.',
  },
  {
    icon: Link2,
    title: 'Freight Brokerage',
    description: 'Track carrier payments, client invoices, and agent commissions. Ensure every load is profitable and fully accounted for.',
  },
  {
    icon: DollarSign,
    title: 'E-commerce & Retail',
    description: 'Reconcile payments from multiple sales channels and manage the cost of goods sold for every order shipped.',
  },
  {
    icon: Wallet,
    title: 'On-Demand Services',
    description: 'Manage customer pre-pay wallets, automate service billing, and track platform financial performance in real time.',
  },
  {
    icon: Scale,
    title: 'Field Service',
    description: 'Invoice clients on job completion, track parts and labour costs per job, and manage technician commissions and expenses.',
  },
  {
    icon: TrendingUp,
    title: 'Cross-Border Logistics',
    description: 'Handle multi-currency transactions with exchange rate tracking and settled currency recording for international operations.',
  },
  {
    icon: BarChart3,
    title: 'Warehousing & Distribution',
    description: 'Integrate with Pallet to automatically record storage fees, inbound receiving costs, and outbound fulfillment revenue.',
  },
];

const faqs = [
  {
    q: 'Is Ledger a full accounting system like QuickBooks or Xero?',
    a: 'Ledger is a powerful, double-entry bookkeeping engine purpose-built for logistics operations. It is not a replacement for a full-featured accounting ERP for payroll or tax filing. Instead, it serves as the definitive financial source of truth for your operations — automating the recording of every transaction — which can then be synced or exported to your primary accounting software.',
  },
  {
    q: 'Can I customize the Chart of Accounts?',
    a: 'Yes, the Chart of Accounts is fully customizable. You can create and manage asset, liability, equity, revenue, and expense accounts that precisely reflect your logistics business structure, from fuel costs and driver wages to freight revenue and client retainers.',
  },
  {
    q: 'How does Ledger integrate with Fleet-Ops and Storefront?',
    a: 'Ledger is a native Fleetbase extension that connects directly to your operational data. When a Fleet-Ops order is completed, Ledger can automatically generate the corresponding revenue journal entry and invoice. When a Storefront payment is processed, Ledger records the transaction against the customer wallet. No manual data entry required.',
  },
  {
    q: 'How does Ledger ensure financial data integrity?',
    a: 'All financial transactions are recorded as immutable, double-entry journal entries. Once a journal entry is posted, it cannot be altered — only corrected with a new, reversing entry. This ensures a fully auditable, tamper-proof financial trail that meets the highest accounting standards.',
  },
  {
    q: 'Can I manage driver payouts through Ledger?',
    a: 'Yes. Ledger includes a polymorphic digital wallet system where each driver has their own earnings wallet. As orders are completed, earnings are credited automatically. You can then review, approve, and settle driver balances in bulk, with every payout recorded as a proper financial transaction.',
  },
  {
    q: 'What payment gateways are supported?',
    a: 'Ledger has built-in support for Stripe, with additional gateway drivers being added continuously. The gateway architecture is fully extensible, allowing your development team to implement any custom payment provider using our driver interface.',
  },
  {
    q: 'What financial reports does Ledger generate?',
    a: 'Ledger generates all core financial statements including Balance Sheets, Income Statements (P&L), and Cash Flow Statements. It also produces operational reports such as Accounts Receivable (A/R) Aging, Trial Balances, and Wallet Summaries — giving you both the financial and operational picture in one place.',
  },
  {
    q: 'Is Ledger open source?',
    a: 'Yes. Ledger is an open-source Fleetbase extension available on GitHub. You can self-host it, inspect the full source code, contribute to its development, and customize it to your exact requirements.',
  },
];

// ── Shared Components ─────────────────────────────────────────────────────────

function BrowserFrame({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('overflow-hidden rounded-xl border shadow-lg', className)}>
      <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="ml-2 text-xs text-muted-foreground">{label}</span>
      </div>
      {children}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LedgerPageContent() {
  const [activeTab, setActiveTab] = useState('accounting');
  const active = featureTabs.find((t) => t.id === activeTab) ?? featureTabs[0];

  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-chart-1/[0.12] blur-[120px]" />
          <div className="absolute top-1/3 -right-24 h-[500px] w-[500px] rounded-full bg-chart-3/[0.08] blur-3xl" />
          <div className="absolute top-1/2 -left-24 h-[400px] w-[400px] rounded-full bg-chart-2/[0.07] blur-3xl" />
        </div>
        <div className="container space-y-12">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Ledger · Logistics Finance & Accounting
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              The Financial Ledger for{' '}
              <span className="text-gradient">Modern Logistics</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-snug text-muted-foreground md:text-xl">
              Stop manually reconciling operational data with your books. Ledger is a
              developer-first, double-entry accounting engine that turns every delivery, driver
              payment, and customer transaction into an immutable financial record — automatically.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Start Free Trial <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="https://github.com/fleetbase/ledger" target="_blank" rel="noopener noreferrer">
                  Explore the Code
                </a>
              </Button>
            </div>
          </div>

          {/* Outcome stats */}
          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px' }}
          >
            {outcomes.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 bg-card px-6 py-8 text-center"
              >
                <span className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Hero screenshot */}
          <BrowserFrame label="Ledger — Financial Dashboard" className="shadow-2xl">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/console-screenshots/ledger-dashboard.webp"
                alt="Ledger financial dashboard showing accounting overview, transaction ledger, and financial reporting for logistics operations"
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority
              />
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* ── Problem ───────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="flex flex-col justify-center gap-5 lg:col-span-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                The Problem
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
                Your Operations and Finances Shouldn't Live in Separate Systems
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Most logistics businesses run their operations in one platform and their finances in
                another. The result is a constant, expensive battle to reconcile the two.
              </p>
            </div>
            <div className="divide-y lg:col-span-3">
              {problems.map((problem, i) => (
                <div key={i} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-destructive/10">
                    <XCircle className="size-4 text-destructive" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-accent-foreground">{problem.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Feature Tabs ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Core Capabilities
            </div>
            <h2 className="max-w-3xl text-4xxl leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Every Financial Workflow{' '}
              <span className="text-gradient">Your Operation Needs</span>
            </h2>
            <p className="max-w-2xl text-lg leading-snug text-muted-foreground">
              From the first delivery to month-end close — Ledger automates the financial record
              keeping so your team can focus on operations, not spreadsheets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Tab nav */}
            <div className="flex flex-col lg:col-span-2">
              {featureTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      'relative flex items-start gap-4 border-b py-5 text-left transition-all',
                      isActive ? 'opacity-100' : 'opacity-45 hover:opacity-70',
                    )}
                  >
                    <div
                      className={cn(
                        'flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors',
                        isActive
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'bg-gradient-to-br from-muted/30 via-muted/10 to-card',
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <span
                        className={cn(
                          'text-base font-semibold leading-tight transition-colors',
                          isActive ? 'text-accent-foreground' : 'text-muted-foreground',
                        )}
                      >
                        {tab.title}
                      </span>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-sm leading-snug text-muted-foreground"
                        >
                          {tab.tagline}
                        </motion.span>
                      )}
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="ledger-page-tab-indicator"
                        className="absolute bottom-0 left-0 h-0.5 w-1/3 origin-left rounded-full bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6"
                >
                  <Card className="dark:to-muted/30 dark:via-muted/10 to-background via-card from-card overflow-hidden bg-gradient-to-br dark:from-transparent p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={active.image}
                        alt={active.imageAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </Card>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {active.description}
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {active.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <div className="size-1.5 shrink-0 rounded-full bg-chart-2" />
                        <span className="text-muted-foreground">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Five Modules ──────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              Five Modules. One Financial Platform.
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Built Around{' '}
              <span className="text-gradient">How Logistics Finance Works</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Ledger is organized into five purpose-built modules — each covering a distinct domain
              of logistics finance. Use them all from day one, or activate them as your operation
              grows.
            </p>
          </div>

          <div
            className="grid grid-cols-1 overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-5"
            style={{ gap: '1px' }}
          >
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.name} className="flex flex-col gap-4 bg-card p-6">
                  <div
                    className={cn(
                      'flex size-10 items-center justify-center rounded-lg',
                      mod.bg,
                    )}
                  >
                    <Icon className={cn('size-5', mod.color)} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-accent-foreground">{mod.name}</h3>
                    <p className="text-xs leading-snug text-muted-foreground">{mod.description}</p>
                  </div>
                  <ul className="mt-auto space-y-1.5">
                    {mod.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2">
                        <div className={cn('size-1.5 shrink-0 rounded-full', mod.dot)} />
                        <span className="text-xs text-muted-foreground">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Accounting Engine ─────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Accounting Engine
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              A Double-Entry Core Built for{' '}
              <span className="text-gradient">Logistics Reality</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Rigorous accounting principles — immutable journal entries, customizable accounts,
              and a complete audit trail — purpose-built for the financial complexity of freight,
              delivery, and fleet operations.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: feature list */}
            <div className="divide-y lg:col-span-2">
              {accountingFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/30">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-accent-foreground">{feature.title}</h4>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: screenshots */}
            <div className="flex flex-col gap-5 lg:col-span-3">
              <BrowserFrame label="Ledger — Chart of Accounts">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/console-screenshots/ledger-chart-of-accounts.webp"
                    alt="Ledger chart of accounts management showing account hierarchy, types, and balances for a logistics business"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
              <BrowserFrame label="Ledger — Transaction Ledger">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src="/images/console-screenshots/ledger-transactions.webp"
                    alt="Ledger transaction log showing journal entries with operational context, account codes, and debit/credit balances"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ── Invoicing ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-400">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Invoicing & Billing
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Professional Invoicing That{' '}
              <span className="text-gradient">Runs on Autopilot</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Generate, send, and track invoices automatically from completed orders or on a
              recurring schedule. Get paid faster with less effort.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: screenshots */}
            <div className="flex flex-col gap-5 lg:col-span-3">
              <BrowserFrame label="Ledger — Invoice Builder">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/console-screenshots/ledger-invoices-create.webp"
                    alt="Ledger invoice builder showing line items, tax configuration, and client details"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
              <BrowserFrame label="Ledger — Invoice Templates">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src="/images/console-screenshots/ledger-invoice-templates.webp"
                    alt="Ledger invoice template editor with branded design options and custom field configuration"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
            </div>

            {/* Right: feature list */}
            <div className="divide-y lg:col-span-2">
              {invoicingFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/30">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-accent-foreground">{feature.title}</h4>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Wallets ───────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Digital Wallets & Payouts
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Automate Driver Payouts and{' '}
              <span className="text-gradient">Customer Payments</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              A polymorphic wallet system creates dedicated digital wallets for drivers, customers,
              and company funds. Earnings are credited automatically as work is completed.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: screenshot */}
            <div className="lg:col-span-3">
              <BrowserFrame label="Ledger — Wallets & Transactions">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/console-screenshots/ledger-transactions.webp"
                    alt="Ledger wallet management showing driver wallet balances, transaction history, and transfer controls"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
            </div>

            {/* Right: feature list */}
            <div className="divide-y lg:col-span-2">
              {walletFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted/30">
                      <Icon className="size-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-semibold text-accent-foreground">{feature.title}</h4>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Financial Reporting ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Financial Reporting
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Real-Time Financial Statements,{' '}
              <span className="text-gradient">On Demand</span>
            </h2>
            <p className="text-lg leading-snug text-muted-foreground lg:text-xl">
              Stop waiting for month-end reports. Ledger generates all core financial statements in
              real time — Balance Sheet, Income Statement, Cash Flow, A/R Aging, and more.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: report cards */}
            <div className="lg:col-span-2">
              <div
                className="overflow-hidden rounded-xl border bg-border"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px' }}
              >
                {[
                  { icon: BarChart3, label: 'Balance Sheet', desc: 'Real-time assets, liabilities & equity' },
                  { icon: TrendingUp, label: 'Income Statement', desc: 'Revenue, costs & net profit by period' },
                  { icon: DollarSign, label: 'Cash Flow', desc: 'Cash movement in and out of the business' },
                  { icon: Clock, label: 'A/R Aging', desc: 'Identify and manage overdue invoices' },
                  { icon: Scale, label: 'Trial Balance', desc: 'Verify ledger accuracy with debit/credit summary' },
                  { icon: Wallet, label: 'Wallet Summary', desc: 'Consolidated balance and movement view' },
                ].map((report) => {
                  const Icon = report.icon;
                  return (
                    <div key={report.label} className="flex flex-col gap-2 bg-card p-4">
                      <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <p className="text-xs font-semibold text-accent-foreground">{report.label}</p>
                      <p className="text-xs leading-snug text-muted-foreground">{report.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: screenshots */}
            <div className="flex flex-col gap-5 lg:col-span-3">
              <BrowserFrame label="Ledger — Financial Dashboard">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/console-screenshots/ledger-dashboard-detail.webp"
                    alt="Ledger financial dashboard showing income statement, revenue breakdown by period, and report navigation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
              <BrowserFrame label="Ledger — A/R Aging Report">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src="/images/console-screenshots/ledger-ar-aging.webp"
                    alt="Ledger accounts receivable aging report showing overdue invoices by age bucket and client"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ── Developer / API ───────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Open Source & API-First
                </div>
                <h2 className="text-4xxl leading-tight tracking-tight text-balance md:text-5xl">
                  Automate Any Financial{' '}
                  <span className="text-gradient">Workflow via API</span>
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  Use our clean, consistent REST API to integrate Ledger into any application or
                  workflow. Manage accounts, create invoices, process payments, and receive
                  real-time events — all programmatically.
                </p>
              </div>
              <div className="divide-y">
                {[
                  'Full REST API for accounts, journals, invoices, wallets, and transactions',
                  'Event webhooks for payment events, invoice status, and wallet transactions',
                  'Open-source codebase — inspect, fork, self-host, or contribute',
                  'Modular extension — install alongside Fleet-Ops, Storefront, or Pallet',
                  'No per-transaction fees — usage-based plan pricing only',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="/docs/ledger">View API Docs</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/fleetbase/ledger"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <CodeBlock
              label="Ledger API — Create Invoice"
              language="javascript"
              code={`// POST /api/v1/ledger/invoices

{
  "customer_uuid": "contact_abc123",
  "due_date": "2026-05-31",
  "line_items": [
    {
      "description": "Freight Services — April 2026",
      "quantity": 1,
      "unit_price": 250000,
      "tax_rate": 10.00
    },
    {
      "description": "Fuel Surcharge",
      "quantity": 1,
      "unit_price": 15000,
      "tax_rate": 10.00
    }
  ]
}

// Response
{
  "id": "invoice_xk92jd",
  "status": "draft",
  "total": 289500,
  "currency": "USD"
}`}
            />
          </div>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              Industry Use Cases
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
              The Financial Engine for Every Logistics Model
            </h2>
            <p className="text-lg leading-snug text-muted-foreground">
              Ledger handles the financial complexity of any logistics operation — from last-mile
              delivery to enterprise freight brokerage.
            </p>
          </div>
          <div
            className="overflow-hidden rounded-xl border bg-border"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px' }}
          >
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <div key={useCase.title} className="flex items-start gap-4 bg-card p-5">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-semibold text-accent-foreground">{useCase.title}</h3>
                    <p className="text-xs leading-snug text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                FAQ
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about Ledger and how it fits into your financial operations.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-lg border bg-card px-6"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-card px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-chart-1/[0.12] blur-3xl" />
              <div className="absolute -bottom-1/2 right-1/4 h-72 w-72 rounded-full bg-chart-3/[0.08] blur-3xl" />
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                Start Today
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
                Take Control of Your{' '}
                <span className="text-gradient">Logistics Finances.</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
                Start your free trial and explore the full power of Ledger. Connect your operations
                to your finances and get a real-time view of your business health.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/pricing">
                    Start Free Trial <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://cal.com/shivthakker/enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Talk to a Specialist
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Free 7-day trial · Free to self-host under AGPL
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
