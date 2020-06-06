let arr = [3, 5, 1, 3, 534, 1, 123, 67, 56, 252, 4, 768, 32, 2334, 23]

function bubbleSort(arr) {
  let len = arr.length
  while (len) {
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(i, i + 1, arr)
      }
    }
    len--
  }
  return arr
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let res = bubbleSort(arr)
console.log(res)