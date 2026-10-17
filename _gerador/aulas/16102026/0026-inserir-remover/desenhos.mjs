export const ideia = {
  caixas: [
    {
      id: 'a',
      forma: 'array',
      x: 560,
      y: 120,
      nome: 'compras',
      itens: ['arroz', 'feijão'],
      celula: 160,
    },
  ],
  setas: [
    {
      pontos: [
        [110, 190],
        [544, 190],
      ],
      rotulo: 'unshift: café entra no começo',
      cor: 'verde',
    },
    {
      pontos: [
        [544, 244],
        [110, 244],
      ],
      rotulo: 'shift: café sai do começo',
      cor: 'vermelho',
    },
    {
      pontos: [
        [896, 190],
        [1330, 190],
      ],
      rotulo: 'pop: farinha sai do fim',
      cor: 'vermelho',
    },
    {
      pontos: [
        [1330, 244],
        [896, 244],
      ],
      rotulo: 'push: farinha entra no fim',
      cor: 'verde',
    },
    {
      pontos: [
        [800, 400],
        [800, 330],
      ],
      rotulo: "splice(1, 1, 'açaí'): troca no meio",
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
