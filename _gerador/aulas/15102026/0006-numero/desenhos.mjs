import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: 'preço do açaí', texto: ['preco = 12.5'] },
    { rotulo: '.toFixed(2)', texto: ["'12.50'"] },
    { rotulo: 'terminal', texto: ['Açaí: R$ 12.50'] },
  ],
  ['2 casas', 'mostra'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'preco = 12.5'],
    ['C', 'proc', 'texto = preco.toFixed(2)'],
    ['D', 'io', 'Mostrar "Açaí: R$ 12.50"'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
