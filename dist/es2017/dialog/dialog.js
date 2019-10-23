var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MdcDialog_1;
import { inject, bindable, customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCDialog } from '@material/dialog';
import * as util from '../util';
let MdcDialog = MdcDialog_1 = class MdcDialog {
    constructor(element) {
        this.element = element;
        this.header = '';
        this.accept = '';
        this.cancel = '';
        this.acceptAction = false;
        this.cancelAction = false;
        this.acceptDisabled = false;
        this.scrollable = false;
        this.controlId = '';
        this.controlId = `mdc-dialog-${MdcDialog_1.id++}`;
        this.log = getLogger('mdc-dialog');
    }
    show(showDialog = true) {
        if (showDialog) {
            this.mdcElement.open();
        }
        else {
            this.mdcElement.close();
        }
    }
    get foundation() {
        if (this.mdcElement) {
            return this.mdcElement.getDefaultFoundation();
        }
        return null;
    }
    bind() { }
    unbind() { }
    attached() {
        this.scrollableChanged(this.scrollable);
        this.mdcElement = new MDCDialog(this.diagElement);
        this.mdcElement.listen('MDCDialog:closed', this.onTransitionEnd.bind(this));
        this.mdcElement.listen('MDCDialog:opened', this.onTransitionEnd.bind(this));
        if (this.acceptButtonElement) {
            this.acceptActionChanged(this.acceptAction);
        }
        if (this.cancelButtonElement) {
            this.cancelActionChanged(this.cancelAction);
        }
        if (this.focusAt) {
        }
    }
    detached() {
        this.mdcElement.unlisten('MDCDialog:close', this.onTransitionEnd.bind(this));
        this.mdcElement.unlisten('MDCDialog:open', this.onTransitionEnd.bind(this));
        this.mdcDialogFoundation = null;
        this.mdcElement.destroy();
    }
    onButtonAccept() {
        util.fireEvent(this.diagElement, 'on-click', true);
    }
    onButtonCancel() {
        util.fireEvent(this.diagElement, 'on-click', false);
    }
    acceptActionChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.acceptButtonElement.classList[value ? 'add' : 'remove']('mdc-dialog__action');
    }
    cancelActionChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.cancelButtonElement.classList[value ? 'add' : 'remove']('mdc-dialog__action');
    }
    scrollableChanged(newValue) {
        this.scrollable = util.getBoolean(newValue);
    }
    onTransitionEnd(evt) {
        if (evt.propertyName === 'opacity') {
            if (this.mdcElement.open) {
                util.fireEvent(this.diagElement, 'on-opened', {});
            }
            else {
                util.fireEvent(this.diagElement, 'on-closed', {});
            }
            return;
        }
        if (evt.detail) {
            if (evt.detail.action === 'ok') {
                this.onButtonAccept();
            }
            if (evt.detail.action === 'cancel') {
                this.onButtonCancel();
            }
        }
    }
};
MdcDialog.id = 0;
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "header", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "accept", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "cancel", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "acceptAction", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "cancelAction", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "acceptDisabled", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "scrollable", void 0);
__decorate([
    bindable(),
    __metadata("design:type", HTMLElement)
], MdcDialog.prototype, "focusAt", void 0);
MdcDialog = MdcDialog_1 = __decorate([
    customElement('mdc-dialog'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcDialog);
export { MdcDialog };
