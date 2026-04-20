'use client';

import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import {
  BookOpen,
  Truck,
  ShoppingBag,
  Package,
  BookMarked,
  Terminal,
  Layout,
  Puzzle,
  FileCode,
} from 'lucide-react';

const sections = [
  {
    title: 'Platform',
    description: 'Getting started & core platform',
    url: '/docs',
    icon: <BookOpen className="size-4" />,
  },
  {
    title: 'Fleet-Ops',
    description: 'Fleet & transport management',
    url: '/docs/fleet-ops',
    icon: <Truck className="size-4" />,
  },
  {
    title: 'Storefront',
    description: 'E-commerce & marketplace',
    url: '/docs/storefront',
    icon: <ShoppingBag className="size-4" />,
  },
  {
    title: 'Pallet',
    description: 'Warehouse & inventory',
    url: '/docs/pallet',
    icon: <Package className="size-4" />,
  },
  {
    title: 'Ledger',
    description: 'Finance & billing',
    url: '/docs/ledger',
    icon: <BookMarked className="size-4" />,
  },
  {
    title: 'CLI',
    description: 'Command-line tools',
    url: '/docs/cli',
    icon: <Terminal className="size-4" />,
  },
  {
    title: 'Fleetbase UI',
    description: 'UI components & mobile apps',
    url: '/docs/ui',
    icon: <Layout className="size-4" />,
  },
  {
    title: 'Extension SDK',
    description: 'Build & extend Fleetbase',
    url: '/docs/sdk',
    icon: <Puzzle className="size-4" />,
  },
  {
    title: 'API Reference',
    description: 'REST API documentation',
    url: '/docs/api',
    icon: <FileCode className="size-4" />,
  },
];

export function DocsToggle() {
  return <RootToggle options={sections} />;
}
