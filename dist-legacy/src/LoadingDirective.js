"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingDirective = void 0;
var core_1 = require("@angular/core");
var LoadingController_1 = require("./LoadingController");
var LoadingDirective = /** @class */ (function () {
    function LoadingDirective() {
        var _this = this;
        this.visible = false;
        this.loadingOptions = {};
        this.create = new core_1.EventEmitter();
        this.shown = new core_1.EventEmitter();
        this.hidden = new core_1.EventEmitter();
        this.updated = new core_1.EventEmitter();
        this.destroyed = new core_1.EventEmitter();
        this.hostId = 'rvl-directive-' + (++LoadingDirective_1.nextHostId);
        this.initialized = false;
        this.controller = null;
        this.hooks = {
            onCreate: function (event) { return _this.create.emit(event); },
            onShown: function (event) { return _this.shown.emit(event); },
            onHidden: function (event) { return _this.hidden.emit(event); },
            onUpdated: function (event) { return _this.updated.emit(event); },
            onDestroyed: function (event) { return _this.destroyed.emit(event); }
        };
    }
    LoadingDirective_1 = LoadingDirective;
    LoadingDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var controller = _this.ensureController(false);
            if (!controller) {
                return;
            }
            _this.initialized = true;
            controller.initialize(_this.loadingOptions, _this.visible);
        }, 0);
    };
    LoadingDirective.prototype.ngOnChanges = function (changes) {
        if (!this.initialized || !this.controller) {
            return;
        }
        if (changes.loadingOptions || changes.visible) {
            this.controller.update(this.loadingOptions, this.visible);
        }
    };
    LoadingDirective.prototype.ngOnDestroy = function () {
        if (this.controller) {
            this.controller.destroy();
        }
    };
    LoadingDirective.prototype.getInstance = function () {
        return this.controller ? this.controller.getInstance() : null;
    };
    LoadingDirective.prototype.ensureController = function (required) {
        if (this.controller) {
            return this.controller;
        }
        var host = this.resolveHostElement();
        if (!host) {
            if (required) {
                throw new Error('Unable to resolve stacklineLoading host element.');
            }
            return null;
        }
        this.controller = new LoadingController_1.LoadingController(host, this.hooks);
        return this.controller;
    };
    LoadingDirective.prototype.resolveHostElement = function () {
        if (typeof document !== 'undefined') {
            return document.querySelector('[data-rvl-directive-host="' + this.hostId + '"]');
        }
        return null;
    };
    var LoadingDirective_1;
    LoadingDirective.nextHostId = 0;
    __decorate([
        (0, core_1.Input)('stacklineLoading'),
        __metadata("design:type", Boolean)
    ], LoadingDirective.prototype, "visible", void 0);
    __decorate([
        (0, core_1.Input)(),
        __metadata("design:type", Object)
    ], LoadingDirective.prototype, "loadingOptions", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingDirective.prototype, "create", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingDirective.prototype, "shown", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingDirective.prototype, "hidden", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingDirective.prototype, "updated", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingDirective.prototype, "destroyed", void 0);
    __decorate([
        (0, core_1.HostBinding)('attr.data-rvl-directive-host'),
        __metadata("design:type", String)
    ], LoadingDirective.prototype, "hostId", void 0);
    LoadingDirective = LoadingDirective_1 = __decorate([
        (0, core_1.Directive)({
            selector: '[stacklineLoading]',
            standalone: false
        }),
        __metadata("design:paramtypes", [])
    ], LoadingDirective);
    return LoadingDirective;
}());
exports.LoadingDirective = LoadingDirective;