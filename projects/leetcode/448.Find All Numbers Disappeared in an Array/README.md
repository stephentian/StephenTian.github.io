# 448. Find All Numbers Disappeared in an Array

> 找到所有数组中消失的数字

## 解答

### 答案一

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
