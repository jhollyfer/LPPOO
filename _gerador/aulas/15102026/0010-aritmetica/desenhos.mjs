import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = {
  ...fileira(
    0,
    [
      { rotulo: 'sem parênteses', texto: ['8 + 6 / 2'], cor: 'vermelho' },
      { rotulo: 'com parênteses', texto: ['(8 + 6) / 2'] },
      { rotulo: 'média', texto: ['7'] },
    ],
    ['corrige', 'calcula'],
  ),
  notas: [{ x: 130, y: 210, texto: 'dá 11: a divisão vem antes!', cor: 'vermelho' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'nota1 = 8, nota2 = 6'],
    ['C', 'proc', 'media = (nota1 + nota2) / 2'],
    ['D', 'io', 'Mostrar media'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}

export const memoria = {
  passos: [
    {
      codigo: ['const nota1 = 8', 'const nota2 = 6'],
      grava: [
        ['nota1', '8', { const: true }],
        ['nota2', '6', { const: true }],
      ],
    },
    {
      codigo: 'const media = (nota1 + nota2) / 2',
      conta: ['(8 + 6) / 2', '7'],
      grava: [['media', '7', { const: true }]],
    },
    { codigo: 'console.log(media)', sai: '7' },
  ],
}
