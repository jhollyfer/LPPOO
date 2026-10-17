export const ideia = {
  caixas: [
    { id: 'a1', forma: 'array', x: 110, y: 0, nome: 'notas', itens: [8, 4, 9, 5], celula: 90 },
    {
      id: 'b1',
      forma: 'array',
      x: 940,
      y: 54,
      itens: [9, 5, 10, 6],
      celula: 100,
      cor: 'verde',
      indices: false,
    },
    {
      id: 'a2',
      forma: 'array',
      x: 110,
      y: 230,
      nome: 'notas',
      itens: [8, 4, 9, 5],
      celula: 90,
      estados: { 1: 'apagado', 3: 'apagado' },
    },
    { id: 'b2', forma: 'array', x: 940, y: 284, itens: [8, 9], celula: 100, cor: 'verde', indices: false },
    { id: 'a3', forma: 'array', x: 110, y: 460, nome: 'notas', itens: [8, 4, 9, 5], celula: 90 },
    { id: 'c3', forma: 'caixinha', x: 940, y: 440, nome: 'soma', valor: '26', tipo: 'number', cor: 'verde' },
  ],
  setas: [
    { de: 'a1:3', para: 'b1', rotulo: 'map: n + 1' },
    { de: 'a2:3', para: 'b2', rotulo: 'filter: n >= 6' },
    { de: 'a3:3', para: 'c3', rotulo: 'reduce: acc + n' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início do map'],
    ['B', 'proc', 'novo = []'],
    ['C', 'dec', 'ainda tem nota?'],
    ['D', 'proc', 'novo.push(nota + 1)'],
    ['E', 'io', 'Devolve novo'],
    ['F', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['D', 'C'],
    ['C', 'E', 'Não'],
    ['E', 'F'],
  ],
}
