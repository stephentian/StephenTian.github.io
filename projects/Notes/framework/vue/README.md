# Vue

## Vue 的响应式原理

当 vue 创建一个实例时, vue 会遍历 data 里的属性，使用 Object.defineProperty 给它们添加 getter/setter 属性。
当被调用时，即触发 getter, Vue 会去 `Watcher` 收集依赖的所有 data。
当被改动时，即触发 setter, Vue 会通知(Notify) `Watcher`, 然后 `Watcher` 去调用 render 函数更新相关组件。

## 为什么 Vue 还需要虚拟 DOM 进行 diff 检测差异?

现代前端框架有两种方式侦测变化,一种是 pull 一种是 push。

Pull: 代表就是 React。
React 要调用 `setState` 去手动更新，然后 React 会一层一层的虚拟 DOM Diff 找出差异，
然后 Patch 到 DOM 上。就是一开始不知道哪里变化了，需要 pull 下最新的代码，才知道哪里变化了。

Push: 代表就是 Vue 的响应式系统。
当 Vue 实例化时会对数据 data 进行依赖的收集，一旦数据发生变化，响应式系统就会得知。
不过缺点是绑定一个数据就需要一个 `Watcher`，绑定的数据很多，就会产生大量的 `Wather`，会带来内存和依赖追踪的开销。所以 Vue 的使用是选择中小型项目。
在组件之间是进行 push 的方式侦测，但是侦测组件内部，使用 虚拟 DOM 检查差异性能比较好。而虚拟 DOM Diff 则是 pull 操作。
Vue 则是 push + pull 结合的方式侦测变化。

## 组件中 name 选项作用

1. 允许组件模板递归调用自身。
2. 项目使用 keep-alive 是，可使用组件的 name 进行过滤
3. 便于调试，有名字的组件有更友好的警告信息，搭配 `dev-tools`。

## 生命周期

 - beforeCreate
 - created
 - beforeMount
 - mounted
 - beforeUpdate
 - updated
 - beforeDestroy
 - destroyed

####
