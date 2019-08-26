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
