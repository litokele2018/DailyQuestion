/**
 * 模块模式可以指定类想暴露的属性和方法，并且不会污染全局。采用闭包的形式，实现如下
 */

var Person = (function() {
  var name = 'xxx'

  function sayName() {
    console.log(name)
  }

  return {
    name,
    sayName
  }
})()
