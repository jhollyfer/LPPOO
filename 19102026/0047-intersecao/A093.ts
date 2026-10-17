// A093 · Livro emprestado

type Livro = { titulo: string; autor: string }
type Emprestimo = { aluno: string; dias: number }

type LivroEmprestado = Livro & Emprestimo // tem tudo dos dois

const guarani: LivroEmprestado = { titulo: 'O Guarani', autor: 'José de Alencar', aluno: 'Caio', dias: 7 }

function aviso(l: LivroEmprestado): string {
  return `${l.aluno} devolve "${l.titulo}", de ${l.autor}, em ${l.dias} dias`
}

console.log(aviso(guarani)) // Caio devolve "O Guarani", de José de Alencar, em 7 dias

// Faltou a parte do Emprestimo:
// const semDono: LivroEmprestado = { titulo: 'Iracema', autor: 'José de Alencar' }
// erro: Type '{ titulo: string; autor: string; }' is not assignable to type 'LivroEmprestado'.
//       ... is missing the following properties from type 'Emprestimo': aluno, dias
