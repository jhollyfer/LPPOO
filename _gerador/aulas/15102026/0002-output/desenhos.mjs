import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: 'o valor', texto: ['media = 7.5'] },
    { rotulo: 'template string', texto: ['`Sua média é ${media}`'] },
    { rotulo: 'terminal', texto: ['Sua média é 7.5'] },
  ],
  ['encaixa', 'console.log'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'media = 7.5'],
    ['C', 'io', 'Mostrar "Sua média é 7.5"'],
    ['D', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
  ],
}
