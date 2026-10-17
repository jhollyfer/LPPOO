export const ideia = {
  caixas: [
    { id: 'a', forma: 'array', x: 110, y: 0, nome: 'notas', itens: [8, 10, 6, 9], celula: 100 },
    {
      id: 'b',
      forma: 'array',
      x: 1000,
      y: 0,
      nome: 'notas',
      itens: [6, 8, 9, 10],
      celula: 100,
      estados: { 0: 'amarelo', 1: 'amarelo', 2: 'amarelo', 3: 'amarelo' },
    },
    { id: 'c', forma: 'array', x: 110, y: 260, nome: 'notas', itens: [8, 10, 6, 9], celula: 100 },
    {
      id: 'd',
      forma: 'array',
      x: 1000,
      y: 260,
      nome: 'copia',
      itens: [8, 10, 6, 9],
      celula: 100,
      cor: 'verde',
    },
  ],
  setas: [
    { de: 'a', para: 'b', rotulo: 'sort: muda o original' },
    { de: 'c', para: 'd', rotulo: 'slice: devolve um novo' },
  ],
  notas: [
    {
      x: 110,
      y: 500,
      texto: 'Depois do slice, notas continua [8, 10, 6, 9]. Quem você muda é a copia.',
      cor: 'roxo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'copia = notas.slice()'],
    ['C', 'proc', 'copia.sort((a, b) => a - b)'],
    ['D', 'proc', 'copia.reverse()'],
    ['E', 'io', 'Mostrar copia e notas'],
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
