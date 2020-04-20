// [js] 说说bind、call、apply的区别？并手写实现一个bind的方法
// bind 绑定this返回一个函数
// call 绑定this 调用 参数 不是数组
// apply 绑定this 调用 参数是数组

Function.prototype.myCall = function (obj = window, ...args) {
  obj.fn = this
  let result = obj.fn(...args)
  delete obj.fn
  return result
}

Function.prototype.myApply = function (obj = window, args) {
  obj.fn = this
  let result = obj.fn(...args)
  delete obj.fn
  return result
}

Function.prototype.myBind = function(obj) {
  var _this = this
  // 返回一个函数
  return function F(...args) {
    // 通过new 调用函数时
    if (this instanceof F) {
      return new _this(...args)
    }
    // 通过普通调用
    return _this.apply(obj, args)
  }
}

function sayHello(name) {
  console.log(`hello_${name} ${this}`)
}
let obj = {
  name: 'litokele'
}
let xx = sayHello.bind(obj)
new xx('www')
xx('kele')