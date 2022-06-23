export const ERRROR_PREFIX = '[process-data-attr-as-func]'
export type Ele = string | Element | HTMLElement | NodeListOf<Element> | null

export const generateError = (errorName: string, message: string) => {
  throw new Error(`${ERRROR_PREFIX} [${errorName}] ${message}`) 
}

export const getElement = (element: Ele) => {
  const el: HTMLElement | null = typeof element === 'string' ? document.querySelector<HTMLElement>(element) : element as HTMLElement
  if(!el) return generateError(getElement.name, ` undefined element "${element}"`)
  return el 
}
