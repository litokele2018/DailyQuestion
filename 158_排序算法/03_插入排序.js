function insertSort(arr) {
  // 利用局部有序
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let target = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[target] < arr[j]) {
        [arr[target], arr[j]] = [arr[j], arr[target]]
        target = j
      } else {
        break
      }
    }
  }
  return arr
}

let arr = [3, 5, 1, 3, 534, 1, 123, 67, 56, 252, 4, 768, 32, 2334, 23]

let s = insertSort(arr)
console.log(s)