export const ideia = {
  caixas: [
    {
      id: 't',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 760,
      titulo: 'type Aluno',
      itens: [
        ['readonly matricula', 'lê, mas não troca'],
        ['nome', 'obrigatório, pode trocar'],
        ['apelido?', 'opcional: pode nem existir'],
      ],
    },
    {
      id: 'c',
      forma: 'caixinha',
      x: 1080,
      y: 0,
      nome: 'matricula',
      valor: "'A01'",
      tipo: 'readonly',
      cadeado: true,
    },
  ],
  setas: [{ de: 't', para: 'c', rotulo: 'trancada' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'chamar(aluno)'],
    ['B', 'dec', 'aluno.apelido existe?'],
    ['C', 'io', 'devolve o apelido'],
    ['D', 'io', 'devolve o nome'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
  ],
  caminho: ['A', 'B', 'D'],
}
