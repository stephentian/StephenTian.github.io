/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-8-5
**/

// ES5

function myCall(context) {
  let context = context || window
  context.fn = this
  let args = []
  for (let i = 1; i < arguments.length; i++) {
    let temp = 'arguments[' + i + ']'
    args.push(temp)
  }
  let result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}


function myCall2(context) {
  let context = context || window
  context.fn = this
  let args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}
