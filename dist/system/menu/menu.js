System.register(["aurelia-framework", "aurelia-logging", "@material/menu", "../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, menu_1, util, MdcMenuAnchorCorner, MdcMenu;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (menu_1_1) {
                menu_1 = menu_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            exports_1("MdcMenuAnchorCorner", MdcMenuAnchorCorner = {
                topLeft: 'top-left',
                topRight: 'top-right',
                topStart: 'top-start',
                topEnd: 'top-end',
                bottomLeft: 'bottom-left',
                bottomRight: 'bottom-right',
                bottomStart: 'bottom-start',
                bottomEnd: 'bottom-end'
            });
            MdcMenu = (function () {
                function MdcMenu(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.openState = false;
                    this.quickOpen = false;
                    this.anchorCorner = null;
                    this.internalValueChange = false;
                    this.log = aurelia_logging_1.getLogger('mdc-menu');
                }
                Object.defineProperty(MdcMenu.prototype, "open", {
                    get: function () {
                        return this.mdcMenu.open;
                    },
                    set: function (value) {
                        this.mdcMenu.open = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                MdcMenu.prototype.show = function (options) {
                    if (options && options.focusIndex) {
                        this.mdcMenu.open = true;
                        return;
                    }
                    if (options && options.focusValue) {
                        var index = this.findIndex(this.value);
                        if (index === -1) {
                            this.mdcMenu.open = true;
                        }
                        else {
                        }
                        return;
                    }
                    this.mdcMenu.open = true;
                };
                MdcMenu.prototype.hide = function () {
                    this.mdcMenu.open = false;
                };
                MdcMenu.prototype.bind = function () { };
                MdcMenu.prototype.unbind = function () { };
                MdcMenu.prototype.attached = function () {
                    var _this = this;
                    if (util.getBoolean(this.openState)) {
                        this.elementMenu.classList.add('mdc-menu--open');
                    }
                    this.mdcMenu = new menu_1.MDCMenu(this.elementMenu);
                    this.anchorCornerChanged(this.anchorCorner);
                    this.mdcMenu.quickOpen = util.getBoolean(this.quickOpen);
                    this.mdcMenu.listen('MDCMenu:selected', this.raiseSelectEvent.bind(this));
                    this.mdcMenu.listen('MDCMenu:cancel', this.raiseCancelEvent.bind(this));
                    this.taskQueue.queueMicroTask(function () {
                        _this.valueChanged(_this.value);
                    });
                };
                MdcMenu.prototype.detached = function () {
                    this.mdcMenu.unlisten('MDCMenu:selected', this.raiseSelectEvent.bind(this));
                    this.mdcMenu.unlisten('MDCMenu:cancel', this.raiseCancelEvent.bind(this));
                    this.mdcMenu.destroy();
                };
                MdcMenu.prototype.raiseSelectEvent = function (e) {
                    this.internalValueChange = true;
                    this.value = e.detail.item.model;
                    util.fireEvent(this.element, 'on-select', { item: e.detail.item, index: e.detail.index });
                };
                MdcMenu.prototype.raiseCancelEvent = function () {
                    util.fireEvent(this.element, 'on-cancel');
                };
                MdcMenu.prototype.anchorCornerChanged = function (newValue) {
                    if (this.mdcMenu) {
                        switch (newValue) {
                            case MdcMenuAnchorCorner.topLeft:
                                this.mdcMenu.setAnchorCorner(menu_1.Corner.TOP_LEFT);
                                break;
                            case MdcMenuAnchorCorner.topRight:
                                this.mdcMenu.setAnchorCorner(menu_1.Corner.TOP_RIGHT);
                                break;
                            case MdcMenuAnchorCorner.topStart:
                                this.mdcMenu.setAnchorCorner(menu_1.Corner.TOP_START);
                                break;
                            case MdcMenuAnchorCorner.topEnd:
                                this.mdcMenu.setAnchorCorner(menu_1.Corner.TOP_END);
                                break;
                            case MdcMenuAnchorCorner.bottomLeft:
                                this.mdcMenu.setAnchorCorner(menu_1.Corner.BOTTOM_LEFT);
                                break;
                            case MdcMenuAnchorCorner.bottomRight:
                                this.mdcMenu.setAnchorCorner(menu_1.Corner.BOTTOM_RIGHT);
                                break;
                            case MdcMenuAnchorCorner.bottomStart:
                                this.mdcMenu.setAnchorCorner(menu_1.Corner.BOTTOM_START);
                                break;
                            case MdcMenuAnchorCorner.bottomEnd:
                                this.mdcMenu.setAnchorCorner(menu_1.Corner.BOTTOM_END);
                                break;
                        }
                    }
                };
                MdcMenu.prototype.valueChanged = function (newValue) {
                    if (this.internalValueChange || this.open === false) {
                        this.internalValueChange = false;
                        return;
                    }
                    var index = this.findIndex(newValue);
                    if (index === -1) {
                        return;
                    }
                    this.mdcMenu.items[index].setAttribute("focous", "true");
                };
                MdcMenu.prototype.findIndex = function (value) {
                    for (var index = 0; index < this.mdcMenu.items.length; index++) {
                        var item = this.mdcMenu.items[index];
                        if (item.nodeValue && this.compareModels(item.nodeValue, value)) {
                            return index;
                        }
                    }
                    return -1;
                };
                MdcMenu.prototype.compareModels = function (model1, model2) {
                    return (model1 === model2);
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Boolean)
                ], MdcMenu.prototype, "openState", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Boolean)
                ], MdcMenu.prototype, "quickOpen", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
                    __metadata("design:type", String)
                ], MdcMenu.prototype, "anchorCorner", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcMenu.prototype, "value", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", String)
                ], MdcMenu.prototype, "class", void 0);
                MdcMenu = __decorate([
                    aurelia_framework_1.containerless(),
                    aurelia_framework_1.customElement('mdc-menu'),
                    aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue),
                    __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
                ], MdcMenu);
                return MdcMenu;
            }());
            exports_1("MdcMenu", MdcMenu);
        }
    };
});
