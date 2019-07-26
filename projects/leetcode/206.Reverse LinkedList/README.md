# 反向链表

## 解答

#### 答案一

- leetcode-cn

执行用时 :88 ms, 在所有 JavaScript 提交中击败了69.12%的用户
内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了14.78%的用户

```
var reverseList = function(head) {
    let list = head
    let a = head
    let b = null
    if  (a === null) return null
    while(a.next !== null) {
        b = a.next
        a.next = b.next
        b.next = list
        list = b
    }
    return list
};
```
