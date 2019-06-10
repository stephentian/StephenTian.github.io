## Vue 进阶知识

### 响应式原理

Vue 内部使用了 Object.defineProperty() 来实现双向绑定, 这个函数可以监听到 set 和 get 事件.

```
function observe(obj) {
  // 判断类型
  if(!obj || typeof obj !== 'object') {
    return
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

function defineReactive(obj, key, val) {
  // 递归子属性
  observe(val)
  Object.defineProperty(obj, key, {
    // 可枚举
    enumerable: true,
    // 可配置
    configurable: true,
    get: function reactiveGetter() {
      console.log('get value')
      return val
    },
    set: function reactiveSetter(newVal) {
      console.log('change value')
      val = newVal
    }
  })
}

let data = { name: 'stephen' }
observe(data)
let name = data.name
data.name = 'aaa'

```
