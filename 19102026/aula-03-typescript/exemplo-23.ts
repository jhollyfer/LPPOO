// Aula 03 · Exemplo 23 · Generics
// Acha o maior item de qualquer lista, dada uma regra de valor.

function maior<T>(lista: T[], valor: (item: T) => number): T | undefined {
  let melhor: T | undefined
  for (const item of lista) {
    if (melhor === undefined || valor(item) > valor(melhor)) melhor = item
  }
  return melhor
}

const turma = [{ nome: 'Ana', nota: 8 }, { nome: 'Bia', nota: 10 }]
console.log(maior([3, 9, 4], (n) => n)) // 9
console.log(maior(turma, (a) => a.nota)?.nome) // Bia
