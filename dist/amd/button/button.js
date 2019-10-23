var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "@material/ripple", "../util"], function (require, exports, aurelia_framework_1, aurelia_logging_1, ripple_1, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcButton = (function () {
        function MdcButton(element) {
            this.element = element;
            this.compact = false;
            this.dense = false;
            this.raised = false;
            this.outlined = false;
            this.unelevated = false;
            this.ripple = true;
            this.log = aurelia_logging_1.getLogger('mdc-button');
        }
        MdcButton.prototype.attached = function () {
            this.element.classList.add('mdc-button');
            this.denseChanged(this.dense);
            this.raisedChanged(this.raised);
            this.outlinedChanged(this.outlined);
            this.unelevatedChanged(this.unelevated);
            if (util.getBoolean(this.ripple)) {
                ripple_1.MDCRipple.attachTo(this.element);
            }
        };
        MdcButton.prototype.detached = function () {
            var _a;
            var classes = [
                'mdc-button',
                'mdc-button--dense',
                'mdc-button--raised',
                'mdc-button--compact',
                'mdc-button--outlined',
                'mdc-button--unelevated',
                'mdc-card__action',
                'mdc-card__action--button'
            ];
            (_a = this.element.classList).remove.apply(_a, classes);
        };
        MdcButton.prototype.denseChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.element.classList[value ? 'add' : 'remove']('mdc-button--dense');
        };
        MdcButton.prototype.raisedChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.element.classList[value ? 'add' : 'remove']('mdc-button--raised');
        };
        MdcButton.prototype.outlinedChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.element.classList[value ? 'add' : 'remove']('mdc-button--outlined');
        };
        MdcButton.prototype.unelevatedChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.element.classList[value ? 'add' : 'remove']('mdc-button--unelevated');
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcButton.prototype, "compact", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcButton.prototype, "dense", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcButton.prototype, "raised", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcButton.prototype, "outlined", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcButton.prototype, "unelevated", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            __metadata("design:type", Object)
        ], MdcButton.prototype, "ripple", void 0);
        MdcButton = __decorate([
            aurelia_framework_1.customAttribute('mdc-button'),
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Element])
        ], MdcButton);
        return MdcButton;
    }());
    exports.MdcButton = MdcButton;
});
