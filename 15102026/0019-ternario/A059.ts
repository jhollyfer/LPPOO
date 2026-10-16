// A059 · Par ou ímpar

import { input } from '#core/input.ts'

const n = Number(input('Número: '))

console.log(n % 2 === 0 ? 'Par' : 'Ímpar')
