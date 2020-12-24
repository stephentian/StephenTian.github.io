# 283. Move Zeroes

> 移动零

## 解答

### 答案一

执行用时：104 ms, 在所有 JavaScript 提交中击败了 23.53%的用户

内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了 86.96%的用户

```js
var moveZeros = function (nums) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      let temp = nums[j]
      nums[j] = nums[i]
      nums[i] = temp
      i++
    }
  }
}
```
