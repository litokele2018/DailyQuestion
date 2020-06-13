function NumberOf1(n) {
  // write code here
  let count = 0
  let mark = 1;
  while (mark !== 0) {
    if (mark & n) {
      count++
    }
    mark <<= 1
  }
  return count
}

NumberOf1(-1)
