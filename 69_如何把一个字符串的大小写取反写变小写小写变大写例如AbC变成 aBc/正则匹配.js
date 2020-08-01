function toggle(str) {
  return str.replace(/\w/g, (s) => s.toUpperCase() === s ? s.toLowerCase() : s.toUpperCase())
}
let str = 'AbCdEfgh'
toggle(str) // aBcDeFGH