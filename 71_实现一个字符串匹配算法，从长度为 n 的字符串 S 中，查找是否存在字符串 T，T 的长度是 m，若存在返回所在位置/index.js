/* 
  实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置
*/

let str1 = 'asdsacafsdafgdbc'
let str2 = 'daf'
// expected : 4
String.prototype.checkPosition = function (str1) {
  let rex = new RegExp(this, 'g')
  let arr = this.split('') 
  let index = 0
  let temp = []

  for (let item of arr) { // 每个值都有一个set  用set存储所有的 位置信息
    temp.push({value: item, set: new Set()})
  }

  if (rex.test(str1)) { // 如果有
    while (arr.length) {
      let q = arr.shift()
      for (let i = 0; i < str1.length; i++) {
        if (q === str1[i]) {   
          temp[index].set.add(i)
        }
      }
      index ++
    }
    let flag = true
    let first
    for (let item of temp[0].set) { 
      console.log(item) // 0 4 6 10
      for (let j = 1; j < temp.length; j ++) {
        if (!temp[j].set.has(item + j)) {
          flag = false
          break
        } else {
          flag = true
          continue
        }
      }
      if (flag) {
        first = item
      } else {
        first = null
      }
      if (first) {
        return `从${first}到${first + temp.length - 1}`
      }
    }
  } else {
    return false 
  }
} 
str2.checkPosition(str1)
debugger