# 448. Find All Numbers Disappeared in an Array

> 找到所有数组中消失的数字

## 解答

### 答案一

执行用时：128 ms, 在所有 JavaScript 提交中击败了 80.03%的用户

内存消耗：48.8 MB, 在所有 JavaScript 提交中击败了 25.19%的用户

```js
var findDisappearedNumbers = function (nums) {
  const length = nums.length
  if (!length) {
    return []
  }
  const map = {}
  nums.forEach(num => (map[num] = true))
  const res = []
  for (let i = 1; i <= length; ++i) {
    if (!map[i]) res.push(i)
  }

  return res
}
```
