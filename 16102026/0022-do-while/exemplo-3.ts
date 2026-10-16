// Exemplo 3 - Menu que repete até escolher sair

import { input } from '#core/input.ts'

let opcao: string

do {
  opcao = input('1 jogar, 0 sair: ')
  if (opcao === '1') {
    console.log('Bora jogar!')
  }
} while (opcao !== '0')

console.log('Até a próxima.')
