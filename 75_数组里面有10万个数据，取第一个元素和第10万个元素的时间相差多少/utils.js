<<<<<<< HEAD
  // 生成随机的数组
  function randomArray(n) {
    let a = new Array(n)
    for (let i = 0; i < n; i ++) {
      a[i] = Math.floor(Math.random() * 100000) // 10000之间的随机数
    }
    return a
  }
  // 计算耗时
  function countTime(fn, para) {
    let startTime = Date.now()
    let endTime
    for (let i = 0; i < 10000; i ++) {
      fn(para)
    }
    endTime = Date.now()
    return endTime - startTime
  }
  // 交换位置
  function swap(i, j, arr) { // 交换函数
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
=======
  // 生成随机的数组
  function randomArray(n) {
    let a = new Array(n)
    for (let i = 0; i < n; i ++) {
      a[i] = Math.floor(Math.random() * 100000) // 10000之间的随机数
    }
    return a
  }
  // 计算耗时
  function countTime(fn, para) {
    let startTime = Date.now()
    let endTime
    for (let i = 0; i < 10000; i ++) {
      fn(para)
    }
    endTime = Date.now()
    return endTime - startTime
  }
  // 交换位置
  function swap(i, j, arr) { // 交换函数
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
  }