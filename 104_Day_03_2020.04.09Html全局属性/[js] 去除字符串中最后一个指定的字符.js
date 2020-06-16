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
debugger