import ProcessDataAttrAsFunc from '../../src/process-data-attr-as-func/ProcessDataAttrAsFunc'
 
 document.body.innerHTML = `
 <div id="test" 
  data-a="1"
  data-b="2"
  data-c="hoge"
  data-d="fuga"
  data-e="{"
  data-f="[]"
>test</div>
 `

describe('ProcessDataAttrAsFunc', () => {
  it(`
      elementが存在している場合data属性を解析して、
      データ属性を引数にいれてpluginを実行する。
      number
      array
      object
      function (functions（指定なしの場合はwindow）にdataで指定した文字列が存在してる場合にはその関数。)
      string
      にそれぞれ対応
    `, () => {
    interface Test {
      a: number
      b: number
      c: string
      d: () => {}
      e: string
      f: []
    }

    let testValue: {} | undefined = undefined
    const fuga = () => {}
    const test = new ProcessDataAttrAsFunc<Test>({
      element: document.querySelector('#test'),
      plugin: (element, test) => {
        testValue = test
      },
      functions: {
        fuga
      }
    })

    test.startPlugin()

    expect(testValue).toEqual({
      a: 1,
      b: 2,
      c: 'hoge',
      d: fuga,
      e: '{',
      f: []
    })
  })

  it('elementが存在しない場合は、存在しないむねを表すエラー文言が表示される', () => {
    expect(() => new ProcessDataAttrAsFunc({
      element: document.querySelector('#hoge'),
      plugin: (element, test) => {
      } 
    })).toThrow(/\"null\"$/)
  })
})