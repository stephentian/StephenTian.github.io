# Maximum Subarray

> 最大子序和

## 解答

### 答案一

Brute-force

执行用时：500 ms, 在所有 JavaScript 提交中击败了 5.16%的用户
内存消耗：39.3 MB, 在所有 JavaScript 提交中击败了 39.26%的用户

```js
var maxSubArray = function (nums) {
  if (nums && nums.length == 1) return nums[0]
  let sum = nums[0]
  for (let i = 0; i < nums.length; i++) {
    subSum = nums[i]
    n = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      n += nums[j]
      if (n > subSum) {
        subSum = n
      }
    }

    if (subSum > sum) sum = subSum
  }

  return sum
}
```

### 答案二

动态规划

执行用时：92 ms, 在所有 JavaScript 提交中击败了 54.25%的用户
内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了 8.87%的用户

```js
var maxSubArray = function (nums) {
  let res = nums[0]
  let sum = 0
  for (const num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    res = Math.max(res, sum)
  }
  return res
}

var maxSubArray = function (nums) {
  let res = nums[0]
  let sum = nums[0]
  for (let i = 1; < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i])
    res = Math.max(pre, res)
  }
  return res
}
```
