// A127 · Aluno estende Pessoa

interface Pessoa {
  nome: string
}

interface Aluno extends Pessoa {
  matricula: string
}

const bia: Aluno = { nome: 'Bia', matricula: 'A27' }

function apresentar(p: Pessoa): string {
  return `Olá, ${p.nome}!`
}

console.log(apresentar(bia))
console.log(bia.matricula)
