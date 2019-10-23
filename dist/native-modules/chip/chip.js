var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MDCChip } from '@material/chips';
import { inject, bindable } from 'aurelia-framework';
import { DOMHelper } from '../dom-helper';
var MdcChip = (function () {
    function MdcChip(chip) {
        this.chip = chip;
    }
    MdcChip.prototype.attached = function () {
        var _a, _b, _c, _d, _e;
        this.mdcElement = new MDCChip(this.chip);
        var chipElement = this.chip.getElementsByClassName("mdc-chip")[0];
        if (this.class) {
            (_a = chipElement.classList).add.apply(_a, this.class.split(" "));
            (_b = this.chip.classList).remove.apply(_b, this.class.split(" "));
        }
        if (this.icon) {
            var i = DOMHelper.createElement("i");
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
        bindable,
        __metadata("design:type", String)
    ], MdcChip.prototype, "class", void 0);
    __decorate([
        bindable,
        __metadata("design:type", String)
    ], MdcChip.prototype, "icon", void 0);
    __decorate([
        bindable,
        __metadata("design:type", Boolean)
    ], MdcChip.prototype, "iconTrailing", void 0);
    MdcChip = __decorate([
        inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcChip);
    return MdcChip;
}());
export { MdcChip };
