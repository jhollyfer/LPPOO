export const ideia = {
  caixas: [
    {
      id: 'a',
      forma: 'array',
      x: 500,
      y: 120,
      nome: 'compras',
      itens: ['arroz', 'feijão', 'farinha'],
      celula: 160,
    },
  ],
  setas: [
    {
      pontos: [
        [110, 190],
        [484, 190],
      ],
      rotulo: 'unshift: entra no começo',
      cor: 'verde',
    },
    {
      pontos: [
        [484, 244],
        [110, 244],
      ],
      rotulo: 'shift: sai do começo',
      cor: 'vermelho',
    },
    {
      pontos: [
        [996, 190],
        [1370, 190],
      ],
      rotulo: 'pop: sai do fim',
      cor: 'vermelho',
    },
    {
      pontos: [
        [1370, 244],
        [996, 244],
      ],
      rotulo: 'push: entra no fim',
      cor: 'verde',
    },
    {
      pontos: [
        [740, 400],
        [740, 330],
      ],
      rotulo: 'splice: tira e põe no meio',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'push farinha'],
    ['C', 'proc', 'unshift café'],
    ['D', 'proc', 'pop'],
    ['E', 'proc', 'shift'],
    ['F', 'proc', 'splice(1, 1, açaí)'],
    ['G', 'io', 'Mostrar compras'],
    ['H', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
    ['F', 'G'],
    ['G', 'H'],
  ],
}
