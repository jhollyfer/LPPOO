// A107 · A biblioteca da escola

interface Livro { readonly codigo: string; titulo: string; diasComAluno?: number }
type Situacao = { tipo: 'disponível' } | { tipo: 'emprestado'; dias: number }

function situacao(l: Livro): Situacao {
  if (l.diasComAluno === undefined) return { tipo: 'disponível' }
  return { tipo: 'emprestado', dias: l.diasComAluno }
}

const livro: Livro = { codigo: 'L02', titulo: 'Iracema', diasComAluno: 3 }
const s = situacao(livro)
if (s.tipo === 'emprestado') console.log(`${livro.titulo}: com um aluno há ${s.dias} dias`)
// Iracema: com um aluno há 3 dias
