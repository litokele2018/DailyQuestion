var myPow = function(x, n) {
  if (x == 0) return 0;
  let b = n;
  let res = 1.0;
  if (b < 0) {
    x = 1 / x;
    b = -b;
  }
  debugger;
  while (b > 0) {
    if ((b & 1) == 1) res *= x;
    x *= x;
    b /= 2;
  }
  return res;
};

let x = 2.00000,
  n = -2147483647
myPow(x, n)