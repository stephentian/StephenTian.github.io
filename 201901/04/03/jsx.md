# JSX

## JSX 解析

```
render() {
  const list = this.props.data
  return (
    <ul>
      {
        list.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  )
}

// 实际为
function render() {
  const list = this.props.data
  return React.createElement(
    "ul",
    null,
    list.map((item, index) => {
      return React.createElement(
        "li",
        { key: index },
        item
      )
    })
  )
}
```

- JSX 其实是语法糖
- 开发环境会将 JSX 编译成 JS 代码
- JSX 的写法大大降低了学习成本和编程工作量
- 同时, JSX 也会增加 debug 成本


## JSX 独立的标准

- JSX 是 React 引入的, 但是不是 React 独有的
- React 已经将它作为一个独立标准开放, 其他项目也可使用
- React.createElement 是可以自定义修改的
- 说明：本身功能已经完备, 和其他标准扩展性没问题
