const fs = require('fs');
const path = require('path');

const { listAngularDocLines } = require('./angular-doc-lines');

const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
const headTrackingSnippet = [
  '    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6353624842390947" crossorigin="anonymous"></script>',
  '    <!-- Google tag (gtag.js) -->',
  '    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3KQ9KECXR9"></script>',
  '    <script>',
  '      window.dataLayer = window.dataLayer || [];',
  '      function gtag(){dataLayer.push(arguments);}',
  "      gtag('js', new Date());",
  '',
  "      gtag('config', 'G-3KQ9KECXR9');",
  '    </script>'
];
const releaseLines = [2].concat(listAngularDocLines());

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

function hasBuiltDocs(line) {
  return fs.existsSync(path.join(docsDir, `angular-${line}`, 'index.html'));
}

function buildLineCards() {
  return releaseLines.map((line) => {
    const available = hasBuiltDocs(line);
    const stateClass = available ? 'is-live' : 'is-pending';
    const stateLabel = available ? 'Live docs' : 'Docs pending';
    const action = available
      ? `<a class="line-link" href="./angular-${line}/">Open Angular ${line}</a>`
      : '<span class="line-link is-disabled">Build pending</span>';

    return [
      `        <article class="line-card ${stateClass}">`,
      '          <div class="line-head">',
      `            <span class="line-badge">Angular ${line}</span>`,
      `            <span class="line-state">${stateLabel}</span>`,
      '          </div>',
      `          <h2>Angular ${line}</h2>`,
      '          <p>',
      '            Maintained wrapper docs for this Angular release line, keeping the same Stackline loading API',
      '            while matching the ecosystem expectations of that generation.',
      '          </p>',
      `          ${action}`,
      '        </article>'
    ].join('\n');
  }).join('\n');
}

fs.writeFileSync(
  path.join(docsDir, 'index.html'),
  [
    '<!doctype html>',
    '<html lang="en">',
    '  <head>',
    '    <meta charset="utf-8" />',
    '    <meta name="viewport" content="width=device-width, initial-scale=1" />',
    '    <title>@stackline/angular-loading</title>',
    '    <style>',
    '      :root {',
    '        color-scheme: light;',
    '        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;',
    '        background: #f8fafc;',
    '        color: #0f172a;',
    '      }',
    '      * { box-sizing: border-box; }',
    '      body { margin: 0; min-height: 100vh; background: radial-gradient(circle at top, rgba(59, 130, 246, 0.10), transparent 36%), #f8fafc; }',
    '      main { max-width: 1200px; margin: 0 auto; padding: 48px 20px 72px; }',
    '      .hero { display: grid; gap: 20px; margin-bottom: 28px; }',
    '      .eyebrow { display: inline-flex; width: fit-content; align-items: center; padding: 8px 12px; border-radius: 999px; background: rgba(37, 99, 235, 0.08); color: #1d4ed8; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }',
    '      h1 { margin: 0; font-size: clamp(40px, 8vw, 72px); line-height: 0.95; letter-spacing: -0.05em; }',
    '      .hero p { margin: 0; max-width: 760px; color: #475569; line-height: 1.75; font-size: 18px; }',
    '      .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }',
    '      .hero-link { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 16px; border-radius: 999px; text-decoration: none; font-weight: 700; border: 1px solid rgba(15, 23, 42, 0.08); }',
    '      .hero-link.primary { background: linear-gradient(135deg, #38bdf8, #2563eb); color: #ffffff; border-color: transparent; }',
    '      .hero-link.secondary { background: rgba(255, 255, 255, 0.92); color: #0f172a; }',
    '      .line-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; }',
    '      .line-card { display: grid; gap: 16px; min-height: 220px; padding: 22px; border-radius: 28px; border: 1px solid rgba(15, 23, 42, 0.08); background: rgba(255, 255, 255, 0.94); box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08); }',
    '      .line-card.is-live { border-color: rgba(37, 99, 235, 0.18); }',
    '      .line-card.is-pending { opacity: 0.86; }',
    '      .line-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }',
    '      .line-badge, .line-state { display: inline-flex; align-items: center; border-radius: 999px; min-height: 30px; padding: 0 12px; font-size: 12px; font-weight: 700; }',
    '      .line-badge { background: #dbeafe; color: #1d4ed8; }',
    '      .line-state { background: rgba(15, 23, 42, 0.06); color: #334155; }',
    '      .line-card h2 { margin: 0; font-size: 24px; letter-spacing: -0.03em; }',
    '      .line-card p { margin: 0; color: #475569; line-height: 1.7; }',
    '      .line-link { display: inline-flex; width: fit-content; align-items: center; justify-content: center; min-height: 42px; padding: 0 16px; border-radius: 999px; background: #0f172a; color: #ffffff; text-decoration: none; font-weight: 700; }',
    '      .line-link.is-disabled { background: rgba(15, 23, 42, 0.06); color: #64748b; }',
    '      @media (max-width: 720px) {',
    '        main { padding: 32px 16px 56px; }',
    '        .line-head { flex-direction: column; align-items: flex-start; }',
    '      }',
    '    </style>',
    ...headTrackingSnippet,
    '  </head>',
    '  <body>',
    '    <main>',
    '      <section class="hero">',
    '        <span class="eyebrow">Stackline Angular wrapper</span>',
    '        <h1>@stackline/angular-loading</h1>',
    '        <p>',
    '          Historical Angular support line by line. Each major keeps the same loader toolkit ideas while fitting the Angular',
    '          runtime, CLI, and packaging expectations of that specific generation.',
    '        </p>',
    '        <div class="hero-actions">',
    '          <a class="hero-link primary" href="./angular-2/">Open Angular 2 docs</a>',
    '          <a class="hero-link secondary" href="./angular-21/">Open Angular 21 docs</a>',
    '        </div>',
    '      </section>',
    '      <section class="line-grid">',
           buildLineCards(),
    '      </section>',
    '    </main>',
    '  </body>',
    '</html>',
    ''
  ].join('\n')
);

fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
