// 227.二分搜索根号7
let val = 7;
let l = 0,
  r = 7
while (r - l > 0.000001) {
  let mid = (l + r) / 2
  if ((mid ** 2) > val) {
    r = mid
  } else {
    l = mid
  }
}
console.log(l)
console.log(Math.sqrt(7))