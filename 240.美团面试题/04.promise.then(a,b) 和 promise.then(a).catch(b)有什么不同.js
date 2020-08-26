// <!-- promise.then(a,b) 和 promise.then(a).catch(b)有什么不同 -->

// reject
Promise.reject("rejected")
  .then(r => { throw ("whoops") },
    e => console.log("Promise 1: caught error in second function:", e)) // 执行这里
  .catch(e => console.log("Promise 1: caught error in catch", e))

// resolve
Promise.resolve("rejected")
  .then(r => { throw ("whoops") },
    e => console.log("Promise 2: caught error in second function:", e)) // 在第一个函数抛出的异常无法捕获
  .catch(e => console.log("Promise 2: caught error in catch", e)) // 执行这里