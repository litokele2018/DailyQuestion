// 生成N个不重复的区间在[min,max]之间的随机数
let set = new Set()
// [3, 1000]
let MIN = 3,
  MAX = 1000
let N = 10
for (let i = 0; i < N; i++) {
  let r = Math.random() * (MAX - MIN) + MIN
  while (set.has(r)) {
    r = Math.random() * (MAX - MIN) + MIN
  }
  set.add(r)
  console.log(r)
}