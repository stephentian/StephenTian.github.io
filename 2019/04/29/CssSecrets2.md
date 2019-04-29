# CSS 揭秘


## 背景与边框

### 1. 半透明边框

CSS 中的半透明颜色, 比如 rgba() 和 hsla()


```
border: 10px solid hsla(0, 0%, 100%, .5);
background: white;
```

background-clip 属性, 默认值 border-box, 意味着背景会被元素的 border box (边框的外沿框)裁切掉.

如果不希望背景侵入边框所在范围, 把值设为 padding-box