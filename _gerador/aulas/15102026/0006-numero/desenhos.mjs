export const ideia = {
  caixas: [
    { id: 'p', forma: 'caixinha', x: 110, y: 0, nome: 'preco', valor: '12.5', tipo: 'number' },
    {
      id: 'tx',
      forma: 'caixinha',
      x: 600,
      y: 0,
      nome: 'texto',
      valor: "'12.50'",
      tipo: 'string',
      cor: 'roxo',
    },
    { id: 't', forma: 'terminal', x: 1100, y: 60, w: 380, texto: ['Açaí: R$ 12.50'] },
  ],
  setas: [
    { de: 'p', para: 'tx', rotulo: '.toFixed(2)' },
    { de: 'tx', para: 't', rotulo: 'mostra' },
  ],
  notas: [
    { x: 110, y: 250, texto: 'Repare no tipo embaixo: o .toFixed devolve texto, não número.', cor: 'roxo' },
  ],
}

export const fluxograma = {
  nos: [
    ['A', 'inicio', 'Início'],
    ['B', 'proc', 'preco = 12.5'],
    ['C', 'proc', 'texto = preco.toFixed(2)'],
    ['D', 'io', 'Mostrar "Açaí: R$ 12.50"'],
    ['E', 'inicio', 'Fim'],
  ],
  setas: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
  ],
}
