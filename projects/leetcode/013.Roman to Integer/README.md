# 罗马数字转整数(Integer to Roman)

## 描述 Description

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

- I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
- X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
- C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

---

## 答案 Solutions
#### Answer-1
- **leetcode-cn**
执行用时 :208 ms, 在所有JavaScript提交中击败了99.39%的用户
内存消耗 :40.5 MB, 在所有JavaScript提交中击败了36.48%的用户
- **leetcode**
Runtime: 156 ms, faster than 76.64% of JavaScript online submissions for Roman to Integer.
Memory Usage: 40.1 MB, less than 40.90% of JavaScript online submissions for Roman to Integer.

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

#### 思路




#### answer 2

- leetcode-cn


```

```
