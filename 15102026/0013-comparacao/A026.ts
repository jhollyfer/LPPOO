// A026 · Comparando texto

import { input } from '#core/input.ts'

const cidade = input('Sua cidade: ') // digite: Tabatinga

console.log(cidade === 'Tabatinga') // true
console.log(cidade === 'tabatinga') // false (maiúscula importa)

// Execute com:
// tsx ~/LPPOO/15102026/0013-comparacao/A026.ts
