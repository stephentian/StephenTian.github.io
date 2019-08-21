/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-8-13
**/


// 防抖

function debouncd(fn, time = 1000) {
  let timer
  return function () {
    const args = arguments
    const context = this
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
      timer = null
    }, time)
  }
}
