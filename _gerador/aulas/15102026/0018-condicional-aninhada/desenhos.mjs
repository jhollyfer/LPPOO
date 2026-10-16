export const ideia = {
  caixas: [
    { id: 'ini', x: 110, y: 220, w: 260, cor: 'azul', rotulo: 'a média da Bia', texto: ['media = 5'] },
    { id: 'p1', x: 450, y: 195, w: 300, h: 200, forma: 'losango', cor: 'amarelo', texto: ['media >= 6 ?'] },
    { id: 'p2', x: 850, y: 195, w: 300, h: 200, forma: 'losango', cor: 'amarelo', texto: ['media >= 4 ?'] },
    { id: 'apr', x: 450, y: 0, w: 300, h: 120, cor: 'cinza', texto: ["'Aprovado'"] },
    { id: 'rec', x: 850, y: 0, w: 300, h: 120, cor: 'verde', texto: ["'Recuperação'"] },
    { id: 'rep', x: 1240, y: 235, w: 250, h: 120, cor: 'cinza', texto: ["'Reprovado'"] },
  ],
  setas: [
    { de: 'ini', para: 'p1' },
    { de: 'p1', para: 'apr', rotulo: 'Sim', cor: 'cinza' },
    { de: 'p1', para: 'p2', rotulo: 'Não', cor: 'vermelho' },
    { de: 'p2', para: 'rec', rotulo: 'Sim', cor: 'verde' },
    { de: 'p2', para: 'rep', rotulo: 'Não', cor: 'cinza' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'media = 5'],
    ['C', 'dec', 'media >= 6?'],
    ['D', 'io', 'Mostrar "Aprovado"'],
    ['E', 'dec', 'media >= 4?'],
    ['F', 'io', 'Mostrar "Recuperação"'],
    ['G', 'io', 'Mostrar "Reprovado"'],
    ['H', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D', 'Sim'],
    ['C', 'E', 'Não'],
    ['E', 'F', 'Sim'],
    ['E', 'G', 'Não'],
    ['D', 'H'],
    ['F', 'H'],
    ['G', 'H'],
  ],
  // o caminho do exemplo do texto
  caminho: ['A', 'B', 'C', 'E', 'F', 'H'],
}
