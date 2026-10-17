export const ideia = {
  caixas: [
    {
      id: 'c',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 640,
      titulo: 'switch (p.tipo)',
      itens: [
        ["'pix'", 'tem chave'],
        ["'cartao'", 'tem parcelas'],
      ],
      destaque: 0,
    },
    { id: 't', forma: 'terminal', x: 1060, y: 60, w: 420, texto: ['Pix para', 'cantina@cetam'] },
  ],
  setas: [{ de: 'c:0', para: 't', cor: 'verde' }],
  notas: [
    {
      x: 110,
      y: 260,
      texto: 'O tipo decide o formato: no case pix, o TypeScript já sabe que existe p.chave.',
      cor: 'roxo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', "descrever({ tipo: 'pix', ... })"],
    ['B', 'dec', 'p.tipo'],
    ['C', 'io', 'Pix para cantina@cetam'],
    ['D', 'io', 'Cartão em Nx'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'pix'],
    ['B', 'D', 'cartao'],
  ],
  caminho: ['A', 'B', 'C'],
}
