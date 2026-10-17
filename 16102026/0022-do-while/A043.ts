// A043 · Nota entre 0 e 10

import { input } from '#core/input.ts'

let nota: number

do {
  nota = Number(input('Nota (0 a 10): '))
} while (nota < 0 || nota > 10)

console.log(`Nota registrada: ${nota}`)
