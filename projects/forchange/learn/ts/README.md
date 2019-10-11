# TypeScript

这是对 ts 官方文档的一份笔记，或者说总结吧，详细还是看官方文档：[typescript 手册指南](https://www.tslang.cn/docs/handbook/basic-types.html`)

## 学习 TS 目的

1. 有类型系统，弥补了 js 弱类型语言的缺陷。
2. 扩充知识面，现在都是 ts 流行的时候，而且 vue 源码也是 ts, 不学一手 ts, 连源码都看不懂。

## 目录

 1. [类型注解](#类型注解)
 2. [类型](#类型)
 3. [变量声明方式](#变量声明方式)
 4. [接口](#接口)
 5. [类](#类)
 6. [函数](#函数)

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

## 变量声明方式

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
接口不会转换为 js, 它们的唯一目的是帮助开发者。

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

### 可选属性

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。

```typescript
interface SquareConfig {
  color?: string
  width?: number
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare = createSquare({color: 'red'})
```

可选属性的接口和普通接口定义差不多，只是在可选属性名字后面加一个 `?` 符合。  
可选属性好处之一是可以对可能存放的属性进行预定义，第二是可以捕获不存在属性时的错误。比如把 color 名写错，会有一个错误提示。

### 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。在属性名前用 `readonly` 来指定可读属性：

```typescript
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
p1.x = 1 // Error
```

ts 具有 `ReadonlyArray<T>` 类型，它与 `Array<T>` 相似：

```typescript
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

ro[1] = 10 // Error
a = ro // Error, 把整个 ReadonlyArray 赋值给一个普通数组也不可以

// 不过可以使用类型断言重写
a = ro as number[]
```

`readonly` vs `const`

判断使用哪个要看把定义的是作为一个变量还是作为一个属性。作为变量的话用后者，作为属性的话用后者。

### 额外的属性检查

如果接口使用可选参数，但是传入参数拼写有错的话， ts 还是会报 bug。  
对象字面量会被特殊对待而且会经过 *额外属性检查*，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

```typescript
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string area: number} {
  // ...
}

// error: 'colour' not expected in type 'SquareConfig'
let mySquare = createSquare({ colour: 'red', width: 10 })

// 绕开检查非常简单，
// 第一个是使用 类型断言
let mySquare1 = createSquare({ opacity: 0.5, width: 10 } as SquareConfig)

// 第二个，也是最佳方式是添加一个字符串索引签名
// interface SquareConfig {
//   color?: string
//   width?: number
//   [propName: string]: any
// }

// 第三种，是将这个对象赋值给另一个变量，因为对象字面量会被检查，变量不会
let squareOptions = { colour: 'red', width: 10 }
let mySquare = createSquare(squareOptions)
```

### 接口函数类型

接口可以描述 javascript 对象的各种类型。除了描述带属性的普通对象外，接口也可以描述函数类型。

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  let result = source.search(subString)
  return result > -1
}

// 函数参数名不需要和接口定义的名字相匹配
let mySearch1: SearchFunc
mySearch1 = function(src: string, sub: string): boolean {
  let result = src.search(sub)
  return result > -1
}

// 如果不想指定类型，ts 也会推断出参数类型
mySearch2 = function(src, sub) {
  let result = src.search(sub)
  return result > -1
}
```

### 可索引类型

与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型。

```typescript
interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]
```

**索引签名**: 上面的 StringArray 接口具有索引签名，表示当用 `number` 类型的值去索引 `StringArray` 会得到 `string` 类型的返回值。  
ts 支持两种索引签名，字符串和数字。

### 类类型

...

## 类

```typescript
// 基类， 超类
class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(dis: number = 0) {
    console.log(`Animal ${this.name}, moved ${dis} meters.`);
  }
}

// 派生类， 子类
class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  bark() {
    console.log('Woof! Woof!');
  }
  // 重写父类的方法
  move(dis = 5) {
    this.bark()
    super.move(dis)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(dis = 50) {
    console.log('Galloping...');
    super.move(dis)
  }
}

const dog  = new Dog('tiger')
let sam: Animal = new Horse('Sammy')
dog.move()

// 注意： 即使 sam 声明为 Animal 类型，但是因为其值是 Hrose，调用的还是 Horse 里重写的方法。
sam.move(20)
```

`extends` 创建了 `Animal` 的两个子类： `Dog` 和 `Horse`。

子类里有一个构造函数，函数里必须调用 `super()`， 它会执行基类的构造函数。  而且，在构造函数访问 `this` 属性之前，我们*一定*要调用 `super()`。  

### puclic, private 和 protected

**public**  
在 ts 中，成员都默认 public。
比如可以重写上面的 Animal 类：

```typescript
class Animal {
  public name: string
  public constructor(theName: string) { this.name = theName }
  public move(dis: number) {
    console.log(`distance is ${dis}`);
  }
}
```

**private**
成员被标记为 private 时，它就不能在声明它的类的外部访问。

```typescript
class Animal {
  private name: string
  constructor(theName: string) { this.name = theName }
}

new Animal('Cat').name // Error, name 是私有的
```

**protected**  
protected 修饰符与 private 修饰符类似，有一点不同就是 `protected` 成员在派生类（子类）仍然可以访问。

```typescript
class Person {
  protected name: string
  // 构造函数也可以标记成 protected
  protected constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误

// 不能在 Person 类外使用 name。
// 但是可以通过 Employee 类的实力方法访问，因为 Empoyee 是由 Person 派生而来。

let john = new Person('John')
// 错误
// Person 的构造函数是被保护的
```

### readonly

将属性设置为只读的。 只读属性**必须**在声明时或构造函数里被初始化。

```typescript
class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8
  constructor(theName: string) {
    this.name = theName
  }
}

let dad = new Octopus('Man with the 8 strong legs')
dad.name = 'man' // 错误！ name 是只读的
```

### 静态属性

类的静态属性，存在于类本身上面而不是类的实例。访问静态属性，要在静态属性前面加上类名。

```typescript
class Grid {
  static origin = { x:0, y: 0 }
  caculateDistanceFromOrigin(point: { x: number; y: number}) {
    let xDist = (point.x - Grid.origin.x)
    let yDist = (point.y - Grid.origin.y)
    return Math.sqrt(xDist * x Dist + yDist * yDist) / this.scale
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(1.5)
```

### 抽象类

抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。  
`abstract` 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```typescript
abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log('Department name: ' + this.name);
  }
  abstract printMeeting(): void // 必须在派生类实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and  Auditing') // 派生类的构造函数必须调用 super()
  }
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday ar 10am')
  }
  generateReports(): void {
    console.log('Generating accounting reports');
  }
}

let department: Deparment; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误， 不能创建一个抽象类实例
department = new AccountingDeparment(); // 允许对一个抽象子类进行实例化和赋值

department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```

## 函数

```typescript
// 有名的函数
function add(x, y) {
  return x + y
}

// 匿名函数
let myAdd = function(x,y) { return x + y }
```

### 函数类型

函数类型包含两部分：参数类型和返回值类型。  
当书写出完整函数类型时，这两部分都是需要的。  
对于返回值，在函数和返回值类型之前使用（`=>`）符号，

```typescript
function add(x: number, y: number): number {
  return x + y
}

// 完整函数类型
let myAdd: (x: number, y: number) => number = function(x: number, y: number): number { return x + y; }
// 如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
```

### 默认参数和可选参数

ts 里每个函数参数都是必须的。编译器会检查用户是否为每个参数都传入值。  
编译器还会假设只有这些参数会被传递进函数。即传入参数个数必须和期望一致。  
可选参数可以在参数名旁使用 `?` 实现。

```typescript
function buildName(firstName: string, lastName?:string) {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}

let result1 = buildName() // Error, too few parameters
let result2 = buildName('Stephen') // Right
let result3 = buildName('Stephent', 'tian') // right
let result4 = buildName('Stephent', 'tian', 's') // Error, too many parameters
```

**可选参数必须跟在必须参数后面。**

```typescript
// 默认参数
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName('stephen') // stephen smith
let result2 = buildName('stephen', undefined) // stephen smith
let result3 = buildNmae('stephen', 'tian') // stephen tian
```

默认参数不需要放在必须参数后面。  
所有必须函数后面的带默认初始化的参数都是可选的，和可选参数一样，可以忽略。  
也就是说可选参数和末尾的默认参数共享参数类型。

```typescript
function buildName(firstName: string, lastName?: string) {}

// 和
function buildName(firstName: string, lastName = 'tian') {}

// 共享参数类型

(firstName: string, lastName?: string) => string
```

### 剩余参数

前面的例子都适用于单个参数，当想操作多个参数时，在 js 中使用 `arguments` 来访问。  
ts 中， 可以把所有参数收集到一个变量里：

```typescript
function buildName(firstName: string, ...restOfName: strin[]) {
  return firstName + ' ' + restOfName.join(' ')
}
```
