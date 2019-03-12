## 实现双向绑定

- 发布-订阅者模式
- 脏值检查
- 数据劫持

要实现 MVVM 的双向绑定, 就必须实现以下几点：
1. 实现一个数据监听器 Observer, 能够对数据对象的所有属性进行监听, 如有变动可拿到最新值并通知订阅者
2. 实现一个指令解析器 Compile, 对每个元素节点的指令进行扫描和解析, 根据指令模板替换数据, 以及绑定相应的更新函数
3. 实现一个 Watcher, 作为连接 Observer 和 Compile 的桥梁, 能够订阅并收到每个属性变动的通知, 执行指令绑定的响应回调函数.
4. mvvm 入口函数, 整合上面三者.

### Oberver

利用 `Object.defineProperty` 来监听属性变动
将需要 observe 的数据进行递归遍历, 包括子属性对象的属性, 都加上 setter 和 getter
这样的话, 给对象的某个值赋值就会触发 setter, 达到监听数据变化的目的

相关的代码：

```
var data = {name: 'kindeng'};
observe(data);
data.name = 'dmq'; // 哈哈哈，监听到值变化了 kindeng --> dmq

function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    // 取出所有属性遍历
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    });
};

function defineReactive(data, key, val) {
    observe(val); // 监听子属性
    Object.defineProperty(data, key, {
        enumerable: true, // 可枚举
        configurable: false, // 不能再define
        get: function() {
            return val;
        },
        set: function(newVal) {
            console.log('哈哈哈，监听到值变化了 ', val, ' --> ', newVal);
            val = newVal;
        }
    });
}
```
