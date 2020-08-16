function calculate(str) {
  // 将str中的括号全转化为小括号
  str = str.replace(/[\[\{]/g, '(')
  str = str.replace(/[\]\}]/g, ')')
  str += ')' // 预置
  // 创建两个栈
  let stackNum = [] // 存数字
  let stackOp = ['('] // 存操作符

  let len = str.length
  let nextIsOp = false // 保存下一位是否为操作符

  let map = '+-*/()'

  for (let i = 0; i < len; i++) {
    if (str[i] === '(') {
      stackOp.push('(')
    } else if (str[i] === ')') {
      // 如果栈顶不是( 说明有操作符 进行计算
      while (stackOp.length && stackOp[stackOp.length - 1] !== '(') {
        compute(stackNum, stackOp)
      }
      // 弹出(
      stackOp.pop()
    } else if (nextIsOp) {
      // 比较栈顶和str[i]的优先级 
      while (compairPriority(stackOp[stackOp.length - 1], str[i])) {
        compute(stackNum, stackOp)
      }
      stackOp.push(str[i])
      nextIsOp = false
    } else {
      // 如果是数字
      let j = i
      if (str[i] === '+' || str[i] === '-') i++
      while (map.indexOf(str[i]) === -1) i++
      let num = str.substring(j, i)
      stackNum.push(parseFloat(num))
      i--
      nextIsOp = true
    }
  }
  return stackNum.pop()
}

function compairPriority(op1, op2) {
  if (op1 === '(') return false
  if ((op1 === '+' || op1 === '-') && (op2 === '*' || op2 === '/')) {
    return false
  }
  return true
}

function compute(stackNum, stackOp) {
  // 取出两个数
  let b = stackNum.pop()
  let a = stackNum.pop()
  // 取出操作符
  let op = stackOp.pop()
  if (op === '+') {
    a = a + b
  } else if (op === '-') {
    a = a - b
  } else if (op === '*') {
    a = a * b
  } else if (op === '/') {
    a = a / b
  }
  stackNum.push(a)
}


let str = '{3+[10*(5/2-3)-6]}';
let res = calculate(str)
console.log(res)