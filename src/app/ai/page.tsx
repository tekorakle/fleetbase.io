import type { Metadata } from 'next';
import Link from 'next/link';
import {
 Brain, Zap, Route, MessageSquare, AlertTriangle, BarChart3,
 Truck, Package, Clock, Shield, ArrowRight, Sparkles, Bot,
 Eye, Layers, GitBranch, Cpu, ChevronRight, Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata: Metadata = {
 title: 'Open Source Logistics AI | AI-Powered Fleet & Delivery Management',
 description:
 'Fleetbase is building the open-source AI layer for logistics. AI-powered route optimisation, predictive dispatch, anomaly detection, and natural language operations — all on infrastructure you control.',
 keywords: [
 'logistics AI',
 'AI fleet management',
 'open source logistics AI',
 'AI dispatch software',
 'AI route optimization',
 'logistics automation AI',
 'AI delivery management',
 'generative AI logistics',
 'AI TMS software',
 'AI supply chain platform',
 'open source AI logistics platform',
 'AI last mile delivery',
 'predictive logistics AI',
 'fleet AI software',
 ],
 alternates: { canonical: 'https://fleetbase.io/ai' },
 openGraph: {
 title: 'Open Source Logistics AI | Fleetbase',
 description:
 'The open-source AI layer for logistics operations. Route AI, dispatch AI, anomaly detection, and natural language control — on infrastructure you own.',
 images: [{ url: '/images/og-ai.png', width: 1200, height: 630 }],
 },
};

// ─── AI Capabilities ──────────────────────────────────────────────────────────
const AI_CAPABILITIES = [
 {
 icon: Route,
 title: 'AI Route Optimisation',
 tag: 'Coming Soon',
 description:
 'Go beyond static routing. Fleetbase AI will continuously re-optimise routes in real time using live traffic, weather, driver availability, vehicle capacity, and historical delivery patterns — cutting fuel costs by up to 30%.',
 keywords: ['AI route optimization', 'dynamic routing AI', 'last-mile AI'],
 },
 {
 icon: MessageSquare,
 title: 'Natural Language Dispatch',
 tag: 'Coming Soon',
 description:
 'Dispatch orders, reassign drivers, and query your fleet using plain English. Tell Fleetbase AI "find the nearest available driver for this order in Zone 4" and it executes — no clicks required.',
 keywords: ['AI dispatch', 'natural language logistics', 'conversational AI fleet'],
 },
 {
 icon: AlertTriangle,
 title: 'Predictive Anomaly Detection',
 tag: 'Coming Soon',
 description:
 'AI monitors every order, driver, and vehicle in real time. It flags late deliveries before they happen, detects unusual driver behaviour, and alerts you to vehicle faults before they cause breakdowns.',
 keywords: ['predictive logistics', 'anomaly detection fleet', 'AI monitoring logistics'],
 },
 {
 icon: BarChart3,
 title: 'AI-Powered Analytics',
 tag: 'Coming Soon',
 description:
 'Stop reading dashboards. Ask your data questions. Fleetbase AI will surface insights automatically — "Why did on-time delivery drop last Tuesday?" — and recommend corrective actions.',
 keywords: ['logistics analytics AI', 'AI insights fleet management'],
 },
 {
 icon: Bot,
 title: 'Autonomous Order Processing',
 tag: 'Coming Soon',
 description:
 'AI reads incoming orders from any source — email, API, EDI, WhatsApp — extracts structured data, validates it, and creates dispatch-ready jobs in Fleetbase without human intervention.',
 keywords: ['AI order processing', 'autonomous logistics', 'AI automation logistics'],
 },
 {
 icon: Truck,
 title: 'Predictive Maintenance',
 tag: 'Coming Soon',
 description:
 'Fleetbase AI analyses vehicle telemetry to predict component failures before they occur. Schedule maintenance proactively, reduce unplanned downtime, and extend vehicle lifespan.',
 keywords: ['predictive maintenance fleet', 'AI vehicle management', 'fleet AI maintenance'],
 },
 {
 icon: Package,
 title: 'Demand Forecasting',
 tag: 'Coming Soon',
 description:
 'AI analyses your historical order volumes, seasonality, and external signals to forecast future demand. Pre-position drivers and vehicles before the surge hits.',
 keywords: ['demand forecasting logistics', 'AI supply chain forecasting'],
 },
 {
 icon: Shield,
 title: 'AI Compliance & Risk',
 tag: 'Coming Soon',
 description:
 'Automatically flag compliance risks — driver hours violations, vehicle inspection overdue, hazmat route restrictions. AI keeps your operation compliant without manual checking.',
 keywords: ['AI compliance logistics', 'fleet risk management AI'],
 },
];

// ─── How It Works ─────────────────────────────────────────────────────────────
const HOW_IT_WORKS = [
 {
 step: '01',
 icon: Eye,
 title: 'AI Observes Everything',
 description:
 'Every order, driver location, vehicle status, and customer interaction flows into the Fleetbase AI layer in real time. Nothing is missed.',
 },
 {
 step: '02',
 icon: Brain,
 title: 'AI Reasons & Decides',
 description:
 'Models trained on logistics-specific data analyse patterns, detect anomalies, and generate recommendations — or take autonomous action when configured to do so.',
 },
 {
 step: '03',
 icon: Zap,
 title: 'AI Acts in the Platform',
 description:
 'AI doesn\'t just surface insights in a separate dashboard. It acts directly inside Fleetbase — re-assigning drivers, updating ETAs, creating alerts, and triggering workflows.',
 },
 {
 step: '04',
 icon: Layers,
 title: 'You Stay in Control',
 description:
 'Every AI action is logged, explainable, and reversible. You choose which capabilities run autonomously and which require human approval. Open source means you can audit the models.',
 },
];

// ─── Why Open Source AI ───────────────────────────────────────────────────────
const OPEN_SOURCE_ADVANTAGES = [
 {
 icon: GitBranch,
 title: 'No AI Black Box',
 description:
 'With closed-source logistics AI, you have no idea why a route was chosen or a driver was flagged. Fleetbase AI is open — inspect the models, understand the decisions, trust the output.',
 },
 {
 icon: Cpu,
 title: 'Run Your Own Models',
 description:
 'Connect your own LLMs, fine-tuned models, or proprietary algorithms. Fleetbase AI is model-agnostic — use OpenAI, Anthropic, Mistral, or your own self-hosted model.',
 },
 {
 icon: Shield,
 title: 'Data Stays on Your Infrastructure',
 description:
 'Your logistics data never leaves your servers. Train AI on your own historical data without sending sensitive shipment, customer, or driver data to third-party AI providers.',
 },
 {
 icon: Sparkles,
 title: 'Community-Driven Intelligence',
 description:
 'AI capabilities built by the Fleetbase community — logistics operators, developers, and researchers — not just a product team. The best ideas ship fastest in open source.',
 },
];

// ─── Roadmap ──────────────────────────────────────────────────────────────────
const ROADMAP = [
 {
 quarter: 'Q3 2025',
 status: 'In Progress',
 statusColor: 'bg-blue-500',
 items: [
 'AI Route Optimisation Engine (beta)',
 'Natural Language Query Interface',
 'Anomaly Detection for Late Deliveries',
 ],
 },
 {
 quarter: 'Q4 2025',
 status: 'Planned',
 statusColor: 'bg-yellow-500',
 items: [
 'Autonomous Order Processing',
 'Predictive Driver ETA Engine',
 'AI-Powered Analytics Narratives',
 ],
 },
 {
 quarter: 'Q1 2026',
 status: 'Planned',
 statusColor: 'bg-gray-400',
 items: [
 'Predictive Maintenance Integration',
 'Demand Forecasting Module',
 'AI Compliance & Risk Monitor',
 ],
 },
 {
 quarter: 'Q2 2026',
 status: 'Planned',
 statusColor: 'bg-gray-400',
 items: [
 'Custom Model Fine-Tuning UI',
 'Multi-Modal AI (voice dispatch)',
 'AI Extensions Marketplace',
 ],
 },
];

// ─── Use Cases ────────────────────────────────────────────────────────────────
const USE_CASES = [
 {
 role: 'Operations Manager',
 pain: 'Spending hours manually re-routing drivers when traffic spikes or orders are cancelled.',
 solution: 'AI automatically re-optimises all active routes in seconds and notifies affected drivers via the Navigator app.',
 },
 {
 role: 'Fleet Manager',
 pain: 'Vehicles breaking down unexpectedly, causing missed deliveries and emergency repair costs.',
 solution: 'Predictive maintenance AI flags components approaching failure 2–3 weeks in advance, enabling planned workshop visits.',
 },
 {
 role: 'Dispatcher',
 pain: 'Processing 200+ incoming orders per day from email, WhatsApp, and API — manually copying data into the system.',
 solution: 'Autonomous order processing AI reads every channel, extracts order data, and creates dispatch-ready jobs automatically.',
 },
 {
 role: 'Executive / CEO',
 pain: 'No clear visibility into why KPIs dropped last month — dashboards show what happened but not why.',
 solution: 'AI analytics narratives explain performance changes in plain English and surface the root cause with supporting data.',
 },
];

export default function LogisticsAIPage() {
 return (
 <div className="flex flex-col">
 {/* JSON-LD Schema */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 '@context': 'https://schema.org',
 '@type': 'SoftwareApplication',
 name: 'Fleetbase Logistics AI',
 applicationCategory: 'BusinessApplication',
 operatingSystem: 'Web, Cloud, Self-Hosted',
 description:
 'Open-source AI layer for logistics operations. AI route optimisation, predictive dispatch, anomaly detection, and natural language fleet control.',
 url: 'https://fleetbase.io/ai',
 offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
 creator: {
 '@type': 'Organization',
 name: 'Fleetbase',
 url: 'https://fleetbase.io',
 },
 }),
 }}
 />

 {/* ── Hero ── */}
 <section className="section-padding relative overflow-hidden">
 {/* Background gradient */}
 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
 <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

 <div className="container mx-auto px-4 max-w-5xl relative text-center">
 <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm mb-6">
 <Sparkles className="w-3.5 h-3.5 text-primary" />
 <span className="text-primary font-medium">Logistics AI — Coming to Fleetbase</span>
 </div>

 <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance leading-tight">
 The Open-Source{' '}
 <span className="text-primary">AI Layer</span>{' '}
 for Logistics
 </h1>

 <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto text-balance">
 Fleetbase is building AI that doesn&apos;t just surface insights — it <strong>acts</strong>. Route decisions, autonomous dispatch, anomaly detection, and natural language fleet control. All on infrastructure you own.
 </p>

 <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
 No black-box AI. No data leaving your servers. No vendor lock-in. Open source, auditable, and model-agnostic — so you stay in control of your intelligence.
 </p>

 <div className="flex gap-4 justify-center flex-wrap">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/register">
 Try Fleetbase Free <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer">
 Follow on GitHub <Star className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 </div>

 <p className="text-xs text-muted-foreground mt-4">
 AI capabilities are on our immediate roadmap. Join the waitlist to get early access.
 </p>
 </div>
 </section>

 {/* ── The Problem with Logistics AI Today ── */}
 <section className="py-20 bg-muted/20">
 <div className="container mx-auto px-4 max-w-5xl">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> The Problem
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
 Logistics AI is broken — and you&apos;re paying for it
 </h2>
 <div className="space-y-4 text-muted-foreground">
 <p>
 Most &quot;AI-powered&quot; logistics platforms are black boxes. You get a recommendation with no explanation. Your data is sent to a third-party AI provider. You can&apos;t customise the models. And when the AI gets it wrong, you have no way to understand why.
 </p>
 <p>
 Closed-source AI also means vendor lock-in. The moment you rely on their AI, you&apos;re dependent on their pricing, their uptime, and their roadmap.
 </p>
 <p>
 Fleetbase is building a different kind of logistics AI — open, auditable, and embedded directly into the operations platform. AI that acts inside your workflow, not in a separate dashboard you have to translate back into decisions.
 </p>
 </div>
 </div>
 <div className="space-y-4">
 {[
 { label: 'Black-box AI decisions', bad: true },
 { label: 'Data sent to third-party AI providers', bad: true },
 { label: 'AI insights in a separate dashboard', bad: true },
 { label: 'Vendor lock-in on AI models', bad: true },
 { label: 'No ability to customise or audit models', bad: true },
 { label: 'Per-seat pricing that penalises growth', bad: true },
 ].map((item) => (
 <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg border bg-card">
 <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
 <span className="text-red-500 text-xs font-bold">✕</span>
 </div>
 <span className="text-sm text-muted-foreground">{item.label}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* ── How It Works ── */}
 <section className="py-20">
 <div className="container mx-auto px-4 max-w-5xl">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> Architecture
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 AI that acts inside your operations
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Fleetbase AI is not a reporting layer. It is embedded into the platform — observing, reasoning, and acting directly within your dispatch, fleet, and order workflows.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {HOW_IT_WORKS.map((step) => (
 <div key={step.step} className="relative">
 <div className="text-6xl font-black text-primary/5 absolute -top-4 -left-2 select-none">{step.step}</div>
 <div className="relative p-6 rounded-xl border bg-card h-full">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
 <step.icon className="w-5 h-5 text-primary" />
 </div>
 <h3 className="font-semibold mb-2">{step.title}</h3>
 <p className="text-sm text-muted-foreground">{step.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── AI Capabilities Grid ── */}
 <section className="py-20 bg-muted/20">
 <div className="container mx-auto px-4 max-w-6xl">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> Capabilities
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 Every dimension of logistics, made intelligent
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Eight AI capabilities designed around the real problems logistics operators face every day — from the first mile to the last.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
 {AI_CAPABILITIES.map((cap) => (
 <Card key={cap.title} className="relative group hover:border-primary/50 transition-colors">
 <CardHeader className="pb-3">
 <div className="flex items-start justify-between mb-3">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
 <cap.icon className="w-5 h-5 text-primary" />
 </div>
 <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
 {cap.tag}
 </span>
 </div>
 <CardTitle className="text-base leading-snug">{cap.title}</CardTitle>
 </CardHeader>
 <CardContent>
 <CardDescription className="text-sm leading-relaxed">
 {cap.description}
 </CardDescription>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* ── Use Cases by Role ── */}
 <section className="py-20">
 <div className="container mx-auto px-4 max-w-5xl">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> Use Cases
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 AI that solves real logistics problems
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Every AI capability maps to a specific pain point your team faces today.
 </p>
 </div>

 <div className="space-y-4">
 {USE_CASES.map((uc) => (
 <div key={uc.role} className="grid md:grid-cols-3 gap-4 p-6 rounded-xl border bg-card items-start">
 <div>
 <div className="text-xs font-medium text-primary uppercase tracking-widest mb-1">Role</div>
 <div className="font-semibold">{uc.role}</div>
 </div>
 <div>
 <div className="text-xs font-medium text-red-500 uppercase tracking-widest mb-1">Today&apos;s Problem</div>
 <div className="text-sm text-muted-foreground">{uc.pain}</div>
 </div>
 <div>
 <div className="text-xs font-medium text-green-500 uppercase tracking-widest mb-1">With Fleetbase AI</div>
 <div className="text-sm text-muted-foreground">{uc.solution}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Why Open Source AI ── */}
 <section className="py-20 bg-muted/20">
 <div className="container mx-auto px-4 max-w-5xl">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> Why Open Source
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 Open source AI is a competitive advantage
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Closed-source logistics AI is a liability. Open-source AI is an asset you can build on, audit, and own.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-6">
 {OPEN_SOURCE_ADVANTAGES.map((adv) => (
 <div key={adv.title} className="flex gap-4 p-6 rounded-xl border bg-card">
 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
 <adv.icon className="w-5 h-5 text-primary" />
 </div>
 <div>
 <h3 className="font-semibold mb-2">{adv.title}</h3>
 <p className="text-sm text-muted-foreground">{adv.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ── Roadmap ── */}
 <section className="py-20">
 <div className="container mx-auto px-4 max-w-5xl">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4 uppercase tracking-widest">
 <span className="w-6 h-px bg-muted-foreground/40" /> Roadmap
 </div>
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 AI is on our immediate roadmap
 </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 We are building Fleetbase AI in the open. Follow our progress on GitHub and join the community to shape what gets built next.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
 {ROADMAP.map((phase) => (
 <div key={phase.quarter} className="p-5 rounded-xl border bg-card">
 <div className="flex items-center gap-2 mb-4">
 <div className={`w-2.5 h-2.5 rounded-full ${phase.statusColor}`} />
 <div>
 <div className="text-xs font-semibold">{phase.quarter}</div>
 <div className="text-xs text-muted-foreground">{phase.status}</div>
 </div>
 </div>
 <ul className="space-y-2">
 {phase.items.map((item) => (
 <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
 <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>

 <div className="text-center mt-8">
 <Link
 href="https://github.com/fleetbase/fleetbase"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 text-sm text-primary hover:underline underline-offset-4"
 >
 Follow the full roadmap on GitHub <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </div>
 </section>

 {/* ── Comparison vs Closed AI ── */}
 <section className="py-20 bg-muted/20">
 <div className="container mx-auto px-4 max-w-4xl">
 <div className="text-center mb-10">
 <h2 className="text-3xl font-bold mb-4">
 Fleetbase AI vs. Closed-Source Logistics AI
 </h2>
 </div>
 <div className="overflow-x-auto rounded-xl border">
 <table className="w-full text-sm">
 <thead>
 <tr className="border-b bg-muted/30">
 <th className="text-left p-4 font-semibold">Feature</th>
 <th className="text-center p-4 font-semibold text-primary">Fleetbase AI</th>
 <th className="text-center p-4 font-semibold text-muted-foreground">Closed-Source AI</th>
 </tr>
 </thead>
 <tbody className="divide-y">
 {[
 ['Auditable AI decisions', true, false],
 ['Data stays on your infrastructure', true, false],
 ['Bring your own AI model', true, false],
 ['Embedded in operations workflow', true, false],
 ['Open source codebase', true, false],
 ['No vendor lock-in', true, false],
 ['Community-driven development', true, false],
 ['Custom model fine-tuning', true, false],
 ['Usage-based pricing', true, false],
 ['Works with self-hosted deployment', true, false],
 ].map(([feature, fb, closed]) => (
 <tr key={String(feature)} className="hover:bg-muted/10 transition-colors">
 <td className="p-4 text-muted-foreground">{String(feature)}</td>
 <td className="p-4 text-center">
 {fb ? (
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-500 text-xs font-bold">✓</span>
 ) : (
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500 text-xs font-bold">✕</span>
 )}
 </td>
 <td className="p-4 text-center">
 {closed ? (
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-500 text-xs font-bold">✓</span>
 ) : (
 <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500 text-xs font-bold">✕</span>
 )}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* ── Early Access CTA ── */}
 <section className="py-24 relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />
 <div className="container mx-auto px-4 max-w-3xl text-center relative">
 <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm mb-6">
 <Sparkles className="w-3.5 h-3.5 text-primary" />
 <span className="text-primary font-medium">Get Early Access</span>
 </div>
 <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
 Be the first to run AI on your logistics operations
 </h2>
 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Join the Fleetbase community today. Star us on GitHub to follow AI development, or talk to our team about your specific AI use case — we are actively shaping the roadmap with early partners.
 </p>
 <div className="flex gap-4 justify-center flex-wrap">
 <Button size="lg" asChild>
 <Link href="https://console.fleetbase.io/register">
 Start Free — Try Fleetbase Now <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link href="https://cal.com/shivthakker/enquiry" target="_blank" rel="noopener noreferrer">
 Book an AI Strategy Call
 </Link>
 </Button>
 </div>
 <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
 <Link href="https://github.com/fleetbase/fleetbase" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1.5">
 <Star className="w-4 h-4" /> Star on GitHub
 </Link>
 <Link href="https://discord.com/invite/HnTqQ6zAVn" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1.5">
 <MessageSquare className="w-4 h-4" /> Join Discord
 </Link>
 <Link href="/changelog" className="hover:text-foreground transition-colors flex items-center gap-1.5">
 <Clock className="w-4 h-4" /> View Changelog
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
}
