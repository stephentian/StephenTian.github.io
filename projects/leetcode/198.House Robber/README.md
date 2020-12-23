# 198. House Robber

> 打家劫舍

## 解答

### 答案一

动态规划

执行用时：92 ms, 在所有 JavaScript 提交中击败了 22.21%的用户

内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了 49.62%的用户

```js
var rob = function (nums) {
  const len = nums.length
  if (len === 0) return 0
  if (len === 1) return nums[0]

  const dp = []
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
  }
  return dp[len]
}
```
