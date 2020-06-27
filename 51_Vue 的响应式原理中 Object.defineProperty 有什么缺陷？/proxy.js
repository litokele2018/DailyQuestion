let obj = {
  name: 'litokele',
  age: 18,
  fav: {
    time: '2020.06.26'
  }
}

let p = new Proxy(obj, {
  get(target, key, receiver) {
    console.log(target + ':' + key)
    return Reflect.get(target, key, receiver)
  },
  set(target, key, val, receiver) {
    return Reflect.set(target, key, val, receiver)
  }
})

console.log(p.name)