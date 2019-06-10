# setState

## setState 的异步

```
addTitle(title) {
  const currentList = this.state.list
  console.log(this.state.list) // ['a', 'b']
  this.setState({
    list: currentList.concat(title) // 'c'
  })
  console.log(this.state.list) // ['a', 'b']
}
```

### setState 为何需要异步

- 可能一次执行多次 setState
- 无法规定, 限制用户如何使用 setState
- 没必要每次 setState 都要重新渲染, 考虑性能
- 即便每次重新渲染, 用户也看不到中间效果
- 只看最后结果即可
