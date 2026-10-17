// A067 · As notas dos jurados do boi

import { input } from '#core/input.ts'

function somar(valores: number[]): number {
  return valores.reduce((acc, v) => acc + v, 0)
}

const notas: number[] = []
let resposta // a caixa nasce vazia: o do pergunta antes de conferir

do {
  notas.push(Number(input('Nota do jurado: '))) // digite: 9.5, depois 10, depois 9
  resposta = input('Mais um jurado? (s/n) ') // digite: s, s, n
} while (resposta === 's')

const notasDez = notas.filter((n) => n === 10)

console.log(`Total do boi: ${somar(notas)}`) // Total do boi: 28.5
console.log(`Quantas notas 10: ${notasDez.length}`) // Quantas notas 10: 1
console.log(`Notas: ${notas.join(' | ')}`) // Notas: 9.5 | 10 | 9
