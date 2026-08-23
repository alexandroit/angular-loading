const fs = require('fs');
const path = require('path');
const { execFileSync, execSync } = require('child_process');

const { getAngularDocLine } = require('./angular-doc-lines');

const action = process.argv[2];
const line = Number(process.argv[3]);

if (!action || !line || !getAngularDocLine(line)) {
  console.error('Usage: node scripts/run-angular-doc-line.js <install|build> <line>');
  process.exit(1);
}

const targetDir = path.join(__dirname, '..', 'docs-src', `angular-${line}`);

if (action === 'install') {
  const lockfile = path.join(targetDir, 'package-lock.json');
  const installCommand = fs.existsSync(lockfile)
    ? 'npm ci --ignore-scripts --no-audit'
    : 'npm install --ignore-scripts --no-audit';

  execSync(installCommand, {
    cwd: targetDir,
    stdio: 'inherit'
  });
  execSync('npm rebuild esbuild', {
    cwd: targetDir,
    stdio: 'inherit'
  });
  execSync('npm prune --ignore-scripts --omit=optional --no-audit --package-lock=false', {
    cwd: targetDir,
    stdio: 'inherit'
  });
  execFileSync(process.execPath, [
    path.join(__dirname, '..', 'tools', 'stackline-audit-angular-build.mjs'),
    targetDir
  ], {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
  process.exit(0);
}

if (action === 'build') {
  execSync('npm run build', {
    cwd: targetDir,
    env: {
      ...process.env,
      ESBUILD_BINARY_PATH: path.join(targetDir, 'node_modules', 'esbuild', 'bin', 'esbuild')
    },
    stdio: 'inherit'
  });
  process.exit(0);
}

console.error('Unknown action:', action);
process.exit(1);
