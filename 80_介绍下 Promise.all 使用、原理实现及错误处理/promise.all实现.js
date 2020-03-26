Promise.prototype.all = function (arr) {

  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      throw new TypeError
    }
    let count = 0 // 记录resolve的次数
    let length = arr.length
    let resolveValue = []

    for (let i = 0; i < length; i ++) {
      Promise.resolve(arr[i]).then(res => {
        resolveValue.push(res)
        count ++
        if (count === length) {
          return resolve(resolveValue)
        }
      }, err => {
        return reject(err)
      }).catch(err => {
        console.log(err)
      })
    }
  })
}

let promise1 = new Promise((resolve, reject) => {
  resolve(1)
})
let promise2 = new Promise(resolve => {
  resolve(2)
})

Promise.prototype.all([promise1, promise2]).then(res => {
  console.log(res)
})