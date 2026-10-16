export const ideia = {
  caixas: [
    { id: 'a', x: 110, y: 0, w: 280, cor: 'azul', rotulo: '1 · começa', texto: ['let i = 1'] },
    { id: 'b', x: 480, y: 0, w: 280, cor: 'amarelo', rotulo: '2 · testa', texto: ['i <= 10 ?'] },
    { id: 'c', x: 850, y: 0, w: 280, cor: 'roxo', rotulo: '3 · corpo', texto: ['mostra 7 x i'] },
    { id: 'd', x: 1220, y: 0, w: 270, cor: 'verde', rotulo: '4 · passo', texto: ['i++'] },
    {
      id: 't',
      forma: 'terminal',
      x: 850,
      y: 230,
      w: 280,
      texto: ['7 x 1 = 7', '7 x 2 = 14', '...', '7 x 10 = 70'],
    },
  ],
  setas: [
    { de: 'a', para: 'b' },
    { de: 'b', para: 'c', rotulo: 'true' },
    { de: 'c', para: 'd' },
    {
      pontos: [
        [1355, -16],
        [1355, -56],
        [620, -56],
        [620, -16],
      ],
      rotulo: 'volta para o teste',
    },
    {
      pontos: [
        [990, 166],
        [990, 214],
      ],
    },
  ],
  notas: [{ x: 480, y: 210, texto: ['false? o laço', 'acaba.'], cor: 'vermelho' }],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'i = 1'],
    ['C', 'dec', 'i <= 10?'],
    ['D', 'io', 'Mostrar 7 x i'],
    ['E', 'proc', 'i++'],
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
