// A153 · Partial para atualizar, Readonly para proteger

type Aluno = { matricula: string; nome: string; idade: number }

function atualizar(a: Readonly<Aluno>, mudanca: Partial<Aluno>): Aluno {
  // a.nome = 'x' daria erro: a é Readonly
  return { ...a, ...mudanca }
}

const ana: Aluno = { matricula: 'A01', nome: 'Ana', idade: 15 }
const anaDepois = atualizar(ana, { idade: 16 })

console.log(ana.idade, anaDepois.idade) // 15 16: o original não mudou
