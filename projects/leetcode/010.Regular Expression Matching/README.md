# 正则表达式匹配(Regular Expression Matching)


## Description



## Solution

#### Answer 1

- leetcode-cn
执行用时 : 164 ms, 在Regular Expression Matching的JavaScript提交中击败了34.78% 的用户
内存消耗 : 37.6 MB, 在Regular Expression Matching的JavaScript提交中击败了11.24% 的用户

```
var isMatch = function(s, p) {
  var lenS = s.length;
  var lenP = p.length;
  var map = {};

  return check(0, 0);

  function check(idxS, idxP) {
    if (map[idxS + ':' + idxP] !== undefined) return map[idxS + ':' + idxP];
    if (idxS > lenS) return false;
    if (idxS === lenS && idxP === lenP) return true;

    if (p[idxP] === '.' || p[idxP] === s[idxS]) {
      map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
        check(idxS + 1, idxP) || check(idxS, idxP + 2) :
        check(idxS + 1, idxP + 1);
    } else {
      map[idxS + ':' + idxP] = p[idxP + 1] === '*' ?
        check(idxS, idxP + 2) : false;
    }
    return map[idxS + ':' + idxP];
  }
};
```
