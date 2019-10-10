# TypeScript

这是对 ts 官方文档的一份笔记，或者说总结吧，详细还是看官方文档：[typescript 手册指南](https://www.tslang.cn/docs/handbook/basic-types.html`)

## 学习 TS 目的

1. 有类型系统，弥补了 js 弱类型语言的缺陷。
2. 扩充知识面，现在都是 ts 流行的时候，而且 vue 源码也是 ts, 不学一手 ts, 连源码都看不懂。

## 目录

 1. [类型注解](#类型注解)
 2. [类型](#类型)
 3. [变量声明](#变量声明)

## 类型注解

ts 为函数或者变量会做类型约束，比如我们希望  `greeter` 接收一个类型为 `string` 的参数，当接收的参数类型不对时会报错。

```javascript
function greeter(person: string) {
  return "name: " + person
}

// right
// let user = 'Stephen'
// greeter(user)

// false
// let user = []
// greeter(user)
```

## 类型

接下来就要弄清楚支持哪些类型。其实 ts 和原生 js 支持的类型差不多。但是注意不要使用如下类型 `Nubmer`, `String`, `Boolean` 和 `Object`。

### boolean

```typescript
let isDone: boolean = false
```

### number

ts 里的所有数字都是浮点数。除了支持十进制和十六进制字面量, 还支持二进制和八进制字面量。

```typescript
let decLiteral: number = 1
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744
```

### string

可以和 js 一样使用双引号和单引号，还可以使用模板字符串，来定义多行文本和内嵌表达式。

```javascript
let age: number = 18
let sentence: string = `I am ${age} years old`
```

### 数组

有两种方法定义数组

```typescript
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
```

### 元组 Tuple

元组类型允许表示一个一直元素数量和类型的数组，各元素的类型可以不同。

```typescript
let x: [string, number]

// OK
// x = ['hello', 1]

// Error
// x = [1, 'hello']
```

访问一个越界元素，可以使用*联合类型*

```typescript
x[3] = 'world' // 类型可以是 string || number
x[5] = true // Error, 类型不匹配
```

### 枚举

`enum` 枚举类型是对 js 标准类型的一个补充。使用枚举类型可以为一组数值赋予友好的名字。

```typescript
enum Color {Red, Green, Blue}
let c:Color = Color.Green
```

默认情况下，从 0 开始为元素编号。也可以手动指定成员的数值。

```typescript
enum Color {Red = 1, Green, Blue}
let c:Color = Color.Green
```

通过枚举的值获得名字

```typescript
let colorName: string = Color[2]
console.log(colorName)
```

### any

若不清楚变量类型。这些值可能来自动态内容，比如用户输入或者第三方库。这种情况我们可以使用 `any` 类型来标记这些变量。

```typescript
let notSure: any = 4
notSure = '111'
notSure = false
```

未知数组元素类型

```typescript
let list: any[] = [1, true, '111']
let list2: Array<any> = []
```

### void

void 和 any 相反，它表示没有任何类型。当一个函数没有返回值时，其返回值的类型是 void。
如果一个变量设置为 void，那它只能赋值为 undefined 和 null.

```typescript
function warnUser(): void {
  console.log('void type');
}

let unusable: void = undefined
```

### undefined 和 null

### never

never 表示一些永不存在的值的类型。
例如： never 用于总是会抛出异常或者根本就不会有返回值的函数或箭头函数的返回值类型。

### object

object 表示非原始类型，也就是除了 `number`, `string`, `boolean`, `symbol`, `null`, `undefined` 之外的类型。

### 类型断言

类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。 ts 会假设你已经进行了必要的检查。

类型断言的两种方式：

```typescript
// “尖括号” 语法
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

// as 语法
let strLength2: number = (someValue as string).length
```

如果在 ts 中使用 jsx, 那只有 as 类型断言是被允许的。

## 变量声明

### var

```javascript
function f() {
  var a = 1
  a = 2
  var b = g()
  a = 3
  return b
  function g() {
    return a
  }
}
f()
```

### let

let 声明一个变量时，使用的是块级作用域或词法作用域。

```typescript
// if
function f(input: boolean) {
  let a = 100
  if (input) {
    let b = a + 1
    return b
  }
  // Error: 'b' doesn't exist here
  // return b
}

// catch
try {
  throw 'oh No'
} catch(e) {
  console.log('error');
}
// Error: 'e' doesn't exist here
console.log(e);
```

### const 声明

const 与 let 有相同的作用域规则，但是不能对它们重新赋值。

## 接口

ts 的核心之一：对值具有的结构进行类型检查。

### 接口如何工作

```typescript
function printLabel(labelObj: { label: string }) {
  console.log(labelObj.label);
}

let myObj = {
  size: 10
  label: 'Size 10 Object'
}
printLabel(myObj)
```

ts 类型检查器会检查 printLabel 的调用。
printLabel 传入一个对象参数，并要求这个对象参数有一个名为 label, 类型为 string 的属性。

接口就是为这些类型定义的契约。

```typescript
interface LabelledValue {
  label: string
}

function printLabel(labelObj: { label: string }) {
  console.log(labelObj.label);
}

let myObj = {
  size: 10
  label: 'Size 10 Object'
}
printLabel(myObj)
```
