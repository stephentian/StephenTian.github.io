# 括号生成(Generate Parentheses)

## Solutions

### Answer-1

```
function generateParenthesis(n) {
  let res = [];
  generate(n, n, '', res);
  return res;
}

function generate(l, r, s, res) { // l: left remaining, r: right remaining
  if (l > r) return;  // e.g. ))(

  if (!l && !r) return res.push(s);

  if (l) generate(l - 1, r, s + '(', res);
  if (r) generate(l, r - 1, s + ')', res);
}


// 执行用时：80 ms, 在所有 JavaScript 提交中击败了84.83%的用户

// 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了26.05%的用户

var generateParenthesis = function (n) {
  let res = []
  const help = (cur, left, right) => {
    if  (cur.length === n*2) {
      res.push(cur)
      return
    }
    if  (left < n) {
      help(cur + "(", left + 1, right)
    }
    if  (right < left) {
      help(cur + ")", left, right + 1)
    }
  }

  help("", 0, 0)

  return res
}
```
