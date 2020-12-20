# 101. Symmetric Tree

> 对称二叉树

## 解答

### 答案一

递归

执行用时：100 ms, 在所有 JavaScript 提交中击败了 40.02%的用户
内存消耗：40 MB, 在所有 JavaScript 提交中击败了 27.93%的用户

```js
var isSymmetric = function (root) {
  return (
    (c = (l, r) =>
      (l === null && r === null) ||
      (l && r && l.val === r.val && c(l.left, r.right) && c(r.left, l.right))),
    !!c(root, root)
  )
}
```

### 答案二

BFS

执行用时：112 ms, 在所有 JavaScript 提交中击败了 13.45%的用户

内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了 47.05%的用户

```
var isSymmetric = function(root) {
  let stack = []
  if  (!root || root.length === 0) return true

  stack.push(root.left, root.right)
  while(stack.length > 0) {
    const right = stack.pop()
    const left = stack.pop()
    if (left && right && left.val === right.val) {
      //左左节点和对称右右节点入栈
      stack.push(left.left)
      stack.push(right.right)
      //左右节点和对称右左节点入栈
      stack.push(left.right)
      stack.push(right.left)
    } else if (left === null && right === null) {
      continue
    } else {
      return false
    }
  }
  return true
}
```
