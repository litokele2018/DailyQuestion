class Sup {

}
class Sub extends Sup {

}
// 对于类
console.log(Sub.__proto__ === Sup) 
console.log(Sub.prototype.__proto__ === Sup.prototype)

// 对于实例
let sub = new Sub()
console.log(sub.__proto__ === Sub.prototype)