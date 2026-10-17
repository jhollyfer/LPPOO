export const ideia = {
  caixas: [
    {
      id: 'i',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 640,
      titulo: 'deixe o TypeScript descobrir',
      itens: [
        ['let idade = 17', 'number'],
        ["const turno = 'noite'", "'noite'"],
        ['const notas = [8, 6, 9]', 'number[]'],
        ['return n * 2', 'number'],
      ],
    },
    {
      id: 'a',
      forma: 'cardapio',
      x: 840,
      y: 0,
      w: 640,
      titulo: 'escreva você',
      itens: [
        ['(n: number)', 'parâmetro'],
        ['nomes: string[] = []', 'array vazio'],
        ['let apelido: string', 'sem valor'],
      ],
    },
  ],
  setas: [],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Vou escrever o tipo?'],
    ['B', 'dec', 'é parâmetro de função?'],
    ['C', 'dec', 'começa com um valor?'],
    ['D', 'dec', 'o valor é um array vazio?'],
    ['E', 'proc', 'escreva o tipo'],
    ['F', 'proc', 'deixe o TypeScript inferir'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'E', 'Sim'],
    ['B', 'C', 'Não'],
    ['C', 'D', 'Sim'],
    ['C', 'E', 'Não'],
    ['D', 'E', 'Sim'],
    ['D', 'F', 'Não'],
  ],
}
