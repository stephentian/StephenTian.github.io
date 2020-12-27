# 461. Hamming Distance

> 汉明距离

## 解答

### 答案一

执行用时：84 ms, 在所有 JavaScript 提交中击败 61.30%的用户

内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了 82.06%的用户

```js
var hammingDistance = function (x, y) {
  let res = 0
  while (x > 0 || y > 0) {
    if ((x & 1) !== (y & 1)) {
      res++
    }
    x >>= 1
    y >>= 1
  }
  return res
}
```
