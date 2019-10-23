System.register(["aurelia-framework", "aurelia-logging", "@material/icon-button", "../../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, icon_button_1, util, MdcIconButtonToggle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (icon_button_1_1) {
                icon_button_1 = icon_button_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcIconButtonToggle = (function () {
                function MdcIconButtonToggle(element) {
                    this.element = element;
                    this.iconOn = 'star';
                    this.iconOff = 'star_border';
                    this.ariaLabelOn = 'On label';
                    this.ariaLabelOff = 'Off label';
                    this.disabled = false;
                    this.on = false;
                    this.tabindex = 0;
                    this.log = aurelia_logging_1.getLogger('mdc-icon-toggle');
                }
                MdcIconButtonToggle.prototype.bind = function () { };
                MdcIconButtonToggle.prototype.unbind = function () { };
                MdcIconButtonToggle.prototype.attached = function () {
                    this.mdcIconToggle = new icon_button_1.MDCIconButtonToggle(this.button);
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
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcIconButtonToggle.prototype, "iconOn", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcIconButtonToggle.prototype, "iconOff", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcIconButtonToggle.prototype, "ariaLabelOn", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcIconButtonToggle.prototype, "ariaLabelOff", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
                    __metadata("design:type", Object)
                ], MdcIconButtonToggle.prototype, "disabled", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcIconButtonToggle.prototype, "on", void 0);
                MdcIconButtonToggle = __decorate([
                    aurelia_framework_1.customElement('mdc-icon-button'),
                    aurelia_framework_1.autoinject,
                    __metadata("design:paramtypes", [Element])
                ], MdcIconButtonToggle);
                return MdcIconButtonToggle;
            }());
            exports_1("MdcIconButtonToggle", MdcIconButtonToggle);
        }
    };
});
