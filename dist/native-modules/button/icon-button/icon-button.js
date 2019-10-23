var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, customElement, autoinject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCIconButtonToggle } from '@material/icon-button';
import * as util from '../../util';
var MdcIconButtonToggle = (function () {
    function MdcIconButtonToggle(element) {
        this.element = element;
        this.iconOn = 'star';
        this.iconOff = 'star_border';
        this.ariaLabelOn = 'On label';
        this.ariaLabelOff = 'Off label';
        this.disabled = false;
        this.on = false;
        this.tabindex = 0;
        this.log = getLogger('mdc-icon-toggle');
    }
    MdcIconButtonToggle.prototype.bind = function () { };
    MdcIconButtonToggle.prototype.unbind = function () { };
    MdcIconButtonToggle.prototype.attached = function () {
        this.mdcIconToggle = new MDCIconButtonToggle(this.button);
        this.mdcIconToggle.on = this.on;
        this.button.addEventListener('MDCIconButtonToggle:change', this.raiseEvent.bind(this));
        this.disabledChanged(this.disabled);
        this.raiseEvent();
    };
    MdcIconButtonToggle.prototype.detached = function () {
        this.button.removeEventListener('MDCIconButtonToggle:change', this.raiseEvent.bind(this));
        this.mdcIconToggle.destroy();
    };
    MdcIconButtonToggle.prototype.raiseEvent = function () {
        this.on = this.mdcIconToggle.on;
        util.fireEvent(this.element, 'on-toggle', this.on);
    };
    MdcIconButtonToggle.prototype.onChanged = function (on) {
        this.mdcIconToggle.on = util.getBoolean(on);
    };
    MdcIconButtonToggle.prototype.disabledChanged = function (disabled) {
        if (disabled === true) {
            this.button.setAttribute('disabled', '');
        }
        else {
            this.button.removeAttribute('disabled');
        }
    };
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdcIconButtonToggle.prototype, "iconOn", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdcIconButtonToggle.prototype, "iconOff", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdcIconButtonToggle.prototype, "ariaLabelOn", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdcIconButtonToggle.prototype, "ariaLabelOff", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], MdcIconButtonToggle.prototype, "disabled", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MdcIconButtonToggle.prototype, "on", void 0);
    MdcIconButtonToggle = __decorate([
        customElement('mdc-icon-button'),
        autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdcIconButtonToggle);
    return MdcIconButtonToggle;
}());
export { MdcIconButtonToggle };
