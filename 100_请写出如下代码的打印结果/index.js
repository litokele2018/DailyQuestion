<<<<<<< HEAD
// 请写出如下代码的打印结果
function Foo() {
  Foo.a = function() {
      console.log(1)
  }
  this.a = function() {
      console.log(2)
  }
}
Foo.prototype.a = function() {
  console.log(3)
}
Foo.a = function() {
  console.log(4)
}
Foo.a() // 4

let obj = new Foo(); 
obj.a() // 2
=======
// 请写出如下代码的打印结果
function Foo() {
  Foo.a = function() {
      console.log(1)
  }
  this.a = function() {
      console.log(2)
  }
}
Foo.prototype.a = function() {
  console.log(3)
}
Foo.a = function() {
  console.log(4)
}
Foo.a() // 4

let obj = new Foo(); 
obj.a() // 2
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
Foo.a() // 1