var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../../util';
import { DOMHelper } from '../../dom-helper';
let MdcFab = class MdcFab {
    constructor(element) {
        this.element = element;
        this.mini = false;
        this.exited = false;
        this.extended = false;
        this.label = '';
        this.ariaLabel = '';
        this.ripple = true;
        this.icon = null;
        this.log = getLogger('mdc-fab');
        this.icon = this.element.firstChild;
        this.removeChildren();
    }
    attached() {
        this.element.classList.add('mdc-fab');
        if (!this.extended) {
            const iconNode = DOMHelper.createElement('span');
            iconNode.classList.add('mdc-fab__icon', 'material-icons');
            if (this.icon) {
                iconNode.appendChild(this.icon);
            }
            this.element.appendChild(iconNode);
        }
        else {
            if (this.icon) {
                const iconNode = DOMHelper.createElement('span');
                iconNode.classList.add('mdc-fab__icon', 'material-icons');
                if (this.icon) {
                    iconNode.appendChild(this.icon);
                }
                this.element.appendChild(iconNode);
            }
            const labelNode = DOMHelper.createElement('span');
            labelNode.classList.add('mdc-fab__label');
            if (this.label) {
                labelNode.innerText = this.label;
            }
            this.element.appendChild(labelNode);
        }
        this.miniChanged(this.mini);
        this.exitedChanged(this.exited);
        this.extendedChanged(this.extended);
        this.ariaLabelChanged(this.ariaLabel);
        if (util.getBoolean(this.ripple)) {
            MDCRipple.attachTo(this.element);
        }
    }
    detached() {
        const classes = [
            'mdc-fab',
            'material-icons',
            'mdc-fab--mini',
            'mdc-fab--exited',
            'mdc-fab--extended'
        ];
        this.element.classList.remove(...classes);
        this.element.removeAttribute('aria-label');
        this.removeChildren();
    }
    miniChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--mini');
    }
    exitedChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--exited');
    }
    extendedChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--extended');
    }
    ariaLabelChanged(newValue) {
        this.element.setAttribute('aria-label', newValue);
    }
    removeChildren() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcFab.prototype, "mini", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcFab.prototype, "exited", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcFab.prototype, "extended", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcFab.prototype, "label", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcFab.prototype, "ariaLabel", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcFab.prototype, "ripple", void 0);
MdcFab = __decorate([
    customAttribute('mdc-fab'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcFab);
export { MdcFab };
