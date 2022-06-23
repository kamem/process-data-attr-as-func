import { Ele } from '../utils/utils';
declare type Value = string | number | {} | Function;
declare type DataOptions<T extends {}> = {
    [key in keyof T]: Value;
};
export declare type Functions = {
    [key: string]: () => void;
};
export declare type PluginType<T> = (element: HTMLElement, value: Partial<T>) => void;
export interface ProcessDataAttrAsFuncOptions<T> {
    element: Ele;
    plugin: PluginType<T>;
    functions?: Functions;
}
export declare class ProcessDataAttrAsFunc<T extends DataOptions<T>> {
    #private;
    dataset: Partial<T>;
    constructor(options: ProcessDataAttrAsFuncOptions<T>);
    startPlugin(): any;
}
export default ProcessDataAttrAsFunc;
