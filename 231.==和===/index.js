// == 不同类型 转换为相同类型 进行值比较
// === 如果类型不同，其结果就是不等
console.log(1 == '1') // true
console.log(true == 1) // true
console.log(true == 1) // true
console.log(true == '1') // true
console.log(true == '123') // false
console.log(true == 2) // false
console.log(true == 123) // false
console.log(false == 0) // true
console.log(new Boolean('123').valueOf() == true) // true

// 2、对于Array,Object等高级类型，==和===是没有区别的

// 3、基础类型与高级类型，==和===是有区别的
// 对于==，将高级转化为基础类型，进行“值”比较，因为类型不同，===结果为false