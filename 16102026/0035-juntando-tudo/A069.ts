// A069 · O programa completo da aula

import { input } from '#core/input.ts'

const notas: number[] = []
let resposta: string

do {
  const nota = Number(input('Digite uma nota: '))
  notas.push(nota)
  resposta = input('Outra nota? (s/n) ')
} while (resposta === 's')

function calcularMedia(valores: number[]): number {
  const soma = valores.reduce((acc, v) => acc + v, 0)
  return soma / valores.length
}

const aprovadas = notas.filter((n) => n >= 6)
const dobradas = notas.map((n) => n * 2)

console.log(`Média: ${calcularMedia(notas).toFixed(2)}`)
console.log(`Notas de 6 para cima: ${aprovadas.join(', ')}`)
console.log(`Dobradas: ${dobradas.join(', ')}`)

for (let i = 0; i < notas.length; i++) {
  console.log(`Nota ${i + 1}: ${notas[i]}`)
}
