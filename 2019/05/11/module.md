# module

node.js 实现的模块化

node.js 通过 require 方法加载其他模块

这个加载是同步的(因为有返回值, 异步的话需要回调)

### 为什么同步慢，还要使用同步呢？

require是Node中少数几个同步I/O操作之一。

因为经常用到模块，并且一般都在文章顶端引入，所以把require做成同步，有助于代码整洁有序，增强可读性。

但是，I/O密集的地方尽量不要用require。所有的同步，都会阻塞Node，直到调用完才能做其他事。

比如，在运行一个http服务，如果在每个请求上都用到require，就会遇到性能问题。

所以，require和其他同步操作通常放在程序最初加载的位置。


### 执行步骤

```
var a = require('./a.js')
```


- 1. 找到这个文件
- 2. 读取这个文件模块的内容
- 3. 把它封装到一个函数里执行
- 4. 执行后把模块的 module.exports 对象赋值给 a


### require

```
var require = internalModule.makeRequireFunction.call(this)
var args = [this.exports, require, this, filename]

(function(exports, require, module, __filename) {
  .... // 代码段
})()
```
