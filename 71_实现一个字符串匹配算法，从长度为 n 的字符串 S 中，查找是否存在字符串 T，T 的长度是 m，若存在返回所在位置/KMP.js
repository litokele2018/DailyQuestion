//  使用KMP实现  KMP 原理就是 减少text 串的 重复遍历 一次结束 时间复杂度O(m + n)
// B 站 阿 三的视频
function KMP(pattern, text) {
  let n = pattern.length
  let m = text.length
  // 计算pattern 的 prefix 数组
  let arr = new Array(n).fill(0)
  let i = 0
  let j = 1
  while (j < n) {
    if (pattern[i] === pattern[j]) {
      arr[j] = i + 1
      i ++ 
      j ++ 
    } else if (i === 0) {
      j ++
    } else {
      i = arr[i - 1]
    }
  }
  // 进行 比较查找
  let h = 0
  let k = 0
  let count = 0
  while (k < n) {
    if (text[h] === pattern[k]) {
      h ++
      k ++
      count ++ 
    } else if (k !== 0) {
      k = arr[k - 1] 
      count = 0
    } else {
      h ++
      count = 0
    }
  }

  if (count === n) {
    return h - n
  }
}

let str1 = 'asdsacafsdafgdbc' // 9
let str2 = 'daf'

let text = 'acbacbabcbcabcabcbcabca' // 11
let pattern = 'abcabcb'
console.log(KMP(str2, str1))