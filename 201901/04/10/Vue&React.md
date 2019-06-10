# React vs Vue

## 要点

- 两者本质区别
- 模板和组件化的区别
- 两者的共同点

技术选型因素多, 不能按照自己的意愿做.

## 两者的本质区别

- vue 本质是 MVVM 框架, 由 MVC 发展而来
- React 本质是前端组件化框架, 有后端组件化发展而来
- 但是他们都能实现相同的功能, 只是走的路不同

## 模板的区别

- vue 使用模板(最初由 angular 提出)
- React 使用 JSX
- 模板语法上, 更倾向于 JSX
- 模板分离上, 更倾向于 vue

```
Vue:
<div>
  <h1 v-if="ok">Yes</h1>
  <h1 v-else>No</h1>
</div>

React:
<div>
  { ok? <h1>Yes</h1> : <h1>No</h1>}
</div>
```

Vue 要学各种指令, React 只要知道 {} 里是用 JS 表达式就行
故觉得 React 模板语法好

```
Vue:
<template>
  <div></div>
</template>

React:
class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div></div>
    )
  }
}
```

React 中模板分离程度不够, 模板和 JSX 混在一起, 未分离

- **模板应该和 JS 逻辑分离**
- **开放封闭原则**

## 组件化的区别

- React 本身就是组件化, 没有组件化就不是 React
- Vue 也支持组件化, 不过是在 MVVM 上的扩展
- 对于组件化, 更加倾向于 React, 做得更彻底

## 两者的共同点

- 都支持组件化
- 都是数据驱动视图
