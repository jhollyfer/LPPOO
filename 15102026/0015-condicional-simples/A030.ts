// A030 · Dá para o lanche?

import { input } from '#core/input.ts'

const dinheiro = Number(input('Quantos reais você tem? ')) // digite: 10

if (dinheiro >= 8) {
  console.log('Dá para o salgado com suco!') // só roda se tiver 8 ou mais
}

console.log('Bom intervalo!') // roda sempre

// Execute com:
// tsx ~/LPPOO/15102026/0015-condicional-simples/A030.ts
