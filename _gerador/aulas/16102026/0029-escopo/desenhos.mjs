export const ideia = {
  caixas: [
    {
      id: 'g',
      x: 110,
      y: 0,
      w: 960,
      h: 380,
      cor: 'cinza',
      rotulo: 'o arquivo inteiro (global)',
      texto: ["escola = 'CETAM'"],
    },
    {
      id: 'f',
      x: 420,
      y: 160,
      w: 600,
      h: 200,
      cor: 'roxo',
      rotulo: 'dentro de saudar',
      texto: ["nome = 'Ana'", "mensagem = 'Oi, Ana! ...'"],
    },
    { forma: 'marca', tipo: 'certo', x: 1130, y: 60, tamanho: 50 },
    { forma: 'marca', tipo: 'errado', x: 1130, y: 230, tamanho: 50 },
  ],
  setas: [],
  notas: [
    { x: 1200, y: 80, texto: ['de dentro da função,', 'enxerga a escola'], cor: 'verde' },
    { x: 1200, y: 250, texto: ['de fora, não enxerga', 'a mensagem'], cor: 'vermelho' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', "escola = 'CETAM' (global)"],
    ['C', 'io', "Chamar saudar('Ana')"],
    ['D', 'proc', 'nascem nome e mensagem'],
    ['E', 'io', 'Mostrar mensagem'],
    ['F', 'proc', 'saudar acaba: nome e mensagem somem'],
    ['G', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F'],
    ['F', 'G'],
  ],
  caminho: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
}
