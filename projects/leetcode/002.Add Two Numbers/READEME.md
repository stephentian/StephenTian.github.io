# 两数相加


## 描述

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

#### 提示

```
Definition for singly-linked list

function listNode(val) {
  this.val = val
  this.next = null
}
```


## 解题答案


### 答案一

- leetcode-cn

执行用时 :188 ms, 在所有 JavaScript 提交中击败了59.92%的用户
内存消耗 :38.8 MB, 在所有 JavaScript 提交中击败了31.07%的用户

```
var addTowNumbers = function (l1, l2) {
  function ListNode(val) {
    this.val = val
    this.next = null
  }
  var List = new ListNode(0)
  var head = List
  var sum = 0
  var carry = 0
  while(l1 !== null || l2 !== null || sum > 0) {
    if(l1 !== null) {
      sum = sum + l1.val
      l1 = l1.next
    }
    if(l2 !== null) {
      sum = sum + l2.val
      l2 = l2.next
    }
    if(sum >= 10) {
      carry = 1
      sum = sum - 10
    }
    head.next = new listNode(sum)
    head = head.next
    sum = carry
    carry = 0
  }
  return List.next
}
```
