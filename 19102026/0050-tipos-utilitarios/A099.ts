// A099 · Os produtos da banca na feira

type Produto = { codigo: number; nome: string; preco: number; estoque: number }

// a etiqueta só precisa de nome e preço
function etiqueta(p: Pick<Produto, 'nome' | 'preco'>): string {
  return `${p.nome}: R$ ${p.preco.toFixed(2)}`
}

// a mudança pode trazer qualquer campo, ou nenhum
function atualizar(p: Produto, mudanca: Partial<Produto>): Produto {
  return { ...p, ...mudanca }
}

const novo: Omit<Produto, 'codigo'> = { nome: 'cupuaçu', preco: 6, estoque: 20 } // o código vem depois
const cupuacu: Produto = { codigo: 1, ...novo }
const depois = atualizar(cupuacu, { preco: 5 })

console.log(etiqueta(cupuacu)) // cupuaçu: R$ 6.00
console.log(etiqueta(depois)) // cupuaçu: R$ 5.00
console.log(etiqueta({ nome: 'tucumã', preco: 3 })) // tucumã: R$ 3.00: o Pick só pede nome e preço
console.log(depois) // { codigo: 1, nome: 'cupuaçu', preco: 5, estoque: 20 }
