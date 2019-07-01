# 有效的括号(Valid Parentheses)


## Solutions

#### Answer-1


- leetcode-cn
执行用时 :72 ms, 在所有 JavaScript 提交中击败了96.55%的用户
内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了84.10%的用户


```
var isValid = function(s) {
    if(s.length%2 !== 0) return false
    let map =  {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let el = s[i];
        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};
```
