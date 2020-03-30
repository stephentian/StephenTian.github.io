# Remove Duplicates from Sorted Array

> 从排序列表中移除重复的元素

## 描述

#### 示例 1

```
给定数组 nums = [1,1,2],
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2
```

## 解答

### 答案一

双指针

执行用时 :
88 ms, 在所有 JavaScript 提交中击败了 64.70% 的用户  
内存消耗 :
36.7 MB, 在所有 JavaScript 提交中击败了 91.68% 的用户

```
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length
  let j = 0;
  let len = nums.length;
  for(let i = 1; i< len; i++){
      if(nums[i] !== nums[i-1]){
          j++;
          nums[j] = nums[i];
      }
  }
  return j + 1;
};
```
