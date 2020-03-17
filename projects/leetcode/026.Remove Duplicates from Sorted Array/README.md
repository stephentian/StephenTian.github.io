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

```
var removeDuplicates = function(nums) {
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
