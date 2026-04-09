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
exports.LoadingComponent = void 0;
var core_1 = require("@angular/core");
var LoadingController_1 = require("./LoadingController");
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
        var _this = this;
        this.options = {};
        this.visible = true;
        this.create = new core_1.EventEmitter();
        this.shown = new core_1.EventEmitter();
        this.hidden = new core_1.EventEmitter();
        this.updated = new core_1.EventEmitter();
        this.destroyed = new core_1.EventEmitter();
        this.hostId = 'rvl-component-' + (++LoadingComponent_1.nextHostId);
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
    LoadingComponent_1 = LoadingComponent;
    LoadingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var controller = _this.ensureController(false);
            if (!controller) {
                return;
            }
            _this.initialized = true;
            controller.initialize(_this.options, _this.resolveVisible());
        }, 0);
    };
    LoadingComponent.prototype.ngOnChanges = function (changes) {
        if (!this.initialized || !this.controller) {
            return;
        }
        if (changes.options || changes.visible) {
            this.controller.update(this.options, this.resolveVisible());
        }
    };
    LoadingComponent.prototype.ngOnDestroy = function () {
        if (this.controller) {
            this.controller.destroy();
        }
    };
    LoadingComponent.prototype.show = function () {
        this.visible = true;
        return this.ensureController(true).show();
    };
    LoadingComponent.prototype.hide = function () {
        this.visible = false;
        var controller = this.ensureController(false);
        return controller ? controller.hide() : Promise.resolve();
    };
    LoadingComponent.prototype.getInstance = function () {
        return this.controller ? this.controller.getInstance() : null;
    };
    LoadingComponent.prototype.resolveVisible = function () {
        if (typeof this.visible === 'boolean') {
            return this.visible;
        }
        return this.options && this.options.hasOwnProperty('visible') ? !!this.options.visible : true;
    };
    LoadingComponent.prototype.ensureController = function (required) {
        if (this.controller) {
            return this.controller;
        }
        var host = this.resolveHostElement();
        if (!host) {
            if (required) {
                throw new Error('Unable to resolve revive-loading host element.');
            }
            return null;
        }
        this.controller = new LoadingController_1.LoadingController(host, this.hooks);
        return this.controller;
    };
    LoadingComponent.prototype.resolveHostElement = function () {
        if (typeof document !== 'undefined') {
            return document.querySelector('[data-rvl-component-host="' + this.hostId + '"]');
        }
        return null;
    };
    var LoadingComponent_1;
    LoadingComponent.nextHostId = 0;
    __decorate([
        (0, core_1.Input)(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "options", void 0);
    __decorate([
        (0, core_1.Input)(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "visible", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "create", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "shown", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "hidden", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "updated", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "destroyed", void 0);
    __decorate([
        (0, core_1.HostBinding)('attr.data-rvl-component-host'),
        __metadata("design:type", String)
    ], LoadingComponent.prototype, "hostId", void 0);
    LoadingComponent = LoadingComponent_1 = __decorate([
        (0, core_1.Component)({
            selector: 'revive-loading',
            standalone: false,
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;