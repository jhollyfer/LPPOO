// A034 · Positivo, negativo ou zero

import { input } from '#core/input.ts'

const n = Number(input('Número: '))

if (n > 0) {
  console.log('Positivo')
} else if (n < 0) {
  console.log('Negativo')
} else {
  console.log('Zero')
}
