// A081 · O cardápio da cantina

type Lanche = { nome: string; preco: number }

const caboquinho: Lanche = { nome: 'X-Caboquinho', preco: 12 }
const cardapio: Lanche[] = [caboquinho, { nome: 'Tapioca', preco: 8 }]

let total = 0
for (const lanche of cardapio) total += lanche.preco
console.log(`Um de cada: R$ ${total.toFixed(2)}`) // Um de cada: R$ 20.00

// console.log(caboquinho.prco)
// erro: Property 'prco' does not exist on type 'Lanche'. Did you mean 'preco'?
