var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../util';
var MdcRipple = (function () {
    function MdcRipple(element) {
        this.element = element;
        this.unbounded = false;
        this.accent = false;
        this.primary = false;
        this.log = getLogger('mdc-ripple');
    }
    MdcRipple.prototype.bind = function () { };
    MdcRipple.prototype.unbind = function () { };
    MdcRipple.prototype.attached = function () {
        this.element.classList.add('mdc-ripple-surface');
        this.mdcRipple = new MDCRipple(this.element);
        this.unboundedChanged(this.unbounded);
        this.accentChanged(this.accent);
        this.primaryChanged(this.primary);
    };
    MdcRipple.prototype.detached = function () {
        var _a;
        var classes = [
            'mdc-ripple-surface',
            'mdc-ripple-surface--primary',
            'mdc-ripple-surface--accent'
        ];
        (_a = this.element.classList).remove.apply(_a, classes);
        this.mdcRipple.destroy();
    };
    MdcRipple.prototype.unboundedChanged = function (newValue) {
        this.mdcRipple.unbounded = util.getBoolean(newValue);
    };
    MdcRipple.prototype.accentChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-ripple-surface--accent');
    };
    MdcRipple.prototype.primaryChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-ripple-surface--primary');
    };
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcRipple.prototype, "unbounded", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcRipple.prototype, "accent", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcRipple.prototype, "primary", void 0);
    MdcRipple = __decorate([
        customAttribute('mdc-ripple'),
        inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcRipple);
    return MdcRipple;
}());
export { MdcRipple };
