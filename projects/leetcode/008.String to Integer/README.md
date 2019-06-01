# 字符串转整数
> String to Integer


## 描述
> Description





## 题解
> Solutions

#### 答案一
> Answer 1

1. **leetcode-cn**
执行用时 : 100 ms, 在String to Integer (atoi)的JavaScript提交中击败了97.84% 的用户
内存消耗 : 35.4 MB, 在String to Integer (atoi)的JavaScript提交中击败了86.11% 的用户

2. **leetcode**
Runtime: 80 ms, faster than 88.10% of JavaScript online submissions for String to Integer (atoi).
Memory Usage: 35.9 MB, less than 72.65% of JavaScript online submissions for String to Integer (atoi).
```
var myAtoi = function(str) {
  let str1 = str.replace(/(^\s+)|(\s+$)/g, '')
  let reg1 = /^[+-]?\d+/
  if (!reg1.test(str1)) {
    return 0
  }
  let num = parseInt(str1)
  return Math.max(Math.min(num, Math.pow(2, 31) - 1), Math.pow(-2, 31))
};

```

#### 答案二
> Answer 2

1. **leetcode-cn**
执行用时 : 108 ms, 在String to Integer (atoi)的JavaScript提交中击败了95.43% 的用户
内存消耗 : 35.5 MB, 在String to Integer (atoi)的JavaScript提交中击败了75.20% 的用户

2. **leetcode**
Runtime: 72 ms, faster than 95.93% of JavaScript online submissions for String to Integer (atoi).
Memory Usage: 35.6 MB, less than 92.90% of JavaScript online submissions for String to Integer (atoi).


```
var myAtoi = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, Math.pow(2,31) - 1), Math.pow(-2,31))
};
```

#### 答案三
> Answer 3

1. **leetcode-cn**
执行用时 : 108 ms, 在String to Integer (atoi)的JavaScript提交中击败了95.43% 的用户
内存消耗 : 35.5 MB, 在String to Integer (atoi)的JavaScript提交中击败了75.20% 的用户

2. **leetcode**
Runtime: 72 ms, faster than 95.93% of JavaScript online submissions for String to Integer (atoi).
Memory Usage: 35.6 MB, less than 92.90% of JavaScript online submissions for String to Integer (atoi).



## 讨论
> Discuss
