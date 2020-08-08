// (4+(1+3-4))+(6+8)    
// 四则运算

// 1. 用两个栈分别压数字和运算符；
// 2. 如果当前运算符优先级('*/')高于栈顶运算符('+-')优先级，则将运算符入栈；
// 反之，从数字栈中弹出两个数，从运算符栈中弹出栈顶运算符，进行运算，数字栈压入运算结果，符号栈压入当前运算符。重复该操作直到不满足条件。
// 3. 出现左括号，则直接压入；出现右括号，则从数字栈中弹出两个数，从运算符栈中弹出栈顶运算符，
// 进行运算，数字栈压入运算结果，重复该操作直到栈顶弹出右括号位置。

let str = '(4+(1+3-4))+(6+8)'
str = '{3+[10*(5/2-3)-6]}'

function handler(s) {
  let stack = []
  let stackChar = []
  let mp = "+-*/)"
  stackChar.push('(')
  s += ')'
  // 将大括号和中括号全部转化为小括号
  s = s.replace(/[\]\}]/g, ')')
  s = s.replace(/[\[\{]/g, '(')
  let len = s.length

  let nextIsOp = false

  for (let i = 0; i < len; i++) {
    if (s[i] == '(') {
      stackChar.push('(')
    } else if (s[i] == ')') {
      // 如果操作符栈的栈顶不是'(' 就进行计算
      while (stackChar[stackChar.length - 1] !== '(') {
        compute(stack, stackChar)
      }
      // 如果是 ( 就弹出
      stackChar.pop()
    } else if (nextIsOp) {
      // 如果下一位是操作符, 进行比较操作符优先级， 如果当初栈顶优先级高
      // 先执行计算后再放入下一位
      while (compair(stackChar[stackChar.length - 1], s[i])) {
        compute(stack, stackChar)
      }
      stackChar.push(s[i])
      nextIsOp = false
    } else {
      // 如果是数字
      let j = i
      // 正数和负数 特殊情况
      if (s[j] == '-' || s[j] == '+') i++
      // 如果s[i] 不是操作符就后移
      while (mp.indexOf(s[i]) === -1) {
        i++
      }
      let temp = s.substr(j, i - j)
      stack.push(temp)
      i--
      nextIsOp = true
    }
  }
  console.log(stack[stack.length - 1])
}
// 比较op1的优先级是否比op2高， 如果高 就不进行压入栈， 相同进行运算
function compair(op1, op2) {
  if (op1 == '(') {
    return false
  } else if ((op1 == '+' || op1 == '-') && (op2 == '*' || op2 == '/')) {
    return false
  }
  return true
}

function compute(stack, stackChar) {
  // 取出两个数, 先取出来的放后面
  let b = parseFloat(stack.pop())
  let a = parseFloat(stack.pop())
  // 取出操作符
  let op = stackChar.pop()
  if (op == '+') {
    a = a + b
  } else if (op == '-') {
    a = a - b
  } else if (op == '*') {
    a = a * b
  } else if (op == '/') {
    a = a / b
  }
  stack.push(a)
}

handler(str)