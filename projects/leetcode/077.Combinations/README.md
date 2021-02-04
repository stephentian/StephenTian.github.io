# 77. Combinations

> 组合

## 解答

```js
let combine = function (n, k) {
  let res = []

  let helper = (start, prev) => {
    if (start.length === k) {
      res.push(prev)
      return
    }

    for (let i = start; i <= n; i++) {
      helper(i + 1, prev.concat(i))
    }
  }

  helper(1, [])
  return res
}
```
