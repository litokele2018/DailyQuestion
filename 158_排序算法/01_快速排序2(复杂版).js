let arr = [3, 5, 6, 7, 2, 1, 4]

function quickSort(arr) {
  let left = 0,
    right = arr.length - 1
  handler(left, right, arr)
  return arr
}

function handler(left, right, arr) {
  if (left >= right) {
    return
  }
  // 取第一个作为pivot
  let pivot = arr[left]
  let i = left,
    j = right
  while (i < j) {
    // 从右边开始
    while (i < j && arr[j] >= pivot) {
      j--
    }
    // 找到一个比pivot小的
    arr[i] = arr[j]
    while (i < j && arr[i] < pivot) {
      i++
    }
    // 找到一个比pivot大的
    arr[j] = arr[i]
  }
  arr[i] = pivot
  handler(left, i - 1, arr)
  handler(i + 1, right, arr)
}

let s = quickSort(arr)
console.log(s)