// A036 · Par ou ímpar

import { input } from '#core/input.ts'

const n = Number(input('Número: '))

console.log(n % 2 === 0 ? 'Par' : 'Ímpar')


// Execute com:
// tsx ~/LPPOO/15102026/0018-ternario/A036.ts
