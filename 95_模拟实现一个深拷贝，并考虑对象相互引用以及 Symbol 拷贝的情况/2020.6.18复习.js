let objx = {}
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

function deepClone(obj) {
  let result = {}
  // 处理环
  let map = new Map()
  return handler(result, obj, map)
}

function handler(res, target, map) {
  // 普通类型
  for (let key in target) {
    if (!map.has(target[key])) {
      if (typeCheck(target[key])) {
        // 引用类型才加
        map.set(target[key], 1)
        res[key] = handler(initType(target[key]), target[key], map)
      } else {
        res[key] = target[key]
      }
    } else {
      // 如果出现环 直接赋值
      res[key] = target[key]
    }
  }
  let symbols = Object.getOwnPropertySymbols(target)
  // 处理symbol
  for (let key of symbols) {
    if (!map.has(target[key])) {
      if (typeCheck(target[key])) {
        map.set(target[key], 1)
        res[key] = handler(initType(target[key]), target[key], map)
      } else {
        res[key] = target[key]
      }
    } else {
      res[key] = target[key]
    }
  }
  return res
}

function typeCheck(v) {
  let type = Object.prototype.toString.call(v)
  if (type === '[object Array]' || type === '[object Object]') {
    return true
  } else {
    return false
  }
}

function initType(v) {
  let type = Object.prototype.toString.call(v)
  if (type === '[object Array]') return []
  else return {}
}

let r = deepClone(obj)
console.log(r)