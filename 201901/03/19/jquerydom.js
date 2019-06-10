const data = [
  {
    name: '张三',
    age: '31',
    addr: '北京'
  }, {
    name: '李四',
    age: '20',
    addr: '上海'
  }, {
    name: '王五',
    age: '11',
    addr: '广州'
  }
]

// 渲染函数
function render(data) {
  const $container = $('#container')

  // 清空现有内容, 非常重要!

  $container.html('')

  // 拼接 table

  let $table = $('<table>')
  $table.append('<tr><td>name</td><td>age</td><td>addr</td></tr>')
  data.forEach(function (item) {
    $table.append('<tr><td>' + item.name + '</td><td>' + item.age +
      '</td><td>' + item.addr + '</td></tr>')
  })

  // 渲染到页面
  $container.append($table)
}

// 修改信息
$('#btn-change').click(function () {
  data[1].age = 30
  data[2].addr = '深圳'
  render(data)
})

// 初始化渲染
render(data)

const div = document.createElement('div')
let item, result = ''
for (item in div) {
  result += '|' + item
}
// console.log(div)
console.log(result)
// 打印出很多属性
// 默认创建的节点其实有很多节点, 所以尽量少操作 dom.
