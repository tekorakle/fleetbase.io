'use client';

import {
 Code,
 Database,
 GitBranch,
 Lock,
 Server,
 Users,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FEATURES = [
 {
 icon: Database,
 title: 'Your Data',
 description: 'Complete ownership and control of all your logistics data.',
 },
 {
 icon: Code,
 title: 'Your Custom Code',
 description: 'Extend and modify the platform to fit your exact needs.',
 },
 {
 icon: Users,
 title: 'Community Extensions',
 description: 'Access hundreds of community-built extensions and integrations.',
 },
 {
 icon: Server,
 title: 'Self-Hosted or Cloud',
 description: 'Deploy anywhere - your servers, private cloud, or our managed hosting.',
 },
];

const GITHUB_STATS = [
 { label: 'GitHub Stars', value: '1.3k+' },
 { label: 'Contributors', value: '50+' },
 { label: 'Forks', value: '200+' },
 { label: 'Organizations', value: '8,000+' },
];

const OpenSourceAdvantage = () => {
 return (
 <section className="section-padding">
 <div className="container space-y-12">
 {/* Header */}
 <div className="mx-auto max-w-3xl text-center space-y-4">
 <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
 Freedom from Vendor Lock-In
 </h2>
 <p className="text-muted-foreground text-lg lg:text-xl">
 Own your data, your code, and your infrastructure. Our open-source
 model gives you the ultimate control and transparency.
 </p>
 </div>

 {/* Main Grid */}
 <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
 {/* Left: Core Diagram */}
 <Card className="dark:to-muted/30 dark:via-muted/10 to-background via-card from-card relative overflow-hidden bg-gradient-to-br p-8 lg:p-10 dark:from-transparent">
 <CardContent className="flex flex-col items-center justify-center gap-8 p-0">
 {/* Central Core */}
 <div className="relative">
 <div className="from-primary/20 via-primary/10 to-primary/5 flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary/30 bg-gradient-to-br">
 <GitBranch className="h-16 w-16 text-primary" />
 </div>
 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
 Fleetbase Core
 </div>
 </div>

 {/* Connection Lines & Feature Nodes */}
 <div className="grid grid-cols-2 gap-6 w-full">
 {FEATURES.map((feature, index) => {
 const Icon = feature.icon;
 return (
 <div
 key={index}
 className="flex flex-col items-center gap-2 text-center"
 >
 <div className="from-muted/30 via-muted/10 to-card flex h-12 w-12 items-center justify-center rounded-lg border bg-gradient-to-r">
 <Icon className="h-6 w-6" />
 </div>
 <div>
 <h4 className="text-accent-foreground text-sm font-semibold">
 {feature.title}
 </h4>
 <p className="text-muted-foreground text-xs leading-tight">
 {feature.description}
 </p>
 </div>
 </div>
 );
 })}
 </div>
 </CardContent>
 </Card>

 {/* Right: GitHub Stats & Benefits */}
 <div className="flex flex-col gap-6">
 {/* GitHub Stats Card */}
 <Card className="dark:to-muted/30 dark:via-muted/10 to-background via-card from-card overflow-hidden bg-gradient-to-br p-6 lg:p-8 dark:from-transparent">
 <CardContent className="space-y-6 p-0">
 <div className="flex items-center gap-3">
 <div className="from-muted/30 via-muted/10 to-card flex h-10 w-10 items-center justify-center rounded-md border bg-gradient-to-r">
 <GitBranch className="h-5 w-5" />
 </div>
 <div>
 <h3 className="text-accent-foreground text-lg font-bold">
 Backed by a Thriving Community
 </h3>
 </div>
 </div>

 <div className="grid grid-cols-2 gap-4">
 {GITHUB_STATS.map((stat, index) => (
 <div
 key={index}
 className="flex flex-col gap-1 rounded-lg border bg-card/50 p-4"
 >
 <div className="text-2xl font-bold text-primary">
 {stat.value}
 </div>
 <div className="text-muted-foreground text-sm">
 {stat.label}
 </div>
 </div>
 ))}
 </div>

 <Button className="w-full" size="lg" asChild>
 <a
 href="https://github.com/fleetbase/fleetbase"
 target="_blank"
 rel="noopener noreferrer"
 >
 <GitBranch className="mr-2 h-4 w-4" />
 View on GitHub
 </a>
 </Button>
 </CardContent>
 </Card>

 {/* Key Benefits Card */}
 <Card className="dark:to-muted/30 dark:via-muted/10 to-background via-card from-card overflow-hidden bg-gradient-to-br p-6 lg:p-8 dark:from-transparent">
 <CardContent className="space-y-4 p-0">
 <div className="flex items-center gap-3">
 <div className="from-muted/30 via-muted/10 to-card flex h-10 w-10 items-center justify-center rounded-md border bg-gradient-to-r">
 <Lock className="h-5 w-5" />
 </div>
 <div>
 <h3 className="text-accent-foreground text-lg font-bold">
 Why Open Source Matters
 </h3>
 </div>
 </div>

 <ul className="space-y-3">
 <li className="flex gap-3">
 <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
 <div className="h-2 w-2 rounded-full bg-primary" />
 </div>
 <div>
 <p className="text-accent-foreground text-sm font-medium">
 No Vendor Lock-In
 </p>
 <p className="text-muted-foreground text-xs">
 Switch hosting providers or self-host anytime
 </p>
 </div>
 </li>
 <li className="flex gap-3">
 <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
 <div className="h-2 w-2 rounded-full bg-primary" />
 </div>
 <div>
 <p className="text-accent-foreground text-sm font-medium">
 Full Transparency
 </p>
 <p className="text-muted-foreground text-xs">
 Audit the code, verify security, understand every feature
 </p>
 </div>
 </li>
 <li className="flex gap-3">
 <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
 <div className="h-2 w-2 rounded-full bg-primary" />
 </div>
 <div>
 <p className="text-accent-foreground text-sm font-medium">
 Future-Proof
 </p>
 <p className="text-muted-foreground text-xs">
 Your investment is protected even if we disappear
 </p>
 </div>
 </li>
 </ul>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>
 );
};

export default OpenSourceAdvantage;
