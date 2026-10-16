// A117 · Uma função que só precisa do nome

type ComNome = { nome: string }

function cracha(pessoa: ComNome): string {
  return `[ ${pessoa.nome.toUpperCase()} ]`
}

const aluna = { nome: 'Bia', matricula: 'A27' }
const professor = { nome: 'Jhollyfer', disciplina: 'LPPOO' }

console.log(cracha(aluna)) // [ BIA ]
console.log(cracha(professor)) // [ JHOLLYFER ]
