// A091 · Preço em número ou em texto

function paraReais(preco: number | string): string {
  if (typeof preco === 'string') return `R$ ${Number(preco.trim()).toFixed(2)}` // aqui é string
  return `R$ ${preco.toFixed(2)}` // aqui só sobrou number
}

console.log(paraReais(5)) // R$ 5.00
console.log(paraReais(' 3.50 ')) // R$ 3.50

// Antes do typeof, não dá: número não tem trim.
// preco.trim()
// erro: Property 'trim' does not exist on type 'string | number'.
