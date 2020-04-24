### 内存泄漏
+ 任何对象在你不再拥有或需要它之后仍然存在，就叫做内存泄漏；
+ 垃圾回收定期扫描对象，并计算引用了每个对象的其他对象的数量，如果一个对象引用数量为0，或对该对象的唯一引用是循环的，那么该对象内存即可回收

### 引起内存泄漏的操作
+ setTimeout的第一个参数使用字符串而非函数的话，会引发内存泄漏
> 因为如果传入的是普通函数，在函数执行完后就会被销毁
```js
const foo = () => {
  console.log('我会被销毁哦')
}
setTimeout(foo, 1000)
// 这个函数就不会被销毁
setTimeout(foo.toString(), 1000)
```
+ 闭包
```js
const i = 1
// 被立即执行函数内部引用
(function (i) {
  console.log(i)
})(i)
```
+ 控制台日志
> 如果你输出对象的话，控制台会一直引用这个对象，垃圾回收机制就无法回收这个对象，造成泄漏
+ 循环（两个对象互相引用且彼此保留，就会产生一个循环
```js
let obj1 = {
  name: 'litokele'
}
let obj2 = {
  name: obj1.name,
  age: 12
}
obj1.age = obj2.age
```
+ 意外的全局变量
```js
function foo() {
  // 函数定义在window环境中的this
  this.a = 123
  // 初始化未经声明的变量
  bar = 'xxx'
}
```
+ 计时器或回调函数
```js
let timer = setInterVal(() => {
  console.log(1)
}, 1000)
// 定时器未被清除
clearInterval(timer)
```
+ DOM元素结点被清空或者删除时，绑定的事件未被清除
```js
<div id='xx'></div>
xx.addEventListener('click', () => {
  console.log('想不到吧，你内存泄漏了！')
})
```