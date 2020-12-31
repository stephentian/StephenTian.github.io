# 104. Maximum Depth of Binary Tree

> 二叉树的最大深度

## 解答

### 答案一

递归

执行用时：
80 ms, 在所有 JavaScript 提交中击败了 96.35%的用户

内存消耗：40.3 MB, 在所有 JavaScript 提交中击败了 82.77%的用户

```js
var maxDepth = function (root) {
  if (!root) return 0

  let leftLen = maxDepth(root.left)
  let rightLen = maxDepth(root.right)
  return Math.max(leftLen, rightLen) + 1
}
```
