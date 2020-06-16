<<<<<<< HEAD

function find(child, parent) {
  let M = parent.length
  let N = child.length
  for (let i = 0; i < M - N; i ++) {
    let j 
    for (j = 0; j < N; j ++) {
      if (child[j] !== parent[i + j]) {
        break
      }
    }
    if (j === N) {
      return i
    }
  }
  
}

let p = 'asdasfgsdgd cv dfasdas'
let c = 'cv'

=======

function find(child, parent) {
  let M = parent.length
  let N = child.length
  for (let i = 0; i < M - N; i ++) {
    let j 
    for (j = 0; j < N; j ++) {
      if (child[j] !== parent[i + j]) {
        break
      }
    }
    if (j === N) {
      return i
    }
  }
  
}

let p = 'asdasfgsdgd cv dfasdas'
let c = 'cv'

>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
console.log(find(c, p))