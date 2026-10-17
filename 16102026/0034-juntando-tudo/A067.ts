// A067 · As notas dos jurados do boi

import { input } from '#core/input.ts'

const notas: number[] = []
let resposta // a caixa nasce vazia: o do pergunta antes de conferir

do {
  notas.push(Number(input('Nota do jurado: '))) // digite: 9.5, depois 10, depois 9
  resposta = input('Mais um jurado? (s/n) ') // digite: s, s, n
} while (resposta === 's')

const total = notas.reduce((acc, v) => acc + v, 0)
console.log(`Total do boi: ${total}`) // Total do boi: 28.5
console.log(`Notas 10: ${notas.filter((n) => n === 10).length}`) // Notas 10: 1
console.log(`Notas: ${notas.join(' | ')}`) // Notas: 9.5 | 10 | 9
