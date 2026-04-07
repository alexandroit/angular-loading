const path = require('path');
const { execSync } = require('child_process');

const { getAngularDocLine } = require('./angular-doc-lines');

const action = process.argv[2];
const line = Number(process.argv[3]);

if (!action || !line || !getAngularDocLine(line)) {
  console.error('Usage: node scripts/run-angular-doc-line.js <install|build> <line>');
  process.exit(1);
}

const targetDir = path.join(__dirname, '..', 'docs-src', `angular-${line}`);

if (action === 'install') {
  execSync('npm install --ignore-scripts', {
    cwd: targetDir,
    stdio: 'inherit'
  });
  process.exit(0);
}

if (action === 'build') {
  execSync('npm run build', {
    cwd: targetDir,
    stdio: 'inherit'
  });
  process.exit(0);
}

console.error('Unknown action:', action);
process.exit(1);
