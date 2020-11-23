# Implement strSTR

> 实现 strStr()

## 解答

### 答案一

利用 substr

```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (var i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substr(i, needle.length) === needle) return i
  }
  return -1
}
```

### 答案二

暴力法

```javascript
var strStr = function (haystack, needle) {
  if (needle === '') return 0
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let exist = true
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] != needle[j]) {
          exist = false
          break
        }
      }
      if (exist) return i
    }
  }
  return -1
}
```

### 答案三

js 的 indexOf 方法

```js
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
}
```
