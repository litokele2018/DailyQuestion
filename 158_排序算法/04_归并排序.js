function mergeSort(arr) {
  let left = 0,
    right = arr.length - 1
  return handler(left, right, arr)
}

function handler(left, right, arr) {
  if (left === right) return [arr[left]]
  let mid = left + Math.floor((right - left) / 2)
  return merge(handler(left, mid, arr), handler(mid + 1, right, arr))
}

function merge(arr1, arr2) {
  let res = []
  let len1 = arr1.length
  let len2 = arr2.length
  let len = len1 + len2
  let i = 0,
    j = 0
  let count = 0
  while (count < len) {
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

let arr = [3, 5, 1, 3, 534, 1, 123, 67, 56, 252, 4, 768, 32, 2334, 23]

let s = mergeSort(arr)
console.log(s)