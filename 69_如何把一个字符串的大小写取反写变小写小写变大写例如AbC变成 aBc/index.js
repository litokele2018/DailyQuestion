// 如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 
let str1 = 'AbC'

function toggle(str) {
  let s =''
  for (let i in str) {
    if (str[i] === str[i].toUpperCase()) {
      s += str[i].toLowerCase()
    } else {
      s += str[i].toUpperCase()
    }
  }
  return s
}
let result = toggle(str1)