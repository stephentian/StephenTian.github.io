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
  // const arr = []

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

  // // 情况3
  // if (!isRepeat(strArr)) {
  //   return strArr.length
  // }
  // function getArr(arr) {

  // }
  // for (let i = 0; i < strArr.length; i++) {
  //   for (let j = i + 1; j < strArr.length; j++) {
  //     if (strArr[i] == strArr[j]) {
  //       const childArr = strArr.slice(i, j)
  //       if (isRepeat(childArr)) {
  //         break
  //       } else {
  //         arr.push(childArr)
  //         break
  //       }
  //     }
  //     else {
  //       if (j == strArr.length - 1) {
  //         if (isRepeat(strArr.slice(i))) {
  //           if (i == 0 && !isRepeat(strArr.slice(i, j))) {
  //             arr.push(strArr.slice(i, j))
  //           }
  //           break
  //         } else {
  //           arr.push(strArr.slice(i))
  //           break
  //         }
  //       }
  //     }
  //   }
  // }

  // if (arr.length == 0) {
  //   return strArr.length
  // }
  // arr.sort((a, b) => {
  //   return b.length - a.length
  // })

  // console.log(arr)
  // return arr[0].length
  const map = {};
  var left = 0;

  const long = s.split('').reduce((max, v, i) => {
    // console.log('max:', max)
    console.log('v: ', map[v])
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
  console.log(map)
  console.log(long)
  return long
}

// lengthOfLongestSubstring('abacadvjeismqlgka')
lengthOfLongestSubstring('aab')
// lengthOfLongestSubstring("cbb")
// lengthOfLongestSubstring("abcabcbb")
