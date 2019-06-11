# 11. 盛最多水的容器(Container With Most Water)


## Description

给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

示例:
```
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```


## Solution

#### Answer 1

- leetcode-cn
执行用时 :2012 ms, 在所有JavaScript提交中击败了7.00%的用户
内存消耗 :36.1 MB, 在所有JavaScript提交中击败了9.39%的用户

```
var maxArea = function(height) {
    if (height.length < 2) reutrn
    let maxNum = 0
    let num = 0
    for(let i = 0; i < height.length - 1 ; i ++){
        for(let j = 1; j < height.length; j ++){
            if(height[i] <= height[j]) {
                num = height[i]*(j - i)
            } else {
                num = height[j]*(j - i)
            }
            if (num > maxNum) maxNum = num
        }
    }
    console.log(maxNum)
    return maxNum
};
```
