/* 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个 ""有序"" 数组的中位数。要求算法的时间复杂度为 O(log(m+n))

nums1 = [1, 3]
nums2 = [2]   ->  2.0 

nums1 = [1, 2]   
nums2 = [3, 4]   -> 2.5
*/

var midNum = function(nums1, nums2) {

  let length1 = nums1.length
  let length2 = nums2.length
  let totalNum = length1 + length2
  let midIndex 
  let left, right
  let isOdd = true
  // 奇偶判断
  if (totalNum % 2 === 0) { //偶
    right = totalNum / 2 
    left = right - 1
    isOdd = false
  } else {
    midIndex = (totalNum - 1) / 2
  }

  if (!length1 && isOdd) {
    return nums2[midIndex]
  } else if (!length1 && !isOdd) {
    return (nums2[left] + nums2[right]) / 2
  } else if (!length2 && isOdd) {
    return nums1[midIndex]
  } else if (!length2 && !isOdd) {
    return (nums1[left] + nums1[right]) / 2
  }
  
  // 第k小数法
  if (isOdd) { //奇数
    let k = midIndex 
    return findK(k)
  } else {
    let k1 = left
    let k2 = right
    let r1 = findK(k1)
    let r2 = findK(k2)
    return (r1 + r2) / 2
  }
  function findK(k) {
    let i = 0, j = 0
    let count = 0
    while (true) {
      for (let n = 0; n <= k; n ++) {
        if (nums1[i] > nums2[j]) {
          count ++
          if (count === k + 1) {
            return nums1[i] < nums2[j] ? nums1[i] : nums2[j]
          }
          j ++
          if (j >= nums2.length) {
            return nums1[k - count + i]
          }
        } else {
          count ++
          if (count === k + 1) {
            return nums1[i] < nums2[j] ? nums1[i] : nums2[j]
          }
          i ++
          if (i >= nums1.length) {
            return nums2[k - count + j]
          }
        }
      }
    }
  }
};                                                    

let nums1 = [1,2]
let nums2 = [3, 4]
console.log(midNum(nums1, nums2))

