// 设计并实现 Promise.race()

Promise.prototype.M_race = function (arr) {
  return new Promise((resolve, reject) => {
    arr.forEach(promise => {
      promise.then(res => resolve())
    })
  })
}

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1)
    return resolve(1000)
  }, 1000)
})


let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(2)
    return resolve(2000)
  }, 2000)
})


let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(3)
    return resolve(3000)
  }, 3000)
})

Promise.prototype.M_race([promise1, promise2, promise3])
  .then(res => {
    console.log(1111)
  })
  .catch()
  console.log(Promise.resolve())