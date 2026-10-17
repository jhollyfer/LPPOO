// Aula 03 · Exemplo 24 · Tipos utilitários
// Cadastro sem matrícula (Omit), mudança (Partial) e vagas (Record).

type Turno = 'manhã' | 'tarde' | 'noite'
type Aluno = { matricula: string; nome: string; turno: Turno }

const dados: Omit<Aluno, 'matricula'> = { nome: 'Ana', turno: 'manhã' }
const mudanca: Partial<Aluno> = { turno: 'noite' }
const vagas: Record<Turno, number> = { manhã: 2, tarde: 1, noite: 3 }

const ana: Aluno = { matricula: 'A1', ...dados, ...mudanca }
console.log(ana, vagas.noite) // { matricula: 'A1', nome: 'Ana', turno: 'noite' } 3
