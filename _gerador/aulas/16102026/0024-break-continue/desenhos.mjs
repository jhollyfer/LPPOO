export const ideia = {
  caixas: [
    {
      id: 'v',
      forma: 'array',
      x: 110,
      y: 0,
      itens: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      celula: 110,
      indices: false,
      cor: 'cinza',
      estados: {
        0: 'verde',
        1: 'amarelo',
        2: 'verde',
        3: 'amarelo',
        4: 'verde',
        5: 'amarelo',
        6: 'verde',
        7: 'amarelo',
        8: 'vermelho',
        9: 'apagado',
      },
    },
  ],
  setas: [],
  notas: [
    { x: 110, y: 140, texto: 'verde: mostrou na tela', cor: 'verde' },
    { x: 110, y: 180, texto: 'amarelo: par, o continue pulou para a próxima volta', cor: 'roxo' },
    { x: 110, y: 220, texto: 'vermelho: o 9 passou de 7, o break parou o laço', cor: 'vermelho' },
    { x: 110, y: 260, texto: 'apagado: o laço nem chegou no 10', cor: 'cinza' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'i = 1'],
    ['C', 'dec', 'i <= 10?'],
    ['D', 'dec', 'i é par?'],
    ['E', 'dec', 'i > 7?'],
    ['F', 'io', 'Mostrar i'],
    ['G', 'proc', 'i++'],
    ['H', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['D', 'G', 'Sim'],
    ['D', 'E', 'Não'],
    ['E', 'H', 'Sim'],
    ['E', 'F', 'Não'],
    ['F', 'G'],
    ['G', 'C'],
    ['C', 'H', 'Não'],
  ],
}
