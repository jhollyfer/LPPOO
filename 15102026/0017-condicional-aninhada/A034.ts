// A034 · Um if dentro de outro

import { input } from '#core/input.ts'

const idade = Number(input('Sua idade: ')) // digite: 20

if (idade >= 18) {
  // essa pergunta só faz sentido para quem tem 18 ou mais
  const resposta = input('Tem habilitação? (sim/nao) ') // digite: sim
  if (resposta === 'sim') {
    console.log('Pode dirigir!')
  }
} else {
  console.log('Ainda não tem idade para dirigir.')
}

// Execute com:
// tsx ~/LPPOO/15102026/0017-condicional-aninhada/A034.ts
