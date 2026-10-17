// Aula 01 · Exemplo 09 · Switch: o suco da cantina
import { input } from '#core/input.ts'

switch (input('Suco (1 cupuaçu, 2 taperebá): ')) { // é texto: '1' e '2'
  case '1':
    console.log('Suco de cupuaçu: R$ 6.00')
    break
  case '2':
    console.log('Suco de taperebá: R$ 5.00')
    break
  default:
    console.log('Opção inválida')
}
