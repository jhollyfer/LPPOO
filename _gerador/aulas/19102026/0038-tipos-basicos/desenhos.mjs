export const ideia = {
  caixas: [
    {
      id: 'p',
      forma: 'cardapio',
      x: 110,
      y: 0,
      w: 460,
      titulo: 'os primitivos',
      itens: [
        ['string', "'Ana'"],
        ['number', '17'],
        ['boolean', 'true'],
        ['null', 'nada, de propósito'],
        ['undefined', 'ainda vazio'],
      ],
    },
    {
      id: 'a',
      x: 760,
      y: 0,
      w: 720,
      cor: 'vermelho',
      rotulo: 'any: sem etiqueta e sem fiscal',
      texto: ['aceita tudo e deixa fazer tudo'],
    },
    {
      id: 'u',
      x: 760,
      y: 180,
      w: 720,
      cor: 'amarelo',
      rotulo: 'unknown: caixa lacrada',
      texto: ['aceita tudo, mas confere antes de usar'],
    },
    {
      id: 'n',
      x: 760,
      y: 360,
      w: 720,
      cor: 'cinza',
      rotulo: 'never: nunca acontece',
      texto: ['nenhum valor cabe aqui'],
    },
  ],
  setas: [],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'tamanho(valor: unknown)'],
    ['B', 'dec', "typeof valor === 'string'?"],
    ['C', 'io', 'devolve valor.length'],
    ['D', 'dec', "typeof valor === 'number'?"],
    ['E', 'io', 'devolve quantos dígitos'],
    ['F', 'io', 'devolve 0'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['B', 'D', 'Não'],
    ['D', 'E', 'Sim'],
    ['D', 'F', 'Não'],
  ],
  caminho: ['A', 'B', 'C'],
}
