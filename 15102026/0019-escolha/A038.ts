// A038 · Tamanho do açaí

import { input } from '#core/input.ts'

const tamanho = input('Tamanho (P ou G): ').toUpperCase() // digite: g

switch (tamanho) {
  case 'P':
    console.log('Açaí pequeno: R$ 10')
    break
  case 'G':
    console.log('Açaí grande: R$ 18') // o g virou G e caiu aqui
    break
}

// Execute com:
// tsx ~/LPPOO/15102026/0019-escolha/A038.ts
