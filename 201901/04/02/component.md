# 组件
> Component

## 组件化的理解

- 组件的封装
- 组件的复用

### 1. 组件的封装

- 视图
- 数据
- 变化逻辑(数据驱动视图变化)

```
class Todo extends React.Component {
  constructor(props) {
    super(props)
    // 数据
    this.state = {
      list: []
    }
  }
  // 变化逻辑
  addTitle(title) {
    const currentList = this.state.list
    this.setState({
      list: currentList.concat(title)
    })
  }
  render() {
    return (
      // 视图
      <div>
        <Input addTitle={this.addTitle.bind(this)} />
        <List data={this.state.list} />
      </div>
    )
  }
}
```

### 2. 组件复用

- props 传递
- 复用

```
import Input from './input'
import List from './list'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  render() {
    return (
      // 视图
      <div>
        <Input addTitle={this.addTitle.bind(this)} />
        // 组件复用的
        <List data={this.state.list} />
        <List data={this.state.list} />
        <List data={this.state.list} />
      </div>
    )
  }
}

// List
class List extends Component {
  constructor(props) {
    super(props)
  }
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
}

```
