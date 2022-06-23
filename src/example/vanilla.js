import '../process-data-attr-as-func/index'

const body = new ProcessDataAttrAsFunc(
  'body',
  (element, props) => {
    element.style.backgroundColor = props.color
  }
)

const menu = new ProcessDataAttrAsFunc(
  '.menu-item',
  (element, props) => {
    element.style.backgroundColor = props.color
  }
)