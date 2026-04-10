(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /tmp/stackline-angular-loading-docs-11-h9T7Ns/src/main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".shell {\n  padding: 28px;\n  color: #0f172a;\n}\n\n.hero {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);\n  gap: 24px;\n}\n\n.hero-card,\n.panel,\n.sidebar-card {\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);\n}\n\n.hero-card {\n  padding: 28px;\n}\n\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-radius: 999px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(37, 99, 235, 0.08);\n  color: #1d4ed8;\n  font-size: 12px;\n  font-weight: 700;\n}\n\nh1,\nh2,\nh3,\np,\npre {\n  margin-top: 0;\n}\n\n.hero-main h1 {\n  margin: 16px 0 12px;\n  font-size: 52px;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n}\n\n.hero-main p,\n.panel-header p,\n.api-card p,\n.demo-card p {\n  color: #475569;\n  line-height: 1.7;\n}\n\n.feature-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n  margin-top: 22px;\n}\n\n.feature {\n  padding: 16px;\n  border-radius: 18px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(248, 250, 252, 0.92);\n  color: #475569;\n  line-height: 1.6;\n}\n\n.feature strong {\n  display: block;\n  margin-bottom: 6px;\n  color: #0f172a;\n}\n\n.cta-row,\n.controls {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 22px;\n}\n\n.btn,\nbutton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font: inherit;\n  text-decoration: none;\n}\n\n.btn,\nbutton {\n  background: linear-gradient(135deg, #38bdf8, #2563eb);\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.btn.secondary,\n.ghost-button {\n  background: rgba(255, 255, 255, 0.92);\n  color: #0f172a;\n  border-color: rgba(15, 23, 42, 0.08);\n}\n\n.ghost-button {\n  padding: 8px 12px;\n}\n\n.step {\n  display: grid;\n  grid-template-columns: 36px minmax(0, 1fr);\n  gap: 14px;\n  margin-top: 16px;\n}\n\n.step-num {\n  display: inline-grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 999px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  font-weight: 700;\n}\n\npre,\n.code {\n  overflow: auto;\n  padding: 14px 16px;\n  border-radius: 18px;\n  background: #0f172a;\n  color: #dbeafe;\n  line-height: 1.6;\n  font-family: \"SFMono-Regular\", Consolas, monospace;\n  font-size: 13px;\n}\n\n.code-snippet {\n  margin-top: 10px;\n}\n\n.code-snippet-head {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 8px;\n}\n\n.copy-button {\n  min-width: 88px;\n}\n\n.layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: 24px;\n  margin-top: 28px;\n}\n\n.panels {\n  display: grid;\n  gap: 24px;\n}\n\n.panel {\n  padding: 24px;\n}\n\n.panel-header {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.panel-header h2 {\n  margin-bottom: 8px;\n}\n\n.demo-grid {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.demo-card {\n  padding: 20px;\n  border-radius: 22px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fbff;\n}\n\n.demo-card.full {\n  grid-column: span 2;\n}\n\n.preview-frame,\n.surface-card,\n.table-shell {\n  position: relative;\n  overflow: hidden;\n  min-height: 180px;\n  border-radius: 20px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.component-frame {\n  display: grid;\n  place-items: center;\n  padding: 32px 24px;\n}\n\n.surface-card {\n  padding: 22px;\n}\n\n.surface-eyebrow {\n  color: #64748b;\n  font-size: 13px;\n}\n\n.surface-metric {\n  margin-top: 12px;\n  font-size: 34px;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n\n.surface-trend {\n  margin-top: 10px;\n  color: #475569;\n}\n\n.primary-action {\n  min-height: 46px;\n  min-width: 168px;\n}\n\n.table-shell {\n  padding: 18px;\n}\n\n.table-head,\n.table-row {\n  display: grid;\n  grid-template-columns: 0.8fr 1fr 1fr 0.8fr;\n  gap: 12px;\n}\n\n.table-head {\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #64748b;\n}\n\n.table-row {\n  min-height: 44px;\n  align-items: center;\n  color: #334155;\n}\n\n.api-grid {\n  display: grid;\n  gap: 14px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.api-card {\n  padding: 18px;\n  border-radius: 18px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fbff;\n}\n\n.sidebar {\n  display: grid;\n  gap: 24px;\n  align-self: start;\n  position: sticky;\n  top: 20px;\n}\n\n.sidebar-card {\n  padding: 20px;\n}\n\n.log-list {\n  display: grid;\n  gap: 10px;\n  max-height: 460px;\n  overflow: auto;\n}\n\n.log-item {\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: rgba(248, 250, 252, 0.98);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  color: #334155;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.release-meta {\n  padding-left: 18px;\n  margin: 0;\n  color: #475569;\n  line-height: 1.8;\n}\n\n.history-copy {\n  margin-bottom: 14px;\n  color: #475569;\n  line-height: 1.7;\n}\n\n.release-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.release-link {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 38px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(248, 250, 252, 0.98);\n  color: #0f172a;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.release-link.is-current {\n  background: linear-gradient(135deg, #38bdf8, #2563eb);\n  border-color: transparent;\n  color: #ffffff;\n}\n\n@media (max-width: 1080px) {\n  .hero,\n  .layout {\n    grid-template-columns: 1fr;\n  }\n\n  .sidebar {\n    position: static;\n  }\n}\n\n@media (max-width: 760px) {\n  .shell {\n    padding: 16px;\n  }\n\n  .hero-card,\n  .panel,\n  .sidebar-card {\n    padding: 18px;\n    border-radius: 22px;\n  }\n\n  .hero-main h1 {\n    font-size: 38px;\n  }\n\n  .feature-grid,\n  .demo-grid,\n  .api-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .demo-card.full {\n    grid-column: span 1;\n  }\n\n  .table-head,\n  .table-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,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O0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsd0NBQXdDO0VBQ3hDLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTs7SUFFRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBOzs7SUFHRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTs7O0lBR0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLGdEQUFnRDtFQUNsRDtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoZWxsIHtcbiAgcGFkZGluZzogMjhweDtcbiAgY29sb3I6ICMwZjE3MmE7XG59XG5cbi5oZXJvIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMS4yNWZyKSBtaW5tYXgoMzIwcHgsIDAuNzVmcik7XG4gIGdhcDogMjRweDtcbn1cblxuLmhlcm8tY2FyZCxcbi5wYW5lbCxcbi5zaWRlYmFyLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xufVxuXG4uaGVyby1jYXJkIHtcbiAgcGFkZGluZzogMjhweDtcbn1cblxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgzNywgOTksIDIzNSwgMC4wOCk7XG4gIGNvbG9yOiAjMWQ0ZWQ4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgxLFxuaDIsXG5oMyxcbnAsXG5wcmUge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uaGVyby1tYWluIGgxIHtcbiAgbWFyZ2luOiAxNnB4IDAgMTJweDtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBsaW5lLWhlaWdodDogMC45NTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07XG59XG5cbi5oZXJvLW1haW4gcCxcbi5wYW5lbC1oZWFkZXIgcCxcbi5hcGktY2FyZCBwLFxuLmRlbW8tY2FyZCBwIHtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5mZWF0dXJlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTRweDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuLmZlYXR1cmUge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjUwLCAyNTIsIDAuOTIpO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmZlYXR1cmUgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY29sb3I6ICMwZjE3MmE7XG59XG5cbi5jdGEtcm93LFxuLmNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG5cbi5idG4sXG5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMXB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250OiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG4sXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzhiZGY4LCAjMjU2M2ViKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG4uc2Vjb25kYXJ5LFxuLmdob3N0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XG4gIGNvbG9yOiAjMGYxNzJhO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG59XG5cbi5naG9zdC1idXR0b24ge1xuICBwYWRkaW5nOiA4cHggMTJweDtcbn1cblxuLnN0ZXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM2cHggbWlubWF4KDAsIDFmcik7XG4gIGdhcDogMTRweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnN0ZXAtbnVtIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjZGJlYWZlO1xuICBjb2xvcjogIzFkNGVkODtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxucHJlLFxuLmNvZGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xuICBjb2xvcjogI2RiZWFmZTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY29kZS1zbmlwcGV0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvZGUtc25pcHBldC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uY29weS1idXR0b24ge1xuICBtaW4td2lkdGg6IDg4cHg7XG59XG5cbi5sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIDMyMHB4O1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG5cbi5wYW5lbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDI0cHg7XG59XG5cbi5wYW5lbCB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4ucGFuZWwtaGVhZGVyIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZGVtby1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNnB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5kZW1vLWNhcmQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xufVxuXG4uZGVtby1jYXJkLmZ1bGwge1xuICBncmlkLWNvbHVtbjogc3BhbiAyO1xufVxuXG4ucHJldmlldy1mcmFtZSxcbi5zdXJmYWNlLWNhcmQsXG4udGFibGUtc2hlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpO1xufVxuXG4uY29tcG9uZW50LWZyYW1lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzJweCAyNHB4O1xufVxuXG4uc3VyZmFjZS1jYXJkIHtcbiAgcGFkZGluZzogMjJweDtcbn1cblxuLnN1cmZhY2UtZXllYnJvdyB7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zdXJmYWNlLW1ldHJpYyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07XG59XG5cbi5zdXJmYWNlLXRyZW5kIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICM0NzU1Njk7XG59XG5cbi5wcmltYXJ5LWFjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDQ2cHg7XG4gIG1pbi13aWR0aDogMTY4cHg7XG59XG5cbi50YWJsZS1zaGVsbCB7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbi50YWJsZS1oZWFkLFxuLnRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC44ZnIgMWZyIDFmciAwLjhmcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4udGFibGUtaGVhZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuLnRhYmxlLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzM0MTU1O1xufVxuXG4uYXBpLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE0cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbn1cblxuLmFwaS1jYXJkIHtcbiAgcGFkZGluZzogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcbn1cblxuLnNpZGViYXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDI0cHg7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDIwcHg7XG59XG5cbi5zaWRlYmFyLWNhcmQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubG9nLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDQ2MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmxvZy1pdGVtIHtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjUwLCAyNTIsIDAuOTgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBjb2xvcjogIzMzNDE1NTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4ucmVsZWFzZS1tZXRhIHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBsaW5lLWhlaWdodDogMS44O1xufVxuXG4uaGlzdG9yeS1jb3B5IHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5yZWxlYXNlLWxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG59XG5cbi5yZWxlYXNlLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTAsIDI1MiwgMC45OCk7XG4gIGNvbG9yOiAjMGYxNzJhO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJlbGVhc2UtbGluay5pcy1jdXJyZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM4YmRmOCwgIzI1NjNlYik7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5oZXJvLFxuICAubGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuc2hlbGwge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuaGVyby1jYXJkLFxuICAucGFuZWwsXG4gIC5zaWRlYmFyLWNhcmQge1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgfVxuXG4gIC5oZXJvLW1haW4gaDEge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgfVxuXG4gIC5mZWF0dXJlLWdyaWQsXG4gIC5kZW1vLWdyaWQsXG4gIC5hcGktZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuZGVtby1jYXJkLmZ1bGwge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDE7XG4gIH1cblxuICAudGFibGUtaGVhZCxcbiAgLnRhYmxlLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "Bzxo":
/*!**************************************!*\
  !*** ./src/app/data/release-line.ts ***!
  \**************************************/
/*! exports provided: RELEASE_LINE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELEASE_LINE", function() { return RELEASE_LINE; });
const RELEASE_LINE = {
    angular: '11.2.x',
    packageVersion: '11.0.0',
    coreVersion: '0.1.1',
    runtimeTarget: 'Angular 11 + Angular CLI',
    docsPath: '/angular-11/'
};


/***/ }),

/***/ "EJQY":
/*!******************************************!*\
  !*** ./src/app/playground.component.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.panel {\n  padding: 24px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);\n}\n\n.panel-header {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.panel-header h2 {\n  margin: 0 0 8px;\n}\n\n.panel-header p {\n  margin: 0;\n  color: #475569;\n  line-height: 1.7;\n}\n\nbutton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font: inherit;\n  background: linear-gradient(135deg, #38bdf8, #2563eb);\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.ghost-button {\n  background: rgba(255, 255, 255, 0.92);\n  color: #0f172a;\n  border-color: rgba(15, 23, 42, 0.08);\n}\n\n.code-block,\n.code-preview {\n  overflow: auto;\n  padding: 14px 16px;\n  border-radius: 18px;\n  background: #0f172a;\n  color: #dbeafe;\n  line-height: 1.6;\n  font-family: \"SFMono-Regular\", Consolas, monospace;\n  font-size: 13px;\n}\n\n.playground-shell {\n  display: grid;\n  grid-template-columns: minmax(300px, 340px) minmax(0, 1fr);\n  gap: 20px;\n}\n\n.playground-controls,\n.playground-preview {\n  padding: 20px;\n  border-radius: 22px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fbff;\n}\n\n.playground-controls {\n  display: grid;\n  align-content: start;\n  gap: 16px;\n}\n\n.field {\n  display: grid;\n  gap: 8px;\n}\n\n.field label,\n.field span {\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.field input,\n.field select {\n  width: 100%;\n  min-height: 42px;\n  padding: 0 12px;\n  border-radius: 14px;\n  border: 1px solid rgba(15, 23, 42, 0.1);\n  background: rgba(255, 255, 255, 0.98);\n  color: #0f172a;\n  font: inherit;\n}\n\n.field input[type=\"range\"] {\n  padding: 0;\n  min-height: auto;\n}\n\n.field input[type=\"color\"] {\n  padding: 4px;\n}\n\n.field.two-up {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.toggle-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 14px;\n}\n\n.toggle-row label {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #334155;\n  font-size: 13px;\n}\n\n.playground-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.playground-preview-tabs {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n  padding: 6px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.playground-preview-tab {\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: #475569;\n  padding: 9px 14px;\n  cursor: pointer;\n  transition: 180ms ease;\n}\n\n.playground-preview-tab.is-active {\n  background: rgba(37, 99, 235, 0.14);\n  color: #0f172a;\n}\n\n.playground-description {\n  margin: 0 0 14px;\n  color: #475569;\n  line-height: 1.7;\n}\n\n.playground-stage {\n  min-height: 440px;\n  margin-bottom: 18px;\n}\n\n.playground-stage.is-reduced-motion .rvl-loader,\n.playground-stage.is-reduced-motion .rvl-loader * {\n  animation-duration: 0.01ms !important;\n  animation-iteration-count: 1 !important;\n  transition-duration: 0.01ms !important;\n}\n\n.playground-stage-inner {\n  min-height: inherit;\n}\n\n.playground-surface {\n  position: relative;\n  min-height: 320px;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.playground-surface.is-fullscreen-simulated {\n  min-height: 400px;\n}\n\n.playground-surface--clean {\n  display: grid;\n  place-items: center;\n  background: rgba(248, 250, 252, 0.96);\n}\n\n.playground-table-head,\n.playground-table-row {\n  display: grid;\n  grid-template-columns: 0.8fr 1.5fr 1fr 0.9fr;\n  gap: 10px;\n  align-items: center;\n}\n\n.playground-table-head {\n  padding: 24px 24px 10px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.playground-table-row {\n  min-height: 44px;\n  padding: 0 24px;\n}\n\n.playground-table-row span {\n  display: flex;\n  align-items: center;\n}\n\n.playground-table-row i {\n  display: block;\n  width: 100%;\n  height: 12px;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.08);\n}\n\n.playground-table-row span:first-child i {\n  width: 70%;\n}\n\n.surface-card-grid,\n.page-grid {\n  display: grid;\n  gap: 12px;\n  padding: 22px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.surface-card-cell,\n.page-tile {\n  min-height: 78px;\n  border-radius: 18px;\n  background: rgba(15, 23, 42, 0.06);\n}\n\n.surface-card-cell.wide {\n  grid-column: span 2;\n  min-height: 120px;\n}\n\n.surface-table {\n  padding: 14px 0 0;\n}\n\n.surface-page {\n  min-height: 240px;\n}\n\n.page-topbar {\n  height: 54px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.surface-modal {\n  padding: 18px;\n}\n\n.modal-shell {\n  max-width: 320px;\n  margin: 0 auto;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.modal-header {\n  height: 56px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.modal-body {\n  position: relative;\n  min-height: 170px;\n  padding: 18px;\n}\n\n.modal-line {\n  height: 14px;\n  margin-bottom: 14px;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.08);\n}\n\n.modal-line.short {\n  width: 68%;\n}\n\n.surface-chart {\n  display: flex;\n  align-items: end;\n  gap: 10px;\n  padding: 22px;\n}\n\n.chart-bar {\n  flex: 1;\n  border-radius: 999px 999px 12px 12px;\n  background: linear-gradient(180deg, rgba(96, 165, 250, 0.76), #2563eb);\n}\n\n.surface-upload {\n  display: grid;\n  place-items: center;\n  text-align: center;\n  padding: 24px;\n}\n\n.upload-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 18px;\n  border: 2px dashed rgba(37, 99, 235, 0.45);\n}\n\n.upload-title {\n  margin-top: 12px;\n  font-weight: 700;\n}\n\n.upload-caption {\n  margin-top: 8px;\n  color: #64748b;\n}\n\n.code-preview {\n  margin-bottom: 0;\n}\n\n@media (max-width: 1080px) {\n  .playground-shell {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .field.two-up {\n    grid-template-columns: 1fr;\n  }\n\n  .playground-preview-tabs {\n    border-radius: 24px;\n  }\n\n  .playground-table-head,\n  .playground-table-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXlncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFEQUFxRDtFQUNyRCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0RBQWtEO0VBQ2xELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMERBQTBEO0VBQzFELFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVD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RUFDWixtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLGdEQUFnRDtFQUNsRDtBQUNGIiwiZmlsZSI6InBsYXlncm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYW5lbCB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG59XG5cbi5wYW5lbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4ucGFuZWwtaGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwIDAgOHB4O1xufVxuXG4ucGFuZWwtaGVhZGVyIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMXB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzhiZGY4LCAjMjU2M2ViKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5naG9zdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICBjb2xvcjogIzBmMTcyYTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xufVxuXG4uY29kZS1ibG9jayxcbi5jb2RlLXByZXZpZXcge1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjMGYxNzJhO1xuICBjb2xvcjogI2RiZWFmZTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucGxheWdyb3VuZC1zaGVsbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwMHB4LCAzNDBweCkgbWlubWF4KDAsIDFmcik7XG4gIGdhcDogMjBweDtcbn1cblxuLnBsYXlncm91bmQtY29udHJvbHMsXG4ucGxheWdyb3VuZC1wcmV2aWV3IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcbn1cblxuLnBsYXlncm91bmQtY29udHJvbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZmllbGQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDhweDtcbn1cblxuLmZpZWxkIGxhYmVsLFxuLmZpZWxkIHNwYW4ge1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmllbGQgaW5wdXQsXG4uZmllbGQgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQycHg7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTgpO1xuICBjb2xvcjogIzBmMTcyYTtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLmZpZWxkIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG59XG5cbi5maWVsZCBpbnB1dFt0eXBlPVwiY29sb3JcIl0ge1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbi5maWVsZC50d28tdXAge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTJweDtcbn1cblxuLnRvZ2dsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweCAxNHB4O1xufVxuXG4udG9nZ2xlLXJvdyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgY29sb3I6ICMzMzQxNTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnBsYXlncm91bmQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xufVxuXG4ucGxheWdyb3VuZC1wcmV2aWV3LXRhYnMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG4ucGxheWdyb3VuZC1wcmV2aWV3LXRhYiB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgcGFkZGluZzogOXB4IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMTgwbXMgZWFzZTtcbn1cblxuLnBsYXlncm91bmQtcHJldmlldy10YWIuaXMtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzNywgOTksIDIzNSwgMC4xNCk7XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuXG4ucGxheWdyb3VuZC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAwIDE0cHg7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4ucGxheWdyb3VuZC1zdGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDQ0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4ucGxheWdyb3VuZC1zdGFnZS5pcy1yZWR1Y2VkLW1vdGlvbiAucnZsLWxvYWRlcixcbi5wbGF5Z3JvdW5kLXN0YWdlLmlzLXJlZHVjZWQtbW90aW9uIC5ydmwtbG9hZGVyICoge1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xufVxuXG4ucGxheWdyb3VuZC1zdGFnZS1pbm5lciB7XG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5wbGF5Z3JvdW5kLXN1cmZhY2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDMyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpO1xufVxuXG4ucGxheWdyb3VuZC1zdXJmYWNlLmlzLWZ1bGxzY3JlZW4tc2ltdWxhdGVkIHtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbi5wbGF5Z3JvdW5kLXN1cmZhY2UtLWNsZWFuIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MCwgMjUyLCAwLjk2KTtcbn1cblxuLnBsYXlncm91bmQtdGFibGUtaGVhZCxcbi5wbGF5Z3JvdW5kLXRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC44ZnIgMS41ZnIgMWZyIDAuOWZyO1xuICBnYXA6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5Z3JvdW5kLXRhYmxlLWhlYWQge1xuICBwYWRkaW5nOiAyNHB4IDI0cHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG59XG5cbi5wbGF5Z3JvdW5kLXRhYmxlLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbn1cblxuLnBsYXlncm91bmQtdGFibGUtcm93IHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheWdyb3VuZC10YWJsZS1yb3cgaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbn1cblxuLnBsYXlncm91bmQtdGFibGUtcm93IHNwYW46Zmlyc3QtY2hpbGQgaSB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5zdXJmYWNlLWNhcmQtZ3JpZCxcbi5wYWdlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDIycHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbn1cblxuLnN1cmZhY2UtY2FyZC1jZWxsLFxuLnBhZ2UtdGlsZSB7XG4gIG1pbi1oZWlnaHQ6IDc4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XG59XG5cbi5zdXJmYWNlLWNhcmQtY2VsbC53aWRlIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbiAgbWluLWhlaWdodDogMTIwcHg7XG59XG5cbi5zdXJmYWNlLXRhYmxlIHtcbiAgcGFkZGluZzogMTRweCAwIDA7XG59XG5cbi5zdXJmYWNlLXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAyNDBweDtcbn1cblxuLnBhZ2UtdG9wYmFyIHtcbiAgaGVpZ2h0OiA1NHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbn1cblxuLnN1cmZhY2UtbW9kYWwge1xuICBwYWRkaW5nOiAxOHB4O1xufVxuXG4ubW9kYWwtc2hlbGwge1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxNzBweDtcbiAgcGFkZGluZzogMThweDtcbn1cblxuLm1vZGFsLWxpbmUge1xuICBoZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xufVxuXG4ubW9kYWwtbGluZS5zaG9ydCB7XG4gIHdpZHRoOiA2OCU7XG59XG5cbi5zdXJmYWNlLWNoYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAyMnB4O1xufVxuXG4uY2hhcnQtYmFyIHtcbiAgZmxleDogMTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHggOTk5cHggMTJweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDk2LCAxNjUsIDI1MCwgMC43NiksICMyNTYzZWIpO1xufVxuXG4uc3VyZmFjZS11cGxvYWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi51cGxvYWQtaWNvbiB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCByZ2JhKDM3LCA5OSwgMjM1LCAwLjQ1KTtcbn1cblxuLnVwbG9hZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi51cGxvYWQtY2FwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi5jb2RlLXByZXZpZXcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5wbGF5Z3JvdW5kLXNoZWxsIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLmZpZWxkLnR3by11cCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAucGxheWdyb3VuZC1wcmV2aWV3LXRhYnMge1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIH1cblxuICAucGxheWdyb3VuZC10YWJsZS1oZWFkLFxuICAucGxheWdyb3VuZC10YWJsZS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "KNk3":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playground.component.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article class=\"panel\" id=\"playground\">\n  <div class=\"panel-header\">\n    <h2>Playground</h2>\n    <p>Use the Angular wrapper against the same kind of interactive preview shell as the core docs.</p>\n  </div>\n\n  <div class=\"playground-shell\">\n    <form class=\"playground-controls\">\n      <div class=\"field\">\n        <label for=\"playground-variant\">Variant</label>\n        <select id=\"playground-variant\"\n                name=\"variant\"\n                [(ngModel)]=\"state.variant\"\n                (ngModelChange)=\"applyPlaygroundState()\">\n          <option *ngFor=\"let variant of variants\" [value]=\"variant.value\">{{ variant.label }}</option>\n        </select>\n      </div>\n\n      <div class=\"field\">\n        <label for=\"playground-size\">Size <span>{{ state.size }}px</span></label>\n        <input id=\"playground-size\"\n               name=\"size\"\n               type=\"range\"\n               min=\"18\"\n               max=\"96\"\n               [(ngModel)]=\"state.size\"\n               (ngModelChange)=\"applyPlaygroundState()\" />\n      </div>\n\n      <div class=\"field\">\n        <label for=\"playground-speed\">Speed <span>{{ state.speed }}ms</span></label>\n        <input id=\"playground-speed\"\n               name=\"speed\"\n               type=\"range\"\n               min=\"300\"\n               max=\"2200\"\n               step=\"50\"\n               [(ngModel)]=\"state.speed\"\n               (ngModelChange)=\"applyPlaygroundState()\" />\n      </div>\n\n      <div class=\"field two-up\">\n        <div>\n          <label for=\"playground-color\">Primary</label>\n          <input id=\"playground-color\"\n                 name=\"color\"\n                 type=\"color\"\n                 [(ngModel)]=\"state.color\"\n                 (ngModelChange)=\"applyPlaygroundState()\" />\n        </div>\n        <div>\n          <label for=\"playground-secondary-color\">Secondary</label>\n          <input id=\"playground-secondary-color\"\n                 name=\"secondaryColor\"\n                 type=\"color\"\n                 [(ngModel)]=\"state.secondaryColor\"\n                 (ngModelChange)=\"applyPlaygroundState()\" />\n        </div>\n      </div>\n\n      <div class=\"field\">\n        <label for=\"playground-label\">Label</label>\n        <input id=\"playground-label\"\n               name=\"label\"\n               type=\"text\"\n               [(ngModel)]=\"state.label\"\n               (ngModelChange)=\"applyPlaygroundState()\" />\n      </div>\n\n      <div class=\"field two-up\">\n        <div>\n          <label for=\"playground-delay\">Delay</label>\n          <input id=\"playground-delay\"\n                 name=\"delay\"\n                 type=\"number\"\n                 min=\"0\"\n                 step=\"50\"\n                 [(ngModel)]=\"state.delay\"\n                 (ngModelChange)=\"applyPlaygroundState()\" />\n        </div>\n        <div>\n          <label for=\"playground-min-visible\">Min visible</label>\n          <input id=\"playground-min-visible\"\n                 name=\"minVisible\"\n                 type=\"number\"\n                 min=\"0\"\n                 step=\"50\"\n                 [(ngModel)]=\"state.minVisible\"\n                 (ngModelChange)=\"applyPlaygroundState()\" />\n        </div>\n      </div>\n\n      <div class=\"toggle-row\">\n        <label><input type=\"checkbox\" name=\"overlay\" [(ngModel)]=\"state.overlay\" (ngModelChange)=\"applyPlaygroundState()\" /> Overlay</label>\n        <label><input type=\"checkbox\" name=\"fullscreen\" [(ngModel)]=\"state.fullscreen\" (ngModelChange)=\"applyPlaygroundState()\" /> Fullscreen</label>\n        <label><input type=\"checkbox\" name=\"centered\" [(ngModel)]=\"state.centered\" (ngModelChange)=\"applyPlaygroundState()\" /> Centered</label>\n        <label><input type=\"checkbox\" name=\"reducedMotion\" [(ngModel)]=\"state.reducedMotion\" (ngModelChange)=\"applyPlaygroundState()\" /> Reduced motion</label>\n      </div>\n\n      <div class=\"playground-actions\">\n        <button type=\"button\" (click)=\"replayTiming()\">Replay timing</button>\n        <button type=\"button\" class=\"ghost-button\" (click)=\"copyCode()\">{{ copyButtonLabel }}</button>\n      </div>\n    </form>\n\n    <div class=\"playground-preview\">\n      <div class=\"playground-preview-tabs\" role=\"tablist\" aria-label=\"Preview surfaces\">\n        <button *ngFor=\"let surface of surfaces\"\n                type=\"button\"\n                role=\"tab\"\n                class=\"playground-preview-tab\"\n                [class.is-active]=\"isSurfaceActive(surface.id)\"\n                [attr.aria-selected]=\"isSurfaceActive(surface.id)\"\n                (click)=\"setSurface(surface.id)\">\n          {{ surface.label }}\n        </button>\n      </div>\n\n      <p class=\"playground-description\">{{ getActiveSurfaceDescription() }}</p>\n\n      <div class=\"playground-stage\" [class.is-reduced-motion]=\"state.reducedMotion\">\n        <div class=\"playground-stage-inner\" [ngSwitch]=\"activeSurface\">\n          <div *ngSwitchCase=\"'default'\"\n               class=\"playground-surface playground-surface--clean\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [stacklineLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\"></div>\n\n          <div *ngSwitchCase=\"'dashboard'\"\n               class=\"playground-surface surface-card-grid\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [stacklineLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"surface-card-cell\"></div>\n            <div class=\"surface-card-cell\"></div>\n            <div class=\"surface-card-cell wide\"></div>\n          </div>\n\n          <div *ngSwitchCase=\"'table'\"\n               class=\"playground-surface surface-table\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [stacklineLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"playground-table-head\">\n              <span>Status</span>\n              <span>Customer</span>\n              <span>Plan</span>\n              <span>MRR</span>\n            </div>\n            <div class=\"playground-table-row\">\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n            </div>\n            <div class=\"playground-table-row\">\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n            </div>\n            <div class=\"playground-table-row\">\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n            </div>\n            <div class=\"playground-table-row\">\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n              <span><i></i></span>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"'page'\"\n               class=\"playground-surface surface-page\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [stacklineLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"page-topbar\"></div>\n            <div class=\"page-grid\">\n              <div class=\"page-tile\"></div>\n              <div class=\"page-tile\"></div>\n              <div class=\"page-tile\"></div>\n              <div class=\"page-tile\"></div>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"'modal'\" class=\"playground-surface surface-modal\" [class.is-fullscreen-simulated]=\"state.fullscreen\">\n            <div class=\"modal-shell\">\n              <div class=\"modal-header\"></div>\n              <div class=\"modal-body\"\n                   [stacklineLoading]=\"previewVisible\"\n                   [loadingOptions]=\"previewOptions\">\n                <div class=\"modal-line\"></div>\n                <div class=\"modal-line short\"></div>\n                <div class=\"modal-line\"></div>\n              </div>\n            </div>\n          </div>\n\n          <div *ngSwitchCase=\"'chart'\"\n               class=\"playground-surface surface-chart\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [stacklineLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"chart-bar\" style=\"height: 28%\"></div>\n            <div class=\"chart-bar\" style=\"height: 46%\"></div>\n            <div class=\"chart-bar\" style=\"height: 60%\"></div>\n            <div class=\"chart-bar\" style=\"height: 38%\"></div>\n            <div class=\"chart-bar\" style=\"height: 72%\"></div>\n            <div class=\"chart-bar\" style=\"height: 55%\"></div>\n          </div>\n\n          <div *ngSwitchDefault\n               class=\"playground-surface surface-upload\"\n               [class.is-fullscreen-simulated]=\"state.fullscreen\"\n               [stacklineLoading]=\"previewVisible\"\n               [loadingOptions]=\"previewOptions\">\n            <div class=\"upload-icon\"></div>\n            <div class=\"upload-title\">Drop files here</div>\n            <div class=\"upload-caption\">PNG, SVG, PDF up to 25 MB</div>\n          </div>\n        </div>\n      </div>\n\n      <pre class=\"code-block code-preview\"><code>{{ generatedCode }}</code></pre>\n    </div>\n  </div>\n</article>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stackline/angular-loading */ "/qfS");
/* harmony import */ var _stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/api */ "bTD8");
/* harmony import */ var _data_release_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/release-line */ "Bzxo");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AppComponent = class AppComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.apiCards = _data_api__WEBPACK_IMPORTED_MODULE_4__["API_CARDS"];
        this.releaseLine = _data_release_line__WEBPACK_IMPORTED_MODULE_5__["RELEASE_LINE"];
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
        this.installSnippet = "npm install @stackline/angular-loading@11";
        this.moduleSnippet = "import { LoadingModule } from '@stackline/angular-loading';\n\n@NgModule({\n  imports: [LoadingModule.forRoot()]\n})";
        this.directiveSnippet = "<div [stacklineLoading]=\"isLoading\"\n     [loadingOptions]=\"{ overlay: true }\">\n  ...\n</div>";
        this.componentSnippet = "<stackline-loading\n  [visible]=\"true\"\n  [options]=\"basicOptions\">\n</stackline-loading>";
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
        this.log('Angular 11 docs loaded successfully.');
    }
    onCreate(label) {
        this.log(label + ' created.');
    }
    onShown(label) {
        this.log(label + ' shown.');
    }
    onHidden(label) {
        this.log(label + ' hidden.');
    }
    onDestroyed(label) {
        this.log(label + ' destroyed.');
    }
    toggleOverlay() {
        this.overlayVisible = !this.overlayVisible;
        this.log('Card overlay toggled to ' + (this.overlayVisible ? 'visible' : 'hidden') + '.');
    }
    triggerButton() {
        if (this.buttonLoading) {
            return;
        }
        this.buttonLoading = true;
        this.log('Simulating button submit...');
        setTimeout(() => {
            this.buttonLoading = false;
            this.log('Button submit finished.');
        }, 1600);
    }
    refreshTable() {
        if (this.tableVisible) {
            return;
        }
        this.tableVisible = true;
        this.log('Table refresh started.');
        setTimeout(() => {
            this.tableVisible = false;
            this.log('Table refresh finished.');
        }, 1800);
    }
    showFullscreen() {
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
        setTimeout(() => {
            if (this.fullscreenLoader) {
                this.fullscreenLoader.hide();
                this.log('Fullscreen loader hidden.');
            }
        }, 1700);
    }
    clearLog() {
        this.logs = [];
        this.log('Log cleared.');
    }
    copySnippet(key, value) {
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
        setTimeout(() => {
            this.copyLabels[key] = 'Copy';
        }, 1200);
    }
    isCurrentRelease(docsPath) {
        return docsPath === this.releaseLine.docsPath;
    }
    log(message) {
        var timestamp = new Date().toLocaleTimeString();
        this.logs.unshift('[' + timestamp + '] ' + message);
        this.logs = this.logs.slice(0, 12);
    }
};
AppComponent.ctorParameters = () => [
    { type: _stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [_stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shell\">\n  <section class=\"hero\">\n    <div class=\"hero-card hero-main\">\n      <span class=\"badge\">Angular {{ releaseLine.angular }} · @stackline/loading {{ releaseLine.coreVersion }}</span>\n      <h1>@stackline/angular-loading</h1>\n      <p>\n        A maintained Angular wrapper around the Stackline loading toolkit. Use a component for direct templates,\n        a directive for cards and buttons, and a service for fullscreen or ad-hoc loading states.\n      </p>\n      <div class=\"feature-grid\">\n        <div class=\"feature\">\n          <strong>Component API</strong>\n          Render loaders declaratively or wrap projected content.\n        </div>\n        <div class=\"feature\">\n          <strong>Directive API</strong>\n          Attach loading behavior to cards, tables, and buttons.\n        </div>\n        <div class=\"feature\">\n          <strong>Service API</strong>\n          Create fullscreen or programmatic loaders when the template is not enough.\n        </div>\n        <div class=\"feature\">\n          <strong>Core fidelity</strong>\n          The wrapper passes through the same modern variants and anti-flicker options.\n        </div>\n      </div>\n      <div class=\"cta-row\">\n        <a class=\"btn\" href=\"#demos\">See demos</a>\n        <a class=\"btn secondary\" href=\"https://github.com/alexandroit/angular-loading#readme\" target=\"_blank\">README</a>\n      </div>\n    </div>\n\n    <div class=\"hero-card hero-setup\">\n      <h2>Setup in 3 steps</h2>\n\n      <div class=\"step\">\n        <span class=\"step-num\">1</span>\n        <div>\n          <strong>Install</strong>\n          <div class=\"code-snippet\">\n            <div class=\"code-snippet-head\">\n              <button class=\"ghost-button copy-button\" (click)=\"copySnippet('install', installSnippet)\">{{ copyLabels.install }}</button>\n            </div>\n            <pre [textContent]=\"installSnippet\"></pre>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">2</span>\n        <div>\n          <strong>Register the module</strong>\n          <div class=\"code-snippet\">\n            <div class=\"code-snippet-head\">\n              <button class=\"ghost-button copy-button\" (click)=\"copySnippet('module', moduleSnippet)\">{{ copyLabels.module }}</button>\n            </div>\n            <pre [textContent]=\"moduleSnippet\"></pre>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"step\">\n        <span class=\"step-num\">3</span>\n        <div>\n          <strong>Use the wrapper</strong>\n          <div class=\"code-snippet\">\n            <div class=\"code-snippet-head\">\n              <button class=\"ghost-button copy-button\" (click)=\"copySnippet('directiveSetup', directiveSnippet)\">{{ copyLabels.directiveSetup }}</button>\n            </div>\n            <pre [textContent]=\"directiveSnippet\"></pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"layout\" id=\"demos\">\n    <div class=\"panels\">\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>Core wrapper demos</h2>\n          <p>This Angular line covers the most practical loading patterns for enterprise apps and SaaS screens.</p>\n        </div>\n\n        <div class=\"demo-grid\">\n          <section class=\"demo-card\">\n            <h3>Standalone component</h3>\n            <p>Use the component directly when the loader itself is the main thing you want to render.</p>\n            <div class=\"code-snippet\">\n              <div class=\"code-snippet-head\">\n                <button class=\"ghost-button copy-button\" (click)=\"copySnippet('component', componentSnippet)\">{{ copyLabels.component }}</button>\n              </div>\n              <pre class=\"code\" [textContent]=\"componentSnippet\"></pre>\n            </div>\n            <div class=\"preview-frame component-frame\">\n              <stackline-loading\n                [visible]=\"true\"\n                [options]=\"basicOptions\"\n                (create)=\"onCreate('Standalone component')\"\n                (shown)=\"onShown('Standalone component')\"></stackline-loading>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Directive overlay on a card</h3>\n            <p>The directive is the best fit for cards, panels, and existing containers.</p>\n            <div class=\"code-snippet\">\n              <div class=\"code-snippet-head\">\n                <button class=\"ghost-button copy-button\" (click)=\"copySnippet('directiveDemo', directiveSnippet)\">{{ copyLabels.directiveDemo }}</button>\n              </div>\n              <pre class=\"code\" [textContent]=\"directiveSnippet\"></pre>\n            </div>\n            <div class=\"controls\">\n              <button (click)=\"toggleOverlay()\">Toggle overlay</button>\n            </div>\n            <div class=\"surface-card\"\n                 [stacklineLoading]=\"overlayVisible\"\n                 [loadingOptions]=\"overlayOptions\"\n                 (create)=\"onCreate('Card overlay')\"\n                 (shown)=\"onShown('Card overlay')\"\n                 (hidden)=\"onHidden('Card overlay')\">\n              <span class=\"surface-eyebrow\">Revenue</span>\n              <div class=\"surface-metric\">$128,400</div>\n              <div class=\"surface-trend\">+12.8% vs previous week</div>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Button loading state</h3>\n            <p>The directive also works well on buttons with compact inline variants and no visible label.</p>\n            <div class=\"controls\">\n              <button class=\"primary-action\"\n                      [stacklineLoading]=\"buttonLoading\"\n                      [loadingOptions]=\"buttonOptions\"\n                      (click)=\"triggerButton()\"\n                      (shown)=\"onShown('Button loader')\"\n                      (hidden)=\"onHidden('Button loader')\">\n                Save changes\n              </button>\n            </div>\n          </section>\n\n          <section class=\"demo-card\">\n            <h3>Service-driven fullscreen</h3>\n            <p>When the loader must be triggered imperatively, use the Angular service and the core instance underneath.</p>\n            <div class=\"controls\">\n              <button (click)=\"showFullscreen()\">Show fullscreen demo</button>\n            </div>\n            <div class=\"code-snippet\">\n              <div class=\"code-snippet-head\">\n                <button class=\"ghost-button copy-button\" (click)=\"copySnippet('service', serviceSnippet)\">{{ copyLabels.service }}</button>\n              </div>\n              <pre class=\"code\" [textContent]=\"serviceSnippet\"></pre>\n            </div>\n          </section>\n\n          <section class=\"demo-card full\">\n            <h3>Table refresh with directive</h3>\n            <p>Overlay a data region without replacing the underlying layout.</p>\n            <div class=\"controls\">\n              <button (click)=\"refreshTable()\">Refresh table</button>\n            </div>\n            <div class=\"table-shell\"\n                 [stacklineLoading]=\"tableVisible\"\n                 [loadingOptions]=\"tableOptions\"\n                 (shown)=\"onShown('Table refresh')\"\n                 (hidden)=\"onHidden('Table refresh')\">\n              <div class=\"table-head\">\n                <span>Status</span>\n                <span>Team</span>\n                <span>Region</span>\n                <span>MRR</span>\n              </div>\n              <div class=\"table-row\">\n                <span>Live</span>\n                <span>Growth</span>\n                <span>North America</span>\n                <span>$42,300</span>\n              </div>\n              <div class=\"table-row\">\n                <span>Live</span>\n                <span>Retention</span>\n                <span>Europe</span>\n                <span>$31,900</span>\n              </div>\n              <div class=\"table-row\">\n                <span>Pending</span>\n                <span>Enterprise</span>\n                <span>LATAM</span>\n                <span>$19,440</span>\n              </div>\n            </div>\n          </section>\n        </div>\n      </article>\n\n      <article class=\"panel\">\n        <div class=\"panel-header\">\n          <h2>API reference</h2>\n          <p>The wrapper is intentionally thin. Angular gives you structure; the core library supplies the variants and behavior.</p>\n        </div>\n        <div class=\"api-grid\">\n          <section class=\"api-card\" *ngFor=\"let item of apiCards\">\n            <h3>{{ item.title }}</h3>\n            <p>{{ item.summary }}</p>\n          </section>\n        </div>\n      </article>\n\n      <playground-panel></playground-panel>\n    </div>\n\n    <aside class=\"sidebar\">\n      <section class=\"sidebar-card\">\n        <div class=\"panel-header\">\n          <h2>Event log</h2>\n          <button class=\"ghost-button\" (click)=\"clearLog()\">Clear</button>\n        </div>\n        <div class=\"log-list\">\n          <div class=\"log-item\" *ngFor=\"let log of logs\">{{ log }}</div>\n        </div>\n      </section>\n\n      <section class=\"sidebar-card\">\n        <div class=\"panel-header\">\n          <h2>Release line</h2>\n        </div>\n        <ul class=\"release-meta\">\n          <li><strong>Angular:</strong> {{ releaseLine.angular }}</li>\n          <li><strong>Package:</strong> {{ releaseLine.packageVersion }}</li>\n          <li><strong>Core:</strong> {{ releaseLine.coreVersion }}</li>\n          <li><strong>Runtime:</strong> {{ releaseLine.runtimeTarget }}</li>\n          <li><strong>Docs path:</strong> {{ releaseLine.docsPath }}</li>\n        </ul>\n      </section>\n\n      <section class=\"sidebar-card\">\n        <div class=\"panel-header\">\n          <h2>Docs history</h2>\n        </div>\n        <p class=\"history-copy\">Jump across every maintained wrapper line from Angular 2 through Angular 21.</p>\n        <div class=\"release-links\">\n          <a\n            *ngFor=\"let release of releaseLinks\"\n            class=\"release-link\"\n            [class.is-current]=\"isCurrentRelease(release.docsPath)\"\n            [href]=\"release.href\">\n            {{ release.label }}\n          </a>\n        </div>\n      </section>\n    </aside>\n  </section>\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stackline/angular-loading */ "/qfS");
/* harmony import */ var _stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _playground_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playground.component */ "qfjc");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _playground_component__WEBPACK_IMPORTED_MODULE_5__["PlaygroundComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingModule"].forRoot()
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "bTD8":
/*!*****************************!*\
  !*** ./src/app/data/api.ts ***!
  \*****************************/
/*! exports provided: API_CARDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CARDS", function() { return API_CARDS; });
const API_CARDS = [
    {
        title: 'LoadingComponent',
        summary: 'Use <stackline-loading> when the loader itself is part of the template or needs to wrap projected content.'
    },
    {
        title: 'LoadingDirective',
        summary: 'Use [stacklineLoading] on cards, buttons, forms, and arbitrary host elements for overlay and inline patterns.'
    },
    {
        title: 'LoadingService',
        summary: 'Create and control fullscreen or ad-hoc loaders programmatically from your Angular services or components.'
    }
];


/***/ }),

/***/ "qfjc":
/*!*****************************************!*\
  !*** ./src/app/playground.component.ts ***!
  \*****************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var _raw_loader_playground_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./playground.component.html */ "KNk3");
/* harmony import */ var _playground_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playground.component.css */ "EJQY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
let PlaygroundComponent = class PlaygroundComponent {
    constructor() {
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
    setSurface(surfaceId) {
        if (this.activeSurface === surfaceId) {
            return;
        }
        this.activeSurface = surfaceId;
        this.applyPlaygroundState();
    }
    applyPlaygroundState() {
        this.state.size = Number(this.state.size);
        this.state.speed = Number(this.state.speed);
        this.state.delay = Number(this.state.delay);
        this.state.minVisible = Number(this.state.minVisible);
        this.previewOptions = this.buildPreviewOptions();
        this.generatedCode = this.buildGeneratedCode();
    }
    replayTiming() {
        this.previewVisible = false;
        setTimeout(() => {
            this.previewVisible = true;
        }, 40);
    }
    copyCode() {
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
        setTimeout(() => {
            this.copyButtonLabel = 'Copy code';
        }, 1200);
    }
    getActiveSurfaceDescription() {
        var i;
        for (i = 0; i < this.surfaces.length; i += 1) {
            if (this.surfaces[i].id === this.activeSurface) {
                return this.surfaces[i].description;
            }
        }
        return '';
    }
    isSurfaceActive(surfaceId) {
        return this.activeSurface === surfaceId;
    }
    buildPreviewOptions() {
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
    }
    buildGeneratedCode() {
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
    }
    escapeSingleQuotes(value) {
        return String(value).split("'").join("\\'");
    }
    buildTemplateDrivenSnippet() {
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
    }
    buildFullscreenSnippet() {
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
    }
    buildTemplateSnippet() {
        if (this.activeSurface === 'default' && !this.state.overlay) {
            return [
                '<stackline-loading',
                '  [visible]="isLoading"',
                '  [options]="loadingOptions">',
                '</stackline-loading>'
            ].join('\n');
        }
        if (this.activeSurface === 'modal') {
            return [
                '<div class="modal-shell">',
                '  <div class="modal-header"></div>',
                '  <div class="modal-body"',
                '       [stacklineLoading]="isLoading"',
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
                '     [stacklineLoading]="isLoading"',
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
                '     [stacklineLoading]="isLoading"',
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
                '     [stacklineLoading]="isLoading"',
                '     [loadingOptions]="loadingOptions">',
                '  <div class="upload-icon"></div>',
                '  <p>Drop files here</p>',
                '</div>'
            ].join('\n');
        }
        if (this.activeSurface === 'page') {
            return [
                '<section class="page-shell"',
                '         [stacklineLoading]="isLoading"',
                '         [loadingOptions]="loadingOptions">',
                '  <header class="page-topbar"></header>',
                '  <div class="page-grid">...</div>',
                '</section>'
            ].join('\n');
        }
        return [
            '<section class="dashboard-cards"',
            '         [stacklineLoading]="isLoading"',
            '         [loadingOptions]="loadingOptions">',
            '  <div class="card"></div>',
            '  <div class="card"></div>',
            '  <div class="card card-wide"></div>',
            '</section>'
        ].join('\n');
    }
    buildOptionsObjectLiteral(indentLevel) {
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
    }
    repeat(value, count) {
        var output = '';
        var i;
        for (i = 0; i < count; i += 1) {
            output += value;
        }
        return output;
    }
};
PlaygroundComponent.ctorParameters = () => [];
PlaygroundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'playground-panel',
        template: _raw_loader_playground_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_playground_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    }),
    __metadata("design:paramtypes", [])
], PlaygroundComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch((error) => {
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

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map