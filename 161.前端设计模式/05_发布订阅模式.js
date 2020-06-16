/**
 * 在这种模式中，一个订阅者订阅发布者，当一个特定的事件发生的时候，发布者会通知（调用）所有的订阅者。
 */
var EventCenter = (function() {
  var events = {};

  function on(event, handler) {
    events[event] = events[event] || [];
    events[event].push({
      handler: handler
    });
  }

  function fire(event, args) {
    if (!events[event]) {
      return
    }
    for (var i = 0; i < events[event].length; i++) {
      events[event][i].handler(args);
    }
  }

  function off(event) {
    delete events[event];
  }

  return {
    on,
    fire,
    off
  }
})();

EventCenter.on('event', function(data) {
  console.log('event received...');
});