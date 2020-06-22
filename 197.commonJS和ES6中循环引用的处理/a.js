exports.x = 'a1'

// 执行到这一步， 发现引用了b， 则立即转而执行b
console.log('a.js', require('./b').x)

// 从 b 执行完回来 再导出 a2 
exports.x = 'a2'