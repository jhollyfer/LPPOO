// A082 · Os cinco métodos

const compras: string[] = ['arroz', 'feijão']

compras.push('farinha')
compras.unshift('café')
compras.pop()
compras.shift()
compras.splice(1, 1, 'açaí')

console.log(compras) // [ 'arroz', 'açaí' ]
