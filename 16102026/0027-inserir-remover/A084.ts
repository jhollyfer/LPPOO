// A084 · Remover um item pelo nome

const compras: string[] = ['arroz', 'açaí', 'farinha']

const posicao = compras.indexOf('açaí') // 1
if (posicao !== -1) {
  compras.splice(posicao, 1) // tira 1 item a partir da posição 1
}

console.log(compras) // [ 'arroz', 'farinha' ]
