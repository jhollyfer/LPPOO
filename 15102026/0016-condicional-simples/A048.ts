// A048 · Número negativo

import { input } from '#core/input.ts'

const numero = Number(input('Digite um número: '))

if (numero < 0) {
  console.log('O número é negativo')
}
