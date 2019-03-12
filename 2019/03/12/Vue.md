## Vue

### extend 作用

扩展组件, 生成一个构造器, 通常会与 $mount 一起使用

```
// 创建组件构造器
let Component = Vue.extend({
  template: '<div>test</div>'
})

// 挂载到 #app 上
new Component().$mount('#app')

// 还可以用来扩展已有组件
let SuperComponent = Vue.extend(Component)
new SuperComponent({
  created() {
    console.log(1)
  }
})

new SuperComponent.$mount('#app')
```


### mixin 和 mixins 区别

**mixin** 用于全局混入, 会影响到每一个组件, 通常插件都是这样做初始化的
```
Vue.mixin({
  beforeCreate() {
    // ...
    // 这种方式会影响到每个组件的 beforeCreate 钩子函数
  }
})
```

虽然文档不建议我们在应用中使用 mixin, 当不滥用的话还是有帮助的;
比如全局混入封装好的 ajax 或者一些工具函数等.

**mixins** 是最常使用的扩展组件的方式. 
如果多个组件中有相同的业务逻辑, 就可以将这些逻辑剥离, 通过 mixins 混入代码, 比如上拉下拉加载数据这种逻辑等.

mixins 混入的钩子函数会先于组件的钩子函数执行, 并且在遇到同名选项是也会有选择性的进行合并.

组件内的覆盖 mixins 中的数据, 或者添加进去.

### computed 和 watch 区别

**computed** 是计算属性, 依赖其他属性计算值, 并且 computed 有缓存, 只有计算值变化才会返回内容.

**watch** 监听值的变化就会执行回调, 在回调中可以进行一些逻辑操作.

另外 computed 和 watch 还都支持对象的写法

```
vm.$watch('obj', {
  // 深度遍历
  deep: true,
  // 立即触发
  immediate: true,
  handler: function(val, oldVal) {}
})

var vm = new Vue({
  data: { a: 1 },
  computed: {
    aPlus: {
      // this.aPlus 触发
      get: function() {
        return this.a + 1
      },
      set: function(v) {
        this.a = v - 1
      }
    }
  }
})
```

### keep-alive 作用

在组件切换时, 为了防止一些组件的状态多次渲染, 就可以使用 keep-alive 包裹需要缓存的组件.

keep-alive 组件中, 有两个独有的生命周期钩子函数, 分别是 activated 和 deactivated.

组件在切换时不会进行销毁, 而是缓存到内存中, 执行 deactivated 函数, 命中缓存渲染后执行 activated 钩子函数.

### v-show 和 v-if 区别

**v-show** 只在 `display: none` 和 `display: block` 之间切换,
无论什么初始条件都会被渲染出来, 后面只需切换 css, DOM 一直保留.
初始消耗大一些, 切换开销小, 适用于频繁切换的场景.

**v-if** 当初始属性为 false 时, 组件就不会被渲染, 直到条件为 true.
并且切换条件会触发 销毁/挂载组件.
可以减少整个页面的初始渲染开销.

### data 什么时候可以使用对象

组件复用时, 所有组件都会共享 data, 如果 data 是对象的话, 会造成一个组件修改 data 以后影响其他组件, 
所以要将 data 写成函数, 每次用到就调用一次函数获得新的数据.

当我们使用 new Vue() 的方式时, 无论我们将 data 设置为对象还是函数都可以,
以为 new Vue() 的方式是生成一个根组件, 该组件不会复用, 也就不存在共享 data 的情况了.
