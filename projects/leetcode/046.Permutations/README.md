# 46. Permutations

> 全排列

## 解答

### 答案一

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  function loop(arr) {
    if (arr.length === nums.length) {
      result.push(arr.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i])
        loop(arr)
        arr.pop(nums[i])
      }
    }
  }

  loop([])

  return result
}
```
