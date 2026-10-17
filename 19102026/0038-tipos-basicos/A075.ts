// A075 · O empréstimo na biblioteca

const livro: string = 'A Moreninha'
const diasComAluno: number = 9
const devolvido: boolean = false

// o código do livro pode chegar como texto ou como número
function lerCodigo(codigo: unknown): string {
  if (typeof codigo === 'string') return `código ${codigo.toUpperCase()}` // aqui é string
  if (typeof codigo === 'number') return `código ${codigo + 1000}` // aqui é number
  return 'código inválido'
}

function bloquear(motivo: string): never {
  throw new Error(motivo) // para o programa: nunca devolve nada
}

if (diasComAluno > 60) bloquear('Livro dado como perdido')
console.log(livro, diasComAluno, devolvido) // A Moreninha 9 false
console.log(lerCodigo('lit-12')) // código LIT-12
console.log(lerCodigo(42)) // código 1042
console.log(lerCodigo(true)) // código inválido
