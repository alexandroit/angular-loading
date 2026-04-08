const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'docs-src', 'angular-2');
const outputDir = path.join(rootDir, 'docs', 'angular-2');
const wrapperDistDir = path.join(rootDir, 'dist-legacy');
const loadingPackageDir = path.join(rootDir, 'node_modules', '@stackline', 'loading');
const loadingCjsEntry = path.join(loadingPackageDir, 'dist', 'index.cjs');

function removeDirectory(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return;
  }

  fs.readdirSync(targetPath).forEach((entry) => {
    const entryPath = path.join(targetPath, entry);
    const stat = fs.statSync(entryPath);

    if (stat.isDirectory()) {
      removeDirectory(entryPath);
      return;
    }

    fs.unlinkSync(entryPath);
  });

  fs.rmdirSync(targetPath);
}

function ensureDirectory(targetPath) {
  if (fs.existsSync(targetPath)) {
    return;
  }

  ensureDirectory(path.dirname(targetPath));
  fs.mkdirSync(targetPath);
}

function copyDirectory(sourcePath, targetPath) {
  ensureDirectory(targetPath);

  fs.readdirSync(sourcePath).forEach((entry) => {
    const entrySourcePath = path.join(sourcePath, entry);
    const entryTargetPath = path.join(targetPath, entry);
    const stat = fs.statSync(entrySourcePath);

    if (stat.isDirectory()) {
      copyDirectory(entrySourcePath, entryTargetPath);
      return;
    }

    ensureDirectory(path.dirname(entryTargetPath));
    fs.copyFileSync(entrySourcePath, entryTargetPath);
  });
}

function writeFile(targetPath, contents) {
  ensureDirectory(path.dirname(targetPath));
  fs.writeFileSync(targetPath, contents);
}

if (!fs.existsSync(wrapperDistDir)) {
  throw new Error('Build the library first with "npm run build:lib" before building the docs.');
}

if (!fs.existsSync(loadingCjsEntry)) {
  throw new Error('Install root dependencies before building docs so @stackline/loading can be copied.');
}

removeDirectory(outputDir);
ensureDirectory(outputDir);

copyDirectory(path.join(sourceDir, 'src'), outputDir);
fs.copyFileSync(path.join(sourceDir, 'systemjs.config.js'), path.join(outputDir, 'systemjs.config.js'));
copyDirectory(wrapperDistDir, path.join(outputDir, 'vendor', 'angular-loading'));
writeFile(path.join(outputDir, 'vendor', 'loading', 'index.js'), fs.readFileSync(loadingCjsEntry, 'utf8'));
writeFile(path.join(rootDir, 'docs', '.nojekyll'), '');
