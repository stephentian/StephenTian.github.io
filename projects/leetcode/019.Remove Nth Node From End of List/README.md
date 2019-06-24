# 删除链表的倒数第N个节点(Remove Nth Node From End of List)

## Description

给定一个链表, 删除链表的倒数第 n 个节点, 并且返回链表的头节点

示例：
```
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

## Help

```
Definition for Single-linked list
function ListNode(val) {
  this.val = val
  this.next = null
}

```

## Solutions

#### Answer-1
执行用时 :88 ms, 在所有 JavaScript 提交中击败了85.03%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了64.33%的用户

- leetcode-cn


```
var removeNthFromEnd = function(head, n) {
    // 先指针先走n-1步
    let fast = head;
    for(let i=1; i<=n-1; i++) {
      fast = fast.next;
    }
    let slow = head;
    // 缓存要删除结点的前一个结点
    let pre = null;
    while(fast.next) {
      pre = slow;
      fast = fast.next;
      slow = slow.next;
    }
    // 如果要删除的结点是第一个结点的话，则直接返回slow.next
    if(pre === null) {
      return slow.next;
    }
    else {
      pre.next = slow.next;
    }
    return head;
};
```
