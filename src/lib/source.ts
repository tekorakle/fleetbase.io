import { loader } from 'fumadocs-core/source';
import type { InferPageType } from 'fumadocs-core/source';
import {
  docs,
  fleetOpsDocs,
  storefrontDocs,
  palletDocs,
  ledgerDocs,
  cliDocs,
  uiDocs,
  sdkDocs,
  apiDocs,
} from '@/.source';

// Platform — general docs, getting started, IAM, developer console
export const source = loader({
  baseUrl: '/docs',
  source: { files: docs.toFumadocsSource().files() },
});

// Fleet-Ops — fleet management extension
export const fleetOpsSource = loader({
  baseUrl: '/docs/fleet-ops',
  source: { files: fleetOpsDocs.toFumadocsSource().files() },
});

// Storefront — e-commerce extension
export const storefrontSource = loader({
  baseUrl: '/docs/storefront',
  source: { files: storefrontDocs.toFumadocsSource().files() },
});

// Pallet — warehouse & inventory extension
export const palletSource = loader({
  baseUrl: '/docs/pallet',
  source: { files: palletDocs.toFumadocsSource().files() },
});

// Ledger — finance & billing extension
export const ledgerSource = loader({
  baseUrl: '/docs/ledger',
  source: { files: ledgerDocs.toFumadocsSource().files() },
});

// CLI — Fleetbase command-line tool
export const cliSource = loader({
  baseUrl: '/docs/cli',
  source: { files: cliDocs.toFumadocsSource().files() },
});

// Fleetbase UI — ember-ui component library and mobile apps
export const uiSource = loader({
  baseUrl: '/docs/ui',
  source: { files: uiDocs.toFumadocsSource().files() },
});

// Extension SDK — building and extending Fleetbase
export const sdkSource = loader({
  baseUrl: '/docs/sdk',
  source: { files: sdkDocs.toFumadocsSource().files() },
});

// API Reference — REST API reference
export const apiSource = loader({
  baseUrl: '/docs/api',
  source: { files: apiDocs.toFumadocsSource().files() },
});

export type Page = InferPageType<typeof source>;
