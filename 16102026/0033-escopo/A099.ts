// A099 · Quer usar fora? Devolva com return

function calcularTroco(pago: number, preco: number): number {
  const troco = pago - preco // troco só existe aqui dentro...
  return troco // ...então a função devolve o valor
}

const meuTroco = calcularTroco(50, 37.5)
console.log(`Troco: R$ ${meuTroco.toFixed(2)}`) // R$ 12.50
