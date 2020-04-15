/* [js] 写一个数组去重的方法（支持多维数组） */

let arr = [
  [1, 22, 12, 1, 22, 1, 2, 2],
  [1, 2, 2], 1, 2, 3, 2, 1
]

function Deduplication(arr) {
  let ans = []
  let set = new Set()
  arr.forEach(item => {
    if (Array.isArray(item)) {
      ans.push(Deduplication(item))
    } else {
      if (!set.has(item)) {
        ans.push(item)
        set.add(item)
      }
    }
  })
  return ans
}

Deduplication(arr)
debugger