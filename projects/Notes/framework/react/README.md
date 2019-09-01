# React


## React 生命周期

挂载阶段
 - constructor
 - getDerivedStateFromPorps
 - render
 - componentDidMount

更新阶段
 - getDerivedStateFromPorps
 - shouldComponentUpdate
 - render
 - getSnapshotBeforeUpdate

卸载阶段
 - componentWillUnmount


## React 请求放哪个生命周期中

以前：
认为在 componentWillMount 中进行异步请求，避免白屏。
但是在服务器渲染的话，会执行两次请求，一次在服务端一次在客户端。
其次，`React Fiber` 重写后，`componentWillMount` 可能在一次渲染中多次调用。

官方推荐：`componentDidMount`
有特殊需要提前请求，也可以在 `constructor` 中请求。


## setState到底是异步还是同步

摘自：https://www.cxymsg.com/guide/react.html#setstate%E5%88%B0%E5%BA%95%E6%98%AF%E5%BC%82%E6%AD%A5%E8%BF%98%E6%98%AF%E5%90%8C%E6%AD%A5

先给出答案: 有时表现出异步,有时表现出同步。

## React 组件之间的通信

1. props
2. props + 回调
3. Context(全局)
4. 发布订阅模式
5. 全局状态管理工具：Redux、Mobx
