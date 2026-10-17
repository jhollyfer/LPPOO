// A101 · Os produtos da banca na feira

type Produto = { codigo: number; nome: string; preco: number }

function etiqueta(p: Pick<Produto, 'nome' | 'preco'>): string {
  return `${p.nome}: R$ ${p.preco.toFixed(2)}`
}

const cupuacu: Produto = { codigo: 1, nome: 'cupuaçu', preco: 6 }
const mudanca: Partial<Produto> = { preco: 5 }

console.log(etiqueta(cupuacu)) // cupuaçu: R$ 6.00
console.log(etiqueta({ ...cupuacu, ...mudanca })) // cupuaçu: R$ 5.00
console.log(etiqueta({ nome: 'tucumã', preco: 3 })) // tucumã: R$ 3.00: o Pick só pede nome e preço
