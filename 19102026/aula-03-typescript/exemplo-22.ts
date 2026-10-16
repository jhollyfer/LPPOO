// Aula 03 · Exemplo 22 · Interseção, tuplas e as const
// Notas da turma como tuplas, e um tipo montado por interseção.

const MATERIAS = ['matemática', 'português', 'lppoo'] as const
type Materia = (typeof MATERIAS)[number]

type Nota = [Materia, number] // matéria e valor
type Boletim = { aluno: string } & { notas: Nota[] }

const bia: Boletim = {
  aluno: 'Bia',
  notas: [
    ['matemática', 8],
    ['lppoo', 10],
  ],
}

console.log(`Boletim de ${bia.aluno}`)
for (const [materia, valor] of bia.notas) {
  console.log(`  ${materia.padEnd(11)} ${valor}`)
}
console.log(`Matérias do curso: ${MATERIAS.join(', ')}`)
