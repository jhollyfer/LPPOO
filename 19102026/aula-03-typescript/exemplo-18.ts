// Aula 03 · Exemplo 18 · type e interface
// Formato de um produto da cantina, e um formato maior que estende ele.

interface Produto { nome: string; preco: number }
interface Lanche extends Produto { vegetariano: boolean }

function etiqueta(p: Produto): string {
  return `${p.nome}: R$ ${p.preco.toFixed(2)}`
}

const pastel: Lanche = { nome: 'pastel de queijo', preco: 7, vegetariano: true }
console.log(etiqueta(pastel)) // pastel de queijo: R$ 7.00 (todo Lanche é Produto)
