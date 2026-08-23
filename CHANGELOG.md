# Changelog

All notable changes to `@stackline/angular-loading` are documented here.

## [Unreleased]

- Classified non-current documentation families as compatibility fixtures while
  keeping the maintained framework line buildable and audited.
- Added a checked-in lockfile, patched development-server overrides, and an
  exact advisory gate for the maintained Angular 21 documentation application.
- Moved exact-version dependency records to `package.fixture.json`, repaired
  their validators, and added an offline catalog contract to keep historical
  metadata out of active dependency alerts.
- Replaced the removed `@stackline/loading` dependency with the maintained
  `@stackline/loading-core` package without changing the Angular wrapper API.
- Refreshed the Angular 21 lockfile to remove known dependency advisories.
- Made the Angular 21 documentation build reproducible from a clean checkout,
  removed unused vulnerable optional tooling, and restored its analytics tags.
- Limited legacy `core-js` polyfills to the Angular release lines that require
  them and updated the current documentation line to Angular 21.2.21.
- Added a package-specific security policy and confidential reporting path.
- Added reproducible CI packaging and a manual npm provenance release workflow.
- Included release and security documentation in the published package.

## [21.0.0] - 2026-04-07

- Published the Angular 21 compatibility line.
- Added component, directive, and service integrations for `@stackline/loading-core`.
- Preserved versioned documentation for Angular 2 through Angular 21.

[Unreleased]: https://github.com/alexandroit/angular-loading/commits/main
[21.0.0]: https://www.npmjs.com/package/@stackline/angular-loading/v/21.0.0
