# css

## 布局

### 三栏布局

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
