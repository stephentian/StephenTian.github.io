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
