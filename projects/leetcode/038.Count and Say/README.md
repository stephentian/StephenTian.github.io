# Count and Say

> 外观数列

## 解答

### 答案一

```js
//滚动数组
var countAndSay = function (n) {
  let pre = '1',
    cur = '1'
  for (let i = 1; i < n; i++) {
    pre = cur
    cur = ''
    let left = 0,
      right = 0
    while (right < pre.length) {
      while (pre[left] === pre[right] && right < pre.length) {
        right++
      }
      cur += (right - left).toString() + pre[left]
      left = right
    }
  }
  return cur
}
```

### 答案二

双指针

```js
var countAndSay = function (n) {
  if (n === 1) return '1'

  let pre = countAndSay(n - 1)
  let length = pre.length
  let start = 0
  let result = ''

  for (let i = 1; i <= length; i++) {
    if (pre[i] === pre[start]) {
      continue
    } else {
      result += (i - start).toString() + pre[start]
    }
  }
  return result
}
```
