import { ProcessDataAttrAsFunc as ProcessDataAttrAsFuncPlugin } from './ProcessDataAttrAsFunc';
import type { ProcessDataAttrAsFuncOptions, PluginType, Functions } from './ProcessDataAttrAsFunc';
import type { Ele } from '../utils/utils';
declare type Option<T> = Omit<ProcessDataAttrAsFuncOptions<T>, 'element'>;
export declare class ProcessDataAttrAsFunc<T> {
    elements?: Element[];
    processDataAttrAsFuncPlugins?: ProcessDataAttrAsFuncPlugin<T>[];
    constructor(element: Ele, opt: Option<T> | PluginType<T>, functions?: Functions);
}
export interface NewProcessDataAttrAsFunc<T> {
    new (element: Ele, opt: Option<T> | PluginType<T>, functions?: Functions): ProcessDataAttrAsFunc<T>;
}
export {};
