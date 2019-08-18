# Vue vs React

## 区别

其实技术选型没有绝对的对与错，只是考虑的因素不同。

#### 两者本质的区别

Vue - 本质是 MVVM 框架， 由 MVC 发展来的
React - 本质是前端组件化框架
但不妨碍它们实现相同的功能

#### 模板的区别
Vue - 使用模板，指令(最初由 angular 提出)
React - 使用 JSX

模板语法上，我更倾向于 React
```
// React:
// 只需要知道一点， {} 里放 js 表达式
<div>
  { ok ? <h1>Yes</h1> : <h1>No</h1>}
</div>

// Vue:
// 需要学习 vue 语法
<div>
  <h1 v-if="ok">Yes</h1>
  <h1 v-else>Yes</h1>
</div>
```

模板分离上，我更倾向于 Vue
```
// React:
class Todo extends Component {
  constructor(props) {
    super(props)
  }
  // render 里模板和 JS 混在一起，未分离
  render() {
    return (
      <div></div>
    )
  }
}

// Vue:

```

#### 组件化的区别

React 本身就是组件化，没有组件化就不是 React
Vue 也支持组件化，不过是在 MVVM 上的扩展

组件化，我更倾向于 React

## 共同点

1. 都支持组件化；
2. 都是数据驱动视图。


##
