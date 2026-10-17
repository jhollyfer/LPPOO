// A097 · Uma lista de tuplas: o ranking da turma

const ranking: [string, number][] = [['Bia', 10], ['Caio', 9], ['Ana', 8]]

for (const [aluno, nota] of ranking) {
  console.log(`${aluno}: ${nota}`)
}
// Bia: 10
// Caio: 9
// Ana: 8
