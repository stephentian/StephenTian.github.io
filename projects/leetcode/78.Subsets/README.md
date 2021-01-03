# 78. Subsets

> 子集

## 解答

### 答案一

回溯算法

执行用时：76 ms, 在所有 JavaScript 提交中击败了 98.59%的用户

内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了 53.48%的用户

```js
var subsets = function (nums) {
  const res = []
  const len = nums.length

  const fun = (cur, arr) => {
    if (cur === len) {
      res.push(arr.slice())
      return
    }
    arr.push(nums[cur])
    fun(cur + 1, arr)
    arr.pop()
    fun(cur + 1, arr)
  }

  fun(0, [])
  return res
}
```
