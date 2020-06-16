<<<<<<< HEAD
const recast = require('recast')

const code1 = `a.b.c.d`
const code2 = `a['b']['c']['d']`

const ast1 = recast.parse(code1)
const ast2 = recast.parse(code2)
debugger
console.log('success')
=======
const recast = require('recast')

const code1 = `a.b.c.d`
const code2 = `a['b']['c']['d']`

const ast1 = recast.parse(code1)
const ast2 = recast.parse(code2)
debugger
console.log('success')
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
