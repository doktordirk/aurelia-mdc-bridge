var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../util"], function (require, exports, aurelia_framework_1, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcTopAppBarSection = (function () {
        function MdcTopAppBarSection() {
            this.start = false;
            this.end = false;
            this.fit = false;
        }
        MdcTopAppBarSection.prototype.bind = function () { };
        MdcTopAppBarSection.prototype.unbind = function () { };
        MdcTopAppBarSection.prototype.attached = function () {
            this.startChanged(this.start);
            this.endChanged(this.end);
            this.fitChanged(this.fit);
        };
        MdcTopAppBarSection.prototype.startChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementSection.classList[value ? 'add' : 'remove']('mdc-top-app-bar__section--align-start');
        };
        MdcTopAppBarSection.prototype.endChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementSection.classList[value ? 'add' : 'remove']('mdc-top-app-bar__section--align-end');
        };
        MdcTopAppBarSection.prototype.fitChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementSection.classList[value ? 'add' : 'remove']('mdc-top-app-bar__section--shrink-to-fit');
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], MdcTopAppBarSection.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcTopAppBarSection.prototype, "start", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcTopAppBarSection.prototype, "end", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcTopAppBarSection.prototype, "fit", void 0);
        MdcTopAppBarSection = __decorate([
            aurelia_framework_1.containerless()
        ], MdcTopAppBarSection);
        return MdcTopAppBarSection;
    }());
    exports.MdcTopAppBarSection = MdcTopAppBarSection;
});
