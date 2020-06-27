// 要求：
// 两个方法on(eventname,callback),trigger(eventname,params)，
// on绑定可以给eventname绑定多个callback，trigger触发eventname的callback，params是参数。
// 另外口述了如何实现once功能（callback只允许调用一次）

function EventEmitter() {
  this.eventList = {}
}
EventEmitter.prototype.on = function(eventname, callback) {
  if (!this.eventList[eventname]) {
    this.eventList[eventname] = []
  }
  this.eventList[eventname].push(callback)
}

EventEmitter.prototype.trigger = function(eventname, params) {
  if (!this.eventList[eventname]) {
    for (let i = 0; i < this.eventList[eventname].length; i++) {
      this.eventList[eventname][i](params)
    }
  }
}