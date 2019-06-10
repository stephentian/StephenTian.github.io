/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-03-23
**/

// diff snabbdom 实现的 vdom 库

// patch(container, vnode)

// 如何将 vnode 生成真实的 DOM
function createElement(vnode) {
  const tag = vnode.tag
  let attrs = vnode.attrs || {}
  let children = vnode.children || []
  if (!tag) return null
  // 创建元素
  let elem = document.createElement(tag)
  let attrName
  for (arrrName in attrs) {
    if (attrs.hasOwnProperty(attrName)) {
      elm.setAttribute(attrName, attrs[attrName])
    }
  }
  // 子元素
  children.forEach(childnode => {
    elem.appendChild(createElement(childnode))
  })
  return elem
}
