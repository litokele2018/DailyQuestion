// 1. 
b() // call b second
console.log(a) // undefined
var a = 'hello world'

function b() {
  console.log('call b first')
}

function b() {
  console.log('call b second')
}
// 2.
var x = 1,
  y = 2
var z = function() {
  var x = 2
  return {
    x: x,
    y: function(a, b) {
      x = a + b
    },
    z: function() {
      return x
    }
  }
}
a = z()
a.y(x, y)
console.log(a.z(), a.x, x) // 3, 2, 1