let obj = {
  name: 'litokele',
  age: 18,
  fav: {
    time: '2020.06.26'
  }
}

function defineReactive(obj, key, val) {

  if (typeof obj[key] === 'object') {
    for (let i in obj[key]) {
      defineReactive(obj[key], i, obj[key][i])
    }
  }

  Object.defineProperty(obj, key, {
    set(newVal) {
      val = newVal
    },
    get() {
      console.log('get:' + key)
      return val
    }
  })
}

for (let key in obj) {
  defineReactive(obj, key, obj[key])
}

console.log(obj.name)
console.log(obj.fav)
console.log(obj.fav.time)