# 136. Single Number

> 只出现一次的数字

## 解答

### 答案一

执行用时：92 ms, 在所有 JavaScript 提交中击败了 63.67%的用户

内存消耗：42.5 MB, 在所有 JavaScript 提交中击败了 14.16%的用户

```js
var singleNumber = function (nums) {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i])
      continue
    }
    set.add(nums[i])
  }
  return [...set][0]
}
```
