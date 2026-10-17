// A100 · Um tipo genérico: Caixa<T>

type Caixa<T> = { etiqueta: string; conteudo: T[] }

const livros: Caixa<string> = { etiqueta: 'livros', conteudo: ['Dom Casmurro', 'Iracema'] }
const pesos: Caixa<number> = { etiqueta: 'pesos (kg)', conteudo: [2, 5, 3] }

function descrever<T>(c: Caixa<T>): string {
  return `Caixa de ${c.etiqueta} com ${c.conteudo.length} itens`
}

console.log(descrever(livros))
console.log(descrever(pesos))
