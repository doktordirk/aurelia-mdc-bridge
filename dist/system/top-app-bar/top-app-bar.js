System.register(["aurelia-framework", "aurelia-logging", "@material/top-app-bar", "../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, top_app_bar_1, util, MdcTopAppBar;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (top_app_bar_1_1) {
                top_app_bar_1 = top_app_bar_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcTopAppBar = (function () {
                function MdcTopAppBar(element) {
                    this.element = element;
                    this.fixed = false;
                    this.waterfall = false;
                    this.fixedLastrowOnly = false;
                    this.flexible = false;
                    this.flexibleDefault = false;
                    this.log = aurelia_logging_1.getLogger('mdc-top-app-bar');
                }
                MdcTopAppBar.prototype.bind = function () { };
                MdcTopAppBar.prototype.unbind = function () { };
                MdcTopAppBar.prototype.attached = function () {
                    this.mdcTopAppBar = new top_app_bar_1.MDCTopAppBar(this.elementTopAppBar);
                    this.mdcTopAppBar.listen('MDCTopAppBar:change', this.onChange.bind(this));
                    this.mdcTopAppBar.preventDefaultOnClick = true;
                    this.fixedChanged(this.fixed);
                    this.waterfallChanged(this.waterfall);
                    this.fixedLastrowOnlyChanged(this.fixedLastrowOnly);
                    this.flexibleChanged(this.flexible);
                    this.flexibleDefaultChanged(this.flexibleDefault);
                };
                MdcTopAppBar.prototype.detached = function () {
                    this.mdcTopAppBar.unlisten('MDCTopAppBar:change', this.onChange.bind(this));
                    this.mdcTopAppBar.destroy();
                };
                MdcTopAppBar.prototype.onChange = function (evt) {
                    util.fireEvent(this.element, 'on-change', { flexibleExpansionRatio: evt.detail.flexibleExpansionRatio });
                };
                MdcTopAppBar.prototype.fixedChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--fixed');
                    if (value) {
                        var fixedAdjustElement = document.querySelector('.mdc-top-app-bar-fixed-adjust');
                        this.mdcTopAppBar.fixedAdjustElement = fixedAdjustElement;
                    }
                    else {
                        this.mdcTopAppBar.fixedAdjustElement = null;
                    }
                };
                MdcTopAppBar.prototype.waterfallChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--waterfall');
                };
                MdcTopAppBar.prototype.fixedLastrowOnlyChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--fixed-lastrow-only');
                };
                MdcTopAppBar.prototype.flexibleChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--flexible');
                };
                MdcTopAppBar.prototype.flexibleDefaultChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementTopAppBar.classList[value ? 'add' : 'remove']('mdc-top-app-bar--flexible-default-behavior');
                };
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTopAppBar.prototype, "class", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTopAppBar.prototype, "fixed", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTopAppBar.prototype, "waterfall", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTopAppBar.prototype, "fixedLastrowOnly", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTopAppBar.prototype, "flexible", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTopAppBar.prototype, "flexibleDefault", void 0);
                MdcTopAppBar = __decorate([
                    aurelia_framework_1.inject(Element),
                    __metadata("design:paramtypes", [Element])
                ], MdcTopAppBar);
                return MdcTopAppBar;
            }());
            exports_1("MdcTopAppBar", MdcTopAppBar);
        }
    };
});
