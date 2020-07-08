# Remove Element

> 移除元素

## 描述

## 解答

### 答案一

for 循环

执行用时：
68 ms, 在所有 JavaScript 提交中击败了 74.03% 的用户
内存消耗：
33.1 MB, 在所有 JavaScript 提交中击败了 100.00% 的用户

```
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!nums) return 0
    let index = 0
    for(var i = 0, j= 0; i < nums.length; i++) {
        if (nums[j] === val) {
            nums.splice(j, 1)
            nums.push(val)
        } else {
            j ++
            index ++
        }
    }
    return index
};

```

改进:

```
var removeElement = function(nums, val) {
    let index = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index++
    }
  }
  return index
};
```
