// [js] 你理解的"use strict";是什么?使用它有什么优缺点？
// 严格模式，其实就是更严格了

// 设立"严格模式"的目的，主要有以下几个：
// 　　- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
// 　　- 消除代码运行的一些不安全之处，保证代码运行的安全；
// 　　- 提高编译器效率，增加运行速度；
// 　　- 为未来新版本的Javascript做好铺垫。

// 我放几个常见的吧，详情可以去下面的文章中看

// 禁止this关键字指向全局对象
// 禁止在函数内部遍历调用栈
// 全局变量必须显式声明
// arguments不再追踪参数的变化
// 严格模式下的 全局中的this 是undefined 不是window
(function(){
	"use strict"
	b=1//Uncaught ReferenceError: b is not defined
})()
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
// http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html