<<<<<<< HEAD
// 算法题「旋转数组」
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
/* 
例1：
  输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
  输出: [5, 6, 7, 1, 2, 3, 4]
  解释:
  向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
  向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
  向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]

*/
/* 
例2：
  输入: [-1, -100, 3, 99] 和 k = 2
  输出: [3, 99, -1, -100]
  解释: 
  向右旋转 1 步: [99, -1, -100, 3]
  向右旋转 2 步: [3, 99, -1, -100]
*/

function rotateArray(arr, k) {
  let front = arr.slice(0, arr.length - k)
  let rear = arr.slice(arr.length - k, arr.length)
  let result = rear.concat(front)
  return result
}

// let arr = [1, 2, 3, 4, 5, 6, 7]
let arr = [-1, -100, 3, 99]

=======
// 算法题「旋转数组」
// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
/* 
例1：
  输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
  输出: [5, 6, 7, 1, 2, 3, 4]
  解释:
  向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
  向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
  向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]

*/
/* 
例2：
  输入: [-1, -100, 3, 99] 和 k = 2
  输出: [3, 99, -1, -100]
  解释: 
  向右旋转 1 步: [99, -1, -100, 3]
  向右旋转 2 步: [3, 99, -1, -100]
*/

function rotateArray(arr, k) {
  let front = arr.slice(0, arr.length - k)
  let rear = arr.slice(arr.length - k, arr.length)
  let result = rear.concat(front)
  return result
}

// let arr = [1, 2, 3, 4, 5, 6, 7]
let arr = [-1, -100, 3, 99]

>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
console.log(rotateArray(arr, 2))