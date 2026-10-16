import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: 'o João tem', texto: ['idade = 17'] },
    { rotulo: 'o segurança pergunta', texto: ['idade >= 18'] },
    { rotulo: 'resposta', texto: ['false'] },
  ],
  ['compara', 'responde'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler idade'],
    ['C', 'proc', 'maiorDeIdade = idade >= 18'],
    ['D', 'io', 'Mostrar maiorDeIdade'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
