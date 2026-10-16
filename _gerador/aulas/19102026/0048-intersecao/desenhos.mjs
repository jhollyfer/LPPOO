export const ideia = {
  caixas: [
    {
      id: 'a',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 400,
      titulo: 'Aluno',
      itens: [
        ['nome', 'string'],
        ['idade', 'number'],
      ],
    },
    { id: 'c', forma: 'cardapio', x: 110, y: 290, w: 400, titulo: 'ComId', itens: [['id', 'number']] },
    {
      id: 'r',
      forma: 'cardapio',
      x: 960,
      y: 60,
      w: 520,
      titulo: 'Aluno & ComId',
      itens: [
        ['nome', 'string'],
        ['idade', 'number'],
        ['id', 'number'],
      ],
    },
  ],
  setas: [
    { de: 'a', para: 'r', rotulo: '&' },
    { de: 'c', para: 'r', rotulo: '&' },
  ],
  notas: [
    { x: 110, y: 510, texto: 'A interseção soma as duas listas: o objeto precisa ter tudo.', cor: 'roxo' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'objeto do tipo Aluno & ComId'],
    ['B', 'dec', 'tem nome e idade?'],
    ['C', 'dec', 'tem id?'],
    ['D', 'proc', 'aceito'],
    ['E', 'io', 'erro: falta parte de Aluno'],
    ['F', 'io', 'erro: falta o id'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'E', 'Não'],
    ['C', 'D', 'Sim'],
    ['C', 'F', 'Não'],
  ],
  caminho: ['A', 'B', 'C', 'D'],
}
