let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 2000)
})
let p2 = promise.then(res => {
  console.log(res)
}).finally(() => {
  console.log(3)
})