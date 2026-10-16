export const ideia = {
  caixas: [
    { id: 'a', x: 110, y: 0, w: 400, cor: 'azul', rotulo: 'média boa?', texto: ['media >= 6', 'true'] },
    {
      id: 'b',
      x: 110,
      y: 210,
      w: 400,
      cor: 'azul',
      rotulo: 'frequência boa?',
      texto: ['frequencia >= 75', 'false'],
    },
    {
      id: 'e',
      x: 1010,
      y: 0,
      w: 480,
      cor: 'vermelho',
      rotulo: '&& (E)',
      texto: ['false', 'precisa dos dois'],
    },
    { id: 'ou', x: 1010, y: 210, w: 480, cor: 'verde', rotulo: '|| (OU)', texto: ['true', 'basta um'] },
  ],
  setas: [
    { de: 'a', para: 'e' },
    { de: 'b', para: 'e' },
    { de: 'a', para: 'ou' },
    { de: 'b', para: 'ou' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'media = 7, frequencia = 60'],
    ['C', 'proc', 'aprovado = media >= 6 && frequencia >= 75'],
    ['D', 'io', 'Mostrar aprovado'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
