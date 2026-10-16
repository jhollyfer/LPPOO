// A145 · Tuplas: nome e nota

const nota: [string, number] = ['Ana', 8]
const [nome, valor] = nota
console.log(`${nome} tirou ${valor}`)

// uma lista de tuplas: o ranking da turma
const ranking: [string, number][] = [
  ['Bia', 10],
  ['Caio', 9],
  ['Ana', 8],
]

for (const [aluno, n] of ranking) {
  console.log(`${aluno.padEnd(6)} ${n}`)
}
