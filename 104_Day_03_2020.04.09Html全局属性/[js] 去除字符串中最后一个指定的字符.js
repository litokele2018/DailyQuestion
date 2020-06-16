<<<<<<< HEAD
// 删除字符串中 指定字符 的最后一个

function removeCharAtEnd(str, s) {
  let map = new Map()
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], i)
  }
  let x = str.split('')
  x[map.get(s)] = ''
  return x.join('')
}

let str = 'xxxxxxxxxxxxss '

removeCharAtEnd(str, 's')
=======
// 删除字符串中 指定字符 的最后一个

function removeCharAtEnd(str, s) {
  let map = new Map()
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], i)
  }
  let x = str.split('')
  x[map.get(s)] = ''
  return x.join('')
}

let str = 'xxxxxxxxxxxxss '

removeCharAtEnd(str, 's')
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
debugger