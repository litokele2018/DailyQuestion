  // 1 7 6 8 2 4 9 11 3 10 5  12

 console.log('1');

 setTimeout(function() {
   console.log('2');
   process.nextTick(function() {
     console.log('3');
   })
   new Promise(function(resolve) {
     console.log('4');
     resolve();
   }).then(function() {
     console.log('5')
   })
 })
 process.nextTick(function() {
   console.log('6');
 })
 new Promise(function(resolve) {
   console.log('7');
   resolve();
 }).then(function() {
   console.log('8')
 })

 setTimeout(function() {
   console.log('9');
   process.nextTick(function() {
     console.log('10');
   })
   new Promise(function(resolve) {
     console.log('11');
     resolve();
   }).then(function() {
     console.log('12')
   })
 })

/**
 * process.nextTick() 和 Promise.then 的区别
 */
Promise.resolve().then(res => {
  console.log(3)
})

process.nextTick(() => {
  console.log(1)
})

process.nextTick(() => {
  console.log(2)
})

console.log(0)
// 0 1 2 3 

// nextTick 遇到就放到当前宏任务队列的最后
// then 是微任务队列 微任务队列中 宏任务执行完才执行