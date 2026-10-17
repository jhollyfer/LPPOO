export const ideia = {
  caixas: [
    { id: 'faz', x: 110, y: 110, w: 380, cor: 'roxo', rotulo: '1 · faz primeiro', texto: ['pede a nota'] },
    {
      id: 'p',
      x: 620,
      y: 85,
      w: 340,
      h: 200,
      forma: 'losango',
      cor: 'amarelo',
      texto: ['2 · nota fora', 'de 0 a 10 ?'],
    },
    { id: 'n', forma: 'caixinha', x: 1130, y: 75, nome: 'nota', valor: '8', tipo: 'number', cor: 'verde' },
  ],
  setas: [
    { de: 'faz', para: 'p' },
    { de: 'p', para: 'n', rotulo: 'Não', cor: 'verde' },
    {
      pontos: [
        [790, 69],
        [790, 20],
        [300, 20],
        [300, 94],
      ],
      rotulo: 'Sim: digitou 15, pede de novo',
      cor: 'vermelho',
    },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'io', 'Ler nota'],
    ['C', 'dec', 'nota < 0 ou nota > 10?'],
    ['D', 'io', 'Mostrar nota registrada'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'B', 'Sim'],
    ['C', 'D', 'Não'],
    ['D', 'E'],
  ],
  // o caminho do exemplo do texto: 15 (volta) e depois 8
  caminho: ['A', 'B', 'C', 'B', 'C', 'D', 'E'],
}
