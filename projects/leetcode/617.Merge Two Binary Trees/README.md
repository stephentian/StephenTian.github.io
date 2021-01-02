# 617. Merge Two Binary Trees

> 合并二叉树

## 解答

### 答案一

执行用时：128 ms, 在所有 JavaScript 提交中击败了 62.04%的用户

内存消耗：45.6 MB, 在所有 JavaScript 提交中击败了 12.37%的用户

```js
var mergeTrees = function (t1, t2) {
  return t1 || t2
    ? {
        val: (t1 && t1.val) + (t2 && t2.val),
        left: mergeTrees(t1 && t1.left, t2 && t2.left),
        right: mergeTrees(t1 && t1.right, t2 && t2.right),
      }
    : null

  if (!t1 && !t2) return null
  if (t1 && t2.val === null) {
    return t1
  }
  if (t1.val === null && t2) {
    return t2
  }
  t1.val += t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t1.right = mergeTrees(t1.right, t2.right)

  return t1
}
```
