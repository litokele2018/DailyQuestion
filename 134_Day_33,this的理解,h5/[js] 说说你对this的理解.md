### this 总结
> 参考文章：
> https://muyiy.cn/blog/3/3.1.html

#### this 的绑定规则
+ 1、 默认绑定（严格模式 / 非严格模式）
+ 2、 隐式绑定
+ 3、 显示绑定
+ 4、 new 绑定
+ 5、 箭头函数绑定 

> 首先了解几个概念：
### 1.调用位置
> 函数在代码中被调用的作用域，不是声明时所处的作用域
```js
function foo() {
  // 调用栈：foo
  // 此时调用位置时在全局作用域
  console.log('foo')
  bar() // bar的调用位置, 此时调用位置在foo中
}
function bar() { // 全局中定义但未调用
  // 调用栈：foo -> bar
  console.log('bar')
}
foo() // foo的调用位置，全局中调用
```
### 2.this的绑定规则
#### 2.1 默认绑定
> + 独立的函数调用
> 当其他规则不满足时，为默认绑定，this指向**全局对象**。
```js
function foo() {
  this.val = 123 // this => window
}
```
> + 严格模式下
> 默认绑定失效， this指向 **undefined**
```js
  // 1.在函数中的严格模式
  function foo() {
    "use strict"
    console.log(this)
  }
  foo()  // undefined
  ----------------------
  // 2.在严格模式中调用函数
  function foo() {
    console.log(this) 
  }
  (function () {
    "use strict"
    foo() // window
  })()
```

#### 2.2 隐式绑定
> 当函数引用有**上下文对象**时， 隐式绑定规则会把函数中的this绑定到这个上下文对象。对象属性引用链中只有上一层或者说最后一层在调用中起作用。
```js
function foo() {
  console.log(this.a)
}
foo() // undefined

let obj = { // => 上下文对象
  a: 123,
  foo: foo  // => 函数引用
}
obj.foo() // 123
```

> + 隐式丢失
> 被隐式绑定的函数， 在特定情况下会丢失绑定对象， 应用**默认绑定**， 把 **this** 绑定在 **全局对象** 或者 **undefined** 上。
```js
function foo() {
  console.log(this)
  console.log(this.a)
}
let obj = {
  a: 123,
  foo: foo
}
let bar = obj.foo
// 这里bar看似引用obj上的foo，
// 但实际上还是引用的foo函数本身， 采用默认绑定
bar() // global | window, undefined
```
> **参数传递**就是一种隐式赋值，传入函数时也会被隐式赋值。回调函数丢失this绑定是非常常见的。
```js
  var a = 'global'
  function doFoo(fn) {
    fn()
  }
  function foo() {
    console.log(this)
    console.log(this.a)
  }
  let obj = {
    a: 'obj',
    foo: foo
  }
  obj.foo() // obj{}, obj
  doFoo(obj.foo); // window, 'global'

  setTimeout(function () {
    console.log(this) // window
  }, 1000)
```
#### 2.3 显示绑定
> 通过调用call或者apply方法
```js
function foo() {
  console.log(this)
}
let obj = {
  a: 2
}
foo.call(obj) // obj { a: 2 }
```
**如何解决绑定丢失问题**
+ 1. 硬绑定
```js
function foo() {
  console.log(this)
}
let obj = {}
const bar = function () {
  foo.call(obj)
}
bar() // obj
setTimeout(bar, 1000) // obj
bar.call(window) // obj
```
+ 2. ES5内置了Function.prototype.bind，bind会返回一个硬绑定的新函数
+ 3. API调用的“上下文”
```js
  const obj = {
    name: 'litokele'
  }
  [1, 2, 3].forEach(function (item) {
    console.log(item, this.name) // 1 litokele 2 litokele, 3 litokele
  }, obj)
  // 因为箭头函数没有自己的this
  // 不能进行call和applly , 不能进行硬绑定
  [1, 2, 3].forEach((item) => {
    console.log(item, this) // window
  }, obj)
```
#### 2.4 new 绑定
**new 函数实现**
```js
  function Person(name, age) {
    this.name = name
    this.age = age
  }
  function myNew(fn, ...args) {
    let obj = {}
    obj.__proto__ = fn.prototype
    let result = fn.call(obj, ...args)
    if (typeof result === 'object') {
      return result
    }
    return obj
  }
  console.log(myNew(Person, 'litokele', 18))
```
> 使用 new 会自动执行下面操作
> + 创建一个新对象
> + 这个对象会被执行 [[Prototype]] 连接
> + 这个新对象会绑定到函数调用的 this
> + 如果函数没有返回其他对象， 那么 `new` 表达式中的函数调用就会自动返回这个新对象。
### 3 绑定优先级
> 1. new 绑定
> 2. 显示绑定
> 3. 隐式绑定
> 4. 默认绑定

### 4 绑定例外
#### 4.1 忽略this
> 把null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认规则

**函数柯里化**
```js
// 需要接受两个参数
function foo(a, b) {
  console.log('a:' + a, 'b:' + b)
}
// bind时 预先传入一个参数
const bar = foo.bind(null, 2)
// 调用时只用传入一个参数
bar(5) // a: 2, b: 5
```
**更安全的this**
> 安全的做法就是传入一个特殊的对象（空对象），把this绑定到这个对象不会对你的程序产生任何副作用
> JS中创建一个空对象最简单的方法是**Object.create(null)**，这个和{}很像，但是并不会创建Object.prototype这个委托，所以比{}更空。
```js
  let obj1 = {}
  let obj2 = Object.create(null);
  console.log(obj1) // {__proto__: Obeject} 
  console.log(obj2) // {No properties}
```
#### 4.2 间接引用
> 间接引用下，调用这个函数会应用默认绑定规则。间接引用最容易在赋值时发生

```js
function foo() {
  console.log(this.a)
}
var a = 2
var obj1 = {
  a: 3,
  foo: foo
}
var obj2 = {
  a: 4
}
obj2.foo = obj1.foo // 实际直接引用 foo
obj2.foo() // 4 隐式绑定
const x = obj2.foo  // 实际直接引用 foo
x()  // 2
```
#### 4.3 软绑定
+ 硬绑定可以把this强制绑定到指定的对象（new除外），防止函数调用应用默认绑定规则。但是会降低函数的灵活性，使用硬绑定之后就无法使用隐式绑定或者显式绑定来修改this。
+ 如果给默认绑定指定一个全局对象和undefined以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显示绑定修改this的能力。
```js
Function.prototype.softBind = function(obj) {
  const fn = this
  let bound = function(...args) {
    fn.call((!this || this === (window || global)) ? obj : this, ...args)
  }
  bound.prototype = Object.create(fn.prototype)
  return bound
}
function foo() {
  console.log('hello', this)
}
let obj = {
  name: 'litokele'
}
let x = foo.softBind(obj)
console.log(x.prototype) // foo {}
x() // hello {name: litokele}
```
### 5 箭头函数
