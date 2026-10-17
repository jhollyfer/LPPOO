export const ideia = {
  caixas: [
    { id: 'n', forma: 'array', x: 110, y: 0, nome: 'notas', itens: [4, 5], celula: 100 },
    {
      id: 'r',
      forma: 'arquivo',
      x: 110,
      y: 230,
      w: 330,
      h: 130,
      nome: 'a receita (callback)',
      texto: ['(n) => n * 2'],
      cor: 'roxo',
    },
    { id: 'm', forma: 'pessoa', x: 640, y: 70, nome: 'o map' },
    {
      id: 'res',
      forma: 'array',
      x: 1060,
      y: 120,
      nome: 'resultado',
      itens: [8, 10],
      celula: 100,
      cor: 'verde',
    },
  ],
  setas: [
    { de: 'n', para: 'm', rotulo: 'os itens' },
    { de: 'r', para: 'm', rotulo: 'a regra' },
    { de: 'm', para: 'res', rotulo: 'devolve' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'notas.map(dobrar)'],
    ['B', 'dec', 'ainda tem nota?'],
    ['C', 'io', 'Chamar dobrar(nota)'],
    ['D', 'proc', 'guardar o resultado no novo array'],
    ['E', 'io', 'Devolver [8, 10]'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['C', 'D'],
    ['D', 'B'],
    ['B', 'E', 'Não'],
  ],
}
