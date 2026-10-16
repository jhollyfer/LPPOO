import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = fileira(
  0,
  [
    { rotulo: 'a Maria digita', texto: ["'  maria  '"] },
    { rotulo: '.trim()', texto: ["'maria'"] },
    { rotulo: '.toUpperCase()', texto: ["'MARIA'"] },
  ],
  ['limpa', 'aumenta'],
)

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler nome'],
    ['C', 'proc', 'limpo = nome.trim()'],
    ['D', 'io', 'Mostrar limpo.toUpperCase()'],
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
      codigo: "const nome = input('Seu nome: ')",
      grava: [['nome', "'  maria  '", { const: true }]],
      sai: 'Seu nome:   maria  ',
    },
    { codigo: 'const limpo = nome.trim()', grava: [['limpo', "'maria'", { const: true }]] },
    { codigo: 'console.log(limpo.toUpperCase())', conta: ['limpo.toUpperCase()', "'MARIA'"], sai: 'MARIA' },
  ],
}
