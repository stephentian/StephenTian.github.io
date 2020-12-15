# Unique Paths

> 不同路径

## 解答

### 答案一

动态规划

```js
var uniquePaths = function (m, n) {
  // if(m === 1 || n === 1) return 1
  // const map = new Map()
  // let l = 0, r = 0
  // for(let i = 2; i <= m ; i ++) {
  //     for(let j = 2; j <= n; j++) {
  //         l = (i - 1 > 1) ? map.get([i-1, j].toString()) : 1
  //         r = (j - 1 > 1) ? map.get([i, j - 1].toString()) : 1
  //         map.set([i, j].toString(), l + r)
  //     }
  // }
  // return map.get([m, n].toString())
  const arr = []
  for (let i = 0; i < m; i++) {
    arr[i] = []
    for (let j = 0; j <= n; j++) {
      if (arr[j] && arr[j][i]) {
        arr[i][j] = arr[j][i]
      } else {
        if (i == 0 || j == 0) {
          arr[i][j] = 1
        } else {
          arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
        }
      }
    }
  }
  return arr[m - 1][n - 1]
}
```
