export const ideia = {
  caixas: [
    { id: 'a', forma: 'array', x: 110, y: 0, nome: 'notas', itens: [8, 10, 6, 9], celula: 100 },
    {
      id: 'b',
      forma: 'array',
      x: 1000,
      y: 0,
      nome: 'copia',
      itens: [8, 10, 6, 9],
      celula: 100,
      cor: 'verde',
    },
    {
      id: 'c',
      forma: 'array',
      x: 1000,
      y: 300,
      nome: 'copia',
      itens: [6, 8, 9, 10],
      celula: 100,
      cor: 'verde',
    },
    { id: 't', forma: 'terminal', x: 110, y: 300, w: 520, texto: ['6 | 8 | 9 | 10'] },
  ],
  setas: [
    { de: 'a', para: 'b', rotulo: 'slice: tira a foto' },
    { de: 'b', para: 'c', rotulo: 'sort: arruma a foto', lados: 'bc' },
    { de: 'c', para: 't', rotulo: "join(' | ')" },
  ],
  notas: [
    {
      x: 110,
      y: 560,
      texto: 'O diário continua [8, 10, 6, 9]. Quem mudou foi a copia.',
      cor: 'roxo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'copia = notas.slice()'],
    ['C', 'proc', 'copia.sort((a, b) => a - b)'],
    ['D', 'io', "Mostrar copia.join(' | ')"],
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
