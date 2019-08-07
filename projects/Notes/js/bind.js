/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-8-5
**/

// bind

// ES5

function myBind(context) {
  let self = this
  let args1 = [].slice.call(arguments, 1)
  let argArr = []
  for (let i = 0; i < args1.length; i++) {
    argArr.push('args1[' + i + ']')
  }
  return function () {
    for (let i = 0; i < arguments.length; i++) {
      argArr.push('arguments[' + i + ']')
    }
    context.fn = self
    let result = eval('context.fn(' + argArr + ')')
    delete context.fn
    return result
  }
}


// ES6

function myBind2(obj, ...arg1) {
  return (...arg2) => {
    return this.apply(obj, arg1.concat(arg2))
  }
}

function myBind3(obj, ...arg1) {
  return (...arg2) => {
    let args = arg1.concat(arg2)
    let result
    obj.fn = this
    result = obj.fn(...args)
    delete obj.fn
    return result
  }
}
