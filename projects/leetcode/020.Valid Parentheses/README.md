# 有效的括号(Valid Parentheses)


## Solutions

#### Answer-1

```

var isValid = function(s) {
    if(s.length%2 !== 0) return false
    let len = s.length/2
    for(let i = 0; i < len; i++) {
        if (s[len - 1 - i] !== s[len + i]) {
            return false
        }
    }
    return true
};
```
