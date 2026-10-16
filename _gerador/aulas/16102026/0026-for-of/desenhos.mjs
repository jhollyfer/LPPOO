export const ideia = {
  caixas: [
    { id: 'a', forma: 'array', x: 110, y: 40, nome: 'nomes', itens: ['Ana', 'Bia', 'Caio'], celula: 140 },
    {
      id: 't',
      forma: 'terminal',
      x: 1000,
      y: 30,
      w: 400,
      texto: ['Presente, Ana!', 'Presente, Bia!', 'Presente, Caio!'],
    },
  ],
  setas: [{ de: 'a', para: 't', rotulo: 'um por um' }],
  notas: [
    {
      x: 110,
      y: 290,
      texto: 'Volta 1: nome = Ana.  Volta 2: nome = Bia.  Volta 3: nome = Caio.',
      cor: 'roxo',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'dec', 'ainda tem nome na lista?'],
    ['C', 'proc', 'nome = o próximo'],
    ['D', 'io', 'Mostrar "Presente, nome!"'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C', 'Sim'],
    ['C', 'D'],
    ['D', 'B'],
    ['B', 'E', 'Não'],
  ],
}
