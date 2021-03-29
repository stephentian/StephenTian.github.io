## Merge Two Sorted Lists

> 合并两个有序链表

## 解答

### 1. l1 和 l2 为链表

执行用时：88 ms, 在所有 JavaScript 提交中击败了 88.23%的用户

内存消耗：39.2 MB, 在所有 JavaScript 提交中击败了 80.30%的用户

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2
    if(l2 === null) return l1
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};
```
