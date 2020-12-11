# Length of Last Word

> 最后一个单词的长度

## 解答

### 答案一

执行用时：80 ms, 在所有 JavaScript 提交中击败了 75.21%的用户
内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了 34.44%的用户

```js
var lengthOfLastWord = function (s) {
  s = s.trim()
  return s.length - s.lastIndexOf(' ') - 1
}
```
