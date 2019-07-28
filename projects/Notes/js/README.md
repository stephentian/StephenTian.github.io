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


## 变量类型隐式转换

下面代码的输出是什么?

```
function sum(a, b) {
  return a + b;
}

sum(1, "2")

A: NaN
B: TypeError
C: "12"
D: 3
```

答案：
```
C

JavaScript是一种动态类型语言：我们没有指定某些变量的类型。 在您不知情的情况下，值可以自动转换为另一种类型，称为隐式类型转换。 强制从一种类型转换为另一种类型。
在让数字类型（1）和字符串类型（'2'）相加时，该数字被视为字符串。 我们可以连接像“Hello”+“World”这样的字符串，所以这里发生的是“1”+“2”返回“12”。
```


## 运算符

#### 运算符位置

下面代码的输出是什么?
```
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

A: 1 1 2
B: 1 2 2
C: 0 2 2
D: 0 1 2
```

答案：
```
C

后缀一元运算符++：
返回值（返回0）
增加值（数字现在是1）

前缀一元运算符++：
增加值（数字现在是2）
返回值（返回2）
```
