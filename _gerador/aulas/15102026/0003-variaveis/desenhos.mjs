import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: 'começo do jogo', texto: ['let gols = 0'] },
    { rotulo: 'gol!', texto: ['gols = 1'] },
    { rotulo: 'outro gol!', texto: ['gols = 2'] },
  ],
  ['troca', 'troca'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'gols = 0'],
    ['C', 'proc', 'gols = 1'],
    ['D', 'proc', 'gols = 2'],
    ['E', 'io', 'Mostrar gols'],
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
