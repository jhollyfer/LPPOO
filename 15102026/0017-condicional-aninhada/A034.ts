// A034 · Um if dentro de outro

import { input } from '#core/input.ts'

const idade = Number(input('Sua idade: ')) // digite: 20

if (idade >= 18) {
  const resposta = input('Tem habilitação? (sim/nao) ') // digite: sim
  if (resposta === 'sim') {
    console.log('Pode dirigir!')
  } else {
    console.log('Primeiro tire a habilitação.')
  }
} else {
  console.log('Ainda não tem idade para dirigir.')
}
