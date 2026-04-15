'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const ITEMS = [
 {
 title: 'Live Tracking',
 image: {
 src: '/images/home/features/1.webp',
 width: 198,
 height: 133,
 },
 desc: 'Real-time visibility of your entire fleet on a live map with location updates and ETAs. Reduce customer calls by 40%.'
 },
 {
 title: 'Modular Extensions',
 image: {
 src: '/images/home/features/2.webp',
 width: 148,
 height: 124,
 },
 desc: 'Add capabilities like warehouse management, customer storefronts, and financial ledger as your business grows — without rebuilding your stack.',
 },
 {
 title: 'Route Optimization',
 image: {
 src: '/images/home/features/3.webp',
 width: 154,
 height: 99,
 },
 desc: 'Intelligent routing that considers traffic, delivery windows, and vehicle capacity. Cut fuel costs by up to 30%.',
 },
 {
 title: 'Custom Dashboards',
 image: {
 src: '/images/home/features/4.webp',
 width: 171,
 height: 120,
 },
 desc: 'Build dashboards to track your KPIs like cost-per-mile, on-time rates, and utilization. Make data-driven decisions in real-time.',
 },
 {
 title: 'API & Integrations',
 image: {
 src: '/images/home/features/5.webp',
 width: 195,
 height: 74.6,
 },
 desc: 'Connect with your accounting, ERP, and management software via REST APIs and webhooks.',
 },
 {
 title: 'Dynamic Order Config',
 image: {
 src: '/images/home/features/6.webp',
 width: 148,
 height: 124,
 },
 desc: 'Configure custom fields, validation rules, and workflows for any order type.',
 },
 {
 title: 'Proof of Delivery',
 image: {
 src: '/images/home/features/7.webp',
 width: 186,
 height: 103,
 },
 desc: 'Digital signatures, photos, and notes captured on mobile devices for instant confirmation. Eliminate billing disputes.',
 },
 {
 title: 'Advanced Reporting',
 image: {
 src: '/images/home/hero.webp',
 width: 186,
 height: 103,
 },
 desc: 'Analyze performance trends, route profitability, and operational metrics.',
 },
];

const Features = ({ className }: { className?: string }) => {
 return (
 <section className={cn('py-10 md:py-20', className)}>
 <Carousel>
 <div className="container flex flex-col justify-between gap-10 md:flex-row md:items-center">
 <div className="max-w-3xl space-y-3">
 <h2 className="text-4xxl leading-tight tracking-tight md:text-5xl">
 Everything Your Logistics Operation Needs.
 </h2>
 <p className="text-muted-foreground max-w-xl text-lg leading-snug">
 From real-time tracking to route optimization, proof of delivery to advanced reporting — every tool your team needs to run faster, leaner operations.
 </p>
 </div>
 <div className="hidden gap-3 md:flex">
 <CarouselPrevious className="via-muted/20 border-border to-muted/50 relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br from-transparent" />
 <CarouselNext className="via-muted/20 border-border to-muted/50 relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br from-transparent" />
 </div>
 </div>

 <CarouselContent className="mx-auto mt-10 max-w-[3000px] cursor-grab">
 {ITEMS.map((card, idx) => (
 <CarouselItem key={idx} className="min-w-70 basis-[16%] pl-6">
 <div className="flex h-full flex-col">
 <Card className="dark:via-muted/20 dark:to-muted/50 to-background via-card from-card h-43 bg-gradient-to-br dark:from-transparent">
 <CardContent className="flex h-full items-center justify-center">
 <Image
 src={card.image.src}
 alt={card.title}
 width={card.image.width}
 height={card.image.height}
 className="object-contain invert dark:invert-0"
 />
 </CardContent>
 </Card>

 {/* Text block outside of card */}
 <h3 className="text-accent-foreground mt-3 mb-2 text-lg font-bold">
 {card.title}
 </h3>
 <p className="text-muted-foreground">{card.desc}</p>
 </div>
 </CarouselItem>
 ))}
 </CarouselContent>
 
 {/* CTA Button */}
 <div className="container mt-10 flex justify-center">
 <Button 
 className="bg-[#4A90E2] hover:bg-[#3D7DC2] text-white shadow-md px-8 py-6 text-lg" 
 asChild
 >
 <Link href="https://console.fleetbase.io/onboard" target="_blank" rel="noopener noreferrer">
 See It In Action
 </Link>
 </Button>
 </div>
 
 <div className="container mt-6 flex justify-center gap-3 md:hidden">
 <CarouselPrevious className="dark:via-muted/20 border-border dark:to-muted/50 to-background via-card from-card relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br dark:from-transparent" />
 <CarouselNext className="dark:via-muted/20 border-border dark:to-muted/50 to-background via-card from-card relative top-0 left-0 translate-y-0 rounded-md bg-gradient-to-br dark:from-transparent" />
 </div>
 </Carousel>
 </section>
 );
};

export default Features;
