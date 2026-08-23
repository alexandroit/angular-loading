# Compatibility Fixture Catalog

The documentation family matching the maintained package major is the only
active application. It keeps normal npm manifests and is covered by build and
audit jobs.

Older family roots and nested exact-version directories are immutable
compatibility records. Their dependency data is stored as
`package.fixture.json` (and `package-lock.fixture.json` when a historical lock
is retained) so security tools do not mistake archived metadata for a deployed
application. These records are not installed in CI and are not included in the
published npm package.

Release validation materializes a historical family manifest only inside its
temporary build directory. The current Angular 21 docs remain a normal audited
application with a checked-in lockfile.

Run `npm run test:fixtures` from the repository root to validate every record.
The contract checks framework pins, family and directory versions, local package
references, privacy, and validator wiring without executing end-of-life
toolchains.

Do not use a nested fixture as an application template. Security support follows
the current package line and the framework vendor's supported release lifecycle.
