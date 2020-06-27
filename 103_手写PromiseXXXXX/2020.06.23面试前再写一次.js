const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class MyPromise {
  constructor(excutor) {
    this.status = PENDING
    this.successFunc = []
    this.rejectFunc = []
    this.data = ''
    this.reason = ''

    const resolve = (data) => {
      if (this.status !== PENDING) return
      this.status = RESOLVED
      this.data = data
      // 执行后续的成功的操作
      this.successFunc.forEach(fn => {
        setTimeout(() => {
          fn.call(this, this.data)
          this.successFunc.shift()
        })
      })
    }

    const reject = (reason) => {
      if (this.status !== PENDING) return
      this.status = REJECTED
      this.reason = reason
      // 执行后续的失败的操作
      this.rejectFunc.forEach(fn => {
        setTimeout(() => {
          fn.call(this, this.reason)
          this.rejectFunc.shift()
        })
      })
    }

    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  // 实现 then 方法 
  then(s, r) {
    s = typeof s === 'function' ? s : (data) => data
    r = typeof r === 'function' ? r : (reason) => reason
    return new MyPromise((resolve, reject) => {
      const fn1 = () => {
        try {
          let result = s(this.data)
          result instanceof MyPromise ? result.then(resolve, reject) : resolve(result)
        } catch (error) {
          reject(error)
        }
      }
      const fn2 = () => {
        try {
          let result = r(this.reason)
          result instanceof MyPromise ? result.then(resolve, reject) : reject(result)
        } catch (error) {
          reject(error)
        }
      }

      if (this.status === PENDING) {
        this.successFunc.push(fn1)
        this.rejectFunc.push(fn2)
      }

      if (this.status === RESOLVED) {
        fn1()
        resolve(this.data)
      }
      if (this.status === REJECTED) {
        fn2()
        reject(this.reason)
      }
    })
  }
  // 实现catch方法
  catch (r) {
    return this.then(null, r)
  }
  finally(cb) {
    this.successFunc.push(() => cb.call(this))
    this.rejectFunc.push(() => cb.call(this))
  }
  resolve(p) {
    return new MyPromise((resolve) => {
      p.then(() => {
        resolve(p.data)
      })
    })
  }
  race(arr) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0, len = arr.length; i < len; i++) {
        this.resolve(arr[i]).then(resolve, reject)
      }
    })
  }
}

// let p = new MyPromise((resolve, reject) => {
//   console.log(1)
//   setTimeout(() => {
//     resolve(3)
//   }, 1000)
// }).then(res => {
//   console.log(res)
//   return 4
// }, ).then(res => {
//   console.log(res)
// }).finally(() => {
//   console.log('finally')
// })

let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 100)
})

let p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})
let p3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})

MyPromise.prototype.race([p1, p2, p3]).then(res => {
  console.log(res)
})