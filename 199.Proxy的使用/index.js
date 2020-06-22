let obj = {
  name: 'litokele',
  age: 18,
  list: ['大哥', '小弟', '3', '4']
}

function defineReactive(obj) {
  
  for (let key in obj) {
    if (Array.isArray(obj[key]) || Object.prototype.toString.call(obj[key]) === '[object Object]') {
      obj[key] = defineReactive(obj[key])
    }
  }

  let p = new Proxy(obj, {
    set(target, key, value, receiver) {
      console.log(key, '我被修改了')
      // receiver一般情况下是proxy实例
      return Reflect.set(target, key, value, receiver)
    },
    get(target, key, receiver) {
      console.log(key, '我被获取了')
      return Reflect.get(target, key, receiver)
    }
  })
  return p
}

let x = defineReactive(obj)

console.log(x.list[0])
