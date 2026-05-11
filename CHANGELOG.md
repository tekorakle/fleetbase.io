# Changelog

All notable changes to the Fleetbase marketing & docs site (fleetbase.io) are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-05-11

First versioned release. Establishes versioning, a release workflow, and bundles the first batch of pending changes.

### Added
- Vercel Web Analytics integration via `@vercel/analytics@2.0.1`. Beacon fires on every pageview; data collection requires Web Analytics to be enabled in the Vercel project dashboard. (#8)
- Stacked mobile-drawer pattern on `/docs`: a single hamburger trigger opens the fumadocs sidebar, which now contains a "Main menu →" button that overlays the site nav drawer on top. Closing peels one layer at a time. (#10)
- `MobileNavProvider` context to share site-drawer state between the navbar and the fumadocs sidebar banner. (#10)
- `CHANGELOG.md` and `.github/workflows/release.yml` — tag-triggered GitHub Releases; pushing a `vX.Y.Z` tag publishes a Release with the matching CHANGELOG section as notes.

### Changed
- Renamed the npm package from `plasma-nextjs-template` to `fleetbase.io` and reset the version to `0.1.0`.
- Bumped the `vendor/postman` submodule (`bcf6078` → `08ef607`). (#11)
- Site mobile drawer now renders via `createPortal` to `document.body` instead of as a child of `<header>` — escapes the containing block created by `backdrop-filter` on the scrolled header, which previously caused the drawer to collapse to zero height after the user had scrolled. (#10)
- Mobile-drawer scroll lock switched from `overflow: hidden` to `overflow: clip`. `hidden` on `<html>` strips `position: sticky` of its scrolling ancestor and dropped the navbar header out of the viewport when the user opened the menu mid-scroll. `clip` locks the same axis without establishing a new scroll container, so sticky is preserved. (#10)

### Removed
- `DocsSidebarTrigger` standalone component — superseded by the stacked-drawer pattern (single hamburger instead of two adjacent icons). (#10)

### Fixed
- Mobile users couldn't open the docs sidebar because section layouts disabled fumadocs's mobile nav (to avoid duplicating the site `Navbar`), which removed fumadocs's only built-in `SidebarTrigger`. The reworked stacked-drawer pattern restores access via the existing site hamburger. (#10)
- Cramped top spacing on the fumadocs mobile sidebar — added 1rem of breathing room above the section picker. (#10)

[0.1.0]: https://github.com/fleetbase/fleetbase.io/releases/tag/v0.1.0
