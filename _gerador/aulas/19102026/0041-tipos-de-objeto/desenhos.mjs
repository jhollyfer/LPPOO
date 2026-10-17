export const ideia = {
  caixas: [
    {
      id: 't',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 460,
      titulo: 'type Aluno (a ficha)',
      itens: [
        ['nome', 'string'],
        ['notas', 'number[]'],
      ],
    },
    {
      id: 'a',
      forma: 'cardapio',
      x: 900,
      y: 0,
      w: 460,
      titulo: 'ana (preenchida)',
      itens: [
        ['nome', "'Ana'"],
        ['notas', '[8, 7, 9]'],
      ],
    },
  ],
  setas: [{ de: 't', para: 'a', rotulo: 'preenche' }],
  notas: [{ x: 900, y: 340, texto: 'ana.nome é Ana. ana.notas é [8, 7, 9].', cor: 'roxo' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'turma: Aluno[] = [ana, bia]'],
    ['C', 'dec', 'ainda tem aluno?'],
    ['D', 'proc', 'media de aluno.notas'],
    ['E', 'io', 'Mostrar aluno.nome e média'],
    ['F', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['D', 'E'],
    ['E', 'C'],
    ['C', 'F', 'Não'],
  ],
}
