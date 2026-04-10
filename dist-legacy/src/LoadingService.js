"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingService = void 0;
var core_1 = require("@angular/core");
var loading_1 = require("@stackline/loading");
var LoadingService = /** @class */ (function () {
    function LoadingService() {
    }
    LoadingService.prototype.create = function (target, options) {
        var nextOptions = Object.assign({}, options || {}, {
            target: target,
            visible: false
        });
        var instance = (0, loading_1.createLoader)(nextOptions);
        if (options && options.visible) {
            instance.show();
        }
        return instance;
    };
    LoadingService.prototype.show = function (target, options) {
        return (0, loading_1.showLoader)(target, options || {});
    };
    LoadingService.prototype.mount = function (target, options) {
        return (0, loading_1.mountLoader)(target, options || {});
    };
    LoadingService.prototype.hide = function (instance) {
        return (0, loading_1.hideLoader)(instance);
    };
    LoadingService = __decorate([
        (0, core_1.Injectable)()
    ], LoadingService);
    return LoadingService;
}());
exports.LoadingService = LoadingService;
//# sourceMappingURL=LoadingService.js.map