export const ideia = {
  caixas: [
    {
      id: 'c',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 800,
      titulo: 'os parâmetros de uma função',
      itens: [
        ['precos', 'obrigatório: sem ele, não tem conta'],
        ['desconto = 0', 'padrão: se não mandar, vale 0'],
        ['moeda?', 'opcional: pode ficar de fora'],
        [': void', 'não devolve nada, só mostra'],
      ],
    },
    { id: 't', forma: 'terminal', x: 1110, y: 60, w: 370, texto: ['R$ 30.00', 'R$ 27.00', 'US$ 5.00'] },
  ],
  setas: [{ de: 'c', para: 't', rotulo: 'chamadas' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'totalComDesconto'],
    ['B', 'dec', 'veio desconto?'],
    ['C', 'proc', 'usa o desconto que veio'],
    ['D', 'proc', 'desconto = 0'],
    ['E', 'proc', 'total - total * desconto'],
    ['F', 'io', 'Devolve o total'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
    ['C', 'E'],
    ['D', 'E'],
    ['E', 'F'],
  ],
  caminho: ['A', 'B', 'D', 'E', 'F'],
}
