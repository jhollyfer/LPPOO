// A087 · O pedido de açaí

type Pedido = { readonly numero: number; tamanho: string; cobertura?: string }

const pedido: Pedido = { numero: 101, tamanho: '500 ml' } // sem cobertura: tudo bem
const etiqueta = (p: Pedido): string => `#${p.numero} ${p.tamanho}, ${p.cobertura ?? 'puro'}`

console.log(etiqueta(pedido)) // #101 500 ml, puro
pedido.tamanho = '700 ml' // pode: o cliente mudou de ideia
pedido.cobertura = 'granola' // pode: o opcional pode chegar depois
console.log(etiqueta(pedido)) // #101 700 ml, granola

// pedido.numero = 999
// erro: Cannot assign to 'numero' because it is a read-only property.
