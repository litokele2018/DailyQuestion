<<<<<<< HEAD
class MyPromise {
  constructor(excutor) {
    // excutor 是传入进来的函数

    this.state = "pending"
    this.fulfillFunc = []
    this.rejectFunc = []
    this.data = ""

    const resolve = (data) => { // resolve 函数接受参数
      if (this.state === "pending") {
        // 修改状态
        this.state = "resolved"
        // 保存数据
        this.data = data
        // 执行 fulfill 后续函数
        if (this.fulfillFunc.length > 0) {
          setTimeout(() => {
            this.fulfillFunc.forEach((item) => {
              item(this.data)
            })
          }, 0)
        }
      }
    }

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected"
        this.data = reason
        if (this.rejectFunc.length > 0) {
          setTimeout(() => {
            this.rejectFunc.forEach((item) => {
              item(this.data)
            })
          }, 0)
        }
      }
    }

    try {
      excutor(resolve, reject) // 传入参数执行函数 如果 执行出错直接 reject
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (data) => {
      data
    }
    onRejected = typeof onRejected === "function" ? ononRejected : (reason) => {
      throw reason
    }
    return new MyPromise((resolve, reject) => {

      if (this.state === 'pending') { // 这是 处理异步 resolve 的
        this.fulfillFunc.push((data) => {
          try {
            let result = onFulfilled(data)
            result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
          } catch (error) {
            reject(error)
          }
        })
        this.rejectFunc.push((reason) => {
          try {
            let result = onRejected(reason)
            result instanceof MyPromise ? result.then(resolve, reject) : reject(result)
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.state === 'resolved') {
        try {
          let x = onFulfilled(this.data)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      if (this.state === 'rejected') {
        try {
          let x = onRejected(this.data)
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x)
        } catch (error) {
          reject(error)
        }
      }
    })
  }
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
}

let promise = new MyPromise((resolve, reject) => {
  console.log(1)
  let data = 123
  setTimeout(() => {
    resolve(data)
  })
})
let p2 = promise.then((res) => {
  console.log(res)
  return 20
})

let p3 = p2.then((res) => {
  console.log(res)
})

setTimeout(() => {
  console.log(p2)
=======
class MyPromise {
  constructor(excutor) {
    // excutor 是传入进来的函数

    this.state = "pending"
    this.fulfillFunc = []
    this.rejectFunc = []
    this.data = ""

    const resolve = (data) => { // resolve 函数接受参数
      if (this.state === "pending") {
        // 修改状态
        this.state = "resolved"
        // 保存数据
        this.data = data
        // 执行 fulfill 后续函数
        if (this.fulfillFunc.length > 0) {
          setTimeout(() => {
            this.fulfillFunc.forEach((item) => {
              item(this.data)
            })
          }, 0)
        }
      }
    }

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected"
        this.data = reason
        if (this.rejectFunc.length > 0) {
          setTimeout(() => {
            this.rejectFunc.forEach((item) => {
              item(this.data)
            })
          }, 0)
        }
      }
    }

    try {
      excutor(resolve, reject) // 传入参数执行函数 如果 执行出错直接 reject
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (data) => {
      data
    }
    onRejected = typeof onRejected === "function" ? ononRejected : (reason) => {
      throw reason
    }
    return new MyPromise((resolve, reject) => {

      if (this.state === 'pending') { // 这是 处理异步 resolve 的
        this.fulfillFunc.push((data) => {
          try {
            let result = onFulfilled(data)
            result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
          } catch (error) {
            reject(error)
          }
        })
        this.rejectFunc.push((reason) => {
          try {
            let result = onRejected(reason)
            result instanceof MyPromise ? result.then(resolve, reject) : reject(result)
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.state === 'resolved') {
        try {
          let x = onFulfilled(this.data)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      if (this.state === 'rejected') {
        try {
          let x = onRejected(this.data)
          x instanceof MyPromise ? x.then(resolve, reject) : reject(x)
        } catch (error) {
          reject(error)
        }
      }
    })
  }
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
}

let promise = new MyPromise((resolve, reject) => {
  console.log(1)
  let data = 123
  setTimeout(() => {
    resolve(data)
  })
})
let p2 = promise.then((res) => {
  console.log(res)
  return 20
})

let p3 = p2.then((res) => {
  console.log(res)
})

setTimeout(() => {
  console.log(p2)
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
}, 100)