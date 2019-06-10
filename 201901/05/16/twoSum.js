/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-5-16
**/

var twoSum = function (nums = [], target) {
  for (let i = 0; i < nums.length; i++) {
    let j = nums.findIndex((v) => {
      return v == target - nums[i]
    })
    if (j != -1 && j != i) {
      return [i, j]
    }
  }
}

twoSum([3, 2, 4], 6)

// module.exports
