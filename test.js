let add = (function foo() {
  let v = 1
  return () => {
    console.log(v++)
  }
})()
add() // 1
add() // 2