<<<<<<< HEAD
var b = 10;
(function b(){ //  在非匿名自执行函数中，函数变量为只读状态无法修改
    b = 20; 
    console.log(b); // funcition b
})();
console.log(b)

function b() {
  console.log(b)
  b = 20
}
=======
var b = 10;
(function b(){ //  在非匿名自执行函数中，函数变量为只读状态无法修改
    b = 20; 
    console.log(b); // funcition b
})();
console.log(b)

function b() {
  console.log(b)
  b = 20
}
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
b() // Errot b is not a function