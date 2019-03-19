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
data.unshift({
  name: '姓名',
  age: '年龄',
  addr: '地址'
})

var container = document.getElementById('container')
var btnChange = document.getElementById('btn-change')

var snabbdom = window.snabbdom

var patch = snabbdom.init([
  snabbdom_class,
  snabbdom_props,
  snabbdom_style,
  snabbdom_eventlisteners
])

var h = snabbdom.h

var vnode
function render(data) {
  var newVnode = h('table', {}, data.map(function (item) {
    // 获取所有的 td
    var tds = []
    var i
    for (i in item) {
      if (item.hasOwnProperty(i)) {
        tds.push(h('td', {}, [item[i] + '']))
      }
    }
    // 返回 tr
    return h('tr', tds)
  }))
  if (vnode) {
    // re-render
    patch(vnode, newVnode)
  } else {
    // 初次渲染
    patch(container, newVnode)
  }
  vnode = newVnode
}

// 初次渲染
render(data)

btnChange.addEventListener('click', function () {
  data[1].age = 30
  data[2].addr = '深圳'
  render(data)
})
