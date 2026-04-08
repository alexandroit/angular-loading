const fs = require('fs');
const path = require('path');

const { getAngularDocLine, listAngularDocLines } = require('./angular-doc-lines');

const rootDir = path.resolve(__dirname, '..');
const angular2SrcDir = path.join(rootDir, 'docs-src', 'angular-2', 'src');
const angular2AppDir = path.join(angular2SrcDir, 'app');
const rootPackage = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const legacyVariantValues = [
  'ring',
  'dual-ring',
  'segmented-ring',
  'arc',
  'orbit',
  'comet',
  'halo',
  'radar',
  'astronaut',
  'astronaut-to-mars',
  'baseball-player',
  'football-player',
  'galaxy',
  'pulse',
  'wave-dots',
  'bouncing-dots',
  'typing-dots',
  'grid-pulse',
  'magnetic-dots',
  'spiral-dots',
  'constellation',
  'equalizer-bars',
  'rising-bars',
  'shimmer',
  'scan-line',
  'liquid-pill',
  'ripple-stack',
  'minimal-spinner',
  'neon-spinner',
  'glass-spinner',
  'vortex',
  'cube',
  'diamond',
  'prism',
  'skeleton-blocks'
];

function ensureDirectory(targetPath) {
  if (fs.existsSync(targetPath)) {
    return;
  }

  ensureDirectory(path.dirname(targetPath));
  fs.mkdirSync(targetPath);
}

function removeDirectory(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return;
  }

  fs.readdirSync(targetPath).forEach((entry) => {
    const entryPath = path.join(targetPath, entry);
    const stat = fs.lstatSync(entryPath);

    if (stat.isSymbolicLink()) {
      fs.unlinkSync(entryPath);
      return;
    }

    if (stat.isDirectory()) {
      removeDirectory(entryPath);
      return;
    }

    fs.unlinkSync(entryPath);
  });

  fs.rmdirSync(targetPath);
}

function writeFile(targetPath, contents) {
  ensureDirectory(path.dirname(targetPath));
  fs.writeFileSync(targetPath, contents);
}

function readAngular2AppFile(relativePath) {
  return fs.readFileSync(path.join(angular2AppDir, relativePath), 'utf8');
}

function modernizeComponentSource(contents) {
  return contents
    .replace(/^declare var module:[^\n]+\n/gm, '')
    .replace(/\s*moduleId: module\.id,\n/g, '');
}

function createAppComponentTs(line) {
  let contents = modernizeComponentSource(readAngular2AppFile('app.component.ts'))
    .replace('Angular 2 docs loaded successfully.', `Angular ${line} docs loaded successfully.`)
    .replace('@Component({  selector:', '@Component({\n  selector:');

  if (line >= 14) {
    contents = contents.replace("  selector: 'app-root',\n", "  selector: 'app-root',\n  standalone: false,\n");
  }

  return contents;
}

function createPlaygroundComponentTs(line) {
  let contents = modernizeComponentSource(readAngular2AppFile('playground.component.ts'))
    .replace('@Component({  selector:', '@Component({\n  selector:');

  if (line >= 13) {
    contents = contents
      .replace("declare var require: any;\n\nvar loadingCore: any = require('@stackline/loading');\n", "import { loaderVariants } from '@stackline/loading';\n")
      .replace('(loadingCore.loaderVariants || [])', '(loaderVariants || [])');
  } else {
    contents = contents.replace(
      "declare var require: any;\n\nvar loadingCore: any = require('@stackline/loading');\n",
      [
        'var legacyVariantValues: string[] = ' + JSON.stringify(legacyVariantValues) + ';',
        '',
        'function toLegacyVariantLabel(value: string): string {',
        "  return value.split('-').map(function (part: string) {",
        "    return part.charAt(0).toUpperCase() + part.slice(1);",
        "  }).join(' ');",
        '}',
        '',
        'var loadingCore: any = {',
        '  loaderVariants: legacyVariantValues.map(function (value: string) {',
        '    return {',
        '      value: value,',
        '      label: toLegacyVariantLabel(value)',
        '    };',
        '  })',
        '};',
        ''
      ].join('\n')
    );
  }

  if (line >= 14) {
    contents = contents.replace("  selector: 'playground-panel',\n", "  selector: 'playground-panel',\n  standalone: false,\n");
  }

  return contents;
}

function createAppComponentHtml() {
  return readAngular2AppFile('app.component.html')
    .replace('Angular 2.4 · @stackline/loading 0.1.1', 'Angular {{ releaseLine.angular }} · @stackline/loading {{ releaseLine.coreVersion }}')
    .replace('A thin Angular 2 wrapper around the Stackline loading toolkit.', 'A maintained Angular wrapper around the Stackline loading toolkit.')
    .replace('The first Angular line covers the most practical loading patterns for enterprise apps and SaaS screens.', 'This Angular line covers the most practical loading patterns for enterprise apps and SaaS screens.')
    .replace('<div class="preview-frame component-frame"\n                 (create)="onCreate(\'Standalone component\')"\n                 (shown)="onShown(\'Standalone component\')">\n              <revive-loading [visible]="true" [options]="basicOptions"></revive-loading>\n            </div>', '<div class="preview-frame component-frame">\n              <revive-loading\n                [visible]="true"\n                [options]="basicOptions"\n                (create)="onCreate(\'Standalone component\')"\n                (shown)="onShown(\'Standalone component\')"></revive-loading>\n            </div>');
}

function createIndexHtml(line) {
  return [
    '<!doctype html>',
    '<html lang="en">',
    '  <head>',
    '    <meta charset="utf-8" />',
    `    <title>@stackline/angular-loading · Angular ${line}</title>`,
    '    <base href="./" />',
    '    <meta name="viewport" content="width=device-width, initial-scale=1" />',
    '  </head>',
    '  <body>',
    '    <app-root>',
    '      <div class="boot-shell">',
    '        <div class="boot-card">',
    '          <div class="boot-loader"></div>',
    `          <p>Booting Angular ${line} docs…</p>`,
    '        </div>',
    '      </div>',
    '    </app-root>',
    '  </body>',
    '</html>',
    ''
  ].join('\n');
}

function createMainTs() {
  return [
    "import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';",
    "import { enableProdMode } from '@angular/core';",
    "import { environment } from './environments/environment';",
    "import { AppModule } from './app/app.module';",
    '',
    'if (environment.production) {',
    '  enableProdMode();',
    '}',
    '',
    'platformBrowserDynamic().bootstrapModule(AppModule).catch((error) => {',
    '  console.error(error);',
    '  var details = [',
    "    'error: ' + String(error),",
    "    error && error.message ? 'message: ' + error.message : '',",
    "    error && error.ngErrorCode ? 'ngErrorCode: ' + error.ngErrorCode : '',",
    "    error && error.code ? 'code: ' + error.code : '',",
    "    error && error.ngTokenPath ? 'ngTokenPath: ' + JSON.stringify(error.ngTokenPath) : '',",
    "    error && error.stack ? '' : '',",
    '    error && error.stack ? error.stack : \'\'',
    "  ].filter(Boolean).join('\\n');",
    "  document.body.innerHTML = '<pre style=\"padding:16px;white-space:pre-wrap;\">' + details.replace(/</g, '&lt;') + '</pre>';",
    '});',
    ''
  ].join('\n');
}

function createPolyfills(line) {
  const lines = [
    "import 'core-js/es6/reflect';",
    "import 'core-js/es7/reflect';"
  ];

  if (line >= 17) {
    lines.push("import 'zone.js';");
  } else {
    lines.push("import 'zone.js/dist/zone';");
  }

  lines.push('');
  return lines.join('\n');
}

function createEnvironment(prod) {
  return [
    'export const environment = {',
    `  production: ${prod ? 'true' : 'false'}`,
    '};',
    ''
  ].join('\n');
}

function createBrowserslist() {
  return [
    'last 1 Chrome version',
    'last 1 Firefox version',
    'last 1 Safari version',
    'last 1 Edge version',
    '',
    'not IE 9-11',
    'not IE_Mob 11',
    ''
  ].join('\n');
}

function getTsProfile(line) {
  if (line <= 5) {
    return { target: 'es5', lib: 'es2015', skipLibCheck: false, useDefineForClassFields: false };
  }

  if (line <= 7) {
    return { target: 'es2015', lib: 'es2017', skipLibCheck: false, useDefineForClassFields: false };
  }

  if (line === 8) {
    return { target: 'es2015', lib: 'es2018', skipLibCheck: false, useDefineForClassFields: false };
  }

  if (line === 9) {
    return { target: 'es2015', lib: 'es2019', skipLibCheck: false, useDefineForClassFields: false };
  }

  if (line <= 12) {
    return { target: 'es2015', lib: 'es2020', skipLibCheck: true, useDefineForClassFields: false };
  }

  if (line <= 15) {
    return { target: 'es2020', lib: 'es2020', skipLibCheck: true, useDefineForClassFields: true };
  }

  return { target: 'es2022', lib: 'es2022', skipLibCheck: true, useDefineForClassFields: true };
}

function createTsconfig(line) {
  const profile = getTsProfile(line);
  const lines = [
    '{',
    '  "compileOnSave": false,',
    '  "compilerOptions": {',
    '    "baseUrl": "./",',
    '    "outDir": "./dist/out-tsc",',
    '    "sourceMap": true,',
    '    "declaration": false,',
    '    "moduleResolution": "node",',
    '    "emitDecoratorMetadata": true,',
    '    "experimentalDecorators": true,'
  ];

  if (profile.skipLibCheck) {
    lines.push('    "skipLibCheck": true,');
  }

  lines.push(`    "target": "${profile.target}",`);

  if (profile.useDefineForClassFields) {
    lines.push('    "useDefineForClassFields": false,');
  }

  lines.push(
    '    "typeRoots": [',
    '      "node_modules/@types"',
    '    ],',
    '    "lib": [',
    `      "${profile.lib}",`,
    '      "dom"',
    '    ]',
    '  }',
    '}',
    ''
  );

  return lines.join('\n');
}

function createTsconfigApp() {
  return [
    '{',
    '  "extends": "../tsconfig.json",',
    '  "compilerOptions": {',
    '    "outDir": "../out-tsc/app",',
    '    "module": "es2015"',
    '  },',
    '  "exclude": [',
    '    "**/*.spec.ts"',
    '  ]',
    '}',
    ''
  ].join('\n');
}

function createAngularJson(line) {
  const projectName = `angular-loading-docs-angular${line}`;
  const optionLines = [
    `            "outputPath": "../../docs/angular-${line}",`,
    '            "index": "src/index.html",',
    '            "main": "src/main.ts",',
    '            "polyfills": "src/polyfills.ts",',
    '            "tsConfig": "src/tsconfig.app.json",',
    '            "assets": [],',
    '            "styles": [',
    '              "src/styles.css"',
    '            ],',
    '            "scripts": []'
  ];

  if (line >= 10) {
    optionLines[optionLines.length - 1] += ',';
    optionLines.push(
      '            "allowedCommonJsDependencies": [',
      '              "@stackline/angular-loading",',
      '              "@stackline/loading"',
      '            ]'
    );
  }

  return [
    '{',
    '  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",',
    '  "version": 1,',
    '  "newProjectRoot": "projects",',
    '  "projects": {',
    `    "${projectName}": {`,
    '      "root": "",',
    '      "sourceRoot": "src",',
    '      "projectType": "application",',
    '      "prefix": "app",',
    '      "architect": {',
    '        "build": {',
    '          "builder": "@angular-devkit/build-angular:browser",',
    '          "options": {',
    ...optionLines,
    '          },',
    '          "configurations": {',
    '            "production": {',
    '              "optimization": true,',
    '              "outputHashing": "all",',
    '              "sourceMap": false,',
    '              "namedChunks": false,',
    '              "aot": true,',
    '              "extractLicenses": true,',
    '              "vendorChunk": false,',
    '              "buildOptimizer": true,',
    '              "fileReplacements": [',
    '                {',
    '                  "replace": "src/environments/environment.ts",',
    '                  "with": "src/environments/environment.prod.ts"',
    '                }',
    '              ]',
    '            }',
    '          }',
    '        },',
    '        "serve": {',
    '          "builder": "@angular-devkit/build-angular:dev-server",',
    '          "options": {',
    `            "browserTarget": "${projectName}:build"`,
    '          },',
    '          "configurations": {',
    '            "production": {',
    `              "browserTarget": "${projectName}:build:production"`,
    '            }',
    '          }',
    '        }',
    '      }',
    '    }',
    '  }',
    '}',
    ''
  ].join('\n');
}

function createAngularCliJson(line) {
  const projectName = `angular-loading-docs-angular${line}`;

  return [
    '{',
    '  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",',
    '  "project": {',
    `    "name": "${projectName}"`,
    '  },',
    '  "apps": [',
    '    {',
    '      "root": "src",',
    `      "outDir": "../../docs/angular-${line}",`,
    '      "assets": [],',
    '      "index": "index.html",',
    '      "main": "main.ts",',
    '      "polyfills": "polyfills.ts",',
    '      "tsconfig": "tsconfig.app.json",',
    '      "prefix": "app",',
    '      "styles": [',
    '        "styles.css"',
    '      ],',
    '      "scripts": [],',
    '      "environmentSource": "environments/environment.ts",',
    '      "environments": {',
    '        "dev": "environments/environment.ts",',
    '        "prod": "environments/environment.prod.ts"',
    '      }',
    '    }',
    '  ],',
    '  "defaults": {',
    '    "styleExt": "css",',
    '    "component": {',
    '      "inlineStyle": false,',
    '      "inlineTemplate": false',
    '    }',
    '  }',
    '}',
    ''
  ].join('\n');
}

function createPackageJson(line, config) {
  const dependencies = {
    '@angular/common': `${config.angular}`,
    '@angular/compiler': `${config.angular}`,
    '@angular/core': `${config.angular}`,
    '@angular/forms': `${config.angular}`,
    '@angular/platform-browser': `${config.angular}`,
    '@angular/platform-browser-dynamic': `${config.angular}`,
    '@stackline/angular-loading': `${line}.0.0`,
    'core-js': `${config.coreJs}`,
    rxjs: `${config.rxjs}`,
    'zone.js': `${config.zone}`
  };

  if (line >= 13) {
    dependencies['@stackline/loading'] = rootPackage.dependencies['@stackline/loading'];
  }

  if (line <= 7) {
    dependencies['@angular/http'] = `${config.angular}`;
  }

  if (config.tslib) {
    dependencies.tslib = `${config.tslib}`;
  }

  const devDependencies = {
    '@angular/cli': `${config.cli}`,
    '@angular/compiler-cli': `${config.angular}`,
    '@types/node': line <= 5 ? '6.0.60' : line <= 8 ? '8.9.4' : '12.12.54',
    typescript: `${config.typescript}`
  };

  if (config.devkit) {
    devDependencies['@angular-devkit/build-angular'] = `${config.devkit}`;
    devDependencies['@types/minimatch'] = '3.0.3';
  }

  const buildScript = line <= 5
    ? `ng build --target=development --environment=dev --output-path ../../docs/angular-${line} --base-href ./`
    : line === 8
      ? `ng build --output-path ../../docs/angular-${line} --base-href ./ --es5BrowserSupport=false --build-optimizer=false --vendor-chunk=true --named-chunks=true --aot=false`
    : line >= 21
      ? `ng build --configuration production --output-path ../../docs/angular-${line} --base-href ./`
      : `ng build --output-path ../../docs/angular-${line} --base-href ./ --build-optimizer=false --vendor-chunk=true --named-chunks=true --aot=false`;

  return JSON.stringify({
    name: `@stackline/angular-loading-docs-angular${line}`,
    version: '1.0.0',
    private: true,
    scripts: {
      ng: 'node ./node_modules/@angular/cli/bin/ng',
      start: `node ./node_modules/@angular/cli/bin/ng serve`,
      build: `node ./node_modules/@angular/cli/bin/ng ${buildScript.replace(/^ng\s+/, '')}`
    },
    dependencies,
    devDependencies
  }, null, 2) + '\n';
}

function createReleaseLine(line, config) {
  const angularParts = config.angular.split('.');

  return [
    'export const RELEASE_LINE = {',
    `  angular: '${angularParts[0]}.${angularParts[1]}.x',`,
    `  packageVersion: '${line}.0.0',`,
    `  coreVersion: '${String(rootPackage.dependencies['@stackline/loading']).replace(/^[^0-9]*/, '')}',`,
    `  runtimeTarget: 'Angular ${line} + Angular CLI',`,
    `  docsPath: '/angular-${line}/'`,
    '};',
    ''
  ].join('\n');
}

function generateLine(line) {
  const config = getAngularDocLine(line);
  const targetDir = path.join(rootDir, 'docs-src', `angular-${line}`);
  const targetSrcDir = path.join(targetDir, 'src');
  const targetAppDir = path.join(targetSrcDir, 'app');

  removeDirectory(targetDir);
  ensureDirectory(targetAppDir);

  writeFile(path.join(targetDir, 'package.json'), createPackageJson(line, config));

  if (line >= 8) {
    writeFile(path.join(targetDir, 'browserslist'), createBrowserslist());
  }

  writeFile(path.join(targetDir, 'tsconfig.json'), createTsconfig(line));
  writeFile(path.join(targetDir, 'src', 'tsconfig.app.json'), createTsconfigApp());
  writeFile(path.join(targetDir, 'src', 'index.html'), createIndexHtml(line));
  writeFile(path.join(targetDir, 'src', 'main.ts'), createMainTs());
  writeFile(path.join(targetDir, 'src', 'polyfills.ts'), createPolyfills(line));
  writeFile(path.join(targetDir, 'src', 'styles.css'), fs.readFileSync(path.join(angular2SrcDir, 'styles.css'), 'utf8'));
  writeFile(path.join(targetDir, 'src', 'environments', 'environment.ts'), createEnvironment(false));
  writeFile(path.join(targetDir, 'src', 'environments', 'environment.prod.ts'), createEnvironment(true));

  if (config.usesAngularJson) {
    writeFile(path.join(targetDir, 'angular.json'), createAngularJson(line));
  } else {
    writeFile(path.join(targetDir, '.angular-cli.json'), createAngularCliJson(line));
  }

  writeFile(path.join(targetAppDir, 'app.module.ts'), readAngular2AppFile('app.module.ts'));
  writeFile(path.join(targetAppDir, 'app.component.ts'), createAppComponentTs(line));
  writeFile(path.join(targetAppDir, 'app.component.html'), createAppComponentHtml());
  writeFile(path.join(targetAppDir, 'app.component.css'), readAngular2AppFile('app.component.css'));
  writeFile(path.join(targetAppDir, 'playground.component.ts'), createPlaygroundComponentTs(line));
  writeFile(path.join(targetAppDir, 'playground.component.html'), readAngular2AppFile('playground.component.html'));
  writeFile(path.join(targetAppDir, 'playground.component.css'), readAngular2AppFile('playground.component.css'));
  writeFile(path.join(targetAppDir, 'data', 'api.ts'), readAngular2AppFile(path.join('data', 'api.ts')));
  writeFile(path.join(targetAppDir, 'data', 'release-line.ts'), createReleaseLine(line, config));
}

listAngularDocLines().forEach(generateLine);
