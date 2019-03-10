/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-3-10
**/

// f myInstanceof F

function myInstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null || left === undefined) {
      return false
    }
    if (prototype === left) return true
    left = left.__proto__
  }
}
