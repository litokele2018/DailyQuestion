let arr = [3, 5, 1, 3, 534, 1, 123, 67, 56, 252, 4, 768, 32, 2334, 23]

function quickSort(arr) {
  if (!arr.length) {
    return []
  }
  let left = []
  let right = []
  let cur = arr.splice(0, 1)
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] > cur) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(cur, quickSort(right))
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let res = quickSort(arr)
console.log(res)