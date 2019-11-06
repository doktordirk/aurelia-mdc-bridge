var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { children, inject, bindable, bindingMode, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCSelect } from '@material/select';
import * as util from '../../util';
let selectId = 0;
let MdcSelect = class MdcSelect {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.disabled = false;
        this.box = false;
        this.internalValueChanged = false;
        this.id = selectId++;
        this.log = getLogger('mdc-select');
    }
    bind() { }
    unbind() { }
    attached() {
        this.mdcSelect = new MDCSelect(this.elementSelect);
        this.mdcSelect.listen('MDCSelect:change', this.raiseChangeEvent.bind(this));
        this.mdcSelect.getDefaultFoundation();
        this.disabledChanged(this.disabled);
        this.boxChanged(this.box);
        const labelElement = this.elementSelect.getElementsByClassName('mdc-select__label');
        if (labelElement[0]) {
            labelElement[0].classList.add('mdc-select__label--float-above');
        }
    }
    detached() {
        this.mdcSelect.unlisten('MDCSelect:change', this.raiseChangeEvent.bind(this));
        this.mdcSelect.destroy();
    }
    listItemsChanged() {
        for (let index = 0; index < this.listItems.length; index++) {
            const item = this.listItems[index];
            item.setAttribute('role', 'option');
            item.setAttribute('tabindex', '0');
        }
    }
    disabledChanged(newValue) {
        this.mdcSelect.disabled = util.getBoolean(newValue);
    }
    boxChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementSelect.classList[value ? 'add' : 'remove']('mdc-select--box');
    }
    compareModels(model1, model2) {
        if (this.matcher) {
            return this.matcher(model1, model2);
        }
        else {
            return (model1 === model2);
        }
    }
    raiseChangeEvent(e) {
        this.internalValueChanged = true;
        this.value = this.mdcSelect.value;
        util.fireEvent(this.element, 'on-change', e.detail);
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSelect.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSelect.prototype, "disabled", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcSelect.prototype, "value", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", Object)
], MdcSelect.prototype, "labelText", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", Object)
], MdcSelect.prototype, "box", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Function)
], MdcSelect.prototype, "matcher", void 0);
__decorate([
    children('.mdc-list-item'),
    __metadata("design:type", Object)
], MdcSelect.prototype, "listItems", void 0);
MdcSelect = __decorate([
    customElement('mdc-select'),
    inject(Element, TaskQueue),
    __metadata("design:paramtypes", [Element, TaskQueue])
], MdcSelect);
export { MdcSelect };
