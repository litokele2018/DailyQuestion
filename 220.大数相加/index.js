function bigSum(a, b) {
  let carry = 0
  let res = []
  let p1 = a.length - 1
  let p2 = b.length - 1
  while (p1 >= 0 || p2 >= 0) {
    let sum = (p1 >= 0 ? Number(a[p1]) : 0) + (p2 >= 0 ? Number(b[p2]) : 0) + carry
    carry = sum >= 10 ? 1 : 0
    res.unshift(sum % 10)
    p1--
    p2--
  }
  return res.join('')
}
console.log(bigSum('9007199254740993', '3123123123123123123123123123'))