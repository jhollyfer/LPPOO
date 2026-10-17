// Aula 01 · Exemplo 06 · Objeto Math
// Excursão: cada van leva 15 alunos e a turma tem 32.

const alunos = 32
const lugaresPorVan = 15

console.log(`Vans para levar todo mundo: ${Math.ceil(alunos / lugaresPorVan)}`) // 3
console.log(`Vans que vão lotadas: ${Math.floor(alunos / lugaresPorVan)}`) // 2
console.log(`Arredondando 2.6: ${Math.round(2.6)}`) // 3

const sorteado = Math.floor(Math.random() * 32) + 1
console.log(`Aluno sorteado para sentar na frente: número ${sorteado}`)
