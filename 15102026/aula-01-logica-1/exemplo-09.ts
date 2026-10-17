// Aula 01 · Exemplo 09 · Ternário e switch
// Cantina: o código do suco escolhe o sabor, e o ternário decide o gelo.

import { input } from '#core/input.ts'

console.log('1 - Cupuaçu')
console.log('2 - Taperebá')
console.log('3 - Graviola')
const opcao = Number(input('Qual suco? '))

switch (opcao) {
  case 1:
    console.log('Suco de cupuaçu: R$ 6.00')
    break
  case 2:
    console.log('Suco de taperebá: R$ 5.00')
    break
  case 3:
    console.log('Suco de graviola: R$ 7.00')
    break
  default:
    console.log('Opção inválida')
}

const comGelo = input('Com gelo? (sim/nao) ')
const gelo = comGelo === 'sim' ? 'com gelo' : 'sem gelo'
console.log(`Seu suco vai ${gelo}.`)
