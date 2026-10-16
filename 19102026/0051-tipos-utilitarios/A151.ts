// A151 · Omit, Pick e Partial a partir de Aluno

type Aluno = { matricula: string; nome: string; idade: number }

type AlunoNovo = Omit<Aluno, 'matricula'>
type Ficha = Pick<Aluno, 'nome'>
type Mudanca = Partial<Aluno>

const novo: AlunoNovo = { nome: 'Bia', idade: 16 }
const mudanca: Mudanca = { idade: 17 }
const bia: Aluno = { matricula: 'A27', ...novo, ...mudanca }
const ficha: Ficha = { nome: bia.nome }

console.log(bia)
console.log(ficha)
