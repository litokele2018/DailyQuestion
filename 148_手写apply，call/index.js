// 手写apply， call

Function.prototype.hyCall = function(target, ...args) {
  target = target || window
  let fn = Symbol('fn')
  target[fn] = this
  let result = target[fn](...args)
  delete target[fn]
  return result
}

Function.prototype.hyApply = function(target, args = []) {
  target = target || window
  let fn = Symbol('fn')
  target[fn] = this
  let result = target[fn](...args)
  delete target[fn]
  return result
}

function sayHello() {
  console.log(this)
}

let obj = {
  name: 'litokele',
  age: 18
}
sayHello.hyCall(obj)
sayHello.hyApply(obj)

Function.prototype.myBind = function(target, ...args1) {
  var fn = this

  var temp = function () {}
  temp.prototype = this.prototype

  var resFn = function(...args2) {
    let args = [...args1, ...args2]
    console.log(this) // 普通调用指向window ， new 调用时 指向 resFn的实例对象
    return this instanceof resFn ? fn.apply(this, args) : fn.apply(target, args)
  }

  resFn.prototype = new temp()

  return resFn
}
console.dir(sayHello.bind(obj))
console.dir(sayHello.myBind(obj))