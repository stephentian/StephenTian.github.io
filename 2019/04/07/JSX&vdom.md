# JSX 和 vdom

JSX 转换成 JS 时, 依靠 React.createElement

vdom 转换为 vnode 时, 依靠 h 函数, 再用 patch 渲染

## vdom 如何应用, 核心 API 是什么

- snabbdom(开源的 vdom 库)

- snabbdom 的使用

- h 和 patch

## React.createElement 和 h

```
var profile = React.createElement("div", null, 
  React.createElement("img", { src: '', className: '' }),
  React.createElement("h3", null, [user.firstName, user.lastName].join(" "))
)

var vnode = h('div#container.two.classes', { on: {click: someFn}}, [
  h('span', {style: {fontWeight: 'bold'}}, 'this is bold'),
  h('a', {props: {href: '/foo'}}, 'I\'ll take you places!')
])
```

## 何时 patch

- 初次渲染 - React.render(<App/>, container)

- 触发 patch(container, vnode)

- re-render —— setState

- 触发 patch(vnode, newVnode)

## 自定义组件解析

```
return (
  <div>
    <Input addTitle={this.addTitle.bind(this)} />
    <List data={this.state.list} />
  </div>
)

return React.createElement('div', null,
  React.createElement(Input, {addTitle: this.addTitle.bind(this)}),
  React.createElement(List, {data: this.state.list})
)
```

- div 直接渲染成 `<div>` 即可, vdom 可以做到
- Input 和 List, 是自定义组件(class), vdom 默认不认识
- 因此 Input 和 List 定义的时候必须声明 render 函数
- 根据 props 初始化实例, 然后执行实例的 render 函数
- render 函数返回的还是 vnode 对象


比如解析 `List` 组件
```
// React.createElement(List, {data: this.state.this})

const list = new List(this.state.list)
const vnode = list.render()
```
