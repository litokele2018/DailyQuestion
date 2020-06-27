// 首先是 
let n = NaN
if (typeof n === 'number' && isNaN(n)) {
  console.log('是NaN')
}

console.log(Object.is(n, NaN))

console.log(Number.isNaN === isNaN)

// isNaN 会进行类型转换
isNaN('litokele') // true 会将litokele转换为数字， 如果失败就是NaN

// Number.isNaN 不会进行类型转换
Number.isNaN('litokele') // false