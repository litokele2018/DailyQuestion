<<<<<<< HEAD
// [js] 写一个获取数组的最大值、最小值的方法
let arr = [123, 123, 4235, 6547, 1]
Math.max(...arr)
Math.max.apply(null, arr)
arr.reduce((acc, cur) => {
  if (cur > acc) {
    return cur
  } else {
    return acc
  }
=======
// [js] 写一个获取数组的最大值、最小值的方法
let arr = [123, 123, 4235, 6547, 1]
Math.max(...arr)
Math.max.apply(null, arr)
arr.reduce((acc, cur) => {
  if (cur > acc) {
    return cur
  } else {
    return acc
  }
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
}, -Infinity)