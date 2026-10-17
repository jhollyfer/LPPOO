export const ideia = {
  caixas: [
    {
      id: 'c',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 820,
      titulo: "pedirPastel('carne')",
      itens: [
        ["sabor = 'carne'", 'obrigatório: veio na chamada'],
        ["tamanho = 'médio'", 'padrão: não veio, vale médio'],
        ['suco = undefined', 'opcional: ficou de fora'],
        [': void', 'não devolve nada, só mostra'],
      ],
    },
    { id: 't', forma: 'terminal', x: 1110, y: 90, w: 560, texto: ['Pastel de carne,', 'médio, sem suco'] },
  ],
  setas: [{ de: 'c', para: 't', rotulo: 'mostra' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', "pedirPastel('carne')"],
    ['B', 'dec', 'veio o tamanho?'],
    ['C', 'proc', 'usa o tamanho que veio'],
    ['D', 'proc', "tamanho = 'médio'"],
    ['E', 'dec', 'suco === undefined?'],
    ['F', 'proc', "extra = 'sem suco'"],
    ['G', 'proc', "extra = 'com suco de ...'"],
    ['H', 'io', 'Mostrar "Pastel de carne, médio, sem suco"'],
    ['I', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
    ['C', 'E'],
    ['D', 'E'],
    ['E', 'F', 'Sim'],
    ['E', 'G', 'Não'],
    ['F', 'H'],
    ['G', 'H'],
    ['H', 'I'],
  ],
  caminho: ['A', 'B', 'D', 'E', 'F', 'H', 'I'],
}
