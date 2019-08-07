/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-8-5
**/

// apply

// ES5

function myApply(context, arr) {
  context = context || window
  context.fn = this

  let result
  if (!arr) {
    result = context.fn()
  } else {
    let args = []
    for (let i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('cotext.fn(' + args + ')')
  }
  delete context.fn
  return result
}

// ES6
function myApply2(context, args = []) {
  context = context || window
  context.fn = this
  let result = context.fn(...args)
  delete context.fn
  return result
}
