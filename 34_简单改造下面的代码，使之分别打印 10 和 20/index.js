<<<<<<< HEAD
// 简单改造下面的代码，使之分别打印 10 和 20
var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();

// 打印 10
global.b = 10;
(function b() {
  b = 20;
  console.log(global.b);
})();


// 打印20
var b = 10;
(function b() {
  let b = 20;
  console.log(b);
=======
// 简单改造下面的代码，使之分别打印 10 和 20
var b = 10;
(function b() {
  b = 20;
  console.log(b);
})();

// 打印 10
global.b = 10;
(function b() {
  b = 20;
  console.log(global.b);
})();


// 打印20
var b = 10;
(function b() {
  let b = 20;
  console.log(b);
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
})();