var findMedianSortedArrays = function(nums1, nums2) {
  // 要用第k小数法
  let len1 = nums1.length
  let len2 = nums2.length
  let total = len1 + len2
  if (total % 2 === 0) {
    let k1 = findK(total >> 1, nums1, nums2)
    let k2 = findK((total >> 1) + 1, nums1, nums2)
    return (k1 + k2) / 2
  } else {
    return findK((total >> 1) + 1, nums1, nums2)
  }
};

function findK(n, arr1, arr2) {
  // 记录还需要找多少个
  let len1 = arr1.length,
    len2 = arr2.length

  if (!len1 || !len2) {
    if (len1) return arr1[n - 1]
    return arr2[n - 1]
  }

  let rest = n
  let k = rest
  let l1 = 0,
    l2 = 0
  let res
  while (rest) {
    k = (k >> 1) < 1 ? 1 : (k >> 1)

    if (l1 >= len1) return arr2[l2 + rest - 1]
    if (l2 >= len2) return arr1[l1 + rest - 1]

    if (l1 + k >= len1) k = 1
    if (l2 + k >= len2) k = 1

    if (arr1[l1 + k - 1] > arr2[l2 + k - 1]) {
      res = arr2[l2 + k - 1]
      l2 += k
    } else {
      res = arr1[l1 + k - 1]
      l1 += k
    }
    rest -= k
  }
  return res
}

let nums1 = [1, 6, 7],
  nums2 = [2, 3, 4, 5, 8]

findMedianSortedArrays(nums1, nums2)