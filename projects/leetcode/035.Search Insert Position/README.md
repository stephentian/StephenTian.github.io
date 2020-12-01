# Search Insert Postion

> 搜索插入位置

## 解答

### 答案一

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // Brute-Force
  if (nums[nums.length - 1] < target) return nums.length

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i
  }
}
```
