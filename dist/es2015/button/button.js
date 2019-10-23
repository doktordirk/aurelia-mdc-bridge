var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, customAttribute, autoinject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../util';
let MdcButton = class MdcButton {
    constructor(element) {
        this.element = element;
        this.compact = false;
        this.dense = false;
        this.raised = false;
        this.outlined = false;
        this.unelevated = false;
        this.ripple = true;
        this.log = getLogger('mdc-button');
    }
    attached() {
        this.element.classList.add('mdc-button');
        this.denseChanged(this.dense);
        this.raisedChanged(this.raised);
        this.outlinedChanged(this.outlined);
        this.unelevatedChanged(this.unelevated);
        if (util.getBoolean(this.ripple)) {
            MDCRipple.attachTo(this.element);
        }
    }
    detached() {
        const classes = [
            'mdc-button',
            'mdc-button--dense',
            'mdc-button--raised',
            'mdc-button--compact',
            'mdc-button--outlined',
            'mdc-button--unelevated',
            'mdc-card__action',
            'mdc-card__action--button'
        ];
        this.element.classList.remove(...classes);
    }
    denseChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-button--dense');
    }
    raisedChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-button--raised');
    }
    outlinedChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-button--outlined');
    }
    unelevatedChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-button--unelevated');
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcButton.prototype, "compact", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcButton.prototype, "dense", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcButton.prototype, "raised", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcButton.prototype, "outlined", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcButton.prototype, "unelevated", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcButton.prototype, "ripple", void 0);
MdcButton = __decorate([
    customAttribute('mdc-button'),
    autoinject,
    __metadata("design:paramtypes", [Element])
], MdcButton);
export { MdcButton };
