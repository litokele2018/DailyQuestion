<<<<<<< HEAD
// [js] 深度克隆对象的方法有哪些，并把你认为最好的写出来
let obj2 = {
  name: 'obj2'
}
obj2.age = obj2

let arr2 = [1]
arr2[1] = arr2

let obj = {
  [Symbol("name")]: "litokele",
  age: 18,
  fav: [1, 2, 3],
  info: {
    gender: "男",
    skill: ["soccer", "tennis"],
    obj2: obj2,
    arr2: arr2
  }
}

function deepClone(obj) {
  let result = {}
  let map = new Map() // 处理环状 由于环状对象是同一地址， 所以可以用map来获取
  map.set(obj, {})
  let symbolArr = Object.getOwnPropertySymbols(obj)
  symbolArr.forEach(item => {
    if (Object.prototype.toString.call(item) === ('[object Object]' || '[object Array]')) {
      if (map.get(obj[item])) {
        result[item] = obj[item]
      } else {
        map.set(obj[item], {}) // 储存对象
        result[item] = deepClone(obj[item])
      }
    } else {
      result[item] = obj[item]
    }
  })
  for (let key in obj) {
    if (Object.prototype.toString.call(obj[key]) === ('[object Object]' || '[object Array]')) {
      if (map.get(obj[key])) {
        result[key] = obj[key]
      } else {
        map.set(obj[key], {}) // 储存对象
        result[key] = deepClone(obj[key])
      }
    } else {
      result[key] = obj[key]
    }
  }
  return result
}

=======
// [js] 深度克隆对象的方法有哪些，并把你认为最好的写出来
let obj2 = {
  name: 'obj2'
}
obj2.age = obj2

let arr2 = [1]
arr2[1] = arr2

let obj = {
  [Symbol("name")]: "litokele",
  age: 18,
  fav: [1, 2, 3],
  info: {
    gender: "男",
    skill: ["soccer", "tennis"],
    obj2: obj2,
    arr2: arr2
  }
}

function deepClone(obj) {
  let result = {}
  let map = new Map() // 处理环状 由于环状对象是同一地址， 所以可以用map来获取
  map.set(obj, {})
  let symbolArr = Object.getOwnPropertySymbols(obj)
  symbolArr.forEach(item => {
    if (Object.prototype.toString.call(item) === ('[object Object]' || '[object Array]')) {
      if (map.get(obj[item])) {
        result[item] = obj[item]
      } else {
        map.set(obj[item], {}) // 储存对象
        result[item] = deepClone(obj[item])
      }
    } else {
      result[item] = obj[item]
    }
  })
  for (let key in obj) {
    if (Object.prototype.toString.call(obj[key]) === ('[object Object]' || '[object Array]')) {
      if (map.get(obj[key])) {
        result[key] = obj[key]
      } else {
        map.set(obj[key], {}) // 储存对象
        result[key] = deepClone(obj[key])
      }
    } else {
      result[key] = obj[key]
    }
  }
  return result
}

>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
console.log(deepClone(obj))