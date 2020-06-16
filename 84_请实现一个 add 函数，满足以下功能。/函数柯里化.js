/* 
  现在定义一个函数 add 需要接受 3 个参数
  当接受的参数小于3时 暂时不调用 当大于等于3时才进行调用
*/
function add(a, b, c) {
  console.log([a, b, c])
}

function currying(fn, length) { // length 为调用所需要的参数
  length = length || fn.length // 传入参数 表示 该函数 在满足这个数量时才调用 不传 默认所有参数
  return function (...args) {
    return args.length >= length ?
      fn.apply(this, args) :
      currying(fn.bind(this, ...args), length - args.length)
  }
}

let add2 = currying(add)

add2(1, 2, 3)  // [1, 2, 3]
add2(1, 2)     // 不调用
add2(1, 2)(3)  // [1, 2, 3]
