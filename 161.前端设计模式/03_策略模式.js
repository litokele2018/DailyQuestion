/**
 * 策略模式的本意将算法的使用与算法的实现分离开来，避免多重判断调用哪些算法。
 * 适用于有多个判断分支的场景，如解决表单验证的问题。
 * 你可以创建一个validator对象，有一个validate()方法。
 * 这个方法被调用时不用区分具体的表单类型，它总是会返回同样的结果
 * 一个没有通过验证的列表和错误信息。实现方式如下：
 */

// 对于vip客户
function vipPrice() {
  this.discount = 0.5;
}
vipPrice.prototype.getPrice = function(price) {
  return price * this.discount;
}

// 对于老客户
function oldPrice() {
  this.discount = 0.3;
}
oldPrice.prototype.getPrice = function(price) {
  return price * this.discount;
}

// 对于普通客户
function Price() {
  this.discount = 1;
}
Price.prototype.getPrice = function(price) {
  return price;
}

// 上下文，对于客户端的使用
function Context() {
  this.name = '';
  this.strategy = null;
  this.price = 0;
}

Context.prototype.set = function(name, strategy, price) {
  this.name = name;
  this.strategy = strategy;
  this.price = price;
}

Context.prototype.getResult = function() {
  console.log(this.name + ' 的结账价为: ' + this.strategy.getPrice(this.price));
}

var context = new Context();

var vip = new vipPrice();
context.set('vip客户', vip, 200);
context.getResult(); // vip客户 的结账价为: 100

var old = new oldPrice();
context.set('老客户', old, 200);
context.getResult(); // 老客户 的结账价为: 60

var Price = new Price();
context.set('普通客户', Price, 200);
context.getResult(); // 普通客户 的结账价为: 200