// Aula 03 · Exemplo 24 · Tipos utilitários
// Turma: cadastro sem matrícula (Omit), atualização (Partial) e vagas (Record).

type Turno = 'manhã' | 'tarde' | 'noite'
type Aluno = { matricula: string; nome: string; turno: Turno }

let contador = 0
function cadastrar(dados: Omit<Aluno, 'matricula'>): Aluno {
  contador++
  return { matricula: `A${contador}`, ...dados }
}

function atualizar(a: Aluno, mudanca: Partial<Aluno>): Aluno {
  return { ...a, ...mudanca }
}

const vagas: Record<Turno, number> = { manhã: 2, tarde: 1, noite: 3 }

const ana = cadastrar({ nome: 'Ana', turno: 'manhã' })
const anaNoite = atualizar(ana, { turno: 'noite' })
vagas[anaNoite.turno]--

console.log(ana, anaNoite)
console.log(vagas)
