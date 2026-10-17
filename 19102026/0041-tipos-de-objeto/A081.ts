// A081 · O cardápio da cantina

type Lanche = {
  nome: string
  preco: number
  ingredientes: string[]
}

const caboquinho: Lanche = {
  nome: 'X-Caboquinho',
  preco: 12,
  ingredientes: ['tucumã', 'queijo coalho', 'pão'],
}
const cardapio: Lanche[] = [caboquinho, { nome: 'Tapioca', preco: 8, ingredientes: ['goma', 'manteiga'] }]

let total = 0
for (const lanche of cardapio) {
  console.log(`${lanche.nome}: R$ ${lanche.preco.toFixed(2)} (${lanche.ingredientes.length} ingredientes)`)
  total += lanche.preco
}
console.log(`Um de cada: R$ ${total.toFixed(2)}`)
// X-Caboquinho: R$ 12.00 (3 ingredientes)
// Tapioca: R$ 8.00 (2 ingredientes)
// Um de cada: R$ 20.00

// console.log(caboquinho.prco)
// erro: Property 'prco' does not exist on type 'Lanche'. Did you mean 'preco'?
