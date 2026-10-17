// A071 · O código do livro na biblioteca

// o código pode chegar como texto ou como número
function lerCodigo(codigo: unknown): string {
  if (typeof codigo === 'string') return `código ${codigo.toUpperCase()}` // aqui é string
  if (typeof codigo === 'number') return `código ${codigo + 1000}` // aqui é number
  return 'código inválido'
}

console.log(lerCodigo('lit-12')) // código LIT-12
console.log(lerCodigo(42)) // código 1042
console.log(lerCodigo(true)) // código inválido
