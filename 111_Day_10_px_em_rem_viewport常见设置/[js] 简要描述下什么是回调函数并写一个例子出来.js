<<<<<<< HEAD
// [js] 简要描述下什么是回调函数并写一个例子出来

function saySomething(message, callback) {
  console.log(message)
  callback.call(this, message)
}

function foo(data) {
  console.log('我刚执行完', data)
}

saySomething('hello', (data) => {
  console.log(data)
})
=======
// [js] 简要描述下什么是回调函数并写一个例子出来

function saySomething(message, callback) {
  console.log(message)
  callback.call(this, message)
}

function foo(data) {
  console.log('我刚执行完', data)
}

saySomething('hello', (data) => {
  console.log(data)
})
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
saySomething('hello', foo)