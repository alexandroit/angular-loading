"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingService = exports.LoadingDirective = exports.LoadingComponent = exports.LoadingModule = void 0;
var core_1 = require("@angular/core");
var LoadingComponent_1 = require("./LoadingComponent");
Object.defineProperty(exports, "LoadingComponent", { enumerable: true, get: function () { return LoadingComponent_1.LoadingComponent; } });
var LoadingDirective_1 = require("./LoadingDirective");
Object.defineProperty(exports, "LoadingDirective", { enumerable: true, get: function () { return LoadingDirective_1.LoadingDirective; } });
var LoadingService_1 = require("./LoadingService");
Object.defineProperty(exports, "LoadingService", { enumerable: true, get: function () { return LoadingService_1.LoadingService; } });
var LOADING_DECLARATIONS = [
    LoadingComponent_1.LoadingComponent,
    LoadingDirective_1.LoadingDirective
];
var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule_1 = LoadingModule;
    LoadingModule.forRoot = function () {
        return {
            ngModule: LoadingModule_1,
            providers: [LoadingService_1.LoadingService]
        };
    };
    var LoadingModule_1;
    LoadingModule = LoadingModule_1 = __decorate([
        (0, core_1.NgModule)({
            declarations: LOADING_DECLARATIONS,
            exports: LOADING_DECLARATIONS
        })
    ], LoadingModule);
    return LoadingModule;
}());
exports.LoadingModule = LoadingModule;
//# sourceMappingURL=public_api.js.map