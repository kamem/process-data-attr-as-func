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
