'use client';
import { 
  Box, 
  Truck, 
  Smartphone, 
  Store, 
  Package, 
  Shield, 
  Boxes, 
  Code, 
  Webhook, 
  BookOpen, 
  Users, 
  MessageSquare, 
  FileText, 
  Building2, 
  Handshake, 
  FileCheck, 
  Mail,
  Github,
  Utensils,
  ShoppingCart,
  Heart,
  Recycle,
  Ship
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import Logo from '@/components/layout/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export const NAV_LINKS = [
  {
    label: 'Platform',
    href: '/platform',
    subitems: [
      {
        label: 'Platform Overview',
        href: '/platform',
        description: 'A high-level look at the modular logistics OS.',
        icon: Box,
      },
      {
        label: 'FleetOps',
        href: '/platform/fleetops',
        description: 'Advanced fleet and order management.',
        icon: Truck,
      },
      {
        label: 'Navigator App',
        href: '/platform/navigator',
        description: 'The all-in-one mobile app for drivers.',
        icon: Smartphone,
      },
      {
        label: 'Storefront',
        href: '/platform/storefront',
        description: 'Headless e-commerce with last-mile & inventory integration.',
        icon: Store,
      },
      {
        label: 'Pallet',
        href: '/platform/pallet',
        description: 'Warehouse and inventory management.',
        icon: Package,
      },
      {
        label: 'Extensions Marketplace',
        href: '/extensions',
        description: 'Discover and install new features.',
        icon: Boxes,
      },
      {
        label: 'Developer Console',
        href: '/developers/console',
        description: 'Manage API keys, webhooks, and logs.',
        icon: Code,
      },
      {
        label: 'API & Integrations',
        href: '/developers/api',
        description: 'Connect Fleetbase to any system.',
        icon: Webhook,
      },
      {
        label: 'Mobile Apps',
        href: '/platform/mobile',
        description: 'Featuring the Navigator & Storefront apps.',
        icon: Smartphone,
      },
      {
        label: 'Security & Compliance',
        href: '/platform/security',
        description: 'Enterprise-grade security features.',
        icon: Shield,
      },
    ],
    megaMenu: true,
  },
  {
    label: 'Solutions',
    href: '/solutions',
    subitems: [
      {
        label: 'Trucking & Haulage',
        href: '/solutions/trucking',
        description: 'Comprehensive fleet management for trucking operations.',
        icon: Truck,
      },
      {
        label: 'Food & Grocery Delivery',
        href: '/solutions/food-delivery',
        description: 'End-to-end solution for food delivery services.',
        icon: Utensils,
      },
      {
        label: 'Courier & Parcel Services',
        href: '/solutions/courier-services',
        description: 'Streamline your courier and parcel operations.',
        icon: Package,
      },
      {
        label: 'E-commerce & Retail',
        href: '/solutions/ecommerce',
        description: 'Power your retail logistics operations.',
        icon: ShoppingCart,
      },
      {
        label: 'Healthcare & Pharmacy',
        href: '/solutions/healthcare',
        description: 'Secure and compliant healthcare logistics.',
        icon: Heart,
      },
      {
        label: 'Waste & Recycling',
        href: '/solutions/waste-management',
        description: 'Optimize waste collection and recycling routes.',
        icon: Recycle,
      },
      {
        label: 'Container Operations',
        href: '/solutions/container-operations',
        description: 'Manage container logistics and tracking.',
        icon: Ship,
      },
      {
        label: 'Military & Government',
        href: '/solutions/government',
        description: 'Secure logistics for defense and government operations.',
        icon: Shield,
      },
    ],
    megaMenu: true,
  },
  {
    label: 'Developers',
    href: '/developers',
    subitems: [
      {
        label: 'API Documentation',
        href: '/docs/api',
        description: 'Comprehensive reference for the Fleetbase API.',
        icon: BookOpen,
      },
      {
        label: 'SDKs & Libraries',
        href: '/developers/sdks',
        description: 'Official libraries for JS, PHP, Java, and more.',
        icon: Code,
      },
      {
        label: 'Developer Console',
        href: '/developers/console',
        description: 'Manage your API keys, webhooks, and logs.',
        icon: Code,
      },
      {
        label: 'Webhooks & Events',
        href: '/docs/webhooks',
        description: 'Build real-time integrations with webhooks.',
        icon: Webhook,
      },
      {
        label: 'Build an Extension',
        href: '/developers/extensions',
        description: 'Learn how to create and publish extensions.',
        icon: Boxes,
      },
      {
        label: 'GitHub Repository',
        href: 'https://github.com/fleetbase/fleetbase',
        description: 'Contribute to the open-source project.',
        icon: Github,
        external: true,
      },
    ],
  },
  { 
    label: 'Pricing', 
    href: '/pricing' 
  },
  {
    label: 'Resources',
    href: '/resources',
    subitems: [
      {
        label: 'Documentation',
        href: '/docs',
        description: 'The complete guide to using Fleetbase.',
        icon: BookOpen,
      },
      {
        label: 'Testimonials & Case Studies',
        href: '/customers',
        description: 'See how businesses succeed with Fleetbase.',
        icon: Users,
      },
      {
        label: 'Blog',
        href: '/blog',
        description: 'Industry insights, tutorials, and updates.',
        icon: FileText,
      },
      {
        label: 'Community (Discord)',
        href: '/community',
        description: 'Join the conversation with other users.',
        icon: MessageSquare,
      },
      {
        label: 'Support Services',
        href: '/support-services',
        description: 'Implementation, development, and enterprise support.',
        icon: Handshake,
      },
      {
        label: 'Changelog',
        href: '/changelog',
        description: 'Stay up-to-date with the latest changes.',
        icon: FileText,
      },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    subitems: [
      {
        label: 'About Us',
        href: '/company/about',
        description: 'Our mission, vision, and team.',
        icon: Building2,
      },
      {
        label: 'Open Source Mission',
        href: '/company/open-source',
        description: 'Our commitment to open source software.',
        icon: Github,
      },
      {
        label: 'Partners',
        href: '/partners',
        description: 'Our network of integration and solution partners.',
        icon: Handshake,
      },
      {
        label: 'Licensing Options',
        href: '/licensing',
        description: 'Details on AGPL and commercial licenses.',
        icon: FileCheck,
      },
      {
        label: 'Contact Sales',
        href: '/contact/sales',
        description: 'Get in touch with our enterprise team.',
        icon: Mail,
      },
    ],
  },
];

const ACTION_BUTTONS = [
  { label: 'GitHub', href: 'https://github.com/fleetbase/fleetbase', variant: 'ghost' as const, icon: Github, external: true },
  { label: 'Start Free Trial', href: '/trial', variant: 'default' as const },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const hideNavbar = ['/signin', '/signup', '/otp'].some((route) =>
    pathname.includes(route),
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  if (hideNavbar) return null;

  return (
    <header className="lg:border-b">
      <div className="relative z-50 container flex h-[var(--header-height)] items-center justify-between gap-4">
        <Logo className="w-47" />

        <NavigationMenu viewport={false} className="hidden lg:block">
          <NavigationMenuList className="gap-4 xl:gap-8">
            {NAV_LINKS.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.subitems ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        'cursor-pointer bg-transparent [&_svg]:ms-2 [&_svg]:size-4',
                        pathname.startsWith(item.href) &&
                          'bg-accent font-semibold',
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                      <ul className={cn(
                        "gap-2",
                        item.megaMenu ? "grid grid-cols-2 w-[600px]" : "grid w-[320px]"
                      )}>
                        {item.subitems.map((subitem) => (
                          <li key={subitem.label}>
                            <NavigationMenuLink
                              href={subitem.href}
                              className="flex-row items-center gap-3 p-3"
                              {...(subitem.external && { target: "_blank", rel: "noopener noreferrer" })}
                            >
                              <subitem.icon className="text-foreground size-5.5" />
                              <div className="flex flex-col gap-1">
                                <div className="text-sm font-medium tracking-normal">
                                  {subitem.label}
                                </div>
                                <div className="text-muted-foreground text-xs leading-snug">
                                  {subitem.description}
                                </div>
                              </div>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'bg-transparent',
                      pathname === item.href && 'bg-accent font-semibold',
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden w-47 items-center justify-end gap-4 lg:flex">
          <ThemeToggle />
          {ACTION_BUTTONS.map((button) => (
            <Button
              key={button.label}
              size="sm"
              variant={button.variant}
              asChild
            >
              <Link 
                href={button.href}
                {...(button.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {button.icon && <button.icon className="size-4 mr-2" />}
                {button.label}
              </Link>
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2 lg:hidden lg:gap-4">
          <ThemeToggle />
          <button
            className="text-muted-foreground relative flex size-8 rounded-sm border lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div
              className={cn(
                'absolute top-1/2 left-1/2 block w-4 -translate-x-1/2 -translate-y-1/2',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out',
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  'absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out',
                  isMenuOpen ? 'opacity-0' : '',
                )}
              ></span>
              <span
                aria-hidden="true"
                className={cn(
                  'absolute block h-0.25 w-full rounded-full bg-current transition duration-500 ease-in-out',
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
                )}
              ></span>
            </div>
          </button>
        </div>

        {/*  Mobile Menu Navigation */}
        <div
          className={cn(
            'bg-background/95 text-accent-foreground fixed inset-0 top-[var(--header-height)] z-50 flex flex-col justify-between tracking-normal backdrop-blur-md transition-all duration-500 ease-out lg:hidden',
            isMenuOpen
              ? 'translate-x-0 opacity-100'
              : 'pointer-events-none translate-x-full opacity-0',
          )}
        >
          <div className="container overflow-y-auto">
            <NavigationMenu
              orientation="vertical"
              className="inline-block w-full max-w-none py-10"
            >
              <NavigationMenuList className="w-full flex-col items-start gap-6">
                {NAV_LINKS.map((item) => (
                  <NavigationMenuItem key={item.label} className="w-full">
                    {item.subitems ? (
                      <Accordion type="single" collapsible className="">
                        <AccordionItem value={item.label}>
                          <AccordionTrigger className="flex w-full items-center justify-between p-2 text-base font-normal">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-0">
                            <div className="space-y-2">
                              {item.subitems.map((subitem) => (
                                <NavigationMenuLink
                                  key={subitem.label}
                                  href={subitem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={cn(
                                    'text-muted-foreground hover:bg-accent/50 flex flex-row gap-2 p-3 font-medium transition-colors',
                                    pathname === subitem.href &&
                                      'bg-accent font-semibold',
                                  )}
                                  {...(subitem.external && { target: "_blank", rel: "noopener noreferrer" })}
                                >
                                  <subitem.icon className="size-5.5" />
                                  <span className="">{subitem.label}</span>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <NavigationMenuLink
                        href={item.href}
                        className={cn(
                          'hover:text-foreground text-base transition-colors',
                          pathname === item.href && 'font-semibold',
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex gap-4.5 border-t px-6 py-4">
            {ACTION_BUTTONS.map((button) => (
              <Button
                key={button.label}
                variant={button.variant === 'ghost' ? 'muted' : button.variant}
                asChild
                className="h-12 flex-1 rounded-sm transition-all hover:scale-105"
              >
                <Link 
                  href={button.href} 
                  onClick={() => setIsMenuOpen(false)}
                  {...(button.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {button.icon && <button.icon className="size-4 mr-2" />}
                  {button.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
