# 串联所有单词的子串

> Substring with Concatenation of All Words

## 解答

需要先将 words 排列组合成字符串, 然后在 s 中寻找字符串位置.

### 答案一

```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let slen = s.length, // s字符串长度
    wlen = words.length, // words数组长度
    wl = words[0] ? words[0].length : 0 // 单个word的字符长度

  // 如果s或words长度为0，或s长度小于words总字符长度，直接返回[]
  if (slen === 0 || wlen === 0 || slen < wl * wlen) return []

  let res = []
  // 遍历s到slen - wl * wlen + 1的位置即可
  for (let i = 0; i < slen - wl * wlen + 1; i++) {
    // 取wl * wlen长度的字符串
    let ns = s.substr(i, wl * wlen)
    // 临时复制一份words
    let tmp = words.slice()
    for (let j = 0; j < wlen; j++) {
      // 取wl长度的子串，在words数组中查询
      let sub = ns.substr(j * wl, wl)
      let index = tmp.indexOf(sub)
      // 匹配则移除继续，不匹配退出循环
      if (index != -1) {
        tmp.splice(index, 1)
      } else {
        break
      }
    }
    // words数组中单词全匹配，放入i
    if (tmp.length === 0) {
      res.push(i)
    }
  }
  return res
}
```
