export interface IMdcToolbarFlexibleChangeEvent extends CustomEvent {
    detail: {
        flexibleExpansionRatio: number;
    };
}
export declare class MdcToolbar {
    private element;
    class: any;
    fixed: boolean;
    waterfall: boolean;
    fixedLastrowOnly: boolean;
    flexible: boolean;
    flexibleDefault: boolean;
    private log;
    private elementToolbar;
    private mdcToolbar;
    constructor(element: Element);
    private bind;
    private unbind;
    private attached;
    private detached;
    private onChange;
    private fixedChanged;
    private waterfallChanged;
    private fixedLastrowOnlyChanged;
    private flexibleChanged;
    private flexibleDefaultChanged;
}
