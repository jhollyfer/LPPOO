import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: 'tinha', texto: ['saldo = 100'] },
    { rotulo: 'gastou e recarregou', texto: ['saldo -= 30', 'saldo += 20'] },
    { rotulo: 'ficou', texto: ['saldo = 90'] },
  ],
  ['muda', 'sobra'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'saldo = 100'],
    ['C', 'proc', 'saldo -= 30'],
    ['D', 'proc', 'saldo += 20'],
    ['E', 'io', 'Mostrar saldo'],
    ['F', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
  ],
}

export const memoria = {
  passos: [
    { codigo: 'let saldo = 100', grava: [['saldo', '100']] },
    { codigo: 'saldo -= 30', grava: [['saldo', '70']] },
    { codigo: 'saldo += 20', grava: [['saldo', '90']] },
    { codigo: 'console.log(saldo)', sai: '90' },
  ],
}
