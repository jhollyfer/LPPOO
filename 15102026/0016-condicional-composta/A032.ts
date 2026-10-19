// A032 · Par ou ímpar

import { input } from '#core/input.ts'

const numero = Number(input('Número: '))

if (numero % 2 === 0) {
  console.log('Par')
} else {
  console.log('Ímpar')
}

// Execute com:
// tsx ~/LPPOO/15102026/0016-condicional-composta/A032.ts
