/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-8-12
**/


// 继承

function Parent(age) {
  this.age = age
}


// 1. 属性拷贝(对象继承)
var superObj = {
  name: 'Li',
  age: 25,
  friends: ['小明', '小李', '小赵'],
  showName: function () {
    alert(this.name);
  }
}

var subObj = {};

// 开始拷贝属性(使用for...in...循环)
for (var i in superObj) {
  subObj[i] = superObj[i];
}
// 缺点：
// 如果继承来的成员是引用类型，那修改后，父子对象都会受影响


// 2. 原型继承
function Child2() {
  // ...
}
Child2.prototype = Parent.prototype
// 优点：效率高，省内存
// 缺点：
// Child2.prototype 和 Parent.prototype 指向同一个对象，修改会引起两个对象都变化。
// 只能继承父构造函数的 原型对象 上的成员, 不能继承父构造函数的 实例对象 的成员


// 3. 原型链继承
function Child3(age) {
  this.age = age
}
Child3.prototype = new Parent()
Child3.prototype.constructor = Child3
// 优点：简单、易懂
// 缺点：
// 不能传参
// 父子构造函数的原型对象之间有共享问题


// 4. 构造函数继承
function Child4(age) {
  Parent.call(this, age)
  // Parent.apply(this, arguments)
}
// 优点：简单，不存在共享问题
// 没有继承原型链上的方法


// 5. 组合继承
function Child5(age) {
  Parent.call(this, age)
}
Child5.prototype = new Parent()
Child5.prototype.constructor = Child5
// 优点：解决了构造继承和原型链继承的缺点
// 缺点：
// 父类的构造函数被执行了两次
// 子类实例的属性存在两份。造成内存浪费


// 6. 寄生组合继承
function Child6(age) {
  Parent.call(this, age)
  this.name = name
}

(function () {
  let F = function () { }
  F.prototype = Parent.prototype
  Child6.prototype = new F()
  Child6.prototype.constructor = Child6
})()

// Object.create() 原理
// 封装一个函数， 用来输出对象和承载继承的原型
// function objectCreate(obj) {
//   function F() {}
//   F.prototype = obj
//   return new F()
// }

// 故类似于
Child6.prototype = Object.create(Parent.prototype)
Child6.prototype.constructor = Child6
// 优点：基本完美
// 缺点：优点复杂


// 7. ES6 继承
class Child extends Parent {
  constructor () {
    super()
  }
}
