export const ideia = {
  caixas: [
    {
      id: 'i',
      x: 110,
      y: 0,
      w: 560,
      cor: 'azul',
      rotulo: 'imperativo',
      texto: ['passo a passo: for, soma, divide'],
    },
    {
      id: 'f',
      x: 110,
      y: 200,
      w: 560,
      cor: 'roxo',
      rotulo: 'funcional',
      texto: ['funções que transformam: reduce'],
    },
    {
      id: 'o',
      x: 110,
      y: 400,
      w: 560,
      cor: 'verde',
      rotulo: 'orientado a objetos',
      texto: ['objetos com dados e ações: turma.media()'],
    },
    { id: 't', forma: 'terminal', x: 1060, y: 220, w: 300, texto: ['Média: 8'] },
  ],
  setas: [
    { de: 'i', para: 't' },
    { de: 'f', para: 't' },
    { de: 'o', para: 't' },
  ],
  notas: [{ x: 1060, y: 420, texto: ['três caminhos,', 'o mesmo resultado'], cor: 'roxo' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Um pedaço do problema'],
    ['B', 'dec', 'é uma sequência de passos?'],
    ['C', 'proc', 'imperativo: let, if, for'],
    ['D', 'dec', 'é transformar uma lista?'],
    ['E', 'proc', 'funcional: map, filter, reduce'],
    ['F', 'proc', 'objetos: dados + ações juntos'],
    ['G', 'inicio', 'Programa pronto'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
    ['D', 'E', 'Sim'],
    ['D', 'F', 'Não'],
    ['C', 'G'],
    ['E', 'G'],
    ['F', 'G'],
  ],
}
