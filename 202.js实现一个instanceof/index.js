// js--实现一个instanceof
var _instanceof = function(a, b) {
  let L = a.__proto__;
  let R = b.prototype;

  while (true) {
    
    if (L === R) {
      return true;
    }

    if (L === null) {
      return false;
    } // a.__proto__ === null => a === Object.prototype, 已经找到了原型链的最顶端

    L = L.__proto__;
  }
}