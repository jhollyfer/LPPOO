// Aula 01 · Exemplo 04 · Números, booleano e conversão
// Açaí: o preço chega como texto (como viria do input) e precisa virar número.

const precoTexto = '12.5'
console.log(typeof precoTexto) // string

const preco = Number(precoTexto)
console.log(typeof preco) // number

const quantidade = 3
const total = preco * quantidade
console.log(`Total: R$ ${total.toFixed(2)}`) // R$ 37.50

const pedidoGrande = quantidade > 2
console.log(pedidoGrande, typeof pedidoGrande) // true boolean
