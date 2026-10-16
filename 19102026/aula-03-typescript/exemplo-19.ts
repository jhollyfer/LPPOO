// Aula 03 · Exemplo 19 · Propriedade opcional e readonly
// Carteirinha: a matrícula não muda, o apelido pode faltar.

type Carteirinha = {
  readonly matricula: string
  nome: string
  apelido?: string
}

function chamar(c: Carteirinha): string {
  return `${c.matricula}: ${c.apelido ?? c.nome}`
}

const ana: Carteirinha = { matricula: 'A01', nome: 'Ana' }
const ze: Carteirinha = { matricula: 'A02', nome: 'José', apelido: 'Zé' }

ana.nome = 'Ana Clara' // pode: nome não é readonly
// ana.matricula = 'A99' daria erro: matricula é readonly

console.log(chamar(ana))
console.log(chamar(ze))
