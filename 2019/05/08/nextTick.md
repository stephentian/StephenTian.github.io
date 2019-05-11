# nextTick

nextTick 和 setImmediate 区别和联系
nextTick 把回调函数放在当前执行栈的底部
setImmediate 把回调函数放在当前事件队列的尾部

推荐使用 setImmediate
nextTick 会导致死循环，执行栈越积越多
