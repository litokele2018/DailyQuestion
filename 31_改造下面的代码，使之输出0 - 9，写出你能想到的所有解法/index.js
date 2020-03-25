// 改造下面的代码，使之输出0 - 9，写出你能想到的所有解法
for (var i = 0; i< 10; i++){
	setTimeout(() => {
		// console.log(i); // 10 
    }, 1000)
}
// 1
for (let i = 0; i< 10; i++){
	setTimeout(() => {
		// console.log(i); // 0-9 OK
    }, 1000)
}
// 2
  for (var i = 0; i < 10; i++){
    (function (i) {
      setTimeout(() => {
        // console.log(i); // 0-9 OK
      }, 1000)
    })(i)
  }
// 3
for (var i = 0; i< 10; i++){
	setTimeout((i) => {
		// console.log(i); // 0-9 OK 在传一个参数
    }, 1000, i)
}
