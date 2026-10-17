export const ideia = {
  caixas: [
    {
      id: 't',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 520,
      titulo: 'type Turno',
      itens: [
        ["'manhã'", 'pode'],
        ["'tarde'", 'pode'],
        ["'noite'", 'pode'],
      ],
      destaque: 2,
    },
    { id: 'm', x: 1000, y: 110, w: 420, cor: 'vermelho', rotulo: 'alguém digita', texto: ["'madrugada'"] },
    { forma: 'marca', tipo: 'errado', x: 770, y: 140, tamanho: 50 },
  ],
  setas: [{ de: 'm', para: 't', cor: 'vermelho', rotulo: 'não está na lista' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', "horario('noite')"],
    ['B', 'dec', 'o valor é um dos da lista?'],
    ['C', 'proc', 'aceita'],
    ['D', 'io', 'erro antes de rodar'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
  ],
  caminho: ['A', 'B', 'C'],
}
