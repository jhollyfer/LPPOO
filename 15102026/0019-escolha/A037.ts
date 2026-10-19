// A037 · O default pega o resto

import { input } from '#core/input.ts'

const cor = input('Cor do semáforo: ') // digite: amarelo

switch (cor) {
  case 'verde':
    console.log('Pode seguir')
    break
  default:
    console.log('Atenção: pare o carro') // amarelo, vermelho ou outra cor
}

// Execute com:
// tsx ~/LPPOO/15102026/0019-escolha/A037.ts
