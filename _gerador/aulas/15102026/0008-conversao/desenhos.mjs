import { fileira } from '../../../tipos/ideia.mjs'

export const ideia = {
  ...fileira(
    0,
    [
      { rotulo: 'o input devolve', texto: ["'17'"], cor: 'amarelo' },
      { rotulo: 'converte', texto: ["Number('17')"] },
      { rotulo: 'número', texto: ['17'] },
    ],
    ['entra', 'sai'],
  ),
  notas: [
    { x: 130, y: 210, texto: "'17' + 1  vira  '171'", cor: 'vermelho' },
    { x: 1150, y: 210, texto: '17 + 1  vira  18', cor: 'verde' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler texto'],
    ['C', 'proc', 'idade = Number(texto)'],
    ['D', 'io', 'Mostrar idade + 1'],
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
      codigo: "const texto = input('Sua idade: ')",
      grava: [['texto', "'17'", { const: true }]],
      sai: 'Sua idade: 17',
    },
    { codigo: 'const idade = Number(texto)', grava: [['idade', '17', { const: true }]] },
    { codigo: 'console.log(idade + 1)', conta: ['idade + 1', '18'], sai: '18' },
  ],
}
