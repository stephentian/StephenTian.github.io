# 整数转罗马数字

## Detail 描述

罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

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

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。


## Answers

#### answer 1

- leetcode-cn
执行用时 :236 ms, 在所有JavaScript提交中击败了91.03%的用户
内存消耗 :40.7 MB, 在所有JavaScript提交中击败了62.96%的用户

- leetcode
Runtime: 164 ms, faster than 61.18% of JavaScript online submissions for Integer to Roman.
Memory Usage: 39.9 MB, less than 76.45% of JavaScript online submissions for Integer to Roman.

```
var intToRoman = function(num) {
    // 千位数罗马字符
    let th = 'M'.repeat(Math.floor(num/1000))
    // 百位数
    let hanNum = Math.floor((num%1000)/100)
    // 百位数罗马字符
    let han = ''
    // 十位数
    let tenNum = Math.floor((num%1000%100)/10)
    // 十位数罗马字符
    let ten = ''
    // 个位数
    let digNum = num%1000%100%10
    // 个位数罗马字符
    let digit = ''
    if(hanNum > 0) {
        if(hanNum === 9) {
           han = 'CM'
        } else if(hanNum === 4) {
            han = 'CD'
        } else if(hanNum < 4) {
            han = 'C'.repeat(hanNum)
        } else {
            han = 'D' + 'C'.repeat(hanNum%5)
        }
    }
    if(tenNum > 0) {
        if(tenNum === 9) {
           ten = 'XC'
        } else if(tenNum === 4) {
            ten = 'XL'
        } else if(tenNum < 4) {
            ten = 'X'.repeat(tenNum)
        } else {
            ten = 'L' + 'X'.repeat(tenNum%5)
        }
    }
    if(digNum === 9) {
        digit = 'IX'
    } else if(digNum === 4) {
        digit = 'IV'
    } else if (digNum < 4) {
        digit = 'I'.repeat(digNum)
    } else {
        digit = 'V' + 'I'.repeat(digNum%5)
    }
    let str = th + han + ten + digit
    return str
};
```


#### 2

- leetcode-cn
