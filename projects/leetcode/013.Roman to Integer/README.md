# 罗马数字转整数(Integer to Roman)

## 描述 Detail




## 答案 Answers

#### answer 1

- leetcode-cn
执行用时 :208 ms, 在所有JavaScript提交中击败了99.39%的用户
内存消耗 :40.5 MB, 在所有JavaScript提交中击败了36.48%的用户

- leetcode


```
var romanToInt = function(s) {
    let hashMap = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    let ans = 0
    for(let i = 0;i < s.length;) {
        if(i + 1 < s.length && hashMap[s.slice(i, i+2)]) {
            ans += hashMap[s.slice(i, i+2)];
            i += 2;
        } else {
            ans += hashMap[s.slice(i, i+1)];
            i ++;
        }
    }
    return ans;
};
```


#### answer 2

- leetcode-cn


```

```
