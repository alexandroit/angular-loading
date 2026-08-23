# Security Policy

## Supported versions

Security fixes are released for the maintained `@stackline/angular-loading`
version lines documented in the README. Use the latest patch release available
for the Angular line used by your application.

The maintained Angular 21 documentation application has a checked-in lockfile.
Overrides patch its development server and UUID dependency. Angular's Less
compiler still reaches `image-size`, whose two high-severity parser advisories
do not have a patched upstream release. Documentation builds do not process
untrusted images, and this development-only path is absent from the published
package. The audit gate accepts only those exact advisories and rejects every
other finding or newly available compatible fix.

## Historical documentation artifacts

The versioned bundles under `docs/angular-*` are generated outputs retained to
preserve previously published Angular compatibility examples. They are not
package source, are not imported by the maintained implementation, and are not
included in the npm package.

For end-of-life Angular lines, replacing a bundled framework or compiler would
change the compatibility target. Static-analysis findings confined to those
immutable generated files are reviewed against their actual input flow and may
be classified with an explicit GitHub rationale. Findings in maintained source,
current examples, or reachable application behavior remain actionable.

## Reporting a vulnerability

Report suspected vulnerabilities privately through
[GitHub Security Advisories](https://github.com/alexandroit/angular-loading/security/advisories/new).
Do not publish exploit details in a GitHub issue.

Include the affected version, Angular and Node.js versions, a minimal synthetic
reproduction, realistic impact, and any known mitigation. Remove credentials,
personal data, and proprietary application code.

We aim to acknowledge reports within three business days, provide an initial
assessment within seven business days, and send an update at least every
fourteen days while confirmed remediation is active. Coordinated disclosure is
preferred.
