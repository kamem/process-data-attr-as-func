import { Ele, getElement } from '../utils/utils'

type Value = string | number | {} | Function
type DataOptions<T extends {}> = {
  [ key in keyof T ] : Value
}

export type Functions = { [key: string] : () => void }
export type PluginType<T> = (element: HTMLElement, value: Partial<T>) => void
export interface ProcessDataAttrAsFuncOptions<T> {
  element: Ele
  plugin: PluginType<T>
  functions?: Functions
}
export class ProcessDataAttrAsFunc<T extends DataOptions<T>> {
  #element: HTMLElement
  #functions: Functions
  #plugin: Function
  dataset: Partial<T> = {}
  constructor(options: ProcessDataAttrAsFuncOptions<T>) {
    this.#element = getElement(options.element)
    this.#functions = options.functions || {}
    this.#plugin = options.plugin
  }

  #convertFromString(value: string): Value {
    if(/^[+,-]?([1-9]\d*|0)(\.\d+)?$/.test(value)) {
      return parseFloat(value)
    }
    
    if(/^(\[|\{)/g.test(value)) {
      try {
        return JSON.parse(value.replace(/\'/g,'\"'));
      } catch(e) {
      }
    }
    
    if(value === 'true' || value === 'false') {
      return value === 'true'
    }
    
    const functions = this.#functions || globalThis
    if (typeof functions[value] === 'function') {
      return functions[value]
    }

    return value
  }

  #generateData(data: { [ key in keyof T ]: string }) {
    const newData: Partial<DataOptions<T>> = {}
    for (const key in data) {
      newData[key] = this.#convertFromString(data[key])
    }
    return newData as Partial<T>
  }

  startPlugin() {
    this.dataset = this.#generateData(this.#element.dataset as { [ key in keyof T]: string })
    return this.#plugin(this.#element, this.dataset)
  }
}

export default ProcessDataAttrAsFunc