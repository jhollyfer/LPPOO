export const ideia = {
  caixas: [
    {
      id: 'a',
      forma: 'cardapio',
      x: 110,
      y: 200,
      w: 440,
      titulo: 'Aluno',
      itens: [
        ['matricula', 'string'],
        ['nome', 'string'],
        ['idade', 'number'],
      ],
    },
    {
      id: 'o',
      forma: 'cardapio',
      x: 920,
      y: 0,
      w: 560,
      titulo: "Omit<Aluno, 'matricula'>",
      itens: [
        ['nome', 'string'],
        ['idade', 'number'],
      ],
    },
    {
      id: 'p',
      forma: 'cardapio',
      x: 920,
      y: 250,
      w: 560,
      titulo: "Pick<Aluno, 'nome'>",
      itens: [['nome', 'string']],
    },
    {
      id: 'q',
      forma: 'cardapio',
      x: 920,
      y: 440,
      w: 560,
      titulo: 'Partial<Aluno>',
      itens: [
        ['matricula?', 'string'],
        ['nome?', 'string'],
        ['idade?', 'number'],
      ],
    },
  ],
  setas: [
    { pontos: [[560, 326], [730, 326], [730, 98], [910, 98]] },
    { pontos: [[560, 326], [910, 326]] },
    { pontos: [[560, 326], [730, 326], [730, 566], [910, 566]] },
  ],
  notas: [{ x: 110, y: 560, texto: 'Um tipo só, três variações.', cor: 'roxo' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'quero uma variação de Aluno'],
    ['B', 'dec', 'só algumas propriedades?'],
    ['C', 'proc', 'Pick'],
    ['D', 'dec', 'todas, menos algumas?'],
    ['E', 'proc', 'Omit'],
    ['F', 'dec', 'todas, mas opcionais?'],
    ['G', 'proc', 'Partial'],
    ['H', 'proc', 'Readonly (só leitura)'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
    ['D', 'E', 'Sim'],
    ['D', 'F', 'Não'],
    ['F', 'G', 'Sim'],
    ['F', 'H', 'Não'],
  ],
}
