import { TaskQueue } from 'aurelia-framework';
import { MDCSelect } from '@material/select';
export interface IMdcSelectChangeEvent extends CustomEvent {
    detail: MDCSelect;
}
export declare class MdcSelect {
    private element;
    private taskQueue;
    class: any;
    disabled: boolean;
    value: any;
    labelText: any;
    box: boolean;
    matcher: (a: any, b: any) => boolean;
    private listItems;
    private elementSelect;
    private mdcSelect;
    private log;
    private internalValueChanged;
    constructor(element: Element, taskQueue: TaskQueue);
    private bind;
    private unbind;
    private attached;
    private detached;
    private listItemsChanged;
    private disabledChanged;
    private boxChanged;
    private compareModels;
    private raiseChangeEvent;
}
