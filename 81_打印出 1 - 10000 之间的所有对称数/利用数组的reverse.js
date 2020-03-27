function isSymmetry(n) {
  return n.toString() === n.toString().split('').reverse().join('')
}

for (let i = 0; i < 10000; i ++) {
  if (isSymmetry(i)) {
    console.log(i)
  }
}