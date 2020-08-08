// (4+(1+3-4))+(6+8)    
// 四则运算

let str = '(4+(1+3-4))+(6+8)'

function handler(s) {
  let stack = []
  let stackChar = []
  let mp = "+-*/)"
  stackChar.push('(')
  s += ')'
  // 将大括号和中括号全部转化为小括号
  s = s.replace(/[\]\}]/g, ')')
  s = s.replace(/[\[\}]/g, '(')
  
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
      stackChar.pop()
    } else if (nextIsOp) {
      while (compair(stackChar[stackChar.length - 1], s[i])) {
        compute(stack, stackChar)
      }
      stackChar.push(s[i])
      nextIsOp = false
    } else {
      let j = i
      if (s[j] == '-' || s[j] == '+') i++
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
  let b = +stack.pop()
  let a = +stack.pop()
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