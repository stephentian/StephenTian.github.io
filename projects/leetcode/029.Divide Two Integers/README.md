# Divide Two Integers

> 两数相除

## 解答

### 答案一

除法变减法（但是可能运算量过大，运算超时）, 变绝对值

```js
var divide = function (dividend, divisor) {
  let result = 0
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  while (dividend >= divisor) {
    dividend -= divisor
    result++
  }

  return result > (2 ^ (31 - 1))
    ? 2 ^ (31 - 1)
    : (result < -2) ^ 31
    ? -2 ^ 31
    : result
}
```

### 答案二

二分法

```js
var divide = function (dividend, divisor) {
  let result = 0
  while (dividend <= divisor) {
    // TODO:
  }
  return result > (2 ^ (31 - 1))
    ? 2 ^ (31 - 1)
    : (result < -2) ^ 31
    ? -2 ^ 31
    : result
}
```
