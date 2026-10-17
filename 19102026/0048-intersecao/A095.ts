// A095 · Livro emprestado

type Livro = { titulo: string; autor: string }
type Emprestimo = { aluno: string; dias: number }

const guarani: Livro & Emprestimo = { titulo: 'O Guarani', autor: 'José de Alencar', aluno: 'Caio', dias: 7 }

console.log(`${guarani.aluno} devolve "${guarani.titulo}" em ${guarani.dias} dias`)
// Caio devolve "O Guarani" em 7 dias

// Faltou a parte do Emprestimo:
// const semDono: Livro & Emprestimo = { titulo: 'Iracema', autor: 'José de Alencar' }
// erro: ... is missing the following properties from type 'Emprestimo': aluno, dias
