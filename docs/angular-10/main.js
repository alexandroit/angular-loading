(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /tmp/stackline-angular-loading-docs-10-EU7w7t/src/main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".shell {\n  padding: 28px;\n  color: #0f172a;\n}\n\n.hero {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);\n  gap: 24px;\n}\n\n.hero-card,\n.panel,\n.sidebar-card {\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);\n}\n\n.hero-card {\n  padding: 28px;\n}\n\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 8px 12px;\n  border-radius: 999px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(37, 99, 235, 0.08);\n  color: #1d4ed8;\n  font-size: 12px;\n  font-weight: 700;\n}\n\nh1,\nh2,\nh3,\np,\npre {\n  margin-top: 0;\n}\n\n.hero-main h1 {\n  margin: 16px 0 12px;\n  font-size: 52px;\n  line-height: 0.95;\n  letter-spacing: -0.04em;\n}\n\n.hero-main p,\n.panel-header p,\n.api-card p,\n.demo-card p {\n  color: #475569;\n  line-height: 1.7;\n}\n\n.feature-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n  margin-top: 22px;\n}\n\n.feature {\n  padding: 16px;\n  border-radius: 18px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(248, 250, 252, 0.92);\n  color: #475569;\n  line-height: 1.6;\n}\n\n.feature strong {\n  display: block;\n  margin-bottom: 6px;\n  color: #0f172a;\n}\n\n.cta-row,\n.controls {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 22px;\n}\n\n.btn,\nbutton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font: inherit;\n  text-decoration: none;\n}\n\n.btn,\nbutton {\n  background: linear-gradient(135deg, #38bdf8, #2563eb);\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.btn.secondary,\n.ghost-button {\n  background: rgba(255, 255, 255, 0.92);\n  color: #0f172a;\n  border-color: rgba(15, 23, 42, 0.08);\n}\n\n.ghost-button {\n  padding: 8px 12px;\n}\n\n.step {\n  display: grid;\n  grid-template-columns: 36px minmax(0, 1fr);\n  gap: 14px;\n  margin-top: 16px;\n}\n\n.step-num {\n  display: inline-grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 999px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  font-weight: 700;\n}\n\npre,\n.code {\n  overflow: auto;\n  padding: 14px 16px;\n  border-radius: 18px;\n  background: #0f172a;\n  color: #dbeafe;\n  line-height: 1.6;\n  font-family: \"SFMono-Regular\", Consolas, monospace;\n  font-size: 13px;\n}\n\n.code-snippet {\n  margin-top: 10px;\n}\n\n.code-snippet-head {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 8px;\n}\n\n.copy-button {\n  min-width: 88px;\n}\n\n.layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: 24px;\n  margin-top: 28px;\n}\n\n.panels {\n  display: grid;\n  gap: 24px;\n}\n\n.panel {\n  padding: 24px;\n}\n\n.panel-header {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.panel-header h2 {\n  margin-bottom: 8px;\n}\n\n.demo-grid {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.demo-card {\n  padding: 20px;\n  border-radius: 22px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fbff;\n}\n\n.demo-card.full {\n  grid-column: span 2;\n}\n\n.preview-frame,\n.surface-card,\n.table-shell {\n  position: relative;\n  overflow: hidden;\n  min-height: 180px;\n  border-radius: 20px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.component-frame {\n  display: grid;\n  place-items: center;\n  padding: 32px 24px;\n}\n\n.surface-card {\n  padding: 22px;\n}\n\n.surface-eyebrow {\n  color: #64748b;\n  font-size: 13px;\n}\n\n.surface-metric {\n  margin-top: 12px;\n  font-size: 34px;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n\n.surface-trend {\n  margin-top: 10px;\n  color: #475569;\n}\n\n.primary-action {\n  min-height: 46px;\n  min-width: 168px;\n}\n\n.table-shell {\n  padding: 18px;\n}\n\n.table-head,\n.table-row {\n  display: grid;\n  grid-template-columns: 0.8fr 1fr 1fr 0.8fr;\n  gap: 12px;\n}\n\n.table-head {\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #64748b;\n}\n\n.table-row {\n  min-height: 44px;\n  align-items: center;\n  color: #334155;\n}\n\n.api-grid {\n  display: grid;\n  gap: 14px;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.api-card {\n  padding: 18px;\n  border-radius: 18px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fbff;\n}\n\n.sidebar {\n  display: grid;\n  gap: 24px;\n  align-self: start;\n  position: sticky;\n  top: 20px;\n}\n\n.sidebar-card {\n  padding: 20px;\n}\n\n.log-list {\n  display: grid;\n  gap: 10px;\n  max-height: 460px;\n  overflow: auto;\n}\n\n.log-item {\n  padding: 12px 14px;\n  border-radius: 14px;\n  background: rgba(248, 250, 252, 0.98);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  color: #334155;\n  font-size: 13px;\n  line-height: 1.6;\n}\n\n.release-meta {\n  padding-left: 18px;\n  margin: 0;\n  color: #475569;\n  line-height: 1.8;\n}\n\n.history-copy {\n  margin-bottom: 14px;\n  color: #475569;\n  line-height: 1.7;\n}\n\n.release-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.release-link {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 38px;\n  padding: 0 14px;\n  border-radius: 999px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(248, 250, 252, 0.98);\n  color: #0f172a;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.release-link.is-current {\n  background: linear-gradient(135deg, #38bdf8, #2563eb);\n  border-color: transparent;\n  color: #ffffff;\n}\n\n@media (max-width: 1080px) {\n  .hero,\n  .layout {\n    grid-template-columns: 1fr;\n  }\n\n  .sidebar {\n    position: static;\n  }\n}\n\n@media (max-width: 760px) {\n  .shell {\n    padding: 16px;\n  }\n\n  .hero-card,\n  .panel,\n  .sidebar-card {\n    padding: 18px;\n    border-radius: 22px;\n  }\n\n  .hero-main h1 {\n    font-size: 38px;\n  }\n\n  .feature-grid,\n  .demo-grid,\n  .api-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .demo-card.full {\n    grid-column: span 1;\n  }\n\n  .table-head,\n  .table-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4REFBOEQ7RUFDOUQsU0FBUztBQUNYOztBQUVBOzs7RUFHRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsd0NBQXdDO0VBQ3hDLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7RUFLRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGVBQWU7RUFDZixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxxREFBcUQ7RUFDckQsY0FBYztFQUNkLGdCQUFnQjtBQUNs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RSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix3Q0FBd0M7RUFDeEMscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFOztJQUVFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7OztJQUdFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOzs7SUFHRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7O0lBRUUsZ0RBQWdEO0VBQ2xEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGVsbCB7XG4gIHBhZGRpbmc6IDI4cHg7XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuXG4uaGVybyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDEuMjVmcikgbWlubWF4KDMyMHB4LCAwLjc1ZnIpO1xuICBnYXA6IDI0cHg7XG59XG5cbi5oZXJvLWNhcmQsXG4ucGFuZWwsXG4uc2lkZWJhci1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbn1cblxuLmhlcm8tY2FyZCB7XG4gIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMDgpO1xuICBjb2xvcjogIzFkNGVkODtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5wLFxucHJlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmhlcm8tbWFpbiBoMSB7XG4gIG1hcmdpbjogMTZweCAwIDEycHg7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgbGluZS1oZWlnaHQ6IDAuOTU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xufVxuXG4uaGVyby1tYWluIHAsXG4ucGFuZWwtaGVhZGVyIHAsXG4uYXBpLWNhcmQgcCxcbi5kZW1vLWNhcmQgcCB7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4uZmVhdHVyZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG5cbi5mZWF0dXJlIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MCwgMjUyLCAwLjkyKTtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbi5mZWF0dXJlIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjMGYxNzJhO1xufVxuXG4uY3RhLXJvdyxcbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4uYnRuLFxuYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTFweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLFxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM4YmRmOCwgIzI1NjNlYik7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnRuLnNlY29uZGFyeSxcbi5naG9zdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICBjb2xvcjogIzBmMTcyYTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xufVxuXG4uZ2hvc3QtYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG59XG5cbi5zdGVwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNnB4IG1pbm1heCgwLCAxZnIpO1xuICBnYXA6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5zdGVwLW51bSB7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogI2RiZWFmZTtcbiAgY29sb3I6ICMxZDRlZDg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnByZSxcbi5jb2RlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgY29sb3I6ICNkYmVhZmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGTW9uby1SZWd1bGFyXCIsIENvbnNvbGFzLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNvZGUtc25pcHBldCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb2RlLXNuaXBwZXQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNvcHktYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA4OHB4O1xufVxuXG4ubGF5b3V0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSAzMjBweDtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuXG4ucGFuZWxzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyNHB4O1xufVxuXG4ucGFuZWwge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4ucGFuZWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnBhbmVsLWhlYWRlciBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRlbW8tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTZweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xufVxuXG4uZGVtby1jYXJkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcbn1cblxuLmRlbW8tY2FyZC5mdWxsIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbn1cblxuLnByZXZpZXctZnJhbWUsXG4uc3VyZmFjZS1jYXJkLFxuLnRhYmxlLXNoZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KTtcbn1cblxuLmNvbXBvbmVudC1mcmFtZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMycHggMjRweDtcbn1cblxuLnN1cmZhY2UtY2FyZCB7XG4gIHBhZGRpbmc6IDIycHg7XG59XG5cbi5zdXJmYWNlLWV5ZWJyb3cge1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uc3VyZmFjZS1tZXRyaWMge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xufVxuXG4uc3VyZmFjZS10cmVuZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjNDc1NTY5O1xufVxuXG4ucHJpbWFyeS1hY3Rpb24ge1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICBtaW4td2lkdGg6IDE2OHB4O1xufVxuXG4udGFibGUtc2hlbGwge1xuICBwYWRkaW5nOiAxOHB4O1xufVxuXG4udGFibGUtaGVhZCxcbi50YWJsZS1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOGZyIDFmciAxZnIgMC44ZnI7XG4gIGdhcDogMTJweDtcbn1cblxuLnRhYmxlLWhlYWQge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbi50YWJsZS1yb3cge1xuICBtaW4taGVpZ2h0OiA0NHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzMzNDE1NTtcbn1cblxuLmFwaS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5hcGktY2FyZCB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAyMHB4O1xufVxuXG4uc2lkZWJhci1jYXJkIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmxvZy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xuICBtYXgtaGVpZ2h0OiA0NjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sb2ctaXRlbSB7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MCwgMjUyLCAwLjk4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgY29sb3I6ICMzMzQxNTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLnJlbGVhc2UtbWV0YSB7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxuLmhpc3RvcnktY29weSB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4ucmVsZWFzZS1saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucmVsZWFzZS1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjUwLCAyNTIsIDAuOTgpO1xuICBjb2xvcjogIzBmMTcyYTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yZWxlYXNlLWxpbmsuaXMtY3VycmVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzOGJkZjgsICMyNTYzZWIpO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAuaGVybyxcbiAgLmxheW91dCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLnNoZWxsIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmhlcm8tY2FyZCxcbiAgLnBhbmVsLFxuICAuc2lkZWJhci1jYXJkIHtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIH1cblxuICAuaGVyby1tYWluIGgxIHtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gIH1cblxuICAuZmVhdHVyZS1ncmlkLFxuICAuZGVtby1ncmlkLFxuICAuYXBpLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmRlbW8tY2FyZC5mdWxsIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xuICB9XG5cbiAgLnRhYmxlLWhlYWQsXG4gIC50YWJsZS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgfVxufVxuIl19 */");

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
    angular: '10.2.x',
    packageVersion: '10.0.0',
    coreVersion: '0.1.1',
    runtimeTarget: 'Angular 10 + Angular CLI',
    docsPath: '/angular-10/'
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
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.panel {\n  padding: 24px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.92);\n  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);\n}\n\n.panel-header {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.panel-header h2 {\n  margin: 0 0 8px;\n}\n\n.panel-header p {\n  margin: 0;\n  color: #475569;\n  line-height: 1.7;\n}\n\nbutton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 999px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font: inherit;\n  background: linear-gradient(135deg, #38bdf8, #2563eb);\n  color: #ffffff;\n  font-weight: 700;\n}\n\n.ghost-button {\n  background: rgba(255, 255, 255, 0.92);\n  color: #0f172a;\n  border-color: rgba(15, 23, 42, 0.08);\n}\n\n.code-block,\n.code-preview {\n  overflow: auto;\n  padding: 14px 16px;\n  border-radius: 18px;\n  background: #0f172a;\n  color: #dbeafe;\n  line-height: 1.6;\n  font-family: \"SFMono-Regular\", Consolas, monospace;\n  font-size: 13px;\n}\n\n.playground-shell {\n  display: grid;\n  grid-template-columns: minmax(300px, 340px) minmax(0, 1fr);\n  gap: 20px;\n}\n\n.playground-controls,\n.playground-preview {\n  padding: 20px;\n  border-radius: 22px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #f8fbff;\n}\n\n.playground-controls {\n  display: grid;\n  align-content: start;\n  gap: 16px;\n}\n\n.field {\n  display: grid;\n  gap: 8px;\n}\n\n.field label,\n.field span {\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.field input,\n.field select {\n  width: 100%;\n  min-height: 42px;\n  padding: 0 12px;\n  border-radius: 14px;\n  border: 1px solid rgba(15, 23, 42, 0.1);\n  background: rgba(255, 255, 255, 0.98);\n  color: #0f172a;\n  font: inherit;\n}\n\n.field input[type=\"range\"] {\n  padding: 0;\n  min-height: auto;\n}\n\n.field input[type=\"color\"] {\n  padding: 4px;\n}\n\n.field.two-up {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.toggle-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 14px;\n}\n\n.toggle-row label {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: #334155;\n  font-size: 13px;\n}\n\n.playground-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.playground-preview-tabs {\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n  padding: 6px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.playground-preview-tab {\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: #475569;\n  padding: 9px 14px;\n  cursor: pointer;\n  transition: 180ms ease;\n}\n\n.playground-preview-tab.is-active {\n  background: rgba(37, 99, 235, 0.14);\n  color: #0f172a;\n}\n\n.playground-description {\n  margin: 0 0 14px;\n  color: #475569;\n  line-height: 1.7;\n}\n\n.playground-stage {\n  min-height: 440px;\n  margin-bottom: 18px;\n}\n\n.playground-stage.is-reduced-motion .rvl-loader,\n.playground-stage.is-reduced-motion .rvl-loader * {\n  animation-duration: 0.01ms !important;\n  animation-iteration-count: 1 !important;\n  transition-duration: 0.01ms !important;\n}\n\n.playground-stage-inner {\n  min-height: inherit;\n}\n\n.playground-surface {\n  position: relative;\n  min-height: 320px;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.playground-surface.is-fullscreen-simulated {\n  min-height: 400px;\n}\n\n.playground-surface--clean {\n  display: grid;\n  place-items: center;\n  background: rgba(248, 250, 252, 0.96);\n}\n\n.playground-table-head,\n.playground-table-row {\n  display: grid;\n  grid-template-columns: 0.8fr 1.5fr 1fr 0.9fr;\n  gap: 10px;\n  align-items: center;\n}\n\n.playground-table-head {\n  padding: 24px 24px 10px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n  color: #64748b;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.playground-table-row {\n  min-height: 44px;\n  padding: 0 24px;\n}\n\n.playground-table-row span {\n  display: flex;\n  align-items: center;\n}\n\n.playground-table-row i {\n  display: block;\n  width: 100%;\n  height: 12px;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.08);\n}\n\n.playground-table-row span:first-child i {\n  width: 70%;\n}\n\n.surface-card-grid,\n.page-grid {\n  display: grid;\n  gap: 12px;\n  padding: 22px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.surface-card-cell,\n.page-tile {\n  min-height: 78px;\n  border-radius: 18px;\n  background: rgba(15, 23, 42, 0.06);\n}\n\n.surface-card-cell.wide {\n  grid-column: span 2;\n  min-height: 120px;\n}\n\n.surface-table {\n  padding: 14px 0 0;\n}\n\n.surface-page {\n  min-height: 240px;\n}\n\n.page-topbar {\n  height: 54px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.surface-modal {\n  padding: 18px;\n}\n\n.modal-shell {\n  max-width: 320px;\n  margin: 0 auto;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.modal-header {\n  height: 56px;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.modal-body {\n  position: relative;\n  min-height: 170px;\n  padding: 18px;\n}\n\n.modal-line {\n  height: 14px;\n  margin-bottom: 14px;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.08);\n}\n\n.modal-line.short {\n  width: 68%;\n}\n\n.surface-chart {\n  display: flex;\n  align-items: end;\n  gap: 10px;\n  padding: 22px;\n}\n\n.chart-bar {\n  flex: 1;\n  border-radius: 999px 999px 12px 12px;\n  background: linear-gradient(180deg, rgba(96, 165, 250, 0.76), #2563eb);\n}\n\n.surface-upload {\n  display: grid;\n  place-items: center;\n  text-align: center;\n  padding: 24px;\n}\n\n.upload-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 18px;\n  border: 2px dashed rgba(37, 99, 235, 0.45);\n}\n\n.upload-title {\n  margin-top: 12px;\n  font-weight: 700;\n}\n\n.upload-caption {\n  margin-top: 8px;\n  color: #64748b;\n}\n\n.code-preview {\n  margin-bottom: 0;\n}\n\n@media (max-width: 1080px) {\n  .playground-shell {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .field.two-up {\n    grid-template-columns: 1fr;\n  }\n\n  .playground-preview-tabs {\n    border-radius: 24px;\n  }\n\n  .playground-table-head,\n  .playground-table-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWdyb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixhQUFhO0VBQ2IscURBQXFEO0VBQ3JELGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrREFBa0Q7RUFDbEQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwREFBMEQ7RUFDMUQsU0FBUztBQUNYOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7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Q1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7O0lBRUUsZ0RBQWdEO0VBQ2xEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFuZWwge1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpO1xuICBib3gtc2hhZG93OiAwIDIwcHggNjBweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xufVxuXG4ucGFuZWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnBhbmVsLWhlYWRlciBoMiB7XG4gIG1hcmdpbjogMCAwIDhweDtcbn1cblxuLnBhbmVsLWhlYWRlciBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTFweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM4YmRmOCwgIzI1NjNlYik7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZ2hvc3QtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbn1cblxuLmNvZGUtYmxvY2ssXG4uY29kZS1wcmV2aWV3IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgY29sb3I6ICNkYmVhZmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGZvbnQtZmFtaWx5OiBcIlNGTW9uby1SZWd1bGFyXCIsIENvbnNvbGFzLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnBsYXlncm91bmQtc2hlbGwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMzQwcHgpIG1pbm1heCgwLCAxZnIpO1xuICBnYXA6IDIwcHg7XG59XG5cbi5wbGF5Z3JvdW5kLWNvbnRyb2xzLFxuLnBsYXlncm91bmQtcHJldmlldyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XG59XG5cbi5wbGF5Z3JvdW5kLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XG4gIGdhcDogMTZweDtcbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5maWVsZCBsYWJlbCxcbi5maWVsZCBzcGFuIHtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZpZWxkIGlucHV0LFxuLmZpZWxkIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MnB4O1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk4KTtcbiAgY29sb3I6ICMwZjE3MmE7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi5maWVsZCBpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICBwYWRkaW5nOiAwO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuXG4uZmllbGQgaW5wdXRbdHlwZT1cImNvbG9yXCJdIHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uZmllbGQudHdvLXVwIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEycHg7XG59XG5cbi50b2dnbGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHggMTRweDtcbn1cblxuLnRvZ2dsZS1yb3cgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGNvbG9yOiAjMzM0MTU1O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wbGF5Z3JvdW5kLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTJweDtcbn1cblxuLnBsYXlncm91bmQtcHJldmlldy10YWJzIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLnBsYXlncm91bmQtcHJldmlldy10YWIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIHBhZGRpbmc6IDlweCAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDE4MG1zIGVhc2U7XG59XG5cbi5wbGF5Z3JvdW5kLXByZXZpZXctdGFiLmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTQpO1xuICBjb2xvcjogIzBmMTcyYTtcbn1cblxuLnBsYXlncm91bmQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDAgMCAxNHB4O1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuLnBsYXlncm91bmQtc3RhZ2Uge1xuICBtaW4taGVpZ2h0OiA0NDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnBsYXlncm91bmQtc3RhZ2UuaXMtcmVkdWNlZC1tb3Rpb24gLnJ2bC1sb2FkZXIsXG4ucGxheWdyb3VuZC1zdGFnZS5pcy1yZWR1Y2VkLW1vdGlvbiAucnZsLWxvYWRlciAqIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbn1cblxuLnBsYXlncm91bmQtc3RhZ2UtaW5uZXIge1xuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xufVxuXG4ucGxheWdyb3VuZC1zdXJmYWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KTtcbn1cblxuLnBsYXlncm91bmQtc3VyZmFjZS5pcy1mdWxsc2NyZWVuLXNpbXVsYXRlZCB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4ucGxheWdyb3VuZC1zdXJmYWNlLS1jbGVhbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTAsIDI1MiwgMC45Nik7XG59XG5cbi5wbGF5Z3JvdW5kLXRhYmxlLWhlYWQsXG4ucGxheWdyb3VuZC10YWJsZS1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOGZyIDEuNWZyIDFmciAwLjlmcjtcbiAgZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheWdyb3VuZC10YWJsZS1oZWFkIHtcbiAgcGFkZGluZzogMjRweCAyNHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xufVxuXG4ucGxheWdyb3VuZC10YWJsZS1yb3cge1xuICBtaW4taGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG59XG5cbi5wbGF5Z3JvdW5kLXRhYmxlLXJvdyBzcGFuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYXlncm91bmQtdGFibGUtcm93IGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG59XG5cbi5wbGF5Z3JvdW5kLXRhYmxlLXJvdyBzcGFuOmZpcnN0LWNoaWxkIGkge1xuICB3aWR0aDogNzAlO1xufVxuXG4uc3VyZmFjZS1jYXJkLWdyaWQsXG4ucGFnZS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAyMnB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG59XG5cbi5zdXJmYWNlLWNhcmQtY2VsbCxcbi5wYWdlLXRpbGUge1xuICBtaW4taGVpZ2h0OiA3OHB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xufVxuXG4uc3VyZmFjZS1jYXJkLWNlbGwud2lkZSB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xufVxuXG4uc3VyZmFjZS10YWJsZSB7XG4gIHBhZGRpbmc6IDE0cHggMCAwO1xufVxuXG4uc3VyZmFjZS1wYWdlIHtcbiAgbWluLWhlaWdodDogMjQwcHg7XG59XG5cbi5wYWdlLXRvcGJhciB7XG4gIGhlaWdodDogNTRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG59XG5cbi5zdXJmYWNlLW1vZGFsIHtcbiAgcGFkZGluZzogMThweDtcbn1cblxuLm1vZGFsLXNoZWxsIHtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTcwcHg7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbi5tb2RhbC1saW5lIHtcbiAgaGVpZ2h0OiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcbn1cblxuLm1vZGFsLWxpbmUuc2hvcnQge1xuICB3aWR0aDogNjglO1xufVxuXG4uc3VyZmFjZS1jaGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMjJweDtcbn1cblxuLmNoYXJ0LWJhciB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4IDk5OXB4IDEycHggMTJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg5NiwgMTY1LCAyNTAsIDAuNzYpLCAjMjU2M2ViKTtcbn1cblxuLnN1cmZhY2UtdXBsb2FkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4udXBsb2FkLWljb24ge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3JkZXI6IDJweCBkYXNoZWQgcmdiYSgzNywgOTksIDIzNSwgMC40NSk7XG59XG5cbi51cGxvYWQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udXBsb2FkLWNhcHRpb24ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xufVxuXG4uY29kZS1wcmV2aWV3IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAucGxheWdyb3VuZC1zaGVsbCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIC5maWVsZC50d28tdXAge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnBsYXlncm91bmQtcHJldmlldy10YWJzIHtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICB9XG5cbiAgLnBsYXlncm91bmQtdGFibGUtaGVhZCxcbiAgLnBsYXlncm91bmQtdGFibGUtcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cbiJdfQ== */");

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
/* harmony import */ var _stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stackline/angular-loading */ "RQOp");
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
        this.installSnippet = "npm install @stackline/angular-loading";
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
        this.log('Angular 10 docs loaded successfully.');
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
/* harmony import */ var _stackline_angular_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stackline/angular-loading */ "RQOp");
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

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "crnd";

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


/***/ })

},[[0,"runtime","vendor"]]]);