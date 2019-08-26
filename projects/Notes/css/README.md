# css

## 布局

#### 三栏布局

1.假设高度已知，请写出三栏布局，其中左栏、右栏宽度各为 300 px, 中间自适应

(1) 浮动
```
.float .left {
  float: left;
  width: 300px;
}
.float .right {
  float: right;
  width: 300px;
}
.float .center {
  backgroud: red;
}
```

(2) 绝对定位
```
.absolute .left {
  position: absolute;
  width: 300px;
  top: 0;
  left: 0;
}
.absolute .center {
  position: absolute;
  left: 300px;
  right: 300px;
  backgroud: yellow;
}
.absolute .right {
  position: absolute;
  width: 300px;
  top: 0;
  right: 0;
}
```

(3) flexbox 弹性布局
```
.flexbox {
  display: flex;
}
.flexbox .left {
  width: 300px;
}
.flexbox .center {
  flex: 1
}
.flexbox .right {
  width: 300px;
}
```

(4) table 表格布局
```
.tablebox {
  display: table;
  width: 100%;
  height: 200px;
}
.tablebox .left {
  display: table-cell;
  width: 300px;
}
.tablebox .center {
  display: table-cell;
  backgroud: blue;
}
.tablebox .right {
  display: table-cell;
  width: 300px;
}
```

(5) grid 网格布局
```
.gridbox {
  display: grid;
  width: 100%;
  grid-template-rows: 200px;
  grid-template-columns: 300px auto 300px;
}
.grid .left {
  background: #000;
}
.grid .left {
  background: #ddd;
}
.grid .right {
  background: #0ff;
}
```

#### 多种布局的优缺点

1.float 布局

2.flex 弹性布局

3.table 布局

4.grid 布局


## 盒模型

#### 基本概念

content, padding, border, margin

#### 两种模型及区别

标准模型
width = content

IE 模型
width = content + padding + border

#### CSS 如何设置这两种模型

box-sizing: content-box;

box-sizing: border-box;

#### JS 如何设置获取盒模型对应的宽和高

设置 dom 元素的宽高样式 一般有三种方法：

1. 内联样式
2. style 标签
3. 通过 link 标签引入(外联样式)

获取 dom 元素宽高样式，有下列 4 种方法：
一
```
dom.style.width/height

// 只能获取 1， 即内联样式
```
二
```
dom.currentStyle.width/height

// 获取1, 2, 3渲染后的宽高，但是仅 IE 支持
```
三
```
window.getComputedStyle(dom).width/height

// 与2原理相似，但是兼容性好一些
```
四
```
dom.getBoundingClientRect().widht/height

// 计算元素绝对位置（相对于视窗左上角），
// 获取到四个元素left, top, width, height
```

#### 边距重叠

1.父子元素边距重叠
```
<div class="parent">
  <div class="child"></div>
</div>

.child {
  width: 100%;
  height: 100px;
  margin-top: 10px;
}

// 父级元素 parent 高度多少？
```


#### BFC

##### 1.基本概念
英文名, block formatting context, 块级格式化上下文.
它是一个独立的渲染区域, 里面由块级元素组成.
MDN: 是块盒子的布局过程发生的区域, 也是浮动元素与其他元素交互的区域.

##### 2.BFC的原理(渲染规则)
- (1) BFC 的元素中, 在垂直方向上的margin会发生重叠(根元素`<html>`就是一个 BFC 元素)
- (2) BFC 区域不会和 float 元素重叠(两栏自适应)
- (3) BFC 元素在页面上是一个独立的容器, 外面的元素和里面的元素互不影响
- (4) 计算 BFC 元素的高度时,里面浮动元素的高度也会参与计算(`overflow:hidden`可以清除浮动)

##### 3.如何创建 BFC
- (1) float 不为 none
- (2) position: 不为 static, relative
- (3) overflow 不为 visible
- (4) display 为 inline-block, table, table-cell, table-caption

4.BFC 使用场景
(1) 防止 margin 重叠(塌陷)
(2) 清除浮动
(3) 自适应多栏布局的
