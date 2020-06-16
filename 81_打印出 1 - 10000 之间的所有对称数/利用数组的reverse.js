<<<<<<< HEAD
function isSymmetry(n) {
  return n.toString() === n.toString().split('').reverse().join('')
}

for (let i = 0; i < 10000; i ++) {
  if (isSymmetry(i)) {
    console.log(i)
  }
=======
function isSymmetry(n) {
  return n.toString() === n.toString().split('').reverse().join('')
}

for (let i = 0; i < 10000; i ++) {
  if (isSymmetry(i)) {
    console.log(i)
  }
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
}