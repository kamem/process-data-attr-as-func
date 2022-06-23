import { ProcessDataAttrAsFunc } from '../process-data-attr-as-func/index'

interface Test {
  color: string
}

const body = new ProcessDataAttrAsFunc<Test>(
  'body',
  (element, props: Partial<Test>) => {
    element.style.backgroundColor = props.color!
  }
)

const menu = new ProcessDataAttrAsFunc<Test>(
  '.menu-item',
  (element, props: Partial<Test>) => {
    element.style.backgroundColor = props.color!
  }
)