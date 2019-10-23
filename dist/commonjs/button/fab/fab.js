"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_1 = require("aurelia-logging");
var ripple_1 = require("@material/ripple");
var util = require("../../util");
var dom_helper_1 = require("../../dom-helper");
var MdcFab = (function () {
    function MdcFab(element) {
        this.element = element;
        this.mini = false;
        this.exited = false;
        this.extended = false;
        this.label = '';
        this.ariaLabel = '';
        this.ripple = true;
        this.icon = null;
        this.log = aurelia_logging_1.getLogger('mdc-fab');
        this.icon = this.element.firstChild;
        this.removeChildren();
    }
    MdcFab.prototype.attached = function () {
        this.element.classList.add('mdc-fab');
        if (!this.extended) {
            var iconNode = dom_helper_1.DOMHelper.createElement('span');
            iconNode.classList.add('mdc-fab__icon', 'material-icons');
            if (this.icon) {
                iconNode.appendChild(this.icon);
            }
            this.element.appendChild(iconNode);
        }
        else {
            if (this.icon) {
                var iconNode = dom_helper_1.DOMHelper.createElement('span');
                iconNode.classList.add('mdc-fab__icon', 'material-icons');
                if (this.icon) {
                    iconNode.appendChild(this.icon);
                }
                this.element.appendChild(iconNode);
            }
            var labelNode = dom_helper_1.DOMHelper.createElement('span');
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
            ripple_1.MDCRipple.attachTo(this.element);
        }
    };
    MdcFab.prototype.detached = function () {
        var _a;
        var classes = [
            'mdc-fab',
            'material-icons',
            'mdc-fab--mini',
            'mdc-fab--exited',
            'mdc-fab--extended'
        ];
        (_a = this.element.classList).remove.apply(_a, classes);
        this.element.removeAttribute('aria-label');
        this.removeChildren();
    };
    MdcFab.prototype.miniChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--mini');
    };
    MdcFab.prototype.exitedChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--exited');
    };
    MdcFab.prototype.extendedChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--extended');
    };
    MdcFab.prototype.ariaLabelChanged = function (newValue) {
        this.element.setAttribute('aria-label', newValue);
    };
    MdcFab.prototype.removeChildren = function () {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
    };
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "mini", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "exited", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "extended", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "label", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "ariaLabel", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "ripple", void 0);
    MdcFab = __decorate([
        aurelia_framework_1.customAttribute('mdc-fab'),
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcFab);
    return MdcFab;
}());
exports.MdcFab = MdcFab;
