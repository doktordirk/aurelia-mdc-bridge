export declare type tMdcGridListAspect = '1x1' | '16x9' | '2x3' | '3x2' | '4x3' | '3x4';
export declare class MdcGlidList {
    private element;
    headerTop: boolean;
    twoLine: boolean;
    iconStart: boolean;
    iconEnd: boolean;
    aspect: tMdcGridListAspect;
    gutter: string;
    private elementGridlist;
    private log;
    constructor(element: Element);
    private bind;
    private unbind;
    private attached;
    private widthChanged;
    private headerTopChanged;
    private twoLineChanged;
    private iconStartChanged;
    private iconEndChanged;
    private aspectChanged;
    private gutterChanged;
}
