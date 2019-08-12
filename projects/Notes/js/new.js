/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-8-12
**/

// new


function myNew1(obj) {
  let subObj = {}
  subObj.__proto__ = obj.prototype
  let res = obj.call(subObj)
  return typeof res === 'object' ? res : subObj
}


function myNew2() {
  let obj = {}
  let constor = [].shift.call(arguments)
  obj.__proto__ = constor.prototype
  let res = constor.apply(obj, arguments)
  return typeof res === 'object' ? res : subObj
}
