let arr = [3, 5, 1, 3, 534, 1, 123, 67, 56, 252, 4, 768, 32, 2334, 23]
// 归并排序
function mergeSort(arr) {
  let left = 0,
    right = arr.length - 1
  return handler(arr, left, right)
}

function merge(arr1, arr2) {
  let len1 = arr1.length,
    len2 = arr2.length
  let res = []
  let i = 0,
    j = 0
  let count = 0
  while (count < len1 + len2) {
    if (i >= len1) {
      res.push(arr2[j])
      j++
    } else if (j >= len2) {
      res.push(arr1[i])
      i++
    } else if (arr1[i] >= arr2[j]) {
      res.push(arr2[j])
      j++
    } else {
      res.push(arr1[i])
      i++
    }
    count++
  }
  return res
}


function handler(arr, left, right) {
  if (left === right) return [arr[left]]
  let mid = left + ((right - left) >> 1)
  return merge(handler(arr, left, mid), handler(arr, mid + 1, right))
}

let r = mergeSort(arr)

console.log(r)
