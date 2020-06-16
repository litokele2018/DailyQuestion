<<<<<<< HEAD
// [js] 说说bind、call、apply的区别？并手写实现一个bind的方法
// bind 绑定this返回一个函数
// call 绑定this 调用 参数 不是数组
// apply 绑定this 调用 参数是数组

Function.prototype.myCall = function(obj = window, ...args) {
  obj.fn = this
  let result = obj.fn(...args)
  delete obj.fn
  return result
}

Function.prototype.myApply = function(obj = window, args) {
  obj.fn = this
  let result = obj.fn(...args)
  delete obj.fn
  return result
}

Function.prototype.myBind = function(target) {
  target = target || window; //如果没有传入,就为window

  var self = this; //谁调用myBind，this就指向谁

  var args = [].slice.call(arguments, 1); //args:[arguments[1],arguments[2]....]

  var temp = function() {};

  var fn = function() {
    var fnArgs = [].slice.call(arguments, 0);
    //this 如果new fn()  this 指向构造出来的对象，否则为window ;this instanceof fn看this的原型链上有没有fn的原形
    return self.apply(this instanceof fn ? this : target, args.concat(fnArgs));
  }

  temp.prototype = this.prototype;

  fn.prototype = new temp(); //形成继承关系  fn.prototype.__proto__ == this.prototype  true
  
  return fn;
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

=======
// [js] 说说bind、call、apply的区别？并手写实现一个bind的方法
// bind 绑定this返回一个函数
// call 绑定this 调用 参数 不是数组
// apply 绑定this 调用 参数是数组

Function.prototype.myCall = function(obj = window, ...args) {
  obj.fn = this
  let result = obj.fn(...args)
  delete obj.fn
  return result
}

Function.prototype.myApply = function(obj = window, args) {
  obj.fn = this
  let result = obj.fn(...args)
  delete obj.fn
  return result
}

Function.prototype.myBind = function(target) {
  target = target || window; //如果没有传入,就为window

  var self = this; //谁调用myBind，this就指向谁

  var args = [].slice.call(arguments, 1); //args:[arguments[1],arguments[2]....]

  var temp = function() {};

  var fn = function() {
    var fnArgs = [].slice.call(arguments, 0);
    //this 如果new fn()  this 指向构造出来的对象，否则为window ;this instanceof fn看this的原型链上有没有fn的原形
    return self.apply(this instanceof fn ? this : target, args.concat(fnArgs));
  }

  temp.prototype = this.prototype;

  fn.prototype = new temp(); //形成继承关系  fn.prototype.__proto__ == this.prototype  true
  
  return fn;
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

>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
sayHello.bind(obj)