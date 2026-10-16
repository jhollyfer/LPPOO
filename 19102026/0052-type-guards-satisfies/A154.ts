// A154 · O porteiro: ehAluno

type Aluno = { nome: string; matricula: string }
type Visitante = { nome: string; motivo: string }

function ehAluno(p: Aluno | Visitante): p is Aluno {
  return 'matricula' in p
}

function entrada(p: Aluno | Visitante): string {
  if (ehAluno(p)) return `${p.nome}, matrícula ${p.matricula}`
  return `${p.nome}, visitante: ${p.motivo}`
}

console.log(entrada({ nome: 'Bia', matricula: 'A27' }))
console.log(entrada({ nome: 'Seu João', motivo: 'reunião' }))
