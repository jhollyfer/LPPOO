// A138 · O operador in

type Aluno = { nome: string; notas: number[] }
type Professor = { nome: string; disciplina: string }

function descrever(pessoa: Aluno | Professor): string {
  if ('disciplina' in pessoa) {
    return `${pessoa.nome} ensina ${pessoa.disciplina}` // aqui é Professor
  }
  return `${pessoa.nome} tem ${pessoa.notas.length} notas` // aqui é Aluno
}

console.log(descrever({ nome: 'Jhollyfer', disciplina: 'LPPOO' }))
console.log(descrever({ nome: 'Ana', notas: [8, 9] }))
