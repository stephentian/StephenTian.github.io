# 155. Min Stack

> 最小栈

## 解答

### 答案一

```js
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.min = 0
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (x < this.min) {
    this.min = x
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.lengtg - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```
