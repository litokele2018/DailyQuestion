<<<<<<< HEAD
// 打印出 1 - 10000 之间的所有对称数
function isSymmetry(n) {
  let s = n.toString()
  let length = s.length
  if (length === 1) {
    return false
  }
  let i = 0
  let j = length - 1
  while (i < j) {
    if (s[i] === s[j]) {
      i ++
      j --
    } else {
      break
    }
  }
  if (i === j && length % 2 === 1) {
    return true
  }else if (i === j + 1 && length % 2 === 0) {
    return true
  } else {
    return false
  }
}

for (let i = 0; i < 10000; i ++) {
  if (isSymmetry(i)) {
    console.log(i)
  }
=======
// 打印出 1 - 10000 之间的所有对称数
function isSymmetry(n) {
  let s = n.toString()
  let length = s.length
  if (length === 1) {
    return false
  }
  let i = 0
  let j = length - 1
  while (i < j) {
    if (s[i] === s[j]) {
      i ++
      j --
    } else {
      break
    }
  }
  if (i === j && length % 2 === 1) {
    return true
  }else if (i === j + 1 && length % 2 === 0) {
    return true
  } else {
    return false
  }
}

for (let i = 0; i < 10000; i ++) {
  if (isSymmetry(i)) {
    console.log(i)
  }
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
}