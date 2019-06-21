# 最接近的三数之和(3Sum Closest)



## Solutions

#### Answers-1

执行用时 :120 ms, 在所有 JavaScript 提交中击败了63.94%的用户
内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了75.11%的用户

```
var threeSumClosest = function(nums, target) {
  let len = nums.length;
  if (len <= 2) return [];
  nums = nums.sort((a, b) => a - b);
  let min = nums[0] + nums[1] + nums[2];
  for (let x = 0; x < len - 2;) {
    for (let y = x + 1, z = len - 1; y < z;) {
      let t = nums[x] + nums[y] + nums[z];
      if (Math.abs(t - target) < Math.abs(min - target)) {
        min = t;
      }
      if (t < target) {
        do {
          y++;
        } while(y < z && nums[y] === nums[y - 1])
      } else if (t > target) {
        do {
          z--;
        } while(y < z && nums[z] === nums[z + 1])
      } else {
        return min;
      }
    }
    do {
      x++;
    } while (x < len - 2 && nums[x] === nums[x - 1])
  }
  return min;
};
```


#### Anwser-2

leetcode-cn
执行用时 :368 ms, 在所有 JavaScript 提交中击败了6.42%的用户
内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了86.88%的用户

```
暴力法
var threeSumClosest = function(nums, target) {
    let res = null
    let sum = 0
    let len = nums.length
    if(len <= 2) {
        return nums
    }
    for(let i = 0; i < len-2;i++){
        for(let j=i+1; j < len-1; j++) {
            for(let k = j+1; k < len; k++) {
                sum = nums[i] + nums[j] + nums[k]
                if (res === null || Math.abs(target - res) >=  Math.abs(target - sum)) {
                    res = sum
                }
            }
        }
    }
    return res
};
```
