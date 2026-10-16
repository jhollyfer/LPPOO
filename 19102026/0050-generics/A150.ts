// A150 · Filtrar qualquer lista com uma regra

function filtrar<T>(lista: T[], passa: (item: T) => boolean): T[] {
  const resultado: T[] = []
  for (const item of lista) {
    if (passa(item)) resultado.push(item)
  }
  return resultado
}

type Aluno = { nome: string; nota: number }
const turma: Aluno[] = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Caio', nota: 5 },
  { nome: 'Bia', nota: 10 },
]

console.log(filtrar([3, 8, 1, 9], (n) => n > 5)) // [ 8, 9 ]
console.log(filtrar(turma, (a) => a.nota >= 7).map((a) => a.nome)) // [ 'Ana', 'Bia' ]
