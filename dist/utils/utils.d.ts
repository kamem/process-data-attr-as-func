export declare const ERRROR_PREFIX = "[process-data-attr-as-func]";
export declare type Ele = string | Element | HTMLElement | NodeListOf<Element> | null;
export declare const generateError: (errorName: string, message: string) => never;
export declare const getElement: (element: Ele) => HTMLElement;
