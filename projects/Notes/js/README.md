# 刷题笔记

## 箭头函数

下面代码输出什么？

```
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();

A: 20 and 62.83185307179586
B: 20 and NaN
C: 20 and 63
D: NaN and 63
```

答案：
```
B

对于箭头函数, this 指向它所在的上下文的环境, 与普通函数不同！
这意味着当我们调用perimeter时，它不是指向shape对象，而是指其定义时的环境（window）。
没有值radius属性，返回undefined。
```



## 函数也是对象

当我们这样做会发生什么？

```
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";

A: Nothing, this is totally fine!
B: SyntaxError. You cannot add properties to a function this way.
C: undefined
D: ReferenceError
```

答案：
```
A

这在JavaScript中是可能的，因为函数也是对象！（原始类型之外的所有东西都是对象）
```
