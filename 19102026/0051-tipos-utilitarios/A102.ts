// A102 · Record: uma nota para cada matéria

type Materia = 'português' | 'matemática' | 'história'

const notas: Record<Materia, number> = { português: 8, matemática: 6, história: 10 }
const materias: Materia[] = ['português', 'matemática', 'história']

for (const m of materias) {
  console.log(`${m}: ${notas[m]}`)
}
// português: 8
// matemática: 6
// história: 10
