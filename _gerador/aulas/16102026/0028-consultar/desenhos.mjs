export const ideia = {
  caixas: [
    {
      id: 'a',
      forma: 'array',
      x: 110,
      y: 120,
      nome: 'precos',
      itens: [6, 25, 9],
      celula: 120,
      estados: { 1: 'verde' },
    },
    {
      id: 'q',
      forma: 'cardapio',
      x: 760,
      y: 0,
      w: 720,
      titulo: 'perguntas para o array',
      itens: [
        ['includes(25)', 'true'],
        ['indexOf(9)', '2'],
        ['find(p > 20)', '25'],
        ['findIndex(p > 20)', '1'],
        ['some(p > 20)', 'true'],
        ['every(p > 5)', 'true'],
      ],
      destaque: 2,
    },
  ],
  setas: [{ de: 'a', para: 'q', rotulo: 'pergunta' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início do find'],
    ['B', 'dec', 'ainda tem preço?'],
    ['C', 'dec', 'preço > 20?'],
    ['D', 'proc', 'vai para o próximo'],
    ['E', 'io', 'Devolve o preço'],
    ['F', 'io', 'Devolve undefined'],
    ['G', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['C', 'E', 'Sim'],
    ['C', 'D', 'Não'],
    ['D', 'B'],
    ['B', 'F', 'Não'],
    ['E', 'G'],
    ['F', 'G'],
  ],
  // 6 não passa, 25 passa
  caminho: ['A', 'B', 'C', 'D', 'B', 'C', 'E', 'G'],
}
