export const ideia = {
  caixas: [
    {
      id: 'p',
      forma: 'cardapio',
      x: 110,
      y: 40,
      w: 440,
      titulo: 'interface Pessoa',
      itens: [['nome', 'string']],
    },
    {
      id: 'a',
      forma: 'cardapio',
      x: 900,
      y: 0,
      w: 580,
      titulo: 'interface Aluno',
      itens: [
        ['nome', 'string (veio de Pessoa)'],
        ['matricula', 'string'],
      ],
      destaque: 1,
    },
  ],
  setas: [{ de: 'p', para: 'a', rotulo: 'extends' }],
  notas: [
    {
      x: 110,
      y: 300,
      texto: 'O Aluno tem tudo da Pessoa e mais a matrícula. Onde pede Pessoa, Aluno serve.',
      cor: 'roxo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'type ou interface?'],
    ['B', 'dec', 'é união, tupla ou função?'],
    ['C', 'proc', 'type'],
    ['D', 'dec', 'vai estender outro formato?'],
    ['E', 'proc', 'interface com extends'],
    ['F', 'proc', 'tanto faz: siga o padrão do projeto'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
    ['D', 'E', 'Sim'],
    ['D', 'F', 'Não'],
  ],
}
