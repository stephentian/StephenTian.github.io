/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-5-21
**/

// 寻找两个有序数组的中位数
// findMedianArray

// 示例1：
// nums1 = [1, 3]
// nums2 = [2]
// 则中位数是 2.0

// 示例2：
// nums1 = [1, 2]
// nums2 = [3, 4]
// 则中位数是 (2 + 3)/2 = 2.5

var findMedianArray = function (nums1, nums2) {
  const n = nums1.length + nums2.length
  let mid1, mid2
  let arr = nums1.concat(nums2)
  arr.sort((a, b) => {
    return a - b
  })
  console.log(arr)
  if (n % 2 == 1) {
    mid1 = arr[(n - 1) / 2]
    console.log(n)
    return mid1 / 1.0
  } else {
    mid2 = (arr[n / 2] + arr[n / 2 - 1]) / 2.0
    return mid2
  }
}

// findMedianArray([1, 3], [2])

console.log(findMedianArray([1, 3], [2]))
