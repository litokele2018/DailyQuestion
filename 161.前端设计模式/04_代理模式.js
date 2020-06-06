/**
 * 代理模式是为其他对象提供一种代理，也就是当其他对象直接访问该对象时，
 * 如果开销较大，就可以通过这个代理层控制对该对象的访问。
 * 常见的使用场景为懒加载，合并http请求和缓存
 */

(function() {
  // 目标对象，是真正被代理的对象
  function Subject() {}
  Subject.prototype.request = function() {};

  function Proxy(realSubject) {
    this.realSubject = realSubject;
  }

  Proxy.prototype.request = function() {
    this.realSubject.request();
  };
}());

// http请求缓存
/**
 * 比如在做后端系统中，有表格数据，每一条数据前面有复选框按钮，当点击复选框按钮时候，
 * 需要获取该id后需要传递给给服务器发送ajax请求，服务器端需要记录这条数据，去请求，
 * 如果我们每当点击一下向服务器发送一个http请求的话，对于服务器来说压力比较大，网络请求比较频繁，
 * 但是如果现在该系统的实时数据不是很高的话，我们可以通过一个代理函数收集一段时间内(比如说2-3秒)的所有id，
 * 一次性发ajax请求给服务器，相对来说网络请求降低了, 服务器压力减少了;
 */

// 缓存代理
// 计算乘法
var mult = function() {
  var a = 1;
  for (var i = 0, ilen = arguments.length; i < ilen; i += 1) {
    a = a * arguments[i];
  }
  return a;
};

// 计算加法
var plus = function() {
  var a = 0;
  for (var i = 0, ilen = arguments.length; i < ilen; i += 1) {
    a += arguments[i];
  }
  return a;
}

// 代理函数
var proxyFunc = function(fn) {
  var cache = {}; // 缓存对象
  return function() {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args]; // 使用缓存代理
    }
    return cache[args] = fn.apply(this, arguments);
  }
};
var proxyMult = proxyFunc(mult);
console.log(proxyMult(1, 2, 3, 4)); // 24
console.log(proxyMult(1, 2, 3, 4)); // 缓存取 24

var proxyPlus = proxyFunc(plus);
console.log(proxyPlus(1, 2, 3, 4)); // 10
console.log(proxyPlus(1, 2, 3, 4)); // 缓存取 10