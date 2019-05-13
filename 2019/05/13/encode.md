# 编码发展历史

### 字节

- 计算机内部， 所有信息最终都是一个二进制值
- 每一个二进制位（bit）有0和1两种状态，因此八个二进制位就可以组合出256种状态，这被称为一个字节(byte)


### 单位

- 8 位 = 1 字节
- 1024 字节 = 1K
- 1024K = 1M
- 1024M = 1G
- 1024G = 1T

### 进制

#### 1. 进制表示

```
在 javascript 中：
let a = 0b10100 // 二进制
let b = 0o24 // 八进制
let c = 20 // 十进制
let d = 0x14 // 十六进制

console.log(a == b)
console.log(b == c)
console.log(c == d)
```

#### 2. 进制转换

- 10 进制 转换任意进制

```
10 进制数.toString(目标进制)

console.log(10.toString(2))
```

- 任意进制转换成十进制

```
parseInt('任意进制', 原始进制)

parseInt('10100', 10)
// 10100
parseInt('10100', 2)
// 20
```


### ASCII

> American Standard Code for Information Interchange: 美国信息互换标准代码

最开始计算机只在美国用，八位的字节可以组合出256种不同状态。

0-32种状态规定了特殊用途,一旦终端、打印机遇上约定好的这些字节被传过来时，就要做一些约定的动作，如:
- 遇上0×10, 终端就换行；
- 遇上0×07, 终端就向人们嘟嘟叫；

又把所有的空格、标点符号、数字、大小写字母分别用连续的字节状态表示，一直编到了第 127 号，这样计算机就可以用不同字节来存储英语的文字

这128个符号（包括32个不能打印出来的控制符号），只占用了一个字节的后面 7 位，最前面的一位统一规定为 0



### GB2312

> 从128 到 255 这一页的字符集被称为扩展字符集

一些国家用的不是英文，它们的字母在 ASCII 里没有为了可以保存他们的文字，他们使用 127 号这后的空位来保存新的字母，一直编到了最后一位 255。

这种汉字方案叫做 GB2312。GB2312 是对 ASCII 的中文扩展


### GBK

后来还是不够用，于是干脆不再要求低字节一定是 127 号之后的内码，只要第一个字节是大于 127 就固定表示这是一个汉字的开始,又增加了近 20000 个新的汉字（包括繁体字）和符号。


### GB18030 / DBCS

> Double Byte Character Set：双字节字符集

又加了几千个新的少数民族的字，`GBK` 扩成了 `GB18030` 通称他们叫做 `DBCS`


### Unicode

> International Organization for Standardization：国际标准化组织
> Universal Multiple-Octet Coded Character Set，简称 UCS，俗称 Unicode

ISO 的国际组织废了所有的地区性编码方案，重新搞一个包括了地球上所有文化、所有字母和符 的编码！

Unicode 当然是一个很大的集合，现在的规模可以容纳100多万个符号。

从 Unicode 开始，无论是半角的英文字母，还是全角的汉字，它们都是统一的一个字符！同时，也都是统一的 两个字节

- 字节是一个8 位的物理存贮单元
- 而字符则是一个文化相关的符号



### UTF-8

> Universal Character Set（UCS）Transfer Format：UTF编码

Unicode 在很长一段时间内无法推广，直到互联网的出现，为解决 Unicode 如何在网络上传输的问题，于是面向传输的众多 UTF 标准出现了。

- UTF-8 就是在互联网上使用最广的一种 Unicode 的实现方式
- UTF-8就是每次以 8 个位为单位传输数据
- UTF-16就是每次 16 个位
- UTF-8 最大的一个特点，就是它是一种变长的编码方式
- Unicode 一个中文字符占 **2** 个字节，而 UTF-8 一个中文字符占 **3** 个字节
- UTF-8 是 Unicode 的实现方式之一


### 编码规则

Unicode 编码

```
function transfer(num) {
  let ary = ['1110', '10', '10'];
  let binary = num.toString(2);
  ary[2] = ary[2]+binary.slice(binary.length-6);
  ary[1] = ary[1]+binary.slice(binary.length-12,binary.length-6);
  ary[0] = ary[0]+binary.slice(0,binary.length-12).padStart(4,'0');
  let result =  ary.join('');
  return parseInt(result,2).toString(16);
}
//万
let result = transfer(0x4E07);//E4B887
```


### 文本编码

使用NodeJS编写前端工具时，操作得最多的是文本文件，因此也就涉及到了文件编码的处理问题。

我们常用的文本编码有 UTF8 和 GBK 两种，并且 UTF8 文件还可能带有 BOM。

在读取不同编码的文本文件时，需要将文件内容转换为 JS 使用的 UTF8 编码字符串后才能正常处理。


### 移除 BOM 字符

BOM 用于标记一个文本文件使用 Unicode 编码，其本身是一个 Unicode 字符（"\uFEFF"），位于文本文件头部。

在不同的Unicode编码下，BOM字符对应的二进制字节如下：

```
 Bytes      Encoding
 FE FF       UTF16BE
 FF FE       UTF16LE
 EF BB BF    UTF8
```

因此，我们可以根据文本文件头几个字节等于啥来判断文件是否包含BOM，以及使用哪种 Unicode 编码。

但是，BOM 字符虽然起到了标记文件编码的作用，其本身却不属于文件内容的一部分，如果读取文本文件时不去掉 BOM，在某些使用场景下就会有问题。

把几个JS文件合并成一个文件后，如果文件中间含有BOM字符，就会导致浏览器JS语法错误。

因此，使用NodeJS读取文本文件时，一般需要去掉BOM

```
function readText(pathname) {
    var bin = fs.readFileSync(pathname);
    if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
        bin = bin.slice(3);
    }
    return bin.toString('utf-8');
}
```


### GBK 转 UTF8

NodeJS 支持在读取文本文件时，或者在 Buffer 转换为字符串时指定文本编码，
但遗憾的是，GBK编码不在NodeJS自身支持范围内。

因此，一般我们借助 `iconv-lite` 这个三方包来转换编码。

```
var iconv = require('iconv-lite');
function readGBKText(pathname) {
    var bin = fs.readFileSync(pathname);
    return iconv.decode(bin, 'gbk');
}
```
