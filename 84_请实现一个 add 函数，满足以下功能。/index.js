<<<<<<< HEAD
// 请实现一个 add 函数，满足以下功能。
/*
  add(1); 			// 1
  add(1)(2);  	// 3
  add(1)(2)(3)；// 6
  add(1)(2, 3); // 6
  add(1, 2)(3); // 6
  add(1, 2, 3); // 6
 */


function add(...args) {
  let result = 0
  args.forEach((item) => {result += item})
 
  let addX = function (...xxx) {
    xxx.forEach(item => {
      result += item
    }) 
    return addX
  }
  addX.toString = function () {
    return result
  }
  addX.valueOf = function () {
    return result
  }
  return addX
}
=======
// 请实现一个 add 函数，满足以下功能。
/*
  add(1); 			// 1
  add(1)(2);  	// 3
  add(1)(2)(3)；// 6
  add(1)(2, 3); // 6
  add(1, 2)(3); // 6
  add(1, 2, 3); // 6
 */


function add(...args) {
  let result = 0
  args.forEach((item) => {result += item})
 
  let addX = function (...xxx) {
    xxx.forEach(item => {
      result += item
    }) 
    return addX
  }
  addX.toString = function () {
    return result
  }
  addX.valueOf = function () {
    return result
  }
  return addX
}
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
console.log(add(1, 3)(2, 3))