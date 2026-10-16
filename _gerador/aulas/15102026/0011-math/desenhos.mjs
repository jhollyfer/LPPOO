import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: 'a excursão', texto: ['32 alunos', '15 por van'] },
    { rotulo: 'divide', texto: ['32 / 15 = 2.13'] },
    { rotulo: 'Math.ceil', texto: ['3 vans'] },
  ],
  ['conta', 'para cima'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'alunos = 32, porVan = 15'],
    ['C', 'proc', 'vans = Math.ceil(alunos / porVan)'],
    ['D', 'io', 'Mostrar vans'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
