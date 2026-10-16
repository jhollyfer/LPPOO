// A058 · Dia da semana

import { input } from '#core/input.ts'

const dia = Number(input('Dia (1 a 7): '))

switch (dia) {
  case 1:
    console.log('Domingo')
    break
  case 7:
    console.log('Sábado')
    break
  default:
    console.log('Dia útil')
}
