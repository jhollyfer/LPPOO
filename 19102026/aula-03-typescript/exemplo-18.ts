// Aula 03 · Exemplo 18 · type e interface
// Formato de um produto da cantina, e um formato maior que estende ele.

interface Produto {
  nome: string
  preco: number
}

interface Lanche extends Produto {
  vegetariano: boolean
}

const coxinha: Lanche = { nome: 'coxinha', preco: 6, vegetariano: false }
const pastel: Lanche = { nome: 'pastel de queijo', preco: 7, vegetariano: true }

function etiqueta(p: Produto): string {
  return `${p.nome} - R$ ${p.preco.toFixed(2)}`
}

console.log(etiqueta(coxinha))
console.log(etiqueta(pastel))
