// A087 · O pedido de açaí

type Pedido = {
  readonly numero: number
  tamanho: string
  cobertura?: string
}

const pedido1: Pedido = { numero: 101, tamanho: '500 ml' } // sem cobertura: tudo bem
const pedido2: Pedido = { numero: 102, tamanho: '300 ml', cobertura: 'granola' }

function etiqueta(p: Pedido): string {
  return `#${p.numero} ${p.tamanho}, ${p.cobertura ?? 'puro'}` // sem cobertura? escreve puro
}

console.log(etiqueta(pedido1)) // #101 500 ml, puro
console.log(etiqueta(pedido2)) // #102 300 ml, granola
pedido1.tamanho = '700 ml' // pode: o cliente mudou de ideia
console.log(etiqueta(pedido1)) // #101 700 ml, puro

// O número do pedido não muda depois de criado:
// pedido1.numero = 999
// erro: Cannot assign to 'numero' because it is a read-only property.
