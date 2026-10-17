// A096 · Produto em promoção

type Produto = { nome: string; preco: number }
type EmPromocao = { desconto: number } // 0.1 = 10%

function precoFinal(p: Produto & EmPromocao): number {
  return p.preco - p.preco * p.desconto
}

const acai = { nome: 'açaí', preco: 15, desconto: 0.2 }

console.log(`${acai.nome}: R$ ${precoFinal(acai).toFixed(2)}`) // açaí: R$ 12.00
