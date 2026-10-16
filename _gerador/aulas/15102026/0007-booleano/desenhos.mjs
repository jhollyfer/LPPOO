import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = {
  ...fileira(
    0,
    [
      { rotulo: 'você digita', texto: ["'sim'"] },
      { rotulo: 'compara', texto: ["resposta === 'sim'"] },
      { rotulo: 'guarda', texto: ['temAula = true'] },
    ],
    ['vira', 'resposta'],
  ),
  notas: [
    {
      x: 110,
      y: 230,
      texto: 'Digitou outra coisa? A comparação dá false e temAula = false.',
      cor: 'vermelho',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler resposta (sim/nao)'],
    ['C', 'proc', "temAula = resposta === 'sim'"],
    ['D', 'io', 'Mostrar temAula'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
