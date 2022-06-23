import { ProcessDataAttrAsFunc as ProcessDataAttrAsFuncPlugin } from './ProcessDataAttrAsFunc'

import type { ProcessDataAttrAsFuncOptions, PluginType, Functions } from './ProcessDataAttrAsFunc'
import type { Ele } from '../utils/utils'

type Option<T> = Omit<ProcessDataAttrAsFuncOptions<T>, 'element'>
export class ProcessDataAttrAsFunc<T> { 
  elements?: Element[]
  processDataAttrAsFuncPlugins?: ProcessDataAttrAsFuncPlugin<T>[]
  constructor(element: Ele, opt: Option<T> | PluginType<T>, functions?: Functions) {
    const el =  typeof element === 'string' ? document.querySelectorAll(element) : element

    const arrayEl = Array.from(el as any)
    if(typeof element === 'string' && arrayEl.length === 0) {
      return
    }

    this.elements = arrayEl.length > 0 ?
     Array.from(el as NodeListOf<Element>) : [el as Element]

     let params: Option<T> = {
      plugin: () => {}
     }

    if(typeof opt === 'function') {
      params.plugin = opt
    } else {
      params = opt
    }

    this.processDataAttrAsFuncPlugins = this.elements.map((element) => {
      const processDataAttrAsFunc = new ProcessDataAttrAsFuncPlugin({
        element,
        ...params,
        functions
      })

      processDataAttrAsFunc.startPlugin()

      return processDataAttrAsFunc
    })
  }
}

export interface NewProcessDataAttrAsFunc<T> {
  new (element: Ele, opt: Option<T> | PluginType<T>, functions?: Functions): ProcessDataAttrAsFunc<T>;
}

interface Window {
  ProcessDataAttrAsFunc: NewProcessDataAttrAsFunc<{}>
}
declare var window: Window

window.ProcessDataAttrAsFunc = ProcessDataAttrAsFunc