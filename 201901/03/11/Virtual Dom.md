# Virtual DOM
> 虚拟 DOM

#### 什么是 Virtual DOM

通过 js 来模拟 DOM

```
const ul = {
  tag: 'ul',
  props: {
    class: 'list'
  },
  children: {
    tag: 'li',
    children: '1'
  }
}
```

对应的 DOM 是：
```
<ul class="list">
  <li>1</li>
</ul>
```

Virtual DOM 就是通过 JS 对象来渲染对应的 DOM

#### Virtual DOM 的优势

1. 将 Virtual DOM 作为一个兼容层, 让我们能对非 Web 端的系统, 实现跨端开发
2. 通过 Virtual DOM 我们可以渲染到其他平台, 实现 SSR, 同构渲染等
3. 实现组件的高度抽象化
