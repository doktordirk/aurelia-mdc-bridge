var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "@material/chips", "aurelia-framework", "../dom-helper"], function (require, exports, chips_1, aurelia_framework_1, dom_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcChip = (function () {
        function MdcChip(chip) {
            this.chip = chip;
        }
        MdcChip.prototype.attached = function () {
            var _a, _b, _c, _d, _e;
            this.mdcElement = new chips_1.MDCChip(this.chip);
            var chipElement = this.chip.getElementsByClassName("mdc-chip")[0];
            if (this.class) {
                (_a = chipElement.classList).add.apply(_a, this.class.split(" "));
                (_b = this.chip.classList).remove.apply(_b, this.class.split(" "));
            }
            if (this.icon) {
                var i = dom_helper_1.DOMHelper.createElement("i");
                (_c = i.classList).add.apply(_c, ["material-icons", "mdc-chip__icon"]);
                i.innerText = this.icon;
                if (this.iconTrailing) {
                    (_d = i.classList).add.apply(_d, ["mdc-chip__icon--trailing"]);
                    chipElement.appendChild(i);
                }
                else {
                    (_e = i.classList).add.apply(_e, ["mdc-chip__icon--leading"]);
                    chipElement.insertBefore(i, chipElement.getElementsByClassName("mdc-chip__text")[0]);
                }
            }
        };
        MdcChip.prototype.detached = function () {
            this.mdcElement.destroy();
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], MdcChip.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], MdcChip.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], MdcChip.prototype, "iconTrailing", void 0);
        MdcChip = __decorate([
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], MdcChip);
        return MdcChip;
    }());
    exports.MdcChip = MdcChip;
});
