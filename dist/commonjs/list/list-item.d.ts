export interface IMdcListItemClickEvent extends CustomEvent {
    detail: MdcListItem;
}
export declare class MdcListItem {
    private element;
    class: any;
    ripple: boolean;
    model: any;
    selected: boolean;
    disabled: boolean;
    href: string;
    target: string;
    private log;
    private parentElement;
    private elementListItem;
    private isMenuItem;
    private isSelectMenuItem;
    private mdcRipple;
    private selectedClass;
    constructor(element: Element);
    private elementClick;
    private bind;
    private unbind;
    private attached;
    private detached;
    private menuItem;
    private selectMenuItem;
    private rippleEffect;
    private disabledChanged;
    private selectedChanged;
}
