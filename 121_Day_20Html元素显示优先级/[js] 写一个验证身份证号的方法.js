<<<<<<< HEAD
let xxx = '525502198008011234'

function checkId(id) {
  if (id.length !== 18) {
    return false
  }
  let year = id.substr(6, 4)
  if (year * 1 > 2021 || year * 1 < 1850) {
    return false
  }
  let month = id.substr(10, 2) * 1
  if (month > 12 || month === 0) {
    return false
  }
  let day = id.substr(12, 2) * 1
  if (day > 31 || day === 0) {
    return false
  }
  return true
}

=======
let xxx = '525502198008011234'

function checkId(id) {
  if (id.length !== 18) {
    return false
  }
  let year = id.substr(6, 4)
  if (year * 1 > 2021 || year * 1 < 1850) {
    return false
  }
  let month = id.substr(10, 2) * 1
  if (month > 12 || month === 0) {
    return false
  }
  let day = id.substr(12, 2) * 1
  if (day > 31 || day === 0) {
    return false
  }
  return true
}

>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
console.log(checkId(xxx))