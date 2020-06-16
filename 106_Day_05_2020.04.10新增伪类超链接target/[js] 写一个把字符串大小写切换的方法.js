function toggle(s) {
  return s.split('').map(item => item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()).join('')
}

let s = 'litokelE'
toggle(s)