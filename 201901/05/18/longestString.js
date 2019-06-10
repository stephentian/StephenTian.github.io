/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-5-18
**/

// 无重复最长字符串

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 情况1, 空字符串 ''
// 情况2, 'abb'
// 情况3, 'abcd'
// 情况4, 'aab'


var lengthOfLongestSubstring = function (s) {
  // const strArr = s.split('')
  // let long = null
  // let i = 0
  // let j = 1

  // function isRepeat(arr) {
  //   let hash = {}
  //   for (let k = 0; k < arr.length; k++) {
  //     if (hash[arr[k]]) {
  //       return true
  //     }
  //     hash[arr[k]] = true
  //   }
  //   return false
  // }

  // while (j <= strArr.length) {
  //   if (!isRepeat(strArr.slice(i, j))) {
  //     j - i > long ? long = j - i : null;
  //     j++
  //   } else {
  //     i++
  //   }
  // }

  // console.log(long)
  // return long


  // 方法 2
  // const map = {};
  // var left = 0;

  // const long = s.split('').reduce((max, v, i) => {
  //   left = map[v] >= left ? map[v] + 1 : left;
  //   map[v] = i;
  //   return Math.max(max, i - left + 1);
  // }, 0);
  // return long

}

// lengthOfLongestSubstring('abacadvjeismqlgka')
// lengthOfLongestSubstring('aab')
// lengthOfLongestSubstring("cbb")
lengthOfLongestSubstring("")
