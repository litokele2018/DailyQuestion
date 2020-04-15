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
saySomething('hello', foo)