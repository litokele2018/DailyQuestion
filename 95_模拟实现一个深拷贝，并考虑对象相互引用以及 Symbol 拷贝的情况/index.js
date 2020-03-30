// 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况

function type(data) {
  let type = Object.prototype.toString.call(data)
  if (type === '[object Array]') {
    return []
  } else if (type === '[object Object]') {
    return {}
  } else {
    return data
  }
}

function deepClone(data) {
  let map = new Map() // 处理环状
  let deepCloneFunc = function (data) {
    let result = type(data)
    if (map.get(data)) {  //处理环状
      result = data
      return result
    } 
    if (result !== data) { // 不是基本数据类型 
      map.set(data, result) // 为了判断该对象是否出现过，处理环状
      const objectSymbolsKey = Object.getOwnPropertySymbols(data) // 普通遍历key是获取不到key 为Symbol的
      if (objectSymbolsKey.length) {
        for (let i in objectSymbolsKey) {
          result[objectSymbolsKey[i]] = deepCloneFunc(data[objectSymbolsKey[i]]) 
        }
      }
      for (let key in data) {
        result[key] = deepCloneFunc(data[key])
      }
      return result
    } else {
      return data
    }
  }
  return deepCloneFunc(data)
}
let objx ={}
objx.repeat = objx

let obj = {
  [Symbol('name')]: 'litokele',
  gender: Symbol('male'),
  age: 18,
  favoriteAnime: ['xxx1', 'xxx2'],
  obj: {
    [Symbol('test')]: 'test',
    name: 'kele',
    age: 18
  },
  repeat: objx
}
let myObj = deepClone(obj)

console.log("my_ojb:", myObj)