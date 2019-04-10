# setState

React 中 setState 和 vue 修改属性是功能相似的 API

## vue 修改属性也是异步的

### vue 的渲染流程

- 解析模板成 render 函数
- 响应式开始监听
- 首次渲染, 显示页面, 且绑定依赖
- data 属性变化, 触发 rerender

在第四步中, 修改属性, 被响应式的 set 监听到.
set 执行 updateComponent(异步)
