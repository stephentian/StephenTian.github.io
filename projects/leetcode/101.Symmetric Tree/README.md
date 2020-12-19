# 101. Symmetric Tree

> 对称二叉树

## 解答

### 答案一

递归

执行用时：100 ms, 在所有 JavaScript 提交中击败了 40.02%的用户
内存消耗：40 MB, 在所有 JavaScript 提交中击败了 27.93%的用户

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
