/* 二维数组，斜45度角输出 [

[1, 2, 3]， [4, 5, 6]， [7, 8, 9]，

]

1 4 2 7 5 3 8 6 9
 */
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// 0 0, 1 0, 0 1, 2, 0
function foo(a) {
  let n = a.length;
  let m = a[0].length;

  for (let i = 0; i <= m + n - 2; i++) {
    // 前半段
    for (let x = 0; x <= i && x < n && i - x < m; x++) {
      console.log(a[i - x][x]);
    }
    // 后半段
    for (let y = m - 1; y >= 0 && i - y < n && i - y > 0; y--) {
      console.log(a[y][i - y]);
    }
  }
}


foo(arr)