# JSX

### JSX 语法

- html 形式
- 引入 JS 变量和表达式
- if...else
- 循环
- style 和 className
- 事件

```
class App extend Compoent {
  render() {
    return (
      const name = 'stephen'
      const show = true
      const list = [1, 2, 3, 4, 5, 6]
      const styles = {
        fontSize: '40px',
        color: 'blue'
      }
      // html 形式
      <div>
        { ... }
        // JS 变量
        <p>{name}</p>
        <p>{ (name === 'stephen').toString() }</p>
        // 判断
        {show?<p>是否显示{name}</p>:''}
        // 循环
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
        // style 和 className
        <p style={styles} className='blue-p'>this is a p</p>
      </div>
    )
  }
}
```

### JSX 如何运行

JSX无法被浏览器解析，那么是如何在浏览器运行的呢?
类似 Vue 需要先解析.

```
<!-- JSX 代码 -->
var profile = 
<div>
  <img src="" className="profile" />
  <h3>{[user.firstName, user.lastName].join(' ')}</h3>
</div>
```

```
// 解析结果
var profile = 
React,createElement("div", null, 
  React.createElement("img", { src: "", className: "profile" }),
  React.createElement("h3", null, [user.firstName, user.lastName].join(" "))
)
```

```
// React.createElement()
React.createElement("div", { id: "" }, child1, child2, child3)
React.createElement("div", { id: "" }, [...])

```
