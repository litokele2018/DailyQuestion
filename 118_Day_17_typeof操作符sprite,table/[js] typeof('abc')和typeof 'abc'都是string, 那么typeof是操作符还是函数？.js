// [js] typeof('abc')和typeof 'abc'都是string, 那么typeof是操作符还是函数？

console.log(typeof ('123')) // string
console.log(typeof '123') // string
// 括号有无将决定表达式的类型。
var iData = 99;

typeof iData + ' Wisen'; // 'number Wisen'
typeof (iData + ' Wisen'); // 'string' 

// 括号只是一个包裹 可以不用 是 操作符