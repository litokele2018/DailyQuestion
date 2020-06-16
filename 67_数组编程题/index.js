<<<<<<< HEAD
/*  
  数组编程题
  随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，
  要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
*/
// 生成随机的数组
function randomArray(n) {
  let a = new Array(n)
  for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * 200) // 10000之间的随机数
  }
  return a
}

let arr = randomArray(10)
let arr = [2, 10, 3, 4, 5, 11, 10, 11, 20, 2, 8, 9, 5, 22, 21, 21]

function arraySeperate(arr) {
  let result = []
  let set = new Set() // 记录出现过的值
  let setCount = new Set() // 记录重复的值
  let flag = true // 记录前一个是不是 重复的值 true: 是
  // 去重
  for (let item of arr) {
    if (!set.has(item)) {
      result.push(item)
      set.add(item)
    } else {
      setCount.add(item)
    }
  }
  // 排序
  result.sort((a, b) => {
    return a - b
  })
  // 分类
  let newArr = []
  for (let i = 0; i < result.length; i++) {
    if (setCount.has(result[i])) { // 该值是重复的值
      let temp = []
      temp.push(result[i])
      if (flag && i !== 0) { // 如果前一个也是 重复的 ， 排除第一次默认true
        newArr[newArr.length - 1].push(...temp)
      } else {
        newArr.push(temp)
      }
      flag = true
      continue
    }
    if (flag) { // 前一个是重复的
      let temp = []
      temp.push(result[i])
      newArr.push(temp)
      flag = false
    } else {
      newArr[newArr.length - 1].push(result[i])
    }
  }
  return newArr
}

=======
/*  
  数组编程题
  随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，
  要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
*/
// 生成随机的数组
function randomArray(n) {
  let a = new Array(n)
  for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * 200) // 10000之间的随机数
  }
  return a
}

let arr = randomArray(10)
let arr = [2, 10, 3, 4, 5, 11, 10, 11, 20, 2, 8, 9, 5, 22, 21, 21]

function arraySeperate(arr) {
  let result = []
  let set = new Set() // 记录出现过的值
  let setCount = new Set() // 记录重复的值
  let flag = true // 记录前一个是不是 重复的值 true: 是
  // 去重
  for (let item of arr) {
    if (!set.has(item)) {
      result.push(item)
      set.add(item)
    } else {
      setCount.add(item)
    }
  }
  // 排序
  result.sort((a, b) => {
    return a - b
  })
  // 分类
  let newArr = []
  for (let i = 0; i < result.length; i++) {
    if (setCount.has(result[i])) { // 该值是重复的值
      let temp = []
      temp.push(result[i])
      if (flag && i !== 0) { // 如果前一个也是 重复的 ， 排除第一次默认true
        newArr[newArr.length - 1].push(...temp)
      } else {
        newArr.push(temp)
      }
      flag = true
      continue
    }
    if (flag) { // 前一个是重复的
      let temp = []
      temp.push(result[i])
      newArr.push(temp)
      flag = false
    } else {
      newArr[newArr.length - 1].push(result[i])
    }
  }
  return newArr
}

>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
arraySeperate(arr) // [[2], [3, 4], [5], [8, 9], [10, 11], [20], [21], [22]]