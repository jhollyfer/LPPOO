// Exemplo 3 - if dentro de if

import { input } from '#core/input.ts'

const idade = Number(input('Idade: '))

if (idade >= 18) {
  const habilitacao = input('Tem habilitação? (sim/nao) ')
  if (habilitacao === 'sim') {
    console.log('Pode dirigir')
  } else {
    console.log('Precisa tirar a habilitação')
  }
} else {
  console.log('Ainda não pode dirigir')
}
