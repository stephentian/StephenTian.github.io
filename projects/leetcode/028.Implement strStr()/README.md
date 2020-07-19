# Im

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
    if(needle.length === 0) return 0
    let len1 = haystack.length
    let len2 = needle.length
    if (len1 < len2) return -1

    for (let i = 0; i < len1 - len2; i ++) {

    }
};
```
