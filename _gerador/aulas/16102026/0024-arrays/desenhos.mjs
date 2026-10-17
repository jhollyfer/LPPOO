export const ideia = {
  caixas: [
    {
      id: 'a',
      forma: 'array',
      x: 110,
      y: 0,
      nome: 'notas',
      itens: [8, 6, 9],
      celula: 120,
      estados: { 1: 'amarelo' },
    },
    {
      id: 'b',
      forma: 'array',
      x: 1000,
      y: 0,
      nome: 'notas',
      itens: [8, 7, 9],
      celula: 120,
      estados: { 1: 'verde' },
    },
  ],
  setas: [{ de: 'a', para: 'b', rotulo: 'notas[1] = 7' }],
  notas: [
    { x: 110, y: 250, texto: 'notas[0] é 8: a primeira gaveta é a 0.', cor: 'roxo' },
    { x: 110, y: 290, texto: 'notas.length é 3: são três gavetas.', cor: 'roxo' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'notas = [8, 6, 9]'],
    ['C', 'io', 'Mostrar notas[0] e notas.length'],
    ['D', 'proc', 'notas[1] = 7'],
    ['E', 'io', 'Mostrar notas'],
    ['F', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
  ],
}
