let obj1 = {
  name: 'litokele',
  age: 18,
  gender: '男'
}
let obj2 = {
  name: 'litokele',
  age: 18,
  gender: '男'
}

// obj1 和 obj2 的内容是相同的 后面可以传函数
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // true