# 电话号码的字母组合(Letter Combinations of a Phone Number)


## Solutions

#### Answer-1

- leetcode-cn
执行用时 :68 ms, 在所有 JavaScript 提交中击败了97.54%的用户
内存消耗 :34.3 MB, 在所有 JavaScript 提交中击败了5.01%的用户

- leetcode
Runtime: 56 ms, faster than 76.04% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 33.7 MB, less than 95.11% of JavaScript online submissions for Letter Combinations of a Phone Number.

```
var letterCombinations = function(digits) {
    let digMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let arr = digits.split('')
    let len = arr.length
    let resArr = []
    if (len <= 1) return digMap[arr[0]] || []
    for (let i = 1; i <= len-1; i++ ) {
        if(resArr.length === 0) {
            resArr = digMap[arr[0]]
        }
        resArr = resArr.map(x => {
            return digMap[arr[i]].map(v => {
                return x + v
            })
        }).reduce((a ,b) => a.concat(b))
    }
    return resArr
};
```


#### Answer-2

- leetcode-cn
执行用时 :76 ms, 在所有 JavaScript 提交中击败了88.17%的用户
内存消耗 :34.3 MB, 在所有 JavaScript 提交中击败了5.01%的用户

```
var letterCombinations = function(digits) {
    let digMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let len = digits.length
    if (len <= 1) return digMap[digits[0]] || []

    let result = []
    let arr = digMap[digits[0]];
    for (let digit of digits.substr(1)) {
        result = [...arr]
        arr = []
        for (let dicItem of digMap[digit]) {
            for (let arrItem of result) {
                arr.push(arrItem + dicItem)
            }
        }
    }
    return arr
};
```
