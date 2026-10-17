// A097 · Uma lista de tuplas: o ranking da turma

const ranking: [string, number][] = [
  ['Bia', 10],
  ['Caio', 9],
  ['Ana', 8],
]

let lugar = 1
for (const [aluno, nota] of ranking) {
  console.log(`${lugar}º ${aluno}: ${nota}`)
  lugar++
}
// 1º Bia: 10
// 2º Caio: 9
// 3º Ana: 8
