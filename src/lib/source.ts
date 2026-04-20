import { loader } from 'fumadocs-core/source';
import type { InferPageType } from 'fumadocs-core/source';
import { docs } from '@/.source';

const mdxSource = docs.toFumadocsSource();

export const source = loader({
  baseUrl: '/docs',
  source: {
    files: mdxSource.files(),
  },
});

export type Page = InferPageType<typeof source>;
