// 使用迭代的方式实现 flatten 函数
// JS 扁平化（flatten） 数组
// let array = [[1,2,3],4,5,6,[[7]],[]]
//  1 迭代递归法
/* function flatten(arr, result = []) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      flatten(item, result)
    } else {
      result.push(item)
    }
  }
  return result
}
console.log(flatten(array)) */

// 2 利用数组的迭代器
/* Array.prototype[Symbol.iterator] = function () {
  let count = 0
  let result = this.toString().split(',').join('').split('')
  return {
    next: function() {
      if (count < result.length) {
        return {value: result[count ++], done: false} // 这里的done必须写布尔值
      } else {
        return {value: undefined, done: true}
      }  
    }
  }
}
let array = [[1,2,3],4,5,6,[[7]],[]]
array[Symbol.iterator] = Array.prototype[Symbol.iterator].bind(array)
for (const item of array) {
  console.log(item)
}
 */

//  3.生成器实现 Generator
/* function* flat(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flat(item)
    } else {
      yield item
    }
  }
}
function flatten (arr) {
  let result = []
  for (const item of flat(arr)) {
    result.push(item)
  }
  return result
}
let arr = [[1,2,3],4,5,6,[[7]],[]]
console.log(flatten(arr)) // [1, 2, 3, 4, 5, 6, 7]
let result = arr.toString().split(',').join('').split('') // ['1', '2', '3', '4', '5', '6', '7' ]
console.log(result) */

// 4.reduce

let arr = [[1,2,3],4,5,6,[[7]],[]]

function faltten(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? faltten(curr) : curr)
  }, [])
}
console.log(faltten(arr))
