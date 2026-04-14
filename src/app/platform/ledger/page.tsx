'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';



const faqs = [
  {
    q: 'Is Ledger a full accounting system like QuickBooks or Xero?',
    a: 'Ledger is a powerful, double-entry bookkeeping engine purpose-built for logistics operations. It is not a replacement for a full-fledged accounting ERP for payroll or tax filing. Instead, it serves as the definitive financial source of truth for your operations — automating the recording of every transaction — which can then be synced or exported to your primary accounting software.',
  },
  {
    q: 'Can I customize the Chart of Accounts?',
    a: 'Yes, the Chart of Accounts is fully customizable. You can create and manage asset, liability, equity, revenue, and expense accounts that precisely reflect your logistics business structure, from fuel costs and driver wages to freight revenue and client retainers.',
  },
  {
    q: 'What payment gateways are supported?',
    a: 'Ledger has built-in support for Stripe, with additional gateway drivers being added continuously. The gateway architecture is fully extensible, allowing your development team to implement any custom payment provider using our driver interface.',
  },
  {
    q: 'How does Ledger ensure financial data integrity?',
    a: 'All financial transactions are recorded as immutable, double-entry journal entries. Once a journal entry is posted, it cannot be altered — only corrected with a new, reversing entry. This ensures a fully auditable, tamper-proof financial trail that meets the highest accounting standards.',
  },
  {
    q: 'How does Ledger integrate with FleetOps and Storefront?',
    a: 'Ledger is a native Fleetbase extension that connects directly to your operational data. When a FleetOps order is completed, Ledger can automatically generate the corresponding revenue journal entry and invoice. When a Storefront payment is processed, Ledger records the transaction against the customer wallet. No manual data entry required.',
  },
  {
    q: 'Can I manage driver payouts through Ledger?',
    a: 'Yes. Ledger includes a polymorphic digital wallet system where each driver has their own earnings wallet. As orders are completed, earnings are credited automatically. You can then review, approve, and settle driver balances in bulk, with every payout recorded as a proper financial transaction.',
  },
  {
    q: 'Is Ledger open source?',
    a: 'Yes. Ledger is an open-source Fleetbase extension available on GitHub. You can self-host it, inspect the full source code, contribute to its development, and customize it to your exact requirements.',
  },
  {
    q: 'What financial reports does Ledger generate?',
    a: 'Ledger generates all core financial statements including Balance Sheets, Income Statements (P&L), and Cash Flow Statements. It also produces operational reports such as Accounts Receivable (A/R) Aging, Trial Balances, and Wallet Summaries — giving you both the financial and operational picture in one place.',
  },
];

export default function LedgerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Ledger</span>
              <span className="px-3">Logistics Finance & Accounting</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              The Financial Ledger for{' '}
              <span className="text-gradient">Modern Logistics</span>
            </h1>

            {/* Description */}
            <p className="text-foreground/90 leading-snug md:text-lg lg:text-xl dark:text-foreground/95 max-w-3xl">
              Stop manually reconciling operational data with your books. Ledger is a developer-first, double-entry accounting engine that turns every delivery, driver payment, and customer transaction into an immutable, auditable financial record — automatically.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center mt-4">
              <Link href="/pricing">
                <Button size="lg">Start 7-Day Free Trial</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Book a Demo</Button>
              </Link>
              <Link href="https://github.com/fleetbase/ledger" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost">Explore the Code</Button>
              </Link>
            </div>

            {/* Hero Screenshot */}
            <div className="w-full mt-12 rounded-lg border overflow-hidden shadow-2xl relative aspect-video">
              <Image
                src="/images/console-screenshots/ledger-dashboard-detail.webp"
                alt="Fleetbase Ledger financial management dashboard showing accounting overview, transaction ledger, and financial reporting for logistics operations"
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
              Is Your Financial Data Disconnected from Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most logistics businesses run their operations in one system and their finances in another. The result is a constant, expensive battle to reconcile the two — and the financial picture is always one step behind reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">📋</div>
                  <p className="text-xs text-muted-foreground">Manual CSV exports and imports</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Manual Reconciliation Hell</h3>
              <p className="text-muted-foreground">
                Wasting hours exporting CSVs from your TMS and importing them into your accounting software? Manual data entry creates costly errors, delayed financial closing, and no real-time visibility into your profitability.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">⏱️</div>
                  <p className="text-xs text-muted-foreground">Always looking at yesterday's numbers</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">No Real-Time Financial Visibility</h3>
              <p className="text-muted-foreground">
                Can you see the real-time profitability of a route while it's still in progress? Traditional accounting systems are retrospective, forcing you to make critical business decisions based on data that is days or weeks out of date.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🔒</div>
                  <p className="text-xs text-muted-foreground">Generic COA doesn't fit logistics</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inflexible Chart of Accounts</h3>
              <p className="text-muted-foreground">
                Your logistics business has unique revenue streams, cost centres, and financial relationships. Forcing them into a generic accounting structure means you can never track what truly matters to your bottom line.
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
              A Single Source of Truth for Every Logistics Transaction
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ledger bridges the gap between your operations and your finances. It is a native Fleetbase extension that automatically converts every operational event into a precise, double-entry financial record.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">⚖️</div>
                  <p className="text-xs text-muted-foreground">Balanced, immutable journal entries</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Rock-Solid Double-Entry Core</h3>
              <p className="text-muted-foreground">
                Built on immutable, double-entry bookkeeping principles. Every financial event is automatically recorded as a balanced journal entry, ensuring your books are always accurate, auditable, and compliant.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🔗</div>
                  <p className="text-xs text-muted-foreground">Native connection to FleetOps & Storefront</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Natively Integrated with Operations</h3>
              <p className="text-muted-foreground">
                Ledger is not a separate system bolted on. It connects natively to FleetOps, Pallet, and Storefront to automate financial entries the moment an operational event occurs — no manual steps required.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <div className="w-full h-48 rounded-lg bg-muted/30 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🔌</div>
                  <p className="text-xs text-muted-foreground">Powerful REST API for any integration</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Developer-First & Extensible</h3>
              <p className="text-muted-foreground">
                Use our powerful REST API to manage accounts, create invoices, process payments, and build custom financial workflows. Connect any third-party accounting system or ERP with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1: Core Accounting Engine */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Core Accounting Engine</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Complete Accounting Engine Built for Logistics
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ledger provides a full-featured, double-entry accounting core with a customizable Chart of Accounts, automated journal entries, and a complete General Ledger — all purpose-built for the complexities of logistics finance.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📂</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Customizable Chart of Accounts</h4>
                    <p className="text-sm text-muted-foreground">Create and manage asset, liability, equity, revenue, and expense accounts that precisely reflect your logistics business structure.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Automated Journal Entries</h4>
                    <p className="text-sm text-muted-foreground">System-generated, balanced journal entries for every operational transaction. Revenue recognition, driver payments, and costs — all automated and immutable.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete General Ledger</h4>
                    <p className="text-sm text-muted-foreground">A chronological record of every financial transaction. Drill down into any entry to see the full operational context — the order, driver, or customer behind each number.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] rounded-lg border overflow-hidden shadow-lg relative">
            <Image
                src="/images/console-screenshots/ledger-dashboard-detail.webp"
                alt="Fleetbase Ledger chart of accounts management showing account types, balances, and hierarchical account structure"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Invoicing & Billing */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[500px] rounded-lg border overflow-hidden shadow-lg relative">
            <Image
                src="/images/console-screenshots/ledger-invoices-create.webp"
                alt="Fleetbase Ledger invoice builder showing template editor with line items, tax configuration, and branded invoice preview"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>

            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Invoicing & Billing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional Invoicing That Runs on Autopilot
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Generate, send, and track invoices automatically from completed orders or on a recurring schedule. Customizable templates, line-item control, and full payment tracking mean you get paid faster with less effort.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Automated Invoice Generation</h4>
                    <p className="text-sm text-muted-foreground">Create invoices automatically from completed orders, contracts, or on a recurring schedule. Eliminate manual billing work entirely.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Branded Invoice Templates</h4>
                    <p className="text-sm text-muted-foreground">Design professional invoice templates with your own branding, payment terms, and custom fields. Deliver a polished experience to every client.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Line Item & Tax Control</h4>
                    <p className="text-sm text-muted-foreground">Full control over invoice line items including quantity, unit price, tax rates, and discounts. Track payment status from draft to settled.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Digital Wallets */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Digital Wallets & Payouts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Automate Driver Payouts and Customer Payments
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ledger's polymorphic wallet system creates dedicated digital wallets for drivers, customers, and company funds. Earnings are credited automatically as work is completed, and settlements are processed with a single action.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Driver Earnings Wallets</h4>
                    <p className="text-sm text-muted-foreground">Every driver has a dedicated earnings wallet. Completed orders automatically credit their balance. Review, approve, and settle driver payouts in bulk with full audit trails.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">💳</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Customer Pre-Pay Wallets</h4>
                    <p className="text-sm text-muted-foreground">Allow customers to top up a pre-paid wallet to streamline the payment process for recurring services. Supports top-ups, transfers, and frozen wallet states.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🏦</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Company Operating Wallets</h4>
                    <p className="text-sm text-muted-foreground">Manage company-level funds for operational payouts and internal transfers. All balances are stored in the smallest currency unit for precision, with full transaction history.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] rounded-lg border overflow-hidden shadow-lg relative">
            <Image
                src="/images/console-screenshots/ledger-transactions.webp"
                alt="Fleetbase Ledger wallet management showing driver wallet balances, transaction history, top-up controls, and transfer actions"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
          </div>
        </div>
      </section>

      {/* Feature Section 4: Payment Gateways */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-[500px] rounded-lg border overflow-hidden shadow-lg relative">
            <Image
                src="/images/console-screenshots/developers-api-keys.webp"
                alt="Fleetbase Ledger payment gateway configuration showing Stripe integration setup, sandbox toggle, and webhook endpoint configuration"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>

            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Payment Gateways</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Accept Payments Through Any Gateway, Anywhere
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect to popular payment gateways and manage all your payment configurations from a single, secure interface. Test safely in sandbox mode before going live, and receive real-time webhook notifications for every payment event.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Multi-Gateway Support</h4>
                    <p className="text-sm text-muted-foreground">Connect to Stripe and other popular payment providers. The extensible driver architecture allows your team to add any custom gateway to meet local market requirements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sandbox & Live Environments</h4>
                    <p className="text-sm text-muted-foreground">Safely test your entire payment integration in a dedicated sandbox environment before going live. Credentials are stored encrypted at rest for maximum security.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🔔</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Webhook Events</h4>
                    <p className="text-sm text-muted-foreground">Receive instant notifications for successful payments, failures, and disputes directly from your gateway. View the full webhook event log for debugging and auditing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 5: Financial Reporting */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
                <span className="text-primary">●</span>
                <span className="ml-2">Financial Reporting</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real-Time Financial Statements, On Demand
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop waiting for month-end reports. Ledger generates all core financial statements and operational reports in real time, giving you an always-current picture of your company's financial health.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border rounded-lg p-4">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-semibold text-sm mb-1">Balance Sheet</h4>
                  <p className="text-xs text-muted-foreground">A real-time snapshot of assets, liabilities, and equity.</p>
                </div>
                <div className="bg-card border rounded-lg p-4">
                  <div className="text-2xl mb-2">📈</div>
                  <h4 className="font-semibold text-sm mb-1">Income Statement</h4>
                  <p className="text-xs text-muted-foreground">Revenue, costs, and net profit for any period.</p>
                </div>
                <div className="bg-card border rounded-lg p-4">
                  <div className="text-2xl mb-2">💧</div>
                  <h4 className="font-semibold text-sm mb-1">Cash Flow Statement</h4>
                  <p className="text-xs text-muted-foreground">Track the movement of cash in and out of your business.</p>
                </div>
                <div className="bg-card border rounded-lg p-4">
                  <div className="text-2xl mb-2">⏳</div>
                  <h4 className="font-semibold text-sm mb-1">A/R Aging Report</h4>
                  <p className="text-xs text-muted-foreground">Identify overdue invoices and manage collections proactively.</p>
                </div>
                <div className="bg-card border rounded-lg p-4">
                  <div className="text-2xl mb-2">⚖️</div>
                  <h4 className="font-semibold text-sm mb-1">Trial Balance</h4>
                  <p className="text-xs text-muted-foreground">Verify the accuracy of your ledger with a full debit/credit summary.</p>
                </div>
                <div className="bg-card border rounded-lg p-4">
                  <div className="text-2xl mb-2">👛</div>
                  <h4 className="font-semibold text-sm mb-1">Wallet Summary</h4>
                  <p className="text-xs text-muted-foreground">Consolidated view of all wallet balances and movement.</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[500px] rounded-lg border overflow-hidden shadow-lg relative">
            <Image
                src="/images/console-screenshots/ledger-dashboard-detail.webp"
                alt="Fleetbase Ledger financial reports dashboard showing income statement, revenue breakdown by period, and export options"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs mb-4">
              <span className="text-primary">●</span>
              <span className="ml-2">Developer Platform</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Developers: Automate Any Financial Workflow
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Use our clean, consistent REST API to integrate Ledger into any application or workflow. Manage accounts, create invoices, process payments, and receive real-time events — all programmatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">🔌</div>
              <h4 className="font-semibold mb-2">RESTful API</h4>
              <p className="text-sm text-muted-foreground">
                Full programmatic access to accounts, journals, invoices, wallets, and transactions via a clean, versioned API.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-semibold mb-2">Event Webhooks</h4>
              <p className="text-sm text-muted-foreground">
                Get real-time notifications for payment events, invoice status changes, and wallet transactions.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2">Open Source</h4>
              <p className="text-sm text-muted-foreground">
                Inspect the full codebase, self-host, contribute to the project, and customize anything you need.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-3xl mb-3">🧩</div>
              <h4 className="font-semibold mb-2">Modular Extension</h4>
              <p className="text-sm text-muted-foreground">
                Install as a native Fleetbase extension and activate it alongside FleetOps, Storefront, or Pallet.
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-8">
            <div className="text-sm font-mono bg-muted/50 p-6 rounded-lg overflow-x-auto">
              <div className="text-muted-foreground mb-2">// Create an invoice via the Ledger API</div>
              <div className="text-foreground">
                <span className="text-blue-500">POST</span> /api/v1/ledger/invoices
              </div>
              <div className="text-foreground mt-4">{'{'}</div>
              <div className="text-foreground ml-4">"customer_uuid": "contact_abc123",</div>
              <div className="text-foreground ml-4">"due_date": "2026-04-30",</div>
              <div className="text-foreground ml-4">"line_items": {'['}{'{'}</div>
              <div className="text-foreground ml-8">"description": "Freight Services - March 2026",</div>
              <div className="text-foreground ml-8">"quantity": 1,</div>
              <div className="text-foreground ml-8">"unit_price": 250000,</div>
              <div className="text-foreground ml-8">"tax_rate": 10.00</div>
              <div className="text-foreground ml-4">{'}'}]{']'}</div>
              <div className="text-foreground">{'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Simple, powerful API for all your financial integration needs
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Financial Engine for Every Logistics Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ledger is designed to handle the financial complexity of any logistics operation, from last-mile delivery to enterprise freight brokerage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🚚</div>
              <h4 className="font-semibold mb-2">Last-Mile Delivery</h4>
              <p className="text-sm text-muted-foreground">
                Automate driver payouts, reconcile cash-on-delivery collections, and track the profitability of every delivery run in real time.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="font-semibold mb-2">3PL & 4PL Providers</h4>
              <p className="text-sm text-muted-foreground">
                Manage complex client billing, automate multi-client invoicing, and generate per-client P&L reports to demonstrate value and protect margins.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-semibold mb-2">Freight Brokerage</h4>
              <p className="text-sm text-muted-foreground">
                Track carrier payments, client invoices, and agent commissions with precision. Ensure every load is profitable and fully accounted for.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🛍️</div>
              <h4 className="font-semibold mb-2">E-commerce & Retail</h4>
              <p className="text-sm text-muted-foreground">
                Reconcile payments from multiple sales channels and manage the cost of goods sold for every order shipped through your network.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🏪</div>
              <h4 className="font-semibold mb-2">On-Demand Services</h4>
              <p className="text-sm text-muted-foreground">
                Manage customer pre-pay wallets, automate service billing, and track the financial performance of your on-demand platform in real time.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🏗️</div>
              <h4 className="font-semibold mb-2">Field Service</h4>
              <p className="text-sm text-muted-foreground">
                Invoice clients automatically upon job completion, track parts and labour costs per job, and manage technician commissions and expenses.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="font-semibold mb-2">Cross-Border Logistics</h4>
              <p className="text-sm text-muted-foreground">
                Handle multi-currency transactions with exchange rate tracking and settled currency recording for international freight and trade finance.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4">📦</div>
              <h4 className="font-semibold mb-2">Warehousing & Distribution</h4>
              <p className="text-sm text-muted-foreground">
                Integrate with Pallet WMS to automatically record storage fees, inbound receiving costs, and outbound fulfilment revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ledger */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Ledger? The Fleetbase Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔓</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Open Source & Self-Hostable</h3>
              <p className="text-muted-foreground">
                Your financial data is too important to be locked in a SaaS vendor. Ledger is open source, giving you full control to host, inspect, and customize every aspect of your financial system.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Operationally Native</h3>
              <p className="text-muted-foreground">
                Unlike standalone accounting tools, Ledger lives inside your operational platform. There is no integration to maintain — financial records are created automatically as operations happen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictable, Usage-Based Pricing</h3>
              <p className="text-muted-foreground">
                No per-user fees, no per-transaction charges. Ledger is included in your Fleetbase plan, so your financial infrastructure scales with your business without surprise costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Ledger and how it fits into your financial operations.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 text-muted-foreground text-xl">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your Logistics Finances?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free trial to explore the full power of Ledger. Connect your operations to your finances and get a real-time view of your business health — no credit card required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg">Start 7-Day Free Trial</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">Talk to a Specialist</Button>
            </Link>
            <Link href="https://docs.fleetbase.io" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost">Read the Documentation</Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Full platform access • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
