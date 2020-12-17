# 70. Climbing Stairs

> 爬楼梯

## 解答

### 答案一

暴力法 brute-force

超出时间范围!

```js
var climbStairs = function (n) {
  function climbStair(n) {
    if (n == 1) {
      return 1
    }
    if (n == 2) {
      return 2
    }
    return climbStair(n - 1) + climbStair(n - 2)
  }
  return climbStair(n)
}
```

### 答案二

动态规划

执行用时：88 ms, 在所有 JavaScript 提交中击败了 29.57%的用户

内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了 18.02%的用户

```js
var climbStairs = function (n) {
  if (n <= 2) return n
  const arr = []
  for (let i = 0; i < n; i++) {
    if (i <= 2) {
      arr[i] = i
    } else {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
  }
  return arr[n - 1] + arr[n - 2]
}
```

优化

执行用时：80 ms, 在所有 JavaScript 提交中击败了 70.07 的用户

内存消耗：37.5 MB, 在所有 JavaScript 提交中击败了 57.71%
的用户

```js
var climbStairs = function (n) {
  const arr = []
  arr[1] = 1
  arr[2] = 2
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}
```
