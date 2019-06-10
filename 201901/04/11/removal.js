/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-4-11
**/

// removal 去重

const arr = [1, '1', 'a', 'a', 'a', 1, 3, 2, 2, 4]


// for
function removal1(arr) {
  let newArr = [arr[0]]
  for (let i = 0; i < arr.length; i++) {
    let repeat = false
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        repeat = true
        break
      }
    }
    if (!repeat) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log('for:', removal1(arr))


// for indexOf
// IE8 以下不支持数组 indexOf 方法
function removal2(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (temp.indexOf(arr[i]) == -1) {
      temp.push(arr[i])
    }
  }
  return temp
}
console.log('for and indexOf: ', removal2(arr))


// for sort()
function unique1(arr) {
  arr.sort()
  var temp = [arr[0]]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== temp[temp.length - 1]) {
      temp.push(arr[i])
    }
  }
  return temp
}
console.log('for sort: ', unique1(arr))
// 输出: 1, '1', 1, 2, 3, 4, 'a'
// 经检测, 方法有 bug


// Set
// Array.from() 从一个类似数组或者可迭代对象中创建一个新的数组实例, 简单的说就是将其他结构转换成对象
function unique2(arr) {
  const set = new Set(arr)
  return Array.from(set)
}
console.log('Set: ', unique2(arr))

// 简写
console.log('...new Set: ', [...new Set(arr)])
// 输出: [1, '1', 2, 3, 4, 'a']
// 输出结果和 sort 类似, 说明 Set 里有做排序处理
