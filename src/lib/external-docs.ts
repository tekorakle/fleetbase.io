/**
 * URL prefixes for external documentation referenced from our docs pages.
 *
 * Centralized so the link target can be updated in one place when an upstream
 * project moves their API docs (e.g. Ember bumps a major version, Laravel
 * changes their docs URL scheme).
 *
 * Used by the MDX components in `src/components/external-docs.tsx` —
 * `<EmberApi>`, `<EmberDataApi>`, `<LaravelDocs>`, `<LaravelApi>`, `<PhpDocs>`.
 */
export const EXTERNAL_DOCS = {
  /** Ember.js API docs (release channel). */
  ember: 'https://api.emberjs.com/ember/release',

  /** Ember Data API docs (release channel). */
  emberData: 'https://api.emberjs.com/ember-data/release',

  /** Ember.js guides (narrative documentation). */
  emberGuides: 'https://guides.emberjs.com/release',

  /** ember-can ability service. */
  emberCan: 'https://github.com/minutebase/ember-can#readme',

  /** Laravel documentation (current LTS). */
  laravel: 'https://laravel.com/docs/11.x',

  /** Laravel API reference. */
  laravelApi: 'https://laravel.com/api/11.x',

  /** PHP manual. */
  php: 'https://www.php.net/manual/en',

  /** Composer documentation. */
  composer: 'https://getcomposer.org/doc',

  /** SocketCluster docs. */
  socketCluster: 'https://socketcluster.io/docs',
} as const;

export type ExternalDocsKey = keyof typeof EXTERNAL_DOCS;
