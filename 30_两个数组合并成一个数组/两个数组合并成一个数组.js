<<<<<<< HEAD
// 两个数组合并成一个数组
/* 
  请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 
  和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']
*/
let a = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let b = ['A', 'B', 'C', 'D']
b = b.map(item => item + 3)
let result = [...a, ...b]
result = result.sort().map(item => {
  if (item.includes('3')) {
    return item.split('')[0]
  }
  return item
})
=======
// 两个数组合并成一个数组
/* 
  请把两个数组 ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'] 
  和 ['A', 'B', 'C', 'D']，合并为 ['A1', 'A2', 'A', 'B1', 'B2', 'B', 'C1', 'C2', 'C', 'D1', 'D2', 'D']
*/
let a = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let b = ['A', 'B', 'C', 'D']
b = b.map(item => item + 3)
let result = [...a, ...b]
result = result.sort().map(item => {
  if (item.includes('3')) {
    return item.split('')[0]
  }
  return item
})
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
console.log(result)