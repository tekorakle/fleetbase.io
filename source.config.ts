import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

// Platform — general docs, getting started, IAM, developer console
export const docs = defineDocs({
  dir: 'content/docs',
  docs: { files: ['*.mdx', 'getting-started/**', 'platform/**', 'guides/**', 'community/**'] },
  meta: { files: ['meta.json', 'getting-started/meta.json', 'platform/meta.json', 'guides/meta.json', 'community/meta.json'] },
});

// Fleet-Ops — fleet management extension
export const fleetOpsDocs = defineDocs({
  dir: 'content/docs/fleet-ops',
});

// Storefront — e-commerce extension
export const storefrontDocs = defineDocs({
  dir: 'content/docs/storefront',
});

// Pallet — warehouse & inventory extension
export const palletDocs = defineDocs({
  dir: 'content/docs/pallet',
});

// Ledger — finance & billing extension
export const ledgerDocs = defineDocs({
  dir: 'content/docs/ledger',
});

// CLI — Fleetbase command-line tool
export const cliDocs = defineDocs({
  dir: 'content/docs/cli',
});

// Fleetbase UI — ember-ui component library and mobile apps
export const uiDocs = defineDocs({
  dir: 'content/docs/ui',
});

// Extension SDK — building and extending Fleetbase
export const sdkDocs = defineDocs({
  dir: 'content/docs/sdk',
});

// API Reference — REST API reference (OpenAPI-generated)
export const apiDocs = defineDocs({
  dir: 'content/docs/api',
});

export default defineConfig();
