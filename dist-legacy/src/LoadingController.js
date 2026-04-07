"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingController = void 0;
var loading_1 = require("@revivejs/loading");
var LoadingController = /** @class */ (function () {
    function LoadingController(host, hooks) {
        this.host = host;
        this.hooks = hooks;
        this.instance = null;
        this.lastOptions = {};
        this.lastVisible = false;
    }
    LoadingController.prototype.initialize = function (options, visible) {
        if (this.instance) {
            return;
        }
        this.lastOptions = this.cloneOptions(options);
        this.lastVisible = !!visible;
        this.instance = (0, loading_1.createLoader)(this.toCoreOptions(this.lastOptions));
        this.hooks.onCreate(this.toEvent(this.lastOptions, this.lastVisible));
        this.syncVisibility(this.lastVisible);
    };
    LoadingController.prototype.update = function (options, visible) {
        var nextOptions = this.cloneOptions(options);
        var nextVisible = !!visible;
        if (!this.instance) {
            this.initialize(nextOptions, nextVisible);
            return;
        }
        this.lastOptions = nextOptions;
        this.lastVisible = nextVisible;
        this.instance.update(this.toCoreOptions(this.lastOptions));
        this.hooks.onUpdated(this.toEvent(this.lastOptions, this.lastVisible));
        this.syncVisibility(this.lastVisible);
    };
    LoadingController.prototype.show = function () {
        var _this = this;
        if (!this.instance) {
            this.initialize(this.lastOptions, true);
        }
        this.lastVisible = true;
        return this.instance.show().then(function () {
            _this.hooks.onShown(_this.toEvent(_this.lastOptions, true));
        });
    };
    LoadingController.prototype.hide = function () {
        var _this = this;
        if (!this.instance) {
            return Promise.resolve();
        }
        this.lastVisible = false;
        return this.instance.hide().then(function () {
            _this.hooks.onHidden(_this.toEvent(_this.lastOptions, false));
        });
    };
    LoadingController.prototype.getInstance = function () {
        return this.instance;
    };
    LoadingController.prototype.destroy = function () {
        if (!this.instance) {
            return;
        }
        this.instance.destroy();
        this.hooks.onDestroyed(this.toEvent(this.lastOptions, this.lastVisible));
        this.instance = null;
    };
    LoadingController.prototype.syncVisibility = function (visible) {
        if (visible) {
            this.show();
            return;
        }
        this.hide();
    };
    LoadingController.prototype.toCoreOptions = function (options) {
        var next = this.cloneOptions(options);
        delete next.visible;
        next.target = this.host;
        next.visible = false;
        return next;
    };
    LoadingController.prototype.toEvent = function (options, visible) {
        return {
            host: this.host,
            instance: this.instance,
            options: this.cloneOptions(options),
            visible: visible
        };
    };
    LoadingController.prototype.cloneOptions = function (options) {
        if (!options) {
            return {};
        }
        return Object.assign({}, options, {
            style: options.style ? Object.assign({}, options.style) : undefined
        });
    };
    return LoadingController;
}());
exports.LoadingController = LoadingController;
//# sourceMappingURL=LoadingController.js.map