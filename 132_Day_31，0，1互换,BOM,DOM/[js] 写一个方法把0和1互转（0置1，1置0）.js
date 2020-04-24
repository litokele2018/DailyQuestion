// [js] 写一个方法把0和1互转（0置1，1置0）
let x = '101010101'
function r(x) {
  let s = ''
  for (let i = 0; i < x.length; i++) {
    s += x[i] ^ 1
  }
  return s
}
console.log(r(x))
console.log(~1) // -2 
console.log(~0) // -1
~a+2

