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
 7. [泛型](#泛型)
 8. [装饰器](#装饰器)
 9. [声明文件](#声明文件)

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

### 类类型接口

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

// 也可以在带有剩余参数的函数类型定义上使用省略号
let buildNameFunc: (firstName: string, ...rest: string[]) => string = buildName
```

剩余参数会被当作个数不限的可选参数。可以一个都没有，也可以有任意个。  
编译器创建参数数组，名字为省略号(`...`)后面的

### this

#### this 和箭头函数

```typescript
let deck = {
  suits: ['hearts', 'spades', 'clubs'],
  cards: Array(10),
  createCardPicker: function() {
    return function() {
      return {suit: this.suits[0], card: cards[0]}
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

运行后会报错，因为`createCardPicker` 里的 `this` 被设置成了 `window`，而不是`deck`。  
为了解决这个问题，我可以在函数返回是就绑好正确的 `this`。  
使用箭头函数， 箭头函数会保存函数创建时的 `this`，而不是调用时的值。

```typescript
let deck = {
  suits: ['hearts', 'spades', 'clubs'],
  cards: Array(10),
  createCardPicker: function() {
    return () => {
      return {suit: this.suits[0], card: cards[0]}
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

ts 会警告一个错误。`this` 的类型为 `any`。

#### this 参数

this 参数是个假的参数，出现在参数列表的最前面

```typescript
function f(this: void) {
  // ...
}
```

往例子里添加一些接口，让类型重用变得更加清晰：

```typescript
interface Card {
  suit: string
  card: number
}
interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ['a', 'b', 'c'],
  cards: [1, 2, 3, 4]
  createCardPicker: function(this: Deck) {
    return () => {
      return {suit: this.suits[0], card: cards[0]}
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

现在 ts 知道 `createCardPicker` 期望在某个 `Deck` 对象上调用。也就是说 `this` 是 `Deck` 类型，而非 `any`。

### 重载

```typescript
let suits = ['aa', 'bb', 'ccc', 'dd']

function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x: number): { suit: string; card: number }
function pickCard(x): any {
  if (typeof x == 'object') {
    let pickedCard = Math.floor(x.length)
    return pickedCard
  } else if (typeof x === 'number') {
    let pickedCard = Math.floor(x/2)
    return { suit: suits[pickedCard], card: x%2 }
  }
}

let myDeck = [{ suit:'diamonds', card: 2}, { suit:'spades', card: 12}]
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
```

重载的 `pickCard` 在调用的时候会进行正确的类型检查。

## 泛型

创建使用泛型的第一个例子：identify 函数。

```typescript
// 不使用泛型
function identify(arg: number): number {
  return arg
}

// 使用泛型
function identify(arg: any): any {
  return arg
}
```

使用 `any` 类型会可以接收任何类型的 `arg` 参数，这样就会导致一个问题：传入的类型与返回的类型可能不同。  
因此，需要一种方法使返回值类型和传入参数的类型是相同的。  
这里，我们使用*类型变量*(`T`)，它是一种特殊的变量，只用于表示类型而不是值。

```typescript
funciton identify<T>(arg: T): T {
  return arg
}
```

`T` 帮助捕获用户传入的类型。这样就知道传入的参数类型和返回值类型的相同的了。  
这个版本的 `identify` 函数叫做泛型。  

定义了泛型函数之后，可以使用两种方法使用。  
第一种是，传入所有参数，包含类型参数。

```typescript
let output = identify<string>('myString')
// 指定 T 是 string 类型，并且作为一个参数传给函数
```

第二种是，类型推论 —— 即编译器会自动帮我们确定 `T` 的类型。

```typescript
let output = identify('myString')
```

### 泛型变量

```typescript
function identify<T> (arg: T): T {
  console.log(arg.length) // Error: T doesn't have length
  return arg
}
```

编译器会报错, arg 没有 `length` 属性。  
可以假定操作 `T` 类型的数组：

```typescript
function identify<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg
}

// 或

function loggingIdentify<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg
}
```

### 泛型类型

泛型函数类型

```typesctipt
function identify<T>(arg: T): T {
  return arg
}

let myIdentify: <T>(arg: T) => T = identify
````

也可以使用不同的泛型参数名，只要数量和使用方式上能对应就可以

```typescript
function identify<T>(arg: T): T { return arg }

let myIdentify: <U>(arg: U) => U = identify

// 使用带有调用签名的对象字面量来定义泛型函数
let myIdentify: {<T>(arg: T): T} = identify
```

泛型接口

```typescript
interface GenericIdentifyFn {
  <T>(arg: T): T
}

function identify<T>(arg: T): T {
  return arg
}

let myIdentity: GenericIdentifyFn = identify

// 把泛型参数当作整个接口的一个参数
// 这样就知道具体哪个泛型类型
interface GenericIdentityFn<T> {
  (arg: T): T
}
```

泛型类

```typescript
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
// GenericNumber类的使用十分直观， 没有限制使用 number 类型，也可以使用 string 或者其他类型
```

### 泛型约束

就像之前约束泛型有 `length` 属性一样，当时的做法是作为 `[]`。但是也有其他类型可能有 `length` 属性。  
为此，我们定义一个接口来描述约束条件。使用这个接口和 `extends` 关键字进行约束。

```typescript
interface Lengthwise {
  length: number
}

function identity<T extends Lengthwise>（arg: T): T {
  console.log(arg.length);
  return arg
}

// 但是这个泛型别约束死，不再适应其他任意类型：
identity(3) // Error

// 必须传入符合约束的类型
identity({ length: 1, value: 3})
```

在泛型中使用类类型  
使用泛型创建工厂函数时，需要引用构造函数的类类型

```typescript
function create<T>(c: { new(): T }): T {
  return new c()
}
```

## 装饰器

在一些场景下我们需要额外的特性来支持标注或修改类及其成员，装饰器(Decorator)为我们在类的声明及
成员上通过元编程（用代码生成我们需要的代码）语法添加标注提供一种方式。

装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。

装饰器使用 `@exporession` 这种形式， `expression` 求值后必须为一个函数，它会在运行时被调用，被装饰的声明
信息作为参数传入。

```typescript
// @sealed Decorator
function sealed(target) {
  // do something
}
```

### 装饰器工厂

装饰器工厂是一个简单的函数，它返回一个表达式，以供装饰器运行时调用。

```typescript
function color(value: string) { // 装饰器工厂
  return function(target) { // 装饰器
    // ...
  }
}
```

### 装饰器组合

多个装饰器可以同时应用到同一声明上。

```typescript
// 同一行
@f @g x

// 书写在多行
@f
@g
x
```

这样结果执行为 `f(g(x))`。  
多个装饰器应用在同一声明，会进行如下步骤操作：

1. 由上至下依次对装饰器表达式求值。
2. 求值的结果会被当作函数，由下至上执行。

```typescript
function f() {
  console.log('f(): evaluated');
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('f(): called');
  }
}

function g() {
  console.log('g(): evaluated');
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('g(): called');
  }
}

class C {
  @f()
  @g()
  method() {}
}

// 打印结果
// f(): evaluated
// g(): evaluated
// f(): called
// g(): called
```

### 类装饰器

类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 类装饰器不能用在声明文件中( .d.ts)，也不能用在任何外部上下文中（比如declare的类）。

```typescript
@sealed
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return `Hello, ${this.greeting}`
  }
}

// 定义装饰器 sealed
function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}
// Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。
// 当前属性的值只要可写就可以改变。

// 当 @sealed 被执行的时候，它将密封此类的构造函数和原型。
```

### 方法装饰器

方法装饰器声明在一个方法的声明之前（紧靠着方法声明）。 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。

方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字
3. 成员的属性描述符。

```typescript
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  @enumerable(false)
  greet() {
    return `Hello, ${this.greeting}`
  }
}

// @enumerable 装饰器
function enumerable(value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}
// 这里的@enumerable(false)是一个装饰器工厂。
// 当装饰器 @enumerable(false)被调用时，它会修改属性描述符的enumerable属性。
```

### 属性装饰器

属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：  

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。

```typescript
class Greeter {
  @format('Hello, %s')
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}

// @format
import 'reflect-metadata'
const formatMetadataKey = Symbol('format')
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString)
}

// getFormat
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey)
}
```

### 参数装饰器

 参数装饰器应用于类构造函数或方法声明。 参数装饰器不能用在声明文件（.d.ts），重载或其它外部上下文（比如 declare的类）里。  
参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。
3. 参数在函数参数列表中的索引。

**注意**  参数装饰器只能用来监视一个方法的参数是否被传入。

## 声明文件

`declare` 起声明作用
