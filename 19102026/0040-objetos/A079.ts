// A079 · O cardápio da cantina: uma lista de objetos

const cardapio = [
  { nome: 'açaí', preco: 15 },
  { nome: 'tapioca', preco: 8 },
  { nome: 'suco de cupuaçu', preco: 6 },
]

for (const item of cardapio) {
  console.log(`${item.nome}: R$ ${item.preco.toFixed(2)}`)
}
// açaí: R$ 15.00
// tapioca: R$ 8.00
// suco de cupuaçu: R$ 6.00
