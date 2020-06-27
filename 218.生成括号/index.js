/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = []
  h('', 0, 0, n, res)
  return res
};

// 使用递归
function h(ps, left, right, n, res) {
  if (left === n && right === n) {
    res.push(ps)
    return
  }
  if (left < n) {
    h(ps + '(', left + 1, right, n, res)
  }
  if (left > right) {
    h(ps + ')', left, right + 1, n, res)
  }
}

console.log(generateParenthesis(4))