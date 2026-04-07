# @revivejs/angular-loading

> A maintained Angular wrapper for **@revivejs/loading** with a declarative component API, a host directive for overlays and inline states, and a service for fullscreen or programmatic loaders.

[![npm version](https://img.shields.io/npm/v/@revivejs/angular-loading.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-loading)
[![npm downloads](https://img.shields.io/npm/dt/@revivejs/angular-loading.svg?style=flat-square)](https://www.npmjs.com/package/@revivejs/angular-loading)
[![license](https://img.shields.io/npm/l/@revivejs/angular-loading.svg?style=flat-square)](https://github.com/alexandroit/angular-loading/blob/main/LICENSE)
[![Angular 21](https://img.shields.io/badge/Angular-21-red?style=flat-square&logo=angular)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)

**[Documentation & Live Demos](https://alexandroit.github.io/angular-loading/)** | **[npm](https://www.npmjs.com/package/@revivejs/angular-loading)** | **[Issues](https://github.com/alexandroit/angular-loading/issues)** | **[Repository](https://github.com/alexandroit/angular-loading)**

**Latest version:** `21.0.0`

## Why this library?

`@revivejs/angular-loading` brings the full ReviveJS loading toolkit into Angular apps without forcing a framework-specific visual system.

It gives Angular teams three practical integration paths:

- `<revive-loading>` when the loader itself is the primary thing being rendered
- `[reviveLoading]` when an existing card, table, button, modal, or section should become busy
- `LoadingService` when the loading state is fullscreen, global, or fully programmatic

The wrapper stays intentionally thin so the real power continues to live in the core package:

- polished variants from `@revivejs/loading`
- delay and `minVisible` anti-flicker behavior
- inline, overlay, container, and fullscreen modes
- accessibility defaults and visible labels
- a versioned docs history from `angular-2` through `angular-21`

## Features

| Feature | Supported |
| :--- | :---: |
| Angular wrapper component | ✅ |
| Angular directive for host overlays and inline states | ✅ |
| Angular service for imperative loaders | ✅ |
| Access to the same loader variants as the core package | ✅ |
| Delay and minimum visible duration support | ✅ |
| Fullscreen, card, table, modal, upload, and button patterns | ✅ |
| Rich versioned docs history | ✅ |
| Angular 2 historical docs line | ✅ |
| Angular 4 through Angular 21 docs lines | ✅ |

## Table of Contents

1. [Angular Version Compatibility](#angular-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Usage Patterns](#usage-patterns)
5. [API Overview](#api-overview)
6. [Run Locally](#run-locally)
7. [License](#license)

## Angular Version Compatibility

| Package version | Angular version | TypeScript version | Demo link |
| :---: | :---: | :---: | :--- |
| **21.0.0** | **21.2.x** | **5.9.x** | [Angular 21 demo](https://alexandroit.github.io/angular-loading/angular-21/) |
| **20.0.0** | **20.3.x** | **5.9.x** | [Angular 20 demo](https://alexandroit.github.io/angular-loading/angular-20/) |
| **19.0.0** | **19.2.x** | **5.8.x** | [Angular 19 demo](https://alexandroit.github.io/angular-loading/angular-19/) |
| **18.0.0** | **18.2.x** | **5.5.x** | [Angular 18 demo](https://alexandroit.github.io/angular-loading/angular-18/) |
| **17.0.0** | **17.3.x** | **5.4.x** | [Angular 17 demo](https://alexandroit.github.io/angular-loading/angular-17/) |
| **16.0.0** | **16.2.x** | **5.1.x** | [Angular 16 demo](https://alexandroit.github.io/angular-loading/angular-16/) |
| **15.0.0** | **15.2.x** | **4.9.x** | [Angular 15 demo](https://alexandroit.github.io/angular-loading/angular-15/) |
| **14.0.0** | **14.3.x** | **4.8.x** | [Angular 14 demo](https://alexandroit.github.io/angular-loading/angular-14/) |
| **13.0.0** | **13.4.x** | **4.6.x** | [Angular 13 demo](https://alexandroit.github.io/angular-loading/angular-13/) |
| **12.0.0** | **12.2.x** | **4.3.x** | [Angular 12 demo](https://alexandroit.github.io/angular-loading/angular-12/) |
| **11.0.0** | **11.2.x** | **4.1.x** | [Angular 11 demo](https://alexandroit.github.io/angular-loading/angular-11/) |
| **10.0.0** | **10.2.x** | **3.9.x** | [Angular 10 demo](https://alexandroit.github.io/angular-loading/angular-10/) |
| **9.0.0** | **9.1.x** | **3.8.x** | [Angular 9 demo](https://alexandroit.github.io/angular-loading/angular-9/) |
| **8.0.0** | **8.2.x** | **3.5.x** | [Angular 8 demo](https://alexandroit.github.io/angular-loading/angular-8/) |
| **7.0.0** | **7.2.x** | **3.2.x** | [Angular 7 demo](https://alexandroit.github.io/angular-loading/angular-7/) |
| **6.0.0** | **6.1.x** | **2.7.x** | [Angular 6 demo](https://alexandroit.github.io/angular-loading/angular-6/) |
| **5.0.0** | **5.2.x** | **2.6.x** | [Angular 5 demo](https://alexandroit.github.io/angular-loading/angular-5/) |
| **4.0.0** | **4.4.x** | **2.4.x** | [Angular 4 demo](https://alexandroit.github.io/angular-loading/angular-4/) |
| **2.0.0** | **2.4.x** | **2.4.x** | [Angular 2 demo](https://alexandroit.github.io/angular-loading/angular-2/) |

## Installation

```bash
npm install @revivejs/angular-loading
```

## Setup

### 1. Import the module

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoadingModule } from '@revivejs/angular-loading';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoadingModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 2. Use the component directly

```html
<revive-loading
  [visible]="true"
  [options]="{
    variant: 'orbit',
    size: 56,
    centered: true,
    label: 'Loading preview'
  }">
</revive-loading>
```

### 3. Or turn an existing host into a loading surface

```html
<div
  [reviveLoading]="isLoading"
  [loadingOptions]="{
    overlay: true,
    centered: true,
    variant: 'glass-spinner',
    label: 'Loading sales card'
  }">
  <h3>Revenue</h3>
  <p>$128,400</p>
</div>
```

## Usage Patterns

### Component

Use `<revive-loading>` when the loader itself is the thing being rendered.

### Directive

Use `[reviveLoading]` for:

- cards
- tables
- dashboards
- buttons
- modal bodies
- upload zones

### Service

Use `LoadingService` when you need to create a loader from code:

```ts
import { Component } from '@angular/core';
import { LoadingService } from '@revivejs/angular-loading';

@Component({
  selector: 'app-root',
  template: `<button (click)="showLoader()">Show fullscreen loader</button>`
})
export class AppComponent {
  constructor(private loadingService: LoadingService) {}

  showLoader(): void {
    const loader = this.loadingService.create(document.body, {
      fullscreen: true,
      centered: true,
      variant: 'galaxy',
      label: 'Loading workspace'
    });

    loader.show();
  }
}
```

## API Overview

### `LoadingModule.forRoot()`

Registers the wrapper services for the current Angular app.

### `LoadingComponent`

Inputs:

- `visible`
- `options`

Methods:

- `show()`
- `hide()`
- `getInstance()`

### `LoadingDirective`

Inputs:

- `reviveLoading`
- `loadingOptions`

Outputs:

- `create`
- `shown`
- `hidden`
- `updated`
- `destroyed`

### `LoadingService`

Methods:

- `create(target, options)`
- `show(target, options)`
- `mount(target, options)`
- `hide(instance)`

## Run Locally

```bash
npm install
npm run docs:generate
npm run build:lib
npm run build:docs:angular-2
npm run docs:install:angular-21
npm run build:docs:angular-21
node scripts/write-docs-root.js
npm run serve:docs
```

Then open:

```text
http://127.0.0.1:8081/angular-21/
```

Angular 2 remains available at:

```text
http://127.0.0.1:8081/angular-2/
```

## License

MIT
