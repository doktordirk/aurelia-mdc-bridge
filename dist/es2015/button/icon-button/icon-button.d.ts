import { ComponentAttached, ComponentDetached } from 'aurelia-framework';
export declare class MdcIconButtonToggle implements ComponentAttached, ComponentDetached {
    private element;
    iconOn: string;
    iconOff: string;
    ariaLabelOn: string;
    ariaLabelOff: string;
    disabled: boolean;
    on: boolean;
    private log;
    private mdcIconToggle;
    private tabindex;
    private button;
    constructor(element: Element);
    private bind;
    private unbind;
    attached(): void;
    detached(): void;
    private raiseEvent;
    private onChanged;
    private disabledChanged;
}
