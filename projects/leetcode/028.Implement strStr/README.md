# Implement strSTR

> 实现 strStr()

## 解答

### 答案一

```
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (var i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substr(i, needle.length) === needle) return i
    }
    return -1
};
```
