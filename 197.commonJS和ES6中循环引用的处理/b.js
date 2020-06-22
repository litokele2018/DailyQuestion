exports.x = 'b1'
// 从a跳过来的， 当时a只导出了第一个 x = a1
console.log('b.js', require('./a').x)

exports.x = 'b2'
// 最后b执行完， 就回到了a