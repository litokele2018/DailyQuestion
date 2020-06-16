<<<<<<< HEAD
function toggle(str) {
  return str.replace(/\w/g, (s) => s.toUpperCase() === s ? s.toLowerCase() : s.toUpperCase())
}
let str = 'AbCdEfgh'
=======
function toggle(str) {
  return str.replace(/\w/g, (s) => s.toUpperCase() === s ? s.toLowerCase() : s.toUpperCase())
}
let str = 'AbCdEfgh'
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
toggle(str) // aBcDeFGH