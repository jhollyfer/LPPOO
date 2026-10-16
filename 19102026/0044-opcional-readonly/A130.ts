// A130 · Matrícula trancada, apelido opcional

type Aluno = {
  readonly matricula: string
  nome: string
  apelido?: string
}

const ana: Aluno = { matricula: 'A01', nome: 'Ana' }
const ze: Aluno = { matricula: 'A02', nome: 'José', apelido: 'Zé' }

function chamar(a: Aluno): string {
  return a.apelido ?? a.nome
}

console.log(chamar(ana))
console.log(chamar(ze))
ana.nome = 'Ana Clara'
console.log(ana.nome)
