# Vue

## Virtual DOM

## DOM diff

Vue 采用了 virtual DOM(虚拟 DOM), 而 vue 更新的方式就是对比 newNode 和 oldNode 的差异, 然后进行变化.
对比两个树的最小不同的时间复杂度是O(n3), 这个复杂度相对来说是慢的,
vue 就使用了一个 diff 算法, 大大减少了时间.
该算法来源于 snabbdom，复杂度为O(n)

特点：
比较只会在同层级进行, 不会跨层级比较。


diff 的过程就是不断的调用 `patch` 函数

`patch` 函数有两个参数, `vnode` 和 `oldVnode`, 也就是新旧两个虚拟节点
`patch` 函数有两种用法,
`patch(container, vnode)` 和 `patch(vnode, newVnode)`
`patch` 里的核心逻辑是 `createElement` 和 `updateChildren`
