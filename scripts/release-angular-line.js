const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');
const esbuild = require('esbuild');

const { getAngularDocLine } = require('./angular-doc-lines');

const rootDir = path.resolve(__dirname, '..');
const packageName = '@stackline/angular-loading';

function ensureDir(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function removeDir(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return;
  }

  fs.rmSync(targetPath, { recursive: true, force: true });
}

function copyDir(sourceDir, targetDir) {
  fs.cpSync(sourceDir, targetDir, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
}

function run(command, cwd, extraEnv = {}) {
  execSync(command, {
    cwd,
    stdio: 'inherit',
    env: {
      ...process.env,
      ...extraEnv,
      npm_config_yes: 'true'
    }
  });
}

function npmVersionExists(version) {
  try {
    const output = execSync(`npm view ${packageName}@${version} version --json`, {
      cwd: rootDir,
      stdio: ['ignore', 'pipe', 'ignore']
    }).toString().trim();

    return output.replace(/^"|"$/g, '') === version;
  } catch (error) {
    return false;
  }
}

function replaceBuildOutputPath(script, line) {
  const target = './dist-docs';
  let next = script.replace(new RegExp(`\\.\\.\\/\\.\\.\\/docs\\/angular-${line}`, 'g'), target);

  if (/--output-path(?:=|\s+)/.test(next)) {
    next = next.replace(/--output-path(?:=|\s+)(\S+)/, `--output-path ${target}`);
  } else {
    next += ` --output-path ${target}`;
  }

  return next;
}

function createLegacyPackage(line) {
  const version = `${line}.0.0`;
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), `revivejs-angular-loading-${version}-`));
  const distLegacyDir = path.join(rootDir, 'dist-legacy');
  const coreEntry = path.join(rootDir, 'node_modules', '@stackline', 'loading', 'dist', 'index.js');
  const vendorDir = path.join(tempDir, 'vendor');
  const vendorEntry = path.join(vendorDir, 'loading.js');
  const packageJsonPath = path.join(tempDir, 'package.json');
  const rootPackage = readJson(path.join(rootDir, 'package.json'));
  const peerRange = `>=${line}.0.0 <${line + 1}.0.0`;

  copyDir(distLegacyDir, tempDir);
  ensureDir(vendorDir);

  esbuild.buildSync({
    entryPoints: [coreEntry],
    outfile: vendorEntry,
    bundle: true,
    format: 'cjs',
    platform: 'browser',
    target: ['es2015'],
    sourcemap: false,
    minify: false,
    logLevel: 'silent'
  });

  [
    path.join(tempDir, 'src', 'LoadingController.js'),
    path.join(tempDir, 'src', 'LoadingService.js')
  ].forEach((filePath) => {
    const contents = fs.readFileSync(filePath, 'utf8')
      .replace(/require\("@stackline\/loading"\)/g, "require('../vendor/loading.js')");

    fs.writeFileSync(filePath, contents);
  });

  fs.copyFileSync(path.join(rootDir, 'README.md'), path.join(tempDir, 'README.md'));
  fs.copyFileSync(path.join(rootDir, 'LICENSE'), path.join(tempDir, 'LICENSE'));

  const publicApiTypesPath = path.join(tempDir, 'src', 'public_api.d.ts');
  fs.writeFileSync(
    publicApiTypesPath,
    fs.readFileSync(publicApiTypesPath, 'utf8').replace(/ModuleWithProviders<LoadingModule>/g, 'ModuleWithProviders')
  );

  writeJson(packageJsonPath, {
    name: packageName,
    version,
    description: 'Maintained Angular wrapper components, directives, and service helpers for @stackline/loading.',
    main: './index.js',
    types: './index.d.ts',
    sideEffects: false,
    files: [
      'index.d.ts',
      'index.js',
      'index.js.map',
      'src',
      'vendor',
      'README.md',
      'LICENSE'
    ],
    repository: rootPackage.repository,
    publishConfig: {
      access: 'public'
    },
    keywords: rootPackage.keywords,
    author: rootPackage.author,
    license: rootPackage.license,
    bugs: rootPackage.bugs,
    homepage: rootPackage.homepage,
    peerDependencies: {
      '@angular/common': peerRange,
      '@angular/core': peerRange,
      '@angular/platform-browser': peerRange
    }
  });

  run('npm pack', tempDir);

  return {
    version,
    tempDir,
    tarballPath: path.join(tempDir, `revivejs-angular-loading-${version}.tgz`)
  };
}

function createModernPackage() {
  const rootPackage = readJson(path.join(rootDir, 'package.json'));
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'revivejs-angular-loading-21.0.0-'));

  copyDir(path.join(rootDir, 'dist'), path.join(tempDir, 'dist'));
  fs.copyFileSync(path.join(rootDir, 'README.md'), path.join(tempDir, 'README.md'));
  fs.copyFileSync(path.join(rootDir, 'LICENSE'), path.join(tempDir, 'LICENSE'));
  writeJson(path.join(tempDir, 'package.json'), rootPackage);

  run('npm pack', tempDir);

  return {
    version: rootPackage.version,
    tempDir,
    tarballPath: path.join(tempDir, `revivejs-angular-loading-${rootPackage.version}.tgz`)
  };
}

function validateDocsLine(line, tarballPath) {
  const docsSourceDir = path.join(rootDir, 'docs-src', `angular-${line}`);
  const tempDocsDir = fs.mkdtempSync(path.join(os.tmpdir(), `revivejs-angular-loading-docs-${line}-`));
  const tempBuildDir = path.join(tempDocsDir, 'dist-docs');
  const packageJsonPath = path.join(tempDocsDir, 'package.json');
  const docsPackageJson = readJson(path.join(docsSourceDir, 'package.json'));

  copyDir(docsSourceDir, tempDocsDir);

  docsPackageJson.dependencies[packageName] = tarballPath;
  docsPackageJson.scripts.build = replaceBuildOutputPath(docsPackageJson.scripts.build, line);
  writeJson(packageJsonPath, docsPackageJson);

  const validationEnv = line <= 12
    ? { NODE_OPTIONS: [process.env.NODE_OPTIONS, '--openssl-legacy-provider'].filter(Boolean).join(' ') }
    : {};

  run('npm install --ignore-scripts --legacy-peer-deps --prefer-offline', tempDocsDir, validationEnv);
  run('npm run build', tempDocsDir, validationEnv);

  if (!fs.existsSync(path.join(tempBuildDir, 'index.html'))) {
    throw new Error(`Angular ${line} docs validation completed without producing index.html`);
  }

  return {
    tempBuildDir
  };
}

function syncBuiltDocs(line, buildDir) {
  const targetDir = path.join(rootDir, 'docs', `angular-${line}`);
  removeDir(targetDir);
  copyDir(buildDir, targetDir);
  fs.writeFileSync(path.join(rootDir, 'docs', '.nojekyll'), '');
}

function publishModernRoot() {
  const rootPackage = readJson(path.join(rootDir, 'package.json'));

  if (npmVersionExists(rootPackage.version)) {
    console.log(`${packageName}@${rootPackage.version} is already published. Skipping npm publish.`);
    return;
  }

  run('npm publish', rootDir);
  console.log(`Published ${packageName}@${rootPackage.version}.`);
}

function releaseAngularLine(line, options) {
  const releaseLine = getAngularDocLine(line);

  if (!releaseLine && line !== 21) {
    throw new Error(`Unsupported Angular release line: ${line}`);
  }

  if (line === 2) {
    console.log('Angular 2 is already published and handled separately. Skipping.');
    return;
  }

  console.log(`\n=== Angular ${line} · ${line}.0.0 ===`);

  let packageBundle;

  if (line === 21) {
    packageBundle = createModernPackage();
  } else {
    packageBundle = createLegacyPackage(line);
  }

  const docsValidation = validateDocsLine(line, packageBundle.tarballPath);

  syncBuiltDocs(line, docsValidation.tempBuildDir);
  run('node scripts/write-docs-root.js', rootDir);
  console.log(`Validated Angular ${line} docs and synced docs/angular-${line}.`);

  if (options.publish) {
    if (line === 21) {
      publishModernRoot();
    } else if (npmVersionExists(packageBundle.version)) {
      console.log(`${packageName}@${packageBundle.version} is already published. Skipping npm publish.`);
    } else {
      run('npm publish', packageBundle.tempDir);
      console.log(`Published ${packageName}@${packageBundle.version}.`);
    }
  }
}

function parseCli() {
  const line = Number(process.argv[2]);
  const flags = new Set(process.argv.slice(3));

  if (!line) {
    throw new Error('Usage: node scripts/release-angular-line.js <line> [--no-publish]');
  }

  return {
    line,
    options: {
      publish: !flags.has('--no-publish')
    }
  };
}

if (require.main === module) {
  const { line, options } = parseCli();
  releaseAngularLine(line, options);
}

module.exports = {
  releaseAngularLine
};
