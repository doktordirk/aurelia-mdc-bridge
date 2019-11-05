export interface IMdcTopAppBarFlexibleChangeEvent extends CustomEvent {
    detail: {
        flexibleExpansionRatio: number;
    };
}
export declare class MdcTopAppBar {
    private element;
    class: any;
    fixed: boolean;
    waterfall: boolean;
    fixedLastrowOnly: boolean;
    flexible: boolean;
    flexibleDefault: boolean;
    private log;
    private elementTopAppBar;
    private mdcTopAppBar;
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
