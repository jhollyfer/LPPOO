// Aula 03 · Exemplo 23 · Generics
// Uma função que acha o maior de qualquer lista, dada uma regra de valor.

function maior<T>(lista: T[], valor: (item: T) => number): T | undefined {
  let melhor: T | undefined
  for (const item of lista) {
    if (melhor === undefined || valor(item) > valor(melhor)) melhor = item
  }
  return melhor
}

type Aluno = { nome: string; nota: number }
const turma: Aluno[] = [
  { nome: 'Ana', nota: 8 },
  { nome: 'Bia', nota: 10 },
  { nome: 'Caio', nota: 6 },
]

console.log(maior([3, 9, 4], (n) => n)) // 9
console.log(maior(['ana', 'caio', 'bia'], (s) => s.length)) // caio
console.log(maior(turma, (a) => a.nota)?.nome) // Bia
