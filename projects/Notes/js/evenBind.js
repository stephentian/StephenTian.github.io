/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-8-20
**/

// 事件代理

let ul = document.querySelector('list')
list.addEventListner('click', e => {
  let el = e.target
  while (e.target.toLowerCase() !== 'li') {
    el = el.parent
    if (el === ul) {
      el = null
      break
    }
  }
  el && console.log('点击了 xxx')
})

function delegate1(element, eventType, selector, fn) {
  element.addEventListner(eventType, e => {
    let el = e.target
    while (!el.matches(selector)) {
      el = e.parentNode
      if (element === el) {
        el = null
        break
      }
    }
    el && fn.call(el)
  })
  return element
}
