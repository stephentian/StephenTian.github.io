# 回文数(Palindrome Number)


## 题目描述
> Description



## 题解
> Solution


#### 答案一
> Answer 1

- leetcode-cn
执行用时 : 316 ms, 在Palindrome Number的JavaScript提交中击败了95.70% 的用户
内存消耗 : 46.4 MB, 在Palindrome Number的JavaScript提交中击败了10.70% 的用户

- leetcode
Runtime: 188 ms, faster than 93.44% of JavaScript online submissions for Palindrome Number.
Memory Usage: 45.8 MB, less than 42.28% of JavaScript online submissions for Palindrome Number.


```
var isPalindrome = function(x) {
    let str1 = String(x)
    let str2 = str1.split('').reverse().join('')
    return Number(str2) === x
};

```


#### 答案二(Answer 2)
#### 

- leetcode
Runtime: 164 ms, faster than 99.42% of JavaScript online submissions for Palindrome Number.
Memory Usage: 46.1 MB, less than 12.42% of JavaScript online submissions for Palindrome Number.

- leetcode-cn
执行用时 : 304 ms, 在Palindrome Number的JavaScript提交中击败了97.83% 的用户
内存消耗 : 46 MB, 在Palindrome Number的JavaScript提交中击败了31.45% 的用户

```
var isPalindrome = function(x) {
    x = x.toString();
    for(let i = 0; i < x.length/2; i++) {
        if(x[i] !== x[x.length - i - 1]) return false;
    }
    return true;
};
```
