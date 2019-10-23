import { TaskQueue } from 'aurelia-framework';
export declare class MdcTabBarScroller {
    private element;
    private taskQueue;
    activeTabIndex: number;
    ariaBefore: string;
    ariaNext: string;
    icon: boolean;
    text: boolean;
    private elementTabBar;
    private elementTabBarScroller;
    private mdcTabBarScroller;
    private stopChangedEvent;
    constructor(element: Element, taskQueue: TaskQueue);
    private bind;
    private unbind;
    private attached;
    private detached;
    private onChange;
    private activeTabIndexChanged;
    private hasChildIcons;
    private hasChildText;
    private iconChanged;
    private textChanged;
}
