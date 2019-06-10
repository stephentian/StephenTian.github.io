# vdom

- vdom 是 vue 和 React 的核心
- vdom 比较独立, 使用比较简单

## 问题

- vdom 是什么？ 为何会存在 vdom?
- vdom 是如何应用, 核心的 api 是什么?
- 介绍一下 diff 算法.

---

### vdom 是什么, 为何会存在 vdom

- 什么是 vdom
- 设计一个需求场景
- 用 jQuery 实现
- 遇到的问题

#### 1. 什么是 vdom

- virtual dom, 虚拟 DOM
- 用 JS 模拟 DOM 结构
- DOM 变化的对比, 放在 JS 层来做
- 提高重绘性能

```
// html

<ul>
  <li class="item">aaa</li>
  <li>item2</li>
</ul>

// vdom
{
  tag: 'ul',
  attrs: {
    id: ''
  },
  children: [
    {
      tag: 'li',
      attrs: {
        className: 'item' // class 为 JS 保留字, 用 className 代替
      },
      children: ['aaa']
    }, {
      tag: 'li',
      attrs: {}
      children: ['item2']
    }
  ]
}
```

假如 item2 所在的 li 被删除了, dom 可能把全部 li 都删除, 再重绘上没删除的.
但是 有了 vdom, 之前的 dom 结构会保留为一个对象, 当要更改时, 会生成另外一个 vdom 对象;
通过 vdom 的 diff 算法对比, 改动差异的就好了.
这样就减少了 dom 的操作.

#### 2. 设计一个需求场景

```
// 1. 将下列数据展示成一个表格.
// 2. 随便修改一个信息, 表格跟着修改
[
  {
    name: '张三',
    age: '31',
    addr: '北京'
  }, {
    name: '李四',
    age: '20',
    addr: '上海'
  }, {
    name: '王五',
    age: '11',
    addr: '广州'
  }
]

```
见 index.html

### vdom 是如何应用, 核心的 api 是什么

- snabbdom
- 重做之前的 index.html demo
- 核心 API

#### 1. snabbdom

snabbdom 是一个开源的 vdom 库;
vdom, MVVM 是一种技术实现, 不限于某种框架.

核心为**h 函数** 和 **patch 函数**

```
const container = document.getElementById('container')

const vnode = h('div#container.two.classes', {on: {click: someFn}}, [
  h('span', {style: {fontWeight: 'bold'}}, 'This is bold'),
  h('a', {props: {href: '/home'}}, 'I\'ll take you places!')
])

// 第一次渲染时, 把所有 vnode 填充进 container
patch(container, vnode)


const newVnode = h('div#container.two.classes', {on: {click: anotherEventHandler}}, [
  h('span', {style: {fontWeight: 'normal'}}, 'This is normal type'),
  h('a', {props: {href: '/home'}}, 'I\'ll take you places!')
])

// 第二次渲染时, 第一个参数为 旧的 vnode
patch(vnode, newVnode)
```

```
const vnode = h('ul#list', {}, [
  h('li.item', {}, 'item1'),
  h('li', {}, 'item2')
])
```
