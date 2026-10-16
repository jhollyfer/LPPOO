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

export const memoria = {
  passos: [
    {
      codigo: "const resposta = input('Tem aula hoje? (sim/nao) ')",
      grava: [['resposta', "'sim'", { const: true }]],
      sai: 'Tem aula hoje? (sim/nao) sim',
    },
    {
      codigo: "const temAula = resposta === 'sim'",
      conta: ["'sim' === 'sim'", 'true'],
      grava: [['temAula', 'true', { const: true }]],
    },
    { codigo: 'let recado', grava: [['recado', 'undefined']] },
    { codigo: 'recado = null', grava: [['recado', 'null']] },
  ],
}
