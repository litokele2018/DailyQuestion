// [js] 你对new操作符的理解是什么？手动实现一个new方法
function Person(name, age) {
  this.name = name
  this.age = age
}

function myNew(xx, ...args) {
  let result = xx(...args)
  if (typeof result === 'object') {
    return result
  }
  let obj = {}
  obj.__proto__ = xx.prototype
  xx.call(obj, ...args)
  return obj
}

let x = myNew(Person, 'litokele', 18)