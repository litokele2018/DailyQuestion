// [js] 写出几种创建对象的方式，并说说他们的区别是什么？
const a = new Object() // 创建, 不推荐
const b = {} // 赋值, 性能比a要好
const c = Object.create() // 继承创建, Object.create(null) 很多框架都有用来做性能优化