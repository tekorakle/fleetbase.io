import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

// Platform — general docs, getting started, IAM, developer console
export const docs = defineDocs({
  dir: 'content/docs',
  docs: { files: ['*.mdx', 'platform/**', 'community/**'] },
  meta: { files: ['meta.json', 'platform/**/meta.json', 'community/meta.json'] },
});

// Fleet-Ops — fleet management extension
export const fleetOpsDocs = defineDocs({
  dir: 'content/docs/fleet-ops',
  docs: { files: ['**/*.mdx'] },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Storefront — e-commerce extension
export const storefrontDocs = defineDocs({
  dir: 'content/docs/storefront',
  docs: { files: ['**/*.mdx'] },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Pallet — warehouse & inventory extension
export const palletDocs = defineDocs({
  dir: 'content/docs/pallet',
  docs: { files: ['**/*.mdx'] },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Ledger — finance & billing extension
export const ledgerDocs = defineDocs({
  dir: 'content/docs/ledger',
  docs: { files: ['**/*.mdx'] },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// CLI — Fleetbase command-line tool
export const cliDocs = defineDocs({
  dir: 'content/docs/cli',
  docs: { files: ['**/*.mdx'] },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Fleetbase UI — ember-ui component library
export const uiDocs = defineDocs({
  dir: 'content/docs/ui',
  docs: { files: ['**/*.mdx'] },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// Extension SDK — building and extending Fleetbase
export const sdkDocs = defineDocs({
  dir: 'content/docs/sdk',
  docs: { files: ['**/*.mdx'] },
  meta: { files: ['meta.json', '**/meta.json'] },
});

// API Reference — REST API reference (OpenAPI-generated)
export const apiDocs = defineDocs({
  dir: 'content/docs/api',
});

export default defineConfig();
