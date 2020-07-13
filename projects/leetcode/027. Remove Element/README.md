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

### 答案二

双指针

Runtime: 104 ms, faster than 6.65% of JavaScript online submissions for Remove Element.
Memory Usage: 33.2 MB, less than 97.68% of JavaScript online submissions for Remove Element.

```
var removeElement = function(nums, val) {
  let index = 0, last = nums.length - 1
  while (index <= last) {
    if (nums[index] === val) {
      nums[index] = nums[last]
      last--
    } else {
      index++
    }
  }
  return index
};
```

### 答案三

Runtime: 108 ms, faster than 6.65% of JavaScript online submissions for Remove Element.
Memory Usage: 33.3 MB, less than 96.40% of JavaScript online submissions for Remove Element.

```
var removeElement = function(nums, val) {
    for (let  i = 0; i < nums.length; i ++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
  return nums.length
};
```

### 答案四

```
var removeElement = (nums, val) => {
  while (nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val),1)
  }
  return nums.length
}
```
