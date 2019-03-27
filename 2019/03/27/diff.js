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
  for (attrName in attrs) {
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
  const elem = vnode.elem
  const newElem = createElement(newVnode)
  return elem
}
