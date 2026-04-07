const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir);
}

fs.writeFileSync(
  path.join(docsDir, 'index.html'),
  [
    '<!doctype html>',
    '<html lang="en">',
    '  <head>',
    '    <meta charset="utf-8" />',
    '    <meta http-equiv="refresh" content="0; url=./angular-21/" />',
    '    <title>@revivejs/angular-loading</title>',
    '  </head>',
    '  <body>',
    '    <p>Redirecting to <a href="./angular-21/">Angular 21 docs</a>…</p>',
    '  </body>',
    '</html>',
    ''
  ].join('\n')
);

fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
