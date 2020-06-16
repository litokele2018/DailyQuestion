<<<<<<< HEAD
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

  if (length1 === 1 && length2 === 1) {
    return (nums1[0] + nums2[0]) / 2
  }
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
  function findK(k) { //因为传入的是下标 从零开始
    let i = 0, j = 0 // 只记开头的位置
    let rest = k     // 只需要排除k个 就可以找到下标为k的数字第k+1个
    let temp = k     // 需要找下标为k的数字
    while (temp >= 1) {  // 如 传入 temp = 7 找到第七个位置

      if (temp > 1) {
        temp = Math.floor(temp / 2)// 3
      }  
      if (temp > nums1.length) {
        temp = 1
      }
      if (temp > nums2.length) {
        temp = 1
      }
      debugger
      if (nums1[temp - 1 + i] > nums2[temp - 1 + j]) { 
        j += temp
        rest -= temp
        if (j >= nums2.length) {
          return nums1[i + rest]
        }
        if (temp > 1) {
          temp = Math.floor(temp / 2) 
        }  
        if (rest === 0) {
          return nums1[i] > nums2[j] ? nums2[j] : nums1[i]
        }
      } else {
        i += temp
        rest -= temp
        if (i >= nums1.length) {
          return nums2[j + rest]
        }
        if (temp > 1) {
          temp = Math.floor(temp / 2)
        } 
        if (rest === 0) {
          return nums1[i] > nums2[j] ? nums2[j] : nums1[i]
        }
      }
    }
  }
};                                                    

let nums1 = [1, 3, 5, 6, 7, 8]

let nums2 = [2,3,4,5,6,7,8]
console.log(midNum(nums1, nums2)) // 2.5

=======
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

  if (length1 === 1 && length2 === 1) {
    return (nums1[0] + nums2[0]) / 2
  }
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
  function findK(k) { //因为传入的是下标 从零开始
    let i = 0, j = 0 // 只记开头的位置
    let rest = k     // 只需要排除k个 就可以找到下标为k的数字第k+1个
    let temp = k     // 需要找下标为k的数字
    while (temp >= 1) {  // 如 传入 temp = 7 找到第七个位置

      if (temp > 1) {
        temp = Math.floor(temp / 2)// 3
      }  
      if (temp > nums1.length) {
        temp = 1
      }
      if (temp > nums2.length) {
        temp = 1
      }
      debugger
      if (nums1[temp - 1 + i] > nums2[temp - 1 + j]) { 
        j += temp
        rest -= temp
        if (j >= nums2.length) {
          return nums1[i + rest]
        }
        if (temp > 1) {
          temp = Math.floor(temp / 2) 
        }  
        if (rest === 0) {
          return nums1[i] > nums2[j] ? nums2[j] : nums1[i]
        }
      } else {
        i += temp
        rest -= temp
        if (i >= nums1.length) {
          return nums2[j + rest]
        }
        if (temp > 1) {
          temp = Math.floor(temp / 2)
        } 
        if (rest === 0) {
          return nums1[i] > nums2[j] ? nums2[j] : nums1[i]
        }
      }
    }
  }
};                                                    

let nums1 = [1, 3, 5, 6, 7, 8]

let nums2 = [2,3,4,5,6,7,8]
console.log(midNum(nums1, nums2)) // 2.5

>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
