/**
 * versions是一个项目的版本号列表，因多人维护，不规则
 * 
 */
var versions = ['1.5.1', '1.5', '6', '3.3.3.3.3.3']
versions = ['1.2.3.410.5', '1.2.3.409.4.1.2.3.4']
versions = ['1.45.0', '1.5', '1.45.1']
// 要求从小到大排序 注意 1.45 比 1.5 大
// 结果 var sorted = ['1.5', '1.45.0', '3.3.3.3.3.3', '6']
versions.sort((a, b) => {
  let arrA = a.split('.')
  let arrB = b.split('.')
  let i = 0
  while (i < arrA.length && i < arrB.length && arrA[i] === arrB[i]) {
    i++
  }
  if (i >= arrA.length) {
    // a 比较短 a - b 返回小于 0
    // 包含相同的情况
    return -1
  } else if (i >= arrB.length) {
    return 1
  } else if (parseInt(arrA[i]) < parseInt(arrB[i])) {
    return -1
  } else {
    return 1
  }
})
console.log(versions)