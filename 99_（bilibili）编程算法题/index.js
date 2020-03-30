/* 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。
如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。 */
function int2ReverseString(num) {
  if (num % 10 === 0) {
    return num.toString()[0]
  }
  return func(num)
}

function func(num) {
  let last

  last = num % 10 + ''
  num = Math.floor(num / 10)
  if (num >= 10) {
    return last + func(num)
  } else {
    return last + num
  }
}
int2ReverseString(1234) // '1234'
debugger