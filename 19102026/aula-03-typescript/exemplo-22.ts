// Aula 03 · Exemplo 22 · Interseção, tuplas e as const
// Notas como tuplas, num tipo montado por interseção.

const MATERIAS = ['matemática', 'lppoo'] as const
type Materia = (typeof MATERIAS)[number]

type Nota = [Materia, number] // matéria e valor
type Boletim = { aluno: string } & { notas: Nota[] }

const bia: Boletim = { aluno: 'Bia', notas: [['matemática', 8], ['lppoo', 10]] }
for (const [materia, valor] of bia.notas) console.log(`${bia.aluno}, ${materia}: ${valor}`)
// Bia, matemática: 8
// Bia, lppoo: 10
console.log(`Matérias: ${MATERIAS.join(', ')}`) // Matérias: matemática, lppoo
