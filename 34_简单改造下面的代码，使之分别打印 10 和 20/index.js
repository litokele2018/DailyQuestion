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
})();