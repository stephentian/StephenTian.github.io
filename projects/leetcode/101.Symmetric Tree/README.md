# 101. Symmetric Tree

> 对称二叉树

## 解答

### 答案一

递归

```js
var isSymmetric = function (root, c) {
  return (
    (c = (l, r) =>
      (l === null && r === null) ||
      (l && r && l.val === r.val && c(l.left, r.right) && c(r.left, l.right))),
    !!c(root, root)
  )
}
```
