# process-data-attr-as-func

HTMLのdata属性を取得して、特定の関数を実行するためのプラグイン。
同じプラグインで、複数オプションで使いたい場合にHTMLを修正するだけでプラグインに渡すオプションを変えることができます。

A plugin that takes the data attribute of HTML and executes a specific function.
If you want to use the same plugin with multiple options, you can simply modify the HTML to change the options passed to the plugin.

## Install

### npm 
```terminal
npm install process-data-attr-as-func
```

### yarn
```terminal
yarn add process-data-attr-as-func
```

## Example
* [es](http://github.develo.org/process-data-attr-as-func/docs/example/)
* [vanilla](http://github.develo.org/process-data-attr-as-func/docs/example/vanilla.html)

## Document

### HTML
```html
<ul class="menu">
  <li class="menu-item" data-color="red">menu1</li>
  <li class="menu-item" data-color="yellow">menu2</li>
  <li class="menu-item" data-color="pink">menu3</li>
  <li class="menu-item" data-color="blue">menu4</li>
</ul>
```

#### dataオブジェクトの指定方法
```html
<p 
  data-num="1"
  data-str="test"
  data-boo="true"
  data-obj="{'test': 1}"
  data-ary="[1, 2, 3]"
  data-func="testFunction"
>
</p>
```
それぞれ変換`Number`, `String`, `Boolean`, `Array`, `Object`, 'Function'に変換されます。  
**`Array`, `Object`はJSON.parse('')で変換されます。keyは`'`(シングルクオート)で囲います**。  
**`Function`は[Optionのfunctions](#Options)もしくはGlobalにその名前の関数が存在していた場合に関数に変換されます。**


### Typescript 
```typescript
import { ProcessDataAttrAsFunc } from 'process-data-attr-as-func'

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
```
プラグイン実行で返ってくるdataは`Partial<Test>`となります。
※ HTMLタグのdataから取得するため、存在が担保できないため`Partial`にしています。

### Vanilla
#### html
```html
<script src="../js/process-data-attr-as-func.min.js"></script>
```

#### javascript
```javascript
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
```

### Options

| Option Name | Description | Type |default
|:-----------|:------------|:------------|:------------|
| element      | タグ | HTMLElement string | -
| plugin  | 関数 | (element: HTMLElement, value: Partial<T>) => void | -
| functions | dataで取れた文字列がここのオブジェクトに存在していた場合、その関数をオプションとして渡します | { [key: string] : () => void } | {}
```typescript
export type Functions = { [key: string] : () => void }
export type PluginType<T> = (element: HTMLElement, value: Partial<T>) => void
export interface ProcessDataAttrAsFuncOptions<T> {
  element: HTMLElement
  plugin: PluginType<T>
  functions?: Functions
}
```

## dataの変換条件
```typescript
#convertFromString(value: string): Value {
  // 数値の場合
  if(/^[+,-]?([1-9]\d*|0)(\.\d+)?$/.test(value)) {
    return parseFloat(value)
  }
  // 配列 or オブジェクトの場合
  if(/^(\[|\{)/g.test(value)) {
    try {
      return JSON.parse(value.replace(/\'/g,'\"'));
    } catch(e) {
    }
  }
  // Booleanの場合
  if(value === 'true' || value === 'false') {
    return value === 'true'
  }
  // 関数の場合
  const functions = this.#functions || globalThis
  if (typeof functions[value] === 'function') {
    return functions[value]
  }

  return value
}
```

## Development
### dev
```
yarn dev
yarn serve
```

### build
```
npm run build
```

or

```
yarn build
```
