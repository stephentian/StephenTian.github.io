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
