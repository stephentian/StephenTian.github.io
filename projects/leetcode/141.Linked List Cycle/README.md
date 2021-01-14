# 141. Linked List Cycle

> 环形链表

## 解答

### 答案一

执行用时：96 ms, 在所有 JavaScript 提交中击败了 54.16%的用户

内存消耗：40.1 MB, 在所有 JavaScript 提交中击败了 63.23%的用户

```js
var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (fast == slow) return true
  }
  return false
}
```
