export const ideia = {
  caixas: [
    {
      id: 'c',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 760,
      titulo: 'switch (p.tipo)',
      itens: [
        ["'pix'", 'tem chave'],
        ["'cartao'", 'tem parcelas'],
        ["'dinheiro'", 'tem recebido e total'],
      ],
      destaque: 0,
    },
    { id: 't', forma: 'terminal', x: 1060, y: 60, w: 420, texto: ['Pix para', 'cantina@cetam'] },
  ],
  setas: [{ de: 'c:0', para: 't', cor: 'verde' }],
  notas: [
    {
      x: 110,
      y: 330,
      texto: 'O tipo decide o formato: no case pix, o TypeScript já sabe que existe p.chave.',
      cor: 'roxo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'descrever(pagamento)'],
    ['B', 'dec', 'p.tipo'],
    ['C', 'io', 'Pix para a chave'],
    ['D', 'io', 'Cartão em Nx'],
    ['E', 'io', 'Troco em reais'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'pix'],
    ['B', 'D', 'cartao'],
    ['B', 'E', 'dinheiro'],
  ],
  caminho: ['A', 'B', 'C'],
}
