import { ComponentAttached, ComponentDetached } from 'aurelia-framework';
export declare class MdcButton implements ComponentAttached, ComponentDetached {
    private element;
    compact: boolean;
    dense: boolean;
    raised: boolean;
    outlined: boolean;
    unelevated: boolean;
    ripple: boolean;
    private log;
    constructor(element: Element);
    attached(): void;
    detached(): void;
    private denseChanged;
    private raisedChanged;
    private outlinedChanged;
    private unelevatedChanged;
}
