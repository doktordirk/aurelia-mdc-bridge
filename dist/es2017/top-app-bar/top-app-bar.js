var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCTopAppBar } from '@material/top-app-bar';
import * as util from '../util';
let MdcTopAppBar = class MdcTopAppBar {
    constructor(element) {
        this.element = element;
        this.fixed = false;
        this.waterfall = false;
        this.fixedLastrowOnly = false;
        this.flexible = false;
        this.flexibleDefault = false;
        this.log = getLogger('mdc-top-app-bar');
    }
    bind() { }
    unbind() { }
    attached() {
        this.mdcTopAppBar = new MDCTopAppBar(this.elementTopAppBar);
        this.mdcTopAppBar.listen('MDCTopAppBar:change', this.onChange.bind(this));
        this.mdcTopAppBar.preventDefaultOnClick = true;
        this.fixedChanged(this.fixed);
        this.waterfallChanged(this.waterfall);
        this.fixedLastrowOnlyChanged(this.fixedLastrowOnly);
        this.flexibleChanged(this.flexible);
        this.flexibleDefaultChanged(this.flexibleDefault);
    }
    detached() {
        this.mdcTopAppBar.unlisten('MDCTopAppBar:change', this.onChange.bind(this));
        this.mdcTopAppBar.destroy();
    }
    onChange(evt) {
        util.fireEvent(this.element, 'on-change', { flexibleExpansionRatio: evt.detail.flexibleExpansionRatio });
    }
    fixedChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--fixed');
        if (value) {
            const fixedAdjustElement = document.querySelector('.mdc-top-app-bar-fixed-adjust');
            this.mdcTopAppBar.fixedAdjustElement = fixedAdjustElement;
        }
        else {
            this.mdcTopAppBar.fixedAdjustElement = null;
        }
    }
    waterfallChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--waterfall');
    }
    fixedLastrowOnlyChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--fixed-lastrow-only');
    }
    flexibleChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--flexible');
    }
    flexibleDefaultChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--flexible-default-behavior');
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTopAppBar.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTopAppBar.prototype, "fixed", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTopAppBar.prototype, "waterfall", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTopAppBar.prototype, "fixedLastrowOnly", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTopAppBar.prototype, "flexible", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTopAppBar.prototype, "flexibleDefault", void 0);
MdcTopAppBar = __decorate([
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcTopAppBar);
export { MdcTopAppBar };
