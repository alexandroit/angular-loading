webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".shell {\n  padding: 28px;\n  color: #0f172a;\n}\n\n.hero {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);\n      grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);\n  gap: 24px;\n}\n\n.hero-card,\n.panel,\n.sidebar-card {\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);\n          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);\n}\n\n.hero-card {\n  padding: 28px;\n}\n\n.badge {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 8px 12px;\n  border-radius: 999px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(37, 99, 235, 0.08);\n  color: #1d4ed8;\n  font-size: 12px;\n  font-weight: 700;\n}\n\nh1,\nh2,\nh3,\np,\npre {\n  margin-top: 0;\n}\n\n.hero-main h1 {\n  margin: 16px 0 12px;\n  font-size: 52px;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n}\n\n.hero-main p,\n.panel-header p,\n.api-card p,\n.demo-card p {\n  color: #475569;\n  line-height: 1.7;\n}\n\n.feature-grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (minmax(0, 1fr))[2];\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n  margin-top: 22px;\n}\n\n.feature {\n  padding: 16px;\n  border-radius: 18px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(248, 250, 252, 0.92);\n  color: #475569;\n  line-height: 1.6;\n}\n\n.feature strong {\n  display: block;\n  margin-bottom: 6px;\n  color: #0f172a;\n}\n\n.cta-row,\n.controls {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 22px;\n}\n\n.btn,\nbutton {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font: inherit;\n  text-decoration: none;\n}\n\n.btn,\nbutton {\n  background: linear-gradient(135deg, #38bdf8, #2563eb);\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.btn.secondary,\n.ghost-button {\n  background: rgba(255, 255, 255, 0.92);\n  color: #0f172a;\n  border-color: rgba(15, 23, 42, 0.08);\n}\n\n.ghost-button {\n  padding: 8px 12px;\n}\n\n.step {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 36px minmax(0, 1fr);\n      grid-template-columns: 36px minmax(0, 1fr);\n  gap: 14px;\n  margin-top: 16px;\n}\n\n.step-num {\n  display: -ms-inline-grid;\n  display: inline-grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 999px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  font-weight: 700;\n}\n\npre,\n.code {\n  overflow: auto;\n  padding: 14px 16px;\n  border-radius: 18px;\n  background: #0f172a;\n  color: #dbeafe;\n  line-height: 1.6;\n  font-family: \"SFMono-Regular\", Consolas, monospace;\n  font-size: 13px;\n}\n\n.code-snippet {\n  margin-top: 10px;\n}\n\n.code-snippet-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-bottom: 8px;\n}\n\n.copy-button {\n  min-width: 88px;\n}\n\n.layout {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: minmax(0, 1fr) 320px;\n      grid-template-columns: minmax(0, 1fr) 320px;\n  gap: 24px;\n  margin-top: 28px;\n}\n\n.panels {\n  display: -ms-grid;\n  display: grid;\n  gap: 24px;\n}\n\n.panel {\n  padding: 24px;\n}\n\n.panel-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.panel-header h2 {\n  margin-bottom: 8px;\n}\n\n.demo-grid {\n  display: -ms-grid;\n  display: grid;\n  gap: 16px;\n  -ms-grid-columns: (minmax(0, 1fr))[2];\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.demo-card {\n  padding: 20px;\n  border-radius: 22px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fbff;\n}\n\n.demo-card.full {\n  grid-column: span 2;\n}\n\n.preview-frame,\n.surface-card,\n.table-shell {\n  position: relative;\n  overflow: hidden;\n  min-height: 180px;\n  border-radius: 20px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.component-frame {\n  display: -ms-grid;\n  display: grid;\n  place-items: center;\n  padding: 32px 24px;\n}\n\n.surface-card {\n  padding: 22px;\n}\n\n.surface-eyebrow {\n  color: #64748b;\n  font-size: 13px;\n}\n\n.surface-metric {\n  margin-top: 12px;\n  font-size: 34px;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n\n.surface-trend {\n  margin-top: 10px;\n  color: #475569;\n}\n\n.primary-action {\n  min-height: 46px;\n  min-width: 168px;\n}\n\n.table-shell {\n  padding: 18px;\n}\n\n.table-head,\n.table-row {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 0.8fr 1fr 1fr 0.8fr;\n      grid-template-columns: 0.8fr 1fr 1fr 0.8fr;\n  gap: 12px;\n}\n\n.table-head {\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #64748b;\n}\n\n.table-row {\n  min-height: 44px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #334155;\n}\n\n.api-grid {\n  display: -ms-grid;\n  display: grid;\n  gap: 14px;\n  -ms-grid-columns: (minmax(0, 1fr))[3];\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.api-card {\n  padding: 18px;\n  border-radius: 18px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fbff;\n}\n\n.sidebar {\n  display: -ms-grid;\n  display: grid;\n  gap: 24px;\n  -ms-grid-row-align: start;\n      align-self: start;\n  position: sticky;\n  top: 20px;\n}\n\n.sidebar-card {\n  padding: 20px;\n}\n\n.log-list {\n  display: -ms-grid;\n  display: grid;\n  gap: 10px;\n  max-height: 460px;\n  overflow: auto;\n}\n\n.log-item {\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: rgba(248, 250, 252, 0.98);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  color: #334155;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.release-meta {\n  padding-left: 18px;\n  margin: 0;\n  color: #475569;\n  line-height: 1.8;\n}\n\n.history-copy {\n  margin-bottom: 14px;\n  color: #475569;\n  line-height: 1.7;\n}\n\n.release-links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  gap: 10px;\n}\n\n.release-link {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: 38px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(248, 250, 252, 0.98);\n  color: #0f172a;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.release-link.is-current {\n  background: linear-gradient(135deg, #38bdf8, #2563eb);\n  border-color: transparent;\n  color: #ffffff;\n}\n\n@media (max-width: 1080px) {\n  .hero,\n  .layout {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n\n  .sidebar {\n    position: static;\n  }\n}\n\n@media (max-width: 760px) {\n  .shell {\n    padding: 16px;\n  }\n\n  .hero-card,\n  .panel,\n  .sidebar-card {\n    padding: 18px;\n    border-radius: 22px;\n  }\n\n  .hero-main h1 {\n    font-size: 38px;\n  }\n\n  .feature-grid,\n  .demo-grid,\n  .api-grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n\n  .demo-card.full {\n    grid-column: span 1;\n  }\n\n  .table-head,\n  .table-row {\n    -ms-grid-columns: (minmax(0, 1fr))[2];\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shell\">\n  <section class=\"hero\">\n    <div class=\"hero-card hero-main\">\n      <span class=\"badge\">Angular {{ releaseLine.angular }} · @stackline/loading {{ releaseLine.coreVersion }}</span>\n      <h1>@stackline/angular-loading</h1>\n      <p>\n        A maintained Angular wrapper around the Stackline loading toolkit. Use a component for direct templates,\n        a directive for cards and buttons, and a service for fullscreen or ad-hoc loading states.\n      </p>\n      <div class=\"feature-grid\">\n        <div class=\"feature\">\n          <strong>Component API</strong>\n          Render loaders declaratively or wrap projected content.\n        </div>\n        <div class=\"feature\">\n          <strong>Directive API</strong>\n          Attach loading behavior to cards, tables, and buttons.\n        </div>\n        <div class=\"feature\">\n          <strong>Service API</strong>\n          Create fullscreen or programmatic loaders when the template is not enough.\n        </div>\n        <div class=\"feature\">\n          <strong>Core fidelity</strong>\n          The wrapper passes through the same modern variants and anti-flicker options.\n        </div>\n      </div>\n      <div class=\"cta-row\">\n        <a class=\"btn\" href=\"#demos\">See demos</a>\n        <a class=\"btn secondary\" href=\"https://github.com/alexandroit/angular-loading#readme\" target=\"_blank\">README</a>\n      </div>\n    </div>\n\n    <div class=\"hero-card hero-setup\">\n      <h2>Setup in 3 steps</h2>\n\n      <div class=\"step\">\n        <span class=\"step-num\">1</span>\n        <div>\n          <strong>Install</strong>\n          <div class=\"code-snippet\">\n            <div class=\"code-snippet-head\">\n              <button class=\"ghost-button copy-button\" (click)=\"copySnippet('install', installSnippet)\">{{ copyLabels.install }}</button>\n            </div>\n            <pre [textContent]=\"installSnippet\"></pre>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">2</span>\n        <div>\n          <strong>Register the module</strong>\n          <div class=\"code-snippet\">\n            <div class=\"code-snippet-head\">\n              <button class=\"ghost-button copy-button\" (click)=\"copySnippet('module', moduleSnippet)\">{{ copyLabels.module }}</button>\n            </div>\n            <pre [textContent]=\"moduleSnippet\"></pre>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">3</span>\n        <div>\n          <strong>Use the wrapper</strong>\n          <div class=\"code-snippet\">\n            <div class=\"code-snippet-head\">\n              <button class=\"ghost-button copy-button\" (click)=\"copySnippet('directiveSetup', directiveSnippet)\">{{ copyLabels.directiveSetup }}</button>\n            </div>\n            <pre [textContent]=\"directiveSnippet\"></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"layout\" id=\"demos\">\n    <div class=\"panels\">\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Core wrapper demos</h2>\n          <p>This Angular line covers the most practical loading patterns for enterprise apps and SaaS screens.</p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card\">\n            <h3>Standalone component</h3>\n            <p>Use the component directly when the loader itself is the main thing you want to render.</p>\n            <div class=\"code-snippet\">\n              <div class=\"code-snippet-head\">\n                <button class=\"ghost-button copy-button\" (click)=\"copySnippet('component', componentSnippet)\">{{ copyLabels.component }}</button>\n              </div>\n              <pre class=\"code\" [textContent]=\"componentSnippet\"></pre>\n            </div>\n            <div class=\"preview-frame component-frame\">\n              <revive-loading\n                [visible]=\"true\"\n                [options]=\"basicOptions\"\n                (create)=\"onCreate('Standalone component')\"\n                (shown)=\"onShown('Standalone component')\"></revive-loading>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Directive overlay on a card</h3>\n            <p>The directive is the best fit for cards, panels, and existing containers.</p>\n            <div class=\"code-snippet\">\n              <div class=\"code-snippet-head\">\n                <button class=\"ghost-button copy-button\" (click)=\"copySnippet('directiveDemo', directiveSnippet)\">{{ copyLabels.directiveDemo }}</button>\n              </div>\n              <pre class=\"code\" [textContent]=\"directiveSnippet\"></pre>\n            </div>\n            <div class=\"controls\">\n              <button (click)=\"toggleOverlay()\">Toggle overlay</button>\n            </div>\n            <div class=\"surface-card\"\n                 [reviveLoading]=\"overlayVisible\"\n                 [loadingOptions]=\"overlayOptions\"\n                 (create)=\"onCreate('Card overlay')\"\n                 (shown)=\"onShown('Card overlay')\"\n                 (hidden)=\"onHidden('Card overlay')\">\n              <span class=\"surface-eyebrow\">Revenue</span>\n              <div class=\"surface-metric\">$128,400</div>\n              <div class=\"surface-trend\">+12.8% vs previous week</div>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Button loading state</h3>\n            <p>The directive also works well on buttons with compact inline variants and no visible label.</p>\n            <div class=\"controls\">\n              <button class=\"primary-action\"\n                      [reviveLoading]=\"buttonLoading\"\n                      [loadingOptions]=\"buttonOptions\"\n                      (click)=\"triggerButton()\"\n                      (shown)=\"onShown('Button loader')\"\n                      (hidden)=\"onHidden('Button loader')\">\n                Save changes\n              </button>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Service-driven fullscreen</h3>\n            <p>When the loader must be triggered imperatively, use the Angular service and the core instance underneath.</p>\n            <div class=\"controls\">\n              <button (click)=\"showFullscreen()\">Show fullscreen demo</button>\n            </div>\n            <div class=\"code-snippet\">\n              <div class=\"code-snippet-head\">\n                <button class=\"ghost-button copy-button\" (click)=\"copySnippet('service', serviceSnippet)\">{{ copyLabels.service }}</button>\n              </div>\n              <pre class=\"code\" [textContent]=\"serviceSnippet\"></pre>\n            </div>\n          </section>\n\n          <section class=\"demo-card full\">\n            <h3>Table refresh with directive</h3>\n            <p>Overlay a data region without replacing the underlying layout.</p>\n            <div class=\"controls\">\n              <button (click)=\"refreshTable()\">Refresh table</button>\n            </div>\n            <div class=\"table-shell\"\n                 [reviveLoading]=\"tableVisible\"\n                 [loadingOptions]=\"tableOptions\"\n                 (shown)=\"onShown('Table refresh')\"\n                 (hidden)=\"onHidden('Table refresh')\">\n              <div class=\"table-head\">\n                <span>Status</span>\n                <span>Team</span>\n                <span>Region</span>\n                <span>MRR</span>\n              </div>\n              <div class=\"table-row\">\n                <span>Live</span>\n                <span>Growth</span>\n                <span>North America</span>\n                <span>$42,300</span>\n              </div>\n              <div class=\"table-row\">\n                <span>Live</span>\n                <span>Retention</span>\n                <span>Europe</span>\n                <span>$31,900</span>\n              </div>\n              <div class=\"table-row\">\n                <span>Pending</span>\n                <span>Enterprise</span>\n                <span>LATAM</span>\n                <span>$19,440</span>\n              </div>\n            </div>\n          </section>\n        </div>\n      </article>\n\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>API reference</h2>\n          <p>The wrapper is intentionally thin. Angular gives you structure; the core library supplies the variants and behavior.</p>\n        </div>\n        <div class=\"api-grid\">\n          <section class=\"api-card\" *ngFor=\"let item of apiCards\">\n            <h3>{{ item.title }}</h3>\n            <p>{{ item.summary }}</p>\n          </section>\n        </div>\n      </article>\n\n      <playground-panel></playground-panel>\n    </div>\n\n    <aside class=\"sidebar\">\n      <section class=\"sidebar-card\">\n        <div class=\"panel-header\">\n          <h2>Event log</h2>\n          <button class=\"ghost-button\" (click)=\"clearLog()\">Clear</button>\n        </div>\n        <div class=\"log-list\">\n          <div class=\"log-item\" *ngFor=\"let log of logs\">{{ log }}</div>\n        </div>\n      </section>\n\n      <section class=\"sidebar-card\">\n        <div class=\"panel-header\">\n          <h2>Release line</h2>\n        </div>\n        <ul class=\"release-meta\">\n          <li><strong>Angular:</strong> {{ releaseLine.angular }}</li>\n          <li><strong>Package:</strong> {{ releaseLine.packageVersion }}</li>\n          <li><strong>Core:</strong> {{ releaseLine.coreVersion }}</li>\n          <li><strong>Runtime:</strong> {{ releaseLine.runtimeTarget }}</li>\n          <li><strong>Docs path:</strong> {{ releaseLine.docsPath }}</li>\n        </ul>\n      </section>\n\n      <section class=\"sidebar-card\">\n        <div class=\"panel-header\">\n          <h2>Docs history</h2>\n        </div>\n        <p class=\"history-copy\">Jump across every maintained wrapper line from Angular 2 through Angular 21.</p>\n        <div class=\"release-links\">\n          <a\n            *ngFor=\"let release of releaseLinks\"\n            class=\"release-link\"\n            [class.is-current]=\"isCurrentRelease(release.docsPath)\"\n            [href]=\"release.href\">\n            {{ release.label }}\n          </a>\n        </div>\n      </section>\n    </aside>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__revivejs_angular_loading__ = __webpack_require__("./node_modules/@stackline/angular-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__revivejs_angular_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__revivejs_angular_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_api__ = __webpack_require__("./src/app/data/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_release_line__ = __webpack_require__("./src/app/data/release-line.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(loadingService) {
        this.loadingService = loadingService;
        this.apiCards = __WEBPACK_IMPORTED_MODULE_2__data_api__["a" /* API_CARDS */];
        this.releaseLine = __WEBPACK_IMPORTED_MODULE_3__data_release_line__["a" /* RELEASE_LINE */];
        this.releaseLinks = [
            { label: 'Angular 2', href: '../angular-2/', docsPath: '/angular-2/' },
            { label: 'Angular 4', href: '../angular-4/', docsPath: '/angular-4/' },
            { label: 'Angular 5', href: '../angular-5/', docsPath: '/angular-5/' },
            { label: 'Angular 6', href: '../angular-6/', docsPath: '/angular-6/' },
            { label: 'Angular 7', href: '../angular-7/', docsPath: '/angular-7/' },
            { label: 'Angular 8', href: '../angular-8/', docsPath: '/angular-8/' },
            { label: 'Angular 9', href: '../angular-9/', docsPath: '/angular-9/' },
            { label: 'Angular 10', href: '../angular-10/', docsPath: '/angular-10/' },
            { label: 'Angular 11', href: '../angular-11/', docsPath: '/angular-11/' },
            { label: 'Angular 12', href: '../angular-12/', docsPath: '/angular-12/' },
            { label: 'Angular 13', href: '../angular-13/', docsPath: '/angular-13/' },
            { label: 'Angular 14', href: '../angular-14/', docsPath: '/angular-14/' },
            { label: 'Angular 15', href: '../angular-15/', docsPath: '/angular-15/' },
            { label: 'Angular 16', href: '../angular-16/', docsPath: '/angular-16/' },
            { label: 'Angular 17', href: '../angular-17/', docsPath: '/angular-17/' },
            { label: 'Angular 18', href: '../angular-18/', docsPath: '/angular-18/' },
            { label: 'Angular 19', href: '../angular-19/', docsPath: '/angular-19/' },
            { label: 'Angular 20', href: '../angular-20/', docsPath: '/angular-20/' },
            { label: 'Angular 21', href: '../angular-21/', docsPath: '/angular-21/' }
        ];
        this.logs = [];
        this.installSnippet = "npm install @stackline/angular-loading";
        this.moduleSnippet = "import { LoadingModule } from '@stackline/angular-loading';\n\n@NgModule({\n  imports: [LoadingModule.forRoot()]\n})";
        this.directiveSnippet = "<div [reviveLoading]=\"isLoading\"\n     [loadingOptions]=\"{ overlay: true }\">\n  ...\n</div>";
        this.componentSnippet = "<revive-loading\n  [visible]=\"true\"\n  [options]=\"basicOptions\">\n</revive-loading>";
        this.serviceSnippet = "this.fullscreenLoader = this.loadingService.create(document.body, {\n  fullscreen: true,\n  centered: true,\n  variant: 'galaxy'\n});\n\nthis.fullscreenLoader.show();";
        this.copyLabels = {
            install: 'Copy',
            module: 'Copy',
            directiveSetup: 'Copy',
            component: 'Copy',
            directiveDemo: 'Copy',
            service: 'Copy'
        };
        this.basicOptions = {
            variant: 'orbit',
            size: 56,
            color: '#2563eb',
            secondaryColor: 'rgba(37, 99, 235, 0.18)',
            centered: true,
            label: 'Loading preview'
        };
        this.overlayVisible = true;
        this.overlayOptions = {
            variant: 'glass-spinner',
            overlay: true,
            centered: true,
            label: 'Loading sales card',
            delay: 120,
            minVisible: 320
        };
        this.buttonLoading = false;
        this.buttonOptions = {
            inline: true,
            centered: true,
            size: 18,
            label: '',
            variant: 'typing-dots',
            color: '#ffffff',
            secondaryColor: 'rgba(255, 255, 255, 0.28)'
        };
        this.tableVisible = false;
        this.tableOptions = {
            variant: 'scan-line',
            overlay: true,
            centered: true,
            label: 'Refreshing table',
            background: 'rgba(255, 255, 255, 0.76)'
        };
        this.fullscreenLoader = null;
        this.log('Angular 5 docs loaded successfully.');
    }
    AppComponent.prototype.onCreate = function (label) {
        this.log(label + ' created.');
    };
    AppComponent.prototype.onShown = function (label) {
        this.log(label + ' shown.');
    };
    AppComponent.prototype.onHidden = function (label) {
        this.log(label + ' hidden.');
    };
    AppComponent.prototype.onDestroyed = function (label) {
        this.log(label + ' destroyed.');
    };
    AppComponent.prototype.toggleOverlay = function () {
        this.overlayVisible = !this.overlayVisible;
        this.log('Card overlay toggled to ' + (this.overlayVisible ? 'visible' : 'hidden') + '.');
    };
    AppComponent.prototype.triggerButton = function () {
        var _this = this;
        if (this.buttonLoading) {
            return;
        }
        this.buttonLoading = true;
        this.log('Simulating button submit...');
        setTimeout(function () {
            _this.buttonLoading = false;
            _this.log('Button submit finished.');
        }, 1600);
    };
    AppComponent.prototype.refreshTable = function () {
        var _this = this;
        if (this.tableVisible) {
            return;
        }
        this.tableVisible = true;
        this.log('Table refresh started.');
        setTimeout(function () {
            _this.tableVisible = false;
            _this.log('Table refresh finished.');
        }, 1800);
    };
    AppComponent.prototype.showFullscreen = function () {
        var _this = this;
        if (!this.fullscreenLoader) {
            this.fullscreenLoader = this.loadingService.create(document.body, {
                fullscreen: true,
                centered: true,
                variant: 'galaxy',
                size: 60,
                label: 'Loading application shell'
            });
            this.log('Fullscreen loader created.');
        }
        this.fullscreenLoader.show();
        this.log('Fullscreen loader shown.');
        setTimeout(function () {
            if (_this.fullscreenLoader) {
                _this.fullscreenLoader.hide();
                _this.log('Fullscreen loader hidden.');
            }
        }, 1700);
    };
    AppComponent.prototype.clearLog = function () {
        this.logs = [];
        this.log('Log cleared.');
    };
    AppComponent.prototype.copySnippet = function (key, value) {
        var _this = this;
        var textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            this.copyLabels[key] = 'Copied';
        }
        catch (error) {
            this.copyLabels[key] = 'Copy failed';
        }
        document.body.removeChild(textarea);
        setTimeout(function () {
            _this.copyLabels[key] = 'Copy';
        }, 1200);
    };
    AppComponent.prototype.isCurrentRelease = function (docsPath) {
        return docsPath === this.releaseLine.docsPath;
    };
    AppComponent.prototype.log = function (message) {
        var timestamp = new Date().toLocaleTimeString();
        this.logs.unshift('[' + timestamp + '] ' + message);
        this.logs = this.logs.slice(0, 12);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__revivejs_angular_loading__["LoadingService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__revivejs_angular_loading__ = __webpack_require__("./node_modules/@stackline/angular-loading/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__revivejs_angular_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__revivejs_angular_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playground_component__ = __webpack_require__("./src/app/playground.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__playground_component__["a" /* PlaygroundComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__revivejs_angular_loading__["LoadingModule"].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_CARDS; });
var API_CARDS = [
    {
        title: 'LoadingComponent',
        summary: 'Use <revive-loading> when the loader itself is part of the template or needs to wrap projected content.'
    },
    {
        title: 'LoadingDirective',
        summary: 'Use [reviveLoading] on cards, buttons, forms, and arbitrary host elements for overlay and inline patterns.'
    },
    {
        title: 'LoadingService',
        summary: 'Create and control fullscreen or ad-hoc loaders programmatically from your Angular services or components.'
    }
];


/***/ }),

/***/ "./src/app/data/release-line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RELEASE_LINE; });
var RELEASE_LINE = {
    angular: '5.2.x',
    packageVersion: '5.0.0',
    coreVersion: '0.1.1',
    runtimeTarget: 'Angular 5 + Angular CLI',
    docsPath: '/angular-5/'
};


/***/ }),

/***/ "./src/app/playground.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.panel {\n  padding: 24px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);\n          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);\n}\n\n.panel-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.panel-header h2 {\n  margin: 0 0 8px;\n}\n\n.panel-header p {\n  margin: 0;\n  color: #475569;\n  line-height: 1.7;\n}\n\nbutton {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font: inherit;\n  background: linear-gradient(135deg, #38bdf8, #2563eb);\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.ghost-button {\n  background: rgba(255, 255, 255, 0.92);\n  color: #0f172a;\n  border-color: rgba(15, 23, 42, 0.08);\n}\n\n.code-block,\n.code-preview {\n  overflow: auto;\n  padding: 14px 16px;\n  border-radius: 18px;\n  background: #0f172a;\n  color: #dbeafe;\n  line-height: 1.6;\n  font-family: \"SFMono-Regular\", Consolas, monospace;\n  font-size: 13px;\n}\n\n.playground-shell {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: minmax(300px, 340px) minmax(0, 1fr);\n      grid-template-columns: minmax(300px, 340px) minmax(0, 1fr);\n  gap: 20px;\n}\n\n.playground-controls,\n.playground-preview {\n  padding: 20px;\n  border-radius: 22px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fbff;\n}\n\n.playground-controls {\n  display: -ms-grid;\n  display: grid;\n  -ms-flex-line-pack: start;\n      align-content: start;\n  gap: 16px;\n}\n\n.field {\n  display: -ms-grid;\n  display: grid;\n  gap: 8px;\n}\n\n.field label,\n.field span {\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.field input,\n.field select {\n  width: 100%;\n  min-height: 42px;\n  padding: 0 12px;\n  border-radius: 14px;\n  border: 1px solid rgba(15, 23, 42, 0.1);\n  background: rgba(255, 255, 255, 0.98);\n  color: #0f172a;\n  font: inherit;\n}\n\n.field input[type=\"range\"] {\n  padding: 0;\n  min-height: auto;\n}\n\n.field input[type=\"color\"] {\n  padding: 4px;\n}\n\n.field.two-up {\n  -ms-grid-columns: (minmax(0, 1fr))[2];\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.toggle-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  gap: 10px 14px;\n}\n\n.toggle-row label {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 8px;\n  color: #334155;\n  font-size: 13px;\n}\n\n.playground-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  gap: 12px;\n}\n\n.playground-preview-tabs {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n  padding: 6px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.playground-preview-tab {\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: #475569;\n  padding: 9px 14px;\n  cursor: pointer;\n  -webkit-transition: 180ms ease;\n  transition: 180ms ease;\n}\n\n.playground-preview-tab.is-active {\n  background: rgba(37, 99, 235, 0.14);\n  color: #0f172a;\n}\n\n.playground-description {\n  margin: 0 0 14px;\n  color: #475569;\n  line-height: 1.7;\n}\n\n.playground-stage {\n  min-height: 440px;\n  margin-bottom: 18px;\n}\n\n.playground-stage.is-reduced-motion .rvl-loader,\n.playground-stage.is-reduced-motion .rvl-loader * {\n  -webkit-animation-duration: 0.01ms !important;\n          animation-duration: 0.01ms !important;\n  -webkit-animation-iteration-count: 1 !important;\n          animation-iteration-count: 1 !important;\n  -webkit-transition-duration: 0.01ms !important;\n          transition-duration: 0.01ms !important;\n}\n\n.playground-stage-inner {\n  min-height: inherit;\n}\n\n.playground-surface {\n  position: relative;\n  min-height: 320px;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.playground-surface.is-fullscreen-simulated {\n  min-height: 400px;\n}\n\n.playground-surface--clean {\n  display: -ms-grid;\n  display: grid;\n  place-items: center;\n  background: rgba(248, 250, 252, 0.96);\n}\n\n.playground-table-head,\n.playground-table-row {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 0.8fr 1.5fr 1fr 0.9fr;\n      grid-template-columns: 0.8fr 1.5fr 1fr 0.9fr;\n  gap: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.playground-table-head {\n  padding: 24px 24px 10px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.playground-table-row {\n  min-height: 44px;\n  padding: 0 24px;\n}\n\n.playground-table-row span {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.playground-table-row i {\n  display: block;\n  width: 100%;\n  height: 12px;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.08);\n}\n\n.playground-table-row span:first-child i {\n  width: 70%;\n}\n\n.surface-card-grid,\n.page-grid {\n  display: -ms-grid;\n  display: grid;\n  gap: 12px;\n  padding: 22px;\n  -ms-grid-columns: (minmax(0, 1fr))[2];\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.surface-card-cell,\n.page-tile {\n  min-height: 78px;\n  border-radius: 18px;\n  background: rgba(15, 23, 42, 0.06);\n}\n\n.surface-card-cell.wide {\n  grid-column: span 2;\n  min-height: 120px;\n}\n\n.surface-table {\n  padding: 14px 0 0;\n}\n\n.surface-page {\n  min-height: 240px;\n}\n\n.page-topbar {\n  height: 54px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.surface-modal {\n  padding: 18px;\n}\n\n.modal-shell {\n  max-width: 320px;\n  margin: 0 auto;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.modal-header {\n  height: 56px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.modal-body {\n  position: relative;\n  min-height: 170px;\n  padding: 18px;\n}\n\n.modal-line {\n  height: 14px;\n  margin-bottom: 14px;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.08);\n}\n\n.modal-line.short {\n  width: 68%;\n}\n\n.surface-chart {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: end;\n  gap: 10px;\n  padding: 22px;\n}\n\n.chart-bar {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-radius: 999px 999px 12px 12px;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(96, 165, 250, 0.76)), to(#2563eb));\n  background: linear-gradient(180deg, rgba(96, 165, 250, 0.76), #2563eb);\n}\n\n.surface-upload {\n  display: -ms-grid;\n  display: grid;\n  place-items: center;\n  text-align: center;\n  padding: 24px;\n}\n\n.upload-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 18px;\n  border: 2px dashed rgba(37, 99, 235, 0.45);\n}\n\n.upload-title {\n  margin-top: 12px;\n  font-weight: 700;\n}\n\n.upload-caption {\n  margin-top: 8px;\n  color: #64748b;\n}\n\n.code-preview {\n  margin-bottom: 0;\n}\n\n@media (max-width: 1080px) {\n  .playground-shell {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .field.two-up {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n\n  .playground-preview-tabs {\n    border-radius: 24px;\n  }\n\n  .playground-table-head,\n  .playground-table-row {\n    -ms-grid-columns: (minmax(0, 1fr))[2];\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"

/***/ }),

/***/ "./src/app/playground.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"panel\" id=\"playground\">\n  <div class=\"panel-header\">\n    <h2>Playground</h2>\n    <p>Use the Angular wrapper against the same kind of interactive preview shell as the core docs.</p>\n  </div>\n\n  <div class=\"playground-shell\">\n    <form class=\"playground-controls\">\n      <div class=\"field\">\n        <label for=\"playground-variant\">Variant</label>\n        <select id=\"playground-variant\"\n                name=\"variant\"\n                [(ngModel)]=\"state.variant\"\n                (ngModelChange)=\"applyPlaygroundState()\">\n          <option *ngFor=\"let variant of variants\" [value]=\"variant.value\">{{ variant.label }}</option>\n        </select>\n      </div>\n\n      <div class=\"field\">\n        <label for=\"playground-size\">Size <span>{{ state.size }}px</span></label>\n        <input id=\"playground-size\"\n               name=\"size\"\n               type=\"range\"\n               min=\"18\"\n               max=\"96\"\n               [(ngModel)]=\"state.size\"\n               (ngModelChange)=\"applyPlaygroundState()\" />\n      </div>\n\n      <div class=\"field\">\n        <label for=\"playground-speed\">Speed <span>{{ state.speed }}ms</span></label>\n        <input id=\"playground-speed\"\n               name=\"speed\"\n               type=\"range\"\n               min=\"300\"\n               max=\"2200\"\n               step=\"50\"\n               [(ngModel)]=\"state.speed\"\n               (ngModelChange)=\"applyPlaygroundState()\" />\n      </div>\n\n      <div class=\"field two-up\">\n        <div>\n          <label for=\"playground-color\">Primary</label>\n          <input id=\"playground-color\"\n                 name=\"color\"\n                 type=\"color\"\n                 [(ngModel)]=\"state.color\"\n                 (ngModelChange)=\"applyPlaygroundState()\" />\n        </div>\n        <div>\n          <label for=\"playground-secondary-color\">Secondary</label>\n          <input id=\"playground-secondary-color\"\n                 name=\"secondaryColor\"\n                 type=\"color\"\n                 [(ngModel)]=\"state.secondaryColor\"\n                 (ngModelChange)=\"applyPlaygroundState()\" />\n        </div>\n      </div>\n\n      <div class=\"field\">\n        <label for=\"playground-label\">Label</label>\n        <input id=\"playground-label\"\n               name=\"label\"\n               type=\"text\"\n               [(ngModel)]=\"state.label\"\n               (ngModelChange)=\"applyPlaygroundState()\" />\n      </div>\n\n      <div class=\"field two-up\">\n        <div>\n          <label for=\"playground-delay\">Delay</label>\n          <input id=\"playground-delay\"\n                 name=\"delay\"\n                 type=\"number\"\n                 min=\"0\"\n                 step=\"50\"\n                 [(ngModel)]=\"state.delay\"\n                 (ngModelChange)=\"applyPlaygroundState()\" />\n        </div>\n        <div>\n          <label for=\"playground-min-visible\">Min visible</label>\n          <input id=\"playground-min-visible\"\n                 name=\"minVisible\"\n                 type=\"number\"\n                 min=\"0\"\n                 step=\"50\"\n                 [(ngModel)]=\"state.minVisible\"\n                 (ngModelChange)=\"applyPlaygroundState()\" />\n        </div>\n      </div>\n\n      <div class=\"toggle-row\">\n        <label><input type=\"checkbox\" name=\"overlay\" [(ngModel)]=\"state.overlay\" (ngModelChange)=\"applyPlaygroundState()\" /> Overlay</label>\n        <label><input type=\"checkbox\" name=\"fullscreen\" [(ngModel)]=\"state.fullscreen\" (ngModelChange)=\"applyPlaygroundState()\" /> Fullscreen</label>\n        <label><input type=\"checkbox\" name=\"centered\" [(ngModel)]=\"state.centered\" (ngModelChange)=\"applyPlaygroundState()\" /> Centered</label>\n        <label><input type=\"checkbox\" name=\"reducedMotion\" [(ngModel)]=\"state.reducedMotion\" (ngModelChange)=\"applyPlaygroundState()\" /> Reduced motion</label>\n      </div>\n\n      <div class=\"playground-actions\">\n        <button type=\"button\" (click)=\"replayTiming()\">Replay timing</button>\n        <button type=\"button\" class=\"ghost-button\" (click)=\"copyCode()\">{{ copyButtonLabel }}</button>\n      </div>\n    </form>\n\n    <div class=\"playground-preview\">\n      <div class=\"playground-preview-tabs\" role=\"tablist\" aria-label=\"Preview surfaces\">\n        <button *ngFor=\"let surface of surfaces\"\n                type=\"button\"\n                role=\"tab\"\n                class=\"playground-preview-tab\"\n                [class.is-active]=\"isSurfaceActive(surface.id)\"\n                [attr.aria-selected]=\"isSurfaceActive(surface.id)\"\n                (click)=\"setSurface(surface.id)\">\n          {{ surface.label }}\n        </button>\n      </div>\n\n      <p class=\"playground-description\">{{ getActiveSurfaceDescription() }}</p>\n\n      <div class=\"playground-stage\" [class.is-reduced-motion]=\"state.reducedMotion\">\n        <div class=\"playground-stage-inner\" [ngSwitch]=\"activeSurface\">\n          <div *ngSwitchCase=\"'default'\"\n               class=\"playground-surface playground-surface--clean\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [reviveLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\"></div>\n\n          <div *ngSwitchCase=\"'dashboard'\"\n               class=\"playground-surface surface-card-grid\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [reviveLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"surface-card-cell\"></div>\n            <div class=\"surface-card-cell\"></div>\n            <div class=\"surface-card-cell wide\"></div>\n          </div>\n\n          <div *ngSwitchCase=\"'table'\"\n               class=\"playground-surface surface-table\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [reviveLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"playground-table-head\">\n              <span>Status</span>\n              <span>Customer</span>\n              <span>Plan</span>\n              <span>MRR</span>\n            </div>\n            <div class=\"playground-table-row\">\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n            </div>\n            <div class=\"playground-table-row\">\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n            </div>\n            <div class=\"playground-table-row\">\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n            </div>\n            <div class=\"playground-table-row\">\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"'page'\"\n               class=\"playground-surface surface-page\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [reviveLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"page-topbar\"></div>\n            <div class=\"page-grid\">\n              <div class=\"page-tile\"></div>\n              <div class=\"page-tile\"></div>\n              <div class=\"page-tile\"></div>\n              <div class=\"page-tile\"></div>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"'modal'\" class=\"playground-surface surface-modal\" [class.is-fullscreen-simulated]=\"state.fullscreen\">\n            <div class=\"modal-shell\">\n              <div class=\"modal-header\"></div>\n              <div class=\"modal-body\"\n                   [reviveLoading]=\"previewVisible\"\n                   [loadingOptions]=\"previewOptions\">\n                <div class=\"modal-line\"></div>\n                <div class=\"modal-line short\"></div>\n                <div class=\"modal-line\"></div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"'chart'\"\n               class=\"playground-surface surface-chart\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [reviveLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"chart-bar\" style=\"height: 28%\"></div>\n            <div class=\"chart-bar\" style=\"height: 46%\"></div>\n            <div class=\"chart-bar\" style=\"height: 60%\"></div>\n            <div class=\"chart-bar\" style=\"height: 38%\"></div>\n            <div class=\"chart-bar\" style=\"height: 72%\"></div>\n            <div class=\"chart-bar\" style=\"height: 55%\"></div>\n          </div>\n\n          <div *ngSwitchDefault\n               class=\"playground-surface surface-upload\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [reviveLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"upload-icon\"></div>\n            <div class=\"upload-title\">Drop files here</div>\n            <div class=\"upload-caption\">PNG, SVG, PDF up to 25 MB</div>\n          </div>\n        </div>\n      </div>\n\n      <pre class=\"code-block code-preview\"><code>{{ generatedCode }}</code></pre>\n    </div>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/playground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaygroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var legacyVariantValues = ["ring", "dual-ring", "segmented-ring", "arc", "orbit", "comet", "halo", "radar", "astronaut", "astronaut-to-mars", "baseball-player", "football-player", "galaxy", "pulse", "wave-dots", "bouncing-dots", "typing-dots", "grid-pulse", "magnetic-dots", "spiral-dots", "constellation", "equalizer-bars", "rising-bars", "shimmer", "scan-line", "liquid-pill", "ripple-stack", "minimal-spinner", "neon-spinner", "glass-spinner", "vortex", "cube", "diamond", "prism", "skeleton-blocks"];
function toLegacyVariantLabel(value) {
    return value.split('-').map(function (part) {
        return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
}
var loadingCore = {
    loaderVariants: legacyVariantValues.map(function (value) {
        return {
            value: value,
            label: toLegacyVariantLabel(value)
        };
    })
};
var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent() {
        this.variants = (loadingCore.loaderVariants || []).map(function (variant) {
            return {
                value: variant.value,
                label: variant.label
            };
        });
        this.surfaces = [
            {
                id: 'default',
                label: 'Default',
                description: 'A clean centered stage for checking size, color, speed, and label choices.'
            },
            {
                id: 'dashboard',
                label: 'Dashboard',
                description: 'Keep product cards visible while the active region stays anchored to a loading state.'
            },
            {
                id: 'table',
                label: 'Table',
                description: 'A common analytics refresh pattern where the user should keep their table context.'
            },
            {
                id: 'page',
                label: 'Page',
                description: 'Simulate a route-level or workspace-level loading state inside the docs shell.'
            },
            {
                id: 'modal',
                label: 'Modal',
                description: 'Load only the modal body while keeping the dialog frame stable.'
            },
            {
                id: 'chart',
                label: 'Chart',
                description: 'Useful for analytical surfaces where movement should feel intentional and data-centric.'
            },
            {
                id: 'upload',
                label: 'Upload',
                description: 'A drop zone preview for uploads, media workflows, and file-heavy forms.'
            }
        ];
        this.activeSurface = 'default';
        this.copyButtonLabel = 'Copy code';
        this.previewVisible = true;
        this.state = {
            variant: 'orbit',
            size: 60,
            speed: 900,
            color: '#2563eb',
            secondaryColor: '#c7d2fe',
            overlay: false,
            fullscreen: false,
            centered: true,
            label: 'Loading preview',
            delay: 0,
            minVisible: 240,
            reducedMotion: false
        };
        this.previewOptions = {};
        this.generatedCode = '';
        this.applyPlaygroundState();
    }
    PlaygroundComponent.prototype.setSurface = function (surfaceId) {
        if (this.activeSurface === surfaceId) {
            return;
        }
        this.activeSurface = surfaceId;
        this.applyPlaygroundState();
    };
    PlaygroundComponent.prototype.applyPlaygroundState = function () {
        this.state.size = Number(this.state.size);
        this.state.speed = Number(this.state.speed);
        this.state.delay = Number(this.state.delay);
        this.state.minVisible = Number(this.state.minVisible);
        this.previewOptions = this.buildPreviewOptions();
        this.generatedCode = this.buildGeneratedCode();
    };
    PlaygroundComponent.prototype.replayTiming = function () {
        var _this = this;
        this.previewVisible = false;
        setTimeout(function () {
            _this.previewVisible = true;
        }, 40);
    };
    PlaygroundComponent.prototype.copyCode = function () {
        var _this = this;
        var textarea = document.createElement('textarea');
        textarea.value = this.generatedCode;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            this.copyButtonLabel = 'Copied';
        }
        catch (error) {
            this.copyButtonLabel = 'Copy failed';
        }
        document.body.removeChild(textarea);
        setTimeout(function () {
            _this.copyButtonLabel = 'Copy code';
        }, 1200);
    };
    PlaygroundComponent.prototype.getActiveSurfaceDescription = function () {
        var i;
        for (i = 0; i < this.surfaces.length; i += 1) {
            if (this.surfaces[i].id === this.activeSurface) {
                return this.surfaces[i].description;
            }
        }
        return '';
    };
    PlaygroundComponent.prototype.isSurfaceActive = function (surfaceId) {
        return this.activeSurface === surfaceId;
    };
    PlaygroundComponent.prototype.buildPreviewOptions = function () {
        var isSimulatedFullscreen = this.state.fullscreen;
        var isOverlay = this.state.overlay || isSimulatedFullscreen;
        var next = {
            variant: this.state.variant,
            size: this.state.size,
            speed: this.state.speed,
            color: this.state.color,
            secondaryColor: this.state.secondaryColor,
            centered: isOverlay ? true : this.state.centered,
            delay: this.state.delay,
            minVisible: this.state.minVisible
        };
        if (this.state.label) {
            next.label = this.state.label;
        }
        if (isOverlay) {
            next.overlay = true;
        }
        if (isSimulatedFullscreen) {
            next.background = 'rgba(15, 23, 42, 0.54)';
        }
        return next;
    };
    PlaygroundComponent.prototype.buildGeneratedCode = function () {
        var moduleSnippet = [
            '// app.module.ts',
            "import { BrowserModule } from '@angular/platform-browser';",
            "import { NgModule } from '@angular/core';",
            "import { LoadingModule } from '@stackline/angular-loading';",
            "import { AppComponent } from './app.component';",
            '',
            '@NgModule({',
            '  declarations: [AppComponent],',
            '  imports: [BrowserModule, LoadingModule.forRoot()],',
            '  bootstrap: [AppComponent]',
            '})',
            'export class AppModule {}',
            ''
        ];
        if (this.state.fullscreen) {
            return moduleSnippet.concat(this.buildFullscreenSnippet()).join('\n');
        }
        return moduleSnippet.concat(this.buildTemplateDrivenSnippet()).join('\n');
    };
    PlaygroundComponent.prototype.escapeSingleQuotes = function (value) {
        return String(value).split("'").join("\\'");
    };
    PlaygroundComponent.prototype.buildTemplateDrivenSnippet = function () {
        return [
            '// app.component.ts',
            "import { Component } from '@angular/core';",
            '',
            '@Component({',
            "  selector: 'app-root',",
            "  templateUrl: './app.component.html'",
            '})',
            'export class AppComponent {',
            '  isLoading = true;',
            '  loadingOptions = ' + this.buildOptionsObjectLiteral(2) + ';',
            '}',
            '',
            '// app.component.html',
            this.buildTemplateSnippet()
        ];
    };
    PlaygroundComponent.prototype.buildFullscreenSnippet = function () {
        return [
            '// app.component.ts',
            "import { Component } from '@angular/core';",
            "import { LoadingService } from '@stackline/angular-loading';",
            '',
            '@Component({',
            "  selector: 'app-root',",
            "  template: '<button (click)=\"showLoader()\">Show fullscreen loader</button>'",
            '})',
            'export class AppComponent {',
            '  private fullscreenLoader: any;',
            '',
            '  constructor(private loadingService: LoadingService) {}',
            '',
            '  showLoader(): void {',
            '    this.fullscreenLoader = this.loadingService.create(document.body, ' + this.buildOptionsObjectLiteral(4) + ');',
            '    this.fullscreenLoader.show();',
            '  }',
            '}'
        ];
    };
    PlaygroundComponent.prototype.buildTemplateSnippet = function () {
        if (this.activeSurface === 'default' && !this.state.overlay) {
            return [
                '<revive-loading',
                '  [visible]="isLoading"',
                '  [options]="loadingOptions">',
                '</revive-loading>'
            ].join('\n');
        }
        if (this.activeSurface === 'modal') {
            return [
                '<div class="modal-shell">',
                '  <div class="modal-header"></div>',
                '  <div class="modal-body"',
                '       [reviveLoading]="isLoading"',
                '       [loadingOptions]="loadingOptions">',
                '    <div class="modal-line"></div>',
                '    <div class="modal-line short"></div>',
                '    <div class="modal-line"></div>',
                '  </div>',
                '</div>'
            ].join('\n');
        }
        if (this.activeSurface === 'table') {
            return [
                '<div class="table-shell"',
                '     [reviveLoading]="isLoading"',
                '     [loadingOptions]="loadingOptions">',
                '  <div class="table-head">',
                '    <span>Status</span>',
                '    <span>Customer</span>',
                '    <span>Plan</span>',
                '    <span>MRR</span>',
                '  </div>',
                '  <div class="table-row">...</div>',
                '  <div class="table-row">...</div>',
                '</div>'
            ].join('\n');
        }
        if (this.activeSurface === 'chart') {
            return [
                '<div class="chart-panel"',
                '     [reviveLoading]="isLoading"',
                '     [loadingOptions]="loadingOptions">',
                '  <div class="chart-bar"></div>',
                '  <div class="chart-bar"></div>',
                '  <div class="chart-bar"></div>',
                '</div>'
            ].join('\n');
        }
        if (this.activeSurface === 'upload') {
            return [
                '<div class="upload-zone"',
                '     [reviveLoading]="isLoading"',
                '     [loadingOptions]="loadingOptions">',
                '  <div class="upload-icon"></div>',
                '  <p>Drop files here</p>',
                '</div>'
            ].join('\n');
        }
        if (this.activeSurface === 'page') {
            return [
                '<section class="page-shell"',
                '         [reviveLoading]="isLoading"',
                '         [loadingOptions]="loadingOptions">',
                '  <header class="page-topbar"></header>',
                '  <div class="page-grid">...</div>',
                '</section>'
            ].join('\n');
        }
        return [
            '<section class="dashboard-cards"',
            '         [reviveLoading]="isLoading"',
            '         [loadingOptions]="loadingOptions">',
            '  <div class="card"></div>',
            '  <div class="card"></div>',
            '  <div class="card card-wide"></div>',
            '</section>'
        ].join('\n');
    };
    PlaygroundComponent.prototype.buildOptionsObjectLiteral = function (indentLevel) {
        var indent = this.repeat(' ', indentLevel);
        var innerIndent = this.repeat(' ', indentLevel + 2);
        var lines = [
            '{',
            innerIndent + "variant: '" + this.state.variant + "',",
            innerIndent + 'size: ' + this.state.size + ',',
            innerIndent + 'speed: ' + this.state.speed + ',',
            innerIndent + "color: '" + this.state.color + "',",
            innerIndent + "secondaryColor: '" + this.state.secondaryColor + "',"
        ];
        if (this.state.overlay || this.state.fullscreen) {
            lines.push(innerIndent + 'overlay: true,');
        }
        if (this.state.fullscreen) {
            lines.push(innerIndent + 'fullscreen: true,');
            lines.push(innerIndent + "background: 'rgba(15, 23, 42, 0.54)',");
        }
        if (this.state.centered && !this.state.fullscreen) {
            lines.push(innerIndent + 'centered: true,');
        }
        lines.push(innerIndent + "label: '" + this.escapeSingleQuotes(this.state.label) + "',");
        if (this.state.delay > 0) {
            lines.push(innerIndent + 'delay: ' + this.state.delay + ',');
        }
        if (this.state.minVisible !== 240) {
            lines.push(innerIndent + 'minVisible: ' + this.state.minVisible + ',');
        }
        lines.push(indent + '}');
        return lines.join('\n');
    };
    PlaygroundComponent.prototype.repeat = function (value, count) {
        var output = '';
        var i;
        for (i = 0; i < count; i += 1) {
            output += value;
        }
        return output;
    };
    PlaygroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'playground-panel',
            template: __webpack_require__("./src/app/playground.component.html"),
            styles: [__webpack_require__("./src/app/playground.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]).catch(function (error) {
    console.error(error);
    var details = [
        'error: ' + String(error),
        error && error.message ? 'message: ' + error.message : '',
        error && error.ngErrorCode ? 'ngErrorCode: ' + error.ngErrorCode : '',
        error && error.code ? 'code: ' + error.code : '',
        error && error.ngTokenPath ? 'ngTokenPath: ' + JSON.stringify(error.ngTokenPath) : '',
        error && error.stack ? '' : '',
        error && error.stack ? error.stack : ''
    ].filter(Boolean).join('\n');
    document.body.innerHTML = '<pre style="padding:16px;white-space:pre-wrap;">' + details.replace(/</g, '&lt;') + '</pre>';
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map