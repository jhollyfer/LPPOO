// A038 · Menu de opções

import { input } from '#core/input.ts'

console.log('1 - Ver saldo')
console.log('2 - Depositar')
console.log('3 - Sair')
const opcao = input('Escolha: ')

switch (opcao) {
  case '1':
    console.log('Seu saldo é R$ 100,00')
    break
  case '2':
    console.log('Depósito realizado')
    break
  case '3':
    console.log('Até logo!')
    break
  default:
    console.log('Opção inválida')
}
