// Direct imports without using fumadocs-mdx runtime
import { loader } from 'fumadocs-core/source';
import type { InferPageType } from 'fumadocs-core/source';
import * as docs_0 from '@/../content/docs/ai-prompts.mdx';
import * as docs_1 from '@/../content/docs/core-concepts.mdx';
import * as docs_2 from '@/../content/docs/crm-csv.mdx';
import * as docs_3 from '@/../content/docs/file-systems.mdx';
import * as docs_4 from '@/../content/docs/index.mdx';
import * as docs_5 from '@/../content/docs/installation.mdx';
import * as docs_6 from '@/../content/docs/webhooks.mdx';

// Manually create the docs array without using _runtime
const docsArray = [
 { info: { path: 'ai-prompts.mdx' }, data: docs_0 },
 { info: { path: 'core-concepts.mdx' }, data: docs_1 },
 { info: { path: 'crm-csv.mdx' }, data: docs_2 },
 { info: { path: 'file-systems.mdx' }, data: docs_3 },
 { info: { path: 'index.mdx' }, data: docs_4 },
 { info: { path: 'installation.mdx' }, data: docs_5 },
 { info: { path: 'webhooks.mdx' }, data: docs_6 },
];

// Create a custom source that converts to Fumadocs Source format
export const source = loader({
 baseUrl: '/docs',
 source: {
 files: docsArray.map((doc: any) => ({
 type: 'page',
 path: doc.info.path.replace(/\.mdx?$/, ''),
 data: {
 ...doc.data,
 body: doc.data.default,
 structuredData: doc.data.structuredData || doc.data.toc,
 },
 })),
 },
});

export type Page = InferPageType<typeof source>;
