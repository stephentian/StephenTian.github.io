# 11. 盛最多水的容器(Container With Most Water)


## Description

给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

示例:
```
输入: [1,8,6,2,5,4,8,3,7]
输出: 49
```


## Answer

#### Answer 1

- leetcode-cn
执行用时 :2012 ms, 在所有JavaScript提交中击败了7.00%的用户
内存消耗 :36.1 MB, 在所有JavaScript提交中击败了9.39%的用户

- leetcode
Runtime: 1432 ms, faster than 5.02% of JavaScript online submissions for Container With Most Water.
Memory Usage: 36.5 MB, less than 5.47% of JavaScript online submissions for Container With Most Water

```
var maxArea = function(height) {
    if (height.length < 2) reutrn
    let maxNum = 0
    let num = 0
    for(let i = 0; i < height.length; i ++){
        for(let j = i + 1; j < height.length; j ++){
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

#### Answer 2

- leetcode-cn

执行用时 :80 ms, 在所有JavaScript提交中击败了97.95%的用户
内存消耗 :35.5 MB, 在所有JavaScript提交中击败了54.33%的用户

- leetcode

Runtime: 52 ms, faster than 98.20% of JavaScript online submissions for Container With Most Water.
Memory Usage: 35.3 MB, less than 98.14% of JavaScript online submissions for Container With Most Water.

```
var maxArea = function(height) {
    let maxNum = 0, i = 0, j = height.length - 1
    while(i < j) {
        maxNum = Math.max(maxNum, Math.min(height[i],height[j]) * (j-i))
        if (height[i] <= height[j]) {
            i ++
        } else {
            j --
        }
    }
    return maxNum
};
```


## Solution

#### 1.暴力法

使用两个 for 循环,
时间复杂度: O(n^2), 计算所有 n(n-1)/2 种高度组合
空间复杂度: O(1), 使用恒定的额外空间


#### 2. 双指针法

**算法思路**

这种方法背后的思路在于，两线段之间形成的区域总是会受到其中较短那条长度的限制。此外，两线段距离越远，得到的面积就越大。
我们在数组中使用两个指针, 一个放在开始， 一个放在末尾。
将指针指向较短的指针向较长的那段移动。
