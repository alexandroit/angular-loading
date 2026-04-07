(function (global) {
  System.config({
    transpiler: 'ts',
    typescriptOptions: {
      target: 'es5',
      module: 'commonjs',
      moduleResolution: 'node',
      sourceMap: true,
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      removeComments: false,
      noImplicitAny: false
    },
    meta: {
      typescript: {
        exports: 'ts'
      }
    },
    paths: {
      'npm:': 'https://unpkg.com/'
    },
    map: {
      app: '.',
      '@angular/core': 'npm:@angular/core@2.4.10/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@2.4.10/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@2.4.10/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@2.4.10/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.4.10/bundles/platform-browser-dynamic.umd.js',
      '@angular/forms': 'npm:@angular/forms@2.4.10/bundles/forms.umd.js',
      '@angular/http': 'npm:@angular/http@2.4.10/bundles/http.umd.js',
      rxjs: 'npm:rxjs@5.5.12',
      ts: 'npm:plugin-typescript@5.3.3/lib/plugin.js',
      typescript: 'npm:typescript@2.4.2/lib/typescript.js',
      '@revivejs/angular-loading': 'vendor/angular-loading',
      '@revivejs/loading': 'vendor/loading'
    },
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      '@revivejs/angular-loading': {
        main: './index.js',
        defaultExtension: 'js'
      },
      '@revivejs/loading': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
