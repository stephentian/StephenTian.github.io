/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-3-27
**/

// diff

// path(container, vnode)

function createElement(vnode) {
  const tag = vnode.tag
  let attrs = vnode.attrs || {}
  let children = vnode.children || []
  if (!tag) {
    return null
  }
  const elem = document.createElement(tag)
  let attrName
  // key in obj
  // 判断一个对象属性或原型里是否包含某个 key, key 为字符串
  for (attrName in attrs) {
    // attrName 可能把原型里的属性也遍历了, hasOwnProperty 过滤, 它只会判断对象属性是否包含某个 key
    if (attrs.hasOwnProperty(attrName)) {
      elem.setAttribute(attrName, attrs[attrName])
    }
  }
  children.forEach(function (childVnode) {
    elem.appenChild(createElement(childVnode))
  })
  return elem
}

// path(vnode, newVnode)

function updateChildren(vnode, newVnode) {
  const children = vnode.children || []
  let newChildren = newVnode.children || []
  children.forEach(function (child, index) {
    let newChild = newChildren[index]
    if (newChild == null) {
      return
    }
    if (child.tag === newChild.tag) {
      updateChildren(child, newChild)
    } else {
      replaceNode(child, newChild)
    }
  })
}

function replaceNode(vnode, newVnode) {
  // ...
}

// 不仅仅是以上判断
// - 节点的新增和删除
// - 节点的重新排序
// - 节点的属性、样式、事件变化
// - 如何极致压榨性能
// ...
