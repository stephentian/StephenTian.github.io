# 最长公告前缀(Longest Common Prefix)

## Description




## Solutions
#### Answer-1
- leetcode-cn
执行用时 :88 ms, 在所有JavaScript提交中击败了89.27%的用户
内存消耗 :35.3 MB, 在所有JavaScript提交中击败了24.11%的用户
- leetcode
Runtime: 72 ms, faster than 21.45% of JavaScript online submissions for Longest Common Prefix.
Memory Usage: 34.8 MB, less than 71.84% of JavaScript online submissions for Longest Common Prefix.

```
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ''
    let pre = strs[0]
    for(i=1; i<strs.length; i++) {
        for(j=0; j<pre.length && j<strs[i].length; j++) {
            if(pre.charAt(j) !== strs[i].charAt(j))
                break;
        }
        pre = pre.substring(0, j);
        if(pre === '')
            return pre;
    }
    return pre
};
```
