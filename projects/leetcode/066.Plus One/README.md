# Plus One

> 加一

## 解答

### 答案一

执行用时：88 ms, 在所有 JavaScript 提交中击败了 41.70%的用户
内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了 55.73%的用户

```js
var plusOne = function (digits) {
  const len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++
    digits[i] %= 10
    if (digits[i] != 0) {
      return digits
    }
  }
  return [1, ...digits]
}
```
