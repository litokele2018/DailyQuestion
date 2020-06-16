function heapSort(arr) {
  let len = arr.length
  createHeap(arr, len)

  // 开始 heapSort
  for (let i = len - 1; i >= 0; i--) {
    swap(arr, 0, i)
    heapify(arr, i, 1)
  }
  console.log(arr)
}


function heapify(arr, n, i) {
  let c1 = 2 * i - 1
  let c2 = 2 * i
  // c1都没有直接return
  if (c1 > n - 1) return
  // 因为是下标
  let max = i - 1
  if (c1 < n && arr[c1] > arr[max]) {
    max = c1
  }
  if (c2 < n && arr[c2] > arr[max]) {
    max = c2
  }
  // 如果有交换过
  if (i - 1 !== max) {
    swap(arr, i - 1, max)
    heapify(arr, n, max + 1)
  }
}

function createHeap(arr, n) {
  let last_parent = Math.floor(n / 2)
  for (let i = last_parent; i >= 1; i--) {
    heapify(arr, n, i)
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let arr = [3, 5, 1, 3, 534, 1, 123, 67, 56, 252, 4, 768, 32, 2334, 23]

heapSort(arr)