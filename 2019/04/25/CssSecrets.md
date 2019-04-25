# Css 揭秘

## Web 标准

**最常见的前缀**

- Firefox: -moz-
- IE: -ms-
- Opera: -o-
- Safari & Chrome: -webkit-

## CSS 编码技巧

### 尽量减少代码量重复

**1. 代码易维护 vs 代码量少**

有时候, 代码易维护和代码量少不可兼得, 如：

```
border-width: 10px 10px 10px 0
```

把它拆成两条声明, 可读性更好一些

```
border-width: 10px;
border-left-width: 0;
```

**2. currentColor**

CSS 有史以来第一个变量
比如我们想让所有的水平分割线 `hr` 元素自动与文本颜色保持一致

```
hr {
  height: .5em;
  background: currentColor;
}
```

**3. inherit**

继承, 大多数开发仔都知道这个, 但是很同意忘记使用.

它总是绑定到父元素的计算值(伪元素，则会取生成该伪元素的宿主元素)

### 相信自己眼睛，而不是数字

### 响应式网页设计

- 媒体查询 Media Query
- 使用百分比长度来取代固定长度, vw, vh, vmin, vmax
- max-width
- rem
